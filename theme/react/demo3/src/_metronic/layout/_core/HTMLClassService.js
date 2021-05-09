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
    this.initLoader();
    this.initLayout();

    // init header and subheader menu
    this.initHeader();
    this.initSubheader();

    this.initContent();
    // init aside and aside menu
    this.initAside();

    // init footer
    this.initFooter();
  }

  preInit(layoutConfig) {
    const updateLayoutConfig = Object.assign({}, layoutConfig);
    const subheaderFixed = objectPath.get(layoutConfig, "subheader.fixed");
    if (subheaderFixed) {
      updateLayoutConfig.subheader.style = "solid";
    } else {
      updateLayoutConfig.subheader.fixed = false;
    }
    return updateLayoutConfig;
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
    const selfBodyBackgroundImage = objectPath.get(this.config, "self.body.backgroundImage");
    if (selfBodyBackgroundImage) {
      const backgroundImageUrl = `${toAbsoluteUrl("/media/" + selfBodyBackgroundImage)}`;
      document.body.style.backgroundImage = `url("${backgroundImageUrl}")`;
    }

    const _selfBodyClass = objectPath.get(this.config, "self.body.class");
    if (_selfBodyClass) {
      const bodyClasses = _selfBodyClass.toString().split(" ");
      bodyClasses.forEach(cssClass => document.body.classList.add(cssClass));
    }
  }

  /**
   * Init Loader
   */
  initLoader() {}

  /**
   * Init Header
   */
  initHeader() {
    const headerSelfFixedMobile  = objectPath.get(this.config, "header.self.fixed.mobile");
    if (headerSelfFixedMobile) {
      document.body.classList.add("header-mobile-fixed");
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
    if (subheaderFixed ) {
      document.body.classList.add("subheader-fixed");
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

    const subheaderClear = objectPath.get(this.config, "subheader.clear");
    if (subheaderClear) {
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

		// Aside Secondary
    const asideSecondaryDisplay = objectPath.get(this.config, "aside.secondary.display");
    if (asideSecondaryDisplay) {
      document.body.classList.add("aside-secondary-enabled");
    } else {
      document.body.classList.add("aside-secondary-disabled");
    }

    // Check Aside
    if (!asideSelfDisplay) {
      return;
    }

    // Default fixed
    const asideSelfMinimizeDefault = objectPath.get(this.config, "aside.self.minimize.default");
    if (asideSelfMinimizeDefault) {
      document.body.classList.add("aside-minimize");
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
    const footerFixed = objectPath.get(this.config, "footer.fixed");
    if (footerFixed) {
      document.body.classList.add("footer-fixed");
      objectPath.push(this.classes, "footer", "bg-white");
    }

    if (objectPath.get(this.config, "footer.width") === "fluid") {
      objectPath.push(this.classes, "footer_container", "container-fluid");
    } else {
      objectPath.push(this.classes, "footer_container", "container");
    }
  }
}
