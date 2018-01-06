// import '../vendors/css/normalize.css';
// import '../vendors/css/grid.css';
import '../css/style.scss';
import 'jquery';
import './waypoints';


$(document).ready(function () {

    var width = $(window).width();

    var offset = 0;
    if (width < 768)
        offset = 60

    // $(window).on('resize', function () {

    //     var display = $('.main-nav').css('display');
    //     console.log('display:::', display);
    //     if (width > 768 && display === 'none') {
    //         $('.main-nav').css('display', 'block');
    //         offset = 0;
    //     } else if (width < 768) {
    //         $('.main-nav').css('display', 'none');
    //         offset = 60;
    //     }
    //     console.log('offset::', offset);
    // });

    // for the sticky navigation
    $('#why').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav.sticky').css({
                visibility: 'visible',
                opacity: '1'
            });
        } else {
            $('nav.sticky').css({
                visibility: 'hidden',
                opacity: '0'
            });
        }
    }, {
        offset: '330px'
    });

    // scroll on buttons

    $('#hero-hungry').click(() => {

        $('html, body').animate({
            scrollTop: $('#plans').offset().top - offset
        }, 1000);

    });

    $('#hero-show-me').click(() => {
        $('html, body').animate({
            scrollTop: $('#why').offset().top - offset
        }, 500);
    });

    $(function () {
        $('a[href*=\\#]:not([href=\\#])').click(function () {
            console.log('location.pathname', location.pathname);

            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);

                console.log('location.pathname', location.pathname);
                console.log('location.hostname', location.hostname);
                console.log('target', target);
                target = target.length ? target : $('[name=]' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - offset
                    }, 1000);
                    return false;
                }
            }
        });
    });



    // Animation on scroll
    $('#why').waypoint(function () {
        $('#why .row .col').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('#steps').waypoint(function () {
        $('#steps .row .col').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

    $('#experience').waypoint(function () {
        $('#experience .row .col.left').addClass('animated bounceInLeft');
    }, {
        offset: '60%'
    });
    $('#experience').waypoint(function () {
        $('#experience .row .col.right ').addClass('animated bounceInRight');
    }, {
        offset: '60%'
    });


    $('#demo').waypoint(function () {
        $('#demo .row .col').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });


    $('#plans').waypoint(function () {
        $('#plans .row .col').addClass('animated pulse');
    }, {
        offset: '60%'
    });

    // mobile nav
    $('.js--nav-icon').click(function () {
        var nav = $('.main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            $('.sticky').addClass('expanded');


        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            $('.sticky').removeClass('expanded');

        }
    });




    // setInterval(function () {
    //     $('#letter-t').toggleClass('font-effect-neon');
    // }, 4000);
    // setInterval(function () {
    //     $('#letter-e').toggleClass('font-effect-neon');
    // }, 4000);
    // setInterval(function () {
    //     $('#letter-a').toggleClass('font-effect-neon');
    // }, 4000);
    // setInterval(function () {
    //     $('#letter-m').toggleClass('font-effect-neon');
    // }, 4000);

});