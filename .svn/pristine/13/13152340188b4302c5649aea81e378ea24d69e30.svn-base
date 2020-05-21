import echarts from 'echarts'
var echartsObj = {
    myChart1:function(){
        var myChart= echarts.init(document.getElementById('mycharts1'));
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
                right: 50,
                bottom: 40,
                top: 80,
                containLabel: true
            },
            legend: {
                data: ['1', '2', '3'],
                right: 20,
                top: 8,
                textStyle: {
                    color: "#fff"
                },
                itemWidth: 12,
                itemHeight: 10,
                // itemGap: 35
            },
            xAxis: {
                name:'年份',
                type: 'category',
                data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                axisLine: {
                    lineStyle: {
                        color: '#4bbbf8'
                    }
                },
                axisLabel: {
                    // interval: 0,
                    // rotate: 40,
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                        color:'#fff'
                    }
                },
            },

            yAxis: {
                name:'万元',
                type: 'value',
                max: '1200',
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#06238c'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "#4bbbf8"
                    },
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 12
                },
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
                    data: [600, 600, 500, 500, 550, 600, 600, 600, 500]
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
                    data: [870, 760, 850, 840, 1140, 550, 560, 740, 840]
                }
            ]
        };

        var app = {
            currentIndex: -1,
        };
        setInterval(function() {
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
        myChart.setOption(option);
        return myChart;
    },
   
    myChart2:function(){
        var myChart= echarts.init(document.getElementById('mycharts2'));
        var lightBlue = {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'rgba(0, 192, 255, 1)' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'rgba(0, 192, 255, 0.1)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        }
        var darkBlue = {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'rgba(41, 121, 255, 1)' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'rgba(41, 121, 255, 0.1)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        }
        
        function randomData() {
            var value = Math.random() * 50;
            return {
                value: Math.round(value)
            }
        }
        // 时间设置
        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        
        function timeSet() {
            var newTime = new Date();
            var m = newTime.getMinutes();
            var s = newTime.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            return [m, s].join(':');
        }
        
        var data = [];
        var timeData = [];
        
        for (var i = 0; i < 9; i++) {
            timeData.unshift(timeSet());
            data.unshift(randomData());
        }
        // 指定图表的配置项和数据
        var option = {
            backgroundColor: 'rgba(255,255,255,0)',
            tooltip: {
                show: false
            },
            grid: {
                left: 30,
                right: 30,
                bottom: 30,
                top: 80,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                // boundaryGap: 100,
                min: -1,
                max: 9,
                axisLine: {
                    lineStyle: {
                        color: '#4bbbf8',
                        shadowColor: 'rgba(75, 211, 255, 0.5)',
                        shadowBlur: 5
                    }
                },
                axisTick: {
                    interval: (index) => {
                        if (index === -1 || index === 9) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 12
                },
                splitLine: {
                    show: false
                },
                data: timeData,
        
            },
            yAxis: [{
                max: 50,
                min: 0,
                axisLine: {
                    lineStyle: {
                        color: '#4bbbf8',
                        shadowColor: 'rgba(75, 211, 255, 0.5)',
                        shadowBlur: 5
                    }
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 12
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(75, 211, 255, 0.2)',
                        type: 'dashed'
                    }
                }
            }],
            series: [{
                name: '数量',
                type: 'pictorialBar',
                barCategoryGap: '-60%',
                symbol: 'path://d="M150 0 L75 200 L225 200 Z"',
                label: {
                    show: true,
                    position: 'top',
                    color: '#1798ff',
                    fontSize: 14
                },
                itemStyle: {
        
                    color: function(params) {
                        return params.dataIndex % 2 ? darkBlue : lightBlue;
                    }
                },
                data: data
            }],
        };
        
        myChart.setOption(option);
        var key = 0;
        setInterval(function() {
            timeData.shift();
            timeData.push(timeSet());
            data.shift();
            data.push(randomData());
        
            // 颜色控制
            key = (key === 1) ? 0 : 1;
        
            myChart.setOption({
                xAxis: {
                    data: timeData
                },
                series: [{
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                return (params.dataIndex + key) % 2 ? darkBlue : lightBlue;
                            }
                        }
                    },
                    data: data
                }]
            });
        }, 2000);
        myChart.setOption(option);
        return myChart;
    },
    myChart3:function(){
        var myChart= echarts.init(document.getElementById('mycharts3'));
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
        var option = {
                title: [{
                    text: '合计',
                    subtext: 12312 + '个',
                    textStyle: {
                        fontSize: 14,
                        color: "#fff"
                    },
                    subtextStyle: {
                        fontSize: 14,
                        color: '#fff'
                    },
                    textAlign: "center",
                    x: '50%',
                    y: '55%',
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
                    // orient: 'vertical',
                    right: 12,
                    left: 16,
                    top: 50,
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,
                    },
                    height: 250
                },
                series: [{
                    name: '标题',
                    type: 'pie',
                    center: ['50%', '60%'],
                    radius: ['35%', '56%'],
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
        myChart.setOption(option);
        return myChart;
    },
    myChart4:function(){
        var myChart= echarts.init(document.getElementById('mycharts4'));
        var data = [110, 98, 100, 99, 80, 110, 98, 88]
        var titlename = ['部门1', '部门2', '部门3', '部门4', '部门5', '部门6', '部门7', '部门8'];
        var valdata = ['11.03亿', '9.06亿', '12.60亿', '10.85亿', '10.00亿', '9.89亿', '7.34亿', '8.8亿']
        var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
        var option = {
            backgroundColor: 'rgba(255,255,255,0)',
            grid: {
                left: 20,
                right: 20,
                bottom: 0,
                top: 50,
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
        myChart.setOption(option);
        return myChart;
    },
    myChart5: function() {
        var myChart= echarts.init(document.getElementById('mycharts5'));
        var charts = {
            unit: 'Kbps',
            names: ['出口', '入口'],
            lineX: ['2018-11-12', '2018-11-13', '2018-11-14', '2018-11-15', '2018-11-16', '2018-11-17', '2018-11-18', '2018-11-19', '2018-11-20', '2018-11-21', '2018-11-22', '2018-11-23', '2018-11-24', '2018-11-25', '2018-11-26', '2018-11-27', '2018-11-28', '2018-11-29', '2018-11-30', '2018-11-31'],
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
                backgroundColor: 'rgba(255,255,255,0)',
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: charts.names,
                    textStyle: {
                        fontSize: 12,
                        color: 'rgb(0,253,255,0.6)'
                    },
                    top: 20,
                    right: 50
                },
                grid: {
                    left: 24,
                    right: 54,
                    bottom: 20,
                    top: 80,
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: charts.lineX,
                    axisLine: {
                        lineStyle: {
                            color: "#4bbbf8"
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        },
                    },
                },
                yAxis: {
                    name: charts.unit,
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#06238c ',
                            type: 'dotted'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#4bbbf8 ',
                        }
                    }
                },
                series: lineY
            }
        setInterval(function() {
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
        myChart.setOption(option);
        return myChart;

    },
  
   
    resize: function() {
        var that = this;
        window.addEventListener("resize", function() {
            that.myChart1().resize();
            that.myChart2().resize();
            that.myChart3().resize();
            that.myChart4().resize();
            that.myChart5().resize();
        });
    }
}
export default {
    echartsObj
}