
function echarts_1() {
    var myChart = echarts.init(document.getElementById('echarts_1'));
    option = {
        series: [{
            "name": "仪表盘1",
            "type": "gauge",
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '66%'],
            radius: '100%',
            "splitNumber": 10,
            "axisLine": {
                "lineStyle": {
                    color: [
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#ae3df6'
                                },
                                {
                                    offset: 1,
                                    color: '#53bef9'
                                }
                                ]
                            )
                        ],
                        [
                            1, '#222e7d'
                        ]
                    ],
                    "width": 12
                }
            },
            axisLabel: {
                show: false,
            },
            "axisTick": {
                show: false,

            },
            "splitLine": {
                "show": false,
            },
            "itemStyle": {
                borderColor: '#f95e7e',
                borderWidth: 2
            },
            "detail": {
                "formatter": function (value) {
                    if (value !== 0) {
                        return value + "%\n";
                    } else {
                        return 0;
                    }
                },
                "offsetCenter": [0, 78],
                "textStyle": {
                    padding: [5, 0, 80, 0],
                    "fontSize": 16,
                    fontWeight: '700',
                    "color": '#00ffff'
                }
            },
            "title": {
                color: '#fff',
                "fontSize": 10,
                "offsetCenter": [0, "-25%"]
            },
            "data": [{
                "name": "",
                "value": 30,
            }],
            pointer: {
                show: true,
                width: "2",
                length: '50%'
            },
        },

        {
            name: '刻度1',
            type: 'gauge',
            radius: '40%',
            center: ['50%', '66%'],
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 5, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: false,

            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: '#5c53de', //用颜色渐变函数不起作用
                    width: 1,
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: false,
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },



        { //指针外环
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['5%', '15%'],
            center: ['50%', '66%'],
            "label": {
                "normal": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 100,
                itemStyle: {
                    normal: {
                        color: "#fd479c"
                    }
                }
            }]
        },



        { //指针内环
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['0%', '10%'],
            center: ['50%', '66%'],
            "label": {
                "normal": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 100,
                itemStyle: {
                    normal: {
                        color: "#fff"
                    }
                }
            }]
        },



        ]
    };
    myChart.clear();
    myChart.setOption(option);
};
function echarts_2() {
    var myChart = echarts.init(document.getElementById('echarts_2'));
    var pieSource = {
        'xx1': 335,
        'xx2': 335,
        'xx3': 335,
    },
        legendColor = ["#2edfa3", "#bce672", "#ff4777"],
        richStyle = {};

    function initData(source) {
        legendColor.map((item, index) => {
            richStyle['style' + index] = {};
            richStyle['style' + index]['color'] = item;
            richStyle['style' + index]['align'] = 'right';
        });
        if (Object.prototype.toString.call(source) === '[object Object]') {
            const arr = [];
            const legendData = [];
            Object.entries(source).forEach((value) => {
                legendData.push(value[0]);
                let obj = {};
                obj.name = value[0];
                obj.value = value[1];
                arr.push(obj);
            });
            source = arr;
            return {
                source,
                legendData
            };
        } else if (source && Object.prototype.toString.call(source) === '[object Array]') {
            let legendData = [];
            source.forEach((item, index) => {
                legendData.push(item.name);
            });
            return {
                source,
                legendData
            };
        }
    }
    source = initData(pieSource);
    option = {
        tooltip: {
            trigger: 'item',
            textStyle: {
                color: '#fff',
                // fontSize:28
            },
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: legendColor,
        legend: [
            {
                x: 'center',
                y: 0,
                icon: 'rect',
                selectedMode: false,
                textStyle: {
                    color: '#cddafd',
                    fontSize: 14,
                    rich: richStyle,
                    width: 80,
                    height: 16,
                },
                padding: [10, 0, 10, 0],
                itemWidth: 14,
                itemHeight: 14,
                itemGap: 20,
                data: source.legendData.slice(0, 4),
                formatter: function (name) {
                    let oa = option.series[0].data;
                    let total = 0;
                    oa.forEach((item, index) => {
                        total += item.value;
                    });
                    for (let i = 0; i < oa.length; i++) {
                        if (name == oa[i].name) {
                            // return name + '  ' + '{style'+i+'|' + (oa[i].value / total * 100).toFixed(2) + '%}';
                            return name + '{style' + i + '|' + (oa[i].value / total * 100).toFixed(2) + '%}';
                        }
                    }
                },
            },

        ],
        series: [{
            name: '在线车辆占比',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['50%', '60%'],
            data: source.source,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    shadowColor: '#438bff',
                    shadowBlur: 20
                },
            }
        }]
    };
    myChart.clear();
    myChart.setOption(option);
};
function echarts_3() {
    var myChart = echarts.init(document.getElementById('echarts_3'));

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}万吨 ({d}%)"
        },
        color: ['#2edfa3', '#bce672', '#ff4777', '#00ffff', '#2b65c4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
        series: [

            {
                name: '货类结构统计',
                type: 'pie',
                radius: '60%',
                label: {
                    normal: {
                        formatter: function (e) {
                            if (e.percent === 0) {
                                return ''
                            } else {
                                return '' + e.name + '\n\n' + e.value + '(万吨)' + '(' + e.percent + '%' + ')';
                            }
                        }
                    }
                },
                data: [{
                    value: 35,
                    name: '其他'
                }, {
                    value: 25,
                    name: '农产品'
                }, {
                    value: 18,
                    name: '冷藏货物'
                }, {
                    value: 29,
                    name: '商品汽车'
                }, {
                    value: 24,
                    name: '大宗货物'
                }, {
                    value: 20,
                    name: '快速消费品'
                },
                {
                    value: 24,
                    name: '电子产品'
                },
                ],
            }
        ]
    };
    myChart.clear();
    myChart.setOption(option);
};
function echarts_4() {
    var myChart = echarts.init(document.getElementById('echarts_4'));
    var fontColor = '#30eee9';
    option = {

        grid: {
            left: '4%',
            right: '2%',
            top: '18%',
            bottom: '2%',
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: 'item'
        },
        legend: {
            show: false,
            x: 'right',
            y: '35',
            icon: 'stack',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#1bb4f6'
            },
            data: ['浏览量']
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    color: fontColor
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#397cbc'
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#195384'
                    }
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '货运量',
                min: 0,
                max: 1000,
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#2ad1d2'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#27b4c2'
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#11366e'
                    }
                }
            },
        ],
        series: [
            {
                name: '浏览量',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: '#aecb56',
                        lineStyle: {
                            color: "#aecb56",
                            width: 1
                        },
                        areaStyle: {
                            //color: '#94C9EC'
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(7,44,90,0.3)'
                            }, {
                                offset: 1,
                                color: 'rgba(114,144,89,0.9)'
                            }]),
                        }
                    }
                },
                data: [400, 232, 900, 320, 190, 330, 800, 500, 232, 201, 300, 240]
            }
        ]
    };
    myChart.clear();
    myChart.setOption(option);
} 
function echarts_5() {
    var myChart = echarts.init(document.getElementById('echarts_5'));
    var chinaGeoCoordMap = {
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京市': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '上海': [121.4648, 31.2891]
    };
    var chinaDatas = [
        [{
            name: '黑龙江',
            value: 0
        }], [{
            name: '内蒙古',
            value: 0
        }], [{
            name: '吉林',
            value: 0
        }], [{
            name: '辽宁',
            value: 0
        }], [{
            name: '河北',
            value: 0
        }], [{
            name: '天津',
            value: 0
        }], [{
            name: '山西',
            value: 13
        }], [{
            name: '陕西',
            value: 28
        }], [{
            name: '甘肃',
            value: 37
        }], [{
            name: '宁夏',
            value: 90
        }], [{
            name: '青海',
            value: 30
        }], [{
            name: '新疆',
            value: 5
        }], [{
            name: '西藏',
            value: 20
        }], [{
            name: '四川',
            value: 70
        }], [{
            name: '重庆',
            value: 30
        }], [{
            name: '山东',
            value: 50
        }], [{
            name: '河南',
            value: 55
        }], [{
            name: '江苏',
            value: 35
        }], [{
            name: '安徽',
            value: 70
        }], [{
            name: '湖北',
            value: 50
        }], [{
            name: '浙江',
            value: 20
        }], [{
            name: '福建',
            value: 90
        }], [{
            name: '江西',
            value: 80
        }], [{
            name: '湖南',
            value: 34
        }], [{
            name: '贵州',
            value: 30
        }], [{
            name: '广西',
            value: 20
        }], [{
            name: '海南',
            value: 10
        }], [{
            name: '北京市',
            value: 100
        }], [{
            name: '上海',
            value: 18
        }]
    ];

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var toCoord= chinaGeoCoordMap[dataItem[0].name];
            var fromCoord = [116.4551, 40.2539];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                    value: dataItem[0].value
                }, {
                    coord: toCoord,
                }]);
            }
        }
        return res;
    };
    var series = [];
    [['北京市', chinaDatas]].forEach(function (item, i) {
        console.log(item)
        series.push({
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                }
            },
            data: convertData(item[1])
        }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: { //涟漪特效
                    period: 4, //动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 4 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right', //显示位置
                        offset: [5, 0], //偏移设置
                        formatter: function (params) {//圆环显示文字
                            return params.data.name;
                        },
                        fontSize: 13
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: 'circle',
                symbolSize: function (val) {
                    return 5 + val[2] * 0.05; //圆环大小
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: '#f00'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                }),
            },
            //被攻击点
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        //offset:[5, 0],
                        color: '#0f0',
                        formatter: '{b}',
                        textStyle: {
                            color: "#0f0"
                        }
                    },
                    emphasis: {
                        show: true,
                        color: "#f60"
                    }
                },
                symbol: 'pin',
                symbolSize: 50,
                data: [{
                    name: item[0],
                    value: chinaGeoCoordMap[item[0]].concat([10]),
                }],
            }
        );
    });

    option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(166, 200, 76, 0.82)',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function (params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value[params.seriesIndex + 1];
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }
        },

        visualMap: { //图例值控制
            min: 0,
            max: 100,
            calculable: true,
            show: true,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true, //是否允许缩放
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .5)', //地图背景色
                    borderColor: '#516a89', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(37, 43, 61, .5)' //悬浮背景
                }
            }
        },
        series: series
    };
    myChart.clear();
    myChart.setOption(option);
}
function echarts_5_1(){
    var myChart = echarts.init(document.getElementById('echarts_5'));
    var geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
    };

    var GZData = [
        [{
            name: '广州'
        }, {
            name: '福州',
            value: 95
        }],
        [{
            name: '广州'
        }, {
            name: '太原',
            value: 90
        }],
        [{
            name: '广州'
        }, {
            name: '长春',
            value: 80
        }],
        [{
            name: '广州'
        }, {
            name: '重庆',
            value: 70
        }],
        [{
            name: '广州'
        }, {
            name: '西安',
            value: 60
        }],
        [{
            name: '广州'
        }, {
            name: '成都',
            value: 50
        }],
        [{
            name: '广州'
        }, {
            name: '常州',
            value: 40
        }],
        [{
            name: '广州'
        }, {
            name: '北京',
            value: 30
        }],
        [{
            name: '广州'
        }, {
            name: '北海',
            value: 20
        }],
        [{
            name: '广州'
        }, {
            name: '海口',
            value: 10
        }]
    ];

    var planePath = 'path://M87.7,42.5H51.3V115h36.5c1.2,0,2.1-1,2.1-2.2v-68C89.9,43.5,88.9,42.5,87.7,42.5L87.7,42.5z M38.1,17.5tc-4.4,0-8,3.7-8,8.4s3.6,8.4,8,8.4c4.4,0,8-3.7,8-8.4S42.5,17.5,38.1,17.5z M38.1,84.2c-4.4,0-8,3.7-8,8.4c0,4.6,3.6,8.4,8,8.4c4.4,0,8-3.7,8-8.4S42.5,84.2,38.1,84.2z M38.1,104.3v8.5c0,1.2,0.9,2.2,2.1,2.2h7.8l0-17.2C46.2,101.6,42.5,104.3,38.1,104.3zM49.6,3.5h-9.3c-1.2,0-2.1,1-2.1,2.2v8.4c6.1,0,11.2,5.3,11.2,11.7c0,6.5-5,11.7-11.2,11.7v43.3c4.3,0,8.1,2.6,10,6.5l0-48.2H75c1.2,0,2.1-1,2.1-2.2v-15c0-1.2-0.8-2.8-1.8-3.4L53.5,4.6C52.5,4,50.7,3.5,49.6,3.5z M59.5,13.7L72,21.6c0.5,0.3,0.9,1.1,0.9,1.7v10.3c0,0.6-0.5,1.1-1.1,1.1H62c-0.6,0-1.1-0.5-1.2-1.1l-2.1-19.4C58.7,13.6,59,13.4,59.5,13.7z';
    var type = "流入";
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var toCoord = geoCoordMap[dataItem[0].name];
            var fromCoord = geoCoordMap[dataItem[1].name];
            if ("流入" == type) {
                fromCoord = geoCoordMap[dataItem[1].name];
                toCoord = geoCoordMap[dataItem[0].name];
            }
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    var tempData = ['广州', GZData];
    series.push({
        name: tempData[0],
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 4, //箭头指向速度，值越小速度越快
            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 5, //图标大小
        },
        lineStyle: {
            normal: {
                width: 1, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: .3 //尾迹线条曲直度
            }
        },
        data: convertData(tempData[1])
    },
        //被攻击点
        {
            name: tempData[0],
            type: 'lines',
            zlevel: 2,
            // effect: {
            //     show: false,
            //     period: 6,
            //     trailLength: 0,
            //     // symbol: planePath,
            //     symbolSize: [16,22]
            // },
            lineStyle: {
                normal: {
                    color: color[0],
                    width: 0,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(tempData[1])
        }, {
            name: tempData[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[0]
                }
            },
            data: tempData[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        },
    );

    option = {
        title: {
            text: '模拟迁徙',
            subtext: '数据纯属虚构',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                console.log(params);
                if (params.seriesType == "effectScatter") {
                    if ("流入" == type) {
                        return type + "<br>" + params.data.name + " ---> " + params.seriesName + "<br />人数：" + params.data.value[2] + "人";
                    } else {
                        return "流出<br>" + params.seriesName + " ---> " + params.data.name + "<br />人数：" + params.data.value[2] + "人";
                    }

                } else if (params.seriesType == "lines") {
                    if ("流入" == type) {
                        return type + "<br>" + params.data.toName + " ---> " + params.data.fromName + "<br />人数：" + params.data.value + "人";
                    } else {
                        return type + "<br>" + params.data.fromName + " ---> " + params.data.toName + "<br />人数：" + params.data.value + "人";
                    }
                } else {
                    return params.name;
                }
            }
        },
        legend: {
            show: false,
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['广州'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        visualMap: { //图例值控制
            min: 0,
            max: 100,
            calculable: true,
            show: true,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true, //是否允许缩放
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .5)', //地图背景色
                    borderColor: '#516a89', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(37, 43, 61, .5)' //悬浮背景
                }
            }
        },
        series: series
    };
    myChart.clear();
    myChart.setOption(option);
}
function echarts0(){
    var myChart = echarts.init(document.getElementById('echarts'));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: ['1', '2', '3'],
            right: 10,
            top: 12,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
        xAxis: {
            type: 'category',
            data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            axisLine: {
                lineStyle: {
                    color: 'white'

                }
            },
            axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                }
            },
        },

        yAxis: {
            type: 'value',
            max: '1200',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        },
        "dataZoom": [{
            "show": true,
            "height": 12,
            "xAxisIndex": [
                0
            ],
            bottom: '8%',
            "start": 10,
            "end": 90,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
                color: "#d3dee5",

            },
            textStyle: {
                color: "#fff"
            },
            borderColor: "#90979c"
        }, {
            "type": "inside",
            "show": true,
            "height": 15,
            "start": 1,
            "end": 35
        }],
        series: [{
            name: '1',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fccb05'
                    }, {
                        offset: 1,
                        color: '#f5804d'
                    }]),
                    barBorderRadius: 12,
                },
            },
            data: [400, 400, 300, 300, 300, 400, 400, 400, 300]
        },
        {
            name: '2',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8bd46e'
                    }, {
                        offset: 1,
                        color: '#09bcb7'
                    }]),
                    barBorderRadius: 11,
                }

            },
            data: [400, 500, 500, 500, 500, 400, 400, 500, 500]
        },
        {
            name: '3',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#248ff7'
                    }, {
                        offset: 1,
                        color: '#6851f1'
                    }]),
                    barBorderRadius: 11,
                }
            },
            data: [400, 600, 700, 700, 1000, 400, 400, 600, 700]
        }]
    };

    var app = {
        currentIndex: -1,
    };
    setInterval(function () {
        var dataLen = option.series[0].data.length;

        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: app.currentIndex
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: app.currentIndex
        });


    }, 1000);
    myChart.clear();
    myChart.setOption(option);
}
function echarts1() {
    var myChart = echarts.init(document.getElementById('echarts'));
    var chinaGeoCoordMap = {
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京市': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '上海': [121.4648, 31.2891]
    };
    var chinaDatas = [
        [{
            name: '黑龙江',
            value: 0
        }], [{
            name: '内蒙古',
            value: 0
        }], [{
            name: '吉林',
            value: 0
        }], [{
            name: '辽宁',
            value: 0
        }], [{
            name: '河北',
            value: 0
        }], [{
            name: '天津',
            value: 0
        }], [{
            name: '山西',
            value: 0
        }], [{
            name: '陕西',
            value: 0
        }], [{
            name: '甘肃',
            value: 0
        }], [{
            name: '宁夏',
            value: 0
        }], [{
            name: '青海',
            value: 0
        }], [{
            name: '新疆',
            value: 0
        }], [{
            name: '西藏',
            value: 0
        }], [{
            name: '四川',
            value: 0
        }], [{
            name: '重庆',
            value: 0
        }], [{
            name: '山东',
            value: 0
        }], [{
            name: '河南',
            value: 0
        }], [{
            name: '江苏',
            value: 0
        }], [{
            name: '安徽',
            value: 0
        }], [{
            name: '湖北',
            value: 0
        }], [{
            name: '浙江',
            value: 0
        }], [{
            name: '福建',
            value: 0
        }], [{
            name: '江西',
            value: 0
        }], [{
            name: '湖南',
            value: 0
        }], [{
            name: '贵州',
            value: 0
        }], [{
            name: '广西',
            value: 0
        }], [{
            name: '海南',
            value: 0
        }], [{
            name: '上海',
            value: 1
        }]
    ];

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = chinaGeoCoordMap[dataItem[0].name];
            var toCoord = [116.4551, 40.2539];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                    value: dataItem[0].value
                }, {
                    coord: toCoord,
                }]);
            }
        }
        return res;
    };
    var series = [];
    [['北京市', chinaDatas]].forEach(function (item, i) {
        console.log(item)
        series.push({
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                }
            },
            data: convertData(item[1])
        }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: { //涟漪特效
                    period: 4, //动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 4 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right', //显示位置
                        offset: [5, 0], //偏移设置
                        formatter: function (params) {//圆环显示文字
                            return params.data.name;
                        },
                        fontSize: 13
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: 'circle',
                symbolSize: function (val) {
                    return 5 + val[2] * 5; //圆环大小
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: '#f00'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                }),
            },
            //被攻击点
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        //offset:[5, 0],
                        color: '#0f0',
                        formatter: '{b}',
                        textStyle: {
                            color: "#0f0"
                        }
                    },
                    emphasis: {
                        show: true,
                        color: "#f60"
                    }
                },
                symbol: 'pin',
                symbolSize: 30,
                data: [{
                    name: item[0],
                    value: chinaGeoCoordMap[item[0]].concat([10]),
                }],
            }
        );
    });

    option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(166, 200, 76, 0.82)',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function (params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value[params.seriesIndex + 1];
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }
        },

        visualMap: { //图例值控制
            min: 0,
            max: 1,
            calculable: true,
            show: true,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true, //是否允许缩放
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .5)', //地图背景色
                    borderColor: '#516a89', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(37, 43, 61, .5)' //悬浮背景
                }
            }
        },
        series: series
    };
    myChart.clear();
    myChart.setOption(option);
}
function echarts2() {
    var myChart = echarts.init(document.getElementById('echarts'));
    var pieSource = {
        'xx1': 335,
        'xx2': 335,
        'xx3': 335,
    },
        legendColor = ["#2edfa3", "#bce672", "#ff4777"],
        richStyle = {};

    function initData(source) {
        legendColor.map((item, index) => {
            richStyle['style' + index] = {};
            richStyle['style' + index]['color'] = item;
            richStyle['style' + index]['align'] = 'right';
        });
        if (Object.prototype.toString.call(source) === '[object Object]') {
            const arr = [];
            const legendData = [];
            Object.entries(source).forEach((value) => {
                legendData.push(value[0]);
                let obj = {};
                obj.name = value[0];
                obj.value = value[1];
                arr.push(obj);
            });
            source = arr;
            return {
                source,
                legendData
            };
        } else if (source && Object.prototype.toString.call(source) === '[object Array]') {
            let legendData = [];
            source.forEach((item, index) => {
                legendData.push(item.name);
            });
            return {
                source,
                legendData
            };
        }
    }
    source = initData(pieSource);
    option = {
        tooltip: {
            trigger: 'item',
            textStyle: {
                color: '#fff',
                // fontSize:28
            },
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: legendColor,
        legend: [
            {
                x: 'center',
                y: 0,
                icon: 'rect',
                textStyle: {
                    color: '#cddafd',
                    fontSize: 14,
                    rich: richStyle,
                    width: 80,
                    height: 16,
                },
                padding: [30, 0, 30, 0],
                itemGap: 40,
                itemWidth: 14,
                itemHeight: 14,
                itemGap: 20,
                data: source.legendData.slice(0, 4),
                formatter: function (name) {
                    let oa = option.series[0].data;
                    let total = 0;
                    oa.forEach((item, index) => {
                        total += item.value;
                    });
                    for (let i = 0; i < oa.length; i++) {
                        if (name == oa[i].name) {
                            // return name + '  ' + '{style'+i+'|' + (oa[i].value / total * 100).toFixed(2) + '%}';
                            return name + '{style' + i + '|' + (oa[i].value / total * 100).toFixed(2) + '%}';
                        }
                    }
                },
            },

        ],
        series: [{
            name: '在线车辆占比',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['50%', '60%'],
            data: source.source,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    shadowColor: '#438bff',
                    shadowBlur: 20
                },
            }
        }]
    };
    myChart.clear();
    myChart.setOption(option);
};
function echarts3() {
    var myChart = echarts.init(document.getElementById('echarts'));

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}万吨 ({d}%)"
        },
        color: ['#2edfa3', '#bce672', '#ff4777', '#00ffff', '#2b65c4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
        series: [

            {
                name: '货类结构统计',
                type: 'pie',
                radius: '70%',
                label: {
                    normal: {
                        formatter: function (e) {
                            if (e.percent === 0) {
                                return ''
                            } else {
                                return '' + e.name + '\n\n' + e.value + '(万吨)' + '(' + e.percent + '%' + ')';
                            }
                        }
                    }
                },
                data: [{
                    value: 35,
                    name: '其他'
                }, {
                    value: 25,
                    name: '农产品'
                }, {
                    value: 18,
                    name: '冷藏货物'
                }, {
                    value: 29,
                    name: '商品汽车'
                }, {
                    value: 24,
                    name: '大宗货物'
                }, {
                    value: 20,
                    name: '快速消费品'
                },
                {
                    value: 24,
                    name: '电子产品'
                },
                ],
            }
        ]
    };
    myChart.clear();
    myChart.setOption(option);
};
function echarts4(){
    var myChart = echarts.init(document.getElementById('echarts'));
    var data = [{
    "name": "一月",
    "value": 80
}, {
    "name": "二月",
    "value": 87.8
}, {
    "name": "三月",
    "value": 71
}, {
    "name": "四月",
    "value": 80
}, {
    "name": "五月",
    "value": 66
}, {
    "name": "六月",
    "value": 80
}, {
    "name": "七月",
    "value": 80
}];
var xData = [],
    yData = [];
var min = 50; 
data.map(function(a, b) {
    xData.push(a.name);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
option = {

    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(prams) {
            if (prams[0].data === min) {
                return "合格率：0%"
            } else {
                return "合格率：" + prams[0].data + "%"
            }
            }, 

         
    },
    legend: {
        data: ['直接访问', '背景'],
        show: false
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '5%',
        top: '7%',
        height: '85%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            show: true,
             color: 'rgb(170,170,170)',
             fontSize:16
        }
    }],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: min,
            max: 100,
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            axisLabel: {
                color: 'rgb(170,170,170)',
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: min,
            max: 100,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
    ],
    series: [{
            name: '合格率',
            type: 'bar',
            barWidth: '20%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#0286ff'
                            }
                        ]
                    )
                }
            },
            data: yData,
            zlevel: 11

        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '40%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-145%',
            data: [100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },
      
    ]
};

    myChart.clear();
    myChart.setOption(option);
    myChart.on('click', function (params) {
        // 当componentType == "xAxis"或者 ==“yAxisx”时，取被点击时坐标轴的值params.value
        // alert("单击了"+params.componentType+"x轴标签"+params.value); 
        // if(params.componentType == "xAxis"){  
        //     alert("单击了"+params.value+"x轴标签");  
        // }else if (params.componentType == "yAxis") {
        //     alert("单击了"+params.value+"y轴标签");  
        // }
        // else{  
        //     alert("单击了"+params.name+"柱状图"+params.value);  
        // }  
        // alert("单击了" + params.name + "柱状图" + params.value);
        if (params.name=='一月'){
            echarts10();
        }
        else if (params.name == '二月'){
            echarts11();
        }
        else if (params.name == '三月') {
            echarts12();
        }
        else if (params.name == '四月') {
            echarts9();
        }

        // invalid start
        //     获取data长度
        // 　　alert(option.series[0].data.length);
        //      获取地N个data的值
        // 　　alert(option.series[0].data[3]);
        //     获取series中param.dataIndex事件对应的值
        // alert(params.dataIndex);
        // 　　alert(option.series[params.seriesIndex].data[params.dataIndex]);
        //invalid end

        // alert(param.value);
        //    获取xAxis当前点击事件索引对应的值，可以用作传参
        // alert("test "+option.xAxis.data[params.dataIndex]);     
        //param.dataIndex 获取当前点击索引，
        // 　　alert(param.dataIndex);
        //  当前点击事件位于series中的索引
        //   alert(param.seriesIndex);
        //param具体包含的参数见 https://blog.csdn.net/allenjay11/article/details/76033232
        // updatePage(option.xAxis.data[params.dataIndex], params.value);

        // refresh();
    });
}
function echarts5() {
    var myChart = echarts.init(document.getElementById('echarts'));
    var fontColor = '#30eee9';
    option = {

        grid: {
            left: '4%',
            right: '2%',
            top: '18%',
            bottom: '2%',
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: 'item'
        },
        legend: {
            show: false,
            x: 'right',
            y: '35',
            icon: 'stack',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#1bb4f6'
            },
            data: ['浏览量']
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    color: fontColor
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#397cbc'
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#195384'
                    }
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '货运量',
                min: 0,
                max: 1000,
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#2ad1d2'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#27b4c2'
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#11366e'
                    }
                }
            },
        ],
        series: [
            {
                name: '浏览量',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: '#aecb56',
                        lineStyle: {
                            color: "#aecb56",
                            width: 1
                        },
                        areaStyle: {
                            //color: '#94C9EC'
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(7,44,90,0.3)'
                            }, {
                                offset: 1,
                                color: 'rgba(114,144,89,0.9)'
                            }]),
                        }
                    }
                },
                data: [400, 232, 900, 320, 190, 330, 800, 500, 232, 201, 300, 240]
            }
        ]
    };
    myChart.clear();
    myChart.setOption(option);
}
function echarts6(){
    var myChart = echarts.init(document.getElementById('echarts'));
    //数据
    var XName = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    var data1 = [
        [123, 154, 234, 321, 120, 390, 634],
        [63, 194, 234, 321, 278, 110, 534],
        [53, 254, 234, 321, 118, 240, 434],
        [23, 354, 334, 221, 178, 190, 234],
    ]
    var Line = ["云篆山水路线", "昕博朗学校路线", "新华小学路线", "云锦五路路线"];
    var img = [
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsSAAALEgHS3X78AAAEp0lEQVR42u3cz4sjRRTA8W9Vd3Vn8mMmjj9WQWSRZQ+CsH+B7MnDIgiCd0E8CYJ/gOAIelo8ehUP/gF6WLw5/gMueFP2sIcF0dHd2Z1kknR11fOQZJJJMtlZd03H7HtQpNOTnpn+8Lrm1etmjIig8e/DKoECKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIqoAJudKTr+osZMNPvBUQBHwHsPF9fB9R0DeHMOQ6T6WOrhEzXBM4swDOL0M6CrArRVoq3t2dGUIb9fTvatg8ZZup1PDBgzPmy98mey6qfzjLz2WaWjEUZKEvGyi9nWyneMOvGIyFQo2Sbg4MUSChpU9IeTTUpJdsEajPZOJeJG5uBZj7rLLduWS5dGm6XNLEELOFUFj54ACJCaychkpDSASK3bwsXL0YgVpWJKwM0iy9Zy8HdGru7jvt3Pbu7w0wES7drTwAbjTHMGCsQcIAnYTC1/wRx0wEnl27JNgZI8HQ6Kc1mQq83RNzaMjPzXqDbjTQaJRFLxIyyMSxAXEkWrhrQzAAmo5HOjCQf7jflILxOkohL+aUPgV4vEGNJo+E5PAy02+UIMEwBxo0CPDP7Dg5SnEtpt1PA0e87XO25FOoh8IYIH2Y5b45RzGAQBiIltZoHxqMcjbksXAVgdc2EQMYzzzdotyeZWKuleULXJtwT4SODfC2QCWR+IF9KnjuX1Xbo99Op7LVE8iXlz0YBTk5SyLEEjo5OLuccEoFUvHfO+reuUPx4zftXAIcx1hdcF+/TvFab4A0Bs0VwqyhpVnkJT89/Q4DDQ0e77YCMwIUsFMeFZD856699URRvX4nxE4A/jbnxXp7v4Zw3ReGNSDHI8wFQjIafuoyn58L/fB6sth/Ybg9fez2TRC6QZcZYvgHsazF+MP7YCyLXcM7gvSXLDGBqYDg+NhwdmSpPoTrAkub0W+f4FSB1fDucIunMHSLpO8WAH0rSy8u+19MBCHB4OHzd2pI+CEUhpigEiN+l6WcdY252jLn5s7Wf472ImPcN8pUl/tEHoV4XWq1Ke4KrLmPsTA3oODpytFoOyJKSyzHyMSIxteWngMW5cSEdDJQUhTdZVgxOz3/+jFJm4+bA2e5JpNU6WZ4Fw99JwnWMKccwpeddP+B7GZTNUPKqybJy0O+Hs1YfMz9swwvpB8fbGDG0GuGkkK7V0hxSmZQpABI8l2z0v3sJf50qpAMJCd2qCulql3LD1lRGQjm7lEsDz0rkxTQOfiPPxUBcuJTbbhss/Y1eyi3NwsmKInmkZsKk5gtPUzNhvp11507CSy/X6XYStpvFudpZw1ZWIOF4Cq6SdtbKbioJyAhRTu3u9yMJXerN+ugvaQQsjcZ8Q3VnZwxlSDhe1lB9GjrSw5b+1avT8+Jw+979nNaOI6U3KpTrWAosxVQmygK4ld8X0ZtK/7eViExD7O1NQPb3T7fsl4/4sBpwYzPwjFbTo95Yl9l9Vd1YN1X/147HebSjary1AHyc5qc+XLQEQx9ve8Kg6xr6hKoCKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIq4JrHP8fEWV8FMTmOAAAAAElFTkSuQmCC',
        'image://data:image/png;base64,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',
        'image://data:image/png;base64,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',
        'image://data:image/png;base64,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',
    ];
    var color = ['#00f8ff', '#00f15a', '#0696f9', '#dcf776'];

    //数据处理
    var datas = [];
    Line.map((item, index) => {
        datas.push(
            {
                symbolSize: 150,
                symbol: img[index],
                name: item,
                type: "line",
                yAxisIndex: 1,
                data: data1[index],
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        color: color[index],
                    }
                }
            }
        )
    })

    option = {
        grid: {
            left: '5%',
            top: '5%',
            bottom: '5%',
            right: '5%',
        },
        legend: {
            type: "scroll",
            data: Line,
            itemWidth: 18,
            itemHeight: 12,
            textStyle: {
                color: "#00ffff",
                fontSize: 14
            },
        },
        yAxis: [
            {
                type: 'value',
                position: 'right',
                splitLine: {
                    show: false
                }
                ,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            {
                type: 'value',
                position: 'left',
                nameTextStyle: {
                    color: '#00FFFF'
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: 'rgba(135,140,147,0.8)'
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    formatter: '{value}',
                    color: '#fff',
                    fontSize: 14
                }
            },
        ],
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#6A989E',
                    }
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#fff',// x轴颜色
                        fontWeight: 'normal',
                        fontSize: '14',
                        lineHeight: 22
                    }

                },
                data: XName,
            },
            {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                //-----
                data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            },
        ],
        series: datas,
    };
