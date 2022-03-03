    // Testimonial Section
    if (jQuery('.wpex_02_testimonial-carousel').length) {
        jQuery('.wpex_02_testimonial-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    };



    //Masonary
    function enableMasonry() {
        if (jQuery('.masonry-gallery').length) {

            var winDow = jQuery(window);
            // Needed variables
            var jQuerycontainer = jQuery('.masonry-gallery .items-container');
            var jQueryfilter = jQuery('.filter-btns');

            jQuerycontainer.isotope({
                filter: '*',
                masonry: {
                    columnWidth: 0
                },
                animationOptions: {
                    duration: 500,
                    easing: 'linear'
                }
            });


            // Isotope Filter
            jQueryfilter.find('li').on('click', function() {
                var selector = jQuery(this).attr('data-filter');

                try {
                    jQuerycontainer.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 500,
                            easing: 'linear',
                            queue: false
                        }
                    });
                } catch (err) {

                }
                return false;
            });


            winDow.bind('resize', function() {
                var selector = jQueryfilter.find('li.active').attr('data-filter');

                jQuerycontainer.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
            });


            var filterItemA = jQuery('.filter-btns li');

            filterItemA.on('click', function() {
                var jQuerythis = jQuery(this);
                if (!jQuerythis.hasClass('active')) {
                    filterItemA.removeClass('active');
                    jQuerythis.addClass('active');
                }
            });
        }
    }

    jQuery(window).on('load', function() {
        enableMasonry();
    });