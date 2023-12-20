import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { setupRouter } from "./routers"
import { setupStore } from "./stores"
import "@/plugins/unocss"

const app = createApp(App)

const setupPlugin = () => {}

const setupApp = () => {
  setupStore(app)
  setupRouter(app)
  app.mount("#app")
}

setupPlugin()
setupApp()
