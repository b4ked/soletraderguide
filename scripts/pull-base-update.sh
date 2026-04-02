#!/usr/bin/env bash
# pull-base-update.sh
# Safely pulls the latest affiliate-portfolio-dna changes into this site repo.
# Usage: bash scripts/pull-base-update.sh

set -euo pipefail

DNA_REMOTE="https://github.com/b4ked/affiliate-portfolio-dna.git"
PREFIX="base"

echo "==> Checking working tree is clean..."
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "ERROR: Working tree has uncommitted changes. Commit or stash them first."
  exit 1
fi

echo "==> Pulling latest DNA changes..."
git subtree pull --prefix="$PREFIX" "$DNA_REMOTE" main --squash -m "chore: pull affiliate-portfolio-dna update $(date +%Y-%m-%d)"

echo "==> Running build to verify..."
npm run build

echo ""
echo "✓ DNA update complete. Review changes, then push."
