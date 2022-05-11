const path = require('path')
const package = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

const config = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: path.join(__dirname, './dist'),
        liveReload: true
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: package.name + '_' + package.version + '.js'
    },
    resolve: {
        alias: {
        'vue$': 'vue/dist/vue.common.js',
        'src': resolve('src'),
        'static': resolve('static'),
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