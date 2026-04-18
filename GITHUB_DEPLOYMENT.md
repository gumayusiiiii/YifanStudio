# GitHub Pages 部署指南

## 本仓库对应关系（当前项目）

| 项目 | 地址 |
|------|------|
| GitHub 仓库 | https://github.com/gumayusiiiii/YifanStudio |
| 默认分支 | `master`（若你改用 `main`，推送后同样会触发部署） |
| 访客打开的**首页** | 仓库根目录的 **`index.html`**（作品网格 / 新版档案主页） |
| 上线后的站点根地址 | **https://gumayusiiiii.github.io/YifanStudio/** |

说明：GitHub Pages 对目录访问默认返回 `index.html`，因此别人点开仓库对应的 Pages 链接时，看到的就是当前这份作品集首页，无需再设子路径。

---

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

#### 步骤 3: 启用 GitHub Pages（二选一）

**方式 A — 使用 GitHub Actions（推荐，与本仓库中的工作流一致）**

1. 将代码推送到 `master` 或 `main`
2. 打开仓库 **Settings → Pages**
3. **Build and deployment** 里 **Source** 选择：**GitHub Actions**
4. 首次推送后，打开 **Actions** 标签页，确认 **Deploy to GitHub Pages** 工作流成功（绿色勾）
5. 几分钟后访问：`https://gumayusiiiii.github.io/YifanStudio/`

**方式 B — 直接从分支发布（不使用 Actions）**

1. **Settings → Pages**
2. **Source** 选择：`Deploy from a branch`
3. **Branch** 选：`master`，**Folder**：`/ (root)`
4. 保存后同样访问：`https://gumayusiiiii.github.io/YifanStudio/`

> 若已选方式 A，请勿再同时用方式 B，以免混淆；任选其一即可。

#### 步骤 4: 等待部署

等待 1-3 分钟，然后访问：
```
https://gumayusiiiii.github.io/YifanStudio/
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


