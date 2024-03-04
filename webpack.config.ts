import MiniCssExtractPlugin from "mini-css-extract-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import Webpack from "webpack"
import path from "path";

const isProduction = process.env.NODE_ENV === 'production';


const stylesHandler = MiniCssExtractPlugin.loader;



const config: Webpack.Configuration = {
	entry: './src/index.tsx',
	devtool: isProduction ? false : "eval-source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new MiniCssExtractPlugin(),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'babel-loader',
				options: { presets: ['@babel/preset-typescript'] },
				exclude: ['/node_modules/'],
			},
			{
				test: /\.(scss|css)$/i,
				use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
			{
				test:/\.svg$/i,
				issuer:/\.tsx$/i,
				loader:'@svgr/webpack',
				options:{
					icon:"30px"
				}
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
	output: {
		path: path.resolve(__dirname, "dist/"),
		filename: "bundle.js"
	}
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';


	} else {
		config.mode = 'development';
	}
	return config;
};
