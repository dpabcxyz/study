mark_1();
function mark_1() {
    //创建地图
    var map = new AMap.Map('container1', {
        resizeEnable: true,
        center: [116.481181, 39.989792],
        zoom: 16,
        mapStyle: 'amap://styles/0eb0eabac9155acee6d5134b5caf2b73',
    });
    addMarker();
    //添加marker标记
    function addMarker() {
        map.clearMap();
        var marker = new AMap.Marker({
            map: map,
            position: [116.481181, 39.989792],
            icon: new AMap.Icon({
                image: "images/mark_bs.png",
                size: new AMap.Size(46, 46),  //图标大小
                imageSize: new AMap.Size(26,26)
            })
        });
        //鼠标点击marker弹出自定义的信息窗体
        // AMap.event.addListener(marker, 'click', function () {
        //     infoWindow.open(map, marker.getPosition());
        // });
        window.addEventListener('load',function(){
            infoWindow.open(map, marker.getPosition());
        })
    }

//实例化信息窗体
    content = [];
    content.push("<li class='total'>10.12万元</li>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow( content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

//构建自定义信息窗体
    function createInfoWindow(content) {
        var info = document.createElement("div");
        info.className = "custom-info input-card content-window-card";

        //可以通过下面的方式修改自定义窗体的宽高
        //info.style.width = "400px";
        // 定义顶部标题
        var titleD = document.createElement("div");

        // 定义中部内容
        var middle = document.createElement("div");
        middle.className = "info-middle";
        middle.innerHTML = content;
        info.appendChild(middle);

        // 定义底部内容
        var bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style.position = 'relative';
        bottom.style.top = '0px';
        bottom.style.margin = '0 auto';
        var sharp = document.createElement("img");
        sharp.src = "images/sharp.png";
        bottom.appendChild(sharp);
        info.appendChild(bottom);
        return info;
    }

}
mark_2();
function mark_2() {
    //创建地图
    var map = new AMap.Map('container2', {
        resizeEnable: true,
        center: [116.481181, 39.989792],
        zoom: 16,
        mapStyle: 'amap://styles/0eb0eabac9155acee6d5134b5caf2b73',
    });
    addMarker();
    //添加marker标记
    function addMarker() {
        map.clearMap();
        var marker = new AMap.Marker({
            map: map,
            position: [116.481181, 39.989792],
            icon: new AMap.Icon({
                image: "images/truck.png",
                size: new AMap.Size(120, 66),  //图标大小
                imageSize: new AMap.Size(120,66)
            })
        });
        //鼠标点击marker弹出自定义的信息窗体
        // AMap.event.addListener(marker, 'click', function () {
        //     infoWindow.open(map, marker.getPosition());
        // });
        window.addEventListener('load',function(){
            infoWindow.open(map, marker.getPosition());
        })
    }

//实例化信息窗体
    content = [];
    content.push("" +
        "<ul class='item'><li class='name'>车牌号:</li><li class='value'>赣A12345</li></ul>" +
        "<ul class='item'><li class='name'>入站:</li><li class='value'>伏龙岭收费站</li></ul>" +
        "<ul class='item'><li class='name'>里程:</li><li class='value'>120km</li></ul>" +
        "<ul class='item'><li class='name'>金额:</li><li class='value'>120元</li></ul>" +
        "");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow( content.join("<br/>")),
        offset: new AMap.Pixel(60, -45)
    });

//构建自定义信息窗体
    function createInfoWindow(content) {
        var info = document.createElement("div");
        info.className = "custom-info input-card content-window-card";

        //可以通过下面的方式修改自定义窗体的宽高
        //info.style.width = "400px";
        // 定义顶部标题
        var titleD = document.createElement("div");

        // 定义中部内容
        var middle = document.createElement("div");
        middle.className = "info-middle";
        middle.innerHTML = content;
        info.appendChild(middle);

        // 定义底部内容
        var bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style.position = 'relative';
        bottom.style.top = '0px';
        bottom.style.margin = '0 auto';
        var sharp = document.createElement("img");
        sharp.src = "images/sharp.png";
        bottom.appendChild(sharp);
        info.appendChild(bottom);
        return info;
    }

}
// 车辆列表
function test1() {
    $('.itemwrap ul').last()
        .slideUp()
        .queue(function(next){
            $(this).remove();
            var el=' <ul>\n' +
                '                                        <li>京P88888</li>\n' +
                '                                        <li>客2</li>\n' +
                '                                        <li>济广高速  </li>\n' +
                '                                        <li>龙虎山</li>\n' +
                '                                        <li>时间</li>\n' +
                '                                        <li>888</li>\n' +
                '                                    </ul>';
            $('.itemwrap').prepend($(el));
            next();
        })
}
setInterval("test1()",2000);


