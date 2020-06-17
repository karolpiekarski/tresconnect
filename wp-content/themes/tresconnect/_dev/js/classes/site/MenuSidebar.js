export default class MenuSidebar {
  constructor() {
    if (!this.setVars()) return;

    this.setEvents();
  }

  setVars() {
    this.settings = {
      main: 'data-menu',
      button: 'data-menu-button',
      close: 'data-menu-close',
      menu: 'data-menu-wrapper',
      dark: 'data-dark',
    };

    this.menu = document.querySelector(`[${this.settings.main}]`);
    if (!this.menu) return;

    return true;
  }

  setEvents() {
    const menu = document.querySelector(`[${this.settings.menu}]`);

    this.menu.querySelector(`[${this.settings.button}]`).addEventListener('click', (e) => {
      e.stopPropagation();

      this.showMenu(menu);

      menu.addEventListener('click', (e) => {
        e.stopPropagation();
      })
    });

    window.addEventListener('click', () => {
      if (menu.hasClass('active')) {
        this.hideMenu(menu);
      }
    })

    this.menu.querySelector(`[${this.settings.close}]`).addEventListener('click', () => {
      if (menu.hasClass('active')) {
        this.hideMenu(menu);
      }
    })
  }

  showMenu(menu) {
    menu.addClass('active');
    document.querySelector(`[${this.settings.dark}]`).addClass('active');
    document.querySelector(`body`).addClass('over-hidden');
  }

  hideMenu(menu) {
    menu.removeClass('active');
    document.querySelector(`[${this.settings.dark}]`).removeClass('active');
    document.querySelector(`body`).removeClass('over-hidden');
  }

}