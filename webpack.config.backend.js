let webpack = require("webpack");
let path = require("path");
let externals = require("./src/package.json");
module.exports = {
    //1. 设置当前编译文件运行环境对编译后js文件的__dirname 影响很大
    context:path.resolve(__dirname, "./backend"),
    //2、 设置要排除的依赖文件
    externals: Object.keys(externals.dependencies || {}),
    output: {
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [{
            test: /\.ts?/,
            include: [
                path.resolve(__dirname, "./backend"),
            ],
            loader: "ts-loader"
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts'],
        modules: ['src', 'node_modules']
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
    ]
}