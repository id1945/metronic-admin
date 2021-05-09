export const DynamicAsideMenuConfig = {
  items: [
    {
      title: 'Dashboard',
      root: true,
      icon: 'flaticon2-architecture-and-city',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/dashboard',
      translate: 'MENU.DASHBOARD',
      bullet: 'dot',
    },
    {
      title: 'Layout Builder',
      root: true,
      icon: 'flaticon2-expand',
      page: '/builder',
      svg: './assets/media/svg/icons/Home/Library.svg'
    },
    { section: 'Components' },
    {
      title: 'Google Material',
      root: true,
      bullet: 'dot',
      page: '/material',
      icon: 'flaticon2-browser-2',
      svg: './assets/media/svg/icons/Design/Cap-2.svg',
      submenu: [
        {
          title: 'Form Controls',
          bullet: 'dot',
          page: '/material/form-controls',
          submenu: [
            {
              title: 'Auto Complete',
              page: '/material/form-controls/autocomplete',
              permission: 'accessToECommerceModule'
            },
            {
              title: 'Checkbox',
              page: '/material/form-controls/checkbox'
            },
            {
              title: 'Radio Button',
              page: '/material/form-controls/radiobutton'
            },
            {
              title: 'Datepicker',
              page: '/material/form-controls/datepicker'
            },
            {
              title: 'Form Field',
              page: '/material/form-controls/formfield'
            },
            {
              title: 'Input',
              page: '/material/form-controls/input'
            },
            {
              title: 'Select',
              page: '/material/form-controls/select'
            },
            {
              title: 'Slider',
              page: '/material/form-controls/slider'
            },
            {
              title: 'Slider Toggle',
              page: '/material/form-controls/slidertoggle'
            }
          ]
        },
        {
          title: 'Navigation',
          bullet: 'dot',
          page: '/material/navigation',
          submenu: [
            {
              title: 'Menu',
              page: '/material/navigation/menu'
            },
            {
              title: 'Sidenav',
              page: '/material/navigation/sidenav'
            },
            {
              title: 'Toolbar',
              page: '/material/navigation/toolbar'
            }
          ]
        },
        {
          title: 'Layout',
          bullet: 'dot',
          page: '/material/layout',
          submenu: [
            {
              title: 'Card',
              page: '/material/layout/card'
            },
            {
              title: 'Divider',
              page: '/material/layout/divider'
            },
            {
              title: 'Expansion panel',
              page: '/material/layout/expansion-panel'
            },
            {
              title: 'Grid list',
              page: '/material/layout/grid-list'
            },
            {
              title: 'List',
              page: '/material/layout/list'
            },
            {
              title: 'Tabs',
              page: '/material/layout/tabs'
            },
            {
              title: 'Stepper',
              page: '/material/layout/stepper'
            },
            {
              title: 'Tree',
              page: '/material/layout/tree'
            }
          ]
        },
        {
          title: 'Buttons & Indicators',
          bullet: 'dot',
          page: '/material/buttons-and-indicators',
          submenu: [
            {
              title: 'Button',
              page: '/material/buttons-and-indicators/button'
            },
            {
              title: 'Button toggle',
              page: '/material/buttons-and-indicators/button-toggle'
            },
            {
              title: 'Chips',
              page: '/material/buttons-and-indicators/chips'
            },
            {
              title: 'Icon',
              page: '/material/buttons-and-indicators/icon'
            },
            {
              title: 'Progress bar',
              page: '/material/buttons-and-indicators/progress-bar'
            },
            {
              title: 'Progress spinner',
              page: '/material/buttons-and-indicators/progress-spinner'
            },
            {
              title: 'Ripples',
              page: '/material/buttons-and-indicators/ripples'
            }
          ]
        },
        {
          title: 'Popups & Modals',
          bullet: 'dot',
          page: '/material/popups-and-modals',
          submenu: [
            {
              title: 'Bottom sheet',
              page: '/material/popups-and-modals/bottom-sheet'
            },
            {
              title: 'Dialog',
              page: '/material/popups-and-modals/dialog'
            },
            {
              title: 'Snackbar',
              page: '/material/popups-and-modals/snackbar'
            },
            {
              title: 'Tooltip',
              page: '/material/popups-and-modals/tooltip'
            }
          ]
        },
        {
          title: 'Data table',
          bullet: 'dot',
          page: '/material/data-table',
          submenu: [
            {
              title: 'Paginator',
              page: '/material/data-table/paginator'
            },
            {
              title: 'Sort header',
              page: '/material/data-table/sort-header'
            },
            {
              title: 'Table',
              page: '/material/data-table/table'
            }
          ]
        }
      ]
    },
    {
      title: 'Ng-Bootstrap',
      root: true,
      bullet: 'dot',
      page: '/ngbootstrap',
      icon: 'flaticon2-digital-marketing',
      svg: './assets/media/svg/icons/Shopping/Bitcoin.svg',
      submenu: [
        {
          title: 'Accordion',
          page: '/ngbootstrap/accordion'
        },
        {
          title: 'Alert',
          page: '/ngbootstrap/alert'
        },
        {
          title: 'Buttons',
          page: '/ngbootstrap/buttons'
        },
        {
          title: 'Carousel',
          page: '/ngbootstrap/carousel'
        },
        {
          title: 'Collapse',
          page: '/ngbootstrap/collapse'
        },
        {
          title: 'Datepicker',
          page: '/ngbootstrap/datepicker'
        },
        {
          title: 'Dropdown',
          page: '/ngbootstrap/dropdown'
        },
        {
          title: 'Modal',
          page: '/ngbootstrap/modal'
        },
        {
          title: 'Pagination',
          page: '/ngbootstrap/pagination'
        },
        {
          title: 'Popover',
          page: '/ngbootstrap/popover'
        },
        {
          title: 'Progressbar',
          page: '/ngbootstrap/progressbar'
        },
        {
          title: 'Rating',
          page: '/ngbootstrap/rating'
        },
        {
          title: 'Tabs',
          page: '/ngbootstrap/tabs'
        },
        {
          title: 'Timepicker',
          page: '/ngbootstrap/timepicker'
        },
        {
          title: 'Tooltips',
          page: '/ngbootstrap/tooltip'
        },
        {
          title: 'Typehead',
          page: '/ngbootstrap/typehead'
        }
      ]
    },
    { section: 'Applications' },
    {
      title: 'eCommerce',
      bullet: 'dot',
      icon: 'flaticon2-list-2',
      svg: './assets/media/svg/icons/Shopping/Cart3.svg',
      root: true,
      permission: 'accessToECommerceModule',
      page: '/ecommerce',
      submenu: [
        {
          title: 'Customers',
          page: '/ecommerce/customers'
        },
        {
          title: 'Products',
          page: '/ecommerce/products'
        },
      ]
    },
    {
      title: 'User Management',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-user-outline-symbol',
      svg: './assets/media/svg/icons/General/User.svg',
      page: '/user-management',
      submenu: [
        {
          title: 'Users',
          page: '/user-management/users'
        },
        {
          title: 'Roles',
          page: '/user-management/roles'
        }
      ]
    },
    {
      title: 'User Profile',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-user-outline-symbol',
      svg: './assets/media/svg/icons/Communication/Add-user.svg',
      page: '/user-profile',
    },
    {

    },
    { section: 'Custom' },
    {
      title: 'Wizards',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-mail-1',
      svg: './assets/media/svg/icons/Shopping/Box1.svg',
      page: '/wizards',
      submenu: [
        {
          title: 'Wizard 1',
          page: '/wizards/wizard-1'
        },
        {
          title: 'Wizard 2',
          page: '/wizards/wizard-2'
        },
        {
          title: 'Wizard 3',
          page: '/wizards/wizard-3'
        },
        {
          title: 'Wizard 4',
          page: '/wizards/wizard-4'
        },
      ]
    },
    {
      title: 'Error Pages',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-list-2',
      svg: './assets/media/svg/icons/Code/Warning-2.svg',
      page: '/error',
      submenu: [
        {
          title: 'Error 1',
          page: '/error/error-1'
        },
        {
          title: 'Error 2',
          page: '/error/error-2'
        },
        {
          title: 'Error 3',
          page: '/error/error-3'
        },
        {
          title: 'Error 4',
          page: '/error/error-4'
        },
        {
          title: 'Error 5',
          page: '/error/error-5'
        },
        {
          title: 'Error 6',
          page: '/error/error-6'
        },
      ]
    },
  ]
};
