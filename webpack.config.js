module.exports = {
	//mode: 'development',
	mode: 'production',
	entry: [
		'./src/main.js'
	],
	output: {
		filename: 'build.js'
	},
	module: {
		rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
		]
	}
};