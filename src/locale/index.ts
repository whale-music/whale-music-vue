import { createI18n } from "vue-i18n";

import zhCN from "./lang/zh-CN.ts";
import en from "./lang/en.ts";

function initCreateI18n() {
  const locale = navigator.language.replace("-", "") ?? "zhCN";
  document.querySelector("html")?.setAttribute("lang", locale);
  return createI18n({
    locale: navigator.language,
    fallbackLocale: "en",
    legacy: false,
    messages: {
      'zh-CN':zhCN,
      en
    },
  });
}

export const i18n = initCreateI18n();
