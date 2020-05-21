import echarts from 'echarts'
var echartsObj = {
    myChart1: function() {
        var myChart= echarts.init(document.getElementById('mycharts1'));
        var option= {
            backgroundColor: '#fff',
            grid: {
                top: '30',
                right: '10',
                left: '34',
                bottom: '20'
            },
            xAxis: [{
                type: 'category',
                color: '#59588D',
                data: ['2019Q1', '2019Q2', '2019Q3', '2019Q4'],
                axisLabel: {
                    color: '#333',
                    textStyle: {
                        fontSize: 12
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#333',
                    }
                },
                axisTick: {
                    show: false
                },
            }],
            yAxis: [{
                axisLabel: {
                    formatter: '{value}%',
                    color: '#333',
                    textStyle: {
                        fontSize: 12
                    },
                },
              
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: 'rgba(107,107,107,0.37)',
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#ddd',
                        type: 'dashed',
                    }
                },
            }],
            series: [{
                type: 'bar',
                data: [40, 80, 20, 16],
                barWidth: '20px',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#1a98f8'
                        }, {
                            offset: 1,
                            color: '#7049f0'
                        }]),
                        barBorderRadius: [4, 4, 0, 0]
                    },
                },
                label: {
                    normal: {
                        show: true,
                        fontSize: 16,
                        color: '#333',
                        position: 'top',
                    }
                }
            }]
        };
        myChart.setOption(option);
        return myChart;

    },
    myChart2:function(){
        var myChart= echarts.init(document.getElementById('mycharts2'));
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                color: ["#F58080", "#47D8BE", "#F9A589"],
                data: ['新报', '流失'],
                left: 'center',
                top: 0
            },
            grid: {
                top: 30,
                left: 5,
                right: 5,
                bottom: 0,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: [100, 200, 20, 30, 60, 89],
                axisLine: {
                    lineStyle: {
                        color: "#333"
                    }
                }
            },
            yAxis: {
                type: 'value',
    
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
            },
            series: [{
                    name: '新报',
                    type: 'line',
                    data: [800, 900, 220, 130, 660, 289],
                    color: "#F58080",
                    lineStyle: {
                        normal: {
                            width: 3,
                            color: {
                                type: 'linear',
    
                                colorStops: [{
                                    offset: 0,
                                    color: '#FFCAD4' // 0% 处的颜色
                                }, {
                                    offset: 0.4,
                                    color: '#F58080' // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#F58080' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(245,128,128, 0.5)',
                            shadowBlur: 10,
                            shadowOffsetY: 7
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F58080',
                            borderWidth: 10,
                            /*shadowColor: 'rgba(72,216,191, 0.3)',
                             shadowBlur: 100,*/
                            borderColor: "#F58080"
                        }
                    },
                    smooth: true
                },
                {
                    name: '流失',
                    type: 'line',
                    data: [123, 568, 111, 222, 123, 56],
                    lineStyle: {
                        normal: {
                            width: 3,
                            color: {
                                type: 'linear',
    
                                colorStops: [{
                                        offset: 0,
                                        color: '#AAF487' // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.4,
                                        color: '#47D8BE' // 100% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#47D8BE' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(71,216,190, 0.5)',
                            shadowBlur: 10,
                            shadowOffsetY: 7
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#AAF487',
                            borderWidth: 10,
                            /*shadowColor: 'rgba(72,216,191, 0.3)',
                             shadowBlur: 100,*/
                            borderColor: "#AAF487"
                        }
                    },
                    smooth: true
                }
            ]
        };
        myChart.setOption(option);
        return myChart;
    },
    myChart3:function(){
        var myChart= echarts.init(document.getElementById('mycharts3'));
        var xData = ['芝罘区','福山区','莱山区','牟平区','海阳市','莱阳市','蓬莱市','栖霞市','龙口市'];
        var y1Data = [5000,4975,5980,4831,2122,3018,3525,4729,3764];
        var y2Data = [18,5.4,6.9,3.9,7.7,5.1,8.1,5.4,6.9];
        var option = {
            grid: {
                left: 60,
                right: 40,
                top: 30,
                bottom: 20,
            },
            title: {
                show: false
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['监控数量', '监控密度'],
                right: 40,
                top: 0,
                itemWidth: 11,
                itemHeight: 11,
                textStyle: {
                    color: '#333',
                    fontSize: 12
                }
            },
            toolbox: {
                show: false,
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    show: true,
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: 12,
                        color: '#333',
                        margin: 8,
                        // formatter:function(val){
                        //     return val.split("").join("\n");
                        // }
                    },
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#333',//左边线的颜色
                            width:'1'//坐标线的宽度
                        }
                    },
                    data: xData
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: '',
                    axisLine: {
                        show: false
                    },
                    splitNumber : 4,
                    axisTick: {
                        show: true
                    },
                     splitLine: {
                            lineStyle: {
                                type: 'dashed',
                                color: '#DDD'
                            }
                        },
                    axisLabel: {
                        fontSize: 13,
                        color: '#333',
                        margin: 12,
                    },
                    max: 6600,
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                },
                {
                    type: 'value',
                    scale: true,
                    axisLine: {
                        show: false
                    },
                    splitNumber : 3,
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: 13,
                        color: '#333',
                        margin: 12,
                    },
                     splitLine: {
                            lineStyle: {
                                type: 'dashed',
                                color: '#DDD'
                            }
                        },
                    name: '',
                    max: 30,
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                },
        
            ],
            series: [
                {
                    name:'监控数量',
                    type:'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#1dacfe'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#4889fb" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#15b3ff" // 100% 处的颜色
                            }], false),
                            barBorderRadius: [4, 4, 0, 0]
                        }
                       
                    },
                    barWidth: 20,
                    yAxisIndex: 0,
                    data: y1Data
                },
                {
                    name:'监控密度',
                    yAxisIndex: 1,
                    color: '#ffd300',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#ffd300'
                            }
                        }
                    },
                    lineStyle: {
                        color: '#ffd300'
                    },
                    type:'line',
                    smooth: true,
                    data: y2Data
                }
            ]
        };
        myChart.setOption(option);
        return myChart;
    },
    myChart4:function(){
        var myChart= echarts.init(document.getElementById('mycharts4'));
        var data = [
            {
                name: '装备制造',
                value: 54
            }]
        var titleArr= [], seriesArr=[];
        var colors=[['#389af4', '#dfeaff']]
        data.forEach(function(item, index){
            titleArr.push(
                {
                    text:item.name,
                    left:'50%',
                    top: '55%',
                    textAlign: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: '16',
                        color: colors[index][0],
                        textAlign: 'center',
                    },
                }        
            );
            seriesArr.push(
                {
                    name: item.name,
                    type: 'pie',
                    clockWise: false,
                    radius: [60, 70],
                    itemStyle:  {
                        normal: {
                            color: colors[index][0],
                            shadowColor: colors[index][0],
                            shadowBlur: 0,
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        }
                    },
                    hoverAnimation: false,
                    center: ['50%', '50%'],
                    data: [{
                        value: item.value,
                        label: {
                            normal: {
                                formatter: function(params){
                                    return params.value+'%';
                                },
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '20',
                                    fontWeight: 'bold',
                                    color: colors[index][0]
                                }
                            }
                        },
                    }, {
                        value: 100-item.value,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: colors[index][1]
                            },
                            emphasis: {
                                color: colors[index][1]
                            }
                        }
                    }]
                }    
            )
        });
           
        var option = {
            backgroundColor: "#fff",
            title:titleArr,
            series: seriesArr
        }
        myChart.setOption(option);
        return myChart;
    },
    myChart5:function(){
        var myChart= echarts.init(document.getElementById('mycharts5'));
        var data = [
            {
                name: '现代材料',
                value: 80
            }]
        var titleArr= [], seriesArr=[];
        var colors=[['#ff8c37', '#ffdcc3']]
        data.forEach(function(item, index){
            titleArr.push(
                {
                    text:item.name,
                    left:'50%',
                    top: '55%',
                    textAlign: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: '16',
                        color: colors[index][0],
                        textAlign: 'center',
                    },
                }        
            );
            seriesArr.push(
                {
                    name: item.name,
                    type: 'pie',
                    clockWise: false,
                    radius: [60, 70],
                    itemStyle:  {
                        normal: {
                            color: colors[index][0],
                            shadowColor: colors[index][0],
                            shadowBlur: 0,
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        }
                    },
                    hoverAnimation: false,
                    center: ['50%', '50%'],
                    data: [{
                        value: item.value,
                        label: {
                            normal: {
                                formatter: function(params){
                                    return params.value+'%';
                                },
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '20',
                                    fontWeight: 'bold',
                                    color: colors[index][0]
                                }
                            }
                        },
                    }, {
                        value: 100-item.value,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: colors[index][1]
                            },
                            emphasis: {
                                color: colors[index][1]
                            }
                        }
                    }]
                }    
            )
        });
           
        var option = {
            backgroundColor: "#fff",
            title:titleArr,
            series: seriesArr
        }
        myChart.setOption(option);
        return myChart;
    },
    myChart6:function(){
        var myChart= echarts.init(document.getElementById('mycharts6'));
        var gzData = [12.6, 25.9, 9.0, 62.4, 28.7, 70.7, 45.6, 82.2, 48.7, 18.8, 26.0, 22.3];
        var bjData = [13.9, 15.9, 11.1, 18.27, 48.3, 69.2, 31.6, 46.6, 55.4, 28.4, 20.23, 10.7];
        var XData = ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"];
        var option = {
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
        myChart.setOption(option);
        return myChart;
    },
    myChart7:function(){
        var myChart= echarts.init(document.getElementById('mycharts7'));
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
        myChart.setOption(option);
        return myChart;
    },
    myChart8:function(){
        var myChart= echarts.init(document.getElementById('mycharts8'));
        var option = {
            backgroundColor: 'rgba(255,255,255,0)',
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: 14,
                right: 14,
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
        }, 5000);
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
            that.myChart6().resize();
            that.myChart7().resize();
            that.myChart8().resize();
            // myChart2.resize();
            // myChart3.resize();
        });
    }
}
export default {
    echartsObj
}