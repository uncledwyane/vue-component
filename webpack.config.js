const path = require('path')
const package = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5')

if(!process.env.NODE_ENV){
    process.env.NODE_ENV = 'production'
}

const config = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: package.name + '_' + package.version + '.js',
        // publicPath: './static'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: path.join(__dirname, './node_modules')
            },
            {
                test: /\.(gif|png|jpg|jpeg|ttf)$/,
                use: ['url-loader', 'file-loader']
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