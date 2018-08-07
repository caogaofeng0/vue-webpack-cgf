const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry:["./entry.js"],
    // devtool: 'inline-source-map',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    // devServer: {
    //     contentBase: './dist'
    // },
    mode: 'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: path.posix.join('','img/[name].[hash:7].[ext]')
                }
                // 添加到这并且会按照文件大小, 或者转化为 base64, 或者单独作为文件
                //在大小限制可以name属性/[name].[ext]，会将我们的文件生成在设定的文件夹下。
            },
        ]
    },
    plugins:[
        new webpack.BannerPlugin('这里是打包文件头部注释'),
        // new CleanWebpackPlugin(['dist']),
        // new HtmlWebpackPlugin({
        //   title: 'Development'
        // })
    ]
}