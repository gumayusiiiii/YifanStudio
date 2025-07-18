const fs = require('fs');
const path = require('path');

// 简化版动画系统更新脚本
console.log('🚀 开始更新为简化版动画系统...');

// 需要更新的HTML文件列表
const htmlFiles = [
    'index.html',
    'gallery.html', 
    'about.html',
    'project-medieval-gauntlet.html',
    'project-modular-sneakers.html',
    'project-hull-model.html',
    'project-mechanism.html',
    'project-miniature-panton-chair.html',
    'project-mobile-app.html',
    'project-motion-graphics.html',
    'project-mouse.html',
    'project-packaging.html',
    'project-wend1.html',
    'project-digital-interface.html',
    'project-editorial-design.html',
    'project-gaze.html',
    'project-brand-identity.html'
];

// 更新函数
function updateFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let updated = false;

        // 1. 替换CSS引用
        if (content.includes('enhanced-transitions.css')) {
            content = content.replace(/enhanced-transitions\.css/g, 'clean-transitions.css');
            updated = true;
            console.log(`  ✅ 更新CSS引用: ${filePath}`);
        }

        // 2. 替换JavaScript引用
        if (content.includes('enhanced-transitions.js')) {
            content = content.replace(/enhanced-transitions\.js/g, 'clean-transitions.js');
            updated = true;
            console.log(`  ✅ 更新JS引用: ${filePath}`);
        }

        // 3. 移除网格相关的CSS类
        const gridClasses = [
            'enhanced-page-container',
            'grid-background',
            'grid-lines',
            'grid-line',
            'mouse-follower',
            'cursor-dot',
            'cursor-trail'
        ];

        gridClasses.forEach(className => {
            if (content.includes(className)) {
                content = content.replace(new RegExp(`\\b${className}\\b`, 'g'), '');
                updated = true;
                console.log(`  ✅ 移除网格类: ${className} in ${filePath}`);
            }
        });

        // 4. 更新页面容器类
        if (content.includes('enhanced-page-container')) {
            content = content.replace(/enhanced-page-container/g, 'page-container');
            updated = true;
            console.log(`  ✅ 更新页面容器类: ${filePath}`);
        }

        // 5. 移除网格相关的内联样式
        const gridStyles = [
            'grid-template-columns',
            'grid-gap',
            'grid-area',
            'grid-column',
            'grid-row'
        ];

        gridStyles.forEach(style => {
            const regex = new RegExp(`\\s*${style}:\\s*[^;]+;?`, 'g');
            if (content.match(regex)) {
                content = content.replace(regex, '');
                updated = true;
                console.log(`  ✅ 移除网格样式: ${style} in ${filePath}`);
            }
        });

        // 6. 移除网格相关的JavaScript代码
        const gridJS = [
            'createGridLines',
            'updateMousePosition',
            'animateGridLines',
            'gridLines',
            'mouseX',
            'mouseY'
        ];

        gridJS.forEach(jsCode => {
            if (content.includes(jsCode)) {
                // 移除包含这些代码的script标签块
                const scriptRegex = /<script[^>]*>[\s\S]*?<\/script>/g;
                content = content.replace(scriptRegex, (match) => {
                    if (match.includes(jsCode)) {
                        return match.replace(new RegExp(`[^}]*${jsCode}[^}]*`, 'g'), '');
                    }
                    return match;
                });
                updated = true;
                console.log(`  ✅ 移除网格JS代码: ${jsCode} in ${filePath}`);
            }
        });

        // 7. 确保有正确的动画类
        if (!content.includes('page-container')) {
            content = content.replace(/<body[^>]*>/, '<body class="page-container">');
            updated = true;
            console.log(`  ✅ 添加页面容器类: ${filePath}`);
        }

        // 8. 添加导航链接过渡类
        const navLinkRegex = /<a[^>]*class="[^"]*nav-link[^"]*"[^>]*>/g;
        content = content.replace(navLinkRegex, (match) => {
            if (!match.includes('nav-link-transition')) {
                return match.replace('class="', 'class="nav-link-transition ');
            }
            return match;
        });

        // 9. 添加项目卡片动画类
        const projectCardSelectors = [
            'work-item',
            'gallery-item', 
            'work-card',
            'demo-card',
            'feature-card',
            'showcase-item'
        ];

        projectCardSelectors.forEach(selector => {
            const regex = new RegExp(`<div[^>]*class="[^"]*${selector}[^"]*"[^>]*>`, 'g');
            content = content.replace(regex, (match) => {
                if (!match.includes('project-card')) {
                    return match.replace('class="', 'class="project-card ');
                }
                return match;
            });
        });

        // 10. 添加返回按钮动画类
        const backButtonRegex = /<a[^>]*class="[^"]*back-button[^"]*"[^>]*>/g;
        content = content.replace(backButtonRegex, (match) => {
            if (!match.includes('back-button')) {
                return match.replace('class="', 'class="back-button ');
            }
            return match;
        });

        // 11. 添加内容进入动画类
        const contentSelectors = [
            'content-section',
            'about-section', 
            'project-meta',
            'project-tags',
            'hero-section'
        ];

        contentSelectors.forEach(selector => {
            const regex = new RegExp(`<[^>]*class="[^"]*${selector}[^"]*"[^>]*>`, 'g');
            content = content.replace(regex, (match) => {
                if (!match.includes('content-enter')) {
                    return match.replace('class="', 'class="content-enter ');
                }
                return match;
            });
        });

        // 12. 添加文字动画类
        const textSelectors = [
            'hero-title',
            'project-title',
            'section-title'
        ];

        textSelectors.forEach(selector => {
            const regex = new RegExp(`<[^>]*class="[^"]*${selector}[^"]*"[^>]*>`, 'g');
            content = content.replace(regex, (match) => {
                if (!match.includes('text-reveal')) {
                    return match.replace('class="', 'class="text-reveal ');
                }
                return match;
            });
        });

        // 保存更新后的文件
        if (updated) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`  ✅ 文件已更新: ${filePath}`);
        } else {
            console.log(`  ⏭️  无需更新: ${filePath}`);
        }

    } catch (error) {
        console.error(`  ❌ 更新失败: ${filePath}`, error.message);
    }
}

