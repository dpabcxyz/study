$('#btn1').click(function() {
    window.top.PopoverNormal('一般弹窗', 'http://jd.com', '650px', '450px', false);
})
$('#btn2').click(function() {
    window.top.PopoverNormal('可最大化弹窗', 'http://taobao.com', '650px', '450px', true);
})
$('#btn3').click(function() {
    window.top.PopoverMax('默认最大化弹窗', 'http://taobao.com', true);
})
$('#btn4').click(function() {
    LayerNormal('一般弹窗', $('#dom1'), '650px', '450px', false);
})
$('#btn5').click(function() {
    LayerNormal('一般弹窗', $('#dom2'), '1000px', '500px', false);
})
$('#btn6').click(function() {
        LayerMax('默认最大化弹窗', $('#dom2'), true);
    })
    // 消息提示
$('#btn7').click(function() {
    window.top.success('恭喜，操作成功！');
})
$('#btn8').click(function() {
    window.top.alarm('请认真敲代码!');
})
$('#btn9').click(function() {
    window.top.error('超出可查询日期范围！');
})
$('#btn10').click(function() {
    window.top.msg('这是一条普通提示消息');
})
$('#btn11').click(function() {
    window.top.confirm('亲，此操作不可逆！此操作不可逆！此操作不可逆！此操作不可逆！此操作不可逆！您确定要继续吗？');
})
$('#btn12').click(function() {
    window.top.sure('数据库已被清空，请准备跑路！据库已被清空，请准备跑路！据库已被清空，请准备跑路！');
})