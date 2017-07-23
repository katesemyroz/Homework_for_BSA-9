const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: "./src/js/main.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module:{
		rules: [
			{
                test: /\.js$/,
                enforce: "pre", 
                exclude: /node_modules/,
                use: [
                    {
                        loader: "jshint-loader"
                    }
                ]
            },
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
				}
			},
			{
                test:   /\.s?css$/,
                use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader'   },
					{ loader: 'sass-loader'  },
					{ loader: 'postcss-loader'}
				]
            },
            {
			  test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 10000 }
					},
					'image-webpack-loader'
				]
			}
		]
	},
	//webpack.optimize.UglifyJsPlugin - включает мнификацию
	plugins: [
		new UglifyJSPlugin({
			beautify: false,
			comments: false
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	],
	devServer: {
		inline:true,
		port: 8081
	}
}