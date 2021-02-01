import Slider from './SliderComponent.js';
import { MediaQuery } from '../../utils/utils';

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
      slidesPerView: 1,
      spaceBetween: 15,
      breakpointsInverse: true,
      breakpoints: {
        // [MediaQuery.S]: {
        //   slidesPerView: 2,
        //   spaceBetween: 15
        // },
        [MediaQuery.SM]: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        [MediaQuery.MD]: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        [MediaQuery.LG]: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    }});
});
