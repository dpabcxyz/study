function load() {
    layui.use('layer', function() {
        layui.use('layer', function() {
            var layer = layui.layer;
            var index = layer.open({
                icon: 2,
                type: 3,
                anim: 5,
                content: '<span class="load-text">正在努力请求...</span>',
                skin: 'x-load',
                shade: [0.7, '#fff']
            });
            setTimeout(function() { layer.close(index); }, 5000); //模拟请求成功后关闭加载层
        });
    });
}

function PopoverNormal(title, url, width, height, bol) {
    layui.use('layer', function() {
        layer = layui.layer;    //实例化layer
        var index = layer.open({
            title: [title], //弹出层标题
            type: 2,        //弹出层类型0消息框 1页面层  2iframe层  3加载层 4tip层
            maxmin: bol,    //是否允许最大化
            content: url,   //iframe路径
            area: [width, height], //弹出层宽高
            shade: 0.3,     //遮罩层，0为透明，1为全黑
            anim: 4,        //出场动画 可选0 1 2 3 4 5 6
            moveOut: true,  //是否允许移出到窗口范围外
            success: function(layero, index) {}, //弹出成功回调
            restore: function() {
                $('#layui-layer-iframe' + index).css('height', parseInt(height) - 43); //修复bug
            },  //窗口还原后回调
            resizing: function() {

            },//改变窗口大小回调
            full: function() {
                $('#layui-layer-iframe' + index).css('height', $(document).height() - 43);//修复bug
            }//全屏回调
        })
    })
};

function PopoverMax(title, url, bol) {
    var Width = $(window).width() + 'px';
    var Hight = $(window).height() + 'px';
    layui.use('layer', function() {
        layer = layui.layer;
        var index = layer.open({
            title: [title],
            type: 2,
            maxmin: bol,
            content: url,
            area: [Width, Hight],
            shade: 0.3,
            anim: 4,
            moveOut: true,
            success: function(layero, index) {

            },
            restore: function() {
                $('#layui-layer-iframe' + index).css('height', parseInt(height) - 43);
            },
            resizing: function() {
                // $('#layui-layer-iframe'+index).css('height',$(document).height()-60);
            },
            full: function() {
                $('#layui-layer-iframe' + index).css('height', $(document).height() - 43);
                // layer.iframeAuto(index);
            }
        })
    })
};
// 操作成功

function success(text) {
    var content = '<ul class="content">' +
        '    <li class="symbol"><svg class="icon" aria-hidden="true"> <use xlink:href="#success"></use></svg></li>' +
        '    <li class="txt">' + text + '</li>' +
        '</ul>';
    layui.use('layer', function() {
        var layer = layui.layer;
        layer.msg('hello', { 
            type: 0,            //弹出层类型
            anim: 3,            //出场动画
            content: content,   //提示内容
            skin: 'Xsucceed',   //自定义class
            shade: 0.01,        // 遮罩层
            time: 3000          //自动关闭时间
        });
    });
}
// 操作错误
function error(text) {
    var content = '<ul class="content">' +
        '    <li class="symbol"><svg class="icon" aria-hidden="true"> <use xlink:href="#error"></use></svg></li>' +
        '    <li class="txt">' + text + '</li>' +
        '</ul>';
    layui.use('layer', function() {
        var layer = layui.layer;
        layer.msg('hello', {
            type: 0,
            anim: 6,
            content: content,
            skin: 'Xerror',
            shade: 0.01,
            time: 3000
        });
    });
}
// 警告
function alarm(text) {
    var content = '<ul class="content">' +
        '    <li class="symbol"><svg class="icon" aria-hidden="true"> <use xlink:href="#alarm"></use></svg></li>' +
        '    <li class="txt">' + text + '</li>' +
        '</ul>';
    layui.use('layer', function() {
        var layer = layui.layer;
        layer.msg('hello', {
            type: 0,
            anim: 3,
            content: content,
            skin: 'Xalarm',
            shade: 0.01,
            time: 3000
        });
    });
}
// 一般消息提示
function msg(text) {
    var content = '<ul class="content">' +
        '    <li class="symbol"><svg class="icon" aria-hidden="true"> <use xlink:href="#msg"></use></svg></li>' +
        '    <li class="txt">' + text + '</li>' +
        '</ul>';
    layui.use('layer', function() {
        var layer = layui.layer;
        layer.msg('hello', {
            type: 0,
            anim: 3,
            content: content,
            skin: 'Xmsg',
            shade: 0.01,
            time: 3000
        });
    });
}
// 询问
function confirm(text) {
    layui.use('layer', function() {
        var layer = layui.layer;
        var index = layer.open({
            type: 0,
            anim: 3,
            title: false,
            content: text,
            skin: 'Xconfirm',
            area: ['360px', '140px'],
            shade: 0.01,
            btn: ['确定', '取消'],
            yes: function(index, layero) {
                console.log('1');
                layer.close(index);
            },
            btn2: function(index, layero) {
                //return false
                console.log('0');
            },
            btnAlign: 'r',
            closeBtn: 0

        });
    });
}
//确认
function sure(text) {
    layui.use('layer', function() {
        var layer = layui.layer;
        var index = layer.open({
            type: 0,
            anim: 3,
            title: false,
            content: text,
            skin: 'Xsure',
            area: ['360px', '140px'],
            shade: 0.01,
            btn: ['确定'],
            yes: function(index, layero) {
                console.log('1');
                layer.close(index);
            },
            btnAlign: 'r',
            closeBtn: 0

        });
    });
}


function exampale_1(title, url) {
    var Width = $(window).width() + 'px';
    var Hight = $(window).height() + 'px';
    layui.use('layer', function() {
        layer = layui.layer;
        var index = layer.open({
            // id:'13579'     从index.html弹出的弹窗(比如视频监控的弹窗，车辆监控的弹窗)，不要加id,
            title: [title],
            type: 2,
            content: url,
            area: [Width, Hight],
            shade: 0.3,
            anim: 5,
            isOutAnim: false,
            moveOut: true,
            maxmin: false,
            resize: false,
            success: function(layero, index) {
                layer.iframeAuto(index);
            },
            full: function() {}
        });
    });
}

function exampale_2(title, url) {
    var Width = $(window).width() + 'px';
    var Hight = $(window).height() + 'px';
    layui.use('layer', function() {
        layer = layui.layer;
        var index = layer.open({
            id: '13579',
            title: [title],
            type: 2,
            content: url,
            area: [Width, Hight],
            shade: 0.3,
            anim: 5,
            isOutAnim: false,
            moveOut: true,
            maxmin: false,
            resize: false,
            success: function(layero, index) {
                var obj_1 = layer.getChildFrame('.menu', index);
                var obj_2 = layer.getChildFrame('.form', index);
                var obj_3 = layer.getChildFrame('.form-iframe', index);
                $(obj_1).height($(window).height() - 43);
                $(obj_2).height($(window).height() - 220 - 32 - 43);
                $(obj_3).height($(window).height() - 220 - 32 - 28 - 43);
                layer.iframeAuto(index);
            },
            full: function() {}
        });
    });
}