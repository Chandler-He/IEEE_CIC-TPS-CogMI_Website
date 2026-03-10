/*
 * Template Name: Unify - Responsive Bootstrap Template
 * Description: Business, Corporate, Portfolio, E-commerce and Blog Theme.
 * Version: 1.7
 * Author: @htmlstream
 * Website: http://htmlstream.com
*/

var App = function () {
    //Fixed Header
    function handleHeader() {
         jQuery(window).scroll(function() {
            if (jQuery(window).scrollTop()>100){
                jQuery(".header-fixed .header-sticky").addClass("header-fixed-shrink");
            }
            else {
                jQuery(".header-fixed .header-sticky").removeClass("header-fixed-shrink");
            }
        });
    }

    //Header Mega Menu
    function handleMegaMenu() {
        jQuery(document).on('click', '.mega-menu .dropdown-menu', function(e) {
            e.stopPropagation();
        });

        // Mobile dropdown support (hover doesn't work on mobile)
        if (jQuery(window).width() <= 991) {
            // Toggle dropdown on click
            jQuery('.navbar-nav .dropdown > a').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                var $parent = jQuery(this).parent('.dropdown');

                if ($parent.hasClass('open')) {
                    $parent.removeClass('open');
                } else {
                    jQuery('.navbar-nav .dropdown').removeClass('open');
                    $parent.addClass('open');
                }
            });

            // Toggle navbar collapse on click
            jQuery('.navbar-toggle').on('click', function(e) {
                e.preventDefault();
                var $target = jQuery(jQuery(this).data('target'));
                $target.toggleClass('in');
            });

            // Close menu when clicking outside
            jQuery(document).on('click', function(e) {
                if (!jQuery(e.target).closest('.navbar').length) {
                    jQuery('.navbar-collapse').removeClass('in');
                    jQuery('.navbar-nav .dropdown').removeClass('open');
                }
            });
        }

        // Re-init on resize
        jQuery(window).on('resize', function() {
            if (jQuery(window).width() > 991) {
                jQuery('.navbar-nav .dropdown').removeClass('open');
            }
        });
    }

    //Search Box (Header)
    function handleSearch() {    
        jQuery('.search').click(function () {
            if(jQuery('.search-btn').hasClass('fa-search')){
                jQuery('.search-open').fadeIn(500);
                jQuery('.search-btn').removeClass('fa-search');
                jQuery('.search-btn').addClass('fa-times');
            } else {
                jQuery('.search-open').fadeOut(500);
                jQuery('.search-btn').addClass('fa-search');
                jQuery('.search-btn').removeClass('fa-times');
            }   
        }); 
    }

    //Search Box v1 (Header v5)
    function handleSearchV1() {
        jQuery('.header-v5 .search-button').click(function () {
            jQuery('.header-v5 .search-open').slideDown();
        });

        jQuery('.header-v5 .search-close').click(function () {
            jQuery('.header-v5 .search-open').slideUp();
        });

        jQuery(window).scroll(function(){
          if(jQuery(this).scrollTop() > 1) jQuery('.header-v5 .search-open').fadeOut('fast');
        });
    }

    //Sidebar Navigation Toggle
    function handleToggle() {
        jQuery('.list-toggle').on('click', function() {
            jQuery(this).toggleClass('active');
        });

        /*
        jQuery('#serviceList').on('shown.bs.collapse'), function() {
            jQuery(".servicedrop").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
        }

        jQuery('#serviceList').on('hidden.bs.collapse'), function() {
            jQuery(".servicedrop").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
        }
        */
    }

    //Equal Height Columns    
    function handleEqualHeightColumns() {
        var EqualHeightColumns = function () {            
            $(".equal-height-columns").each(function() {
                heights = [];              
                $(".equal-height-column", this).each(function() {
                    $(this).removeAttr("style");
                    heights.push($(this).height()); // write column's heights to the array
                });
                $(".equal-height-column", this).height(Math.max.apply(Math, heights)); //find and set max
            });
        }

        EqualHeightColumns();        
        $(window).resize(function() {            
            EqualHeightColumns();
        });
        $(window).load(function() {
            EqualHeightColumns("img.equal-height-column");
        });
    }    

    //Hover Selector
    function handleHoverSelector() {
        $('.hoverSelector').on('hover', function(e) {        
            $('.hoverSelectorBlock', this).toggleClass('show');
            e.stopPropagation();            
        });
    }    

    //Bootstrap Tooltips and Popovers
    function handleBootstrap() {
        /*Bootstrap Carousel*/
        jQuery('.carousel').carousel({
            interval: 15000,
            pause: 'hover'
        });

        /*Tooltips*/
        jQuery('.tooltips').tooltip();
        jQuery('.tooltips-show').tooltip('show');      
        jQuery('.tooltips-hide').tooltip('hide');       
        jQuery('.tooltips-toggle').tooltip('toggle');       
        jQuery('.tooltips-destroy').tooltip('destroy');       

        /*Popovers*/
        jQuery('.popovers').popover();
        jQuery('.popovers-show').popover('show');
        jQuery('.popovers-hide').popover('hide');
        jQuery('.popovers-toggle').popover('toggle');
        jQuery('.popovers-destroy').popover('destroy');
    }

    return {
        init: function () {
            handleBootstrap();
            handleSearch();
            handleSearchV1();
            handleToggle();
            handleHeader();
            handleMegaMenu();
            handleHoverSelector();
            handleEqualHeightColumns();
        },

        //Scroll Bar 
        initScrollBar: function () {
            jQuery('.mCustomScrollbar').mCustomScrollbar({
                theme:"minimal",
                scrollInertia: 300,
                scrollEasing: "linear"
            });
        },

        //Counters 
        initCounter: function () {
            jQuery('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        },

        //Parallax Backgrounds
        initParallaxBg: function () {
             jQuery(window).load(function() {
                jQuery('.parallaxBg').parallax("50%", 0.2);
                jQuery('.parallaxBg1').parallax("50%", 0.4);
            });
        },

        //Animate Dropdown
        initAnimateDropdown: function () {
            console.log('=== DROPDOWN INIT DEBUG ===');
            console.log('Window width:', jQuery(window).width());
            console.log('Dropdown elements found:', jQuery('.navbar-nav .dropdown').length);
            console.log('Toggle elements found:', jQuery('.navbar-nav .dropdown > a[data-toggle="dropdown"]').length);

            // List all dropdown elements
            jQuery('.navbar-nav .dropdown > a[data-toggle="dropdown"]').each(function(i) {
                console.log('Dropdown ' + i + ':', jQuery(this).text().trim());
            });

            function DesktopMenuMode() {
                console.log('Desktop menu mode activated');
                jQuery('.dropdown').on('show.bs.dropdown', function(e){
                    jQuery(this).find('.dropdown-menu').first().stop(true, true).slideDown();
                });
                jQuery('.dropdown').on('hide.bs.dropdown', function(e){
                    jQuery(this).find('.dropdown-menu').first().stop(true, true).slideUp();
                });
            }

            function MobileMenuMode() {
                console.log('=== MOBILE MODE ACTIVATED ===');

                // Simple test - just add click handler to ALL dropdown links
                jQuery('.navbar-nav .dropdown > a').off('click.debugMobile').on('click.debugMobile', function(e) {
                    console.log('=== ANY DROPDOWN CLICKED ===');
                    console.log('Element clicked:', jQuery(this).text().trim());
                    console.log('Element HTML:', jQuery(this).prop('outerHTML'));
                    console.log('Parent classes:', jQuery(this).parent().attr('class'));

                    e.preventDefault();
                    e.stopPropagation();

                    var $parent = jQuery(this).parent();
                    var $menu = $parent.find('.dropdown-menu');

                    console.log('Menu element found:', $menu.length > 0);
                    console.log('Current open state:', $parent.hasClass('open'));

                    // Simple toggle
                    if ($parent.hasClass('open')) {
                        $parent.removeClass('open');
                        console.log('Removed open class');
                    } else {
                        // Close all others
                        jQuery('.navbar-nav .dropdown').removeClass('open');
                        // Open this one
                        $parent.addClass('open');
                        console.log('Added open class');
                    }

                    console.log('New open state:', $parent.hasClass('open'));
                    console.log('=== END CLICK HANDLER ===');
                });

                // Navbar toggle
                jQuery('.navbar-toggle').off('click.debugMobile').on('click.debugMobile', function(e) {
                    console.log('=== NAVBAR TOGGLE CLICKED ===');
                    e.preventDefault();

                    var $target = jQuery(jQuery(this).data('target'));
                    console.log('Target element:', $target.length);
                    console.log('Current state:', $target.hasClass('in'));

                    if ($target.hasClass('in')) {
                        $target.removeClass('in');
                        jQuery(this).attr('aria-expanded', 'false');
                        console.log('Navbar closed');
                    } else {
                        $target.addClass('in');
                        jQuery(this).attr('aria-expanded', 'true');
                        console.log('Navbar opened');
                    }
                });
            }

            function initMenuMode() {
                console.log('=== INIT MENU MODE ===');
                var width = jQuery(window).width();
                console.log('Current width:', width);

                // Clean up first
                jQuery('.navbar-nav .dropdown > a').off('.debugMobile');
                jQuery('.navbar-toggle').off('.debugMobile');
                jQuery('.dropdown').off('show.bs.dropdown hide.bs.dropdown');

                if (width > 768) {
                    console.log('Activating desktop mode');
                    DesktopMenuMode();
                } else {
                    console.log('Activating mobile mode');
                    MobileMenuMode();
                }
            }

            jQuery(window).resize(function(){
                initMenuMode();
            });

            initMenuMode();
        },

    };

}();