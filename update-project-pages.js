const fs = require('fs');
const path = require('path');

// 获取所有项目页面文件
function getProjectPages() {
    const files = fs.readdirSync('.');
    return files.filter(file => 
        file.startsWith('project-') && 
        file.endsWith('.html') && 
        file !== 'project1.html' // 排除这个文件
    );
}

// 更新单个项目页面
function updateProjectPage(filename) {
    console.log(`正在更新: ${filename}`);
    
    let content = fs.readFileSync(filename, 'utf8');
    let updated = false;
    
    // 添加CSS引用
    if (!content.includes('page-transitions.css')) {
        content = content.replace(
            /<link rel="stylesheet" href="styles\.css">/,
            '<link rel="stylesheet" href="styles.css">\n    <link rel="stylesheet" href="page-transitions.css">'
        );
        updated = true;
    }
    
    // 添加JavaScript引用
    if (!content.includes('page-transitions.js')) {
        // 查找script标签的位置
        const scriptMatch = content.match(/<script src="script\.js"><\/script>/);
        if (scriptMatch) {
            content = content.replace(
                /<script src="script\.js"><\/script>/,
                '<script src="script.js"></script>\n    <script src="page-transitions.js"></script>'
            );
            updated = true;
        }
    }
    
    // 移除旧的页面退出动画代码
    content = content.replace(
        /\/\/ 页面退出动画[\s\S]*?setTimeout\(\(\) => \{[\s\S]*?window\.location\.href = this\.href;[\s\S]*?\}, 600\);[\s\S]*?\}\);[\s\S]*?\/\/ 图片转盘切换逻辑/g,
        '        // 图片转盘切换逻辑'
    );
    
    if (updated) {
        fs.writeFileSync(filename, content, 'utf8');
        console.log(`✅ 已更新: ${filename}`);
    } else {
        console.log(`⏭️  无需更新: ${filename}`);
    }
}

// 主函数
function main() {
    console.log('🚀 开始批量更新项目页面...\n');
    
    const projectPages = getProjectPages();
    console.log(`找到 ${projectPages.length} 个项目页面:\n`);
    
    projectPages.forEach(page => {
        console.log(`- ${page}`);
    });
    
    console.log('\n开始更新...\n');
    
    projectPages.forEach(updateProjectPage);
    
    console.log('\n✨ 批量更新完成！');
    console.log('\n接下来您需要:');
    console.log('1. 测试所有页面的动画效果');
    console.log('2. 确保所有返回按钮都有 class="back-button"');
    console.log('3. 根据需要调整动画参数');
}

// 运行脚本
if (require.main === module) {
    main();
}

module.exports = { getProjectPages, updateProjectPage }; 