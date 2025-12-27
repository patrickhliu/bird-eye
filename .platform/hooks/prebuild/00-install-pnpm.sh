#!/bin/bash
# Install pnpm globally using npm
npm install -g pnpm@10.23.0
# Verify installation
pnpm -v

# Enable corepack to manage package managers
corepack enable

# Install dependencies with pnpm (uses pnpm version specified in package.json "packageManager" field)
pnpm install

# Ensure correct ownership of the installed modules
# The 'webapp' user runs the application processes
chown -R webapp:webapp node_modules/ || true