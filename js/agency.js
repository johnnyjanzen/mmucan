/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function(){
    $('#Designation').on('change', function() {
      if ( this.value == '0')
      {
        console.log("0");
        $("#paypal-janzen").hide();
        $("#paypal-ksoc").hide();
        $("#paypal-humanitarian").hide();
        $("#paypal-general").show();
      }
      if ( this.value == '1')
      {
        console.log("1");
        $("#paypal-general").hide();

        $("#paypal-ksoc").hide();
        $("#paypal-humanitarian").hide();
        $("#paypal-janzen").show();
      }
      if ( this.value == '2')
      {
        console.log("2");
        $("#paypal-general").hide();
        $("#paypal-janzen").hide();

        $("#paypal-humanitarian").hide();
         $("#paypal-ksoc").show();
      }
      if ( this.value == '3')
        {
          console.log("3");
        $("#paypal-general").hide();
        $("#paypal-janzen").hide();
        $("#paypal-ksoc").hide();
        $("#paypal-humanitarian").show();
      }

    });
});
