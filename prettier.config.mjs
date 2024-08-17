// import {Config} from 'prettier'

/** @type {import("prettier").Config} */
export default {
    plugins: [
        // 导入语句排序插件
        "@trivago/prettier-plugin-sort-imports",
        // tailwindcss sort
        "prettier-plugin-tailwindcss",
    ],

    /* @trivago/prettier-plugin-sort-imports */
    // import 排序配置
    importOrder: ["^vue(.*)$", "radix-vue", "^@/components/(.*)$", "<THIRD_PARTY_MODULES>", "^@/utils/(.*)$", "^@/constant/(.*)$", "^[./]"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"], // 支持的语法特性
    importOrderBuiltinModulesToTop: true, // 将内置模块置顶
    importOrderCombineTypeAndValueImports: true, // 将类型导入和普通导入合并
    importOrderGroupNamespaceSpecifiers: true, // 统一分组的导入放在同一行
    /* @trivago/prettier-plugin-sort-imports */

    // 缩进
    tabWidth: 4,
    // 缩进方式
    useTabs: false,
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
    endOfLine: "crlf",
    // vue文件内script和style标签缩进
    vueIndentScriptAndStyle: false,
    // >将多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素）。
    bracketSameLine: true,
    overrides: [
        {
            files: "*.vue",
            options: {
                parser: "vue",
                htmlWhitespaceSensitivity: "ignore", // 忽略 HTML 空白敏感度，使得模板部分可以使用自定义缩进
                tabWidth: 4, // 设置 template 标签内的缩进为 4
            },
        },
        {
            files: ["*.js", "*.ts"],
            options: {
                tabWidth: 0, // 设置 script 标签内的缩进为 0
            },
        },
    ],
};
