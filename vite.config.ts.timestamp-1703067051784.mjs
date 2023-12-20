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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxNeVByb2plY3RcXFxccGVyc29uYWwtd2Vic2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcTXlQcm9qZWN0XFxcXHBlcnNvbmFsLXdlYnNpdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L015UHJvamVjdC9wZXJzb25hbC13ZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIlxyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCJcclxuaW1wb3J0IHsgQW50RGVzaWduVnVlUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCJcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCJcclxuaW1wb3J0IHVub2NzcyBmcm9tIFwidW5vY3NzL3ZpdGVcIlxyXG5pbXBvcnQgSWNvbnMgZnJvbSBcInVucGx1Z2luLWljb25zL3ZpdGVcIlxyXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tIFwidW5wbHVnaW4taWNvbnMvcmVzb2x2ZXJcIlxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIHVub2NzcygpLFxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIGltcG9ydHM6IFtcInZ1ZVwiLCBcInZ1ZS1yb3V0ZXJcIl0sXHJcbiAgICAgIGR0czogXCJ0eXBlcy9hdXRvLWltcG9ydHMuZC50c1wiLFxyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgcmVzb2x2ZXJzOiBbQW50RGVzaWduVnVlUmVzb2x2ZXIoeyBpbXBvcnRTdHlsZTogXCJsZXNzXCIgfSksIEljb25zUmVzb2x2ZXIoeyBwcmVmaXg6IFwiaVwiIH0pXSxcclxuICAgICAgZHRzOiBcIi4vdHlwZXMvY29tcG9uZW50cy5kLnRzXCIsXHJcbiAgICAgIGluY2x1ZGU6IFsvXFwudHMkLywgL1xcLnZ1ZSQvXSxcclxuICAgIH0pLFxyXG4gICAgSWNvbnMoe1xyXG4gICAgICBzY2FsZTogMSwgLy8gXHU3RjI5XHU2NTNFXHU2QkQ0IFx1NzZGOFx1NUJGOTFlbVxyXG4gICAgICBhdXRvSW5zdGFsbDogdHJ1ZSwgLy8gXHU4MUVBXHU1MkE4XHU1Qjg5XHU4OEM1XHJcbiAgICAgIGNvbXBpbGVyOiBcInZ1ZTNcIiwgLy8gXHU3RjE2XHU4QkQxXHU2NUI5XHU1RjBGXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksIC8vIFx1OERFRlx1NUY4NFx1NTIyQlx1NTQwRFxyXG4gICAgfSxcclxuICAgIGV4dGVuc2lvbnM6IFtcIi5qc1wiLCBcIi5qc29uXCIsIFwiLnRzXCJdLCAvLyBcdTRGN0ZcdTc1MjhcdThERUZcdTVGODRcdTUyMkJcdTU0MERcdTY1RjZcdTYwRjNcdTg5ODFcdTc3MDFcdTc1NjVcdTc2ODRcdTU0MEVcdTdGMDBcdTU0MERcdUZGMENcdTUzRUZcdTRFRTVcdTgxRUFcdTVERjEgXHU1ODlFXHU1MUNGXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgbGVzczoge1xyXG4gICAgICAgIG1vZGlmeVZhcnM6IHtcclxuICAgICAgICAgIFwicHJpbWFyeS1jb2xvclwiOiBcIiM0ZDZkZWJcIixcclxuICAgICAgICAgIFwidGV4dC1jb2xvclwiOiBcIiMyZTJlMzNcIixcclxuICAgICAgICAgIFwiZXJyb3ItY29sb3JcIjogXCIjZTY0NTUyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4gICAgcHJveHk6IHt9LFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1EsU0FBUyxvQkFBb0I7QUFDNVMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsZUFBZTtBQUN4QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBUjFCLElBQU0sbUNBQW1DO0FBV3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQyxPQUFPLFlBQVk7QUFBQSxNQUM3QixLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMscUJBQXFCLEVBQUUsYUFBYSxPQUFPLENBQUMsR0FBRyxjQUFjLEVBQUUsUUFBUSxJQUFJLENBQUMsQ0FBQztBQUFBLE1BQ3pGLEtBQUs7QUFBQSxNQUNMLFNBQVMsQ0FBQyxTQUFTLFFBQVE7QUFBQSxJQUM3QixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUE7QUFBQSxNQUNQLGFBQWE7QUFBQTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQTtBQUFBLElBQy9CO0FBQUEsSUFDQSxZQUFZLENBQUMsT0FBTyxTQUFTLEtBQUs7QUFBQTtBQUFBLEVBQ3BDO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixZQUFZO0FBQUEsVUFDVixpQkFBaUI7QUFBQSxVQUNqQixjQUFjO0FBQUEsVUFDZCxlQUFlO0FBQUEsUUFDakI7QUFBQSxRQUNBLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU8sQ0FBQztBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