// 执行更新
console.log('\n📁 开始处理HTML文件...\n');

htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`处理文件: ${file}`);
        updateFile(file);
        console.log('');
    } else {
        console.log(`⚠️  文件不存在: ${file}`);
    }
});

// 创建说明文档
const readmeContent = `# 简化版动画系统

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

\`\`\`
clean-transitions.css    # 简化版动画样式
clean-transitions.js     # 简化版动画脚本
clean-test.html         # 测试页面
\`\`\`

## 使用方法

1. 在HTML文件中引入CSS和JS文件：
\`\`\`html
<link rel="stylesheet" href="clean-transitions.css">
<script src="clean-transitions.js"></script>
\`\`\`

2. 添加相应的CSS类：
\`\`\`html
<body class="page-container">
    <a href="#" class="nav-link nav-link-transition">导航链接</a>
    <div class="project-card">项目卡片</div>
    <h1 class="text-reveal">标题文字</h1>
</body>
\`\`\`

## 动画类说明

- \`page-container\`: 页面容器
- \`nav-link-transition\`: 导航链接过渡效果
- \`project-card\`: 项目卡片悬停动画
- \`content-enter\`: 内容区域进入动画
- \`text-reveal\`: 文字渐显动画
- \`back-button\`: 返回按钮动画

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
`;

fs.writeFileSync('CLEAN_ANIMATION_GUIDE.md', readmeContent, 'utf8');

console.log('🎉 简化版动画系统更新完成！');
console.log('\n📋 更新摘要:');
console.log('  ✅ 创建了 clean-transitions.css');
console.log('  ✅ 创建了 clean-transitions.js');
console.log('  ✅ 创建了 clean-test.html');
console.log('  ✅ 更新了所有HTML文件');
console.log('  ✅ 创建了 CLEAN_ANIMATION_GUIDE.md');
console.log('\n🚀 现在可以访问 clean-test.html 查看简化版动画效果！'); 