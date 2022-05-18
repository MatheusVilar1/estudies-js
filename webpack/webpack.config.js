const modoDev = process.env.NODE_ENV !=="production"
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
    mode:modoDev?'development':'production', //production(padrão) => gera uma unica linha, sem comments
    entry:'./src/principal.js',
    output:{
        filename:'principal.js',
        path:__dirname +'/public'

    },
    optimization:{
        minimizer:[
            new CssMinimizerPlugin(),

            
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'estilo.css'}),
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),
            
    ],
    module:{
        rules:[{
            test: /\.s?[ac]ss$/,
            use:[
                MiniCssExtractPlugin.loader,
                // 'style-loader', //adiciona o css a DOM(coloca a tag <style>)
                'css-loader', // interpreta @import, url()
                'sass-loader',
            ]
        }]
    }

}