# GitHub Pages 部署脚本
# 使用方法：在 PowerShell 中运行此脚本

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "GitHub Pages 部署准备" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查 Git 是否安装
try {
    $gitVersion = git --version
    Write-Host "✓ Git 已安装: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git 未安装，请先安装 Git" -ForegroundColor Red
    Write-Host "下载地址: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit
}

Write-Host ""

# 检查是否已初始化
if (Test-Path .git) {
    Write-Host "✓ Git 仓库已初始化" -ForegroundColor Green
} else {
    Write-Host "正在初始化 Git 仓库..." -ForegroundColor Yellow
    git init
    Write-Host "✓ Git 仓库初始化完成" -ForegroundColor Green
}

Write-Host ""

# 添加所有文件
Write-Host "正在添加文件到 Git..." -ForegroundColor Yellow
git add .
Write-Host "✓ 文件已添加" -ForegroundColor Green

Write-Host ""

# 检查是否有更改
$status = git status --short
if ($status) {
    Write-Host "检测到以下更改:" -ForegroundColor Yellow
    git status --short
    Write-Host ""
    Write-Host "请运行以下命令完成部署:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. 提交更改:" -ForegroundColor White
    Write-Host "   git commit -m `"Initial portfolio commit`"" -ForegroundColor Gray
    Write-Host ""
    Write-Host "2. 创建 GitHub 仓库后，添加远程地址:" -ForegroundColor White
    Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git" -ForegroundColor Gray
    Write-Host ""
    Write-Host "3. 重命名分支并推送:" -ForegroundColor White
    Write-Host "   git branch -M main" -ForegroundColor Gray
    Write-Host "   git push -u origin main" -ForegroundColor Gray
    Write-Host ""
} else {
    Write-Host "✓ 没有未提交的更改" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "下一步操作:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. 访问 https://github.com/new 创建新仓库" -ForegroundColor White
Write-Host "2. 仓库名称: yifan-portfolio (或你喜欢的名字)" -ForegroundColor White
Write-Host "3. 选择 PUBLIC (GitHub Pages 免费版需要公开仓库)" -ForegroundColor White
Write-Host "4. 不要勾选 'Initialize with README'" -ForegroundColor White
Write-Host "5. 点击 'Create repository'" -ForegroundColor White
Write-Host ""
Write-Host "然后运行上面显示的命令完成推送" -ForegroundColor Yellow
Write-Host ""

