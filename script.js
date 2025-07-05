// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    
    // 动态加载项目数据
    loadProjects();
    
    // 移动端导航菜单切换
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // 点击导航链接后关闭移动端菜单
    if (hamburger && navMenu) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 作品集筛选功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterBtns.length > 0 && galleryItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.classList.remove('hide');
                        item.style.display = 'block';
                    } else {
                        const itemCategory = item.getAttribute('data-category');
                        if (itemCategory === filterValue) {
                            item.classList.remove('hide');
                            item.style.display = 'block';
                        } else {
                            item.classList.add('hide');
                            setTimeout(() => {
                                if (item.classList.contains('hide')) {
                                    item.style.display = 'none';
                                }
                            }, 300);
                        }
                    }
                });
            });
        });
    }
    
    // 滚动时导航栏样式变化
    let lastScrollTop = 0;
    const navbar = document.querySelector('.main-nav');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Enhanced navbar background on scroll
            if (scrollTop > 100) {
                navbar.style.background = 'rgba(0, 0, 0, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    // 元素进入视窗动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    document.querySelectorAll('.work-item, .gallery-item, .about-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // 导航激活状态处理
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // 打字机效果（可选）
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // 页面加载完成后的初始化动画
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Fade in animations for main content
        const mainContent = document.querySelectorAll('.hero, .featured-works, .gallery-header');
        mainContent.forEach((element, index) => {
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    element.style.transition = 'all 0.8s ease-out';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    });
    
    // 鼠标跟随效果（可选的高级效果）
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // 为作品项添加鼠标跟随倾斜效果
    document.querySelectorAll('.work-item, .gallery-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 表单提交处理（如果有联系表单）
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 这里可以添加表单提交逻辑
            const formData = new FormData(this);
            
            // 显示提交成功消息
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = '消息已发送！我会尽快回复您。';
            successMessage.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #28a745;
                color: white;
                padding: 1rem 2rem;
                border-radius: 5px;
                z-index: 9999;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(successMessage);
            
            setTimeout(() => {
                successMessage.style.opacity = '1';
            }, 100);
            
            setTimeout(() => {
                successMessage.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(successMessage);
                }, 300);
            }, 3000);
            
            // 重置表单
            this.reset();
        });
    }
    
    // 懒加载图片
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
        
        img.onload = function() {
            this.style.opacity = '1';
        };
    });
    
    // 返回顶部按钮
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        background: var(--text-color);
        color: var(--bg-color);
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // 滚动时显示/隐藏返回顶部按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // 点击返回顶部
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 平滑滚动效果
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 滚动时的视差效果
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // 为背景添加轻微的视差效果
        const backgrounds = document.querySelectorAll('.homepage::before, .section-header');
        backgrounds.forEach(bg => {
            if (bg) {
                bg.style.transform = `translateY(${rate}px)`;
            }
        });
    });
    
    // Central Focused Carousel functionality
    const carouselTrack = document.getElementById('carouselTrack');
    const navLeft = document.getElementById('navLeft');
    const navRight = document.getElementById('navRight');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    

    

    
    if (carouselTrack && navLeft && navRight && indicatorsContainer) {
        const slides = carouselTrack.querySelectorAll('.carousel-slide');
        let currentIndex = 0;
        const totalSlides = slides.length;
        

        
        // Create indicators
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(i));
            indicatorsContainer.appendChild(indicator);
        }
        
        const indicators = indicatorsContainer.querySelectorAll('.indicator');
        
        function updateCarousel() {
            // Clear all position classes
            slides.forEach(slide => {
                slide.classList.remove('active', 'prev-1', 'prev-2', 'next-1', 'next-2', 'hidden');
            });
            
            // Apply position classes based on current index
            slides.forEach((slide, index) => {
                const position = index - currentIndex;
                
                if (position === 0) {
                    slide.classList.add('active');
                } else if (position === -1 || (position === totalSlides - 1 && currentIndex === 0)) {
                    slide.classList.add('prev-1');
                } else if (position === -2 || (position === totalSlides - 2 && currentIndex <= 1)) {
                    slide.classList.add('prev-2');
                } else if (position === 1 || (position === -(totalSlides - 1) && currentIndex === totalSlides - 1)) {
                    slide.classList.add('next-1');
                } else if (position === 2 || (position === -(totalSlides - 2) && currentIndex >= totalSlides - 2)) {
                    slide.classList.add('next-2');
                } else {
                    slide.classList.add('hidden');
                }
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }
        
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }
        

        
        // Event listeners for hidden navigation areas
        if (navLeft) {
            navLeft.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                prevSlide();
            });
        }
        
        if (navRight) {
            navRight.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                nextSlide();
            });
        }
        
        // Click on side slides to navigate (but not on project links)
        slides.forEach((slide, index) => {
            slide.addEventListener('click', (e) => {
                // Don't navigate if clicking on a project link
                if (e.target.closest('.project-link')) {
                    return;
                }
                
                if (index !== currentIndex) {
                    goToSlide(index);
                }
            });
        });
        
        // Touch/swipe support
        let startX = 0;
        let isDragging = false;
        
        carouselTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        carouselTrack.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        carouselTrack.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        });
        
        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });
        
        // Auto-play functionality (optional)
        let autoPlayInterval;
        
        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 7000);
        }
        
        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }
        
        // Start auto-play
        startAutoPlay();
        
        // Pause auto-play on hover
        carouselTrack.addEventListener('mouseenter', stopAutoPlay);
        carouselTrack.addEventListener('mouseleave', startAutoPlay);
        
        // Initialize carousel
        updateCarousel();
        
        // Auto-resize on window resize
        window.addEventListener('resize', updateCarousel);
    }
    
});

