import { App } from "vue"
import { createI18n } from "vue-i18n"
import { messages } from "./lang";

const i18n = createI18n({
  locale: "zh-CN",
  fallbackLocale: "zh-CN",
  messages
});

export const setupI18n = (app:App) => {
  app.use(i18n)
}