import Choices from 'choices.js';

const selects = document.querySelectorAll('.form-field__select');

selects.forEach(el => {
  new Choices(el, {
    allowHTML: true,
    shouldSort: false,
    position: 'bottom',
    searchEnabled: false,
  });
})
