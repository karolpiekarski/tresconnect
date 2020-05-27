import HeaderOnScroll from "./site/HeaderOnScroll";
import MenuSidebar from "./site/MenuSidebar";
import AreaSupport from "./sections/AreaSupport";


class Core {
  constructor() {
    new HeaderOnScroll();
    new MenuSidebar();
    new AreaSupport();
  }
}

new Core();
