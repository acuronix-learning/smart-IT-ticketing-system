@echo off
cd /d %~dp0
call npm install
call npx playwright install chromium
call npx playwright test
pause
