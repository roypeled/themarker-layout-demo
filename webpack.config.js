var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: './index.js'
	},

	output: {
		path: './dist/',
		filename: '[name].js',
		sourceMapFilename: '[file].map',
		pathinfo: true
	},

	module: {
		loaders: [
			{ test: /(.html)/,  loader: 'html-loader',  exclude: /node_modules/ },
			{  test: /(.css)/, exclude: /node_modules/,  loaders: ['style', 'css'] }
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: true
		})
	]
};
