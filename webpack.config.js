var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/main.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            { test: /\.json/, loader: "json-loader" },
            //{ test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" },
            // Stylesheets
            { test: /\.css$/, loader: 'style!css?sourceMap|postcss' },
            { test: /\.scss$/, loader: 'style!css?sourceMap!postcss!sass?sourceMap' },
            { test: /\.scss$/, loader: 'stylelint' },
            { test: /\.otf(\?\S*)?$/, loader: 'url-loader?limit=65000' },
            { test: /\.eot(\?\S*)?$/, loader: 'url-loader?limit=65000' },
            { test: /\.svg(\?\S*)?$/, loader: 'url-loader?mimetype=image/svg+xml&limit=65000' },
            { test: /\.ttf(\?\S*)?$/, loader: 'url-loader?mimetype=application/octet-stream&limit=65000' },
            { test: /\.woff2?(\?\S*)?$/, loader: 'url-loader?mimetype=application/font-woff&limit=65000' },
            { test: /\.(jpe?g|gif)$/, loader: 'url-loader?limit=65000' }

        ]
    },
    output: {
        path: path.join(__dirname, "src"),
        filename: "main.min.js",
        publicPath: "/"
    },
    plugins: debug ? [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('dev'),
                }
            })
        ] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                }
            }),
            new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false }),
        ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.json'],
        modulesDirectories: [
            'node_modules'
        ]
    }
};