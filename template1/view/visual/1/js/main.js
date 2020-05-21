var myChart1 = echarts.init(document.getElementById('echarts_1'));
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
                "formatter": function(value) {
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
            axisLine: {
                lineStyle: {
                    width: 12,
                    color: [
                        [0.5, '#8a00e1'],
                        [1, '#fff']
                    ]
                }
            },
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
myChart1.clear();
myChart1.setOption(option);


// ----
var myChart2 = echarts.init(document.getElementById('echarts_2'));
option = {
    backgroundColor: 'rgba(255,255,255,0)',
    // title: {

    //     textStyle: {
    //         color: '#00FFFF',
    //         fontSize: 24
    //     }
    // },
    legend: {
        top: 8,
        textStyle: {
            color: '#fff',
        },
        data: ['男', '女', '111']
    },
    grid: {
        left: 10,
        right: 10,
        top: 42,
        bottom: 10,
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
        formatter: function(params) {
            if (params.seriesIndex == "3" || params.seriesIndex == "4" || params.seriesIndex == "5") {
                return params.name + '<br>' + params.seriesName + ' ： 第 ' + params.value + ' 名';
            }
        }
    },
    yAxis: {
        type: 'value',
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
                color: '#11366e',
                type: 'dotted'
            }
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
                    color: '#2ad1d2',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#2ad1d2',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data: ['会', '不会', '看情况']
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
            data: ['会', '不会', '看情况']
        },

    ],
    series: [{
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
            barWidth: '10%',
            data: [30, 30, 30]
        }, {
            type: 'bar',
            xAxisIndex: 1,
            barGap: '100%',
            data: [30, 30, 30],
            zlevel: 1,
            barWidth: '10%',
            itemStyle: {
                normal: {
                    color: 'rgba(12,23,74,.1)',
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
        }, {
            type: 'bar',
            xAxisIndex: 1,
            barGap: '100%',
            data: [30, 30, 30],
            zlevel: 1,
            barWidth: '10%',
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
        }, {
            name: '男',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f7734e'
                    }, {
                        offset: 1,
                        color: '#e12945'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '10%',
            data: [8, 15, 10]
        }, {
            name: '女',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#96d668'
                    }, {
                        offset: 1,
                        color: '#01babc'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: [8, 17, 26]
        }, {
            name: '111',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#1a98f8'
                    }, {
                        offset: 1,
                        color: '#7049f0'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: [8, 17, 26]
        }

    ]
};
myChart2.clear();
myChart2.setOption(option);

// ----
var myChart3 = echarts.init(document.getElementById('echarts_3'));

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
                    formatter: function(e) {
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
myChart3.clear();
myChart3.setOption(option);


var myChart4 = echarts.init(document.getElementById('echarts_4'));
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
    xAxis: [{
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
    }],
    yAxis: [{
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
    }, ],
    series: [{
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
    }]
};
myChart4.clear();
myChart4.setOption(option);




var myChart5 = echarts.init(document.getElementById('echarts_5'));
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
var convertData = function(data) {
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
        symbolSize: function(val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[0]
            }
        },
        data: tempData[1].map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });

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
        formatter: function(params) {
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
myChart5.clear();
myChart5.setOption(option);
window.addEventListener("resize", function() {
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart5.resize();
});