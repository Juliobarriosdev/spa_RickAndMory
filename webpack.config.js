const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js' //Este es el nombre del archivo final para producción.
    },
    resolve: {
        extensions: ['.js'],
    },
    module: { //Se crea un modulo con las reglas necesarias que vamos a utilizar.
        rules: [
            {
                test: /\.js?$/, // Estructura de Babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true, //Cómo vamos a inyectar un valor a un archivo HTML.
                template: './public/index.html', //Carpeta de origen
                filename: './index.html', // Carpeta destino 'dist'
            }
        ),
        /* new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
        }) */
        new MiniCssExtractPlugin(),
    ]
}