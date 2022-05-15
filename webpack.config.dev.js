const path = require('path')
const package = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

const config = {
    mode: 'development',
    entry: ['babel-polyfill', './src/index.js'],
    devServer: {
        static: path.join(__dirname, './dist'),
        liveReload: true,
        open: true
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: package.name + '_' + package.version + '.js'
    },
    resolve: {
        alias: {
        'vue$': 'vue/dist/vue.common.js',
        '@': resolve('src'),
        'components': resolve('src/components'),
        'static': resolve('static')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
              test: /\.js$/,
              loader: 'babel-loader'
            },
            {
              test: /\.css$/,
              use: ['css-loader', 'style-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './static/index.html')
        }),
        new VueLoaderPlugin()
    ]
}



module.exports = config;