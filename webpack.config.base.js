let webpack = require("webpack");
let path = require("path");
let externals = require("./src/package.json");
module.exports = {
    output: {
        path: __dirname+"/app"
    },
    module: {
        loaders: [{
            test: /\.ts?/,
            include: [
                path.resolve(__dirname, "./src"),
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