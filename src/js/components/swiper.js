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


  const similarprojectsItems = document.querySelector('.similar-projects__items')

  if (similarprojectsItems) {
    const similarprojectsSlider = new Swiper(similarprojectsItems, {
      slidesPerView: 3,
      spaceBetween: gap,
      loop: false,
      navigation: {
        nextEl: '.similar-projects__next',
        prevEl: '.similar-projects__prev',
      },
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
