@echo off
echo ========================================
echo   Starting Local Web Server
echo   Press Ctrl+C to stop the server
echo ========================================
echo.

REM 切换到脚本所在目录
cd /d "%~dp0"
echo [INFO] Working directory: %CD%
echo.

REM 检查关键文件是否存在
if exist "project-editorial-design.html" (
    echo [OK] project-editorial-design.html found
) else (
    echo [WARNING] project-editorial-design.html not found in current directory
)
echo.

REM 检查 Python 是否安装
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo [INFO] Python detected. Starting server...
    echo.
    echo Server running at: http://localhost:8000
    echo.
    echo Available pages:
    echo   - http://localhost:8000/index.html
    echo   - http://localhost:8000/project-editorial-design.html
    echo   - http://localhost:8000/project-modular-sneakers.html
    echo.
    python -m http.server 8000
) else (
    echo [ERROR] Python not found!
    echo.
    echo Please install Python from: https://www.python.org/downloads/
    echo Or use one of these alternatives:
    echo.
    echo Option 1: Install Python
    echo Option 2: Use VS Code Live Server extension
    echo Option 3: Use Node.js: npx http-server
    echo.
    pause
)


