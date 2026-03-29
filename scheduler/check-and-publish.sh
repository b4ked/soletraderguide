#!/bin/bash
# SoleTraderGuide — Scheduled Blog Publisher
# Runs every 30 minutes via cron. Checks for due scheduled drafts and
# invokes Claude Code to run the full blog pipeline for each one.
#
# Crontab entry:
#   */30 * * * * /home/parryh/soletraderguide/scheduler/check-and-publish.sh >> /var/log/stg-publish.log 2>&1

set -euo pipefail

# ─── Config ──────────────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"

if [ -f "$ENV_FILE" ]; then
  # shellcheck source=/dev/null
  source "$ENV_FILE"
fi

REPO="/home/parryh/soletraderguide"
API_URL="http://127.0.0.1:${PORT:-3001}"
LOG_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# ─── Preflight checks ────────────────────────────────────────────────────────

if [ -z "${VPS_API_KEY:-}" ]; then
  echo "[$LOG_DATE] ERROR: VPS_API_KEY not set in $ENV_FILE — exiting"
  exit 1
fi

if ! command -v claude &> /dev/null; then
  echo "[$LOG_DATE] ERROR: claude command not found — install with: npm install -g @anthropic-ai/claude-code"
  exit 1
fi

if [ ! -d "$REPO" ]; then
  echo "[$LOG_DATE] ERROR: Repo not found at $REPO"
  exit 1
fi

# ─── Pull latest repo ────────────────────────────────────────────────────────

echo "[$LOG_DATE] Pulling latest repo..."
cd "$REPO"
git pull origin main 2>&1 || {
  echo "[$LOG_DATE] WARNING: git pull failed — continuing with current state"
}

# ─── Check for due schedules ─────────────────────────────────────────────────

echo "[$LOG_DATE] Checking for due schedules..."

DUE_JSON=$(curl -sf \
  -H "Authorization: Bearer ${VPS_API_KEY}" \
  "${API_URL}/api/schedules/due" 2>&1) || {
  echo "[$LOG_DATE] ERROR: Could not reach scheduler API at ${API_URL} — is stg-scheduler running?"
  exit 1
}

COUNT=$(echo "$DUE_JSON" | python3 -c "import sys,json; print(len(json.load(sys.stdin)))" 2>/dev/null || echo "0")
echo "[$LOG_DATE] Due drafts: $COUNT"

if [ "$COUNT" -eq 0 ]; then
  echo "[$LOG_DATE] Nothing due. Exiting."
  exit 0
fi

# ─── Process each due draft ──────────────────────────────────────────────────

echo "$DUE_JSON" | python3 -c "
import sys, json
data = json.load(sys.stdin)
for s in data:
    print(s['id'] + '|' + s['draftFile'] + '|' + s.get('draftTitle', s['draftFile']))
" | while IFS='|' read -r SCHEDULE_ID DRAFT_FILE DRAFT_TITLE; do

  echo "[$LOG_DATE] ── Processing: $DRAFT_FILE"
  echo "[$LOG_DATE]    Title: $DRAFT_TITLE"
  echo "[$LOG_DATE]    Schedule ID: $SCHEDULE_ID"

  # Verify draft file exists before invoking Claude
  if [ ! -f "$REPO/drafts/$DRAFT_FILE" ]; then
    echo "[$LOG_DATE] ERROR: Draft file not found: drafts/$DRAFT_FILE — skipping"
    continue
  fi

  cd "$REPO"

  # Run Claude Code blog pipeline for this specific draft
  PIPELINE_OUTPUT=$(claude --print \
    "You are the blog pipeline orchestrator for SoleTraderGuide.co.uk.

Read CLAUDE.md at the repo root in full before proceeding.
Run /blog-pipeline on the following specific draft: drafts/${DRAFT_FILE}

IMPORTANT OVERRIDE for Step 0: Skip the automatic draft selection logic.
The draft to process has been pre-selected: drafts/${DRAFT_FILE}
Proceed directly to Step 1 (Write-Up Agent) with this file.

Complete the full pipeline: Write-Up → SEO → QA → Commit/Push → DA Agent.
If the quality gate fails, DO NOT commit. Output QUALITY_GATE_FAIL in your summary." \
    --dangerously-skip-permissions \
    2>&1)

  PIPELINE_EXIT=$?
  echo "$PIPELINE_OUTPUT"

  if [ $PIPELINE_EXIT -eq 0 ] && ! echo "$PIPELINE_OUTPUT" | grep -q "QUALITY_GATE_FAIL"; then
    # Mark as published in scheduler
    COMPLETE_RESULT=$(curl -sf -X POST \
      -H "Authorization: Bearer ${VPS_API_KEY}" \
      "${API_URL}/api/schedules/${SCHEDULE_ID}/complete" 2>&1)
    echo "[$LOG_DATE] PUBLISHED: $DRAFT_FILE"
    echo "[$LOG_DATE] Scheduler updated: $COMPLETE_RESULT"
  else
    echo "[$LOG_DATE] PIPELINE DID NOT COMPLETE for $DRAFT_FILE — not marked as published"
    echo "[$LOG_DATE] Exit code: $PIPELINE_EXIT"
  fi

done

echo "[$LOG_DATE] Check complete."
