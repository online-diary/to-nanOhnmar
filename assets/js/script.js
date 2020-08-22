$(document).ready(function () {
     $('body').css({
          'overflow': 'hidden'
     })

     $('.owl-carousel').owlCarousel({
          loop: false,
          items: 2,
          margin: 50,
          center: true,
          nav: false,
          dots: false
     });

     $('.light').click(function () {
          $('.lighting').fadeOut(300);
          $('body').css({
               'overflow': 'auto'
          })
     })
})