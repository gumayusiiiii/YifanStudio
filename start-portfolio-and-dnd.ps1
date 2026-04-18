param(
  [int]$PortfolioPort = 8800,
  [int]$DndPort = 8080
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Starting Portfolio + YourDND" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/2] Portfolio server: http://127.0.0.1:$PortfolioPort" -ForegroundColor Yellow
Start-Process powershell -ArgumentList @(
  "-NoExit",
  "-Command",
  "cd `"$root`"; python -m http.server $PortfolioPort --bind 127.0.0.1"
)

Write-Host "[2/2] YourDND (Flask): http://127.0.0.1:$DndPort" -ForegroundColor Yellow
Start-Process powershell -ArgumentList @(
  "-NoExit",
  "-Command",
  "cd `"$root\\DND\\Guma-master`"; `$env:PORT=$DndPort; python main.py"
)

Start-Sleep -Milliseconds 800
Start-Process "http://127.0.0.1:$PortfolioPort/"

