var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webConfig = require('./src/config'); //服务配置
var publicPath = '/dist/'; //服务器路径
//var publicPath = '/jiaxiaotong/dist/'; //服务器路径[发布]

module.exports = {
    entry: {
        index: ['./src/index']
    },
    output: {
        publicPath: publicPath, //服务器路径
        path: path.join(__dirname, publicPath), //当前路径
        filename: 'js/[name].js'
    },
    externals: {
        'jquery': '$'
    },
    devServer: { //服务代理
        port: webConfig.port,
        host: webConfig.getIP(),
        proxy: webConfig.getAgent(),
        disableHostCheck: true
    },
    module: {
        loaders: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(scss|sass|px)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jsx|scss|sass)$/,
                loader: 'webpack-px-to-rem',
                query: {
                    basePx: 25,
                    min: 1,
                    floatWidth: 2
                }
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                loader: 'url-loader?limit=3000&name=img/[name][hash:5].[ext]'
            },
            {
                test: /\.(eot|woff|ttf|svg)$/,
                loader: 'url-loader?limit=3000&name=[ext]/[name][hash:5].[ext]'
            },
            {
                test: /\.(mp3|wav|ogg)$/,
                loader: 'url-loader?limit=3000&name=audio/[name][hash:5].[ext]'
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({ //压缩代码
        //   compress: {
        //     warnings: true,//去掉警告
        //     drop_console: true//去掉console
        //   }
        // }),

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendors',
        //     minChunks: Infinity
        // }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            filename: '../index.html', //生成的html存放路径，相对于 path
            template: './src/Template/index.html', //html模板路径
            favicon: __dirname + '/src/img/logo.ico',
            //chunks: ['index','vendors'],
            chunks: ['index'],
            inject: 'body',
            hash: true,
            title: '首页',
            keywords: '关键字',
            description: '网站描述',
            publicPath: publicPath
        })
    ],
    resolve: {
        extensions: [' ', '.js', '.jsx'] //自动扩展文件后缀名
    }
};
