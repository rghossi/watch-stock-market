var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./client/index.jsx'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins : [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
	    extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [{
			loaders: ['react-hot-loader', 'babel-loader'],
			exclude: /node_modules/
		}]
	}
}