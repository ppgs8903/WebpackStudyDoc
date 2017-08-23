const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry:'./src/index.js',
  target: 'web',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
     {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
    // allowedHosts: [
    //     '.jcloud.com', //泛域名 *
    //     'jcloud.com', //二级域名
    // ],
    //clientLogLevel: 'none', //默认info 需要在有输出的情况下，如inline 或者 hot
    compress: true, //Content-Encoding:gzip 是否压缩
    inline: true,
    //disableHostCheck: false,
    //lazy: true, //!!必须联合使用
    //filename: "bundle.js",
    headers: {
      "X-Custom-auth": "JasonTao"
    },
    //host: 'localhost', //默认就是localhost
    hot: true, //和hotOnly一起使用
    hotOnly: true,  //不刷新页面加载最新的艾玛
    inline: true,
    //lazy: true, //!!必须联合使用
    //noInfo: true,
    //open: true,
    openPage: 'demo/pg',
    //overlay: true, //默认就是true
    //pfx: '/path/pg.pfx', //不解释ssl
    //pfxPassphrase: 'passphrase', //ssl密码
    port: 8080,
    //public: "hosting.jcloud.com:8080",  //inline 模式使用 用于nginx 配置代理时候 //表示我没试验
    //quiet: true,
    ////自定义middleware
    // setup(app){
    //   app.get('/some/path', function(req, res) {
    //     res.json({ custom: 'response' });
    //   });
    // },
    //socket: 'socket', //Unix 的socket 监听 干掉host
    ////资源缓存的处理
    // staticOptions: {
    //   redirect: false
    // },
    //useLocalIp: true, //使用本地ip
    //watchContentBase: true, //监控contentBase下变化 inline 开启时候生效
    watchOptions: {
      poll: true
    }
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      inject: true
    })
  ]
}
