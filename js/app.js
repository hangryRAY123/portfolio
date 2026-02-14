document.querySelectorAll(".slider").forEach((n, i) => {
  window[`slider${i + 1}`] = new Swiper(n, {
    freeMode: {
      enabled: true,
      momentumBounce: true,
      momentumBounceRatio: 1,
    },
    spaceBetween: 100,   
    // centeredSlides: true,
    direction: "vertical",
    mousewheel: {
      sensitivity: 10, // увеличиваем скорость прокрутки
    },
    slidesPerView: 2.5,
    // resistanceRatio: 0.5, 
  });
});
bindSwipers(slider1, slider2);
