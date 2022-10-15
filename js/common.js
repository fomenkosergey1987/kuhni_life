$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    $('.wr-seles-slots').slick({
        infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 2
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }

        }, {

            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: false
            }

        }, {

            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false
            }

        }]
    });

    $('.card-slider-1').slick({
        infinite: true,
        // slidesToShow: 4,
        // slidesToScroll: 2,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: 'linear',
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 2000,
                cssEase: 'linear',
            }

        }, {

            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: false
            }

        }, {

            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false
            }

        }]
    });

    $('.card-slider-2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    });



    $('.catalog-item').children('a').hover(
        function() {
            $(this).parent('.catalog-item').addClass('catalog-item-hover')
        },
        function(){
            $(this).parent('.catalog-item').removeClass('catalog-item-hover')
        }
    )

    $(".group2").colorbox({rel:'group2', transition:"fade", current: "фото {current} из {total}"});
    $(".group3").colorbox({rel:'group3', closeButton: false, transition:"fade", current: "фото {current} из {total}"});

    if($( document ).width()< 680) {
        $(".main-menu-list").accordion({
            header: "a",
            heightStyle: "content",
            active: -2
        });
    }

    $('.soc-btn-phone').click(
        function() {
            $('.order-bring').toggleClass('active');
            if ($('.order-bring').hasClass('active')){
                $('.order-bring').css('right', '0');
            }else{
                $('.order-bring').css('right', '-190px')
            }
        });
});
