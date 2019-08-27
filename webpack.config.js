const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

// 在新版的 vue-loader 这行必须配置

const {VueLoaderPlugin} = require('vue-loader')

module.exports={
	entry : path.join(__dirname,'./src/main.js'),

	output: {

		path: path.join(__dirname,'./dist'),

		filename:'bundle.js'

	},
	plugins:[

		new htmlWebpackPlugin({

			template : path.join(__dirname,'./src/index.html'),

			filename:'index.html'
		}),

		new VueLoaderPlugin()

	],

	module:{
		rules:[
			{test:/.vue$/,use:'vue-loader'},
			{test:/.css$/,use:['style-loader','css-loader']},
			{test:/.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/.js$/,use:'babel-loader',exclude:/node_modules/},
			{test:/.(jpg|jpeg|gif|png)/,use:'url-loader?limit=512000'},
			{test:/.(eot|svg|ttf|woff|woff2|otf)/,use:'url-loader'}

		]

	},

	// 修改vue被导入时候包的路径
	 // vue package.json 默认 main 入口时vue -runtime
	resolve:{
		alias :{
			// "vue$":"vue/dist/vue.js"

		}


	}

	


}