//当点击legend选项时折线上的小图片会消失，为避免这种情况，可以采取以下初始化方法 使用svg
//var myCharts = echarts.init(document.getElementById('AnalysisChartLine'), null, {renderer: 'svg'});
//myCharts.clear();
//myCharts.setOption(option)
    myChart.clear();
    myChart.setOption(option);
}
function echarts7(){
    var myChart = echarts.init(document.getElementById('echarts'));
    var charts = {
        unit: 'Kbps',
        names: ['出口', '入口'],
        lineX: ['2018-11-11 17:01', '2018-11-11 17:02', '2018-11-11 17:03', '2018-11-11 17:04', '2018-11-11 17:05', '2018-11-11 17:06', '2018-11-11 17:07', '2018-11-11 17:08', '2018-11-11 17:09', '2018-11-11 17:10', '2018-11-11 17:11', '2018-11-11 17:12', '2018-11-11 17:13', '2018-11-11 17:14', '2018-11-11 17:15', '2018-11-11 17:16', '2018-11-11 17:17', '2018-11-11 17:18', '2018-11-11 17:19', '2018-11-11 17:20'],
        value: [
            [451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
            [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
        ]

    }
    var color = ['rgba(23, 255, 243', 'rgba(255,100,97']
    var lineY = []

    for (var i = 0; i < charts.names.length; i++) {
        var x = i
        if (x > color.length - 1) {
            x = color.length - 1
        }
        var data = {
            name: charts.names[i],
            type: 'line',
            color: color[x] + ')',
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[x] + ', 0.3)'
                    }, {
                        offset: 0.8,
                        color: color[x] + ', 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            symbol: 'circle',
            symbolSize: 5,
            data: charts.value[i]
        }
        lineY.push(data)
    }

    lineY[0].markLine = {
        silent: true,
        data: [{
            yAxis: 5
        }, {
            yAxis: 100
        }, {
            yAxis: 200
        }, {
            yAxis: 300
        }, {
            yAxis: 400
        }]
    }
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: charts.names,
            textStyle: {
                fontSize: 12,
                color: 'rgb(0,253,255,0.6)'
            },
            right: '4%'
        },
        grid: {
            top: '8%',
            left: '4%',
            right: '4%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: charts.lineX,
            axisLabel: {
                textStyle: {
                    color: 'rgb(0,253,255,0.6)'
                },
                formatter: function (params) {
                    return params.split(' ')[0] + '\n' + params.split(' ')[1]
                }
            }
        },
        yAxis: {
            name: charts.unit,
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: 'rgb(0,253,255,0.6)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgb(23,255,243,0.3)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                }
            }
        },
        series: lineY
    }
    setInterval(() => {
        myChart.setOption({
            legend: {
                selected: {
                    '出口': false,
                    '入口': false
                }
            }
        })
        myChart.setOption({
            legend: {
                selected: {
                    '出口': true,
                    '入口': true
                }
            }
        })
    }, 10000)
    myChart.clear();
    myChart.setOption(option);
}
function echarts8(){
    var myChart = echarts.init(document.getElementById('echarts'));

    var data = [110, 98, 100, 99, 80, 110, 98, 100, 99, 80, 80, 10]
    var titlename = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    var valdata = ['11.03亿', '9.06亿', '12.60亿', '10.85亿', '10.00亿', '9.89亿', '7.34亿', '9.56亿', '12.10亿', '12.13亿', '8.99亿', '0']
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
    option = {
        title: {
            text: '每月销售额统计',
            left: '50%',
            textAlign: 'center',
            textStyle: {
                color: '#FFF',
                fontSize: '24'
            },
            top: 20
        },
        grid: {
            top: 70,
            left: '4%',
            right: '4%',
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                rich: {
                    lg: {
                        backgroundColor: '#339911',
                        color: '#fff',
                        padding: 5,
                        align: 'center',
                        width: 15,
                        height: 15,
                    },
                }
            },


        }, {
            show: true,
            inverse: true,
            data: valdata,
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }],
        series: [{
            name: '销售完成占比',
            type: 'bar',
            yAxisIndex: 1,
            data: data,
            barWidth: 16,
            barGategoryGap:50,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
        }]
    };
    myChart.clear();
    myChart.setOption(option);
}
function echarts9() {
    var myChart = echarts.init(document.getElementById('echarts'));
    option = {
        grid: {
            top: '15%',
            right: '3%',
            left: '5%',
            bottom: '12%'
        },
        xAxis: [{
            type: 'category',
            color: '#59588D',
            data: ['学员续费率', '试听课转换率', '课程消费率', '课后评分率', '作业完成率', '班级满班率', '排课上课率', '体验课转化率'],
            axisPointer: {
                type: 'line'
            },
            axisLine: {
                lineStyle: {
                    color: '#272456'
                }
            },
            axisLabel: {
                margin: 20,
                color: '#fff',
                textStyle: {
                    fontSize: 12
                },
            },
        }],
        yAxis: [{
            min: 0,
            max: 100,
            axisLabel: {
                formatter: '{value}%',
                color: '#fff',
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: '#272456'
                }
            }
        }],
        toolbox: {
            show: true,
            feature: {
                myTool1: {
                    show: true,
                    title: '返回',
                    // icon: 'image://images/back_.png',
                    width: 30,
                    height: 30,
                    onclick: function () {
                        echarts4();
                    },

                }
            },
            itemSize: 26
        },
        series: [{
            type: 'bar',
            data: [100, 90, 10, 90, 90, 20, 56, 89],
            barWidth: '20px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#41E1D4' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#10A7DB' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 0, 0],
                    shadowColor: 'rgba(0,255,225,1)',
                    shadowBlur: 1,
                }
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 30,
                    width: 80,
                    height: 30,
                    backgroundColor: '#252453',
                    borderRadius: 200,
                    position: ['-8', '-60'],
                    distance: 1,
                    formatter: [
                        '    {d|●}',
                        ' {a|{c}%}     \n',
                        '    {b|}'
                    ].join(','),
                    rich: {
                        d: {
                            color: '#3CDDCF',
                        },
                        a: {
                            color: '#fff',
                            align: 'center',
                        },
                        b: {
                            width: 1,
                            height: 30,
                            borderWidth: 1,
                            borderColor: '#234e6c',
                            align: 'left'
                        },
                    }
                }
            }
        }]
    };
    myChart.clear();
    myChart.setOption(option);
}
function echarts10() {
    var myChart = echarts.init(document.getElementById('echarts'));
    var xData = function () {
        var data = [];
        for (var i = 2011; i < 2020; i++) {
            data.push(i);
        }
        return data;
    }();

    var data = [13.7, 13.4, 13.5, 16.1, 17.4, 12.2, 18.1, 10.4, 8.2]

    option = {
        title: {
            text: "政策匹配度",
            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16',

            },
        },
        tooltip: {
            show: "true",
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            formatter: function (params) {
                if (params.seriesName != "") {
                    return params.name + ' ： 第 ' + params.value + ' 名';
                }
            },

        },
        grid: {
            borderWidth: 0,
            top: 80,
            left:50,
            right:50,
            bottom: 60,
            textStyle: {
                color: "#fff"
            }
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#363e83',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data: xData,
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: xData,
        }],
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#32346c',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#32346c ',
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                formatter: '{value}名',
            },
        },
        toolbox: {
            show: true,
            feature: {
                myTool1: {
                    show: true,
                    title: '返回',
                    // icon: 'image://images/back_.png',
                    width: 30,
                    height: 30,
                    onclick: function () {
                        echarts4();
                    },

                }
            },
            itemSize: 26
        },
        series: [{
            name: '生师比(%)',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00c0e9'
                    }, {
                        offset: 1,
                        color: '#3b73cf'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                },
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(105,123, 214, 0.7)'
                }
            },
            zlevel: 2,
            barWidth: '15%',
            data: data,
        },
        {
            name: '',
            type: 'bar',
            xAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: '#121847',
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
            barWidth: '15%',
            data: [30, 30, 30, 30, 30, 30, 30, 30, 30]
        }
        ]
    }
    myChart.clear();
    myChart.setOption(option);
}
function echarts11(){
    var myChart = echarts.init(document.getElementById('echarts'));
    var scale = 1;
    var singleData = [260, 220, 168, 100, 80, 100, 180, 50];
    var multipleData = [442, 440, 220];
    var judgeData = [110, 220, 115];
    var colors=['#2edfa3', '#bce672', '#ff4777', '#00ffff', '#2b65c4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA']
    var color = "#183b75";
    option = {
        tooltip: {
            show: false,
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color: ['#2edfa3', '#bce672', '#ff4777', '#00ffff', '#2b65c4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
        legend: {
            show: false
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['IP1', 'IP2', 'IP3', 'IP4', 'IP5', 'IP6', 'IP7', 'IP8'],
            axisLabel: {
                // inside: true,
                padding: [15, 0, 0, 0],
                textStyle: {
                    color: "#c0dff2",
                    fontSize: 18 * scale,
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#183b75",
                    width: "2"
                }
            }
        }],
        yAxis: [{
            type: 'value',
            offset: '-10',
            axisLabel: {
                // inside: true,
                padding: [0, 0, 20, 0],
                textStyle: {
                    color: "#c0dff2",
                    fontSize: 16,
                },
                align: 'left',
                vertivalAlign: 'top'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(192,223,242,0.3)',
                    type: 'dashed',
                    width: 2
                }
            },
            name: null
        }],
        toolbox: {
            show: true,
            feature: {
                myTool1: {
                    show: true,
                    title: '返回',
                    // icon: 'image://images/back_.png',
                    width: 30,
                    height: 30,
                    onclick: function () {
                        echarts4();
                    },

                }
            },
            itemSize: 26
        },
        series: [{
            name: '单选题',
            type: 'bar',
            stack: 'ip',
            barWidth: '15%',
            barGap: '40%',
            itemStyle: {
                normal: {
                    color: '#83e0fc',
                    opacity: 0
                }
            },
            data: [1, 1, 1, 1, 1, 1, 1, 1]
        },
        {
            name: '单选题',
            type: 'bar',
            stack: 'ip',
            barWidth: '15%',
            barGap: '40%',
            label: {
                normal: {
                    show: true,
                    position: "top",
                    distance: 20,
                    formatter: function (params) {
                        return params.data.value;
                    },
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colors[params.dataIndex]
                    },
                    opacity: 1
                }
            },
            data: singleData
        },
        {
            name: '单选题',
            type: 'bar',
            stack: 'ip',
            barWidth: '15%',
            barGap: '40%',
            itemStyle: {
                normal: {
                    color: '#83e0fc',
                    opacity: 0
                }
            },
            data: [2, 2, 2, 2, 2, 2, 2, 2]
        },
        {
            name: '单选题',
            type: 'bar',
            stack: 'ip',
            barWidth: '15%',
            barGap: '40%',
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colors[params.dataIndex]
                    },
                }
            },
            data: [4, 4, 4, 4, 4, 4, 4, 4]
        }
        ]
    };
    myChart.clear();
    myChart.setOption(option);
}
function echarts12() {
    var myChart = echarts.init(document.getElementById('echarts'));
    var gain = 0.9;
    var gap = 0;
    var myColor = ['#e63810', '#ff6b00', '#e3b61f', '#13b5b1', '#e63810', '#ff6b00', '#e3b61f', '#13b5b1'];
    var myBgColor = ['rgba(230,56,16,0.2)', 'rgba(255,107,0,0.2)', 'rgba(227,182,31,0.2)', 'rgba(19,181,177,0.2)', 'rgba(230,56,16,0.2)', 'rgba(255,107,0,0.2)', 'rgba(227,182,31,0.2)', 'rgba(19,181,177,0.2)'];
    //柱子数据
    var data = [8, 15, 10, 6,14,8,5,20];
    var option = {
        grid: {
            left: '3%',
            top: '10%',
            right: '2%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(160,160,160,0.3)',
                }
            },
            axisLabel: {
                textStyle: {
                    color: function (param, index) {
                        return myColor[index]
                    },
                    fontSize: 13 * gain,
                }
            },
            data: ['01', '02', '03', '04','05','06','07','08']
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: []
        },
        ],
        yAxis: {
            type: 'value',
            name: '单位：件',
            nameGap: 35 + gap,
            nameTextStyle: {
                color: '#ffffff',
                fontSize: 16 * gain,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(160,160,160,0.3)',
                }
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: 14 * gain,
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                myTool1: {
                    show: true,
                    title: '返回',
                    // icon: 'image://images/back_.png',
                    width: 30,
                    height: 30,
                    onclick: function () {
                       echarts4();
                    },

                }
            },
            itemSize: 26
        },
        series: [{
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: function (params) {
                        var num = myBgColor.length;
                        return myBgColor[params.dataIndex % num]
                    },
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        var stuNum = 0;
                        data.forEach(function (value, index, array) {
                            if (params.dataIndex == index) {
                                stuNum = value;
                            }
                        })
                        return stuNum;
                    },
                    position: 'top',
                    textStyle: {
                        color: function (params) {
                            var num = myBgColor.length;
                            return myBgColor[params.dataIndex % num]
                        },
                        fontSize: 25 * gain,
                    }
                }
            },
            barWidth: '20%',
            data: [33, 33, 33, 33,33,33,33,33]
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: false,

                }
            },
            barWidth: '20%',
            data: data
        }
        ]
    };
    myChart.clear();
    myChart.setOption(option);
}