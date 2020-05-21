var myChart1_1 = echarts.init(document.getElementById('test1_1'));
var option = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        show: false,
        max: 100
    },
    // grid: {
    // top: '95%',
    // left: '30%',
    // right: '30%',
    // },
    yAxis: {
        show: false,
        type: 'category',
        data: ['测试']
    },

    series: [{
            radius: '84%',
            splitNumber: 5,
            name: '业务指标',
            type: 'gauge',
            title: {
                show: true,
                color: '#8a00e1',
                fontSize: 14,
                offsetCenter: [0, '40%']
            },
            detail: {
                color: '#8a00e1',
                fontSize: 20,
                offsetCenter: [0, '70%']
            },
            data: [{ value: 60, name: '入网%' }],
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            max: '100',
            axisLine: {
                lineStyle: {
                    width: 12,
                    color: [
                        [0.5, '#8a00e1'],
                        [1, '#fff']
                    ]
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 14,
                distance: -14 // 数字和内圆的距离
            },
            pointer: { // 表盘上的指针
                show: true,
                length: '60%'
            },
            itemStyle: { // 表盘指针的颜色
                color: '#fff'
            }
        },
        {
            name: '2011年',
            type: 'bar',
            data: [0],
            barWidth: '30%',
            barMinHeight: '30%',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#ccc'
                }
            }
        },

        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "tooltip": {
                show: false
            },
            "radius": ['8%', '9%'],
            "z": 10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
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
                "name": '2',
                itemStyle: {
                    normal: {
                        color: "#ffdb6f"
                    }
                }
            }]
        },


        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['0%', '4%'],
            "tooltip": {
                show: false
            },
            "z": 10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 0,
                "name": '1',
                itemStyle: {
                    normal: {
                        color: "red"
                    }
                }
            }, {
                "value": 100,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: "#ffdb6f"
                    }
                }
            }]
        },
        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "tooltip": {
                show: false
            },
            "radius": ['4%', '8%'],
            "z": 10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 0,
                "name": '1',
                itemStyle: {
                    normal: {
                        color: "red"
                    }
                }
            }, {
                "value": 100,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: "#5f57e5"
                    }
                }
            }]
        },
    ]
}
myChart1_1.setOption(option);

// __________
var myChart1_2 = echarts.init(document.getElementById('test1_2'));
var option = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        show: false,
        max: 100
    },
    // grid: {
    // top: '95%',
    // left: '30%',
    // right: '30%',

    // },
    yAxis: {
        show: false,
        type: 'category',
        data: ['测试']
    },

    series: [{
            radius: '84%',
            splitNumber: 5,
            name: '业务指标',
            type: 'gauge',
            title: {
                show: true,
                color: '#f53f8c',
                fontSize: 14,
                offsetCenter: [0, '40%']
            },
            detail: {
                color: '#f53f8c',
                fontSize: 20,
                offsetCenter: [0, '70%']
            },
            data: [{ value: 60, name: '在线%' }],
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            max: '100',
            axisLine: {
                lineStyle: {
                    width: 12,
                    color: [
                        [0.5, '#f53f8c'],
                        [1, '#fff']
                    ]
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 14,
                distance: -14 // 数字和内圆的距离
            },
            pointer: { // 表盘上的指针
                show: true,
                length: '60%'
            },
            itemStyle: { // 表盘指针的颜色
                color: '#fff'
            }
        },
        {
            name: '2011年',
            type: 'bar',
            data: [0],
            barWidth: '30%',
            barMinHeight: '30%',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#ccc'
                }
            }
        },

        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "tooltip": {
                show: false
            },
            "radius": ['8%', '9%'],
            "z": 10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
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
                "name": '2',
                itemStyle: {
                    normal: {
                        color: "#ffdb6f"
                    }
                }
            }]
        },


        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['0%', '4%'],
            "tooltip": {
                show: false
            },
            "z": 10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 0,
                "name": '1',
                itemStyle: {
                    normal: {
                        color: "red"
                    }
                }
            }, {
                "value": 100,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: "#ffdb6f"
                    }
                }
            }]
        },
        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "tooltip": {
                show: false
            },
            "radius": ['4%', '8%'],
            "z": 10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 0,
                "name": '1',
                itemStyle: {
                    normal: {
                        color: "red"
                    }
                }
            }, {
                "value": 100,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: "#5f57e5"
                    }
                }
            }]
        },
    ]
}
myChart1_2.setOption(option);

