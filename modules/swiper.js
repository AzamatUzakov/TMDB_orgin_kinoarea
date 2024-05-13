var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },   navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });