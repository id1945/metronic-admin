import { toAbsoluteUrl } from "../../_helpers";
export function getInitLayoutConfig() {
  return {
    demo: "demo2",
    // Javascript Settings
    js: {
      breakpoints: {
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1200,
      },
      colors: {
        theme: {
          base: {
            white: "#ffffff",
            primary: "#6993FF",
            secondary: "#E5EAEE",
            success: "#1BC5BD",
            info: "#8950FC",
            warning: "#FFA800",
            danger: "#F64E60",
            light: "#F3F6F9",
            dark: "#212121",
          },
          light: {
            white: "#ffffff",
            primary: "#E1E9FF",
            secondary: "#ECF0F3",
            success: "#C9F7F5",
            info: "#EEE5FF",
            warning: "#FFF4DE",
            danger: "#FFE2E5",
            light: "#F3F6F9",
            dark: "#D6D6E0",
          },
          inverse: {
            white: "#ffffff",
            primary: "#ffffff",
            secondary: "#212121",
            success: "#ffffff",
            info: "#ffffff",
            warning: "#ffffff",
            danger: "#ffffff",
            light: "#464E5F",
            dark: "#ffffff",
          },
        },
        gray: {
          gray100: "#F3F6F9",
          gray200: "#ECF0F3",
          gray300: "#E5EAEE",
          gray400: "#D6D6E0",
          gray500: "#B5B5C3",
          gray600: "#80808F",
          gray700: "#464E5F",
          gray800: "#1B283F",
          gray900: "#212121",
        },
      },
      fontFamily: "Poppins",
    },
    // Base Settins
    self: {
      layout: "default", // blank/default page mode
      body: {
        backgroundImage: "bg/bg-10.jpg",
      },
    },
    // == Page Splash Screen loading
    loader: {
      enabled: true,
      type: "", // default|spinner-message|spinner-logo
      logo: toAbsoluteUrl("/media/logos/logo-dark-sm.png"),
      message: "Please wait...",
    },
    header: {
      self: {
        width: "fixed", // fixed|fluid
        fixed: {
          desktop: true,
          mobile: false,
        },
      },
      menu: {
        self: {
          display: true,
          layout: "default", // tab/default
          "root-arrow": false,
          "icon-style": "duotone", // duotone, line, bold, solid
        },
        desktop: {
          arrow: true,
          toggle: "click",
          submenu: {
            theme: "light", // light|dark
            arrow: true,
          },
        },
        mobile: {
          submenu: {
            theme: "dark",
            accordion: true,
          },
        },
      },
    },
    subheader: {
      display: true,
      displayDesc: false,
      displayDaterangepicker: true,
      breadcrumb: {
        display: true,
      },
      layout: "subheader-v6",
      fixed: false,
      width: "fixed", // fixed/fluid,
      clear: false,
      style: "transparent", // solid/transparent
    },
    content: {
      width: "fixed", // fluid|fixed
    },
    aside: {
      self: {
        display: false,
      },
      menu: {
        dropdown: false, // ok
        scroll: false, // ok
        "icon-style": "duotone", // duotone, line, bold, solid
        submenu: {
          accordion: true,
          dropdown: {
            arrow: true,
            "hover-timeout": 500, // in milliseconds
          },
        },
      },
    },
    footer: {
      width: "fixed", // fixed|fluid
      layout: "compact", // compact|extended
    },
    extras: {
      search: {
        display: true,
        layout: "dropdown", // offcanvas, dropdown
        offcanvas: {
          direction: "right",
        },
      },
      notifications: {
        display: true,
        layout: "dropdown", // offcanvas, dropdown
        dropdown: {
          style: "dark", // light, dark
        },
        offcanvas: {
          direction: "right",
        },
      },
      "quick-actions": {
        display: true,
        layout: "dropdown", // offcanvas, dropdown,
        dropdown: {
          style: "dark", // light, dark
        },
        offcanvas: {
          direction: "right",
        },
      },
      cart: {
        display: true,
        layout: "dropdown", // offcanvas, dropdown
        offcanvas: {
          direction: "dark", // ligth, dark
        },
      },
      chat: {
        display: true,
      },
      user: {
        display: true,
        layout: "dropdown", // offcanvas, dropdown
        dropdown: {
          style: "light", // light|dark
        },
        offcanvas: {
          direction: "right",
        },
      },
      languages: {
        display: true,
      },
      "quick-panel": {
        display: true,
        offcanvas: {
          direction: "right",
        },
      },

      toolbar: {
        display: true,
      },
      scrolltop: {
        display: true,
      },
    },
  };
}
