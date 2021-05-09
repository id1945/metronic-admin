import { Injectable } from '@angular/core';
import { LayoutService } from './layout.service';

@Injectable({
  providedIn: 'root',
})
export class LayoutInitService {
  constructor(private layout: LayoutService) {
  }

  init() {
    this.layout.initConfig();

    this.preInitLayout();
    // init base layout
    this.initLayout();
    this.initLoader();

    // init header and subheader menu
    this.initHeader();
    this.initSubheader();

    // init content
    this.initContent();
    // init aside and aside menu
    this.initAside();

    // init footer
    this.initFooter();

    this.initSkins();
  }

  // init base layout
  private preInitLayout() {
    const config = this.layout.getConfig();
    const updatedConfig = Object.assign({}, config);
    const subheaderFixed = this.layout.getProp('subheader.fixed');
    const headerSelfFixedDesktop = this.layout.getProp(
      'header.self.fixed.desktop'
    );
    if (subheaderFixed && headerSelfFixedDesktop) {
      updatedConfig.subheader.style = 'solid';
    } else {
      updatedConfig.subheader.fixed = false;
    }

    this.layout.setConfigWithoutLocalStorageChanges(updatedConfig);
  }

  private initLayout() {
    const selfBodyBackgroundImage = this.layout.getProp(
      'self.backgroundImage'
    );
    if (selfBodyBackgroundImage) {
      document.body.style.backgroundImage = `url("./assets/media/${selfBodyBackgroundImage}")`;
    }

    const selfBodyClass = (
      this.layout.getProp('self.body.class') || ''
    ).toString();
    if (selfBodyClass) {
      const bodyClasses: string[] = selfBodyClass.split(' ');
      bodyClasses.forEach((cssClass) => document.body.classList.add(cssClass));
    }

    document.body.classList.add('quick-panel-right');
    document.body.classList.add('demo-panel-right');
    document.body.classList.add('offcanvas-right');
  }

  private initLoader() { }

  // init header and subheader menu
  private initHeader() {
    // Fixed header
    const headerSelfFixedDesktop = this.layout.getProp(
      'header.self.fixed.desktop'
    );
    if (headerSelfFixedDesktop) {
      document.body.classList.add('header-fixed');
      this.layout.setCSSClass('header', 'header-fixed');
    } else {
      document.body.classList.add('header-static');
    }

    const headerSelfFixedMobile = this.layout.getProp(
      'header.self.fixed.mobile'
    );
    if (headerSelfFixedMobile) {
      document.body.classList.add('header-mobile-fixed');
      this.layout.setCSSClass('header_mobile', 'header-mobile-fixed');
    }

    // Menu
    const headerMenuSelfDisplay = this.layout.getProp(
      'header.menu.self.display'
    );
    const headerMenuSelfLayout = this.layout.getProp('header.menu.self.layout');
    if (headerMenuSelfDisplay) {
      this.layout.setCSSClass(
        'header_menu',
        `header-menu-layout-${headerMenuSelfLayout}`
      );

      if (this.layout.getProp('header.menu.self.rootArrow')) {
        this.layout.setCSSClass('header_menu', 'header-menu-root-arrow');
      }
    }

    if (this.layout.getProp('header.self.width') === 'fluid') {
      this.layout.setCSSClass('header_container', 'container-fluid');
    } else {
      this.layout.setCSSClass('header_container', 'container');
    }
  }

  private initSubheader() {
    const subheaderDisplay = this.layout.getProp('subheader.display');
    if (subheaderDisplay) {
      document.body.classList.add('subheader-enabled');
    } else {
      return;
    }

    // Fixed content head
    const subheaderFixed = this.layout.getProp('subheader.fixed');
    const headerSelfFixedDesktop = this.layout.getProp(
      'header.self.fixed.desktop'
    );
    if (subheaderFixed && headerSelfFixedDesktop) {
      document.body.classList.add('subheader-fixed');
    }

    const subheaderStyle = this.layout.getProp('subheader.style');
    if (subheaderStyle) {
      this.layout.setCSSClass('subheader', `subheader-${subheaderStyle}`);
    }

    if (this.layout.getProp('subheader.width') === 'fluid') {
      this.layout.setCSSClass('subheader_container', 'container-fluid');
    } else {
      this.layout.setCSSClass('subheader_container', 'container');
    }
  }

  // init content
  private initContent() {
    if (this.layout.getProp('content.fit-top')) {
      this.layout.setCSSClass('content', 'pt-0');
    }

    if (this.layout.getProp('content.fit-bottom')) {
      this.layout.setCSSClass('content', 'pb-0');
    }

    if (this.layout.getProp('content.width') === 'fluid') {
      this.layout.setCSSClass('content_container', 'container-fluid');
    } else {
      this.layout.setCSSClass('content_container', 'container');
    }
  }

  // init aside and aside menu
  private initAside() {
    if (this.layout.getProp('aside.self.display') !== true) {
      return;
    }

    // Enable Aside
    document.body.classList.add('aside-enabled');
    document.body.classList.add('aside-static');

    // Menu
    // Dropdown Submenu
    const asideMenuDropdown = this.layout.getProp('aside.menu.dropdown');
    if (asideMenuDropdown) {
      this.layout.setCSSClass('aside_menu', 'aside-menu-dropdown');
      this.layout.setHTMLAttribute('aside_menu', 'data-menu-dropdown', '1');
    }

    // Scrollable Menu
    if (asideMenuDropdown !== true) {
      this.layout.setHTMLAttribute('aside_menu', 'data-menu-scroll', '1');
    } else {
      this.layout.setHTMLAttribute('aside_menu', 'data-menu-scroll', '0');
    }

    const asideMenuSubmenuDropdownHoverTimout = this.layout.getProp(
      'aside.menu.submenu.dropdown.hoverTimeout'
    );
    if (asideMenuSubmenuDropdownHoverTimout) {
      this.layout.setHTMLAttribute(
        'aside_menu',
        'data-menu-dropdown-timeout',
        asideMenuSubmenuDropdownHoverTimout
      );
    }
  }

  // init footer
  private initFooter() {
    if (this.layout.getProp('footer.width') === 'fluid') {
      this.layout.setCSSClass('footer_container', 'container-fluid');
    } else {
      this.layout.setCSSClass('footer_container', 'container');
    }
  }

  /**
   * Set the body class name based on page skin options
   */
  private initSkins() {
  }
}
