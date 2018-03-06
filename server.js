var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var webConfig = require('./src/config'); //服务配置

//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    proxy: webConfig.getAgent(),
    disableHostCheck: true
});

//将其他路由，全部返回index.html
server.app.get('*', function(req, res) {
    res.sendFile(__dirname)
});

server.listen(webConfig.port, webConfig.getIP());
