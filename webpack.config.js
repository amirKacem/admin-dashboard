const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports={
    mode: 'development',
    devServer: {
        static : {
            directory : path.join(__dirname, "dist")
          },
          port: 3000,
          open:true,
          hot: "only",
          watchFiles: [ 'dist/**/*'],
          devMiddleware: {
            writeToDisk: true,
          },
          
    },
    entry:'./src/js/app.js',
    output: {
        filename:'app.js',
        path: path.resolve(__dirname,'dist/js'),
        publicPath:'/',
        assetModuleFilename: 'img/[name][ext]'

    },
    module:{
        rules:[   
            {
                test: /\.(scss)$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                              plugins: [
                                [
                                  "autoprefixer",
                                  {
                                    // Options
                                  },
                                ],
                              ],
                            },
                          },
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                type: 'asset/resource',
                generator: {
                  filename: '../fonts/[name][ext]'
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
         
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/app.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}