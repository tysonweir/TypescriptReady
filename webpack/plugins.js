var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var SETTINGS = require('./settings');

var plugins = {
	uglify: new webpack.optimize.UglifyJsPlugin({
		warning: false,
		mangle: true,
		comments: false
	}),

	occurrenceOrder: new webpack.optimize.OccurrenceOrderPlugin(),
	dedupe: new webpack.optimize.DedupePlugin(),
	htmlWebpack: new HtmlWebpackPlugin({
		template: SETTINGS.TEMPLATE,
		inject: 'body',
		hash: true
	}),

	browserSync: new BrowserSyncPlugin({
		host: 'localhost',
		port: 8080,
		server: {
			baseDir: SETTINGS.OUTPUT_PATH
		}
	}),

	jquery: new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
		'window.jquery': 'jquery'
	}),

	vendor: new webpack.optimize.CommonsChunkPlugin('vendor', SETTINGS.VENDOR_FILE),

	ignoreFiles: function(pattern) {
		return new webpack.IgnorePlugin(pattern);
	},

	environment: new webpack.EnvironmentPlugin(['NODE_ENV']),

	extractCss: new ExtractTextPlugin('app.css', {allChunks: true})
};

var common = [plugins.ignoreFiles(/karma|spec|test|(\.d\.ts)/), plugins.htmlWebpack, plugins.vendor, plugins.extractCss];

module.exports = {
	test: [plugins.ignoreFiles(/bootstrap/)],
	dev: common.concat(plugins.browserSync),
	prod: common.concat(plugins.uglify, plugins.occurrenceOrder, plugins.dedupe)
};