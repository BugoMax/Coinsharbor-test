
var webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "/js/",
        filename: "bundle.js"
    },
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loaders: "style-loader!css-loader!postcss-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.scss$/,
                loaders: "style-loader!css-loader!postcss-loader!sass-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=react'],
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            mangle: true,
            compress: {
                sequences: true,
                booleans: true,
                loops: true,
                unused: true,
                warnings: false,
                drop_console: true,
                unsafe: true,
                drop_debugger: true
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};
