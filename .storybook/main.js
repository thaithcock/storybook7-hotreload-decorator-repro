const packageWebpack = require('../webpack.config.js');

const config = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
	framework: {
		name: '@storybook/web-components-webpack5',
		options: {}
	},
	async webpackFinal(config) {
		return {
			...config,
			module: { ...config.module, rules: packageWebpack.module.rules }
		};
	},
}

export default config;
