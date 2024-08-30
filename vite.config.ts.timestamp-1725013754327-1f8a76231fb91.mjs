// vite.config.ts
import { defineConfig } from "file:///E:/personal/project/personal-website/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/personal/project/personal-website/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///E:/personal/project/personal-website/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/personal/project/personal-website/node_modules/unplugin-vue-components/dist/vite.mjs";
import { AntDesignVueResolver } from "file:///E:/personal/project/personal-website/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { resolve } from "path";
import unocss from "file:///E:/personal/project/personal-website/node_modules/unocss/dist/vite.mjs";
import Icons from "file:///E:/personal/project/personal-website/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///E:/personal/project/personal-website/node_modules/unplugin-icons/dist/resolver.mjs";
import pxtorem from "file:///E:/personal/project/personal-website/node_modules/postcss-pxtorem/index.js";
import VueI18nPlugin from "file:///E:/personal/project/personal-website/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { viteMockServe } from "file:///E:/personal/project/personal-website/node_modules/vite-plugin-mock/dist/index.mjs";
import vueDevTools from "file:///E:/personal/project/personal-website/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_dirname = "E:\\personal\\project\\personal-website";
var vite_config_default = defineConfig(({ command, mode }) => {
  process.env.BROWSER = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const config = {
    plugins: [
      vue(),
      unocss(),
      AutoImport({
        imports: ["vue", "vue-router"],
        dts: "types/auto-imports.d.ts"
      }),
      Components({
        resolvers: [AntDesignVueResolver({ importStyle: "less" }), IconsResolver({ prefix: "i" })],
        dts: "./types/components.d.ts",
        include: [/\.ts$/, /\.vue$/]
      }),
      Icons({
        scale: 1,
        // 缩放比 相对1em
        autoInstall: true,
        // 自动安装
        compiler: "vue3"
        // 编译方式
      }),
      VueI18nPlugin({}),
      viteMockServe({
        mockPath: "./src/mocks",
        enable: true
        //在开发环境中启用 mock
      }),
      vueDevTools()
    ],
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "src")
        // 路径别名
      },
      extensions: [".js", ".json", ".ts"]
      // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            "primary-color": "#4d6deb",
            "text-color": "#2e2e33",
            "error-color": "#e64552"
          },
          javascriptEnabled: true
        }
      },
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 32,
            propList: ["*"]
          })
        ]
      }
    },
    build: {
      target: "modules",
      outDir: "build/html",
      // 指定输出路径
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖,解决插件报错问题(reading 'isCE')
        // external: ["vue"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue"
          }
        }
      }
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
      }
    }
  };
  return config;
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxwZXJzb25hbFxcXFxwcm9qZWN0XFxcXHBlcnNvbmFsLXdlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHBlcnNvbmFsXFxcXHByb2plY3RcXFxccGVyc29uYWwtd2Vic2l0ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovcGVyc29uYWwvcHJvamVjdC9wZXJzb25hbC13ZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgYnVpbGQsIGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xyXG5pbXBvcnQgeyBBbnREZXNpZ25WdWVSZXNvbHZlciB9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIjtcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB1bm9jc3MgZnJvbSBcInVub2Nzcy92aXRlXCI7XHJcbmltcG9ydCBJY29ucyBmcm9tIFwidW5wbHVnaW4taWNvbnMvdml0ZVwiO1xyXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tIFwidW5wbHVnaW4taWNvbnMvcmVzb2x2ZXJcIjtcclxuaW1wb3J0IHB4dG9yZW0gZnJvbSBcInBvc3Rjc3MtcHh0b3JlbVwiO1xyXG5pbXBvcnQgVnVlSTE4blBsdWdpbiBmcm9tIFwiQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZVwiO1xyXG5pbXBvcnQgeyB2aXRlTW9ja1NlcnZlIH0gZnJvbSBcInZpdGUtcGx1Z2luLW1vY2tcIjtcclxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gXCJ2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcclxuICBwcm9jZXNzLmVudi5CUk9XU0VSID0gXCJDOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEdvb2dsZVxcXFxDaHJvbWVcXFxcQXBwbGljYXRpb25cXFxcY2hyb21lLmV4ZVwiO1xyXG4gIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgdnVlKCksXHJcbiAgICAgIHVub2NzcygpLFxyXG4gICAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgICBpbXBvcnRzOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCJdLFxyXG4gICAgICAgIGR0czogXCJ0eXBlcy9hdXRvLWltcG9ydHMuZC50c1wiLFxyXG4gICAgICB9KSxcclxuICAgICAgQ29tcG9uZW50cyh7XHJcbiAgICAgICAgcmVzb2x2ZXJzOiBbQW50RGVzaWduVnVlUmVzb2x2ZXIoeyBpbXBvcnRTdHlsZTogXCJsZXNzXCIgfSksIEljb25zUmVzb2x2ZXIoeyBwcmVmaXg6IFwiaVwiIH0pXSxcclxuICAgICAgICBkdHM6IFwiLi90eXBlcy9jb21wb25lbnRzLmQudHNcIixcclxuICAgICAgICBpbmNsdWRlOiBbL1xcLnRzJC8sIC9cXC52dWUkL10sXHJcbiAgICAgIH0pLFxyXG4gICAgICBJY29ucyh7XHJcbiAgICAgICAgc2NhbGU6IDEsIC8vIFx1N0YyOVx1NjUzRVx1NkJENCBcdTc2RjhcdTVCRjkxZW1cclxuICAgICAgICBhdXRvSW5zdGFsbDogdHJ1ZSwgLy8gXHU4MUVBXHU1MkE4XHU1Qjg5XHU4OEM1XHJcbiAgICAgICAgY29tcGlsZXI6IFwidnVlM1wiLCAvLyBcdTdGMTZcdThCRDFcdTY1QjlcdTVGMEZcclxuICAgICAgfSksXHJcbiAgICAgIFZ1ZUkxOG5QbHVnaW4oe30pLFxyXG4gICAgICB2aXRlTW9ja1NlcnZlKHtcclxuICAgICAgICBtb2NrUGF0aDogXCIuL3NyYy9tb2Nrc1wiLFxyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSwgLy9cdTU3MjhcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTRFMkRcdTU0MkZcdTc1MjggbW9ja1xyXG4gICAgICB9KSxcclxuICAgICAgdnVlRGV2VG9vbHMoKVxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLCAvLyBcdThERUZcdTVGODRcdTUyMkJcdTU0MERcclxuICAgICAgfSxcclxuICAgICAgZXh0ZW5zaW9uczogW1wiLmpzXCIsIFwiLmpzb25cIiwgXCIudHNcIl0sIC8vIFx1NEY3Rlx1NzUyOFx1OERFRlx1NUY4NFx1NTIyQlx1NTQwRFx1NjVGNlx1NjBGM1x1ODk4MVx1NzcwMVx1NzU2NVx1NzY4NFx1NTQwRVx1N0YwMFx1NTQwRFx1RkYwQ1x1NTNFRlx1NEVFNVx1ODFFQVx1NURGMSBcdTU4OUVcdTUxQ0ZcclxuICAgIH0sXHJcbiAgICBjc3M6IHtcclxuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICAgIGxlc3M6IHtcclxuICAgICAgICAgIG1vZGlmeVZhcnM6IHtcclxuICAgICAgICAgICAgXCJwcmltYXJ5LWNvbG9yXCI6IFwiIzRkNmRlYlwiLFxyXG4gICAgICAgICAgICBcInRleHQtY29sb3JcIjogXCIjMmUyZTMzXCIsXHJcbiAgICAgICAgICAgIFwiZXJyb3ItY29sb3JcIjogXCIjZTY0NTUyXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgcG9zdGNzczoge1xyXG4gICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgIHB4dG9yZW0oe1xyXG4gICAgICAgICAgICByb290VmFsdWU6IDMyLFxyXG4gICAgICAgICAgICBwcm9wTGlzdDogW1wiKlwiXSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgdGFyZ2V0OiBcIm1vZHVsZXNcIixcclxuICAgICAgb3V0RGlyOiBcImJ1aWxkL2h0bWxcIiwgLy8gXHU2MzA3XHU1QjlBXHU4RjkzXHU1MUZBXHU4REVGXHU1Rjg0XHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAvLyBcdTc4NkVcdTRGRERcdTU5MTZcdTkwRThcdTUzMTZcdTU5MDRcdTc0MDZcdTkwQTNcdTRFOUJcdTRGNjBcdTRFMERcdTYwRjNcdTYyNTNcdTUzMDVcdThGREJcdTVFOTNcdTc2ODRcdTRGOURcdThENTYsXHU4OUUzXHU1MUIzXHU2M0QyXHU0RUY2XHU2MkE1XHU5NTE5XHU5NUVFXHU5ODk4KHJlYWRpbmcgJ2lzQ0UnKVxyXG4gICAgICAgIC8vIGV4dGVybmFsOiBbXCJ2dWVcIl0sXHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAvLyBcdTU3MjggVU1EIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1NEUwQlx1NEUzQVx1OEZEOVx1NEU5Qlx1NTkxNlx1OTBFOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjNEMFx1NEY5Qlx1NEUwMFx1NEUyQVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxyXG4gICAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgICB2dWU6IFwiVnVlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4gICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICBwcm94eToge1xyXG4gICAgICAgIC8vIFwiL2FwaVwiOiB7XHJcbiAgICAgICAgLy8gICB0YXJnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIsXHJcbiAgICAgICAgLy8gICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgLy8gICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCJcIiksXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gY29uZmlnO1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUyxTQUFnQixvQkFBb0I7QUFDMVUsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsZUFBZTtBQUN4QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sYUFBYTtBQUNwQixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLGlCQUFpQjtBQVp4QixJQUFNLG1DQUFtQztBQWV6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUFNO0FBQ2pELFVBQVEsSUFBSSxVQUFVO0FBQ3RCLFFBQU0sU0FBUztBQUFBLElBQ2IsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLFFBQ1QsU0FBUyxDQUFDLE9BQU8sWUFBWTtBQUFBLFFBQzdCLEtBQUs7QUFBQSxNQUNQLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxhQUFhLE9BQU8sQ0FBQyxHQUFHLGNBQWMsRUFBRSxRQUFRLElBQUksQ0FBQyxDQUFDO0FBQUEsUUFDekYsS0FBSztBQUFBLFFBQ0wsU0FBUyxDQUFDLFNBQVMsUUFBUTtBQUFBLE1BQzdCLENBQUM7QUFBQSxNQUNELE1BQU07QUFBQSxRQUNKLE9BQU87QUFBQTtBQUFBLFFBQ1AsYUFBYTtBQUFBO0FBQUEsUUFDYixVQUFVO0FBQUE7QUFBQSxNQUNaLENBQUM7QUFBQSxNQUNELGNBQWMsQ0FBQyxDQUFDO0FBQUEsTUFDaEIsY0FBYztBQUFBLFFBQ1osVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBO0FBQUEsTUFDVixDQUFDO0FBQUEsTUFDRCxZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQTtBQUFBLE1BQy9CO0FBQUEsTUFDQSxZQUFZLENBQUMsT0FBTyxTQUFTLEtBQUs7QUFBQTtBQUFBLElBQ3BDO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixZQUFZO0FBQUEsWUFDVixpQkFBaUI7QUFBQSxZQUNqQixjQUFjO0FBQUEsWUFDZCxlQUFlO0FBQUEsVUFDakI7QUFBQSxVQUNBLG1CQUFtQjtBQUFBLFFBQ3JCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLFVBQ1AsUUFBUTtBQUFBLFlBQ04sV0FBVztBQUFBLFlBQ1gsVUFBVSxDQUFDLEdBQUc7QUFBQSxVQUNoQixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUE7QUFBQSxNQUNSLGVBQWU7QUFBQTtBQUFBO0FBQUEsUUFHYixRQUFRO0FBQUE7QUFBQSxVQUVOLFNBQVM7QUFBQSxZQUNQLEtBQUs7QUFBQSxVQUNQO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTVA7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