// ______________
var myChart2 = echarts.init(document.getElementById('test2'));

var m2R2Data = [
    { value: 335, legendname: '危险品', name: "危险品  335", itemStyle: { color: "#8d7fec" } },
    { value: 310, legendname: '危险品', name: "危险品  310", itemStyle: { color: "#5085f2" } },
    { value: 234, legendname: '危险品', name: "危险品  234", itemStyle: { color: "#e75fc3" } },
    { value: 154, legendname: '公交车', name: "公交车  154", itemStyle: { color: "#f87be2" } },
    { value: 335, legendname: '出租车', name: "出租车  335", itemStyle: { color: "#f2719a" } },

];


option = {
    title: [
        // {
        // text: '标题',
        // textStyle: {
        // fontSize: 16,
        // color: "black"
        // },
        // left: "2%"
        // },    
        {
            text: '合计',
            subtext: 12312 + '辆',
            textStyle: {
                fontSize: 20,
                color: "#fff"
            },
            subtextStyle: {
                fontSize: 16,
                color: "#fff"
            },
            textAlign: "center",
            x: '34.5%',
            y: '40%',
        }
    ],
    tooltip: {
        trigger: 'item',
        formatter: function(parms) {
            var str = parms.seriesName + "</br>" +
                parms.marker + "" + parms.data.legendname + "</br>" +
                "数量：" + parms.data.value + "</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        left: '70%',
        align: 'left',
        top: 'middle',
        textStyle: {
            color: '#fff',
            fontSize: 13
        },
        height: 250
    },
    series: [{
        name: '标题',
        type: 'pie',
        center: ['35%', '50%'],
        radius: ['45%', '65%'],
        clockwise: false, //饼图的扇区是否是顺时针排布
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'outter',
                formatter: function(parms) {
                    return parms.data.legendname
                }
            }
        },
        labelLine: {
            normal: {
                length: 5,
                length2: 3,
                smooth: true,
            }
        },
        data: m2R2Data
    }]
};

