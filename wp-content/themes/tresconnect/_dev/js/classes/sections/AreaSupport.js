export default class AreaSupport {
  constructor() {
    if (!this.setVars()) return;
    
    this.setEvents();
  }
  
  setVars() {
    
    this.settings = {
      main: 'data-area-support',
      open: 'data-area-support-open',
      close: 'data-area-support-close',
      item: 'data-area-support-item',
    };
    
    this.areasSupport = document.querySelectorAll(`[${this.settings.main}]`);
    if (!this.areasSupport) return;
    
    return true;
  }
  
  setEvents() {
    this.areasSupport.forEach((elWrapper) => {
      elWrapper.querySelector(`[${this.settings.open}]`).addEventListener('click', () => {
        this.toggleActive(elWrapper);
      });
      
      elWrapper.querySelector(`[${this.settings.close}]`).addEventListener('click', () => {
        this.toggleActive(elWrapper);
      });
    });
  }
  
  toggleActive(elWrapper) {
    elWrapper.querySelector(`[${this.settings.item}]`).toggleClass('active')
  }
}
