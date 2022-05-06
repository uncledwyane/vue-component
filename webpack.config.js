const path = require('path')
const package = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const config = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: package.name + '_' + package.version + '.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, './static/index.html')
    })]
}

console.log('mode: ', process.env.NODE_ENV)



module.exports = config;