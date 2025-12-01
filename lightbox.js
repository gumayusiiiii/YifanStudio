/**
 * Yifan Zhao Portfolio - Lightbox System v3.0 (Gallery Mode)
 * - 支持点击放大
 * - 支持底部信息栏 (Caption & Meta)
 * - 新增：底部缩略图导航栏 (Thumbnail Strip)
 * - 新增：左右切换功能
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. 构建 Lightbox DOM 结构
    const lightboxHTML = `
        <div class="lightbox-overlay" id="lightbox">
            <div class="lightbox-close" id="lightbox-close">×</div>
            
            <!-- 左右导航 -->
            <button class="lightbox-nav prev" id="lb-prev">‹</button>
            <button class="lightbox-nav next" id="lb-next">›</button>

            <div class="lightbox-content">
                <img class="lightbox-image" id="lightbox-img" src="" alt="Preview">
                
                <div class="lightbox-info">
                    <div class="lightbox-title" id="lb-title"></div>
                    <div class="lightbox-caption" id="lb-caption"></div>
                    <div class="lightbox-meta" id="lb-meta"></div>
                </div>
            </div>

            <!-- 底部缩略图栏 -->
            <div class="lightbox-thumbnails" id="lb-thumbnails">
                <!-- JS will inject thumbnails here -->
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    // 2. 获取元素
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lb-prev');
    const nextBtn = document.getElementById('lb-next');
    const thumbContainer = document.getElementById('lb-thumbnails');
    
    const lbTitle = document.getElementById('lb-title');
    const lbCaption = document.getElementById('lb-caption');
    const lbMeta = document.getElementById('lb-meta');

    let currentGroup = []; // 当前图集的所有图片元素
    let currentIndex = 0;  // 当前显示的索引

    // 3. 绑定全局点击事件 (委托模式，支持动态生成的元素)
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('.zoomable') || e.target.closest('.zoomable')) {
            e.stopPropagation();
            const targetImg = e.target.matches('img') ? e.target : e.target.querySelector('img');
            if (!targetImg) return;

            openLightbox(targetImg);
        }
    });

    function openLightbox(targetImg) {
        // 1. 识别图片所属的组 (Context)
        // 尝试找到父容器 (比如 .folder-expander, .mosaic-grid, .film-strip)
        const parentContext = targetImg.closest('.folder-expander, .mosaic-grid, .film-strip, .contact-sheet, .archive-shelf');
        
        if (parentContext) {
            // 如果在组内，收集所有 zoomable 图片
            currentGroup = Array.from(parentContext.querySelectorAll('img.zoomable, .zoomable img'));
        } else {
            // 否则只有这一张
            currentGroup = [targetImg];
        }

        // 2. 找到当前图片的索引
        // 注意：targetImg 可能就是 zoomable，也可能是 zoomable 内部的 img
        // 这里的 currentGroup 存的是 img 元素
        currentIndex = currentGroup.indexOf(targetImg);
        if (currentIndex === -1) {
            // 容错：如果没找到（可能是结构差异），重置为单图模式
            currentGroup = [targetImg];
            currentIndex = 0;
        }

        updateLightboxContent();
        renderThumbnails();
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function updateLightboxContent() {
        const img = currentGroup[currentIndex];
        const src = img.getAttribute('data-full-src') || img.src;
        const alt = img.getAttribute('alt') || 'PROJECT_IMAGE';
        const caption = img.getAttribute('data-caption') || '';
        const meta = img.getAttribute('data-meta') || '';

        // 图片切换动画
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.src = src;
            lightboxImg.style.opacity = '1';
        }, 200);

        // 更新文本
        lbTitle.textContent = alt.toUpperCase();
        lbCaption.textContent = caption ? `// ${caption}` : '';
        lbCaption.style.display = caption ? 'block' : 'none';
        lbMeta.textContent = meta ? `[ ${meta} ]` : '';
        lbMeta.style.display = meta ? 'block' : 'none';

        // 更新导航按钮状态
        prevBtn.style.display = currentGroup.length > 1 ? 'flex' : 'none';
        nextBtn.style.display = currentGroup.length > 1 ? 'flex' : 'none';
        
        // 更新缩略图高亮
        updateActiveThumbnail();
    }

    function renderThumbnails() {
        thumbContainer.innerHTML = '';
        if (currentGroup.length <= 1) {
            thumbContainer.style.display = 'none';
            return;
        }

        thumbContainer.style.display = 'flex';
        currentGroup.forEach((img, index) => {
            const thumb = document.createElement('img');
            thumb.src = img.src;
            thumb.className = 'lb-thumb';
            if (index === currentIndex) thumb.classList.add('active');
            
            thumb.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = index;
                updateLightboxContent();
            });
            
            thumbContainer.appendChild(thumb);
        });
    }

    function updateActiveThumbnail() {
        const thumbs = thumbContainer.querySelectorAll('.lb-thumb');
        thumbs.forEach((t, i) => {
            if (i === currentIndex) {
                t.classList.add('active');
                t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                t.classList.remove('active');
            }
        });
    }

    // 导航逻辑
    function prevImage() {
        if (currentGroup.length > 1) {
            currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
            updateLightboxContent();
        }
    }

    function nextImage() {
        if (currentGroup.length > 1) {
            currentIndex = (currentIndex + 1) % currentGroup.length;
            updateLightboxContent();
        }
    }

    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });

    // 关闭逻辑
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { lightboxImg.src = ''; }, 300);
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg && 
            !e.target.closest('.lightbox-info') && 
            !e.target.closest('.lightbox-thumbnails') &&
            !e.target.closest('.lightbox-nav')) {
            closeLightbox();
        }
    });

    closeBtn.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });
});