// 数字
(function(){
    var num1 = 3456789;
    var num2 = 3479135;
    var num3 = 6797564;
    var num4 = 1245678;
    var num5 = 9999999;
    var num6 = 2346798;

    // var odo1 = new Odometer('.Odometer',{
    //     num : num
    // });
    var odo = new Odometer('.Odometer',{
        num : num2
    });
    //改变数值
    odo.update(num1);
    setTimeout(()=>{
        odo.update(num2);
    },4000);
    setTimeout(()=>{
        odo.update(num3);
    },8000);
    setTimeout(()=>{
        odo.update(num4);
    },12000);
    setTimeout(()=>{
        odo.update(num5);
    },16000);
    setTimeout(()=>{
        odo.update(num6);
    },20000);
    setTimeout(()=>{
        odo.update(num4);
    },24000);


})();
/*日期*/
function machineDate() {
    var date=function (){
        var now = new Date();
        var year = now.getFullYear();

        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hh = now.getHours();
        var mm = now.getMinutes();
        var ss = now.getSeconds();
        var clock = year + "年";
        if(month < 10)
            clock += "0";
        clock += month + "月";
        if(day < 10)
            clock += "0";
        clock += day + "日 ";
        if(hh < 10)
            clock += "0";
        clock += hh + ":";
        if (mm < 10)
            clock += '0';
        clock += mm + ":";
        if (ss < 10)
            clock += '0';
        clock += ss;
        return(clock);
    };
    $('#machineDate').html(date);
}
setInterval("machineDate()",500);
// function test2(){
//     var myChart = echarts.init(document.getElementById('echarts'));
//     option = {
//         series: [
//             {
//                 name: ' 今日流量',
//                 type: 'pie',
//                 radius: ['50%', '60%'],
//                 center: ['28%', '42%'],
//                 startAngle: 225,
//                 color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                     offset: 0,
//                     color: '#00a2ff'
//                 }, {
//                     offset: 1,
//                     color: '#70ffac'
//                 }]), "transparent"],
//                 labelLine: {
//                     normal: {
//                         show: false
//                     }
//                 },
//                 label: {
//                     normal: {
//                         position: 'center'
//                     }
//                 },
//                 data: [{
//                     value: 75,
//                     name: '今日流量',
//                     label: {
//                         normal: {
//                             formatter: '\n今日流量',
//                             textStyle: {
//                                 color: '#fff',
//                                 fontSize: 16
//                             },
//                         }
//                     }
//                 }, {
//                     value: 25,
//                     name: '%',
//                     label: {
//                         normal: {
//                             formatter: '60',
//                             textStyle: {
//                                 color: '#007ac6',
//                                 fontSize: 28
//                             },
//                         }
//                     }
//                 },
//                     {
//                         value: 0,
//                         name: '%',
//                         label: {
//                             normal: {
//                                 formatter: '辆',
//                                 textStyle: {
//                                     color: '#fff',
//                                     fontSize: 14
//
//                                 }
//                             }
//                         }
//                     }]
//             },
//             {
//                 name: ' 今日金额',
//                 type: 'pie',
//                 radius: ['50%', '60%'],
//                 center: ['70%', '42%'],
//                 startAngle: 225,
//                 labelLine: {
//                     normal: {
//                         show: false
//                     }
//                 },
//                 label: {
//                     normal: {
//                         position: 'center'
//                     }
//                 },
//                 data: [{
//                     value: 75,
//                     "itemStyle": {
//                         "normal": {
//                             "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                                 "offset": 0,
//                                 "color": '#304cff'
//                             }, {
//                                 "offset": 1,
//                                 "color": '#2dcbff'
//                             }]),
//                         }
//                     },
//                     name: '今日金额',
//                     label: {
//                         normal: {
//                             formatter: '\n今日金额',
//                             textStyle: {
//                                 color: '#fff',
//                                 fontSize: 16
//
//                             }
//                         }
//                     }
//                 }, {
//                     value: 25,
//                     name: '%',
//                     label: {
//                         normal: {
//                             formatter: '30.6',
//                             textStyle: {
//                                 color: '#304cff',
//                                 fontSize: 28
//
//                             }
//                         }
//                     }
//                 },
//                     {
//                         value: 0,
//                         name: '%',
//                         label: {
//                             normal: {
//                                 formatter: '万元',
//                                 textStyle: {
//                                     color: '#fff',
//                                     fontSize: 14
//
//                                 }
//                             }
//                         }
//                     }]
//             }
//         ]
//     };
//     myChart.clear();
//     myChart.setOption(option);
// }


