const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
//The goal of the 'html-webpack-plugin' is to load HTML files and to inject the boundle(s) in the same file.

module.exports = {
    // entry: './src/index.js', //The React entry file 
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')//The React entry file 
    },

    output: { //Where the compiled code and static files will be collected during the build process
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader'
            //     }
            // },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 9000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}