# 简化版动画系统

## 概述
简化版动画系统去除了复杂的网格背景效果，保留了精致的页面过渡、交互动画和文字效果，提供更简洁优雅的用户体验。

## 主要特性

### ✨ 页面过渡动画
- 平滑的页面进入/退出动画
- 包含缩放和位移效果
- 自然的视觉体验

### 🎯 交互效果
- 悬停时的光泽扫过效果
- 更深的阴影和流畅过渡
- 导航链接的下划线动画

### 📝 文字动画
- 标题和重要文字的渐显效果
- 增强页面的视觉层次
- 滚动触发的动画

### 🎨 简洁设计
- 去除复杂的网格背景
- 保持简洁优雅的设计风格
- 突出内容本身

## 文件结构

```
clean-transitions.css    # 简化版动画样式
clean-transitions.js     # 简化版动画脚本
clean-test.html         # 测试页面
```

## 使用方法

1. 在HTML文件中引入CSS和JS文件：
```html
<link rel="stylesheet" href="clean-transitions.css">
<script src="clean-transitions.js"></script>
```

2. 添加相应的CSS类：
```html
<body class="page-container">
    <a href="#" class="nav-link nav-link-transition">导航链接</a>
    <div class="project-card">项目卡片</div>
    <h1 class="text-reveal">标题文字</h1>
</body>
```

## 动画类说明

- `page-container`: 页面容器
- `nav-link-transition`: 导航链接过渡效果
- `project-card`: 项目卡片悬停动画
- `content-enter`: 内容区域进入动画
- `text-reveal`: 文字渐显动画
- `back-button`: 返回按钮动画

## 响应式支持
- 移动端优化的动画时长
- 触摸设备的交互适配
- 无障碍访问支持

## 性能优化
- 使用CSS transform和opacity
- 避免重排和重绘
- 硬件加速支持

## 浏览器兼容性
- 现代浏览器完全支持
- 渐进式降级处理
- 优雅的降级方案
