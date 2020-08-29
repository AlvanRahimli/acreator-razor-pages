/*
* Theme Name: Gates
* Author: Okathemes
* Version: 1.0.0

/* Table of Content
================================================== 

    01. Sticky Header
	02. Main Menu
	03. Revolution slider
    04. Owl carousel
	05. Fancybox    
	06. Initialize Masonry
	07. Parallax Mobile
    08. Tabs
    09. Data Rel
    10. Tooltip
	11. Fact Counter
	12. Progress Bar
	13. Flick Feeds
    14. Preloader
	15. Pie Chart
	16. On to Top
	17. Header Search

*/

/*************AOS*********** */


  




// /* ====== ON DOCUMENT READY START ====== */ 
"use strict";
$(document).ready(function() {
						   
    
    $(window).trigger("resize");
    initWorkFilter();

    /* 01 Sticky Header
    ================================================== */

    var menu = $('.header-nav'),
        pos = menu.offset();

    $(window).scroll(function() {
        if ($(this).scrollTop() > pos.top + menu.height() && menu.hasClass('set') && $(this).scrollTop() > 100) {
            menu.fadeOut('fast', function() {
                $(this).removeClass('set').addClass('sticky').fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= pos.top + 100 && menu.hasClass('sticky')) {
            menu.fadeOut(0, function() {
                $(this).removeClass('sticky').addClass('set').fadeIn(0);
            });
        }
    });

    /* 02 Main Menu
    ================================================== */

    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();

    function stopPropagation(event) {
        event.stopPropagation();
    }

    $('.dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input').on("click", stopPropagation);

    /* 03 Revolution Slider
    ================================================== */

    jQuery('.banner').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 650,
        hideThumbs: 10
    });
    jQuery('.banner-full-height').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 950,
        hideThumbs: 10,
        fullWidth: "on"
    });

    /* 04 Owl Carousel
    ================================================== */

    $(".owlcarousel").owlCarousel({
        navigation: false,
        pagination: true,
        rewindNav: false,
        items: 3,
        mouseDrag: true,
        itemsDesktop: [1200, 3],
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [970, 2],
        itemsMobile: [767, 1]
    });

    $(".owlcarousel-full").owlCarousel({
        navigation: true,
        navigationText: ['<i class="icon-left-open"></i>', '<i class="icon-right-open"></i>'],
        pagination: false,
        rewindNav: true,
        autoPlay: false,
        items: 3,
        mouseDrag: true,
        itemsDesktop: [1200, 3],
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [970, 2],
        itemsMobile: [767, 1]
    });

    $(".owlcarousel-full2").owlCarousel({
        navigation: true,
        navigationText: ['<i class="icon-left-open"></i>', '<i class="icon-right-open"></i>'],
        pagination: false,
        rewindNav: false,
        items: 5,
        mouseDrag: true,
        itemsDesktop: [1200, 6],
        itemsDesktopSmall: [1024, 4],
        itemsTablet: [970, 2],
        itemsMobile: [767, 1]
    });

    $(".owl-testimonials").owlCarousel({
        rewindNav: true,
        items: 1,
        itemsDesktop: [1200, 1],
        itemsDesktopSmall: [1024, 1],
        itemsTablet: [768, 1],
        itemsMobile: [480, 1],
        navigation: false,
        pagination: true,
        autoPlay: 12000
    });

    $(".owl-clients").owlCarousel({

        autoPlay: 9000,
        rewindNav: true,
        items: 6,
        itemsDesktop: [1200, 6],
        itemsDesktopSmall: [1024, 4],
        itemsTablet: [768, 3],
        itemsMobile: [480, 2],
        navigation: false,
        pagination: false,
    });

    var owl = $(".owl-portfolio-slider");

    owl.owlCarousel({
        navigation: false,
        autoHeight: true,
        slideSpeed: 300,
        paginationSpeed: 300,
        singleItem: true,
        autoPlay: 4000,
        pagination: false,
    });

    function owlNext(event) {
        
        owl.trigger('owl.next');
    }

    function owlPrev(event) {

        owl.trigger('owl.prev');
    }
    // Custom Navigation Events
    $(".slider-next").on("click", owlNext);
    $(".slider-prev").on("click", owlPrev);

    /* 05 Fancy Box
    ================================================== */

    $(".fancybox").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: {
                width: 50,
                height: 50
            },
            title: {
                type: 'inside'
            }
        },
        beforeLoad: function() {
            var el, id = $(this.element).data('title-id');
            if (id) {
                el = $('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });

     /* 06 Initialize Masonry
    ================================================== */

    function init_masonry() {
        (function($) {
            $(".masonry").imagesLoaded(function() {
                $(".masonry").masonry();
            });

        })(jQuery);
    }

    /* 07 Parallax Mobiles
    ================================================== */

    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }

    /* 08 Tabs
    ================================================== */

    $('.tabs.services').easytabs({
        animationSpeed: 300,
        updateHash: false,
        cycle: 5000
    });

    $('.tabs.tabs-top, .tabs.tabs-side').easytabs({
        animationSpeed: 300,
        updateHash: false
    });

    /* 09 Data Rel
    ================================================== */
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });
	
    /* 10 Tooltip
    ================================================== */

    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }

    $('.hideme').bind('inview', function(event, visible) {
        if (visible === true) {
            var offset = $(this).offset();
            $(this).removeClass('hideme');
        }
    });
    $('.p-image-02').bind('inview', function(event, visible) {
        if (visible === true) {
            $('.dontHide').removeClass('hideme-slide');
        }
    });

    $('.newtr').bind('inview', function(event, visible) {
        if (visible === true) {
            $('.dontHide').removeClass('hideme-slide2');
        }
    });

    /* 11 Fact Counter
    ================================================== */

    /* Counter */
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,

                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        })
    };

    var count = 0;
    var dataperc;

    //mobile counter
    if ($(window).width() > 479) {
        $('.milestone-counter').bind('inview', function(event, visible) {
            if (visible === true & count === 0) {
                // element is now visible in the viewport
                count++;
                $('.milestone-counter').each(function() {
                    dataperc = $(this).attr('data-perc'),
                        $(this).find('.milestone-count').delay(6000).countTo({
                            from: 0,
                            to: dataperc,
                            speed: 2500,
                            refreshInterval: 80
                        });
                });
            } else {
                // element has gone out of viewport
            }
        });
    } else {
        $('.milestone-count.highlight').each(function() {
            $(this).html($(this).parent().attr('data-perc'))
        })
    }

    /* 12 Progress Bar
    ================================================== */

    initProgress('.progress');

    function initProgress(el) {
        jQuery(el).each(function() {
            var pData = jQuery(this).data('progress');
            progress(pData, jQuery(this));
        });
    }
	
    function progress(percent, $element) {
        var progressBarWidth = 0;

        (function myLoop(i, max) {
            progressBarWidth = i * $element.width() / 100;
            setTimeout(function() {
                $element.find('div').find('small').html(i + '%');
                $element.find('div').width(progressBarWidth);
                if (++i <= max) myLoop(i, max);
            }, 10)
        })(0, percent);
    }

    /* 13 Flick Feeds
    ================================================== */

    $('.photo-stream, .grayscale').flickrfeed('52617155@N08', '', {
        limit: 9,
        title: false,
        date: false
    });

    /* 14 Preloader
    ================================================== */
   
        $('.spinner').fadeOut(); // will first fade out the loading animation
        $('.loader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    

    /* 15 Pie chart
    ================================================== */

    $('.percentage-light').easyPieChart({
        barColor: function(percent) {
            percent /= 100;
            return "rgb(25, 185, 200)";
        },
        trackColor: 'rgba(225, 227, 229, 1)',
        scaleColor: false,
        lineCap: 'butt',
        rotate: 0,
        lineWidth: 5,
        animate: 5000,
        onStep: function(value) {
            this.$el.find('span').text(~~value);
        }
    });

    $('.updateEasyPieChart').on('click', function(e) {
        e.preventDefault();
        $('.percentage, .percentage-light').each(function() {
            $(this).data('easyPieChart').update(Math.round(100 * Math.random()));
        });
    });

    $('.plan').mouseenter(function() {
        $(this).closest('.pricing').find('.plan').removeClass('active');
        $(this).addClass('active');
    });
    
    /* 16 On to Top
    ================================================== */
    jQuery().UItoTop({
        easingType: 'easeInOutExpo'
    });

    /* 17 Header Search
    ================================================== */

    var searchBtn = $('#header-search-button'),
        searchPanel = $('#header-search-panel'),
        searchP = $('#header-search'),
        searchInput = searchPanel.find('input[type="text"]'),
        searchClose = searchPanel.find('.close-search');

    function searchBtnClick(event) {
        event.preventDefault();
        var _t = $(this);
        if (!_t.hasClass('active')) {
            searchPanel.fadeIn(300);
            _t.addClass('active');

        } else {
            _t.removeClass('active');
            searchPanel.fadeOut(300);
        }

    }

    function searchBtnClose(event) {
        searchBtn.removeClass('active');
        searchPanel.fadeOut(300);
    }

    searchBtn.on("click", searchBtnClick);

    searchClose.on("click", searchBtnClose);
	

// /* ====== ON DOCUMENT READY END ====== */
});


// Projects filtering
var fselector = 0;
var work_grid = $("#project-grid");

function filterWorks(event) {
    var isotope_mode;
    if (work_grid.hasClass("masonry")) {
        isotope_mode = "masonry";
    } else {
        isotope_mode = "fitRows"
    }
    $(".filter").removeClass("active");
    $(this).addClass("active");
    fselector = $(this).attr('data-filter');

    work_grid.isotope({
        itemSelector: '.mix',
        layoutMode: isotope_mode,
        filter: fselector
    });
    return false;
}

function initWorkFilter() {
    (function($) {
        var isotope_mode;
        if (work_grid.hasClass("masonry")) {
            isotope_mode = "masonry";
        } else {
            isotope_mode = "fitRows"
        }

        work_grid.imagesLoaded(function() {
            work_grid.isotope({
                itemSelector: '.mix',
                layoutMode: isotope_mode,
                filter: fselector
            });
        });

        $(".filter").on("click", filterWorks);

    })(jQuery);
}