myChart2.setOption(option);

    // _____________________
    var myChart3 = echarts.init(document.getElementById('test3'));
    var data = [110, 98, 100, 99, 80]
    var titlename = ['部门1', '部门2', '部门3', '部门4', '部门5'];
    var valdata = ['11.03亿', '9.06亿', '12.60亿', '10.85亿', '10.00亿']
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
    var option = {
        backgroundColor: 'rgba(255,255,255,0)',
        grid: {
            left: 20,
            right: 20,
            bottom: 0,
            top: 10,
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
                // rich: {
                //     lg: {
                //         backgroundColor: 'green',
                //         color: '#333',
                //         padding: 5,
                //         align: 'center',
                //         width: 15,
                //         height: 15,
                //     },
                // }
            },


        }, {
            show: true,
            inverse: true,
            data: valdata,
            axisLabel: {
                color: '#fff',
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
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: function(params) {
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
    myChart3.setOption(option);

// ----------------------
var myChart4 = echarts.init(document.getElementById('test4'));
// 获取新疆地区的json文件
var uploadedDataURL = "var uploadedDataURL = "http://localhost:8088/chenxuan/template/view/visual/2/public/js/data-1507863641060-Sy-whsTh-.json";
var uploadedDataURL = "http://148.70.172.56:8083/work/template/view/visual/2/public/js/data-1507863641060-Sy-whsTh-.json";

// 请求的方式获取
$.get(uploadedDataURL, function(as) {
    echarts.registerMap('xj', as);
    var geoCoordMap = {
        '巴音郭楞蒙古': [88.1653, 39.6002],
        '和田': [81.167, 36.9855],
        '哈密': [93.7793, 42.9236],
        '阿克苏': [82.9797, 41.0229],
        '阿勒泰': [88.2971, 47.0929],
        '喀什': [77.168, 37.8534],
        '塔城': [86.6272, 45.8514],
        '昌吉': [89.6814, 44.4507],
        '克孜勒苏柯尔克孜': [74.6301, 39.5233],
        '吐鲁番': [89.6375, 42.4127],
        '伊犁哈萨克': [82.5513, 43.5498],
        '博尔塔拉蒙古': [81.8481, 44.6979],
        '乌鲁木齐': [87.9236, 43.5883],
        '克拉玛依': [85.2869, 45.5054],
        '阿拉尔': [81.2769, 40.6549],
        '图木舒克': [79.1345, 39.8749],
        '五家渠': [87.5391, 44.3024],
        '石河子': [86.0229, 44.2914]
    };

    var data = [{
        name: '巴音郭楞蒙古',
        value: 15,
    }, {
        name: '和田',
        value: 5
    }, {
        name: '哈密',
        value: 10,
    }, {
        name: '阿克苏',
        value: 11
    }, {
        name: '阿勒泰',
        value: 15,
    }, {
        name: '喀什',
        value: 8
    }, {
        name: '塔城',
        value: 25,
    }, {
        name: '昌吉',
        value: 19
    }, {
        name: '克孜勒苏柯尔克孜',
        value: 4,
    }, {
        name: '吐鲁番',
        value: 10
    }, {
        name: '伊犁哈萨克',
        value: 8
    }, {
        name: '博尔塔拉蒙古',
        value: 0,
    }, {
        name: '乌鲁木齐',
        value: 15
    }, {
        name: '克拉玛依',
        value: 2
    }, {
        name: '阿拉尔',
        value: 1,
    }, {
        name: '图木舒克',
        value: 4
    }, {
        name: '五家渠',
        value: 0,
    }, {
        name: '石河子',
        value: 11
    }];

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        // 有数据的地区的名称和value值
        return res;
    };

    // 设定series是一个空的数组
    var series = [];
    [
        ['xj', data]
    ].forEach(function(item, i) {
        series.push({
            name: '定位点',
            type: 'effectScatter', // 散点图
            coordinateSystem: 'geo', // 使用地理坐标系
            legendHoverLink: 'true',
            rippleEffect: {
                period: 5,
                brushType: 'fill',
                scale: 3
            },
            data: convertData(item[1]),
            symbolSize: function(val) {
                return val[2]
            },
            itemStyle: {
                normal: {
                    color: '#ffed00',
                }
            },
            zlevel: 1,
        }, {
            type: 'map',
            map: 'xj',
            geoIndex: 0,
            roam: true,
            data: data
        });
    });

    option = {
        backgroundColor: 'rgba(0,0,0,0)',
        selectedMode: 'single',
        geo: {
            show: true,
            map: 'xj',
            // roam: 'move',
            zoom: 1.2,
            top: 70,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    areaColor: "#090a36",
                    borderColor: "#1647af",
                    borderWidth: 1.5,
                    color: "rgba(0,0,0,0)",
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 1
                },
                emphasis: {
                    areaColor: '#28b1ff',
                }
            },
        },
        series: series
    };
    myChart4.setOption(option);
    myChart4.on('click', function(params) {
        console.log(params);
    });

});

// ----------
var myChart5 = echarts.init(document.getElementById('test5'));
var option = {
    backgroundColor: 'rgba(0,0,0,0)',
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
        top: 20,
        containLabel: true
    },
    //         legend: {
    //        data: ['1', '2', '3'],
    //        right: 10,
    //        top:12,
    //        textStyle: {
    //            color: "#fff"
    //        },
    //        itemWidth: 12,
    //        itemHeight: 10,
    //    },
    xAxis: {
        type: 'category',
        data: ['第一师', '第二师', '第三师', '第四师', '第五师', '第六师', '第七师', '第八师', '第九师', '第十师', '第十一师', '第十二师', '第十三师', '第十四师', ],
        axisLine: {
            lineStyle: {
                color: '#3b92e8'

            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 15
        },
    },

    yAxis: {
        type: 'value',
        max: '1200',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#3b92e8'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(59,146,232,.3)'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 15
        }
    },
    "dataZoom": [{
        "show": true,
        "height": 12,
        "xAxisIndex": [
            0
        ],
        bottom: 10,
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
        name: '车辆',
        type: 'bar',
        barWidth: 18,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#01b0ff'
                }, {
                    offset: 1,
                    color: '#033cff'
                }]),
                barBorderRadius: 11,
            }
        },
        data: [400, 600, 700, 700, 1000, 400, 400, 600, 700, 900, 500, 600, 1000, 800]
    }]
};

var app = {
    currentIndex: -1,
};
setInterval(function() {
    var dataLen = option.series[0].data.length;

    // 取消之前高亮的图形
    myChart5.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    //console.log(app.currentIndex);
    // 高亮当前图形
    myChart5.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.currentIndex,
    });
    // 显示 tooltip
    myChart5.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
}, 1000);
myChart5.setOption(option);

