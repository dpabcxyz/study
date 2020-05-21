var openState = true;
//1、默认展开第一菜单
$('.item').eq(1).find('.item-name').addClass('open').find('.menu-arrow').css('transform', 'rotate(90deg)')
$('.item').eq(1).find('.item-content').slideDown(300).find('li').first().addClass('active');
//2、一级菜单点击事件
$('.item-name').click(function() {
    var arrow = $(this).find('.menu-arrow');
    var nextElement = $(this).next();
    $(this).addClass('open');
    $('.item-name').not(this).removeClass('open');
    if (nextElement.is(':hidden')) {
        nextElement.slideDown(300); //展开二级菜单
        arrow.css('transform', 'rotate(90deg)'); //箭头旋转
        //始终只展开一个菜单
        $('.item-content').not(nextElement).slideUp(300);
        $('.menu-arrow').not(arrow).css('transform', 'rotate(0deg)');
    } else {
        nextElement.slideUp(300);
        arrow.css('transform', 'rotate(0deg)');
    };
    if (!openState) {
        $('.switch').css('transform', 'rotate(0deg)');
        $('.slideBar').animate({
            width: '+=190'
        }, 100);
        $('.mainContent').animate({
            paddingLeft: '+=190'
        }, 100)
        $('.sysName .text').show(100);
        $('.menu-title').show(100);
        $('.menu-arrow').show(100);
        $('.open').next().show(100);
        $('.headBar').animate({
            paddingLeft: '+=190'
        }, 100)
        openState = true;
    }

})

//3、二级菜单点击事件
$('.item-content li').click(function() {
        var url = $(this).attr('data-url');
        $('#iframe').attr('src', url);
        $(this).addClass('active');
        $('.item-content li').not(this).removeClass('active');
        if ($(this).attr('data-type') == '1') {
            $('.mainContent').css('backgroundColor', '#000')
        } else {
            $('.mainContent').css('backgroundColor', '#f4f5fa')
        }

    })
    // 4、菜单收起与展开

$('#switch').click(function() {
    var mainContent = $('.mainContent');
    var slideBar = $('.slideBar');
    var headBar = $('.headBar');
    var text = $('.sysName .text');
    var title = $('.menu-title');
    var arrow = $('.menu-arrow');
    var content = $('.item-content');
    var this_ = $(this);

    function close() {
        this_.css('transform', 'rotate(180deg)');
        slideBar.animate({
            width: '-=190'
        }, 100);
        mainContent.animate({
            paddingLeft: '-=190'
        }, 100)
        text.hide(100);
        title.hide(100);
        arrow.hide(100);
        content.hide(100);
        headBar.animate({
            paddingLeft: '-=190'
        }, 100);
        openState = false;
    };

    function open() {
        this_.css('transform', 'rotate(0deg)');
        slideBar.animate({
            width: '+=190'
        }, 100);
        mainContent.animate({
            paddingLeft: '+=190'
        }, 100)
        text.show(100);
        title.show(100);
        arrow.show(100);
        $('.open').next().show(100);
        headBar.animate({
            paddingLeft: '+=190'
        }, 100)
        openState = true;
    }
    if (openState) {
        close();
    } else {
        open();

    }
})