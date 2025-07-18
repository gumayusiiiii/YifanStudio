// 极简圆点鼠标指针（修正版，兼容滚动/缩放/高分屏）
(function() {
    if ('ontouchstart' in window) return; // 移动端不启用
    const cursor = document.createElement('div');
    cursor.className = 'minimal-cursor';
    document.body.appendChild(cursor);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    function updateCursor() {
        // 兼容页面滚动和缩放
        cursor.style.left = (mouseX + window.scrollX) + 'px';
        cursor.style.top = (mouseY + window.scrollY) + 'px';
    }

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        updateCursor();
    });

    // 可交互元素选择器
    const interactive = 'a, button, .project-card, .nav-link, .back-button, input, textarea, select, [role="button"], [tabindex]';

    document.addEventListener('mouseover', e => {
        if (e.target.closest(interactive)) {
            cursor.classList.add('active');
        }
    });
    document.addEventListener('mouseout', e => {
        if (e.target.closest(interactive)) {
            cursor.classList.remove('active');
        }
    });

    // 页面滚动/缩放时也更新位置，防止抖动
    window.addEventListener('scroll', updateCursor);
    window.addEventListener('resize', updateCursor);

    // 初始位置
    updateCursor();
})(); 