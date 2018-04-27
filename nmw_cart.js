/*********************
 *name：购物车的数据接口
 *date：2018/03/09
 *author：Liu Li
 *remarks：null
 */
var express = require('express');
var app = express();

// 解决跨域问题
app.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",'3.2.1');
	res.header("Content-Type","application/json;charset=utf-8");
	next();
});

/*app.get('/',function(req,res){
	res.send('这是购物车用的中间件');
	res.end();
});*/

// 购物车中的商品列表数据
app.get('/cart/cartList',function(req,res){
	var _json = {
		"total": {
			"totalNum": "3",
			"selected": "6",
			"price": "21600.00"
		},
		"error": {
			"code": "0",
			"msg": "1--出错了！"
		},
		"cartList": [
			{
				"pid": "item01132564",
				"name": "商品1",
				"introduction": "华硕（ASUS） 金属超极本RX310/410轻薄便携商务办公超薄学生游戏手提",
				"imgurl": "http://pic.baike.soso.com/p/20130827/20130827152516-1514233497.jpg",
				"unitPrice": "4500.00",
				"num": "2",
				"subtotal": "9000.00",
				"isCheck": "1"
			},
			{
				"pid": "item02154216",
				"name": "商品2",
				"introduction": "佳能（Canon）EOS 80D 单反套机（EF-S 18-135mm f/3.5-5.6 IS USM镜头）",
				"imgurl": "http://pic6.nipic.com/20100401/218586_085335001658_2.jpg",
				"unitPrice": "5400.00",
				"num": "1",
				"subtotal": "5400.00",
				"isCheck": "1"
			},
			{
				"pid": "item03542258",
				"name": "商品3",
				"introduction": "TCL 大1匹 六六顺 一级能效 智能 冷暖 空调挂机（全直流变频）（KFRd-26GW/F2AH11BpA）",
				"imgurl": "https://tse3-mm.cn.bing.net/th?id=OIP.LyuHxtEDmKihaHQ4z2MB8wHaE8&p=0&o=5&pid=1.1",
				"unitPrice": "2400.00",
				"num": "3",
				"subtotal": "7200.00",
				"isCheck": "1"
			}
		]
	};
	res.send(_json);
	res.end();
});

// 增加商品数量时的数据 单价: _unit 数量: _n
app.get('/cart/cart_add',function(req,res){
	var _unitPrice	= req.query.unitPrice;
	var _n			= req.query.n;

	_n++;
	var _result 	= (_unitPrice*_n).toFixed(2);

	var _json = {
		"num": _n,
		"result": _result
	};
	res.send(_json);
	res.end();
});

// 减少商品数量时的数据 单价: _unit 数量: _n
app.get('/cart/cart_minus',function(req,res){
	var _unitPrice	= req.query.unitPrice;
	var _n			= req.query.n;

	if(_n > 1){
		_n --;
	} else {
		_n = 1;
	}
	var _result 	= (_unitPrice*_n).toFixed(2);

	var _json = {
		"num": _n,
		"result": _result
	};
	res.send(_json);
	res.end();
});

// 输入商品数量时的数据 单价: _unit 数量: _n
app.get('/cart/cart_text',function(req,res){
	var _unitPrice	= req.query.unitPrice;
	var _n			= req.query.n;
	var _result 	= (_unitPrice*_n).toFixed(2);

	var _json = {
		"num": _n,
		"result": _result
	};
	res.send(_json);
	res.end();
});

// 商品总件数、总价 单价: _unit 数量: _n
app.get('/cart/cart_total',function(req,res){
	var _arrData	= req.query.arrData,
		_tNum		= 0,
		_tPrice		= 0;

	for(var i=0;i<_arrData.length;i++){
		_tNum += Number(_arrData[i].n);
		_tPrice += Number(_arrData[i].n)*Number(_arrData[i].unitPrice);
	}

	var _json = {
		"tNum": _tNum,
		"totalPrice": _tPrice.toFixed(2)
	};
	res.send(_json);
	res.end();
});

// 监听端口
app.listen(5802,function(){
	console.log('5802,购物车中间件ok')
});
