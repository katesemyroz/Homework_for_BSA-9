var webpack = require("webpack");
var path = require('path');
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
                test:   /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
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
    			test: /\.(jpe?g|png|gif|svg)$/i,
    			use: ['img-loader']
    		},
    		{
                test: /\.js$/,
                enforce: "pre", 
                exclude: /node_modules/,
                use: [
                    {
                        loader: "jshint-loader"
                    }
                ]
            }
		],
		loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
	},
	//webpack.optimize.UglifyJsPlugin - включает мнификацию
	plugins: [
		new UglifyJSPlugin({
			beautify: false,
			comments: true,
			extractComments: true
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