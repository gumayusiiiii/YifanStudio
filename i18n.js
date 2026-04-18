/**
 * i18n.js — 中/英双语切换系统
 * 用法：在 HTML 元素上添加 data-i18n="key" 或 data-i18n-html="key"
 * 切换按钮自动注入导航栏
 */
(function () {

  // ─── 翻译词典 ─────────────────────────────────────────────────────────────────

  const DICT = {
    en: {
      /* ── 公共导航 ── */
      'nav.name':    'YIFAN ZHAO',
      'nav.index':   'INDEX',
      'nav.about':   'ABOUT',
      'nav.archive': 'ARCHIVE',
      'nav.gallery': 'GALLERY',
      'nav.project': 'PROJECT',

      /* ── 页脚 ── */
      'footer.copyright':  '© 2025 YIFAN ZHAO',
      'footer.about':      'ABOUT',
      'footer.contact':    'CONTACT',
      'footer.return':     'RETURN TO ARCHIVE',

      /* ── index.html ── */
      'index.title':          'Yifan Zhao - Archive',
      'index.subtitle':       '// INDUSTRIAL_DESIGN_ARCHIVE',
      'index.status_online':  'SYSTEM_ONLINE',
      'index.status_loc':     'LOC: PROVIDENCE, RI',
      'index.status_updated': 'UPDATED: 2025.01',

      'index.sec_ps':       '// PROBLEM / SOLUTION',
      'index.sec_handmade': '// HANDMADE',
      'index.sec_digital':  '// DIGITAL / AI',
      'index.sec_action':   '// ACTION!',
      'index.sec_art':      '// ART?',

      'proj.sneakers':       'Modular Sneakers',
      'proj.sneakers_tags':  '3D_PRINTING // SYSTEM_DESIGN',
      'proj.heater':         'Shared Heater',
      'proj.heater_tags':    'PRODUCT // THERMAL',
      'proj.mouse':          'Barrier-Free Mouse',
      'proj.mouse_tags':     'ACCESSIBILITY // UX',
      'proj.gauntlet':       'Medieval Gauntlet',
      'proj.gauntlet_tags':  'METALWORK // ARMOR',
      'proj.mechanism':      'Mechanism Study',
      'proj.mechanism_tags': 'LINKAGE // KINETIC',
      'proj.panton':         'Miniature Panton',
      'proj.panton_tags':    'WOOD_CARVING',
      'proj.dnd':            'DND Adventure',
      'proj.dnd_tags':       'AI // GAME_DESIGN',
      'proj.wend1':          '1 Wend1',
      'proj.wend1_tags':     'VIDEO_ART',
      'proj.portrait':       'Self Portrait',
      'proj.portrait_tags':  'EXPERIMENTAL',
      'proj.gaze':           'Gaze',
      'proj.gaze_tags':      'CHARCOAL // PORTRAIT',
      'proj.hull':           'Hull Model',
      'proj.hull_tags':      'TRADITIONAL_CRAFT',

      /* ── about.html ── */
      'about.title':          'About - Yifan Zhao',
      'about.personnel':      '// PERSONNEL_FILE',
      'about.role':           'INDUSTRIAL DESIGNER / FILM MAKER',
      'about.loc':            'PROVIDENCE, RI',
      'about.status':         'ACTIVE',
      'about.resume':         '[ DOWNLOAD_RESUME ]',
      'about.bio1':           'I approach challenges from multiple angles and excel at sparking innovative breakthroughs at the start of projects.',
      'about.bio2':           'With a background spanning <strong>Industrial Design</strong>, <strong>Film/Video</strong>, and <strong>Programming</strong>, I build systems that bridge the physical and digital worlds.',
      'about.skill_matrix':   'SKILL_MATRIX',
      'about.skill_design':   'DESIGN & MODELING',
      'about.skill_eng':      'ENGINEERING & DEV',
      'about.skill_craft':    'CRAFT & FABRICATION',
      'about.skill_media':    'MEDIA & ARTS',
      'about.edu_log':        'EDUCATION_LOG',
      'about.risd_degree':    'B.F.A. Industrial Design / FAV (Film/Animation/Video)',
      'about.brown_degree':   'Exchange Scholar (Computer Science & Engineering)',

      /* ── gallery.html ── */
      'gallery.title':        'Gallery - Yifan Zhao',
      'gallery.explore_h':    'Explore Complete Portfolio',
      'gallery.explore_p':    'Browse all projects in a comprehensive archive view with detailed categorization and search functionality.',
      'gallery.view_all':     'View All Works',

      /* ── project-modular-sneakers.html ── */
      'sneakers.title':       'MODULAR SHOES',
      'sneakers.subtitle':    '// Multiverse of the "Modern Sneaker System"',
      'sneakers.sys_h':       'SYSTEM_OVERVIEW',
      'sneakers.sys_p':       'Our modular sneaker is designed with adaptability at its core—a transformative footwear system engineered to meet the evolving demands of multi-sport athletes and urban explorers.',
      'sneakers.ux_h':        'USER_EXPERIENCE',
      'sneakers.ux_p':        'With a single base chassis and a library of attachable modules, users can curate their shoe based on their schedule. Morning run? Slide in the high-resilience midsole. Midday basketball? Swap in court-optimized traction pads. Evening city walk? Pop on the lifestyle shell. This adaptability means you no longer need multiple shoes for multiple purposes—just one intelligent system.',
      'sneakers.tech_h':      'TECHNICAL_SPECS',

      /* ── project-medieval-gauntlet.html ── */
      'gauntlet.title':       'MEDIEVAL GAUNTLET',
      'gauntlet.subtitle':    '// Handcrafted Wearable Armor / Metalwork / Mechanical Design',
      'gauntlet.craft_h':     'CRAFT_PHILOSOPHY',
      'gauntlet.craft_p1':    'This project is an exploration of historical craftsmanship through modern making. By hand-forging each plate, I sought to understand the ergonomic challenges faced by medieval armorers.',
      'gauntlet.craft_p2':    'The goal was not just visual replication, but functional authenticity—ensuring full range of motion while maintaining protective coverage.',
      'gauntlet.mat_iron':    'Primary structure for impact resistance',
      'gauntlet.mat_alum':    'Weight reduction in non-critical areas',
      'gauntlet.mat_leath':   'Inner glove foundation & flexibility',
      'gauntlet.mat_rivet':   'Articulated joint connections',
      'gauntlet.gallery_h':   'PRODUCT_GALLERY',
      'gauntlet.prev':        'PREVIOUS PROJECT',
      'gauntlet.next':        'NEXT PROJECT',

      /* ── project-mechanism.html ── */
      'mech.title':           'MECHANISM STUDY',
      'mech.desc':            'Hand-fabricated linkage exploring how force, proportion, and riveted joints choreograph motion without electronics. Every member was cut, drilled, and tuned manually to amplify the tactile qualities of mechanical articulation.',
      'mech.struct_h':        '1 // STRUCTURE',
      'mech.struct_p':        'Aluminum rails define the neutral axis while iron straps articulate around it. Each strap is manually bent, introducing subtle deviations that give the motion a human cadence.',
      'mech.motion_h':        '2 // MOTION',
      'mech.motion_p':        'Riveted pivots create instant centers that hold their geometry even after repeated stress cycles. The absence of bearings makes the tactile feedback audible—every movement has a sound and weight.',

      /* ── project-editorial-design.html (Shared Heater) ── */
      'heater.title':         'SHARED HEATER',
      'heater.desc':          'From the earliest campfires, warmth and human connection have been inseparable. However, modern heaters are often directional and isolating.',
      'heater.insight_h':     'DESIGN_INSIGHT',
      'heater.insight_p':     '<b>Shared Heater</b> re-engineers the conventional heating experience into a 360-degree social centerpiece—safe, electric, and inviting. It draws people into a comfortable radius, encouraging spontaneous conversation.',
      'heater.form_h':        'FORM_EXPLORATION',
      'heater.form_p':        'The radial fin layout projects heat in every direction, turning the device into a social focal point—much like a modern campfire.',
      'heater.final_h':       'FINAL_PRODUCT',
      'heater.final_p':       'The final design offers a cleaner, safer, and more portable alternative to traditional fire pits—rekindling the timeless ritual of gathering around shared warmth.',

      /* ── project-mobile-app.html (Mouse) ── */
      'mouse.title':          'Mouse for hand\nfunction disabilities',
      'mouse.intro_h':        'Mouse for hand<br>function disabilities',
      'mouse.desc':           'This project re-imagines the form and interaction logic of the conventional computer mouse for people with hand impairments. Field research—interviews, observation, and video documentation—revealed three core pain points:',

      /* ── project-miniature-panton-chair.html ── */
      'panton.title':         'MINIATURE PANTON CHAIR',
      'panton.subtitle':      '"Sitting should be a delight, not a duty." — Verner Panton',
      'panton.overview_h':    'PROJECT_OVERVIEW',
      'panton.overview_p':    'This project is a hand-carved miniature Panton Chair, paying tribute to Verner Panton\'s classic single-piece chair design. Selected maple wood, meticulously hand-carved and polished multiple times, precisely recreating the original "S" curve and ergonomic proportions.',
      'panton.tech_h':        'TECHNICAL_SPECS',
      'panton.process_h':     'CRAFTING_PROCESS',

      /* ── project-packaging.html (DND) ── */
      'dnd.launch_kicker':    'INTERACTIVE_BUILD',
      'dnd.launch_title':     'Launch YourDND',
      'dnd.sys_h':            'SYSTEM_OVERVIEW',
      'dnd.sys_p':            'An AI-driven Dungeon Master that combines stable world lore, encounter logic, and a constrained narrative voice—aiming to feel authored and intentional rather than random chatbot output.',
      'dnd.text_p1':          'The engine organizes a campaign into three layers: <strong>world lore</strong> (locations, factions, rules), <strong>session memory</strong> (party choices, relationships, unresolved hooks), and a <strong>scene manager</strong> that decides what kind of beat the player should experience next.',
      'dnd.text_p2':          'Instead of letting the model improvise everything, each response is grounded in retrieved notes and encounter templates—keeping tone consistent while still allowing for surprise.',
      'dnd.world_p':          'Key locations and factions were first visualized as analog-style dungeon notes before being encoded into the AI system as structured lore.',

      /* ── project-wend1.html ── */
      'wend1.title':          '1 WEND1',
      'wend1.overview_h':     'PROJECT_OVERVIEW',
      'wend1.desc':           'The film briefly describes the bizarre events in the life of a student named "Wendi Yi" in a small university town. All these strange moments point toward a mysterious figure and a Southeast Asian shop on the street.',

      /* ── project-motion-graphics.html (Self Portrait) ── */
      'portrait.title':       'SELF-PORTRAIT',
      'portrait.overview_h':  'PROJECT_OVERVIEW',
      'portrait.desc':        'This short film follows a young painter confronted by creeping horror inside his own studio. Shot on Bolex film, the piece uses grain, shadow, and tight framing to blur the line between self-observation and psychological disturbance.',

      /* ── project-hull-model.html ── */
      'hull.views_h':         'FORM_VIEWS',
      'hull.views_p':         'Three angles capture the way light runs along the ribs, revealing how small changes in section dramatically alter the perception of volume.',

      /* ── project-gaze.html ── */
      'gaze.hint':            '(Long press the center of the image)',

      /* ── 通用 meta 标签 ── */
      'meta.category':  'CATEGORY',
      'meta.year':      'YEAR',
      'meta.duration':  'DURATION',
      'meta.role':      'ROLE',
      'meta.date':      'DATE',
      'meta.status':    'STATUS',
      'meta.medium':    'MEDIUM',
      'meta.context':   'CONTEXT',
      'meta.format':    'FORMAT',
    },

    zh: {
      /* ── 公共导航 ── */
      'nav.name':    '赵一凡',
      'nav.index':   '主页',
      'nav.about':   '关于',
      'nav.archive': '档案库',
      'nav.gallery': '画廊',
      'nav.project': '项目',

      /* ── 页脚 ── */
      'footer.copyright':  '© 2025 赵一凡',
      'footer.about':      '关于',
      'footer.contact':    '联系',
      'footer.return':     '返回档案库',

      /* ── index.html ── */
      'index.title':          '赵一凡 - 作品档案',
      'index.subtitle':       '// 工业设计_档案库',
      'index.status_online':  '系统_在线',
      'index.status_loc':     '位置: 普罗维登斯, RI',
      'index.status_updated': '更新: 2025.01',

      'index.sec_ps':       '// 问题 / 解决方案',
      'index.sec_handmade': '// 手工制作',
      'index.sec_digital':  '// 数字 / AI',
      'index.sec_action':   '// 影像!',
      'index.sec_art':      '// 艺术?',

      'proj.sneakers':       '模块化运动鞋',
      'proj.sneakers_tags':  '3D打印 // 系统设计',
      'proj.heater':         '共享取暖器',
      'proj.heater_tags':    '产品设计 // 热力学',
      'proj.mouse':          '无障碍鼠标',
      'proj.mouse_tags':     '无障碍设计 // 用户体验',
      'proj.gauntlet':       '中世纪骑士护手',
      'proj.gauntlet_tags':  '金属工艺 // 盔甲',
      'proj.mechanism':      '机构研究',
      'proj.mechanism_tags': '连杆机构 // 动力学',
      'proj.panton':         '潘顿椅微缩模型',
      'proj.panton_tags':    '木雕工艺',
      'proj.dnd':            'DND冒险游戏',
      'proj.dnd_tags':       'AI // 游戏设计',
      'proj.wend1':          '1 Wend1',
      'proj.wend1_tags':     '影像艺术',
      'proj.portrait':       '自画像',
      'proj.portrait_tags':  '实验影像',
      'proj.gaze':           '凝视',
      'proj.gaze_tags':      '木炭画 // 肖像',
      'proj.hull':           '船体模型',
      'proj.hull_tags':      '传统工艺',

      /* ── about.html ── */
      'about.title':          '关于 - 赵一凡',
      'about.personnel':      '// 个人档案',
      'about.role':           '工业设计师 / 影像创作者',
      'about.loc':            '普罗维登斯, RI',
      'about.status':         '在线',
      'about.resume':         '[ 下载简历 ]',
      'about.bio1':           '我善于从多角度切入问题，尤其擅长在项目初期激发创新突破。',
      'about.bio2':           '横跨<strong>工业设计</strong>、<strong>影像/视频</strong>与<strong>编程</strong>三个领域，我构建连接物理与数字世界的系统。',
      'about.skill_matrix':   '技能矩阵',
      'about.skill_design':   '设计与建模',
      'about.skill_eng':      '工程与开发',
      'about.skill_craft':    '工艺与制造',
      'about.skill_media':    '媒体与艺术',
      'about.edu_log':        '教育经历',
      'about.risd_degree':    '工业设计 / 影像艺术（FAV）学士',
      'about.brown_degree':   '交换学者（计算机科学与工程）',

      /* ── gallery.html ── */
      'gallery.title':        '画廊 - 赵一凡',
      'gallery.explore_h':    '探索完整作品集',
      'gallery.explore_p':    '以档案视图浏览所有项目，支持详细分类与筛选。',
      'gallery.view_all':     '查看全部作品',

      /* ── project-modular-sneakers.html ── */
      'sneakers.title':       '模块化运动鞋',
      'sneakers.subtitle':    '// "现代运动鞋系统"的多元宇宙',
      'sneakers.sys_h':       '系统概览',
      'sneakers.sys_p':       '我们的模块化运动鞋以适应性为核心——一套变革性的鞋类系统，旨在满足多项目运动员与都市探险者不断演变的需求。',
      'sneakers.ux_h':        '用户体验',
      'sneakers.ux_p':        '单一基础底盘加上可拆卸模块库，用户可根据日程定制鞋款。清晨跑步？换上高弹中底。午间打篮球？装上场地优化防滑垫。傍晚城市漫步？扣上生活外壳。这种适应性意味着你不再需要为不同场合准备多双鞋——一套智能系统即可应对一切。',
      'sneakers.tech_h':      '技术规格',

      /* ── project-medieval-gauntlet.html ── */
      'gauntlet.title':       '中世纪骑士护手',
      'gauntlet.subtitle':    '// 手工可穿戴盔甲 / 金属工艺 / 机械设计',
      'gauntlet.craft_h':     '工艺理念',
      'gauntlet.craft_p1':    '这个项目通过现代制作方式探索历史工艺。通过手工锻造每一块甲片，我深刻理解了中世纪铠甲师所面临的人体工学挑战。',
      'gauntlet.craft_p2':    '目标不仅是视觉上的复刻，更是功能上的真实还原——在保持防护覆盖的同时确保完整的活动范围。',
      'gauntlet.mat_iron':    '主要结构，提供抗冲击性',
      'gauntlet.mat_alum':    '非关键区域减重',
      'gauntlet.mat_leath':   '内手套基础与灵活性',
      'gauntlet.mat_rivet':   '铰接关节连接',
      'gauntlet.gallery_h':   '产品展示',
      'gauntlet.prev':        '上一个项目',
      'gauntlet.next':        '下一个项目',

      /* ── project-mechanism.html ── */
      'mech.title':           '机构研究',
      'mech.desc':            '手工制作的连杆机构，探索力、比例与铆接转轴如何在无电子元件的情况下编排运动。每个构件均手工切割、钻孔并调试，以放大机械关节的触觉质感。',
      'mech.struct_h':        '1 // 结构',
      'mech.struct_p':        '铝制轨道定义中性轴，铁制连板围绕其运动。每条连板经手工弯曲，引入细微偏差，赋予运动人文般的节奏感。',
      'mech.motion_h':        '2 // 运动',
      'mech.motion_p':        '铆接转轴形成瞬时中心，在反复应力循环后依然保持几何精度。缺少轴承使触觉反馈可被听见——每一次运动都有声音与重量。',

      /* ── project-editorial-design.html (Shared Heater) ── */
      'heater.title':         '共享取暖器',
      'heater.desc':          '自远古篝火以来，温暖与人际连接从未分离。然而，现代取暖器往往是定向且孤立的。',
      'heater.insight_h':     '设计洞察',
      'heater.insight_p':     '<b>共享取暖器</b>将传统取暖体验重新设计为360度社交核心——安全、电动、充满吸引力。它将人们聚拢至舒适的半径范围内，促进自发的对话。',
      'heater.form_h':        '形态探索',
      'heater.form_p':        '辐射状散热片向四面八方传递热量，将设备变成社交焦点——如同现代篝火。',
      'heater.final_h':       '最终产品',
      'heater.final_p':       '最终设计提供了一种比传统火坑更清洁、更安全、更便携的选择——重燃了围坐共暖这一永恒的仪式感。',

      /* ── project-mobile-app.html (Mouse) ── */
      'mouse.title':          '面向手部功能障碍者的鼠标设计',
      'mouse.intro_h':        '面向手部功能<br>障碍者的鼠标',
      'mouse.desc':           '本项目为手部受损人群重新构想了传统计算机鼠标的形态与交互逻辑。通过访谈、观察和视频记录等实地调研，揭示了三个核心痛点：',

      /* ── project-miniature-panton-chair.html ── */
      'panton.title':         '潘顿椅微缩模型',
      'panton.subtitle':      '"坐应是一种享受，而非义务。" — Verner Panton',
      'panton.overview_h':    '项目概述',
      'panton.overview_p':    '本项目是一把手工雕刻的潘顿椅微缩模型，致敬 Verner Panton 的经典一体式椅子设计。选用枫木，精心手工雕刻并多次打磨抛光，精确再现原版"S"形曲线与人体工学比例。',
      'panton.tech_h':        '技术规格',
      'panton.process_h':     '制作过程',

      /* ── project-packaging.html (DND) ── */
      'dnd.launch_kicker':    '互动体验',
      'dnd.launch_title':     '启动 YourDND',
      'dnd.sys_h':            '系统概览',
      'dnd.sys_p':            '一个AI驱动的地下城主，融合了稳定的世界背景故事、遭遇逻辑与受约束的叙事风格——目标是呈现有作者意图的叙述，而非随机聊天机器人的输出。',
      'dnd.text_p1':          '引擎将战役组织为三个层次：<strong>世界背景</strong>（地点、阵营、规则）、<strong>会话记忆</strong>（队伍选择、关系、未解决的伏笔），以及决定玩家下一步体验类型的<strong>场景管理器</strong>。',
      'dnd.text_p2':          '引擎并非让模型即兴发挥一切，而是将每条回应植根于检索到的笔记和遭遇模板——在保持叙事风格一致的同时依然允许惊喜。',
      'dnd.world_p':          '关键地点和阵营首先以模拟式地下城笔记的形式可视化，随后被编码为结构化背景故事输入AI系统。',

      /* ── project-wend1.html ── */
      'wend1.title':          '1 Wend1',
      'wend1.overview_h':     '项目概述',
      'wend1.desc':           '影片简述了一个名为"易文迪"的学生在小大学城中经历的离奇事件。所有这些怪异时刻都指向一个神秘人物以及街上的一家东南亚小店。',

      /* ── project-motion-graphics.html (Self Portrait) ── */
      'portrait.title':       '自画像',
      'portrait.overview_h':  '项目概述',
      'portrait.desc':        '这部短片讲述了一位年轻画家在自己的工作室里被渐渐袭来的恐惧所笼罩的故事。以 Bolex 胶片拍摄，通过颗粒感、阴影和紧凑构图模糊了自我观察与心理扰动之间的边界。',

      /* ── project-hull-model.html ── */
      'hull.views_h':         '形态视图',
      'hull.views_p':         '三个角度捕捉光线沿肋骨流动的方式，揭示截面的微小变化如何显著改变对体量的感知。',

      /* ── project-gaze.html ── */
      'gaze.hint':            '（长按图片中央区域）',

      /* ── 通用 meta 标签 ── */
      'meta.category':  'CATEGORY',
      'meta.year':      'YEAR',
      'meta.duration':  'DURATION',
      'meta.role':      'ROLE',
      'meta.date':      'DATE',
      'meta.status':    'STATUS',
      'meta.medium':    'MEDIUM',
      'meta.context':   'CONTEXT',
      'meta.format':    'FORMAT',
    }
  };

  // ─── 核心引擎 ─────────────────────────────────────────────────────────────────

  var STORAGE_KEY = 'yifan_lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function t(lang, key) {
    var d = DICT[lang] || DICT.en;
    return d[key] !== undefined ? d[key] : ((DICT.en[key] !== undefined) ? DICT.en[key] : key);
  }

  function applyLang(lang) {
    /* html lang attr */
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    /* document title */
    var titleKey = document.documentElement.dataset.i18nTitle;
    if (titleKey) document.title = t(lang, titleKey);

    /* text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = t(lang, el.dataset.i18n);
      if (val !== el.dataset.i18n) el.textContent = val;
    });

    /* innerHTML (allows <strong> etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = t(lang, el.dataset.i18nHtml);
      if (val !== el.dataset.i18nHtml) el.innerHTML = val;
    });

    /* toggle button label */
    var btn = document.getElementById('i18n-lang-btn');
    if (btn) {
      btn.textContent = lang === 'zh' ? 'EN' : '中文';
      btn.title = lang === 'zh' ? 'Switch to English' : '切换到中文';
    }
  }

  // ─── 按钮注入 ─────────────────────────────────────────────────────────────────

  function injectButton() {
    if (document.getElementById('i18n-lang-btn')) return;

    var btn = document.createElement('button');
    btn.id = 'i18n-lang-btn';
    btn.style.cssText = [
      'background:transparent',
      'border:1px solid rgba(255,255,255,0.22)',
      'color:inherit',
      'font-family:inherit',
      'font-size:0.72rem',
      'letter-spacing:0.12em',
      'padding:0.28rem 0.65rem',
      'cursor:pointer',
      'transition:border-color 0.2s,opacity 0.2s',
      'line-height:1',
      'border-radius:2px',
      'white-space:nowrap',
      'vertical-align:middle',
      'opacity:0.75'
    ].join(';');

    btn.addEventListener('mouseenter', function () {
      btn.style.borderColor = 'rgba(255,255,255,0.65)';
      btn.style.opacity = '1';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.borderColor = 'rgba(255,255,255,0.22)';
      btn.style.opacity = '0.75';
    });
    btn.addEventListener('click', function () {
      setLang(getLang() === 'zh' ? 'en' : 'zh');
    });

    /* 查找可注入的导航容器 */
    var target =
      document.querySelector('.nav-links') ||
      document.querySelector('.brand-with-about') ||
      document.querySelector('header nav') ||
      document.querySelector('header');

    if (target) {
      target.appendChild(btn);
    } else {
      /* 兜底：固定在右上角 */
      btn.style.position = 'fixed';
      btn.style.top = '1.1rem';
      btn.style.right = '1.5rem';
      btn.style.zIndex = '9999';
      document.body.appendChild(btn);
    }
  }

  // ─── 初始化 ───────────────────────────────────────────────────────────────────

  function init() {
    injectButton();
    applyLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
