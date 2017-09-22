$(document).ready(function(){
  $('.hamburger').click(function(){
      $('nav.menu-topo ul').toggleClass('open');
      $('.hamburger').toggleClass('is-active');
  });
  $('.slider, .slider-mobile').slick({
    dots: true
  });
  $(window).scroll(function () {
      var altura = $(window).scrollTop() + $(window).height();
      if (altura >= $('footer').position().top) {
          $('nav.menu').css('position', 'relative');
      } else {
          $('nav.menu').css('position', 'fixed');
      }
  });
})
