/**
 * Created by Administrator on 2016/10/31.
 */
$(function(){
    $('.fullpage').fullpage({
        varticalcentered:false,
        css3:true,
        //背景颜色
        sectionsColor:['red','green','blue','pink','yellow'],
        slidesColor:['red','green','blue','yellow'],

        //section导航及提示
        navigation:true,
        navigationPosition:'right',
        showActiveTooltip:true,
        navigationTooltips:['第一屏','第二屏','第三屏','第四屏','第五屏'],

        //slides导航
        slidesNavigation:true,
        slidesNavPosition:'top',

        //文字自适应
        resize:true,

        //锚点
        anchors:['page1','page2','page3','page4','page5'],
        lockAnchors:false,
        animateAnchor:true,

        //active

        //滚动相关
        //scrollingSpeed:700,
        scrollOverflow:false,

        //slides方向控制按钮
        controlArrows:false,
        controlArrowColor:'black',

        //循环滚动
        loopBottom:false,
        loopTop:false,
        loopHorizontal:false,
        continuousVertical:true,

        //是否使用滚动条滚动，false,则失去插件动画效果，只能通过滚动条滚动
        autoScrolling:true,

        //是否使用滚动条滚动，true,出现滚动条，可同时使用插件和滚动条进行滚动
        scrollBar:false,

        //是否启用历史记录
        recordHistory:true,


        //移动设备滑动敏感度
        touchSensitivity:5,

        //键盘方向键控制
        keyboardScrolling:true,

        //上下边距
        paddingTop:'50px',
        paddingBottom:'50px',

        //固定jquery对象，使其保持在最上层
        fixedElements:'.fixedElements',

        //绑定菜单
        menu:'.fullpagemenu',

        //销毁
        //destory(); all

        //重构
        //reBuild();

        //section与slide选择器
        sectionSelecltor:'.section',
        slideSelector:'.slide',
        afterLoad:function(anchorLink,index){
            console.log("anchorLink:"+anchorLink+"-"+"index:"+index)
        },
        onLeave:function(index,nextIndex,direction){
            console.log("index:"+index+"-"+"nextIndex:"+nextIndex+"-"+"direction:"+direction);
        },
        afterRender:function(){
            console.log('afterRender');
        },
        afterResize:function(){
            console.log('您改变了窗口大小');
        },
        afterSlideLoad:function(anchorLink,index,slideAnchor, slideIndex){
            console.log("anchorLink:"+anchorLink+"-"+"index:"+index+"-"+"slideAnchor:"+slideAnchor+"-"+"slideIndex:"+slideIndex);
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
            console.log("anchorLink:"+anchorLink+"-"+"index:"+index+"-"+"slideIndex:"+slideIndex+"-"+"direction:"+direction+"-"+'nextSlideIndex:'+nextSlideIndex);
        }
    });


    //方法
    //$('#btn1').on('click',function(){
    //    $.fn.fullpage.moveSectionUp();
    //    $.fn.fullpage.moveSectionDown();
    //    $.fn.fullpage.moveTo(2,2);
    //    $.fn.fullpage.slientMoveTo(2,2);
    //    $.fn.fullpage.moveSlideRight();
    //    $.fn.fullpage.moveSlideLeft();
    //    $.fn.fullpage.autoScrolling(booleans);
    //    $.fn.fullpage.setAutoScrolling(booleans,'all');
    //    $.fn.fullpage.setKeyboardScrolling(booleans,'up');
    //    $.fn.fullpage.setScrollingSpeed(4000);

    //懒加载
    //<img data-src='img.png'>
















});
