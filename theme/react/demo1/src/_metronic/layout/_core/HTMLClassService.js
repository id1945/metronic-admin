import objectPath from "object-path";
import {toAbsoluteUrl} from "../../_helpers";

export class HtmlClassService {
  // Public properties
  config;
  classes;
  attributes;

  /**
   * Build html element classes from layout config
   * @param layoutConfig
   */
  setConfig(layoutConfig) {
    this.config = this.preInit(layoutConfig);

    // scope list of classes
    this.classes = {
      header: [],
      header_container: [],
      header_mobile: [],
      header_menu: [],
      aside: [],
      aside_menu: [],
      subheader: [],
      subheader_container: [],
      content: [],
      content_container: [],
      footer_container: []
    };

    this.attributes = {
      aside_menu: {},
      header_mobile: {},
      header_menu: {}
    };

    // init base layout
    this.initLayout();
    this.initLoader();

    // init header and subheader menu
    this.initHeader();
    this.initSubheader();

    this.initContent();
    // init aside and aside menu
    this.initAside();

    // init footer
    this.initFooter();

    // init theme
    this.initTheme();
  }

  preInit(layoutConfig) {
    const updatedConfig = Object.assign({}, layoutConfig);
    const headerSelfFixedDesktop = objectPath.get(updatedConfig, "header.self.fixed.desktop");
    const subheaderFixed = objectPath.get(updatedConfig, "subheader.fixed");
    if (subheaderFixed && headerSelfFixedDesktop) {
      // Page::setOption('layout', 'subheader/style', 'solid');
      updatedConfig.subheader.style = "solid";      
    } else {
      // Page::setOption('layout', 'subheader/fixed', false);
      updatedConfig.subheader.fixed = false;
    }
    return updatedConfig;
  }

  /**
   * Returns Classes
   *
   * @param path: string
   * @param toString boolean
   */
  getClasses(path, toString) {
    if (path) {
      const classes = objectPath.get(this.classes, path) || "";
      if (toString && Array.isArray(classes)) {
        return classes.join(" ");
      }
      return classes.toString();
    }
    return this.classes;
  }

  getAttributes(path) {
    if (path) {
      const attributes = objectPath.get(this.attributes, path) || [];
      return attributes;
    }
    return [];
  }

  getLogo() {
    const brandSkin = objectPath.get(this.config, "brand.self.theme");
    if (brandSkin === "light") {
      return toAbsoluteUrl("/media/logos/logo-dark.png");
    } else {
      return toAbsoluteUrl("/media/logos/logo-light.png");
    }
  }

  getStickyLogo() {
    let logo = objectPath.get(this.config, "self.logo.sticky");
    if (typeof logo === "undefined") {
      logo = this.getLogo();
    }
    return logo + "";
  }

  /**
   * Init Layout
   */
  initLayout() {
    const selfBodyBackgroundImage = objectPath.get(this.config, "self.body.background-image");
    if (selfBodyBackgroundImage) {
      document.body.style.backgroundImage = `url("${selfBodyBackgroundImage}'")`;
    }

    const _selfBodyClass = objectPath.get(this.config, "self.body.class");
    if (_selfBodyClass) {
      const bodyClasses = _selfBodyClass.toString().split(" ");
      bodyClasses.forEach(cssClass => document.body.classList.add(cssClass));
    }

    // Offcanvas directions
    document.body.classList.add("quick-panel-right");
    document.body.classList.add("demo-panel-right");
    document.body.classList.add("offcanvas-right");
  }

  /**
   * Init Loader
   */
  initLoader() {}

  /**
   * Init Header
   */
  initHeader() {
    // Fixed header
    const headerSelfFixedDesktop = objectPath.get(this.config, "header.self.fixed.desktop");
    if (headerSelfFixedDesktop) {
      document.body.classList.add("header-fixed");
      objectPath.push(this.classes, "header", "header-fixed");
    } else {
      document.body.classList.add("header-static");
    }

    const headerSelfFixedMobile  = objectPath.get(this.config, "header.self.fixed.mobile");
    if (headerSelfFixedMobile) {
      document.body.classList.add("header-mobile-fixed");
      objectPath.push(this.classes, "header_mobile", "header-mobile-fixed");
    }

    // Menu
    const headerMenuSelfDisplay = objectPath.get(this.config, "header.menu.self.display");
    if (headerMenuSelfDisplay) {
      const headerMenuSelfLayout = objectPath.get(this.config, "header.menu.self.layout");
      const headerMenuLayoutCssClass = `header-menu-layout-${headerMenuSelfLayout}`;
      objectPath.push(this.classes, "header_menu", headerMenuLayoutCssClass);

            if (objectPath.get(this.config, "header.menu.self.root-arrow")) {
        objectPath.push(this.classes, "header_menu", "header-menu-root-arrow");
      }
    }

    const headerSelfWidth = objectPath.get(this.config, "header.self.width");
    if (headerSelfWidth === "fluid") {
      objectPath.push(this.classes, "header_container", "container-fluid");
    } else {
      objectPath.push(this.classes, "header_container", "container");
    }
  }

