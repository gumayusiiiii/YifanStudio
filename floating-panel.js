document.addEventListener('DOMContentLoaded', function() {
    const collaborateSection = document.querySelector('.collaborate-section');
    const footer = document.querySelector('.main-footer');
    
    if (!collaborateSection) return;
    
    let isVisible = false;
    let lastScrollY = window.scrollY;
    
    function toggleFloatingPanel() {
        const currentScrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollProgress = currentScrollY / (documentHeight - windowHeight);
        
        // 判断是否接近页面底部 (85%以上)
        const isNearBottom = scrollProgress > 0.85;
        
        // 判断滚动方向
        const isScrollingDown = currentScrollY > lastScrollY;
        
        // 显示条件：接近底部且向下滚动，或者已经显示且还在底部区域
        const shouldShow = (isNearBottom && isScrollingDown) || (isVisible && scrollProgress > 0.8);
        
        // 隐藏条件：向上滚动且不在底部区域
        const shouldHide = !isScrollingDown && scrollProgress < 0.75;
        
        if (shouldShow && !isVisible) {
            collaborateSection.classList.add('visible');
            isVisible = true;
        } else if (shouldHide && isVisible) {
            collaborateSection.classList.remove('visible');
            isVisible = false;
        }
        
        lastScrollY = currentScrollY;
    }
    
    // 节流函数
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // 绑定滚动事件
    window.addEventListener('scroll', throttle(toggleFloatingPanel, 16)); // ~60fps
    
    // 页面加载时检查一次
    toggleFloatingPanel();
    
    // 添加关闭按钮功能（如果需要的话）
    const closeButton = document.querySelector('.floating-panel-close');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            collaborateSection.classList.remove('visible');
            isVisible = false;
        });
    }
}); 