// 添加一些CSS类用于动画
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .loaded .lazy {
        opacity: 1;
    }
    
    .scroll-to-top:hover {
        background: var(--text-light) !important;
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);

// 移动端导航
function toggleMobileNav() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// 动态加载项目数据
function loadProjects() {
    // 检查是否在gallery页面
    const carouselTrack = document.getElementById('carouselTrack');
    if (carouselTrack) {
        loadGalleryProjects();
    }
    
    // 检查是否在index页面（all works页面）
    const worksGridArchive = document.querySelector('.works-grid-archive');
    if (worksGridArchive) {
        loadIndexProjects();
    }
}

// 加载gallery页面的项目
function loadGalleryProjects() {
    const carouselTrack = document.getElementById('carouselTrack');
    if (!carouselTrack || !window.projects) return;
    
    carouselTrack.innerHTML = '';
    
    window.projects.forEach((project, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.setAttribute('data-index', index);
        
        slide.innerHTML = `
            <div class="slide-content">
                <a href="${project.link}" class="project-link">
                    <div class="carousel-image-area">
                        ${project.cover ? `<img src="${project.cover}" alt="${project.title} Cover" class="work-card-img" style="width:100%;height:280px;object-fit:${project.title === 'Miniature Panton Chair' || project.title === 'Hull Model' ? 'contain' : 'cover'};background:${project.title === 'Miniature Panton Chair' || project.title === 'Hull Model' ? '#000' : '#111'};">` : `<div class=\"placeholder-image\" data-text=\"${project.placeholderText}\" data-color=\"${project.placeholderColor}\"></div>`}
                    </div>
                </a>
                <div class="slide-info">
                    <h3>${project.title}</h3>
                    <p>${project.subtitle}</p>
                    <div class="slide-tags">
                        ${project.tags.slice(0, 3).map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        
        carouselTrack.appendChild(slide);
    });
    
    // 更新项目数量统计
    const archiveStats = document.querySelector('.archive-stats');
    if (archiveStats) {
        const statItem = archiveStats.querySelector('.stat-item');
        if (statItem) {
            statItem.textContent = `${window.projects.length} Projects`;
        }
    }
}

// 加载index页面的项目
function loadIndexProjects() {
    const worksGridArchive = document.querySelector('.works-grid-archive');
    if (!worksGridArchive || !window.projects) return;
    
    worksGridArchive.innerHTML = '';
    
    window.projects.forEach((project, index) => {
        const workCard = document.createElement('article');
        workCard.className = 'work-card';
        
        workCard.innerHTML = `
            <a href="${project.link}" class="work-card-link smooth-transition">
                <div class="work-card-image">
                    ${project.cover ? `<img src="${project.cover}" alt="${project.title} Cover" class="work-card-img" style="width:100%;height:100%;object-fit:${project.title === 'Miniature Panton Chair' || project.title === 'Hull Model' ? 'contain' : 'cover'};background:${project.title === 'Miniature Panton Chair' || project.title === 'Hull Model' ? '#000' : '#111'};">` : `<div class="placeholder-image" data-text="${project.placeholderText}" data-color="${project.placeholderColor}"></div>`}
                    <div class="work-card-overlay">
                        <span class="view-project">View Project →</span>
                    </div>
                </div>
                <div class="work-card-info">
                    <h3 class="work-card-title">${project.title}</h3>
                    <p class="work-card-category">[ ${project.subtitle.toUpperCase()} ]</p>
                    <div class="work-card-year">${project.year}</div>
                </div>
            </a>
        `;
        
        worksGridArchive.appendChild(workCard);
    });
    
    // 更新项目数量统计
    const archiveStats = document.querySelector('.archive-stats');
    if (archiveStats) {
        const statItem = archiveStats.querySelector('.stat-item');
        if (statItem) {
            statItem.textContent = `${window.projects.length} Projects`;
        }
    }
} 