const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/lib.js',
    output: {
        filename: 'short-crypt.min.js',
        library: "ShortCrypt",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                output: {
                    comments: false,
                },
            },
        })],
    },
};