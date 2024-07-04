import { Options } from "prettier";

export default {
  // 缩进
  tabWidth: 2,
  // 缩进方式
  useTabs: true,
  // 语句结尾是否加分号
  semi: true,
  // 单引号
  singleQuote: false,
  // 换行长度
  printWidth: 240,
  // 箭头函数参数
  arrowParens: "always",
  // 对象花括号内是否加空格
  bracketSpacing: true,
  // 换行符
  endOfLine: "auto",
  // vue文件内script和style标签缩进
  vueIndentScriptAndStyle: true,
  // >将多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素）。
  bracketSameLine: true,
} satisfies Options;
