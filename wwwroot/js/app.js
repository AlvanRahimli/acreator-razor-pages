/**Navbar animatet button*/

$(document).ready(function () {

  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  
})

/* Change navbar styling on scroll */

$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });
});