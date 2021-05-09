import { toAbsoluteUrl } from "../../_helpers";
export function getInitLayoutConfig() {
  return {
    demo: "demo3",
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
            primary: "#1BC5BD",
            secondary: "#E5EAEE",
            success: "#1BC5BD",
            info: "#6993FF",
            warning: "#FFA800",
            danger: "#F64E60",
            light: "#F3F6F9",
            dark: "#212121",
          },
          light: {
            white: "#ffffff",
            primary: "#1BC5BD",
            secondary: "#ECF0F3",
            success: "#C9F7F5",
            info: "#E1E9FF",
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
      body: {},
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
        fixed: {
          mobile: true,
        },
      }
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
        display: true,
        fixed: true,
        minimize: {
          toggle: true,
          default: false
        }
      },
      secondary: {
        display: true
      },
      menu: {
        dropdown: false, // ok
        scroll: false, // ok
        "icon-style": "duotone", // duotone, line, bold, solid
        submenu: {
          accordion: true,
        },
      },
    },
    footer: {
      width: "fixed", // fixed|fluid
      fixed: false
    },
    extras: {
      search: {
        display: false,
        layout: "offcanvas", // offcanvas, dropdown
        offcanvas: {
          direction: "right",
        },
      },
      notifications: {
        display: false,
        layout: "offcanvas", // offcanvas, dropdown
        dropdown: {
          style: "dark", // light, dark
        },
        offcanvas: {
          direction: "right",
        },
      },
      "quick-actions": {
        display: true,
        layout: "offcanvas", // offcanvas, dropdown,
        dropdown: {
          style: "dark", // light, dark
        },
        offcanvas: {
          direction: "left",
        },
      },
      cart: {
        display: false,
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
        layout: "offcanvas", // offcanvas, dropdown
        dropdown: {
          style: "light", // light|dark
        },
        offcanvas: {
          direction: "left",
        },
      },
      languages: {
        display: false,
      },
      "quick-panel": {
        display: true,
        offcanvas: {
          direction: "left",
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
