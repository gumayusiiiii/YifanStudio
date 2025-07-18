const fs = require('fs');
const path = require('path');

console.log('🚀 开始批量移除文字动画，切换为极简动画系统...');

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

        // 1. 替换CSS和JS为极简动画系统
        if (content.includes('clean-transitions') || content.includes('enhanced-transitions') || content.includes('fixed')) {
            content = content.replace(/clean-transitions(-fixed)?\.css|enhanced-transitions\.css/g, 'cleanest-transitions.css');
            content = content.replace(/clean-transitions(-fixed)?\.js|enhanced-transitions\.js/g, 'cleanest-transitions.js');
            updated = true;
            console.log(`  ✅ 替换为极简动画系统: ${filePath}`);
        }

        // 2. 移除所有.text-reveal类
        if (content.includes('text-reveal')) {
            // 移除class中的text-reveal
            content = content.replace(/class="([^"]*)text-reveal([^"]*)"/g, (match, p1, p2) => {
                let newClass = (p1 + ' ' + p2).replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
                return newClass ? `class="${newClass}"` : '';
            });
            // 移除多余的空class
            content = content.replace(/class="\s*"/g, '');
            updated = true;
            console.log(`  ✅ 移除.text-reveal类: ${filePath}`);
        }

        // 3. 移除与.text-reveal相关的span包裹（如 <span class="text-reveal">xxx</span> => xxx）
        content = content.replace(/<span[^>]*class="[^"]*text-reveal[^"]*"[^>]*>([\s\S]*?)<\/span>/g, '$1');

        // 4. 移除与文字动画相关的说明/注释
        content = content.replace(/<!--.*?文字动画.*?-->/gs, '');

        // 5. 移除与文字动画相关的JS引用
        content = content.replace(/<script[^>]*src="[^"]*text-animation[^"]*\.js"[^>]*><\/script>/g, '');

        // 6. 移除与文字动画相关的内联样式
        content = content.replace(/<style[^>]*>[\s\S]*?text-reveal[\s\S]*?<\/style>/g, '');

        // 7. 移除与文字动画相关的JS代码块
        content = content.replace(/<script[^>]*>[\s\S]*?text-reveal[\s\S]*?<\/script>/g, '');

        // 8. 移除与文字动画相关的自定义标签
        content = content.replace(/<text-reveal[^>]*>[\s\S]*?<\/text-reveal>/g, '');

        // 9. 移除多余的空行
        content = content.replace(/\n{3,}/g, '\n\n');

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

console.log('🎉 极简动画系统批量替换完成！');
console.log('\n🚀 现在所有页面都已移除文字动画，只保留页面切换、卡片悬停、导航等动画。'); 