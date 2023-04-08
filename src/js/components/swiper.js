  import Swiper, {
    Navigation,
    Thumbs
  } from 'swiper';

  Swiper.use([Navigation, Thumbs]);

  const bodyStyle = window.getComputedStyle(document.body);
  const gap = parseInt(bodyStyle.getPropertyValue('--grid-gap'));

  const portfolioSectionItems = document.querySelector('.portfolio-section__items')

  if (portfolioSectionItems) {
    const portfolioSlider = new Swiper(portfolioSectionItems, {
      slidesPerView: 3,
      spaceBetween: gap,
      loop: false,
      navigation: {
        nextEl: '.portfolio-section__next',
        prevEl: '.portfolio-section__prev',
      },
    });
  }

  const testimonialsItems = document.querySelector('.testimonials__items')

  if (testimonialsItems) {
    const testimonialsSlider = new Swiper(testimonialsItems, {
      slidesPerView: 1,
      spaceBetween: gap,
      loop: true,
      navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
      },
    });
  }

  const relatedprojectsItems = document.querySelector('.related-projects__items')

  if (relatedprojectsItems) {
    const relatedprojectsSlider = new Swiper(relatedprojectsItems, {
      slidesPerView: 3,
      spaceBetween: gap,
      loop: false,
      navigation: {
        nextEl: '.related-projects__next',
        prevEl: '.related-projects__prev',
      },
    });
  }

  const workImages = document.querySelector('.work-images-slider');

  if (workImages) {
    const workSlider = new Swiper('.work-images-nav', {
      spaceBetween: 20,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        576: {
          slidesPerView: 6
        },
        768: {
          slidesPerView: 10,
        }
      }
    });
    const workSlidesNav = new Swiper(workImages, {
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".work-images__next",
        prevEl: ".work-images__prev",
      },
      thumbs: {
        swiper: workSlider,
      },
    });
  }
