/*global $, alert, console */

$(function () {

    'use strict';

    //Trigger nice scroll
   $('html').niceScroll();

    //adjuste header heigh
    $('.header').height($(window).height());

    //Scroll to Features
    $('.header .arrow i').click(function() {
        $('html, body').animate({
            scrollTop : $('.features').offset().top
        }, 1000);
    });

    //Scroll TO team
    $('.header #Us').click(function () {
        $('html, body').animate({
            scrollTop : $('.team').offset().top
        }, 1800); 
        console.log("Test");
    });

    //Show more Our Works
    $('.works .show').click(function () {
        $('.works .items-box .hidden').fadeIn(1000);
    });

    //testimonials slider
    var leftArrow = $('.testim .fa-chevron-left'),
        rightArrow = $('.testim .fa-chevron-right');

    function checkClient() {  
        $('.testim .client:first-of-type').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();   
        $('.testim .client:last-of-type').hasClass('active')  ? rightArrow.fadeOut() : rightArrow.fadeIn();
    };

    checkClient();

    $('.testim i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testim .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClient();
            });
        }else {
            $('.testim .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClient();
            });
        }
    });

    
});


