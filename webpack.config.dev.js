var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['webpack-hot-middleware/client', path.join(__dirname, 'src/client/index')],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader", include: /src/}
        ],
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: path.join(__dirname, 'src'),
            query: {
                // Ripped from: https://github.com/gaearon/babel-plugin-react-transform
                plugins: [
                    path.join(__dirname, 'babelRelayPlugin'),
                    ["react-transform", {
                        "transforms": [{
                            "transform": "react-transform-hmr",
                            "imports": ["react"],
                            "locals": ["module"]
                        }, {
                            // you can have many transforms, not just one
                            "transform": "react-transform-catch-errors",
                            "imports": ["react", "redbox-react"]
                        }]
                    }]
                ]
            }
        },
            {
                test: /\.sass$/,
                include: path.join(__dirname, 'src/style'),
                loaders: ["style", "css?sourceMap", "sass?sourceMap&indentedSyntax"]
            }]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, "./node_modules/foundation-sites/scss/")
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};