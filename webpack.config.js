module.exports = {
    entry: './server/index.js',
    output: {
        filename: 'bundle.js',
        path: './dist'
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDom'
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