
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.dev");

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  proxy: {
  	"*": "http://localhost:3000"
  }
});

server.listen(8080, function(err) {
	if (err) throw err;
	console.log("Magic happens on port 8080");
});