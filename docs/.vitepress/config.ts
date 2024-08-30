// .vitepress/config.js
export default {
  // 站点级选项
  title: "VitePress",
  description: "Just playing around.",

  themeConfig: {
    logo: "",
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "src/markedjs" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
  },
};
