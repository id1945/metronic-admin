export const DefaultLayoutConfig = {
  demo: 'demo1',
  // Javascript Settings
  js: {
    breakpoints: {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
    colors: {
      theme: {
        base: {
          white: '#ffffff',
          primary: '#3699FF',
          secondary: '#E5EAEE',
          success: '#1BC5BD',
          info: '#8950FC',
          warning: '#FFA800',
          danger: '#F64E60',
          light: '#E4E6EF',
          dark: '#181C32',
        },
        light: {
          white: '#ffffff',
          primary: '#E1F0FF',
          secondary: '#EBEDF3',
          success: '#C9F7F5',
          info: '#EEE5FF',
          warning: '#FFF4DE',
          danger: '#FFE2E5',
          light: '#F3F6F9',
          dark: '#D6D6E0',
        },
        inverse: {
          white: '#ffffff',
          primary: '#ffffff',
          secondary: '#3F4254',
          success: '#ffffff',
          info: '#ffffff',
          warning: '#ffffff',
          danger: '#ffffff',
          light: '#464E5F',
          dark: '#ffffff',
        },
      },
      gray: {
        'gray-100': '#F3F6F9',
        'gray-200': '#EBEDF3',
        'gray-300': '#E4E6EF',
        'gray-400': '#D1D3E0',
        'gray-500': '#B5B5C3',
        'gray-600': '#7E8299',
        'gray-700': '#5E6278',
        'gray-800': '#3F4254',
        'gray-900': '#181C32',
      },
    },
    fontFamily: 'Poppins',
  },

  // Base Settins
  self: {
    layout: 'default', // blank/default page mode
  },

  // Page loader
  pageLoader: {
    type: '', // default|spinner-message|spinner-logo
  },

  // Header
  header: {
    self: {
      display: true,
      width: 'fluid', // fixed|fluid,
      theme: 'light', // light|dark
      fixed: {
        desktop: true,
        mobile: true,
      },
    },

    menu: {
      self: {
        display: true,
        static: true, // static => true | dynamic => true
        layout: 'default', // tab/default,
        rootArrow: false,
        iconStyle: 'duotone', // duotone, line, bold, solid
      },

      desktop: {
        arrow: true,
        toggle: 'click',
        submenu: {
          theme: 'light',
          arrow: true,
        },
      },

      mobile: {
        submenu: {
          theme: 'dark',
          accordion: true,
        },
      },
    },
  },

  // Subheader
  subheader: {
    display: true,
    displayDesc: true,
    displayDaterangepicker: true,
    layoutVersion: 'v1', // [1..6]
    fixed: true,
    width: 'fluid', // fixed|fluid,
    clear: false,
    style: 'solid', // transparent/solid
  },

  // Content
  content: {
    width: 'fixed', // fluid|fixed
  },

  // Brand
  brand: {
    self: {
      theme: 'dark', // light/dark
    },
  },

  // Aside
  aside: {
    self: {
      theme: 'dark', // light/dark
      display: true,
      fixed: true,
      minimize: {
        toggle: true, // allow toggle
        default: false, // default state
        hoverable: true, // allow hover
      },
    },

    footer: {
      self: {
        display: false,
      },
    },

    menu: {
      static: true, // static => true | dynamic => true
      dropdown: false, // ok
      scroll: true, // ok
      iconStyle: 'duotone', // duotone, line, bold, solid
      submenu: {
        accordion: true, //
        dropdown: {
          arrow: true,
          hoverTimeout: 500, // in milliseconds
        },
      },
    },
  },

  // Footer
  footer: {
    display: true,
    width: 'fluid',
    fixed: true,
  },

  // Extras
  extras: {
    // Search
    search: {
      display: true,
      layout: 'dropdown', // offcanvas, dropdown,
      offcanvas: {
        direction: 'right',
      },
    },

    // Notifications
    notifications: {
      display: true,
      layout: 'dropdown', // offcanvas, dropdown,
      dropdown: {
        style: 'dark', // light|dark
      },
      offcanvas: {
        direction: 'right',
      },
    },

    // Quick Actionss
    quickActions: {
      display: true,
      layout: 'dropdown', // offcanvas, dropdown,
      dropdown: {
        style: 'dark', // light|dark
      },
      offcanvas: {
        direction: 'right',
      },
    },

    // User
    user: {
      display: true,
      layout: 'offcanvas', // offcanvas, dropdown,
      dropdown: {
        style: 'dark', // light|dark
      },
      offcanvas: {
        direction: 'right',
      },
    },

    // Languages
    languages: {
      display: true,
    },

    // Cart
    cart: {
      display: true,
      layout: 'dropdown', // offcanvas, dropdown,
      offcanvas: {
        direction: 'right',
      },
      dropdown: {
        style: 'dark', // light|dark
      },
    },

    // Chat
    chat: {
      display: true,
    },

    // Quick Panel
    quickPanel: {
      display: true,
      offcanvas: {
        direction: 'right',
      },
    },

    // Page Toolbar
    toolbar: {
      display: true,
    },

    // Scrolltop
    scrolltop: {
      display: true,
    },
  },
};
