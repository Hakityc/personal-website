import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { setupRouter } from "./routers"
import { setupStore } from "./stores"
import { setupI18n } from "./locales"
import "@/plugins/unocss"
import "@/plugins/nprogress"

const app = createApp(App)

const setupPlugin = () => {
  setupI18n(app)
}

const setupApp = () => {
  setupStore(app)
  setupRouter(app)
  app.mount("#app")
}

setupPlugin()
setupApp()
