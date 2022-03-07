const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
	webpack: {
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
		},
	},
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'jsconfig',
				baseUrl: './src',
			},
		},
	],
};
