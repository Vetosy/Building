import Swiper, {
  Navigation,
  Pagination,
  Thumbs,
  Autoplay
} from "swiper";

Swiper.use([Navigation, Pagination, Thumbs, Autoplay]);

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue('--grid-gap'));
const speed = bodyStyle.getPropertyValue('--hero-slider-speed')


const heroSlider = document.querySelector('.hero-slider')
const heroSliderSpeed = 1000;
document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms')

if (heroSlider) {
  const heroItems = new Swiper(heroSlider, {
    slidesPerView: 1,
    speed: heroSliderSpeed,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
    pagination: {
      el: '.hero__pag',
      type: 'bullets',
      clickable: true,
    },
    on: {
      init: function () {
        const paginationBullets = document.querySelectorAll('.hero__pag .swiper-pagination-bullet')

        paginationBullets.forEach(el => {
          el.innerHTML = `<span class="hero__bar"></span>`
        })

      }
    }
  });
}

const portfolioSectionItems = document.querySelector('.portfolio-section__items')

if (portfolioSectionItems) {
  const portfolioSlider = new Swiper(portfolioSectionItems, {
    slidesPerView: 1,
    spaceBetween: gap,
    loop: false,
    navigation: {
      nextEl: '.portfolio-section__next',
      prevEl: '.portfolio-section__prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    }
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
    slidesPerView: 1,
    spaceBetween: gap,
    loop: false,
    navigation: {
      nextEl: '.related-projects__next',
      prevEl: '.related-projects__prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    }
  });
}

const workImages = document.querySelector('.work-images-slider');

if (workImages) {
  const workSlider = new Swiper('.work-images-nav', {
    spaceBetween: 20,
    slidesPerView: 3,
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


const similarprojectsItems = document.querySelector('.similar-projects__items')

if (similarprojectsItems) {
  const similarprojectsSlider = new Swiper(similarprojectsItems, {
    slidesPerView: 1,
    spaceBetween: gap,
    loop: false,
    navigation: {
      nextEl: '.similar-projects__next',
      prevEl: '.similar-projects__prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3,
      }
    }
  });
}

const historySlider = document.querySelector('.history-slider');
let history;

if (historySlider) {
  history = new Swiper(historySlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.history__next',
      prevEl: '.history__prev',
    },
  });

  history.on('slideChange', function () {
    if (history && history.realIndex !== undefined) {
      console.log(history.realIndex);
      historyBtns.forEach((el) => {
        el.classList.remove('history-nav__btn--active');
      });
      document
        .querySelector(
          `.history-nav__btn[data-index="${history.realIndex}"]`
        )
        .classList.add('history-nav__btn--active');
    }
  });

  const historyBtns = document.querySelectorAll('.history-nav__btn');

  historyBtns.forEach((el, idx) => {
    el.setAttribute('data-index', idx);

    el.addEventListener('click', (e) => {
      const index = e.currentTarget.dataset.index;

      historyBtns.forEach((el) => {
        el.classList.remove('history-nav__btn--active');
      });

      e.currentTarget.classList.add('history-nav__btn--active');

      if (history) {
        history.slideTo(index);
      }
    });
  });
}
