var myChart1 = echarts.init(document.getElementById('chartsBlock1'));
option = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: 24,
        right: 24,
        top: 24,
        bottom: 24,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-05', '2019-04'],
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        }
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 4,
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333"
            },
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
            name: '课时1',
            type: 'line',
            symbol: 'circle',
            symbolSize: 20,
            data: [23, 60, 20, 36, 23, 78, 30, 95],
            itemStyle: {
                normal: {
                    color: '#784ce9',
                    lineStyle: {
                        color: "#784ce9",
                        width: 4,
                        shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
                        shadowBlur: 15,
                        shadowOffsetY: 20,
                    },
                    borderWidth: 4,
                    borderColor: "#fff"
                }
            },
            smooth: true
        },
        {
            name: '课时2',
            type: 'line',
            symbol: 'circle',
            symbolSize: 20,
            data: [93, 20, 50, 46, 90, 65, 80, 30],
            itemStyle: {
                normal: {
                    color: '#de5e44',
                    lineStyle: {
                        color: "#de5e44",
                        width: 4,
                        shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
                        shadowBlur: 15,
                        shadowOffsetY: 20,
                    },
                    borderWidth: 4,
                    borderColor: "#fff"
                }
            },
            smooth: true
        }
    ]
};
myChart1.setOption(option);
// ------------------------
var myChart2 = echarts.init(document.getElementById('chartsBlock2'));
var colorList = [
    [
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
        '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ],
    [
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ],
    [
        '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
        '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
        '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
        '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
    ]
][2];

option = {
    // 图表标题
    title: {
        show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc', // 标题边框颜色
        borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
        padding: 5, // 标题内边距，单位px，默认各方向内边距为5，
        // 接受数组分别设定上右下左边距，同css
        itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
        textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#333' // 主标题文字颜色
        },
        subtextStyle: {
            color: '#aaa' // 副标题文字颜色
        }
    },
    backgroundColor: 'rgba(255,255,255,0)',
    tooltip: {},
    animationDurationUpdate: function(idx) {
        // 越往后的数据延迟越大
        return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 140,
            edgeLength: 10
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: [{
            "name": "VUE",
            "value": 2289,
            "symbolSize": 67,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[2],
                    "color": colorList[2]
                }
            }
        }, {
            "name": "JavaScript",
            "value": 2518,
            "symbolSize": 50,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[3],
                    "color": colorList[3]
                }
            }
        }, {
            "name": "加班挣钱娶媳妇",
            "value": 926,
            "symbolSize": 70,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[6],
                    "color": colorList[6]
                }
            }
        }, {
            "name": "别让快递小哥一直等在寒风中",
            "value": 4536,
            "symbolSize": 67,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[7],
                    "color": colorList[7]
                }
            }
        }, {
            "name": "女儿写给战疫一线爸爸的信",
            "value": 493,
            "symbolSize": 82,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[9],
                    "color": colorList[9]
                }
            }
        }, {
            "name": "抗击新型肺炎第一线",
            "value": 8694000,
            "symbolSize": 134,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[12],
                    "color": colorList[12]
                }
            }
        }, {
            "name": "战疫一线的别样团圆",
            "value": 339,
            "symbolSize": 68,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[14],
                    "color": colorList[14]
                }
            }
        }, {
            "name": "元宵节亮灯为武汉加油",
            "value": 27000,
            "symbolSize": 114,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[16],
                    "color": colorList[16]
                }
            }
        }, {
            "name": "抗击新型肺炎我们在行动",
            "value": 10777000,
            "symbolSize": 130,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[17],
                    "color": colorList[17]
                }
            }
        }, {
            "name": "疫情中的逆行者",
            "value": 92000,
            "symbolSize": 123,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[18],
                    "color": colorList[18]
                }
            }
        }, {
            "name": "COVID-19",
            "value": 4000,
            "symbolSize": 120,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[19],
                    "color": colorList[19]
                }
            },
            "url": "https://gallery.echartsjs.com/preview.html?c=xPLngHx_Z&v=1"
        }]
    }]
}
myChart2.setOption(option);
// -------------------------
var myChart3 = echarts.init(document.getElementById('chartsBlock3'));
var m2R2Data = [
    { value: 335, legendname: '项目01', name: "项目01  335", itemStyle: { color: "#8d7fec" } },
    { value: 310, legendname: '项目02', name: "项目02  310", itemStyle: { color: "#5085f2" } },
    { value: 234, legendname: '项目03', name: "项目03  234", itemStyle: { color: "#e75fc3" } },
    { value: 154, legendname: '项目04', name: "项目04  154", itemStyle: { color: "#f87be2" } },
    { value: 335, legendname: '项目05', name: "项目05  335", itemStyle: { color: "#f2719a" } },
    { value: 335, legendname: '项目06', name: "项目06  335", itemStyle: { color: "#fca4bb" } },
    { value: 335, legendname: '项目07', name: "项目07  335", itemStyle: { color: "#f59a8f" } },
    { value: 335, legendname: '项目08', name: "项目08  335", itemStyle: { color: "#fdb301" } },
    { value: 335, legendname: '项目09', name: "项目09  335", itemStyle: { color: "#57e7ec" } },
    { value: 335, legendname: '项目10', name: "项目10  335", itemStyle: { color: "#cf9ef1" } },
];

