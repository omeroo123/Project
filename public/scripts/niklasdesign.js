/**
 * niklasdesign.js
 *
 * global $: false;
 * global window: false;
 */
(function(){
  "use strict";

$(function ($) {
    $(document).ready(function(){
        $('.bxslider').bxSlider();
      });

    /* oh, Gott, die mobile Navigation */
    $('.mobile-toggle').click(function() {
        if ($('.main-nav').hasClass('open-nav')) {
            $('.main-nav').removeClass('open-nav');
            $('.masthead').removeClass('revealed');
        } else {
            $('.main-nav').addClass('open-nav');
            $('.masthead').addClass('revealed');
        }
    });

    $('.mobile-toggle').mouseenter(function() {
        if ($('.main-nav').hasClass('open-nav')) {
            $('.main-nav').removeClass('open-nav');
            $('.masthead').removeClass('revealed');
        } else {
            $('.main-nav').addClass('open-nav');
            $('.masthead').addClass('revealed');
        }
    });

    // $('.main-nav li a').click(function() {
    //     if ($('.main-nav').hasClass('open-nav')) {
    //         $('.navigation').removeClass('open-nav');
    //         $('.main-nav').removeClass('open-nav');
    //     }
    // });

    $('.mastwrap').click(function(){
            $('.main-nav').removeClass('open-nav');
            $('.masthead').removeClass('revealed');
    })

    //Navigation Sub Menu Triggering
    $('.trigger-sub-nav').click(function(){
        $('.sub-nav').slideUp('fast');
        $(this).find('.sub-nav').slideDown('slow');
    })

    /* initialize equalheights */

    var widthofscreen = $(window).width();

    $(window).load(function(){
        if (widthofscreen > 990) {
            //EqualHeights triggering via JS for viewports > 990px
            $('.equal-height').setAllToMaxHeight();
            $('.news-item').setAllToMaxHeight();
            $('.about-content-split').setAllToMaxHeight();
        } else {
            //If EqualHeights are not being triggered, then Height is not fixed value. So we are removing '.valign' (vertical align) on all COL-* Elements (Bootstrap Columns) when viewed on viewports width < 990px
            $('.equal-height').find('.valign').removeClass('valign');
            $('.news-item').find('.valign').removeClass('valign');
            $('.about-content-split').find('.valign').removeClass('valign');
        }

        /*
         * isotope initialization
         * toodoo: do we need that?
         */
        var $container = $('.works-container');

        $container.isotope({
          // options
          itemSelector: '.works-item',
          layoutMode: 'masonry'
        });

        $('.works-filter li a').click(function(){
        $('.works-filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
              $('.works-container').isotope({ filter: selector });
              return false;
        });
    });

    $( window ).resize(function() {

        if (widthofscreen > 990) {
            //EqualHeights triggering via JS for viewports > 990px
            $('.equal-height').setAllToMaxHeight();
            $('.news-item').setAllToMaxHeight();
            $('.about-content-split').setAllToMaxHeight();
        } else {
            //If EqualHeights are not being triggered, then Height is not fixed value. So we are removing '.valign' (vertical align) on all COL-* Elements (Bootstrap Columns) when viewed on viewports width < 990px
            $('.equal-height').find('.valign').removeClass('valign');
            $('.news-item').find('.valign').removeClass('valign');
            $('.about-content-split').find('.valign').removeClass('valign');
        }

        /**
         * isotopte
         * toodoo: do we need that?


        $container.isotope({
            // options
            itemSelector: '.works-item',
            layoutMode: 'masonry'
        });
        */

    });


    /* ugly viewport dimension detection, die! */

    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();

     //Adjusting Intro Components Spacing based on detected screen resolution
     $('.fullwidth').css('height',vW);
     $('.fullheight').css('height',vH);
     $('.halfheight').css('height',vH/2);
     $('.halfwidth').css('width',vW/2);

    //Mobile Menu (multi level)
    $('ul.slimmenu').slimmenu({
        resizeWidth: '1200',
        collapserTitle: 'menu',
        easingEffect:'easeInOutQuint',
        animSpeed:'medium',
    });

    /**
     * venobox initialization
     * toodoo: do we need that?
     */
    $('.venobox, .image-lightbox-link').venobox({
        numeratio: true,
        bgcolor: '#fff',
        closeBackground: '#000',
        closeColor: '#fff',
        overlayColor: 'rgba(255,255,255,1)',
        spinner: 'three-bounce'

    });
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends
