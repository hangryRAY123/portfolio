document.querySelectorAll('.slider').forEach((n, i) => {
  window[`slider${i + 1}`] = new Swiper(n, {
    freeMode: true,
    // centeredSlides: true,
    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 2.5,
  });
});
bindSwipers(slider1, slider2);
