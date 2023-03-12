$(document).ready(function () {
   $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
   });
   $('window').on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
   });
   $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
         scrollTop: $($(this).attr('href')).offset().top,
      },
         500,
         'linear'
      );
   });
});

var type = new Typed('.post',{
   strings : ['Web Designer','SEO Expert','Teacher','Front end developer'],
   typeSpeed:120,
   loop:true
});