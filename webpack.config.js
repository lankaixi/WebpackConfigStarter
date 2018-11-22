const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "/index.html"),
    filename: "index.html"
});

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        // index: ['babel-polyfill', path.join(__dirname, "src/index.js")],
        index: path.join(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve('dist/'),
        filename: 'bundle.js',
        library: 'WebpackConfigTest',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    drop_console: true
                }
            })
        ]
    },
    plugins: [htmlWebpackPlugin],
    devServer: {
        historyApiFallback: true,
        port: 55555,
        proxy: {
            '/api/order': {
                target: 'localhost',
                "secure": false,
                "logLevel": "debug",
                "changeOrigin": true
            }
        }
    },
};