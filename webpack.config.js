let webpack = require('webpack');
let path = require('path');

module.exports = {
    entry: path.join(__dirname, '/client/src/index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/client/build')
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // {
            //     test: /.sass$/,
            //     use: ["style-loader", "css-loader", "sass-loader"]
            // }
        ] 
    },
    devServer: {
        contentBase: path.join(__dirname, '/client/build'),
        port: 3000
    }
}