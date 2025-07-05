// 项目数据统一维护
const projects = [
  {
    title: "Modular Sneakers",
    subtitle: "Product Design / 3D Modeling / Prototyping",
    category: "Product Design",
    year: "2024",
    tags: ["Product Design", "3D Modeling", "Prototyping"],
    link: "project-modular-sneakers.html",
    placeholderText: "MODULAR SNEAKERS",
    placeholderColor: "#667eea",
    cover: "Shoes/2/Product gray2.jpg"
  },
  {
    title: "Medieval Gauntlet",
    subtitle: "Handcrafted Wearable Armor / Metalwork / Mechanical Design",
    category: "Craftsmanship & Mechanical Design",
    year: "2023",
    tags: ["Armor", "Metalwork", "Handcraft", "Medieval"],
    link: "project-medieval-gauntlet.html",
    placeholderText: "MEDIEVAL GAUNTLET",
    placeholderColor: "#333",
    cover: "Gauntlet/Hero image1.jpg"
  },
  {
    title: "Mechanism",
    subtitle: "Mechanical Engineering / Metal Fabrication / Linkage Design",
    category: "Mechanical Engineering",
    year: "2022",
    tags: ["Mechanism", "Aluminum", "Iron", "Linkage"],
    link: "project-mechanism.html",
    placeholderText: "MECHANISM",
    placeholderColor: "#555",
    cover: "Mechanism/Hero1.jpg"
  },
  {
    title: "Miniature Panton Chair",
    subtitle: "Hand-Carved Tribute / Wood Sculpture / Design Homage",
    category: "Craftsmanship & Sculpture",
    year: "2023",
    tags: ["Wood Carving", "Sculpture", "Design Tribute", "Maple"],
    link: "project-miniature-panton-chair.html",
    placeholderText: "MINIATURE PANTON",
    placeholderColor: "#8B0000",
    cover: "Panton/chair1.png"
  },
  {
    title: "Hull Model",
    subtitle: "Upcycled Wood Craft / Ship Model / Hand Carving",
    category: "Craftsmanship & Upcycling",
    year: "2021",
    tags: ["Wood Carving", "Ship Model", "Upcycling", "Handcraft"],
    link: "project-hull-model.html",
    placeholderText: "HULL MODEL",
    placeholderColor: "#8B4513",
    cover: "Hull Model/side1.png"
  },
  {
    title: "1 Wend1",
    subtitle: "Film / Video Streaming / Visual Art",
    category: "Film & Video",
    year: "2023",
    tags: ["Video", "Film", "Bilibili", "Art"],
    link: "project-wend1.html",
    placeholderText: "1 WEND1",
    placeholderColor: "#444",
    cover: "1wend1/Stills1.png"
  },
  {
    title: "Self-portrait",
    subtitle: "Film / Video Streaming / Visual Art",
    category: "Film & Video",
    year: "2022",
    tags: ["Video", "Film", "Bilibili", "Art"],
    link: "project-motion-graphics.html",
    placeholderText: "SELF-PORTRAIT",
    placeholderColor: "#222",
    cover: "self portrait/self p.png"
  },
  {
    title: "Editorial Design",
    subtitle: "Print Design / Art Publication",
    category: "Print Design",
    year: "2025",
    tags: ["Print", "Layout", "Typography"],
    link: "project-editorial-design.html",
    placeholderText: "EDITORIAL DESIGN",
    placeholderColor: "#666"
  },
  {
    title: "Mobile App Design",
    subtitle: "Health & Wellness / User Experience",
    category: "Mobile App",
    year: "2025",
    tags: ["Mobile", "Health", "UX"],
    link: "project-mobile-app.html",
    placeholderText: "MOBILE APP",
    placeholderColor: "#777"
  },
  {
    title: "E-commerce Platform",
    subtitle: "Online Store / Artisan Crafts",
    category: "E-commerce",
    year: "2025",
    tags: ["E-commerce", "Shopify", "UX"],
    link: "project-ecommerce.html",
    placeholderText: "E-COMMERCE",
    placeholderColor: "#888"
  },
  {
    title: "Packaging Design",
    subtitle: "Sustainable / Organic Products",
    category: "Packaging",
    year: "2025",
    tags: ["Packaging", "Sustainable", "Branding"],
    link: "project-packaging.html",
    placeholderText: "PACKAGING",
    placeholderColor: "#999"
  }
];

// 兼容浏览器和模块
if (typeof window !== 'undefined') {
  window.projects = projects;
}
if (typeof module !== 'undefined') {
  module.exports = projects;
} 