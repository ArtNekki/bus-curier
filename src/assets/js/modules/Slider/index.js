import Slider from './SliderComponent.js';

document.addEventListener('DOMContentLoaded', function () {
  // new Slider({ target: '#example-slider', settings: {
  //     slidesPerView: 1,
  //     spaceBetween: 1
  //   }});
  //
  // alert(1);
});

const exampleSlider = document.querySelector('#example-slider');

if (exampleSlider) {

  new Slider({ target: '#example-slider', settings: {
      slidesPerView: 1,
      spaceBetween: 1
    }});
}

const dataSlider = document.querySelectorAll('[data-slider]');

dataSlider.forEach((el) => {
  new Slider({ target: el, settings: {
      slidesPerView: 4,
      spaceBetween: 30
    }});
});