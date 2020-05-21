$(function () {
    var myChart = echarts.init(document.getElementById('test1'));
    option = {
        backgroundColor: 'rgba(0,0,0,0)',
        // title: {
        //     text:'按类型统计车辆',
        //     textStyle: {
        //         color: 'white',
        //         fontSize: 18
        //     },
        //     top:8,
        //     left:12,
        // },
        legend: {
            top: 10,
            textStyle: {
                color: '#fff',
            },
            data: ['在线数', '上线数', '车辆总数']
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
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
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#363e83',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#363e83 ',
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
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
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data: ['班线客车', '旅游包车', '危险品运输车']
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
            data: ['班线客车', '旅游包车', '危险品运输车']
        },

        ],
        series: [ {
            name: '在线数',
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
                    barBorderRadius: 20,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '7%',
            data: [8, 15, 10]
        }, {
            name: '上线数',
            type: 'bar',
            barWidth: '7%',
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
                    barBorderRadius: 20,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: [8, 17, 26]
        }, {
            name: '车辆总数',
            type: 'bar',
            barWidth: '7%',
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
                    barBorderRadius: 20,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: [8, 17, 26]
        }

        ]
    };
    myChart.setOption(option);
});
$(function () {
    var myChart = echarts.init(document.getElementById('test2'));
    var giftImageUrl='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjAyLjcgMjAyLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwMi43IDIwMi41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjMuMyw1OS41YzAtMS44LTEuNS0zLjItMy40LTMuMkgxNy40Yy0xLjksMC0zLjQsMS40LTMuNCwzLjJ2NTVoMTA5LjNWNTkuNUwxMjMuMyw1OS41eiBNMTQ4LjQsMTIyLjMKCWMtNywwLTEyLjYsNS40LTEyLjYsMTJjMCw2LjYsNS42LDEyLDEyLjYsMTJzMTIuNi01LjQsMTIuNi0xMkMxNjEsMTI3LjYsMTU1LjQsMTIyLjMsMTQ4LjQsMTIyLjN6IE00Ny44LDEyMi4zCgljLTcsMC0xMi42LDUuNC0xMi42LDEyYzAsNi42LDUuNiwxMiwxMi42LDEyczEyLjYtNS40LDEyLjYtMTJDNjAuNCwxMjcuNiw1NC44LDEyMi4zLDQ3LjgsMTIyLjN6IE0zOS45LDExOS4ySDE0VjEzMQoJYzAsMS44LDEuNSwzLjIsMy40LDMuMmgxMi44QzMwLjIsMTI3LjcsMzQuMiwxMjIsMzkuOSwxMTkuMnogTTE4MC4zLDExMS4xbC0yMC45LTMyLjljLTEtMS41LTMuMi0yLjctNS4xLTIuN2gtMjIuNQoJYy0xLjksMC0zLjQsMS40LTMuNCwzLjJ2NDAuNkg1NS44YzUuNywyLjgsOS43LDguNSw5LjcsMTVoNjUuM2MwLTkuMyw3LjktMTYuOCwxNy42LTE2LjhTMTY2LDEyNSwxNjYsMTM0LjNoMTIuNgoJYzEuOSwwLDMuNC0xLjQsMy40LTMuMlYxMTdDMTgyLjEsMTE1LjMsMTgxLjMsMTEyLjYsMTgwLjMsMTExLjF6IE0xNjUuOSwxMDMuM2wtMjkuMi0zLjJjLTAuOS0wLjEtMS43LTAuOS0xLjctMS44VjgzLjQKCWMwLTAuOSwwLjgtMS42LDEuNy0xLjZoMTUuNGMxLDAsMi4xLDAuNiwyLjYsMS40bDEyLDE4LjhDMTY3LjIsMTAyLjgsMTY2LjgsMTAzLjMsMTY1LjksMTAzLjN6Ii8+Cjwvc3ZnPgo=';
    option = {
        backgroundColor: 'rgba(0,0,0,0)',
        // title: {
        //     text:'车辆类型占比',
        //     textStyle: {
        //         color: 'white',
        //         fontSize: 18
        //     },
        //     top:8,
        //     left:12
        // },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {d}% / {c}"
        },
        graphic: {
            elements: [{
                type: 'image',
                style: {
                    image: giftImageUrl,
                    width: 50,
                    height: 50
                },
                left: 'center',
                top: 'center'
            }]
        },
        legend: {
            orient: 'horizontal',
            icon: 'circle',
            bottom: 5,
            x: 'center',
            textStyle: {
                color: '#fff'
            },
            data: ['班车', '旅游车', '危险品车', '货车', '其他']
        },
        series: [{
            type: 'pie',
            radius: ['38%', '48%'],
            center: ['50%', '50%'],
            color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
            data: [{
                value: 335,
                name: '班车'
            },
                {
                    value: 310,
                    name: '旅游车'
                },
                {
                    value: 234,
                    name: '危险品车'
                },
                {
                    value: 235,
                    name: '货车'
                },
                {
                    value: 254,
                    name: '其他'
                }
            ],
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        color: '#363c88',
                        width: 1
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{c|{c}辆}\n{hr|}\n{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 12,
                            color: '#12EABE',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#363c88',
                            width: '100%',
                            borderWidth: 1,
                            height: 0
                        },
                        d: {
                            fontSize: 12,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 12,
                            color: 'rgba(255,255,2555,.7)',
                            align: 'center',
                            padding: 4
                        }
                    }
                }
            }
        }]
    };
    myChart.setOption(option);
});

