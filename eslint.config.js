import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettierRecommendedConfigs from 'eslint-plugin-prettier/recommended'

export default [
	{ files: ['**/*.{js,mjs,cjs,vue}'] },
	{ languageOptions: { globals: globals.browser } },
	// eslint 默认推荐规则
	pluginJs.configs.recommended,
	pluginPrettierRecommendedConfigs,
	// Vue 3 强烈推荐配置
	...pluginVue.configs['vue3-strongly-recommended'],
	// 扁平配置
	...pluginVue.configs['flat/strongly-recommended'],
]
