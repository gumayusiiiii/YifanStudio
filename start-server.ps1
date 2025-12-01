# PowerShell script to start a local web server
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Starting Local Web Server" -ForegroundColor Cyan
Write-Host "  Press Ctrl+C to stop the server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Python is installed
$pythonCheck = Get-Command python -ErrorAction SilentlyContinue
if ($pythonCheck) {
    Write-Host "[INFO] Python detected. Starting server..." -ForegroundColor Green
    Write-Host ""
    Write-Host "Server running at: http://localhost:8000" -ForegroundColor Yellow
    Write-Host "Open http://localhost:8000/project-modular-sneakers.html in your browser" -ForegroundColor Yellow
    Write-Host ""
    python -m http.server 8000
} else {
    Write-Host "[ERROR] Python not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Python from: https://www.python.org/downloads/" -ForegroundColor Yellow
    Write-Host "Or use one of these alternatives:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Option 1: Install Python" -ForegroundColor Cyan
    Write-Host "Option 2: Use VS Code Live Server extension" -ForegroundColor Cyan
    Write-Host "Option 3: Use Node.js: npx http-server" -ForegroundColor Cyan
    Write-Host ""
    Read-Host "Press Enter to exit"
}