  /**
   * Init Subheader
   */
  initSubheader() {
    const subheaderDisplay = objectPath.get(this.config, "subheader.display");
    if (subheaderDisplay) {
      document.body.classList.add("subheader-enabled");
    } else {
      return;
    }

    // Fixed content head
    const subheaderFixed = objectPath.get(this.config, "subheader.fixed");
    const headerSelfFixedDesktop = objectPath.get(this.config, "header.self.fixed.desktop");
    if (subheaderFixed && headerSelfFixedDesktop) {
      document.body.classList.add("subheader-fixed");
      // Page::setOption('layout', 'subheader/style', 'solid'); => See preInit()
    } else {
      // Page::setOption('layout', 'subheader/fixed', false); => See preInit()
    }

    const subheaderStyle = objectPath.get(this.config, "subheader.style");
    if (subheaderStyle) {
      const subheaderClass = `subheader-${subheaderStyle}`;
      objectPath.push(this.classes, "subheader", subheaderClass);
    }

    const subheaderWidth = objectPath.get(this.config, "subheader.width");
    if (subheaderWidth === "fluid") {
      objectPath.push(this.classes, "subheader_container", "container-fluid");
    } else {
      objectPath.push(this.classes, "subheader_container", "container");
    }

    if (objectPath.get(this.config, "subheader.clear")) {
      objectPath.push(this.classes, "subheader", "mb-0");
    }
  }

  /**
   * Init Content
   */
  initContent() {
    if (objectPath.get(this.config, "content.fit-top")) {
      objectPath.push(this.classes, "content", "pt-0");
    }

    if (objectPath.get(this.config, "content.fit-bottom")) {
      objectPath.push(this.classes, "content", "pb-0");
    }

    if (objectPath.get(this.config, "content.width") === "fluid") {
      objectPath.push(this.classes, "content_container", "container-fluid");
    } else {
      objectPath.push(this.classes, "content_container", "container");
    }
  }

  /**
   * Init Aside
   */
  initAside() {
    // Check Aside
    const asideSelfDisplay = objectPath.get(this.config, "aside.self.display");
    if (!asideSelfDisplay) {
      return;
    }

    // Enable Aside
    document.body.classList.add("aside-enabled");

    // Fixed Aside
    const asideSelfFixed = objectPath.get(this.config, "aside.self.fixed");
    if (asideSelfFixed) {
      document.body.classList.add("aside-fixed");
      objectPath.push(this.classes, "aside", "aside-fixed");
    } else {
      document.body.classList.add("aside-static");
    }

    // Check Aside
    if (!asideSelfDisplay) {
      return;
    }

    // Default fixed
    if (objectPath.get(this.config, "aside.self.minimize.default")) {
      document.body.classList.add("aside-minimize");
    }

    if (objectPath.get(this.config, "aside.self.minimize.hoverable")) {
      document.body.classList.add("aside-minimize-hoverable");
    }

    // Menu
    // Dropdown Submenu
    const asideMenuDropdown = objectPath.get(this.config, "aside.menu.dropdown");
    if (asideMenuDropdown) {
      objectPath.push(this.classes, "aside_menu", "aside-menu-dropdown");
      this.attributes.aside_menu["data-menu-dropdown"] = "1";
    }

    // Scrollable Menu
    this.attributes.aside_menu["data-menu-scroll"] = asideMenuDropdown ? "0" : "1";

    const asideSubmenuDHoverTimeout = objectPath.get(
      this.config,
      "aside.menu.submenu.dropdown.hover-timeout"
    );
    if (asideSubmenuDHoverTimeout) {
      this.attributes.aside_menu[
        "data-menu-dropdown-timeout"
      ] = asideSubmenuDHoverTimeout;
    }
  }

  /**
   * Init Footer
   */
  initFooter() {
    // Fixed header
    if (objectPath.get(this.config, "footer.fixed")) {
      document.body.classList.add("footer-fixed");
    }

    if (objectPath.get(this.config, "footer.self.width") === "fluid") {
      objectPath.push(this.classes, "footer_container", "container-fluid");
    } else {
      objectPath.push(this.classes, "footer_container", "container");
    }
  }

  /** Init Theme */
  initTheme() {
    const asideSelfDisplay = objectPath.get(this.config, "aside.self.display");
    if (!asideSelfDisplay) {
      const headerSelfTheme = objectPath.get(this.config, "header.self.theme");
      document.body.classList.add(`brand-${headerSelfTheme}`);
    } else {
      const brandSelfTheme = objectPath.get(this.config, "brand.self.theme");
      document.body.classList.add(`brand-${brandSelfTheme}`);
    }
  }
}