/*标签页切换*/
$(function () {
    $('.item3 .tabbar li').click(function () {
        $(this).addClass('active');
        $('.item3 .tabbar li').not(this).removeClass('active');
        $('.item3 .tab').hide();
        $('.item3 .tab').eq($(this).index()).show();
        if($(this).index()==1){
            test1_2();
        }
    })
})

/*点击选中事件*/

$(function () {
    $('.listContent ul').click(function () {
        $(this).addClass('active');
        $('.listContent ul').not(this).removeClass('active');
        $('.main .tab').hide();
        $('.main .tab').eq(1).show();
		rendPath();
    });
	$('#back1').click(function(){
		 $('.main .tab').hide();
		 $('.main .tab').eq(0).show();
	});
	$('#back2').click(function(){
		 $('.main .tab').hide();
		 $('.main .tab').eq(1).show();
	})
})

/*实时金额/流量*/
function test1_1(){
    arr1=[50,88,40,100,87,50,66,23,90];
    arr2=[23,66,89,90,60,45,35,50,78];
    $('.flow .power').each(function (m,n) {
        $('.flow .power').eq(m).animate({
            'width':arr1[m]
        },2000);
    });
    $('.money .power').each(function (m,n) {
        $('.money .power').eq(m).animate({
            'width':arr2[m]
        },2000);
    });
}
function test1_2(){
    arr1=[50,88,40,90,87];
    arr2=[23,34,89,90,100];
    $('.flow .power').each(function (m,n) {
        $('.flow .power').eq(m).animate({
            'width':arr1[m]
        },2000);
    });
    $('.money .power').each(function (m,n) {
        $('.money .power').eq(m).animate({
            'width':arr2[m]
        },2000);
    });
}
function test1_3(){
    arr1=[100,88,55,100,87];
    arr2=[23,66,40,90,60];
    $('.flow .power').each(function (m,n) {
        $('.flow .power').eq(m).animate({
            'width':arr1[m]
        },2000);
    });
    $('.money .power').each(function (m,n) {
        $('.money .power').eq(m).animate({
            'width':arr2[m]
        },2000);
    });
}
function test1_4(){
    arr1=[34,88,59,100,40];
    arr2=[88,66,100,90,30];
    $('.flow .power').each(function (m,n) {
        $('.flow .power').eq(m).animate({
            'width':arr1[m]
        },2000);
    });
    $('.money .power').each(function (m,n) {
        $('.money .power').eq(m).animate({
            'width':arr2[m]
        },2000);
    });
}
function test1_5(){
    arr1=[20,88,100,60,87];
    arr2=[23,70,30,90,90];
    $('.flow .power').each(function (m,n) {
        $('.flow .power').eq(m).animate({
            'width':arr1[m]
        },2000);
    });
    $('.money .power').each(function (m,n) {
        $('.money .power').eq(m).animate({
            'width':arr2[m]
        },2000);
    });
}
test1_1();
setTimeout("test1_2()", 6000 );
setTimeout("test1_3()", 12000 );
setTimeout("test1_4()", 18000 );
setTimeout("test1_5()", 24000 );
setTimeout("test1_5()", 24000 );