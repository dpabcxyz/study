
function PopoverNormal(title, url, width, height,bol) {
    layui.use('layer', function(){
        layer = layui.layer;
        var index= layer.open({
            title: [title]
            ,type: 2
            ,maxmin: bol
            ,content: url
            ,area: [width, height]
            ,shade: 0.3
            ,anim: 1
            ,moveOut:true
            ,success: function(layero, index){
                $('#layui-layer-iframe'+index).css('height',parseInt(height)-43);
            }
            ,restore:function () {
                $('#layui-layer-iframe'+index).css('height',parseInt(height)-43);
            }
            ,resizing: function(){
                $('#layui-layer-iframe'+index).css('height',$(document).height()-60);
            }
            ,full:function () {
                $('#layui-layer-iframe'+index).css('height',$(document).height()-43);
              
            }
        })
    })
};
function PopoverMax(title, url,bol) {
    var Width=$(window).width()+'px';
    var Hight=$(window).height()+'px';
    layui.use('layer', function(){
        layer = layui.layer;
        var index= layer.open({
            title: [title]
            ,type: 2
            ,maxmin: bol
            ,content: url
            ,area: [Width, Hight]
            ,shade: 0.3
            ,anim: 1
            ,moveOut:true
            ,success: function(layero, index){

            }
            ,restore:function () {
                // $('#layui-layer-iframe'+index).css('height',$(document).height()-43);
                $('#layui-layer-iframe'+index).css('height',parseInt(height)-43);
            }
            ,resizing: function(){
                // $('#layui-layer-iframe'+index).css('height',$(document).height()-60);
            }
            ,full:function () {
                $('#layui-layer-iframe'+index).css('height',$(document).height()-43);
                // layer.iframeAuto(index);
            }
        })
    })
};



