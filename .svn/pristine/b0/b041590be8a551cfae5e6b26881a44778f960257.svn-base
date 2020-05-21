var mycharts12 = echarts.init(document.getElementById('test12'));
// 多系列无法定位

option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false,
            color: '#707070'
        },
        axisLabel: {
            interval: 0,
            rotate: -90,
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#3b92e8'
            }
        },
        data: ['班线客运', '包车客运', '危险品', '出租车', '公交车', '普货']
    }],
    yAxis: {
        type: 'value',
        name: '辆',
        nameTextStyle: {
            fontSize: 14,
            color: '#fff'
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#3b92e8'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#1a3571'
            }
        }
    },
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: 20,
        data: [{
                name: '低能见度1',
                value: '70',
                itemStyle: {
                    color: '#1089E7'
                }
            },
            {
                name: '低能见度2',
                value: '50',
                itemStyle: {
                    color: '#F57474'
                }
            },
            {
                name: '低能见度3',
                value: '30',
                itemStyle: {
                    color: '#56D0E3'
                }
            },
            {
                name: '低能见度4',
                value: '25',
                itemStyle: {
                    color: '#F8B448'
                }
            },
            {
                name: '低能见度5',
                value: '15',
                itemStyle: {
                    color: '#8B78F6'
                }
            },
            {
                name: '低能见度6',
                value: '5',
                itemStyle: {
                    color: '#6de5b9'
                }
            }
        ]
    }]
};
mycharts12.setOption(option);
// ————————
var mycharts13 = echarts.init(document.getElementById('test13'));
//声明数据
var chartData = [{
        name: '中交兴路',
        value: 50,
        test: '备注1' //自定义参数
    },
    {
        name: '中交运安',
        value: 60,
        test: '备注2'
    },
    {
        name: '兵通科技',
        value: 66,
        test: '备注3'
    },
    {
        name: '鑫长宇',
        value: 72,
        test: '备注4'
    },
    {
        name: '壹卡行',
        value: 80,
        test: '备注5'
    },
    {
        name: '凯力星',
        value: 88,
        test: '备注6'
    },
    {
        name: '伟之华',
        value: 96,
        test: '备注7'
    },
    {
        name: '宇胜通',
        value: 100,
        test: '备注8'
    },
    {
        name: '烽火台',
        value: 100,
        test: '备注8'
    },
    {
        name: '诚韵达',
        value: 100,
        test: '备注8'
    }
];

var itemValue = [],
    bgData = []; //声明背景数据

// 取出所有数据最大值,作为柱形图背景数据
chartData.forEach(function(items, index) { //console.log(items)
    itemValue.push(items.value);
});
maxdata = Math.max.apply(null, itemValue); ///applay方法★取得最大值
//console.log("最大值为 %c"+ maxdata, "color:red");
for (var i = 0; i < chartData.length; i++) {
    bgData.push(maxdata); //取得最大值
}
console.log(bgData);

//图表

option = {
    backgroundColor: 'rgba(255,255,255,0)', //背
    tooltip: {
        trigger: 'axis', // axis , item
        axisPointer: {
            type: 'shadow' // 'line' | 'shadow'
        },
        //backgroundColor:'transparent',
        padding: 0,
        textStyle: {
            fontSize: 16,
            fontFamily: 'Simsun',
            color: '#fff'
        },
        formatter: function(params, ticket, callback) {
            console.log(params[1])
            var res = '<table class="charts_tip">' +
                '<thead>' +
                '<tr><th colspan="2" style="padding:2px 5px; background:' + params[1].color + '">' + params[1].name + '</th></tr>' +
                '</thead>' +
                '<tbody>' +
                '<tr><td class="cc" style="padding:2px 5px;">数量</td><td>' + params[1].value + '</td></tr>' +
                '<tr><td class="cc" style="padding:2px 5px;">备注</td><td>' + params[1].data.test + '</td></tr>' +
                '</tbody>' +
                '</table>';
            setTimeout(function() {
                callback(ticket, res); // 仅为了模拟异步回调
            }, 3000)
            return res;
        }
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    grid: {
        top: 20,
        left: 20,
        right: 50,
        bottom: 20,
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        position: 'bottom',
        boundaryGap: true, // 边界间隙
        min: 0,
        axisLabel: {
            show: false,
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255, 255, .5)'
            }
        },
        axisTick: {
            show: false // 坐标轴小标记
        },
        splitLine: {
            show: false, // 是否显示分割线
            lineStyle: {
                color: 'rgba(255, 255, 9255, 0)', // 纵向向网格线颜色
                type: 'dashed',
                width: 1
            }
        }
    }],
    yAxis: {
        type: 'category',
        position: 'left',
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, .5)',
                width: 1
            }
        },
        axisTick: {
            show: false // 坐标轴小标记
        },
        splitLine: {
            show: false
        },
        data: (function(data) {
                var arr = [];
                data.forEach(function(items) {
                    arr.push(items.name);
                });
                return arr;
            })(chartData) // 载入y轴数据
    },
    series: [{
        type: 'bar',
        barGap: "-100%",
        label: {
            normal: {
                show: false
            }
        },
        barWidth: 20,
        itemStyle: {
            normal: {
                color: '#1a2859' // 图表颜色
            }
        },
        data: bgData, // 载入背景数据
        z: 0
    }, {
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'right', // top, right, inside, insideTop,...
                textStyle: {
                    color: 'white',
                    fontSize: 16
                },
                formatter: '{c}'
                    /*formatter: function(params) { console.log(params)
                        var strVal = 0;
                        chartData.forEach(function(v, i, array) {
                            if (params.name == v.name) {
                                strVal = v.value;
                                params.data = v.test
                            }
                        })
                        return strVal + '%';
                    }*/
            }
        },
        barWidth: 20,
        itemStyle: {
            normal: {
                //color:'#ffc938', // 图表颜色
                color: function(params) { // 颜色定制显示（按顺序）
                    var colorList = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6', '#6de5b9', '#ff6692', '#f29b76', '#1089E7', '#F57474', ];
                    return colorList[params.dataIndex]
                },
                //barBorderRadius: [0, 17, 17, 0]  //圆角
            }
        },
        data: chartData, // 载入数据(内含自定义参数)
        z: 1
    }]
};

