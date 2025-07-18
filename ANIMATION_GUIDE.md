# 页面过渡动画系统使用指南

## 概述
这个动画系统为您的作品集网站添加了流畅的页面过渡效果，模仿了现代作品集网站的用户体验。

## 已添加的功能

### 1. 页面过渡动画
- **进入动画**: 页面从右侧滑入，同时淡入
- **退出动画**: 页面向左滑出，同时淡出
- **返回动画**: 项目页面返回时使用反向动画

### 2. 内容区域动画
- 页面内容区域依次从下方淡入
- 每个区域有0.1秒的延迟，创造层次感

### 3. 交互动画
- 导航链接悬停效果
- 项目卡片悬停动画
- 返回按钮悬停效果

### 4. 加载动画
- 页面加载时显示旋转加载器
- 自动在页面加载完成后隐藏

## 文件结构

```
├── page-transitions.css    # 动画样式文件
├── page-transitions.js     # 动画逻辑文件
├── ANIMATION_GUIDE.md      # 本指南文件
└── 其他页面文件...
```

## 使用方法

### 1. 在现有页面中添加动画系统

在每个HTML页面的`<head>`部分添加：
```html
<link rel="stylesheet" href="page-transitions.css">
```

在`</body>`标签前添加：
```html
<script src="page-transitions.js"></script>
```

### 2. 为其他项目页面添加动画

对于每个项目页面，按照以下步骤：

1. **添加CSS引用**：
```html
<link rel="stylesheet" href="page-transitions.css">
```

2. **添加JavaScript引用**：
```html
<script src="page-transitions.js"></script>
```

3. **确保返回按钮有正确的类名**：
```html
<a href="index.html" class="back-button">← Back</a>
```

### 3. 自定义动画效果

您可以在`page-transitions.css`中修改以下变量来调整动画：

```css
:root {
    --transition-duration: 0.6s;    /* 动画持续时间 */
    --transition-easing: cubic-bezier(0.4, 0, 0.2, 1);  /* 缓动函数 */
    --slide-distance: 50px;         /* 滑动距离 */
}
```

## 动画效果说明

### 页面进入动画
- 页面从右侧50px位置滑入
- 透明度从0变为1
- 使用`ease-out`缓动函数

### 页面退出动画
- 页面向左滑出50px
- 透明度变为0
- 600ms后跳转到新页面

### 内容区域动画
- 每个内容区域从下方30px位置向上移动
- 依次延迟0.1秒显示
- 创造层次感和节奏感

### 悬停效果
- 项目卡片悬停时向上移动8px
- 图片放大1.05倍
- 返回按钮悬停时向左移动5px

## 浏览器兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 无障碍支持

系统自动检测用户的动画偏好设置：
- 如果用户设置了`prefers-reduced-motion: reduce`，所有动画将被禁用
- 确保网站对所有用户都友好

## 性能优化

- 使用CSS transform和opacity进行动画，避免重排
- 动画使用GPU加速
- 延迟加载非关键动画

## 故障排除

### 动画不工作？
1. 检查是否正确引入了CSS和JS文件
2. 确保页面有正确的HTML结构
3. 检查浏览器控制台是否有错误

### 动画太慢/太快？
修改`page-transitions.css`中的`--transition-duration`变量

### 想要不同的动画效果？
可以在`page-transitions.css`中修改关键帧动画

## 示例页面

以下页面已经集成了动画系统：
- ✅ index.html (主页)
- ✅ gallery.html (画廊页)
- ✅ about.html (关于页)
- ✅ project-medieval-gauntlet.html (项目页示例)

## 下一步

要完成整个网站的动画集成，您需要：

1. 为所有项目页面添加动画系统
2. 测试所有页面的动画效果
3. 根据需要调整动画参数
4. 在不同设备上测试响应式效果

这个动画系统将大大提升您作品集网站的用户体验，让页面转换更加流畅和专业！ 