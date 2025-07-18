// 简化版页面过渡动画管理器 - 去除网格背景
class CleanPageTransitionManager {
    constructor() {
        this.isTransitioning = false;
        this.init();
    }

    init() {
        // 添加页面容器类
        document.body.classList.add('page-container');
        
        // 初始化页面进入动画
        this.initPageEnter();
        
        // 绑定导航链接事件
        this.bindNavigationEvents();
        
        // 初始化加载动画
        this.initLoadingAnimation();
        
        // 初始化文字动画
        this.initTextAnimations();
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
        const contentSections = document.querySelectorAll('.content-section, .work-item, .gallery-item, .about-section, .project-meta, .project-tags, .test-section, .feature-card, .demo-section');
        
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
        
        // 延迟跳转
        setTimeout(() => {
            window.location.href = url;
        }, 800);
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
        const textElements = document.querySelectorAll('h1, h2, h3, .hero-title, .project-title, .section-title');
        
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
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化简化版页面过渡管理器
    window.cleanPageTransitionManager = new CleanPageTransitionManager();
    
    // 添加导航链接过渡类
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.add('nav-link-transition');
    });
    
    // 添加项目卡片动画类
    document.querySelectorAll('.work-item, .gallery-item, .work-card, .demo-card, .feature-card, .showcase-item').forEach(item => {
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
                
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 800);
            });
        }
    }
});

// 导出管理器供其他脚本使用
window.CleanPageTransitionManager = CleanPageTransitionManager; 