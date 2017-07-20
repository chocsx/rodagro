$(document).ready(function(){
  $('.hamburger').click(function(){
      $('nav.menu-topo').toggleClass('open');
      $('.hamburger').toggleClass('is-active');
  });
})