const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = {
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		mainFields: ['main', 'module', 'browser', 'require'],
		alias: {
			variables: path.join(__dirname, './src/assets/less/variables.less'),
		},
	},
	entry: './src/index.tsx',
	target: 'electron-renderer',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: true,
							localIdentName: '[local]___[hash:base64:5]',
						},
					},
					{
						loader: 'less-loader',
						options: {
							javascriptEnabled: true,
						},
					},
				],
			},
			{
				test: /\.(jpg|png|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { name: 'img/[hash]-[name].[ext]' },
					},
				],
				exclude: /node_modules/,
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, './dist/renderer'),
		historyApiFallback: true,
		compress: true,
		hot: true,
		port: 4000,
		publicPath: '/',
	},
	output: {
		path: path.resolve(__dirname, './dist/react'),
		filename: '[name].js',
		publicPath: './',
	},
	plugins: [
		new MomentLocalesPlugin(),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
	],
}
