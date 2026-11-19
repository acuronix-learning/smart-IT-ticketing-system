#!/bin/sh
cd "$(dirname "$0")"
npm install
npx playwright install chromium
npx playwright test
