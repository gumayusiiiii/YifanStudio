# 🚀 如何启动本地服务器（解决 CORS 问题）

## ⚠️ 重要提示

**不能直接用 `file://` 打开 HTML 文件！** 浏览器会阻止加载本地文件（包括 GLTF 模型），这是安全策略。

**必须使用本地服务器运行网页。**

---

## 🎯 快速启动（推荐）

### 方法 1: 使用提供的脚本（最简单）

**Windows:**
1. 双击 `start-server.bat` 文件
2. 等待服务器启动
3. 在浏览器中打开：`http://localhost:8000/project-modular-sneakers.html`

**或者使用 PowerShell:**
```powershell
.\start-server.ps1
```

---

### 方法 2: 使用 Python（如果已安装）

打开终端/命令提示符，在项目目录下运行：

```bash
python -m http.server 8000
```

然后在浏览器中打开：
- `http://localhost:8000/project-modular-sneakers.html`

---

### 方法 3: 使用 Node.js（如果已安装）

```bash
npx http-server -p 8000
```

然后在浏览器中打开：
- `http://localhost:8000/project-modular-sneakers.html`

---

### 方法 4: 使用 VS Code Live Server（推荐给开发者）

1. 在 VS Code 中安装 **"Live Server"** 扩展
2. 右键点击 `project-modular-sneakers.html`
3. 选择 **"Open with Live Server"**

---

## 📋 检查清单

启动服务器后，确保：

- ✅ 服务器正在运行（终端显示 "Serving HTTP on..."）
- ✅ 浏览器地址栏显示 `http://localhost:8000/...`（不是 `file:///...`）
- ✅ 控制台没有 CORS 错误
- ✅ 3D 模型可以正常加载

---

## 🐛 常见问题

### Q: 提示 "Python not found"
**A:** 
1. 安装 Python: https://www.python.org/downloads/
2. 或使用其他方法（Node.js、VS Code Live Server）

### Q: 端口 8000 已被占用
**A:** 使用其他端口：
```bash
python -m http.server 8080
```
然后访问：`http://localhost:8080/project-modular-sneakers.html`

### Q: 模型仍然无法加载
**A:** 
1. 检查浏览器控制台是否有其他错误
2. 确保 `Shoes/model/sms.gltf` 文件存在
3. 确保所有纹理文件都在 `Shoes/model/` 目录下

---

## ✅ 成功标志

当一切正常时，你应该看到：
- ✅ 3D 模型正常显示（不是黑色剪影）
- ✅ 可以旋转、缩放模型
- ✅ 浏览器控制台没有 CORS 错误
- ✅ 所有图片正常显示

---

## 📝 注意事项

- 服务器运行时，不要关闭终端窗口
- 修改文件后，刷新浏览器即可看到更新
- 停止服务器：按 `Ctrl+C`


