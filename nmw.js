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
	res.send('这是中间件');
	res.end();
});*/

// 首页，栏目导航的数据
app.get('/index/columnNavJson',function(req,res){
	var _json = {
	    "code": 200,
	    "msg":"It's OK",
	    "links": [
	        {
	            "name": "秒杀",
	            "ids": 0,
	            "hot": false,
	            "line": 0,
	            "marLeft": 0
	        },
	        {
	            "name": "优惠券",
	            "ids": 1,
	            "hot": false,
	            "line": 0,
	            "marLeft": 0
	        },
	        {
	            "name": "闪购",
	            "ids": 2,
	            "hot": false,
	            "line": 0,
	            "marLeft": 0
	        },
	        {
	            "name": "拍卖",
	            "ids": 3,
	            "hot": false,
	            "line": 1,
	            "marLeft": 0
	        },
	        {
	            "name": "服装城",
	            "ids": 4,
	            "hot": false,
	            "line": 0,
	            "marLeft": 1
	        },
	        {
	            "name": "京东超市",
	            "ids": 5,
	            "hot": true,
	            "line": 0,
	            "marLeft": 0
	        },
	        {
	            "name": "生鲜",
	            "ids": 6,
	            "hot": false,
	            "line": 0
	        },
	        {
	            "name": "全球购",
	            "ids": 7,
	            "hot": false,
	            "line": 1,
	            "marLeft": 0
	        },
	        {
	            "name": "京东金融",
	            "ids": 8,
	            "hot": false,
	            "line": 0,
	            "marLeft": 1
	        }
	    ]
	};
	res.send(_json);
	res.end();
});
// 首页，左侧导航菜单的数据
app.get('/index/subNavJson',function(req,res){
	var _json = {
		"subNavData":[
        {
            "name":"家用电器",
            "list": [
                    "冰箱",
                    "电视机",
                    "洗衣机"
                ]
        },
        {
            "name":"手机/运营商/数码",
            "list": [
                    "手机通讯",
                    "运营商",
                    "手机配件",
                    "摄影摄像"
                ]
        },
        {
            "name":"电脑/办公",
            "list": [
                    "电脑整机",
                    "电脑配件",
                    "外设产品",
                    "游戏设备"
                ]
        },
        {
            "name":"家居/家具/家装/厨具",
            "list": [
                    "厨具",
                    "家纺",
                    "生活日用",
                    "家装软饰"
                ]
        }
    ]
	};
	res.send(_json);
	res.end();
});
// 首页，轮播图数据
app.get('/index/sliderJson',function(req,res){
	var _json = {
		"code": 200,
		"msg":"It's OK!",
		"imgUrl":[
			"imgs/temp/1.jpg",
	        "imgs/temp/2.jpg",
	        "imgs/temp/3.jpg",
	        "imgs/temp/4.jpg"
		]
	};
	res.send(_json);
	res.end();
});
// 首页，享品质栏目的商品数据
app.get('/index/goodsJson',function(req,res){
	var _json = {
		"goodsData":[
	        {
	            "name":"京东超市",
	            "descript": "天天打折 新款实惠“尽情购”",
	            "goodsId":"id_item1"
	        },
	        {
	            "name":"智能生活",
	            "descript": "引领智能新风尚",
	            "goodsId":"id_item2"
	        },
	        {
	            "name":"奢侈大牌",
	            "descript": "天天打折",
	            "goodsId":"id_item3"
	        }
    	]
	};
	res.send(_json);
	res.end();
});
// 产品页面左侧，大小图列表数据
app.get('/product/imgList',function(req,res){
	var _json = {
		"imgBig":{
			"tip":"bigImg",
			"img_url":"imgs/temp2/1.jpg"
		},
		"imgSmall":[
			{
				"tip":"img1",
				"img_url":"imgs/temp2/1.jpg",
				"img_details":"imgs/temp2/1_big.jpg"
			},
			{
				"tip":"img2",
				"img_url":"imgs/temp2/2.jpg",
				"img_details":"imgs/temp2/2.jpg"
			},
			{
				"tip":"img3",
				"img_url":"imgs/temp2/3.jpg",
				"img_details":"imgs/temp2/3.jpg"
			},
			{
				"tip":"img4",
				"img_url":"imgs/temp2/4.jpg",
				"img_details":"imgs/temp2/4.jpg"
			},
			{
				"tip":"img5",
				"img_url":"imgs/temp2/5.jpg",
				"img_details":"imgs/temp2/5.jpg"
			},
			{
				"tip":"img6",
				"img_url":"imgs/temp2/6.jpg",
				"img_details":"imgs/temp2/6.jpg"
			},
			{
				"tip":"img7",
				"img_url":"imgs/temp2/7.jpg",
				"img_details":"imgs/temp2/7.jpg"
			},
			{
				"tip":"img8",
				"img_url":"imgs/temp2/8.jpg",
				"img_details":"imgs/temp2/8.jpg"
			},
			{
				"tip":"img9",
				"img_url":"imgs/temp2/9.jpg",
				"img_details":"imgs/temp2/9.jpg"
			}
		]
	};
	res.send(_json);
	res.end();
});
// 产品页面右侧，根据ids返回对应的产品信息
app.get('/product/goodsids',function(req,res){
	//console.log(req.query);
	var _ids = req.query._ids;
	var _json= '';
	if(_ids == 'id_item1'){
		_json = {
			"title":"华硕(ASUS) 灵耀U4000UQ 14英寸合金机身轻薄笔记本电脑(i5-7200U 8G 256GSSD 940MX 2G独显 FHD IPS)玫瑰金",
			"promotions":[
				"【下单立减300】",
				"【2.2号狂秒华硕年货爆款！】性能金刚颜值芭比！"
			],
			"Ids":"id_item1"
		}
	} else if(_ids == 'id_item2'){
		_json = {
			"title":"佳能（Canon）EOS 80D 单反套机（EF-S 18-135mm f/3.5-5.6 IS USM镜头）",
			"promotions":["【京东自营 品质保证】经典中端旗舰单反！"],
			"Ids":"id_item2"
		}
	} else if(_ids == 'id_item3'){
		_json = {
			"title":"TCL 大1匹 六六顺 一级能效 智能 冷暖 空调挂机（全直流变频）（KFRd-26GW/F2AH11BpA）",
			"promotions":[
				"【2499元一口价！货好价不高，不玩套路，直降到底】【品质保证，享一年只换不修】春雷行动，优惠享不停！镇店之宝，一级能效，智能WIFI，钛金免清洗，静如花开！"
			],
			"Ids":"id_item3"
		}
	}

	res.send(_json);
	res.end();
});
// 省级列表数据
app.get('/product/provinces',function(req,res){
	var _json = {
		"provinces":[
			{
				"name":"北京"
			},
			{
				"name":"天津"
			},
			{
				"name":"上海"
			},
			{
				"name":"重庆"
			},
			{
				"name":"河北"
			},
			{
				"name":"山西"
			},
			{
				"name":"辽宁"
			},
			{
				"name":"吉林"
			},
			{
				"name":"黑龙江"
			},
			{
				"name":"江苏"
			},
			{
				"name":"浙江"
			},
			{
				"name":"安徽"
			},
			{
				"name":"福建"
			},
			{
				"name":"江西"
			},
			{
				"name":"山东"
			},
			{
				"name":"河南"
			},
			{
				"name":"湖北"
			},
			{
				"name":"湖南"
			},
			{
				"name":"广东"
			},
			{
				"name":"海南"
			},
			{
				"name":"四川"
			},
			{
				"name":"贵州"
			},
			{
				"name":"湖南"
			},
			{
				"name":"云南"
			}
		]
	};
	res.send(_json);
	res.end();
});
// 市级列表数据
app.get('/product/cities',function(req,res){
	var _json = {
		"cities": [
			{
				"name":"杭州市"
			},
			{
				"name":"宁波市"
			},
			{
				"name":"温州市"
			},
			{
				"name":"嘉兴市"
			},
			{
				"name":"湖州市"
			},
			{
				"name":"绍兴市"
			}
		]
	};
	res.send(_json);
	res.end();
});
// 区级列表数据
app.get('/product/areas',function(req,res){
	var _json = {
		"areas": [
			{
				"name":"上城区"
			},
			{
				"name":"下城区"
			},
			{
				"name":"拱墅区"
			},
			{
				"name":"西湖区"
			},
			{
				"name":"江干区"
			},
			{
				"name":"下沙区"
			}
		]
	};
	res.send(_json);
	res.end();
});
// 商品购买数量
app.get('/product/goodsNum',function(req,res){
	//console.log(req.query.val);
	var _n = req.query.val;
	var _btn = req.query.ops;

	if(_btn == 'add'){
		_n++;
	}else if(_btn == 'minus'){
		if(_n > 1){
			_n--;
		}else{
			_n = 1;
		}

	}
	//console.log(_n);

	var _json = {
		"goodsNum": _n
	};
	res.send(_json);
	res.end();
});

// 监听端口
app.listen(5801,function(){
	console.log('5801,首页、产品页中间件ok')
});
