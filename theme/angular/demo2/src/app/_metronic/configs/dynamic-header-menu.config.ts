export const DynamicHeaderMenuConfig = {
  items: [
    {
      title: 'Dashboards',
      root: true,
      alignment: 'left',
      page: '/dashboard',
      translate: 'MENU.DASHBOARD',
    },
    {
      title: 'Builder',
      root: true,
      alignment: 'left',
      page: '/builder',
    },
    {
      title: 'Material UI',
      bullet: 'dot',
      page: '/material',
      icon: 'flaticon-interface-7',
      submenu: [
        {
          title: 'Form Controls',
          bullet: 'dot',
          svg: './assets/media/svg/icons/Design/PenAndRuller.svg',
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
          ],
        },
        {
          title: 'Navigation',
          bullet: 'dot',
          svg: './assets/media/svg/icons/Navigation/Up-down.svg',
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
          svg: './assets/media/svg/icons/Layout/Layout-right-panel-2.svg',
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
          svg: './assets/media/svg/icons/Home/Cupboard.svg',
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
          svg: './assets/media/svg/icons/General/Duplicate.svg',
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
          svg: './assets/media/svg/icons/Layout/Layout-top-panel-4.svg',
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
      title: 'NgBootstrap',
      bullet: 'dot',
      icon: 'flaticon-web',
      page: '/ngbootstrap',
      mega: true,
      submenu: [
        {
          title: 'A ... C',
          submenu: [{
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
          }]
        },
        {
          title: 'C ... M',
          submenu: [{
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
          }]
        },
        {
          title: 'P ... R',
          submenu: [{
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
          }]
        },
        {
          title: 'T ... Z',
          submenu: [
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
        }
      ]
    },
    {
      title: 'Custom',
      root: true,
      alignment: 'left',
      toggle: 'click',
      page: '',
      submenu: [
        {
          title: 'eCommerce',
          bullet: 'dot',
          icon: 'flaticon-business',
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
          bullet: 'dot',
          icon: 'flaticon-user',
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
          bullet: 'dot',
          icon: 'flaticon-user',
          page: '/user-profile'
        },
        {
          title: 'Error Pages',
          bullet: 'dot',
          icon: 'flaticon2-list-2',
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
        {
          title: 'Wizards',
          bullet: 'dot',
          icon: 'flaticon2-mail-1',
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
        }
      ]
    }
  ]
};
