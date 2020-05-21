$(function(){
    $('.fullpage').fullpage({
        verticalCentered:false,
        resize:true,
        navigation:true,
        navigationPosition:'right',
        navigationColor:'black',
        loopBottom:true,
        loopTop:true,
        afterLoad:function(link,index){
            switch(index){
                case 1:
                    alert('触发afterLoad()函数');
                    break;
                case 2:
                    alert('触发afterLoad()函数');
                    break;
                default:
                    break;
            }
        }
    });
});