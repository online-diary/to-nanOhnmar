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
          $('.decor_container img').each(function () {
               let topRand = function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
               }
               let leftRand = function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
               }
               $(this).css({
                    'position': 'absolute',
                    'top': `${topRand(0, 250)}px`,
                    'left': `${leftRand(0, 90)}%`,
               });
               $(this).animate({
                    'top': `+=${topRand(0, 700)}px`,
               }, 5000, () => {
                    $('.up').animate({
                         top: '50%'
                    }, 2000)
               })
          })
     });

     $('.up').click(function () {
          $('.cake').remove();
          $('body').css({
               'overflow': 'auto'
          })
     })




})