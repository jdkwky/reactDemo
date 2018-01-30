const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: { bundle: __dirname + '/js/index.js', bundle1: __dirname + '/js/dom.js',bundle2:__dirname+'/js/test.js'},
    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true,
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /(\.css|\.less)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true, // 指定启用css modules
                        localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                    }
                }, {
                    loader: 'less-loader'
                }, {
                    loader: 'postcss-loader'
                }]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ],
};
// __dirname+'/js/newFeatureofEs6.js',__dirname+'/js/iteratorDemo.js',__dirname+'/js/test.js'