import objectPath from "object-path";
import {
  ADD_BODY_CLASSNAME,
  REMOVE_BODY_CLASSNAME
} from "@/core/services/store/htmlclass.module";
import store from "@/core/services/store";
import { ADD_CLASSNAME } from "@/core/services/store/htmlclass.module";

const HtmlClass = {
  config: null,

  init(config) {
    if (typeof config !== "undefined") {
      this.config = config;
    }

    // init base layout
    this.initLayout();

    // init header and subheader menu
    this.initHeader();
    this.initSubheader();

    // init aside and aside menu
    this.initAside();

    // init footer
    this.initFooter();
  },

  /**
   * Init Layout
   */
  initLayout() {
    if (objectPath.has(this.config, "self.body.class")) {
      const _selfBodyClass = objectPath
        .get(this.config, "self.body.class")
        .toString();
      if (_selfBodyClass) {
        const bodyClasses = _selfBodyClass.split(" ");
        bodyClasses.forEach(cssClass => {
          store.dispatch(ADD_BODY_CLASSNAME, cssClass);
        });
      }
    }

    const bgImage = objectPath.get(this.config, "self.body.background-image");
    if (typeof bgImage !== "undefined") {
      document.body.style.backgroundImage = `url(${bgImage})`;
    }

    // Offcanvas directions
    store.dispatch(ADD_BODY_CLASSNAME, "quick-panel-right");
    store.dispatch(ADD_BODY_CLASSNAME, "demo-panel-right");
    store.dispatch(ADD_BODY_CLASSNAME, "offcanvas-right");

    // Properly close mobile header menu
    store.dispatch(REMOVE_BODY_CLASSNAME, "header-menu-wrapper-on");
  },

  /**
   * Init Header
   */
  initHeader() {
    // Fixed header
    if (objectPath.get(this.config, "header.self.fixed.desktop")) {
      store.dispatch(ADD_BODY_CLASSNAME, "header-fixed");
      store.dispatch(ADD_CLASSNAME, {
        position: "header",
        className: "header-fixed"
      });
    } else {
      store.dispatch(ADD_BODY_CLASSNAME, "header-static");
    }

    if (objectPath.get(this.config, "header.self.fixed.mobile")) {
      store.dispatch(ADD_BODY_CLASSNAME, "header-mobile-fixed");
      store.dispatch(ADD_CLASSNAME, {
        position: "header_mobile",
        className: "header-mobile-fixed"
      });
    }

    if (objectPath.get(this.config, "header.menu.self.display")) {
      store.dispatch(ADD_CLASSNAME, {
        position: "header_menu",
        className: `header-menu-layout-${objectPath.get(
          this.config,
          "header.menu.self.layout"
        )}`
      });

      // Menu
      if (objectPath.get(this.config, "header.menu.self.root-arrow")) {
        store.dispatch(ADD_CLASSNAME, {
          position: "header_menu",
          className: "header-menu-root-arrow"
        });
      }
    }

    store.dispatch(ADD_BODY_CLASSNAME, "header-bottom-enabled");
  },

  /**
   * Init Subheader
   */
  initSubheader() {
    // Fixed content head
    if (
      objectPath.get(this.config, "subheader.fixed") &&
      objectPath.get(this.config, "header.self.fixed.desktop")
    ) {
      store.dispatch(ADD_BODY_CLASSNAME, "subheader-fixed");
    }

    if (objectPath.has(this.config, "subheader.style")) {
      store.dispatch(
        ADD_BODY_CLASSNAME,
        `subheader-${objectPath.get(this.config, "subheader.style")}`
      );
    }
  },

  /**
   * Init Aside
   */
  initAside() {
    // Reset aside class in body
    store.dispatch(REMOVE_BODY_CLASSNAME, "aside-enabled");
    store.dispatch(REMOVE_BODY_CLASSNAME, "aside-fixed");
    store.dispatch(REMOVE_BODY_CLASSNAME, "aside-static");
    store.dispatch(REMOVE_BODY_CLASSNAME, "aside-minimize");

    if (objectPath.get(this.config, "aside.self.display") !== true) {
      return;
    }

    // Add aside class enabled in body
    store.dispatch(ADD_BODY_CLASSNAME, "aside-enabled");

    // Fixed Aside
    if (objectPath.get(this.config, "aside.self.fixed")) {
      store.dispatch(ADD_BODY_CLASSNAME, "aside-fixed");
      store.dispatch(ADD_CLASSNAME, {
        position: "aside",
        className: "aside-fixed"
      });
    } else {
      store.dispatch(ADD_BODY_CLASSNAME, "aside-static");
    }

    // Default fixed
    if (objectPath.get(this.config, "aside.self.minimize.default")) {
      store.dispatch(ADD_BODY_CLASSNAME, "aside-minimize");
    }

    // Dropdown Submenu
    if (objectPath.get(this.config, "aside.menu.dropdown")) {
      store.dispatch(ADD_CLASSNAME, {
        position: "aside_menu",
        className: "aside-menu-dropdown"
      });
    }
  },

  /**
   * Init Footer
   */
  initFooter() {
    // Fixed header
    if (objectPath.get(this.config, "footer.fixed")) {
      store.dispatch(ADD_BODY_CLASSNAME, "footer-fixed");
    }
  }
};

export default HtmlClass;
