const fs = require('fs');

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
    'project-brand-identity.html',
    'clean-test.html',
    'text-animation-test.html',
    'background-fix-test.html'
];

function updateFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let updated = false;

        // 1. 移除其它自定义指针相关CSS/JS引用
        content = content.replace(/<link[^>]*href="[^"]*(custom-cursor|cursor|mouse-follower)[^"]*\.css"[^>]*>\s*/gi, '');
        content = content.replace(/<script[^>]*src="[^"]*(custom-cursor|cursor|mouse-follower)[^"]*\.js"[^>]*><\/script>\s*/gi, '');

        // 2. 添加minimal-cursor.css到<head>（如未存在）
        if (!content.includes('minimal-cursor.css')) {
            content = content.replace(/<link[^>]*rel="stylesheet"[^>]*>/i, match => match + '\n    <link rel="stylesheet" href="minimal-cursor.css">');
            updated = true;
        }

        // 3. 添加minimal-cursor.js到</body>前（如未存在）
        if (!content.includes('minimal-cursor.js')) {
            content = content.replace(/<\/body>/i, '    <script src="minimal-cursor.js"></script>\n</body>');
            updated = true;
        }

        if (updated) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`  ✅ 已集成极简圆点指针: ${filePath}`);
        } else {
            console.log(`  ⏭️  已存在，无需更新: ${filePath}`);
        }
    } catch (error) {
        console.error(`  ❌ 更新失败: ${filePath}`, error.message);
    }
}

console.log('🚀 开始批量集成极简圆点鼠标指针...\n');

htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
        updateFile(file);
    } else {
        console.log(`⚠️  文件不存在: ${file}`);
    }
});

console.log('\n🎉 极简圆点鼠标指针已批量集成到所有页面！'); 