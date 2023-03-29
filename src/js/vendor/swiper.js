import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue("--grid-gap"));

const portfolioSlider = new Swiper(".portfolio-section__items", {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: ".portfolio-section__next",
    prevEl: ".portfolio-section__prev",
  },
});
