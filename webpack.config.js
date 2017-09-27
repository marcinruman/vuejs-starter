// webpack.config.js

module.exports = {
    // this is the 'main' file which should include all other modules
    entry: './src/main.js',
    // where should the compiled file go?
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        // special compilation rules
        loaders: [
            {
                // ask webpack to check: if this file ends with .js, then
                // apply some transforms
                test: /\.js$/,
                // transform it with babel
                loader: 'babel-loader',
                // don't transform node_modules folder (which don't need to
                // be compiled)
                exclude: /node_modules/
            }
        ]
    }
}