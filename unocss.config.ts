import { defineConfig, presetAttributify, presetUno, presetIcons } from "unocss";
import { presetExtra } from "unocss-preset-extra";
import { presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno({}),
    presetAttributify(),
    presetIcons({ scale: 1.2, warn: true }),
    presetExtra(),
    presetWebFonts({
      // provider: 'google',
      // fonts: {
      //   sans: 'Roboto',
      //   mono: ['Fira Code', 'Fira Mono:400,700'],
      // },
    }),
  ],
  shortcuts: [
    ["wh-full", "w-full h-full"],
    ["f-c-c", "flex justify-center items-center"],
    ["flex-col", "flex flex-col"],
    ["text-ellipsis", "truncate"],
    [
      "icon-btn",
      "text-16 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none",
    ],
  ],
  rules: [
    [/^bc-(.+)$/, ([, color]) => ({ "border-color": `#${color}` })],
    ["card-shadow", { "box-shadow": "0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017" }],
  ],
  theme: {
    colors: {
      primary: "var(--primary-color)",
      default: "var(--default-color)",
      dark_bg: "var(--dark-bg)",
    },
    breakpoints: {
      sm: "768px", // 如平板竖屏
      md: "1024px", // 大屏平板，笔记本电脑
      lg: "1280px", // 桌面显示器，低分辨率
      xl: "1536px", // 桌面显示器, 高分辨率
      "2xl": "1920px", // 1080p桌面显示器
      "3xl": "2560px", // 1440p桌面显示器
    },
  },
});
