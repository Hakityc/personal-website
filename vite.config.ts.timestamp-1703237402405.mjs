// vite.config.ts
import { defineConfig } from "file:///E:/MyProject/personal-website/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/MyProject/personal-website/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///E:/MyProject/personal-website/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/MyProject/personal-website/node_modules/unplugin-vue-components/dist/vite.mjs";
import { AntDesignVueResolver } from "file:///E:/MyProject/personal-website/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { resolve } from "path";
import unocss from "file:///E:/MyProject/personal-website/node_modules/unocss/dist/vite.mjs";
import Icons from "file:///E:/MyProject/personal-website/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///E:/MyProject/personal-website/node_modules/unplugin-icons/dist/resolver.mjs";
import pxtorem from "file:///E:/MyProject/personal-website/node_modules/postcss-pxtorem/index.js";
var __vite_injected_original_dirname = "E:\\MyProject\\personal-website";
var vite_config_default = defineConfig({
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
    })
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
  server: {
    host: "0.0.0.0",
    proxy: {}
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxNeVByb2plY3RcXFxccGVyc29uYWwtd2Vic2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcTXlQcm9qZWN0XFxcXHBlcnNvbmFsLXdlYnNpdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L015UHJvamVjdC9wZXJzb25hbC13ZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIlxyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCJcclxuaW1wb3J0IHsgQW50RGVzaWduVnVlUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCJcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCJcclxuaW1wb3J0IHVub2NzcyBmcm9tIFwidW5vY3NzL3ZpdGVcIlxyXG5pbXBvcnQgSWNvbnMgZnJvbSBcInVucGx1Z2luLWljb25zL3ZpdGVcIlxyXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tIFwidW5wbHVnaW4taWNvbnMvcmVzb2x2ZXJcIlxyXG5pbXBvcnQgcHh0b3JlbSBmcm9tIFwicG9zdGNzcy1weHRvcmVtXCJcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICB1bm9jc3MoKSxcclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICBpbXBvcnRzOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCJdLFxyXG4gICAgICBkdHM6IFwidHlwZXMvYXV0by1pbXBvcnRzLmQudHNcIixcclxuICAgIH0pLFxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIHJlc29sdmVyczogW0FudERlc2lnblZ1ZVJlc29sdmVyKHsgaW1wb3J0U3R5bGU6IFwibGVzc1wiIH0pLCBJY29uc1Jlc29sdmVyKHsgcHJlZml4OiBcImlcIiB9KV0sXHJcbiAgICAgIGR0czogXCIuL3R5cGVzL2NvbXBvbmVudHMuZC50c1wiLFxyXG4gICAgICBpbmNsdWRlOiBbL1xcLnRzJC8sIC9cXC52dWUkL10sXHJcbiAgICB9KSxcclxuICAgIEljb25zKHtcclxuICAgICAgc2NhbGU6IDEsIC8vIFx1N0YyOVx1NjUzRVx1NkJENCBcdTc2RjhcdTVCRjkxZW1cclxuICAgICAgYXV0b0luc3RhbGw6IHRydWUsIC8vIFx1ODFFQVx1NTJBOFx1NUI4OVx1ODhDNVxyXG4gICAgICBjb21waWxlcjogXCJ2dWUzXCIsIC8vIFx1N0YxNlx1OEJEMVx1NjVCOVx1NUYwRlxyXG4gICAgfSksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLCAvLyBcdThERUZcdTVGODRcdTUyMkJcdTU0MERcclxuICAgIH0sXHJcbiAgICBleHRlbnNpb25zOiBbXCIuanNcIiwgXCIuanNvblwiLCBcIi50c1wiXSwgLy8gXHU0RjdGXHU3NTI4XHU4REVGXHU1Rjg0XHU1MjJCXHU1NDBEXHU2NUY2XHU2MEYzXHU4OTgxXHU3NzAxXHU3NTY1XHU3Njg0XHU1NDBFXHU3RjAwXHU1NDBEXHVGRjBDXHU1M0VGXHU0RUU1XHU4MUVBXHU1REYxIFx1NTg5RVx1NTFDRlxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIGxlc3M6IHtcclxuICAgICAgICBtb2RpZnlWYXJzOiB7XHJcbiAgICAgICAgICBcInByaW1hcnktY29sb3JcIjogXCIjNGQ2ZGViXCIsXHJcbiAgICAgICAgICBcInRleHQtY29sb3JcIjogXCIjMmUyZTMzXCIsXHJcbiAgICAgICAgICBcImVycm9yLWNvbG9yXCI6IFwiI2U2NDU1MlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgcHh0b3JlbSh7XHJcbiAgICAgICAgICByb290VmFsdWU6IDMyLCBcclxuICAgICAgICAgIHByb3BMaXN0OiBbXCIqXCJdLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXHJcbiAgICBwcm94eToge30sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErUSxTQUFTLG9CQUFvQjtBQUM1UyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxhQUFhO0FBVHBCLElBQU0sbUNBQW1DO0FBWXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQyxPQUFPLFlBQVk7QUFBQSxNQUM3QixLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMscUJBQXFCLEVBQUUsYUFBYSxPQUFPLENBQUMsR0FBRyxjQUFjLEVBQUUsUUFBUSxJQUFJLENBQUMsQ0FBQztBQUFBLE1BQ3pGLEtBQUs7QUFBQSxNQUNMLFNBQVMsQ0FBQyxTQUFTLFFBQVE7QUFBQSxJQUM3QixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUE7QUFBQSxNQUNQLGFBQWE7QUFBQTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQTtBQUFBLElBQy9CO0FBQUEsSUFDQSxZQUFZLENBQUMsT0FBTyxTQUFTLEtBQUs7QUFBQTtBQUFBLEVBQ3BDO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixZQUFZO0FBQUEsVUFDVixpQkFBaUI7QUFBQSxVQUNqQixjQUFjO0FBQUEsVUFDZCxlQUFlO0FBQUEsUUFDakI7QUFBQSxRQUNBLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsUUFBUTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNoQixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPLENBQUM7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
