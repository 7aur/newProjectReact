const path = require('path');
const htmlLoader = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const imageLoader = require('image-webpack-loader');
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test:/\.(mp4|png|gif|jpeg|jpg)$/,
                use:[
                    'file-loader'
                ]
            },
            { test: /\.(woff|woff2|eot|ttf|otf|svg)$/, use: ['url-loader?limit=100000'] },
            {
                test: /\.css$/,
                use:[
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
        ]
    },
    plugins: [
        new htmlLoader({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename:  '[name].css',
            chunkFilename:  '[id].css',
          }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css']
    },
    devServer: {
        inline:true,
        port:2424,
        historyApiFallback: true
    }
}