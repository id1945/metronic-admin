export const DefaultLayoutConfig = {
  demo: 'demo3',
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
          white: '#ffffff',
          primary: '#1BC5BD',
          secondary: '#E5EAEE',
          success: '#1BC5BD',
          info: '#6993FF',
          warning: '#FFA800',
          danger: '#F64E60',
          light: '#F3F6F9',
          dark: '#212121'
        },
        light: {
          white: '#ffffff',
          primary: '#1BC5BD',
          secondary: '#ECF0F3',
          success: '#C9F7F5',
          info: '#E1E9FF',
          warning: '#FFF4DE',
          danger: '#FFE2E5',
          light: '#F3F6F9',
          dark: '#D6D6E0'
        },
        inverse: {
          white: '#ffffff',
          primary: '#ffffff',
          secondary: '#212121',
          success: '#ffffff',
          info: '#ffffff',
          warning: '#ffffff',
          danger: '#ffffff',
          light: '#464E5F',
          dark: '#ffffff'
        },
      },
      gray: {
        'gray-100': '#F3F6F9',
        'gray-200': '#ECF0F3',
        'gray-300': '#E5EAEE',
        'gray-400': '#D6D6E0',
        'gray-500': '#B5B5C3',
        'gray-600': '#80808F',
        'gray-700': '#464E5F',
        'gray-800': '#1B283F',
        'gray-900': '#212121',
      },
    },
    fontFamily: 'Poppins',
  },

  // Base Settins
  self: {
    layout: 'default', // blank/default page mode
    body: {}
  },

  // Page loader
  pageLoader: {
    type: '', // default|spinner-message|spinner-logo
  },

  // Header
  header: {
    self: {
      fixed: {
        mobile: true,
      },
    }
  },

  // Subheader
  subheader: {
    display: true,
    displayDesc: false,
    displayDaterangepicker: true,
    layoutVersion: 'v6', // [1..6]
    fixed: false,
    width: 'fixed', // fixed|fluid,
    clear: false,
    style: 'transparent', // transparent/solid
  },

  // Content
  content: {
    width: 'fixed', // fluid|fixed
  },

  // Aside
  aside: {
    self: {
      display: true,
      fixed: true,
      minimize: {
        toggle: true, // allow toggle
        default: false, // default state
      },
    },

    secondary: {
      display: true
    },

    menu: {
      static: true, // static => true | dynamic => true
      dropdown: false, // ok
      scroll: true, // ok
      iconStyle: 'duotone', // duotone, line, bold, solid
      submenu: {
        accordion: true, //
        // dropdown: {
        //   arrow: true,
        //   hoverTimeout: 500, // in milliseconds
        // },
      },
    },
  },

  // Footer
  footer: {
    width: 'fixed', // fixed|fluid
    fixed: true,
  },

  // Extras
  extras: {
    // Search
    search: {
      display: false,
      layout: 'offcanvas', // offcanvas, dropdown,
      offcanvas: {
        direction: 'left',
      },
    },

    // Notifications
    notifications: {
      display: false,
      layout: 'offcanvas', // offcanvas, dropdown,
      dropdown: {
        style: 'dark', // light|dark
      },
      offcanvas: {
        direction: 'left',
      },
    },

    // Quick Actionss
    quickActions: {
      display: true,
      layout: 'offcanvas', // offcanvas, dropdown,
      dropdown: {
        style: 'dark', // light|dark
      },
      offcanvas: {
        direction: 'left',
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
        direction: 'left',
      },
    },

    // Languages
    languages: {
      display: false,
    },

    // Cart
    cart: {
      display: false,
      layout: 'offcanvas', // offcanvas, dropdown,
      offcanvas: {
        direction: 'left',
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
        direction: 'left  ',
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
