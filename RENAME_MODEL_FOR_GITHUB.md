# 🔧 为 GitHub Pages 重命名模型文件

## ⚠️ 问题说明

模型文件名包含中文字符（`加热器总装配体.glb`），在 GitHub Pages 上可能导致加载失败。

## ✅ 解决方案

### 方法 1：重命名文件为英文（推荐）

1. **重命名模型文件**：
   - 将 `Heater/HeaterM/加热器总装配体.glb` 
   - 重命名为 `Heater/HeaterM/heater-assembly.glb`

2. **更新 HTML 文件中的路径**：
   - 代码已自动使用 URL 编码，但如果重命名，需要更新路径

### 方法 2：使用当前代码（已优化）

代码已自动使用 URL 编码处理中文路径，应该可以在 GitHub Pages 上工作。

## 📝 重命名步骤

1. 在文件管理器中找到：`Heater/HeaterM/加热器总装配体.glb`
2. 重命名为：`heater-assembly.glb` 或 `heater-model.glb`
3. 更新 `project-editorial-design.html` 中的路径

## 🚀 GitHub Pages 部署检查清单

- [ ] 确保所有文件已提交到 GitHub
- [ ] 模型文件大小 < 100MB（当前 24.2MB ✅）
- [ ] 路径使用相对路径（已使用 ✅）
- [ ] 文件名最好使用英文（推荐）
- [ ] 测试 GitHub Pages 上的加载

## 📦 文件大小限制

- GitHub 单个文件限制：100MB
- 当前模型大小：24.2MB ✅
- 建议：如果可能，压缩模型到 < 10MB 以获得更好的加载速度

