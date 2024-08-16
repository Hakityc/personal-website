import { build, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";
import unocss from "unocss/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import pxtorem from "postcss-pxtorem";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { viteMockServe } from "vite-plugin-mock";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  process.env.BROWSER = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const config = {
    plugins: [
      vue(),
      unocss(),
      AutoImport({
        imports: ["vue", "vue-router"],
        dts: "types/auto-imports.d.ts",
      }),
      Components({
        resolvers: [AntDesignVueResolver({ importStyle: "less" }), IconsResolver({ prefix: "i" })],
        dts: "./types/components.d.ts",
        include: [/\.ts$/, /\.vue$/],
      }),
      Icons({
        scale: 1, // 缩放比 相对1em
        autoInstall: true, // 自动安装
        compiler: "vue3", // 编译方式
      }),
      VueI18nPlugin({}),
      viteMockServe({
        mockPath: "./src/mocks",
        enable: true, //在开发环境中启用 mock
      }),
      vueDevTools()
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"), // 路径别名
      },
      extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            "primary-color": "#4d6deb",
            "text-color": "#2e2e33",
            "error-color": "#e64552",
          },
          javascriptEnabled: true,
        },
      },
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 32,
            propList: ["*"],
          }),
        ],
      },
    },
    build: {
      target: "modules",
      outDir: "build/html", // 指定输出路径
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖,解决插件报错问题(reading 'isCE')
        // external: ["vue"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
          },
        },
      },
    },
    server: {
      host: "0.0.0.0",
      open: true,
      proxy: {
        // "/api": {
        //   target: "http://localhost:8080",
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/api/, ""),
        // },
      },
    },
  };
  return config;
});
