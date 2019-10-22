module.exports = {
    entry: './export-module/main.js',
    output: {
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            }
        ]
    }
}