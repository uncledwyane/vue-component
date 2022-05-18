const path = require('path')
const package = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5')

if(!process.env.NODE_ENV){
    process.env.NODE_ENV = 'development'
}

console.log('port: ', process.env.NODE_ENV)

const config = {
    mode: 'development',
    entry: ['babel-polyfill', './src/index.js'],
    devServer: {
        static: path.join(__dirname, './static'),
        liveReload: true,
        open: false,
        client: {
            progress: true,
            overlay: {
                errors: true,
                warnings: false,
            }
        }
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: package.name + '_' + package.version + '.js',
        // publicPath: './static'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'components': path.resolve(__dirname, './src/components'),
            'static': path.resolve(__dirname, './static'),
            'styles': path.resolve(__dirname, './static/styles')
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
              use: ['style-loader', 'css-loader']
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