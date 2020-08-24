export default class Slider {
  constructor() {
    if (!this.setVars()) return;
  }
  
  setVars() {
    this.sliders = document.querySelectorAll('[data-slider]');
    if (!this.sliders) return;
    
    this.setSlider();
    return true;
  }
  
  setSlider () {
    
    this.sliders.forEach((item) => {
      console.log(item.querySelector('[data-slider-nav-prev]'));
      tns({
        container: item.querySelector('[data-slider-wrapper]'),
        prevButton: item.querySelector('[data-slider-nav-prev]'),
        nextButton: item.querySelector('[data-slider-navnext]'),
        controlsContainer: item.querySelector('[data-slider-navs]'),
        slideBy: 1,
        autoplayText: ['', ''],
        autoplay: true,
        mouseDrag: true,
        navPosition: 'bottom',
        responsive: {
          319: {
            items: 1,
          },
          640: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        }
      });
    });
  }
}
