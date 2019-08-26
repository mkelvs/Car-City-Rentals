// swiper
var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

$(".heading").hide().fadeIn(2000);
$(".btn-1").click(function() {
  $(".heading").slideUp(1000);
  $("#main-page").fadeOut(100).fadeIn(500).removeClass("bg-img").addClass("bg-fleet");
  $(".swiper-container").removeClass("hidden");
})