$(function () {
    var myChart = echarts.init(document.getElementById('test3'));
    option = {
        series: [
            {
                name: ' 视频车辆占比',
                type: 'pie',
                radius: ['52%', '66%'],
                center: ['50%', '44%'],
                startAngle: 225,
                color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FEB692'
                }, {
                    offset: 1,
                    color: '#EA5455'
                }]), "transparent"],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 88,
                    name: '视频车辆占比',
                    label: {
                        normal: {
                            formatter: '占比',
                            textStyle: {
                                color: '#fff',
                                fontSize: 11

                            }
                        }
                    }
                }, {
                    value: 12,
                    name: '%',
                    label: {
                        normal: {
                            formatter: '\n88%',
                            textStyle: {
                                color: '#0ec4d0',
                                fontSize: 14

                            }
                        }
                    }
                }]
            },

        ]
    };
    myChart.setOption(option);
});
$(function () {
    var myChart = echarts.init(document.getElementById('test4'));
    option = {
        series: [
            {
                name: ' 报警车辆占比',
                type: 'pie',
                radius: ['52%', '66%'],
                center: ['50%', '44%'],
                startAngle: 225,
                color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#CE9FFC'
                }, {
                    offset: 1,
                    color: '#7367F0'
                }]), "transparent"],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 95,
                    name: '占比',
                    label: {
                        normal: {
                            formatter: '占比',
                            textStyle: {
                                color: '#fff',
                                fontSize: 11

                            }
                        }
                    }
                }, {
                    value: 5,
                    name: '%',
                    label: {
                        normal: {
                            formatter: '\n90%',
                            textStyle: {
                                color: '#0ec4d0',
                                fontSize: 14

                            }
                        }
                    }
                }]
            },

        ]
    };
    myChart.setOption(option);
});
$(function () {
    var myChart = echarts.init(document.getElementById('test5'));
    option = {
        series: [
            {
                name: ' 上线车辆占比',
                type: 'pie',
                radius: ['52%', '66%'],
                center: ['50%', '44%'],
                startAngle: 225,
                color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#5EFCE8'
                }, {
                    offset: 1,
                    color: '#736EFE'
                }]), "transparent"],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 90,
                    name: '上线车辆占比',
                    label: {
                        normal: {
                            formatter: '占比',
                            textStyle: {
                                color: '#fff',
                                fontSize: 11

                            }
                        }
                    }
                }, {
                    value: 10,
                    name: '%',
                    label: {
                        normal: {
                            formatter: '\n25%',
                            textStyle: {
                                color: '#0ec4d0',
                                fontSize: 14

                            }
                        }
                    }
                }]
            },

        ]
    };
    myChart.setOption(option);
});
$(function () {
    var myChart = echarts.init(document.getElementById('test6'));
    option = {
        series: [
            {
                name: ' 在线车辆占比',
                type: 'pie',
                radius: ['52%', '66%'],
                center: ['50%', '44%'],
                startAngle: 225,
                color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#43CBFF'
                }, {
                    offset: 1,
                    color: '#9708CC'
                }]), "transparent"],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 50,
                    name: '在线车辆占比',
                    label: {
                        normal: {
                            formatter: '占比',
                            textStyle: {
                                color: '#fff',
                                fontSize: 11

                            }
                        }
                    }
                }, {
                    value: 50,
                    name: '%',
                    label: {
                        normal: {
                            formatter: '\n50%',
                            textStyle: {
                                color: '#0ec4d0',
                                fontSize: 14

                            }
                        }
                    }
                }]
            },

        ]
    };
    myChart.setOption(option);
});
