import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue("--grid-gap"));

const portfolioSlider = new Swiper(".portfolio-section__items", {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: false,
  navigation: {
    nextEl: ".portfolio-section__next",
    prevEl: ".portfolio-section__prev",
  },
});

const testimonialsSlider = new Swiper(".testimonials__items", {
  slidesPerView: 1,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: ".testimonials__next",
    prevEl: ".testimonials__prev",
  },
});
