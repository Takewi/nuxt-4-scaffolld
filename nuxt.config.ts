// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	typescript: {
		typeCheck: true,
	},
	modules: ['@nuxt/eslint', 'nuxt-quasar-ui', '@pinia/nuxt'],
	quasar: {
		config: {
			brand: {
				primary: '#1876D2',
				secondary: '#64748B',
				positive: '#22C55E',
				negative: '#F43F5E',
				info: '#38c0f5ff',
				warning: '#F59E0B',
				accent: '#8A38F5',
			},
		},
		extras: {
			font: 'roboto-font',
		},
	},
})
