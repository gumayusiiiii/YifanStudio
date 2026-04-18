param(
  [int]$Port = 8080
)

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Starting YourDND (Flask)" -ForegroundColor Cyan
Write-Host "  Press Ctrl+C to stop" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$appDir = Join-Path $root "DND\\Guma-master"

if (!(Test-Path $appDir)) {
  Write-Host "[ERROR] Not found: $appDir" -ForegroundColor Red
  exit 1
}

Set-Location $appDir

$env:PORT = "$Port"
python main.py

