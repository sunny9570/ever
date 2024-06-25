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

})