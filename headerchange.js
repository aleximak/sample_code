jQuery(function() {
    //caches a jQuery object containing the header element
    var header = jQuery("#masthead");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 100) {
            header.addClass("header-stick");
        } else {
            header.removeClass("header-stick");
        }
    });
});


jQuery(function() {
    //caches a jQuery object containing the header element
    var header = jQuery(".top-wrap");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 100) {
            header.addClass("topbar-hide");
        } else {
            header.removeClass("topbar-hide");
        }
    });
});

jQuery(function() {
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height()-200;
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } 
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
});