//  ---------
var myChart6 = echarts.init(document.getElementById('test6'));
var myColor = ['#32ffcc', '#0096f3', '#f53f8c'];
option = {
    backgroundColor: 'rgba(0,0,0,0)',
    grid: {
        left: 56,
        top: 20,
        right: 30,
        bottom: -30,
        containLabel: true
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            color: '#fff',
        },
        data: ['疲劳驾驶', '超速报警', '禁行报警']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: '0',
            }
        },
        data: [10, 9, 8]
    }, {
        name: '工作地TOP 10',
        nameGap: '30',
        nameTextStyle: {
            color: '#ffffff',
            fontSize: '30',
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [6647, 7473, 8190],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 22,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        }
    ]
};
myChart6.setOption(option);

// -----------------------
var myChart7 = echarts.init(document.getElementById('test7'));
var option = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: 36,
        top: 20,
        containLabel: true
    },
    //         legend: {
    //        data: ['1', '2', '3'],
    //        right: 10,
    //        top:12,
    //        textStyle: {
    //            color: "#fff"
    //        },
    //        itemWidth: 12,
    //        itemHeight: 10,
    //    },
    xAxis: {
        type: 'category',
        data: ['2020-3-1', '2020-3-2', '2020-3-3', '2020-3-4', '2020-3-5', '2020-3-6', '2020-3-7', '2020-3-8', '2020-3-9', '2020-3-10', '2020-3-11', '2020-3-12', '2020-3-13', '2020-3-14'],
        axisLine: {
            lineStyle: {
                color: '#3b92e8'

            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
    },

    yAxis: {
        type: 'value',
        max: '1200',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#3b92e8'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(59,146,232,.3)'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 15
        }
    },
    "dataZoom": [{
        "show": true,
        "height": 12,
        "xAxisIndex": [
            0
        ],
        bottom: 16,
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
        name: '车辆',
        type: 'bar',
        barWidth: 12,
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
        data: [400, 600, 700, 700, 1000, 400, 400, 600, 700, 900, 500, 600, 1000, 800]
    }]
};

var app = {
    currentIndex: -1,
};
setInterval(function() {
    var dataLen = option.series[0].data.length;

    // 取消之前高亮的图形
    myChart7.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    //console.log(app.currentIndex);
    // 高亮当前图形
    myChart7.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.currentIndex,
    });
    // 显示 tooltip
    myChart7.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
}, 1000);
myChart7.setOption(option);
myChart7.setOption(option);


// ————————————————————————
var myChart8 = echarts.init(document.getElementById('test8'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        //     formatter: function(params){return Math.max(params.value,-params.value)}

        formatter: function(params) {
            return params[0].name +
                "<br>生产中：" + params[0].value +
                "<br>等待中：" + -params[1].value;
        }
    },
    legend: {
        data: ['入疆', '出疆'],
        top: 10,
        left: 20,
        textStyle: {
            color: "#fff",
            fontSize: 14
        }
    },
    grid: {
        top: 45,
        left: 10,
        right: 20,
        bottom: 0,
        containLabel: true
    },
    xAxis: [

        {
            type: 'value',
            show: false,
            // axisLine: {
            //     show:false,
            //     lineStyle: {
            //      color: '#3b92e8'

            //     }
            //   },
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 14
            },
            // splitLine: {
            // show: true,
            // lineStyle: {
            //     color: 'rgba(59,146,232,.3)'
            // }
            // },
        }
    ],
    yAxis: [{
            type: 'category',
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: '#3b92e8'

                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 14
            },
            data: ['3月01日', '3月03日', '3月05日', '3月07日', '3月09日', '3月11日', '3月13日']
        }

    ],
    series: [

        {
            name: '入疆',
            type: 'bar',
            barWidth: '10',
            barGap: '1%',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: '#6054ff',
                    barBorderRadius: 50,

                }
            },
            data: [400, 241, 360, 320, 302, 341, 374, 390, 450, 420]
        },
        {
            name: '出疆',
            type: 'bar',
            barWidth: '10',
            barGap: '1%',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    formatter: function(params) { return -params.value }
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: '#f53f8c',
                    barBorderRadius: 50,

                }
            },
            data: [-80, -90, -70, -70, -90, -68, -45, -100, -56, -90]
        }
    ]
};

myChart8.setOption(option);
window.addEventListener("resize", function() {
    myChart1_1.resize();
    myChart1_2.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart6.resize();
    myChart7.resize();
    myChart8.resize();
});