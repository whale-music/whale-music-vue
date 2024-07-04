import { createI18n } from "vue-i18n";

import zhCN from "./lang/zh-CN.ts";

function initCreateI18n() {
  const locale = navigator.language.replace("-", "") ?? "zh-CN";
  document.querySelector("html")?.setAttribute("lang", locale);
  return createI18n({
    locale: locale,
    fallbackLocale: "en",
    legacy: false,
    messages: {
      zhCN,
    },
  });
}

export const i18n = initCreateI18n();
