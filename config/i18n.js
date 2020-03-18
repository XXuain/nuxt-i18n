import zh from "./lang/zh";
import en from "./lang/en";

// 加载element-ui语言包
// import enLocale from "element-ui/lib/locale/lang/en";
// import zhLocale from "element-ui/lib/locale/lang/zh-CN";

// const mergeZH = Object.assign(zhLocale.default, zh);
// const mergeEN = Object.assign(enLocale.default, en);

const I18N = {
  locales: [
    {
      code: "en",
      iso: "en-US",
      name: "English"
    },
    {
      code: "zh",
      iso: "zh-ZH",
      name: "中文"
    }
  ],
  defaultLocale: "zh",
  vueI18n: {
    fallbackLocale: "zh",
    messages: {
      en,
      zh
    }
  }
};

export default I18N;
