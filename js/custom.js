$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });

    const mainVisualSlide = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },

    });

    $('#bgndVideo01').YTPlayer({
        videoURL: 'https://youtu.be/J-bJDSwTQMM',
        containment: '.main_movie01',
        showControls: false,
        playOnlyIfVisible: true,

    });

    $('#bgndVideo02').YTPlayer({
        videoURL: 'https://youtu.be/_-mmbLYbmic',
        containment: '.main_movie02',
        // 아래 뒤에 값 없애고 showControls: false더하면 유투브재생버튼없어짐
        showControls: false,
        playOnlyIfVisible: true,
        // playOnlyIfVisible동영상이 돌아갈때만 재생

    });

    // let sw = true;

    $('#bgndVideo03').YTPlayer({
        videoURL: 'https://youtu.be/xn7md_oi0pA',
        containment: '.main_movie03',
        showControls: false,
        playOnlyIfVisible: true,

    });

    const mainNewSlide = new Swiper('.main_new_slide', {
        loop: true,
        slidesPerView: 3,
        // spaceBetween: 30,
        navigation: {
            nextEl: '.main_new .arrows .next',
            prevEl: '.main_new .arrows .prev',
        },
    });


    const mainAttracLlide = new Swiper('.main_attraction .main_attrac_slide', {
        // slidesPerView: 5,
        slidesPerView: "auto",
        centeredSlides: true,
        // spaceBetween: 30,
        loop: true,



        on: {
            slideChangeTransitionStart: function () {
                $('.main_attraction .w_bg ').stop().animate({
                    backgroundPositionX: this.realIndex * 3000
                }, 1000);

                $('.main_attraction').css({
                    // backgroundImage: `url(../images/sea01.jpg)`
                });
                $('.main_attraction .tap_menu li').eq(this.realIndex).addClass('on').siblings().removeClass('on');

            }
        },

        navigation: {
            nextEl: '.main_attraction .arrows .next',
            prevEl: '.main_attraction .arrows .prev',

        },
    });


    $('.main_attraction .tap_menu button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_attraction .tap_con .ts')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')

        $(this).parent().addClass('on').siblings().removeClass('on');


        mainAttracLlide.slideToLoop(idx)
    });


    $('.left_slide').slick({

        arrows: false,
        fade: true,
        asNavFor: '.right_slide'
    });

    $('.right_slide').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.left_slide',
    });

    $('.main_two_slide .arrows .prev').on('click', function () {
        $('.left_slide').slick('slickPrev')
    });
    $('.main_two_slide .arrows .next').on('click', function () {
        $('.left_slide').slick('slickNext')
    });

    $('.main_customer .notice .notice_menu button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_customer .notice .notice_content>ul')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');

        $(this).parent().addClass('on').siblings().removeClass('on')
    });

    AOS.init();

});


$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        let secOffset = $('.main_customer').offset().top;

        if (sct > secOffset - 200) {
            $('.main_customer').addClass('on')
        } else {
            $('.main_customer').removeClass('on')
        }
    })
})