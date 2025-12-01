@echo off
echo ========================================
echo GitHub Pages Setup Script
echo ========================================
echo.

REM 检查是否已初始化 Git
if exist .git (
    echo Git repository already initialized.
    echo.
) else (
    echo Initializing Git repository...
    git init
    echo.
)

REM 添加所有文件
echo Adding all files to Git...
git add .
echo.

REM 检查是否有未提交的更改
git status --short
echo.

echo ========================================
echo Next Steps:
echo ========================================
echo.
echo 1. Create a new repository on GitHub:
echo    - Go to https://github.com/new
echo    - Name it: yifan-portfolio (or your preferred name)
echo    - Make it PUBLIC (required for free GitHub Pages)
echo    - DO NOT initialize with README, .gitignore, or license
echo.
echo 2. After creating the repository, run these commands:
echo.
echo    git commit -m "Initial portfolio commit"
echo    git branch -M main
echo    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
echo    git push -u origin main
echo.
echo    (Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values)
echo.
echo 3. Enable GitHub Pages:
echo    - Go to your repository Settings
echo    - Click "Pages" in the left sidebar
echo    - Source: Deploy from a branch
echo    - Branch: main, Folder: / (root)
echo    - Click Save
echo.
echo 4. Wait 1-3 minutes, then visit:
echo    https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
echo.
echo ========================================
pause

