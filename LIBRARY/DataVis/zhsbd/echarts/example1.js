
$(function () {
    var myChart_2 = echarts.init(document.getElementById('test2'));
    var myColor = [ '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3'];
    option2 = {
        backgroundColor: 'rgba(0,0,0,0)',
        grid: {
            left: '2%',
            top: '0%',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        tooltip: {
            show: true,
            formatter: function(params, ticket, callback){
                // console.log(params.seriesId);
                if(params.seriesId=='chenxuan'){
                    console.log(params.name);
                    return params.name+':'+params.data+"%"
                }
                // console.log(ticket.id);
            },
            textStyle: {
                color: "#fff",
                fontWeight: 'normal',
            }
        },
        yAxis: [{
            splitLine:{show: false},
            axisLine: {
                show: true,
                lineStyle:{
                    color:'#204161',
                }
            },

        }],
        xAxis: [{
            axisTick: 'none',
            offset: '27',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                }
            },
            axisLine: {
                show: true,
                lineStyle:{
                    color:'#204161',
                }
            },

            data: ['终端名称1', '终端名称2', '终端名称3', '终端名称4', '终端名称5', '终端名称6', '终端名称']
        }, {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                textStyle: {
                    show:false,
                    color: 'rgba(0,0,0,0)',
                    fontSize: '12',
                }
            },
            data: ['12567', '12566', '12566', '12566', '12566', '12566', '12566']
        },
            {
            name: '单位：件',
            nameGap: '50',
            nameTextStyle: {
                color: '#ffffff',
                fontSize: '12',
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
            id:'chenxuan',
            xAxisIndex: 0,
            data: [52, 60, 22, 33, 44, 100, 59],
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    formatter: function(param) {
                        return param.value + '%';
                    },
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '12',
                    }
                }
            },
            barWidth: 6,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '-100%',
            data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            xAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100, 100, 100],
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 2,
                }
            },
            z: 0
        }
            // {
            //     name: '外圆',
            //     type: 'scatter',
            //     hoverAnimation: false,
            //     data: [4, 4, 4, 4, 4, 4, 4],
            //     xAxisIndex: 2,
            //     symbolSize: 22,
            //     itemStyle: {
            //         normal: {
            //             color: function(params) {
            //                 var num = myColor.length;
            //                 return myColor[params.dataIndex % num]
            //             },
            //             opacity: 1,
            //         }
            //     },
            //     z: 2
            // }
        ]
    };
    myChart_2.setOption(option2);
})
$(function () {
    var myChart_5 = echarts.init(document.getElementById('test5'));
    option = {
        title: {
            text: '车辆在线率',
            textStyle:{
                color:'#fff',
                //字体大小
                fontSize:12,
            },
            x:'center',
            top:'76%'
        },
        "gird": {},
        "series": [
            {
            "type": "gauge",
            "center": ["50%", "50%"],
            "radius": "75%",
            "data": [{
                "value": 67,
                "oldValue": 2012459,
            }],
            "splitNumber": 1,
            "axisTick": {
                "show": false
            },
            "splitLine": {
                "show": false
            },
            "axisLabel": {
                "show": false,
            },
            "axisLine": {
                "lineStyle": {
                    color: [
                        [0.67, '#09abe9'],
                        [1, 'white']
                    ],
                    width: 14
                }
            },
            "detail": {
                formatter: function(value) {
                    return value.toFixed(1) + "%";
                },
                textStyle: {
                    fontSize: 14
                }

            },
        }],
    }
    myChart_5.setOption(option);
})


function add(){
    var windowHeight=$(window).height();
    if(windowHeight<=720){
        return 9;
    }
    else if(windowHeight>720&&windowHeight<=780){
        return 10;
    }
    else if(windowHeight>780&&windowHeight<=840){
        return 11;
    }
    else if(windowHeight>840&&windowHeight<=900){
        return 12;
    }
    else if(windowHeight>900&&windowHeight<=960){
        return 13;
    }
    else if(windowHeight>960&&windowHeight<=1010){
        return 14;
    }
    else if(windowHeight>1010&&windowHeight<=1060){
        return 15;
    }
    else if(windowHeight>1060&&windowHeight<=1110){
        return 16;
    }
    else if(windowHeight>1110&&windowHeight<=1160){
        return 17;
    }
    else if(windowHeight>1160&&windowHeight<=1210){
        return 18;
    }
    else if(windowHeight>1210){
        return 19;
    }
}
$(function () {
    var myChart_3 = echarts.init(document.getElementById('test3'));
    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        }
    };
    var placeHolderStyle = {
        normal: {
            color: 'rgba(0,0,0,0)',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };

    var data = [{
        "value": 100,
        "name": "中亚"
    }, {
        "value": 80,
        "name": "东盟"
    }, {
        "value": 75,
        "name": "南亚"
    }, {
        "value": 71.4,
        "name": "独联体"
    }, {
        "value": 64.7,
        "name": "中东"
    }, {
        "value": 57.1,
        "name": "其他国家"
    }, {
        "value": 50,
        "name": "中东欧"
    }];

    var init_num = 5;
    var new_data = [];
    var data_name = [];
    for (var m in data) {
        var arr = null;
        arr = {
            name: data[m]['name'],
            type: 'pie',
            clockWise: false,
            radius: [init_num, init_num = init_num + add()],
            center: ['62%', '50%'],
            itemStyle: dataStyle,
            textStyle: {
                fontFamily: "微软雅黑",
                fontSize: '12px',
                color: "#fff",
                fontWeight: 'normal',
            },
            data: [{
                value: data[m]['value'],
                name: data[m]['name'] + ' ' + data[m]['value'] + '%'
            },
                {
                    value: 100 - data[m]['value'],
                    name: 'invisible',
                    itemStyle: placeHolderStyle,
                    textStyle: {
                        fontFamily: "微软雅黑",
                        fontSize: '12px',
                        color: "#fff",
                        fontWeight: 'normal',
                    }
                }
            ]
        }
        new_data.push(arr)
        data_name.unshift(data[m]['name'] + ' ' + data[m]['value'] + '%')
    }

    option = {
        backgroundColor: "rgba(0,0,0,0)",
        title: {
            left: '50%',
            top:'50',
            textAlign: 'center',
            textStyle: {
                color: "#fff",
                fontWeight: 'normal',
            }
        },
        tooltip: {
            show: true,
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            textStyle: {
                color: "#fff",
                fontWeight: 'normal',
            }
        },
        legend: {
            orient: 'vertical',
            left:'2%',
            top: 0,
            itemGap: 2,
            data: data_name,
            textStyle: {
                fontSize: '12px',
                color: "#fff",
                fontWeight: 'normal',
            }
        },
        // toolbox: {
        //     show: true,
        //     feature: {
        //         mark: {
        //             show: true
        //         },
        //         dataView: {
        //             show: true,
        //             readOnly: false
        //         },
        //         restore: {
        //             show: true
        //         },
        //         saveAsImage: {
        //             show: true
        //         }
        //     },
        //     textStyle: {
        //         fontFamily: "微软雅黑",
        //         fontSize: '12px',
        //         color: "#fff",
        //         fontWeight: 'normal',
        //     }
        // },
        series: new_data
    };
    myChart_3.setOption(option);
});
