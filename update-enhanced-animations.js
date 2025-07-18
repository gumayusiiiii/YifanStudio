const fs = require('fs');
const path = require('path');

// 获取所有需要更新的页面文件
function getPagesToUpdate() {
    const files = fs.readdirSync('.');
    return files.filter(file => 
        (file.endsWith('.html') && 
         !file.includes('test') && 
         !file.includes('enhanced-test')) ||
        file === 'index.html' ||
        file === 'gallery.html' ||
        file === 'about.html'
    );
}

// 更新单个页面
function updatePage(filename) {
    console.log(`正在更新: ${filename}`);
    
    let content = fs.readFileSync(filename, 'utf8');
    let updated = false;
    
    // 替换CSS引用
    if (content.includes('page-transitions.css')) {
        content = content.replace(
            /<link rel="stylesheet" href="page-transitions\.css">/g,
            '<link rel="stylesheet" href="enhanced-transitions.css">'
        );
        updated = true;
    }
    
    // 替换JavaScript引用
    if (content.includes('page-transitions.js')) {
        content = content.replace(
            /<script src="page-transitions\.js"><\/script>/g,
            '<script src="enhanced-transitions.js"></script>'
        );
        updated = true;
    }
    
    if (updated) {
        fs.writeFileSync(filename, content, 'utf8');
        console.log(`✅ 已更新: ${filename}`);
    } else {
        console.log(`⏭️  无需更新: ${filename}`);
    }
}

// 主函数
function main() {
    console.log('🚀 开始批量更新为增强版动画系统...\n');
    
    const pages = getPagesToUpdate();
    console.log(`找到 ${pages.length} 个页面:\n`);
    
    pages.forEach(page => {
        console.log(`- ${page}`);
    });
    
    console.log('\n开始更新...\n');
    
    pages.forEach(updatePage);
    
    console.log('\n✨ 增强版动画系统更新完成！');
    console.log('\n新增功能:');
    console.log('🎨 线条交织背景网格');
    console.log('⚡ 更流畅的页面过渡动画');
    console.log('🎯 鼠标跟随效果');
    console.log('✨ 文字渐显动画');
    console.log('🔄 增强的加载动画');
    
    console.log('\n测试页面:');
    console.log('- enhanced-test.html (增强版动画效果测试)');
    console.log('- test-animations.html (原版动画效果测试)');
}

// 运行脚本
if (require.main === module) {
    main();
}

module.exports = { getPagesToUpdate, updatePage }; 