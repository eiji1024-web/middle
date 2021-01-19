const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      1023: {
        slidesPerView: 4,
        centerdSlides: true,
        spaceBetween: 56,
      },
      599: {
        slidesPerView: 2.5,
        centerdSlides: true,
      },
    },
  }
);
