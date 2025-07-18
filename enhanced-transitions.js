// 增强版页面过渡动画管理器 - 模仿Tiffany Huang风格
class EnhancedPageTransitionManager {
    constructor() {
        this.isTransitioning = false;
        this.gridLines = [];
        this.init();
    }

    init() {
        // 添加页面容器类
        document.body.classList.add('page-container');
        
        // 创建背景网格
        this.createBackgroundGrid();
        
        // 初始化页面进入动画
        this.initPageEnter();
        
        // 绑定导航链接事件
        this.bindNavigationEvents();
        
        // 初始化加载动画
        this.initLoadingAnimation();
        
        // 初始化文字动画
        this.initTextAnimations();
    }

    // 创建背景网格线条
    createBackgroundGrid() {
        const grid = document.createElement('div');
        grid.className = 'background-grid';
        document.body.appendChild(grid);

        const gridSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-size'));
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // 创建水平线条
        for (let y = 0; y <= windowHeight; y += gridSize) {
            const line = document.createElement('div');
            line.className = 'grid-line horizontal';
            line.style.top = y + 'px';
            grid.appendChild(line);
            this.gridLines.push(line);
        }

        // 创建垂直线条
        for (let x = 0; x <= windowWidth; x += gridSize) {
            const line = document.createElement('div');
            line.className = 'grid-line vertical';
            line.style.left = x + 'px';
            grid.appendChild(line);
            this.gridLines.push(line);
        }

        // 激活网格
        setTimeout(() => {
            grid.classList.add('active');
            this.animateGridLines();
        }, 500);
    }

    // 动画网格线条
    animateGridLines() {
        this.gridLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('animate');
            }, index * 20);
        });
    }

    // 初始化页面进入动画
    initPageEnter() {
        // 添加页面进入动画类
        document.body.classList.add('page-enter');
        
        // 添加内容区域动画
        this.animateContentSections();
    }

    // 动画内容区域
    animateContentSections() {
        const contentSections = document.querySelectorAll('.content-section, .work-item, .gallery-item, .about-section, .project-meta, .project-tags, .test-section');
        
        contentSections.forEach((section, index) => {
            section.classList.add('content-enter');
            section.style.animationDelay = `${0.2 + index * 0.1}s`;
        });
    }

    // 绑定导航链接事件
    bindNavigationEvents() {
        const navLinks = document.querySelectorAll('a[href]');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // 跳过外部链接、锚点链接和特殊链接
            if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.includes('resume.pdf')) {
                return;
            }
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateTo(href);
            });
        });
    }

    // 导航到指定页面
    navigateTo(url) {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        
        // 执行页面过渡
        this.transitionToPage(url);
    }

    // 页面过渡
    transitionToPage(url) {
        // 添加退出动画
        document.body.classList.add('page-exit');
        
        // 动画网格线条退出
        this.animateGridLinesExit();
        
        // 延迟跳转
        setTimeout(() => {
            window.location.href = url;
        }, 800);
    }

    // 动画网格线条退出
    animateGridLinesExit() {
        this.gridLines.reverse().forEach((line, index) => {
            setTimeout(() => {
                line.classList.remove('animate');
            }, index * 10);
        });
    }

    // 显示加载动画
    showLoadingAnimation() {
        let overlay = document.querySelector('.loading-overlay');
        
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'loading-overlay';
            overlay.innerHTML = `
                <div class="loading-animation">
                    <div class="loading-line horizontal"></div>
                    <div class="loading-line vertical"></div>
                </div>
            `;
            document.body.appendChild(overlay);
        }
        
        overlay.classList.remove('hidden');
    }

    // 隐藏加载动画
    hideLoadingAnimation() {
        const overlay = document.querySelector('.loading-overlay');
        if (overlay) {
            overlay.classList.add('hidden');
        }
    }

    // 初始化加载动画
    initLoadingAnimation() {
        // 页面加载完成后隐藏加载动画
        window.addEventListener('load', () => {
            this.hideLoadingAnimation();
        });
    }

    // 初始化文字动画
    initTextAnimations() {
        const textElements = document.querySelectorAll('h1, h2, h3, .hero-title, .project-title');
        
        textElements.forEach(element => {
            element.classList.add('text-reveal');
            
            // 使用Intersection Observer触发动画
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate');
                        }, 200);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(element);
        });
    }

    // 创建鼠标跟随效果
    createMouseFollowEffect() {
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // 更新网格线条的透明度
            this.gridLines.forEach(line => {
                const rect = line.getBoundingClientRect();
                const distance = Math.sqrt(
                    Math.pow(mouseX - (rect.left + rect.width / 2), 2) +
                    Math.pow(mouseY - (rect.top + rect.height / 2), 2)
                );
                
                const maxDistance = 200;
                const opacity = Math.max(0.1, 1 - distance / maxDistance);
                line.style.opacity = opacity;
            });
        });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化增强版页面过渡管理器
    window.enhancedPageTransitionManager = new EnhancedPageTransitionManager();
    
    // 添加导航链接过渡类
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.add('nav-link-transition');
    });
    
    // 添加项目卡片动画类
    document.querySelectorAll('.work-item, .gallery-item, .work-card, .demo-card').forEach(item => {
        item.classList.add('project-card');
    });
    
    // 添加返回按钮动画类
    document.querySelectorAll('.back-button').forEach(button => {
        button.classList.add('back-button');
    });

    // 为项目页面添加特殊处理
    if (window.location.pathname.includes('project-')) {
        // 项目页面的返回按钮特殊处理
        const backButton = document.querySelector('.back-button');
        if (backButton) {
            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                const targetUrl = backButton.getAttribute('href');
                
                // 添加退出动画
                document.body.classList.add('page-exit-reverse');
                
                // 动画网格线条退出
                if (window.enhancedPageTransitionManager) {
                    window.enhancedPageTransitionManager.animateGridLinesExit();
                }
                
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 800);
            });
        }
    }

    // 创建鼠标跟随效果
    setTimeout(() => {
        if (window.enhancedPageTransitionManager) {
            window.enhancedPageTransitionManager.createMouseFollowEffect();
        }
    }, 2000);
});

// 导出管理器供其他脚本使用
window.EnhancedPageTransitionManager = EnhancedPageTransitionManager; 