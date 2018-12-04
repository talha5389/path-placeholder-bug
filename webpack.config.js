const ImageminPlugin = require("imagemin-webpack");
const path = require('path');
const responsiveSharp = require('responsive-loader/sharp');
const ImageminWebp = require('imagemin-webp');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        pathinfo: false
    },
    module: {
        rules: [
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve('./src/images'), to: path.resolve('./dist/images')
        }]),
    ],
}

const imagemin2 = new ImageminPlugin({
    //Adding '/[path]' instead of '[path]' fixes it in windows. 
    //Haven't actually tested it on linux but in docker builds node:10.14.1-stretch, it works fine even without '/' in the beginning
    name: '[path][name].[hash].webp',
    loader: false,
    imageminOptions: {
        plugins: [
            ImageminWebp({
                loseless: true
            })
        ]
    }
});

config.plugins.push(imagemin2);
module.exports =  config;