!function () {
    var myChart= echarts.init(document.getElementById('echarts_6'));
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
}();
+function(){
    var myChart = echarts.init(document.getElementById('echarts_1'));
    option = {
        series: [{
            "name": "仪表盘1",
            "type": "gauge",
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '82%'],
            radius: '85%',
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
            center: ['50%', '80%'],
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
            center: ['50%', '82%'],
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
            center: ['50%', '82%'],
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
}();
-function(){
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
            textStyle: {
                color: '#cddafd',
                fontSize: 14,
                rich: richStyle,
                width:80,
                height: 16,
            },
            padding: [30, 0, 30, 0],
            itemGap:40,
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
                        return name + '{style' + i + '|'+ (oa[i].value / total * 100).toFixed(2) + '%}';
                    }
                }
            },
        },

        ],
        series: [{
            name: '在线车辆占比',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['50%', '62%'],
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
}();
!function(){
    var myChart = echarts.init(document.getElementById('echarts_3'));

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}万吨 ({d}%)"
        },
        color: ['#2edfa3',  '#ff4777', '#00ffff', '#2b65c4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
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
                                return '' + e.name + '\n\n' + e.value + '(万吨)' + '('+e.percent + '%'+')';
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
}()  
!function () {
    var myChart = echarts.init(document.getElementById('echarts_4'));
    var fontColor = '#30eee9';
    option = {
    
        grid: {
            left: '4%',
            right: '2%',
            top: '15%',
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
            data: [ '浏览量']
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
}()      