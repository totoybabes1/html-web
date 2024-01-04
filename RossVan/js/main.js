jQuery(document).ready(function ($) {
    "use strict";

    $('#slider').ripples({
        dropRadius: 11,
        perturbance: 0.01,

    });
// text animation //
    $(".text").typed({
        strings: ["<strong>WE MAKE GOOD QUALITY</strong><strong class='primary'> DESIGN</strong>", "<strong>FOR</strong><strong class-'primary'> YOU!!</strong>"],
        typeSpeed: 1,
        loop: true
    });
});


    // Maginific Popup //
    $(document).ready(function() {
        $('.work.wow.bounceInUp').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by RossVan Tinapao Baling</small>';
                }
            }
        });

         $(document).ready(function() {
        $('.container.wow.bounceInLeft').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled:false,
                navigateByImgClick: true,
                preload: [0,1] //WILL PRELOAD 0 - BEFOER CURRENT, AND 1 AFTER THE CURRENT IMAGE
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by RossVan Tinapao Baling</small>';
                }
            }
        });

    // TEAMS MEMBERS//

        $('#team-members').owlCarousel({
            items: 1,
            autoplay:true,
            smartSpeed:10,
            loop: true,
            autoplayHoverPause:true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 10,
                },
                1000: {
                    items:5,
                }
            }
        });



//  Scrolltop Function //
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 60 && top < 1500) {
            $("nav").addClass('secondary');
        }
        else if (top >= 1500) {
            $("nav").addClass('third');
        }
        else
            if ($("nav").hasClass('secondary')) {
                $("nav").removeClass('secondary');
            }
            else if ($("nav").hasClass('third')) {
                $("nav").removeClass('third');
            }
    });
    
    
    //lobster//

    $("#lobster").click(function () {
        $("#text").css("font-family", "lobster")
    });
    
    //lobster//






    const body = document.body,
        jsScroll = document.getElementsByClassName('js-scroll')[0],
        height = jsScroll.getBoundingClientRect().height - 1,
        speed = 0.05

    var offset = 0

    body.style.height = Math.floor(height) + "px"

    function smoothScroll() {
        offset += (window.pageYOffset - offset) * speed

        var scroll = "translateY(-" + offset + "px) translateZ(0)"
        jsScroll.style.transform = scroll

        raf = requestAnimationFrame(smoothScroll)} smoothScroll()
    

    });

});