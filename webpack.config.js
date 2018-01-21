var webpack = require('webpack');
module.exports = {
    entry: {
        index: './index.js',
    },
    output: {
        path: __dirname,
        filename: './static/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                compact: false,
                presets: ['es2015', 'react']
            }
        }]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3000
    },
}