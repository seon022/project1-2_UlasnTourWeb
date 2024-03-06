// 본문1 메인슬라이드
$('.main_slide_wrap').slick({
    infinite: true,
    prevArrow: '.ms_btn .ms_prev',
    nextArrow: '.ms_btn .ms_next',
    dots: true,
    appendDots: '.ms_pager',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
});

// 본문3 탭
$('.m3_cate p').click(function (e) {
    e.preventDefault();
    $('.m3_cate p').removeClass('active');
    $('.m3_list').removeClass('active');
    let i = $(this).index();
    $(this).addClass('active');
    $('.m3_wrap > div').eq(i).addClass('active');
});

// 본문4 배너 슬라이드
$('.m4_list_wrap').slick({
    infinite: true,
    prevArrow: '.m4_btns .m4_prev',
    nextArrow: '.m4_btns .m4_next',
    dots: true,
    appendDots: '.m4_btns .m4_pager',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
});
$('.m4_pause').click(function () {
    $(this).hide();
    $('.m4_play').show();
    $('.m4_list_wrap').slick('slickPause');
});

$('.m4_play').click(function () {
    $(this).hide();
    $('.m4_pause').show();
    $('.m4_list_wrap').slick('slickPlay');
});
