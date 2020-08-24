import HeaderOnScroll from "./site/HeaderOnScroll";
import MenuSidebar from "./site/MenuSidebar";
import AreaSupport from "./sections/AreaSupport";
import Slider from "./site/Slider";

class Core {
  constructor() {
    new HeaderOnScroll();
    new MenuSidebar();
    new AreaSupport();
    new Slider();
  
    AOS.init();
  }
}

new Core();
