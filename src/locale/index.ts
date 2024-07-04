import { createI18n } from 'vue-i18n'

import zhCN from './lang/zh-CN.ts';


const i18n = createI18n({
  locale: 'zhCN',
  fallbackLocale: 'en',
  legacy: false,
  messages: {
    zhCN
  }
})
export  {
  i18n
};
