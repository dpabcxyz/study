
$(function () {
    var myChart_2 = echarts.init(document.getElementById('test2'));
    option2 = {
        "series": [
            {
                "center": [
                    "25.0%",
                    "48%"
                ],
                "radius": [
                    "58%",
                    "58%"
                ],
                "clockWise": false,
                "hoverAnimation": false,
                "type": "pie",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "textStyle": {
                                "fontSize": 12,
                            },
                            "position": "center"
                        },
                        "labelLine": {
                            "show": false
                        },
                        "color": "white",
                        "borderColor": "#0081ff",
                        "borderWidth": 14,
                         borderRadius: 2,
                    },
                },
                "data": [
                    {
                        "value": 52.7,
                        "name": "本月上线率52.7%"
                    },
                    {
                        "name": " ",
                        "value": 80.3,
                        "itemStyle": {
                            "normal": {
                                "label": {
                                    "show": false
                                },
                                "labelLine": {
                                    "show": false
                                },
                                "borderColor": "#0081ff",
                                "borderWidth": 2
                            }
                        }
                    }
                ]
            },
            {
                "center": [
                    "76.0%",
                    "48%"
                ],
                "radius": [
                    "58%",
                    "58%"
                ],
                "clockWise": false,
                "hoverAnimation": false,
                "type": "pie",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "textStyle": {
                                "fontSize": 12,
                                "fontWeight": "bold"
                            },
                            "position": "center"
                        },
                        "labelLine": {
                            "show": false
                        },
                        "color": "white",
                        "borderColor": "#4b1dde",
                        "borderWidth": 14
                    },
                },
                "data": [
                    {
                        "value":10,
                        "name": "实时上线率90.3%"
                    },
                    {
                        "name": " ",
                        "value": 90,
                        "itemStyle": {
                            "normal": {
                                "label": {
                                    "show": false
                                },
                                "labelLine": {
                                    "show": false
                                },
                                "borderColor": "#4b1dde",
                                "borderWidth": 5
                            },
                        }
                    }
                ]
            }
        ]
    };
    myChart_2.setOption(option2);
});
$(function () {
    var myChart_5 = echarts.init(document.getElementById('test5'));
    option = {
        title: {
            text: '视频车辆占比',
            textStyle:{
                color:'#fff',
                //字体大小
                fontSize:12,
            },
            x:'center',
            top:'70%'
        },
        "gird": {},
        "series": [
            {
            "type": "gauge",
            "center": ["50%", "50%"],
            "radius": "80%",
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
                        [0.67, '#8147ff'],
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
});
$(function () {
    var myChart_2 = echarts.init(document.getElementById('test4'));
    var myColor = [ '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#0096f3', '#0096f3', '#0096f3', '#0096f3', '#0096f3'];
    option2 = {
        backgroundColor: 'rgba(0,0,0,0)',
        grid: {
            left: '2%',
            top: '2%',
            right: '0%',
            bottom: '0%',
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
                    color: 'white',
                    fontSize: '9',
                    padding: [12, 0, 0, 0],
                },
                rotate:45
            },
            axisLine: {
                show: true,
                lineStyle:{
                    color:'#204161',
                }
            },

            data: ['哈尔滨', '齐齐哈尔', '鸡西', '鹤岗', '双鸭山', '大庆', '伊春', '佳木斯', '七台河', '牡丹江', '黑河', '绥化', '大兴安岭']
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
            data: ['12567', '12566', '12566', '12566', '12566', '12566', '12566', '12566', '12566', '12566', '12566', '12566', '12566']
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
            data: [52, 60, 22, 33, 44, 100, 59, 66,33,55,33,44,88],
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
            data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
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
            data: [100, 100, 100, 100, 100, 100, 100,100,100,100,100,100,100],
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
        },
            {
                name: '外圆',
                type: 'scatter',
                hoverAnimation: false,
                data: [4, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4],
                xAxisIndex: 2,
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
    myChart_2.setOption(option2);
});
$(function () {
    var myChart_3 = echarts.init(document.getElementById('test3'));
    var myHosName = '黑龙江省';
    option = null;
    var geoCoordMap = {
        '安徽省': [117.17, 31.52],
        '北京市': [116.24, 39.55],
        '重庆市': [106.54, 29.59],
        '福建省': [119.18, 26.05],
        '甘肃省': [103.51, 36.04],
        '广东省': [113.14, 23.08],
        '广西壮族自治区': [108.19, 22.48],
        '贵州省': [106.42, 26.35],
        '海南省': [110.20, 20.02],
        '河北省': [114.30, 38.02],
        '河南省': [113.40, 34.46],
        '黑龙江省': [128.36, 45.44],
        '湖北省': [112.27, 30.15],
        '湖南省': [112.59, 28.12],
        '吉林省': [125.19, 43.54],
        '江苏省': [118.46, 32.03],
        '江西省': [115.55, 28.40],
        '辽宁省': [123.25, 41.48],
        '内蒙古': [108.41, 40.48],
        '宁夏回族自治区': [106.16, 38.27],
        '青海省': [101.48, 36.38],
        '山东省': [118.00, 36.40],
        '山西省': [112.33, 37.54],
        '陕西省': [108.57, 34.17],
        '上海市': [121.29, 31.14],
        '海南': [108.77, 19.10],
        '四川省': [104.04, 30.40],
        '天津市': [117.12, 39.02],
        '西藏自治区': [91.08, 29.39],
        '新疆维吾尔自治区': [87.36, 43.45],
        '云南省': [102.42, 25.04],
        '浙江省': [120.10, 30.16],
        '澳门': [115.07, 21.33],
        '台湾省': [121.21, 23.53]
    };

    var BJData = [
        [{
            name: '黑龙江省'
        }, {
            name: '上海市',
            value: 195
        }],
        [{
            name: '黑龙江省'
        }, {
            name: '广东省',
            value: 90
        }],
        [{
            name: '黑龙江省'
        }, {
            name: '辽宁省',
            value: 80
        }],
        [{
            name: '黑龙江省'
        }, {
            name: '湖北省',
            value: 70
        }],
        [{
            name: '黑龙江省'
        }, {
            name: '内蒙古',
            value: 70
        }],
        [{
            name: '黑龙江省'
        }, {
            name: '江苏省',
            value: 60
        }],
        [{
            name: '黑龙江省'
        }, {
            name: '新疆维吾尔自治区',
            value: 70
        }],
        [{
            name: '黑龙江省'
        }, {
            name: '四川省',
            value: 40
        }],
        [{
            name: '黑龙江省'
        }, {
            name: '云南省',
            value: 130
        }],
        [{
            name: '黑龙江省'
        }, {
            name: '黑龙江省',
            value: 130
        }],
        [{
            name: '黑龙江省'
        }, {
            name: '甘肃省',
            value: 200
        }],
        [{
            name: '黑龙江省'
        }, {
            name: '西藏自治区',
            value: 60
        }]
    ];
    // var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    // var planePath = "path://M917.965523 917.331585c0 22.469758-17.891486 40.699957-39.913035 40.699957-22.058388 0-39.913035-18.2302-39.913035-40.699957l-0.075725-0.490164-1.087774 0c-18.945491-157.665903-148.177807-280.296871-306.821991-285.4748-3.412726 0.151449-6.751774 0.562818-10.240225 0.562818-3.450589 0-6.789637-0.410346-10.202363-0.524956-158.606321 5.139044-287.839661 127.806851-306.784128 285.436938l-1.014096 0 0.075725 0.490164c0 22.469758-17.854647 40.699957-39.913035 40.699957s-39.915082-18.2302-39.915082-40.699957l-0.373507-3.789303c0-6.751774 2.026146-12.903891 4.91494-18.531052 21.082154-140.712789 111.075795-258.241552 235.432057-312.784796C288.420387 530.831904 239.989351 444.515003 239.989351 346.604042c0-157.591201 125.33352-285.361213 279.924387-285.361213 154.62873 0 279.960203 127.770012 279.960203 285.361213 0 97.873098-48.391127 184.15316-122.103966 235.545644 124.843356 54.732555 215.099986 172.863023 235.808634 314.211285 2.437515 5.290493 4.01443 10.992355 4.01443 17.181311L917.965523 917.331585zM719.822744 346.679767c0-112.576985-89.544409-203.808826-199.983707-203.808826-110.402459 0-199.944821 91.232864-199.944821 203.808826s89.542362 203.808826 199.944821 203.808826C630.278335 550.488593 719.822744 459.256752 719.822744 346.679767z";
    //    简笔人2
    //     var  planePath="path://M621.855287 587.643358C708.573965 540.110571 768 442.883654 768 330.666667 768 171.608659 648.609267 42.666667 501.333333 42.666667 354.057399 42.666667 234.666667 171.608659 234.666667 330.666667 234.666667 443.22333 294.453005 540.699038 381.59961 588.07363 125.9882 652.794383 21.333333 855.35859 21.333333 1002.666667L486.175439 1002.666667 1002.666667 1002.666667C1002.666667 815.459407 839.953126 634.458526 621.855287 587.643358Z";
    // var planePath = 'path://M41.750 257.260 L 22.000 267.255 21.875 282.628 C 21.728 300.691,22.058 298.080,18.985 305.500 L 16.500 311.500 16.500 525.000 L 16.500 738.500 19.338 743.328 C 21.061 746.259,23.985 749.303,26.783 751.078 L 31.392 754.000 79.208 754.000 L 127.025 754.000 129.368 748.750 C 130.657 745.862,132.735 741.250,133.986 738.500 C 135.237 735.750,137.059 731.700,138.036 729.500 C 139.012 727.300,141.203 722.431,142.905 718.680 C 145.969 711.928,146.000 711.696,146.000 695.145 L 146.000 678.429 138.155 677.379 C 93.129 671.350,95.506 604.146,140.750 604.015 L 146.000 604.000 146.000 541.433 C 146.000 479.251,145.988 478.869,143.993 479.502 C 142.890 479.852,139.402 479.579,136.243 478.894 C 133.084 478.209,129.931 477.541,129.235 477.410 C 126.273 476.854,119.072 471.802,115.103 467.496 C 93.547 444.111,110.187 405.091,141.750 405.011 L 146.000 405.000 146.000 343.967 L 146.000 282.934 143.528 278.055 C 141.080 273.224,138.116 270.526,132.703 268.201 C 127.864 266.123,126.385 266.305,104.500 271.676 C 99.000 273.026,92.700 274.527,90.500 275.012 C 80.882 277.131,53.800 283.286,46.286 285.061 C 41.769 286.127,37.831 287.000,37.536 287.000 C 34.902 287.000,37.318 278.124,40.250 277.027 C 47.173 274.436,51.580 272.726,53.500 271.882 C 54.600 271.399,57.300 270.396,59.500 269.653 L 63.500 268.303 63.784 257.651 C 64.128 244.735,66.417 244.776,41.750 257.260 M125.000 329.000 L 125.000 349.000 81.000 349.000 L 37.000 349.000 37.000 329.000 L 37.000 309.000 81.000 309.000 L 125.000 309.000 125.000 329.000 M73.600 378.765 C 76.518 380.713,77.000 384.354,77.000 404.434 L 77.000 425.000 53.500 425.000 L 30.000 425.000 30.000 404.135 C 30.000 384.540,30.126 383.109,32.073 380.635 L 34.145 378.000 53.323 378.015 C 63.870 378.024,72.995 378.361,73.600 378.765 M131.392 420.438 C 115.469 427.680,113.107 451.221,127.262 461.610 C 137.887 469.409,149.819 468.650,159.148 459.583 C 178.796 440.485,156.489 409.024,131.392 420.438 M77.000 453.000 L 77.000 473.000 53.500 473.000 L 30.000 473.000 30.000 453.000 L 30.000 433.000 53.500 433.000 L 77.000 433.000 77.000 453.000 M77.000 500.500 L 77.000 520.000 53.500 520.000 L 30.000 520.000 30.000 500.500 L 30.000 481.000 53.500 481.000 L 77.000 481.000 77.000 500.500 M77.000 549.018 L 77.000 569.037 53.750 568.768 L 30.500 568.500 30.229 548.750 L 29.958 529.000 53.479 529.000 L 77.000 529.000 77.000 549.018 M77.000 596.000 L 77.000 616.000 53.500 616.000 L 30.000 616.000 30.000 596.000 L 30.000 576.000 53.500 576.000 L 77.000 576.000 77.000 596.000 M132.500 618.316 C 122.646 623.093,118.000 630.198,118.000 640.488 C 118.000 670.846,161.678 674.014,166.415 644.000 C 169.243 626.077,148.655 610.486,132.500 618.316 M77.000 644.000 L 77.000 664.000 53.500 664.000 L 30.000 664.000 30.000 644.000 L 30.000 624.000 53.500 624.000 L 77.000 624.000 77.000 644.000 M76.812 690.459 C 76.416 713.872,78.519 711.926,53.564 711.968 C 28.281 712.011,30.000 713.626,30.000 689.826 L 30.000 672.000 53.562 672.000 L 77.124 672.000 76.812 690.459';
    //var planePath = 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891';
    var planePath = 'path://M87.7,42.5H51.3V115h36.5c1.2,0,2.1-1,2.1-2.2v-68C89.9,43.5,88.9,42.5,87.7,42.5L87.7,42.5z M38.1,17.5tc-4.4,0-8,3.7-8,8.4s3.6,8.4,8,8.4c4.4,0,8-3.7,8-8.4S42.5,17.5,38.1,17.5z M38.1,84.2c-4.4,0-8,3.7-8,8.4c0,4.6,3.6,8.4,8,8.4c4.4,0,8-3.7,8-8.4S42.5,84.2,38.1,84.2z M38.1,104.3v8.5c0,1.2,0.9,2.2,2.1,2.2h7.8l0-17.2C46.2,101.6,42.5,104.3,38.1,104.3zM49.6,3.5h-9.3c-1.2,0-2.1,1-2.1,2.2v8.4c6.1,0,11.2,5.3,11.2,11.7c0,6.5-5,11.7-11.2,11.7v43.3c4.3,0,8.1,2.6,10,6.5l0-48.2H75c1.2,0,2.1-1,2.1-2.2v-15c0-1.2-0.8-2.8-1.8-3.4L53.5,4.6C52.5,4,50.7,3.5,49.6,3.5z M59.5,13.7L72,21.6c0.5,0.3,0.9,1.1,0.9,1.7v10.3c0,0.6-0.5,1.1-1.1,1.1H62c-0.6,0-1.1-0.5-1.2-1.1l-2.1-19.4C58.7,13.6,59,13.4,59.5,13.7z';
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var mySeries = [];
    [
        [myHosName, BJData]
    ].forEach(function(item, i) {
        mySeries.push({ //线
            name: item[0],
            //                      name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[0],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, { //移动 点
            name: item[0],
            //                      name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 18
            },
            lineStyle: {
                normal: {
                    color: color[1],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, { //省份圆点
            name: item[0],
            //                      name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{b}'
                }
            },
            symbolSize: function(val) {
                return val[2] / 6;
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var tmp = params.data.value[2]
                        if (tmp < 100) {
                            return '#5033ff';
                        } else if (tmp > 150) {
                            return '#ff5c69'
                        } else
                            return '#ffce3d';
                    }
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[1].name+'('+dataItem[1].value+')',
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });

    option3 = {
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.seriesIndex == 1 || params.seriesIndex == 4 || params.seriesIndex == 7) {
                    return params.data.fromName + '→' + params.data.toName;
                }
            }
            // formatter: function(params) {
            //     if (params.seriesIndex == 2 || params.seriesIndex == 5 || params.seriesIndex == 8) {
            //         return params.name + '<br>' + params.seriesName + ':' + params.data.value[2] + ' 人次';
            //     } else if (params.seriesIndex == 1 || params.seriesIndex == 4 || params.seriesIndex == 7) {
            //         return params.data.fromName + '→' + params.data.toName;
            //     }
            // }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            layoutCenter: ['50%', '50%'],
            layoutSize: "130%",
            roam: true,
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .5)',
                    areaColor: '#020933',
                    borderColor: '#223e73'
                },
                emphasis: {
                    areaColor: '#0089ff'
                }
            },
        },
        series: mySeries
    };


    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    window.onresize = function() {
        myChart.resize();
    }
    myChart_3.setOption(option3);
})