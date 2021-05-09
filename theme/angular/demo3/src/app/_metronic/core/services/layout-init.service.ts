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
    const subheaderStyle = this.layout.getProp(
      'subheader.style'
    );
    if (subheaderFixed && subheaderStyle === 'solid') {
      updatedConfig.subheader.fixed = false;
    }

    this.layout.setConfigWithoutLocalStorageChanges(updatedConfig);
  }

  private initLayout() {
    const selfBodyBackgroundImage = this.layout.getProp(
      'self.body.backgroundImage'
    );
    if (selfBodyBackgroundImage) {
      document.body.style.backgroundImage = `url("${selfBodyBackgroundImage}")`;
    }

    const selfBodyClass = (
      this.layout.getProp('self.body.class') || ''
    ).toString();
    if (selfBodyClass) {
      const bodyClasses: string[] = selfBodyClass.split(' ');
      bodyClasses.forEach((cssClass) => document.body.classList.add(cssClass));
    }
  }

  private initLoader() { }

  // init header and subheader menu
  private initHeader() {
    const headerSelfFixedMobile = this.layout.getProp(
      'header.self.fixed.mobile'
    );
    if (headerSelfFixedMobile) {
      document.body.classList.add('header-mobile-fixed');
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
    const subheaderStyle = this.layout.getProp(
      'subheader.style'
    );
    if (subheaderFixed && subheaderStyle === 'solid') {
      document.body.classList.add('subheader-fixed');
    }
    if (subheaderStyle) {
      this.layout.setCSSClass('subheader', `subheader-${subheaderStyle}`);
    }

    if (this.layout.getProp('subheader.width') === 'fluid') {
      this.layout.setCSSClass('subheader_container', 'container-fluid');
    } else {
      this.layout.setCSSClass('subheader_container', 'container');
    }

    if (this.layout.getProp('subheader.clear')) {
      this.layout.setCSSClass('subheader', 'mb-0');
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

    // Fixed Aside
    if (this.layout.getProp('aside.self.fixed')) {
      document.body.classList.add('aside-fixed');
      this.layout.setCSSClass('aside', 'aside-fixed');
    } else {
      document.body.classList.add('aside-static');
    }

    // Aside Secondary
    if (this.layout.getProp('aside.secondary.display')) {
      document.body.classList.add('aside-secondary-enabled');
    } else {
      document.body.classList.add('aside-secondary-disabled');
    }

    // Check Aside
    if (this.layout.getProp('aside.self.display') !== true) {
      return;
    }

    // Default fixed
    if (this.layout.getProp('aside.self.minimize.default')) {
      document.body.classList.add('aside-minimize');
    }

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
    // Fixed header
    if (this.layout.getProp('footer.fixed') === true) {
      document.body.classList.add('footer-fixed');
      this.layout.setCSSClass('footer', 'bg-white');
    }

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
