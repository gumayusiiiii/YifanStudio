# GitHub Pages 部署指南

## 快速开始

### 方法 1: 使用 GitHub Desktop（最简单）

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 登录你的 GitHub 账户
3. 点击 `File` → `Add Local Repository`
4. 选择这个文件夹：`C:\Users\gumayusi\Desktop\yifan profo`
5. 点击 `Publish repository`
6. 输入仓库名称（例如：`yifan-portfolio`）
7. 确保勾选 `Keep this code private` 的**反选**（即设为 Public）
8. 点击 `Publish Repository`

### 方法 2: 使用命令行（PowerShell）

#### 步骤 1: 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名称：`yifan-portfolio`（或你喜欢的名字）
3. **重要**：选择 **Public**（免费 GitHub Pages 需要公开仓库）
4. **不要**勾选 "Initialize this repository with a README"
5. 点击 "Create repository"

#### 步骤 2: 在本地初始化并推送

打开 PowerShell，运行：

```powershell
# 进入项目目录
cd "C:\Users\gumayusi\Desktop\yifan profo"

# 初始化 Git（如果还没做）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial portfolio commit"

# 重命名分支为 main
git branch -M main

# 添加远程仓库（替换 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/yifan-portfolio.git

# 推送代码
git push -u origin main
```

#### 步骤 3: 启用 GitHub Pages

1. 在 GitHub 上打开你的仓库
2. 点击 **Settings**（设置）
3. 左侧菜单找到 **Pages**
4. **Source** 选择：`Deploy from a branch`
5. **Branch** 选择：`main`
6. **Folder** 选择：`/ (root)`
7. 点击 **Save**

#### 步骤 4: 等待部署

等待 1-3 分钟，然后访问：
```
https://YOUR_USERNAME.github.io/yifan-portfolio/
```

## 后续更新

每次修改代码后，运行：

```powershell
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages 会自动更新（通常 1-3 分钟）。

## 注意事项

### 文件路径
- ✅ 所有路径都使用相对路径（例如：`Shoes/model/view模型.gltf`）
- ✅ 3D 模型文件名已改为英文（避免 GitHub Pages 编码问题）

### 大文件
- 如果某些 3D 模型文件很大（> 50MB），GitHub 可能会警告
- 可以考虑使用 Git LFS 或压缩模型文件

### 自定义域名（可选）
如果你想使用自己的域名（例如：`yifanzhao.com`）：
1. 在仓库 Settings → Pages 中设置 Custom domain
2. 在你的域名 DNS 中添加 CNAME 记录

## 故障排除

### 页面显示 404
- 确保 `index.html` 在根目录
- 检查 GitHub Pages 设置中的 Source 是否正确

### 图片/模型不显示
- 检查文件路径是否正确（区分大小写）
- 确保文件已成功上传到 GitHub
- 在浏览器中检查控制台错误

### 样式不生效
- 确保 `style-technical.css` 路径正确
- 检查浏览器缓存，尝试硬刷新（Ctrl+F5）

## 需要帮助？

如果遇到问题，可以：
1. 检查 GitHub Actions 标签页，查看部署日志
2. 在仓库 Issues 中查看常见问题
3. 访问 GitHub Pages 文档：https://docs.github.com/en/pages

