export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			['feat', 'fix', 'refactor', 'chore', 'style', 'docs'],
		],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
	},
}