// 使用刚指定的配置项和数据显示图表
mycharts13.setOption(option);

// ——————————————————————————
var mycharts15 = echarts.init(document.getElementById('test15'));
var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + "月份");
    }
    return data;
}();

option = {
    backgroundColor: "rgba(255,255,255,0)",
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        "top": 50,
        "left": 70,
        "bottom": 90,
        "right": 30,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: 'center',
        top: 16,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        "data": ['客运', '危险品']
    },


    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#3b91e7'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            textStyle: {
                color: "#fff",
                fontSize: 14
            }

        },
        "data": ["中交兴路", "中交运安", "兵通科技", "鑫长宇", "壹卡行", "凯力星", "伟之华", "宇胜通", "烽火台", "诚韵达"]
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": true,
            lineStyle: {
                color: '#122158'
            }
        },
        "axisLine": {
            lineStyle: {
                color: '#3b91e7'
            }
        },
        "axisTick": {
            "show": true
        },
        "axisLabel": {
            "interval": 0,
            textStyle: {
                color: "#fff",
                fontSize: 14
            }
        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 16,
        "start": 10,
        "end": 80,
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
    "series": [{
            "name": "客运",
            "type": "line",
            symbolSize: 10,
            symbol: 'circle',
            "itemStyle": {
                "normal": {
                    "color": "#ffae00",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                1036,
                3693,
                2962,
                3810,
                2519,
                1915,
                1748,
                4675,
                6209,
                4323,
            ]
        },
        {
            "name": "危险品",
            "type": "line",
            symbolSize: 10,
            symbol: 'circle',
            "itemStyle": {
                "normal": {
                    "color": "#28b1ff",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                800,
                3643,
                3962,
                2810,
                2719,
                2015,
                648,
                3675,
                4209,
                2323,
            ]
        },
    ]
}
mycharts15.setOption(option)
    // ——————————————————————————————
var myChart14 = echarts.init(document.getElementById('test14'));
// 获取新疆地区的json文件
var uploadedDataURL = "http://localhost:8088/chenxuan/template/view/visual/2/public/js/data-1507863641060-Sy-whsTh-.json";
// var uploadedDataURL = "http://148.70.172.56:8083/work/template/view/visual/2/public/js/data-1507863641060-Sy-whsTh-.json";

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
        series.push(
            //     {
            //     name: '定位点',
            //     type: 'effectScatter', // 散点图
            //     coordinateSystem: 'geo', // 使用地理坐标系
            //     legendHoverLink: 'true',
            //     rippleEffect: {
            //         period: 5,
            //         brushType: 'fill',
            //         scale: 3
            //     },
            //     data: convertData(item[1]),
            //     symbolSize: function(val) {
            //         return val[2]
            //     },
            //     itemStyle: {
            //         normal: {
            //             color: '#ffed00',
            //         }
            //     },
            //     zlevel: 1,
            // }, 

            {
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
        tooltip: {
            trigger: "item"
        },
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
    myChart14.setOption(option);
});
window.addEventListener("resize", function() {
    myChart12.resize();
    myChart13.resize();
    myChart14.resize();
    myChart15.resize();
});