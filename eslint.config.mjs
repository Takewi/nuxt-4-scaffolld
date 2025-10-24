// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	{
		ignores: [
			'.nuxt',
			'.husky',
			'.output',
			'.vscode',
			'build',
			'public',
			'node_modules',
		],
	},
	{
		rules: {
			'no-console': 1,
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			eqeqeq: ['error', 'always'],
			'vue/valid-v-bind': 'error',
			'vue/no-multiple-template-root': 'error',
			'prefer-const': 'error',
			'vue/require-default-prop': 'off',
			'vue/multi-word-component-names': 'off',
			'no-undef': 'off',
		},
	},
)
