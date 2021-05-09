export const DefaultLayoutConfig = {
  demo: 'demo2',
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
          primary: '#6993FF',
          secondary: '#E5EAEE',
          success: '#1BC5BD',
          info: '#8950FC',
          warning: '#FFA800',
          danger: '#F64E60',
          light: '#F3F6F9',
          dark: '#212121',
        },
        light: {
          white: '#ffffff',
          primary: '#E1E9FF',
          secondary: '#ECF0F3',
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
          secondary: '#212121',
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
    backgroundImage: 'bg/bg-10.jpg'
  },

  // Page loader
  pageLoader: {
    type: '', // default|spinner-message|spinner-logo
  },

  // Header
  header: {
    self: {
      display: true,
      width: 'fixed', // fixed|fluid,
      fixed: {
        desktop: true,
        mobile: false,
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
    displayDesc: false,
    displayDaterangepicker: true,
    breadcrumb: {
      display: true
    },
    layoutVersion: 'v7', // [1..7]
    fixed: false,
    width: 'fixed', // fixed|fluid,
    clear: false,
    style: 'transparent', // transparent/solid
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
      display: false
    },

    menu: {
      static: true, // static => true | dynamic => true
      dropdown: false, // ok
      scroll: false, // ok
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
    width: 'fixed', // fluid/fixed
    fixed: true,
    layout: 'compact' // compact/extended
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
      layout: 'dropdown', // offcanvas, dropdown,
      dropdown: {
        style: 'light', // light|dark
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
