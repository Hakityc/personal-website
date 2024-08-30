// .vitepress/config.js
import { defineConfig } from "vitepress";
// import viteConfig from "../../vite.config";

export default defineConfig({
  title: "Tam的博客",
  description: "",
  head: [["link", { rel: "icon", href: "/public/favicon.ico" }]],
  themeConfig: {
    logo: "/public/favicon.ico",
    siteTitle: "Tam的博客",
    nav: [
      {
        text: "开发知识",
        items: [
          { text: "前端开发", link: "/guide" },
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
      {
        text: "UI设计",
        items: [
          { text: "UI设计", link: "/guide" },
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
      { text: "开发工具", link: "" },
    ],
    sidebar: [
      {
        text: "导航",
        items: [
          { text: "Introduction", link: "src/markedjs" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
  },
  // vite: {
  //   ...viteConfig,
  // },
});
