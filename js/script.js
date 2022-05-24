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
    let submenu_a = $('.submenu a');
    $(document).ready(function ($) {

        $(gnb_a).click(function (event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).stop().offset().top - 100
            }, 500);

        });
        $(submenu_a).click(function (event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).stop().offset().top - 100
            }, 500);

        });

    });
    // let menu_ham = $('.icon-menu');
    let submenu = $('.submenu');
    // let submenu_i = $('.submenu > i');
    let navbar_toggler = $('.navbar-toggler');
    let navbar_collapse = $('.navbar-collapse');

    $(document).ready(function () {
        // $(".navbar-toggler").on('click', function () {
        //     $(this).toggleClass('active');
        // });
        // $(".navbar-toggler").on('click', function () {
        //     submenu.css('display', 'block');
        // });
        $('#btn').click(function(){
            $('.m-menu').toggleClass('m-menu-active');
        })
        
    });





    $(main_btn).click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).stop().offset().top - 100
        }, 500);

    });
    $(window).resize(function(){
        let w = $(window).width();
        if(w > 720) {
            $('.m-menu').removeClass('m-menu-active');
        }
    })


};

$(document).ready(function () {

});