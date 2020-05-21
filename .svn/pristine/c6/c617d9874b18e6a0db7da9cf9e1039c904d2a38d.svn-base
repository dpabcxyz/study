// echarts example
// 1、重点路段在线统计
$(function () {
    var myChart = echarts.init(document.getElementById('test1'));
    option = {
        color: ['#195fdb'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: "{b}路段<br> 车辆数: {c}"
        },
        /*legend: {
            data: [date]
        },*/
        grid: {
            left: 20,
            right: 50,
            bottom: 20,
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            interval: 20,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#00f5fe',
                    fontWeight: '50'
                }
            },
            splitLine: {
                show: true,   // 网格线是否显示
                lineStyle: {
                    color: '#555'   // 修改网格线颜色
                }
            },
            name:'数量',
            nameTextStyle:{
                color:'#fff',
            }
        },
        yAxis: {
            type: 'category',
            data: ['赣州高速', '江西高速(S2)', 'S3', 'S4', 'S5', 'S6'],
            axisLabel: {
                show: true,
                interval: 0,
                rotate: 0,
                margin: 10,
                inside: false,
                textStyle: {
                    color: '#00f5fe',
                    fontWeight: '30'
                }
            },
            name:'路段',
            nameTextStyle:{
                color:'#fff',
            }
        },
        series: [{
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    // formatter: '{c}',
                    formatter: function(v) {
                        var val = v.data;
                        if (val == 0) {
                            return '';
                        }
                        return val;
                    },
                    color: '#fff'
                }
            },
            data: [22, 33, 44, 55, 66, 77],
            barWidth: '40%',
        }]
    };
    myChart.setOption(option);
})
// 2、今日进入集团高速车辆统计
$(function () {
    var myChart = echarts.init(document.getElementById('test2'));
    option = {
        backgroundColor: "rgba(255,255,255,0)",
        color: ["#195fdb", "#5939e6"],
        legend: {
            data: ['危险运输车', '客车'],
            left:'right',
            top:20,
            textStyle: {
                color: '#fff',
            }

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: 20,
            right: 60,
            bottom: 20,
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5','6', '7', '8','9', '10', '11', '12', '13','14', '15', '16','17', '18', '19','20','21', '22', '23'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                textStyle: {
                    color: '#00f5fe',
                    fontWeight: '50'
                }
            },

            name:'时刻',
            nameTextStyle:{
                color:'#fff',
            }
        }],
        yAxis: [{
            type: 'value',
            name:'数量',
            axisLabel: {
                textStyle: {
                    color: '#00f5fe',
                    fontWeight: '50'
                }
            },
            splitLine: {
                show: true,   // 网格线是否显示
                lineStyle: {
                    color: '#555'   // 修改网格线颜色
                }
            },
            nameTextStyle:{
                color:'#fff',
            }
        }],
        series: [{
            name: '客车',
            type: 'bar',
            stack: '总量',
            barWidth: '50%',
            data: [14, 10, 16, 7, 15, 9,14, 10, 16, 7, 15, 9,14, 10, 16, 7, 15, 9,14, 10, 16, 7, 15, 9]
        }, {
            name: '危险运输车',
            type: 'bar',
            stack: '总量',
            barWidth: '50%',
            data: [6, 10, 16, 7, 15, 9,14, 10, 16, 7, 15, 9,6, 10, 16, 7, 15, 9,7, 10, 16, 7, 15, 9]
        }
        ]
    };
    myChart.setOption(option);
})

// 3、今日各类事件百分比
$(function () {
    var myChart = echarts.init(document.getElementById('test3'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // color: ['#195fdb', '#8a00ec', '#ff00f3', '#fb0065', '#ff941b'],
        color: ['#fd9173', '#f36f8a', '#5f71d2', '#42a4eb', '#4ac7f5'],
        legend: {
            x: 16,
            y:20,
            data: ['超时报警','违法停车','疲劳驾驶','隧道滞留','凌晨行驶'],
            // formatter:function(name){
            //     var oa = option.series[0].data;
            //     var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
            //     for(var i = 0; i < option.series[0].data.length; i++){
            //         if(name==oa[i].name){
            //             return name + '     ' + oa[i].value + '     ' + (oa[i].value/num * 100).toFixed(2) + '%';
            //         }
            //     }
            // }
            orient: 'vertical',
            textStyle: {
                color: '#fff',
            }
        },
        grid: {
            left: 40,
            right: 60,
            bottom: 20,
            containLabel: true
        },
        series : [
            {
                name: '今日各类事件分析',
                type: 'pie',
                radius : '66%',
                center: ['60%', '61%'],
                data:[
                    {value:335, name:'超时报警'},
                    {value:310, name:'违法停车'},
                    {value:234, name:'疲劳驾驶'},
                    {value:135, name:'隧道滞留'},
                    {value:135, name:'凌晨行驶'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    normal: {
                        label:{
                            show: false,
//	                            position:'inside',
                            formatter: '{b} : {c} ({d}%)'
                        }
                    },
                    labelLine :{
                        show:false,
                        normal:{
                            length:5
                        }
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
})