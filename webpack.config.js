/**
 * Created by jameym on 4/20/2016.
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        app: "./src/main.js",
        vendor: [
            'jquery',
            'vue',
            'moment'
        ]
    },
    devtool: "source-map",
    output: {
        path: "./dist",
        publicPath: "/dist/",
        filename: "app.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ],
    module: {
        loaders: [
            {test: /\.styl$/, loader: "style!css!stylus"},
            {test: /\.html$/, loader: "html"},
            {test: /\.vue$/, loader: 'vue'}
        ]
    },
    externals: {
        "jquery": "jQuery"
    }
};