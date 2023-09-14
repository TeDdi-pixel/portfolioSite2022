const swiper = new Swiper(".image-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      //dynamicBullets: true,
    },
  });

//let arrow = document.querySelector('.down__arrow');
//let ddblock = document.querySelector('.dd__menu');
  
//arrow.addEventListener("click", () => {
  //  ddblock.classList.toggle("dd__menu_active");
//});