option = {
    title: [{
        text: '合计',
        subtext: 12312 + '个',
        textStyle: {
            fontSize: 14,
            color: "black"
        },
        subtextStyle: {
            fontSize: 14,
            color: 'black'
        },
        textAlign: "center",
        x: '37%',
        y: '38%',
    }],
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
        orient: 'vertical',
        right: 12,
        align: 'left',
        top: 40,
        textStyle: {
            color: '#8C8C8C',
            fontSize: 12,
        },
        height: 250
    },
    series: [{
        name: '标题',
        type: 'pie',
        center: ['38%', '45%'],
        radius: ['25%', '46%'],
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
            show: false,
            normal: {
                length: 5,
                length2: 3,
                smooth: false,
            }
        },
        data: m2R2Data
    }]
};
myChart3.setOption(option);
// -------------------------
var myChart4 = echarts.init(document.getElementById('chartsBlock4'));
var option = {
    backgroundColor: 'rgba(255,255,255,0)',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: 20,
        right: 20,
        bottom: 40,
        top: 40,
        containLabel: true
    },
    legend: {
        data: ['1', '2', '3'],
        right: 20,
        top: 8,
        textStyle: {
            color: "#333"
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
                color: '#333'
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
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333"
            },
        },
        axisLabel: {}
    },
    "dataZoom": [{
        "show": true,
        "height": 12,
        "xAxisIndex": [
            0
        ],
        bottom: 14,
        "start": 10,
        "end": 90,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",

        },
        textStyle: {
            color: "#333"
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
            barWidth: '12%',
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
            data: [500, 500, 400, 400, 400, 500, 500, 500, 400]
        },
        {
            name: '2',
            type: 'bar',
            barWidth: '12%',
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
            data: [500, 600, 600, 600, 600, 500, 500, 600, 600]
        },
        {
            name: '3',
            type: 'bar',
            barWidth: '12%',
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
            data: [500, 700, 800, 800, 1100, 500, 500, 700, 800]
        }
    ]
};

