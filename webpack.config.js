module.exports = {
    entry: './client/App.js',
    output: {
        path: './client/dist',
	filename: 'bundle.js',
        publicPath: '/public/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
};
