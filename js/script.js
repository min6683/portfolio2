window.onload = function () {
    let sw_cc = new Swiper('.sw-cc', {
        slidesPerView: 3,
        loop: false,
        pagination: {
            el: '.sw-cc-pg',
            clickable: true,
        },
        spaceBetween: 30,
    });
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );

    // 위로 가기
    let gotop = $('.gotop');
    gotop.click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

    let gnb_a = $('.gnb a');
    let main_btn = $('.main-btn');
    $(document).ready(function ($) {

        $(gnb_a).click(function (event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).stop().offset().top - 100
            }, 500);

        });

    });
    let menu_ham = $('.icon-menu');
    let submenu = $('.submenu');
    $(document).ready(function(){
        $(menu_ham).click(function(event){
            event.preventDefault()
            $('menu_ham').scrollTop('submenu');
        })
    })


    $(document).ready(function ($) {

        $(main_btn).click(function (event) {
            event.preventDefault();
            console.log(main_btn);
            $('html,body').animate({
                scrollTop: $(this.hash).stop().offset().top - 100
            }, 500);

        });

    });
};

$(document).ready(function () {

});