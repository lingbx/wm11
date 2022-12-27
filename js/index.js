/**
 * 乐购商城首页js
 * 2022-10-26 李金林
 */
//当页面加载完毕
$(function(){
    /*首页大图轮播 */
    $("#banner").tyslide({
        boxh:460,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });

    /*图书电子书小轮播 */
    $("#ebooks-banner").tyslide({
        boxh:223,//盒子的高度
        w:332,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });
    /*电子书 table切换 */
    var $list=$('.ebooks .ebooks-nav > li');
    $list.mouseover(function(){
        //给自己添加激活类active把兄弟的都干掉
        $(this).addClass('active').siblings().removeClass('active');
        //获取index
        var index=$(this).index();
        //选中内容
        var $ebooksList=$('.ebooks-list');
        //显示索引等于当前index
        $ebooksList.eq(index).show().siblings('.ebooks-list').hide();
    })
    

    /*新书列表手风琴效果 */
    $('.ebooks .right-box ul > li').mouseenter(function(){
        //所有兄弟：隐藏详情 显示标题
        $(this).siblings().find('.desc').hide();//隐藏详情
        $(this).siblings().find('.ebooks-title').show();//显示标题
        //当前：隐藏标题 显示详情
        $(this).find('.ebooks-title').hide();//隐藏标题
        $(this).find('.desc').show();//显示详情

    })
    /*服装小轮播 */
    $("#clothes-banner").tyslide({
        boxh:290,//盒子的高度
        w:429,//盒子的宽度
        h:290,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });
     /*服装 table切换 */
    // var $clist=$('.clothes .clothes-nav > li');
    // $clist.mouseover(function(){
    //     //给自己添加激活类active把兄弟的都干掉
    //     $(this).addClass('active').siblings().removeClass('active');
    //     //获取index
    //     var index=$(this).index();
    //     //选中内容
    //     var $clothesList=$('.clothes-list');
    //     //显示索引等于当前index
    //     $clothesList.eq(index).show().siblings('.clothes-list').hide();
    // })
    
    /*户外活动小轮播 */
    $("#sport-banner").tyslide({
        boxh:290,//盒子的高度
        w:429,//盒子的宽度
        h:290,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });
     /*童装童鞋婴儿装小轮播 */
     $("#children-clothes-banner").tyslide({
        boxh:290,//盒子的高度
        w:429,//盒子的宽度
        h:290,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });
    /* 推广商品切换*/
    $('.promotion .promotion-title ul li').mouseenter(function () {
        // 导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')
        // 内容切换
        // 获取对应的索引
        var index = $(this).index(); // 0 => left:0*1170 ; 1 => left:-1*1170 2 => left:-2*1170
        console.log(index);
        console.log($('.promotion .promotion-content .inner-box'));
        // 左右移动
        $('.promotion .promotion-content .inner-box').animate({
            'left':-index *1170
        },300)
    })


    /*二维码滑出效果 */
    $('.qr-code p').hover(function(){
        //让二维码滑出来  
        $('.qr-code div').stop(true).animate({
            left: '-100px'
        })
    },function(){
         //让二维码滑收回去
         $('.qr-code div').stop(true).animate({
            left: 0
        })
    })
    /*顶部搜索框交互 */
    $(document).scroll(function(){
        //获取到顶部的距离
        var topDistance=$('html,body').scrollTop();
        //判断
        if(topDistance>500){
            //如果滚动距离大于五百 滑下来
            $('.top-search-box').slideDown(300)
        }else{
            //如果滚动距离小于五百 收回去
            $('.top-search-box').slideUp(300)
        }
    })
    /*楼梯跳转 */
    $('.floor li').click(function(){
        //获取索引
        var index=$(this).index();
        //选中每一个板块到顶部的偏移
        var topOffset=$('.floorBox').eq(index).offset().top;   
        //让滚动条滚到这个位置
        $('html,body').animate({
            scrollTop:topOffset - 50
        })     
    })
})