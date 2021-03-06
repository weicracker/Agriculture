var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "app":"./frontend/index.tsx",
        "verdor":["react","react-dom"]
    },
    output: {
        filename: "app-[hash].bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "eval-source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [{
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:"verdor",
            filename:"verdor.bundle.js"
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/frontend/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin() //热加载插件
    ],
    devServer: {
        contentBase: "./",
        compress: true,
        port: 9000,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};