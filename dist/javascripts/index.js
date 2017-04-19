$(function() {
    floot.init();
    fixeds.init();
})

//轮播图
let floot = {
    init() {
        // 切换title
        floot.tab($('#fsFloorNav1 li'), $('#fsFloorCont1 .floorContRight'));
        floot.tab($('#fsFloorNav2 li'), $('#fsFloorCont2 .floorContRight'));
        // 点点生成
        floot.spot($('#floorBanner>li'), $(".spot"));
        floot.spot($('#floorBanner2>li'), $(".spot2"));
        floot.spot($('.fsBannerCenter li'), $(".fsBannerFot"));
        // 轮播图
        floot.spotbtn($(".spot a"), $('#floorBanner li'), $('#fb1>.content'));
        floot.spotbtn($(".spot2 a"), $('#floorBanner2 li'), $('#fb2>.content'));
        floot.spotbtn($(".fsBannerFot a"), $('.fsBannerCenter li'));

    },
    tab(b, t) { //切换
        let _idx = 0;
        b.on('mouseover', function() {
            _idx = $(this).index()
            $(this).addClass('hover').siblings().removeClass('hover');
            t.eq(_idx).removeClass('none').siblings('.floorContRight').addClass('none');
        })
    },
    spotbtn(spot, ban, con = null) { //万能轮播图
        let _index = 0;
        let timeStop = null;
        // 图片播放
        spot.eq(0).addClass("hover");
        spotPlay();

        spot.hover(function() { //鼠标小点
            clearInterval(timeStop);
            _index = $(this).index();
            autoPlay();
        }, function() {
            spotPlay();
        });

        function spotPlay() { //自动播放
            timeStop = setInterval(function() {
                _index++;
                // console.log(_index)
                if (_index == spot.length) {
                    _index = 0;
                }
                autoPlay()
            }, 2000);
        }

        function autoPlay() { //d=小点 b=图片 t=解释 
            spot.eq(_index).addClass("hover").siblings().removeClass("hover");
            // alert(ban.eq(_index).get(0).tagName);
            // alert(ban.eq(_index).find('img').get(0).tagName);
            if (con != null) {
                ban.eq(_index).fadeIn().siblings('li').hide();
                con.eq(_index).fadeIn().siblings('.content').hide();
            } else {
                ban.eq(_index).fadeIn().siblings('li').hide().find('img').removeClass('add');
                ban.eq(_index).find('img').not('.zhe,.ddq').addClass('add');

                switch (_index) {
                    case 1:
                        ban.find('.zhe').addClass('rightLogo');
                        ban.parent().css('background', 'rgb(153,0,3)');
                        break;
                    case 2:
                        ban.find('.ddq').addClass('rightLogo');
                        ban.find('.zhe').removeClass('rightLogo');
                        ban.parent().css('background', 'rgb(45,217,239)');
                        break;
                    default:
                        ban.parent().css('background', 'rgb(237, 84, 6)');
                        ban.find('.ddq').removeClass('rightLogo');

                }
            }
        }
    },
    spot(li, spot) { //轮播图的点点
        let banLen = li.length;
        var _html = "";
        for (var i = 0; i < banLen; i++) {
            _html += "<a href='javascript:void(0)'></a>"
        }
        spot.html(_html);
    },
}

// 顶部盒子
let fixeds = {
    init() {
        $(window).scroll(function() {
            fixeds.fixBox();
            fixeds.backTopZoom();

        });
        $(".backTopZoom .top").click(function() {
            $("body,html").animate({
                scrollTop: 0
            }, 500)
        });
    },
    fixBox() {
        let _top = $(window).scrollTop(); //窗口滚动的高度
        let _height = $('.fsBanner').height(); //盒子的高度
        if (_top > _height) { //滚动的高度大于盒子的高度添加固定
            $('.topSearch').addClass('fixBox');
        } else {
            $('.topSearch').removeClass('fixBox');
        }
    },
    backTopZoom() {
        let _top = $(window).scrollTop(); //窗口滚动的高度
        let _height = $('.fsBanner').height(); //盒子的高度
        // document.title = _top;
        if (_top > _height) {
            $('.backTop').fadeIn();
        } else {
            $('.backTop').fadeOut();

        }

    }
}