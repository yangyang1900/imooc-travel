/*
* @Author: yangyang
* @Date:   2019-02-21 22:34:54
* @Last Modified by:   yangyang
* @Last Modified time: 2019-05-30 19:57:01
*/

//const mockIndexData = require("./mock/index.json");

//const testjson = require('./public/mock/index.json');

//const path = require('path')

//public/

module.exports = {

	publicPath: '/',

	lintOnSave:false,

	devServer: {

		//open:true,
		//host:'localhost',
		//port:8000,

		proxy:{
			'/api':{
				target: 'http://localhost:8080',
				changeOrigin: true,
				pathRewrite: {
					'^/api':'/mock'
				}
			}
		}
	}

}
