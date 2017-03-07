var SETTINGS = require('./settings');
var plugins = require('./plugins');
var loaders = require('./loaders');

module.exports = {
	entry: SETTINGS.ENVIRONMENT === 'test' ? {} : SETTINGS.ENTRY,
	output: {
		path: SETTINGS.OUTPUT_PATH,
		filename: SETTINGS.OUTPUT_FILE
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.ts', '.js', '.json']
	},
	resolveLoader: {
		modulesDirectories: ['node_modules']
	},
	devtool: SETTINGS.ENVIRONMENT === 'dev' ? 'source-map' : null,
	plugins: plugins[SETTINGS.ENVIRONMENT],
	module: {
		loaders: loaders
	}
};