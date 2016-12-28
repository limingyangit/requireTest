
require.config({
    baseUrl: "./",//统一目录路径
    paths: {//这里是定义你要引用图片的路径的，记住没有require 之前都是没有调用的，只是写了个目录方便你以后调用
    	"jquery"     	: "js/lib/jquery-1.7.1",//引入jq
    	"html5zoo"	 	: "js/commom/html5zoo",//3d
    	"lovelygallery"	: "js/commom/lovelygallery"

	},
    shim: { //这里我理解为  比如你写了个jQuery的代码，是不是先要引入JQUERY ，所以这个地方的作用是告诉我们依赖关系，调用的时候回去先加载他依赖的那个文件
		"html5zoo"		:["jquery"],
		"lovelygallery"	:["jquery","html5zoo"]
    },
});