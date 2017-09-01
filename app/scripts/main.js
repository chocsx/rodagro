$(document).ready(function(){
  $('.hamburger').click(function(){
      $('nav.menu-topo ul').toggleClass('open');
      $('.hamburger').toggleClass('is-active');
  });
  $('.slider').slick({
    dots: true
  });
})
