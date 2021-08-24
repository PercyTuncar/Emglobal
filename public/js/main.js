/* Scripts */

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });
             
/*=========================================================================
	Sticky Header
=========================================================================*/
    function headerHeight(){
        var height = $("#header").height();
        $('.header-height').css('height', height+'px');
    }

	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 80;
        headerHeight();
        $(window).resize(headerHeight);
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("navbar-fixed-top animated slideInDown");
			} else {
				header.removeClass("navbar-fixed-top animated slideInDown");
			}

		});
	});

/*=========================================================================
    Mobile Menu
=========================================================================*/  
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true
    });
             
/*=========================================================================
    Projects Carousel
=========================================================================*/
    $('#project-carousel').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: true,
        responsive : {
            0 : {
                items: 1
            },
            580 : {
                items: 2,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 3,
            }
        }
    });
    
/*=========================================================================
    Case Studies Carousel
=========================================================================*/
    $('#case-details-carousel').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: true,
        responsive : {
            0 : {
                items: 1
            },
            580 : {
                items: 1,
            },
            768 : {
                items: 1,
            },
            992 : {
                items: 1,
            }
        }
    });

/*=========================================================================
    Testimonial Carousel
=========================================================================*/
    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        center: false,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 1,
            },
            768 : {
                items: 1,
            },
            992 : {
                items: 1,
            }
        }
    });

/*=========================================================================
    Testimonial Carousel 2
=========================================================================*/
    $('#testimonial-carousel-2').owlCarousel({
        loop: true,
        margin: 10,
        center: false,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 3,
            }
        }
    });
             
/*=========================================================================
    Sponsor Carousel
=========================================================================*/
    $('#sponsor-carousel').owlCarousel({
        loop: true,
        margin: 15,
        center: false,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: false,
        responsive : {
            0 : {
                items: 2
            },
            480 : {
                items: 3,
            },
            768 : {
                items: 3,
            },
            992 : {
                items: 6,
            }
        }
    });
             
/*=========================================================================
	Odometer JS
=========================================================================*/
    $('.odometer').waypoint(
        function() {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        },
        {
            offset: "80%",
            triggerOnce: true
        }
    );

/*=========================================================================
	Popup Search Box
=========================================================================*/
	$(function () {
		$('#dl-popup-search-box').removeClass('toggled');

		$('.dl-search-icon').on('click', function (e) {
			e.stopPropagation();
			$('#dl-popup-search-box').toggleClass('toggled');
			$("#popup-search").focus();
		});

		$('#dl-popup-search-box input').on('click', function (e) {
			e.stopPropagation();
		});

		$('#dl-popup-search-box, body').on('click', function () {
			$('#dl-popup-search-box').removeClass('toggled');
		});
	});

/*=========================================================================
    Active Nice Select
=========================================================================*/    
  $('select').niceSelect();

/*=========================================================================
    Vdeo Background
=========================================================================*/
    $(".video-bg").YTPlayer();                              
             
/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});
	 
/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

/*=========================================================================
	WOW Active
=========================================================================*/ 
   new WOW().init();

/*=========================================================================
    Active venobox
=========================================================================*/
    $('.img-popup').venobox({
        numeratio: true,
        infinigall: true
    });

/*=========================================================================
	MAILCHIMP
=========================================================================*/ 

    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369" 
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };
    

})(jQuery);
