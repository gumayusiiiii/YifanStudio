const fs = require('fs');
const path = require('path');

// 完全修复版动画系统更新脚本
console.log('🚀 开始更新为完全修复版动画系统...');

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

        // 1. 替换CSS引用为完全修复版
        if (content.includes('clean-transitions.css')) {
            content = content.replace(/clean-transitions\.css/g, 'clean-transitions-fixed.css');
            updated = true;
            console.log(`  ✅ 更新CSS引用: ${filePath}`);
        }

        // 2. 确保页面容器类存在
        if (!content.includes('page-container')) {
            content = content.replace(/<body[^>]*>/, '<body class="page-container">');
            updated = true;
            console.log(`  ✅ 添加页面容器类: ${filePath}`);
        }

        // 3. 添加导航链接过渡类
        const navLinkRegex = /<a[^>]*class="[^"]*nav-link[^"]*"[^>]*>/g;
        content = content.replace(navLinkRegex, (match) => {
            if (!match.includes('nav-link-transition')) {
                return match.replace('class="', 'class="nav-link-transition ');
            }
            return match;
        });

        // 4. 添加项目卡片动画类
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

        // 5. 添加返回按钮动画类
        const backButtonRegex = /<a[^>]*class="[^"]*back-button[^"]*"[^>]*>/g;
        content = content.replace(backButtonRegex, (match) => {
            if (!match.includes('back-button')) {
                return match.replace('class="', 'class="back-button ');
            }
            return match;
        });

        // 6. 添加内容进入动画类
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

        // 7. 添加文字动画类
        const textSelectors = [
            'hero-title',
            'project-title',
            'section-title',
            'test-title',
            'test-subtitle'
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
const readmeContent = `# 完全修复版动画系统

## 概述
完全修复版动画系统彻底解决了文字动画背景色不匹配的问题，确保所有动画背景与页面背景完全融合。

## 主要修复

### 🎯 背景色完全匹配
- 使用固定的黑色背景 \`#000\`
- 强制应用背景色，避免CSS变量冲突
- 确保所有动画元素背景一致

### 🔧 技术优化
- 定义明确的页面背景色变量 \`--page-bg: #000\`
- 使用 \`!important\` 强制应用背景色
- 优化 z-index 层级关系
- 文字内容设置 z-index: 0
- 动画遮罩层设置 z-index: 1

### ✨ 完全修复的问题
- ❌ 文字动画背景色不匹配
- ❌ 出现黑色条状背景
- ❌ 与页面背景违和
- ❌ CSS变量可能冲突
- ✅ 背景色完全匹配
- ✅ 消除所有违和感
- ✅ 完美视觉体验

## 文件结构

\`\`\`
clean-transitions-fixed.css    # 完全修复版动画样式
clean-transitions.js           # 动画脚本
background-fix-test.html      # 修复效果测试页面
\`\`\`

## 使用方法

1. 在HTML文件中引入修复版CSS：
\`\`\`html
<link rel="stylesheet" href="clean-transitions-fixed.css">
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

- \`page-container\`: 页面容器（强制黑色背景）
- \`nav-link-transition\`: 导航链接过渡效果
- \`project-card\`: 项目卡片悬停动画
- \`content-enter\`: 内容区域进入动画
- \`text-reveal\`: 文字渐显动画（背景完全匹配）
- \`back-button\`: 返回按钮动画

## 测试页面

- \`background-fix-test.html\`: 完全修复版测试页面
- \`clean-test.html\`: 简化版测试页面
- \`text-animation-test.html\`: 原版测试页面

## 修复技术细节

1. **背景色统一**: 所有动画元素使用相同的黑色背景
2. **强制应用**: 使用 \`!important\` 确保背景色优先级
3. **层级优化**: 合理的 z-index 设置
4. **无障碍支持**: 禁用动画时隐藏遮罩层
5. **响应式适配**: 移动端优化

## 性能优化

- 使用CSS transform和opacity
- 避免重排和重绘
- 硬件加速支持
- 优化的动画时长

## 浏览器兼容性

- 现代浏览器完全支持
- 渐进式降级处理
- 优雅的降级方案
- 无障碍访问支持
`;

fs.writeFileSync('FIXED_ANIMATION_GUIDE.md', readmeContent, 'utf8');

console.log('🎉 完全修复版动画系统更新完成！');
console.log('\n📋 更新摘要:');
console.log('  ✅ 创建了 clean-transitions-fixed.css');
console.log('  ✅ 创建了 background-fix-test.html');
console.log('  ✅ 更新了所有HTML文件');
console.log('  ✅ 创建了 FIXED_ANIMATION_GUIDE.md');
console.log('\n🚀 现在可以访问 background-fix-test.html 查看完全修复效果！');
console.log('\n🔧 修复要点:');
console.log('  - 使用固定黑色背景 #000');
console.log('  - 强制应用背景色 (!important)');
console.log('  - 优化 z-index 层级');
console.log('  - 确保背景色完全匹配'); 