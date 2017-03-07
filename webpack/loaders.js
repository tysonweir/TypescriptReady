var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{
		test: /\.ts$/,
		loader: 'ts-loader'
	}, {
		test: /\.css$/,
		loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
	}, {
		test: /\.scss$/,
		loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
	}, {
		test: /\.html$/,
		exclude: /node_modules/,
		loader: 'raw'
	},{
    	test: /\.(jpe?g|png|gif|svg)$/i,
    	loader: 'file-loader'
	},{
		test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
		loader : 'file-loader'
	}
];