var app = {
    currentIndex: -1,
};
setInterval(function() {
    var dataLen = option.series[0].data.length;

    // 取消之前高亮的图形
    myChart4.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    //console.log(app.currentIndex);
    // 高亮当前图形
    myChart4.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.currentIndex,
    });
    // 显示 tooltip
    myChart4.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });


}, 1000);
myChart4.setOption(option);
// -----
var myChart5 = echarts.init(document.getElementById('chartsBlock5'));
var gzData = [12.6, 25.9, 9.0, 62.4, 28.7, 70.7, 45.6, 82.2, 48.7, 18.8, 26.0, 22.3];
var bjData = [13.9, 15.9, 11.1, 18.27, 48.3, 69.2, 31.6, 46.6, 55.4, 28.4, 20.23, 10.7];
var XData = ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"];
option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0)',
        textStyle: {
            color: '#000'
        },
        formatter: function(value) {
            var a0 = value[0] ? value[0].seriesName : '';
            var a1 = value[1] ? value[1].seriesName : '';
            var c0 = value[0] ? parseFloat(value[0].data) : '';
            var c1 = value[1] ? parseFloat(value[1].data) : '';
            var sum = c0 + c1;
            if (c0 != '' && c1 != '') {
                sum = sum.toFixed(2); //保留两位小数 
            }
            var b = value[0] ? value[0].name : '';
            var atext = '';
            var btext = '';
            if (c0 != '') {
                atext = '<span style="color: #BDBEC3">' + a0 + '&nbsp;&nbsp;&nbsp;</span><span style="font-size:20px;color: #0a080b"><strong>' + c0 + '</strong></span><span style="color: #0a080b">次&nbsp;&nbsp;&nbsp;</span><span style="color: red">2.85%</span><span class="test1" >&#9650<style>\n' +
                    '.test1{color:red }\n' +
                    '</style></span></br>';
            };
            if (c1 != '') {
                btext = '<span style="color: #BDBEC3">' + a1 + '&nbsp;&nbsp;&nbsp;</span><span style="font-size:20px;color: #0a080b"><strong>' + c1 + '</strong></span><span style="color: #0a080b">次&nbsp;&nbsp;&nbsp;</span><span style="color: #00a854">2.85%</span><span class="test2" >&#9660<style>\n' +
                    '.test2{color:green }\n' +
                    '</style></span></br>';
            };
            return '<span style="color: #0a080b">全部&nbsp;&nbsp;&nbsp;<span style="font-size:20px;color: #0a080b"><strong>' + sum + '</strong></span><span style="color: #0a080b">次&nbsp;&nbsp;&nbsp;</span><span style="color: red">2.85%</span><span class="test" >&#9650<style>\n' +
                '.test{color:red }\n' +
                '</style></span></br>' +
                atext + ' ' + btext +
                '<span style="color: #0a080b">' + b + '</span>';
        }

    },
    legend: {
        icon: 'roundRect',
        right: 10
    },
    grid: {
        left: 20,
        right: 60,
        top: 50,
        bottom: 20,
        containLabel: true
    },
    xAxis: [{
        name: '时间',
        type: 'category',
        axisPointer: {
            type: "shadow",
            shadowStyle: {
                color: "blue",
                opacity: 0.05

            }
        },
        boundaryGap: false,
        data: XData
    }],
    yAxis: [{
        name: '(次)',
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333"
            },
        },
    }],
    series: [{
            id: 'y0',
            name: '故障',
            type: 'line',
            smooth: true,
            color: "orange",
            symbol: 'circle',
            areaStyle: {
                opacity: 0.3,
                color: {
                    type: "linear",
                    x: 1,
                    y: 0,
                    x: 1,
                    y2: 1,
                    colorStops: [{
                            "offset": 0,
                            "color": "orange" //0% 处的颜色
                        },
                        {
                            "offset": 1,
                            "color": "white" // 100% 处的颜色
                        }
                    ],
                    "globalCoord": false // 缺省为 false
                }
            },
            data: gzData
        },
        {
            id: 'y1',
            name: '报警',
            type: 'line',
            smooth: true,
            color: "red",
            // hoverAnimation:true,
            symbol: 'circle',
            areaStyle: {
                opacity: 0.3,
                color: {
                    type: "linear",
                    x: 1,
                    y: 0,
                    x: 1,
                    y2: 1,
                    colorStops: [{
                            "offset": 0,
                            "color": "red"
                        },
                        {
                            "offset": 1,
                            "color": "white"
                        }
                    ],
                    "globalCoord": false
                }
            },
            data: bjData
        },
        {
            name: '报警',
            type: 'effectScatter',
            coordinateSystem: 'cartesian2d',
            data: bjData, //2d坐标系
            symbol: 'circle',
            symbolSize: 10,
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            itemStyle: {
                normal: {
                    color: 'red',
                    borderColor: 'white'
                }
            },
            zlevel: 1,
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255,255,255,0)',
                textStyle: {
                    color: '#000'
                },
                formatter: '<span style="font-size:20px;color: #0a080b"><strong>{c0}</strong></span><span style="color: #0a080b">次&nbsp;&nbsp;&nbsp;</span><span style="color: green">2.85%</span><span class="test1" >&#9660<style>\n' +
                    '.test1{color:green }\n' +
                    '</style></span></br>' +
                    '<span style="color: #0a080b">{b0}</span>'
            }
        },
        {
            name: '故障',
            type: 'effectScatter',
            coordinateSystem: 'cartesian2d',
            data: gzData, //2d坐标系
            symbolSize: 10,
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            itemStyle: {
                normal: {
                    color: 'orange',
                    borderColor: 'white'
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(255,255,255,0)',
                textStyle: {
                    color: '#000'
                },
                formatter: '<span style="font-size:20px;color: #0a080b"><strong>{c0}</strong></span><span style="color: #0a080b">次&nbsp;&nbsp;&nbsp;</span><span style="color: red">2.85%</span><span class="test1" >&#9650<style>\n' +
                    '.test1{color:red }\n' +
                    '</style></span></br>' +
                    '<span style="color: #0a080b">{b0}</span>'

            },
            zlevel: 1
        }
    ]
};
myChart5.setOption(option);
// -----
var myChart6 = echarts.init(document.getElementById('chartsBlock6'));
var data = [110, 98, 100, 99, 80, 110, 98, 88]
var titlename = ['部门1', '部门2', '部门3', '部门4', '部门5', '部门6', '部门7', '部门8'];
var valdata = ['11.03亿', '9.06亿', '12.60亿', '10.85亿', '10.00亿', '9.89亿', '7.34亿', '8.8亿']
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
option = {
    backgroundColor: 'rgba(255,255,255,0)',
    grid: {
        left: 20,
        right: 20,
        bottom: 0,
        top: 0,
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
            color: '#333',
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
myChart6.setOption(option);
// 自适应
window.addEventListener("resize", function() {
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart6.resize();
});