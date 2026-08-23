#!/bin/sh
set -eu

# Recreates ignored Foundry libraries at the exact revisions recorded in
# ../dependencies.lock. The script deliberately refuses to merge into an
# existing lib/ directory so a dependency update cannot be accidental.

project_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$project_dir"

. "$project_dir/dependencies.lock"
. "$project_dir/toolchain.lock"

if ! command -v forge >/dev/null 2>&1; then
    echo "Foundry is required. Install the Foundry toolchain before bootstrapping." >&2
    exit 1
fi

actual_foundry_version=$(forge --version | sed -n 's/^forge Version: //p')
actual_foundry_profile=$(forge --version | sed -n 's/^Build Profile: //p')

if [ "$actual_foundry_version" != "$FOUNDRY_VERSION" ] || [ "$actual_foundry_profile" != "$FOUNDRY_BUILD_PROFILE" ]; then
    echo "Foundry version mismatch. Expected ${FOUNDRY_VERSION} (${FOUNDRY_BUILD_PROFILE})." >&2
    echo "Actual: ${actual_foundry_version} (${actual_foundry_profile})." >&2
    exit 1
fi

if [ -e lib ]; then
    echo "Refusing to overwrite existing lib/. Remove it and rerun this script." >&2
    exit 1
fi

forge install --no-git --shallow \
    "${OPENZEPPELIN_REPOSITORY}@rev=${OPENZEPPELIN_COMMIT}" \
    "${FORGE_STD_REPOSITORY}@rev=${FORGE_STD_COMMIT}"

echo "Dependencies installed at locked commits:"
echo "  ${OPENZEPPELIN_REPOSITORY} ${OPENZEPPELIN_TAG} (${OPENZEPPELIN_COMMIT})"
echo "  ${FORGE_STD_REPOSITORY} ${FORGE_STD_TAG} (${FORGE_STD_COMMIT})"
echo "Verify with: forge build && forge test -vv"
