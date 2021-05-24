

$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".header_navbar").removeClass("sticky");
            $(".navbar_transparent img").attr("src", "assets/images/logo.png");
        } else{
            $(".header_navbar").addClass("sticky");
            $(".navbar_transparent img").attr("src", "assets/images/logo.png");
        }
    });

    
    
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    
    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span></span> </button>';
        });
        
        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children('.sub-menu').slideToggle();
            return false
        });
        
    }
    
    
    //===== Slick Slider

        
        

    
    
    //====== Magnific Popup
    
    
    //===== Counter
    
    
    
    ///===== slick testimonial
    
    
    //===== 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});