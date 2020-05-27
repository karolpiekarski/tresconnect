export default class HeaderOnScroll {
  constructor() {
    if (!this.setVars()) return;
    
    this.setEvents();
  }
  
  setVars() {
    this.scrollHeader = document.querySelector('[data-header-onScroll]');
    if (!this.scrollHeader) return;
    
    this.setHeader();
    return true;
  }
  
  setEvents() {
    
    window.addEventListener('scroll', () => {
      this.setHeader();
    });
  }
  
  setHeader () {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 50) {
      this.scrollHeader.addClass('active');
    } else {
      this.scrollHeader.removeClass('active');
    }
  }
}
