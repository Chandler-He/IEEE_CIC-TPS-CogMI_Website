// Fix for mobile dropdown/collapse issues
$(document).ready(function() {
    // Enable touch support for Bootstrap collapse
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        // Add touch-friendly behavior for accordion panels
        $('.panel-title-elegant a, .sub-panel-title a').on('touchstart', function(e) {
            // Prevent double-tap zoom
            e.preventDefault();
            // Trigger click after a short delay to ensure proper touch handling
            var $this = $(this);
            setTimeout(function() {
                $this.trigger('click');
            }, 10);
        });
        
        // Fix for nested panels
        $('.sub-panel-title a').on('touchend', function(e) {
            e.stopPropagation();
        });
        
        // Add explicit touch event handling for collapse functionality
        $('[data-toggle="collapse"]').each(function() {
            var $this = $(this);
            var targetId = $this.attr('href') || $this.data('target');
            
            $this.on('touchstart', function(e) {
                e.preventDefault();
                var $target = $(targetId);
                
                if ($target.hasClass('in') || $target.hasClass('show')) {
                    $target.collapse('hide');
                    $this.addClass('collapsed').attr('aria-expanded', 'false');
                } else {
                    $target.collapse('show');
                    $this.removeClass('collapsed').attr('aria-expanded', 'true');
                }
            });
        });
    }
    
    // Additional fix for iOS Safari
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        $('body').addClass('ios-device');
        
        // Ensure proper cursor behavior on iOS
        $('.panel-title-elegant a, .sub-panel-title a').css('cursor', 'pointer');
        
        // Fix for iOS Safari's click delay
        $('.panel-title-elegant a, .sub-panel-title a').on('touchend', function(e) {
            if (!$(this).data('clicked')) {
                $(this).data('clicked', true);
                var self = this;
                setTimeout(function() {
                    $(self).removeData('clicked');
                }, 300);
                $(this).trigger('click');
            }
            e.preventDefault();
        });
    }
    
    // Ensure proper ARIA attributes on collapse events
    $('.panel-collapse, .sub-panel .panel-collapse').on('show.bs.collapse', function () {
        var $toggle = $('[href="#' + this.id + '"], [data-target="#' + this.id + '"]');
        $toggle.removeClass('collapsed').attr('aria-expanded', 'true');
    }).on('hide.bs.collapse', function () {
        var $toggle = $('[href="#' + this.id + '"], [data-target="#' + this.id + '"]');
        $toggle.addClass('collapsed').attr('aria-expanded', 'false');
    });
});