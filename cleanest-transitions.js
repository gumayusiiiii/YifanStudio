// 极简页面过渡动画管理器 - 只保留页面切换、加载、导航等动画逻辑，无文字动画
class CleanestPageTransitionManager {
    constructor() {
        this.isTransitioning = false;
        this.init();
    }

    init() {
        document.body.classList.add('page-container');
        this.initPageEnter();
        this.bindNavigationEvents();
        this.initLoadingAnimation();
    }

    initPageEnter() {
        document.body.classList.add('page-enter');
    }

    bindNavigationEvents() {
        const navLinks = document.querySelectorAll('a[href]');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.includes('resume.pdf')) {
                return;
            }
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateTo(href);
            });
        });
    }

    navigateTo(url) {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        this.transitionToPage(url);
    }

    transitionToPage(url) {
        document.body.classList.add('page-exit');
        setTimeout(() => {
            window.location.href = url;
        }, 800);
    }

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

    hideLoadingAnimation() {
        const overlay = document.querySelector('.loading-overlay');
        if (overlay) {
            overlay.classList.add('hidden');
        }
    }

    initLoadingAnimation() {
        window.addEventListener('load', () => {
            this.hideLoadingAnimation();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.cleanestPageTransitionManager = new CleanestPageTransitionManager();
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.add('nav-link-transition');
    });
    document.querySelectorAll('.work-item, .gallery-item, .work-card, .demo-card, .feature-card, .showcase-item').forEach(item => {
        item.classList.add('project-card');
    });
    document.querySelectorAll('.back-button').forEach(button => {
        button.classList.add('back-button');
    });
    if (window.location.pathname.includes('project-')) {
        const backButton = document.querySelector('.back-button');
        if (backButton) {
            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                const targetUrl = backButton.getAttribute('href');
                document.body.classList.add('page-exit-reverse');
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 800);
            });
        }
    }
});

window.CleanestPageTransitionManager = CleanestPageTransitionManager; 