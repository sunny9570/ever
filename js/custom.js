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
        loof: true,

    })

    // $('#bgndVideo').YTPlayer({
    //     videoURL: 'https://youtu.be/Sxf3GovRy-4',
    //     containment: '.main_movie',
    //     // 아래 뒤에 값 없애고 showControls: false더하면 유투브재생버튼없어짐
    //     showControls: false,
    //     playOnlyIfVisible: true,
    //     // playOnlyIfVisible동영상이 돌아갈때만 재생

    // });

    // let sw = true;

})