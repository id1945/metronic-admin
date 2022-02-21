import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/doc-overview",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "build",
        name: "build",
        component: () => import("@/views/documentation/get-started/Build.vue"),
      },
      {
        path: "setup-theme-skeleton",
        name: "setup-theme-skeleton",
        component: () =>
          import("@/views/documentation/get-started/SetupThemeSkeleton.vue"),
      },
      {
        path: "vue-laravel-integration",
        name: "vue-laravel-integration",
        component: () =>
          import("@/views/documentation/get-started/VueLaravelIntegration.vue"),
      },
      {
        path: "internationalization",
        name: "internationalization",
        component: () =>
          import("@/views/documentation/get-started/Internationalization.vue"),
      },
      {
        path: "dark-mode",
        name: "dark-mode",
        component: () =>
          import("@/views/documentation/get-started/DarkMode.vue"),
      },
      {
        path: "rtl",
        name: "rtl",
        component: () => import("@/views/documentation/get-started/RTL.vue"),
      },
      {
        path: "doc-overview",
        name: "doc-overview",
        component: () =>
          import("@/views/documentation/get-started/Overview.vue"),
      },
      {
        path: "updates",
        name: "updates",
        component: () =>
          import("@/views/documentation/get-started/Updates.vue"),
      },
      {
        path: "changelog",
        name: "changelog",
        component: () => import("@/views/Changelog.vue"),
      },
      {
        path: "utilities",
        name: "utilities",
        meta: {
          desc: "extended utility classes",
        },
        component: () => import("@/views/documentation/base/Utilities.vue"),
      },
      {
        path: "helpers/flex-layouts",
        name: "flex-layouts",
        meta: {
          desc: "extended flex layout classes",
        },
        component: () =>
          import("@/views/documentation/base/helpers/FlexLayouts.vue"),
      },
      {
        path: "helpers/text",
        name: "text",
        meta: {
          desc: "extended text classes",
        },
        component: () => import("@/views/documentation/base/helpers/Text.vue"),
      },
      {
        path: "helpers/background",
        name: "backkground",
        meta: {
          desc: "extended background classes",
        },
        component: () =>
          import("@/views/documentation/base/helpers/Background.vue"),
      },
      {
        path: "helpers/borders",
        name: "borders",
        meta: {
          desc: "extended borders classes",
        },
        component: () =>
          import("@/views/documentation/base/helpers/Borders.vue"),
      },
      {
        path: "forms",
        name: "forms",
        meta: {
          desc: "forms elements",
        },
        component: () => import("@/views/documentation/base/Forms.vue"),
      },
      {
        path: "buttons",
        name: "buttons",
        meta: {
          desc: "buttons elements",
        },
        component: () => import("@/views/documentation/base/Buttons.vue"),
      },
      {
        path: "indicator",
        name: "indicator",
        meta: {
          desc: "indicator element",
        },
        component: () => import("@/views/documentation/base/Indicator.vue"),
      },
      {
        path: "rotate",
        name: "rotate",
        meta: {
          desc: "Rotate element",
        },
        component: () => import("@/views/documentation/base/Rotate.vue"),
      },
      {
        path: "tables",
        name: "tables",
        meta: {
          desc: "extended bootstrap tables",
        },
        component: () => import("@/views/documentation/base/Tables.vue"),
      },
      {
        path: "cards",
        name: "cards",
        meta: {
          desc: "card elements",
        },
        component: () => import("@/views/documentation/base/Cards.vue"),
      },
      {
        path: "symbol",
        name: "symbol",
        meta: {
          desc: "symbol elements",
        },
        component: () => import("@/views/documentation/base/Symbol.vue"),
      },
      {
        path: "badges",
        name: "badges",
        meta: {
          desc: "badge elements",
        },
        component: () => import("@/views/documentation/base/Badges.vue"),
      },
      {
        path: "pulse",
        name: "pulse",
        meta: {
          desc: "pulse elements",
        },
        component: () => import("@/views/documentation/base/Pulse.vue"),
      },
      {
        path: "bullets",
        name: "bullets",
        meta: {
          desc: "bullets elements",
        },
        component: () => import("@/views/documentation/base/Bullets.vue"),
      },
      {
        path: "accordion",
        name: "accordion",
        meta: {
          desc: "accordion elements",
        },
        component: () => import("@/views/documentation/base/Accordion.vue"),
      },
      {
        path: "carousel",
        name: "carousel",
        meta: {
          desc: "carousel elements",
        },
        component: () => import("@/views/documentation/base/Carousel.vue"),
      },
      {
        path: "overlay",
        name: "overlay",
        meta: {
          desc: "overlay elements",
        },
        component: () => import("@/views/documentation/base/Overlay.vue"),
      },
      {
        path: "separator",
        name: "separator",
        meta: {
          desc: "separator elements",
        },
        component: () => import("@/views/documentation/base/Separator.vue"),
      },
      {
        path: "tabs",
        name: "tabs",
        meta: {
          desc: "tabs elements",
        },
        component: () => import("@/views/documentation/base/Tabs.vue"),
      },
      {
        path: "breadcrumb",
        name: "breadcrumb",
        meta: {
          desc: "breadcrumb elements",
        },
        component: () => import("@/views/documentation/base/Breadcrumb.vue"),
      },
      {
        path: "modal",
        name: "modal",
        meta: {
          desc: "modal elements",
        },
        component: () => import("@/views/documentation/base/Modal.vue"),
      },
      {
        path: "pagination",
        name: "pagination",
        meta: {
          desc: "pagination elements",
        },
        component: () => import("@/views/documentation/base/Pagination.vue"),
      },
      {
        path: "vue-select",
        name: "vue-select",
        component: () => import("@/views/documentation/forms/VueSelect.vue"),
      },
      {
        path: "vee-validate",
        name: "vee-validate",
        component: () => import("@/views/documentation/forms/VeeValidate.vue"),
      },
      {
        path: "vue-currency-input",
        name: "vue-currency-input",
        component: () =>
          import("@/views/documentation/forms/VueCurrencyInput.vue"),
      },
      {
        path: "element-ui",
        name: "element-ui",
        component: () =>
          import("@/views/documentation/element-ui/ElementUI.vue"),
        children: [
          {
            path: "basic/layout",
            name: "layout",
            component: () =>
              import("@/views/documentation/element-ui/basic/Layout.vue"),
          },
          {
            path: "basic/layout-container",
            name: "layout-container",
            component: () =>
              import(
                "@/views/documentation/element-ui/basic/LayoutContainer.vue"
              ),
          },
          {
            path: "basic/icon",
            name: "icon",
            component: () =>
              import("@/views/documentation/element-ui/basic/Icon.vue"),
          },
          {
            path: "basic/button",
            name: "button",
            component: () =>
              import("@/views/documentation/element-ui/basic/Button.vue"),
          },
          {
            path: "basic/link",
            name: "link",
            component: () =>
              import("@/views/documentation/element-ui/basic/Link.vue"),
          },
          {
            path: "basic/space",
            name: "space",
            component: () =>
              import("@/views/documentation/element-ui/basic/Space.vue"),
          },
          {
            path: "form/radio",
            name: "radio",
            component: () =>
              import("@/views/documentation/element-ui/form/Radio.vue"),
          },
          {
            path: "form/checkbox",
            name: "checkbox",
            component: () =>
              import("@/views/documentation/element-ui/form/Checkbox.vue"),
          },
          {
            path: "form/input",
            name: "input",
            component: () =>
              import("@/views/documentation/element-ui/form/Input.vue"),
          },
          {
            path: "form/input-number",
            name: "input-number",
            component: () =>
              import("@/views/documentation/element-ui/form/InputNumber.vue"),
          },
          {
            path: "form/select",
            name: "select",
            component: () =>
              import("@/views/documentation/element-ui/form/Select.vue"),
          },
          {
            path: "form/cascader",
            name: "cascader",
            component: () =>
              import("@/views/documentation/element-ui/form/Cascader.vue"),
          },
          {
            path: "form/switch",
            name: "switch",
            component: () =>
              import("@/views/documentation/element-ui/form/Switch.vue"),
          },
          {
            path: "form/slider",
            name: "slider",
            component: () =>
              import("@/views/documentation/element-ui/form/Slider.vue"),
          },
          {
            path: "form/time-picker",
            name: "time-picker",
            component: () =>
              import("@/views/documentation/element-ui/form/TimePicker.vue"),
          },
          {
            path: "form/time-select",
            name: "time-select",
            component: () =>
              import("@/views/documentation/element-ui/form/TimeSelect.vue"),
          },
          {
            path: "form/date-picker",
            name: "date-picker",
            component: () =>
              import("@/views/documentation/element-ui/form/DatePicker.vue"),
          },
          {
            path: "form/date-time-picker",
            name: "date-time-picker",
            component: () =>
              import(
                "@/views/documentation/element-ui/form/DateTimePicker.vue"
              ),
          },
          {
            path: "form/upload",
            name: "upload",
            component: () =>
              import("@/views/documentation/element-ui/form/Upload.vue"),
          },
          {
            path: "form/rate",
            name: "rate",
            component: () =>
              import("@/views/documentation/element-ui/form/Rate.vue"),
          },
          {
            path: "form/color-picker",
            name: "color-picker",
            component: () =>
              import("@/views/documentation/element-ui/form/ColorPicker.vue"),
          },
          {
            path: "form/transfer",
            name: "transfer",
            component: () =>
              import("@/views/documentation/element-ui/form/Transfer.vue"),
          },
          {
            path: "form/form",
            name: "form",
            component: () =>
              import("@/views/documentation/element-ui/form/Form.vue"),
          },
          {
            path: "data/table",
            name: "table",
            component: () =>
              import("@/views/documentation/element-ui/data/Table.vue"),
          },
          {
            path: "data/tag",
            name: "tag",
            component: () =>
              import("@/views/documentation/element-ui/data/Tag.vue"),
          },
          {
            path: "data/progress",
            name: "progress",
            component: () =>
              import("@/views/documentation/element-ui/data/Progress.vue"),
          },
          {
            path: "data/tree",
            name: "tree",
            component: () =>
              import("@/views/documentation/element-ui/data/Tree.vue"),
          },
          {
            path: "data/pagination",
            name: "data-pagination",
            component: () =>
              import("@/views/documentation/element-ui/data/Pagination.vue"),
          },
          {
            path: "data/badge",
            name: "badge",
            component: () =>
              import("@/views/documentation/element-ui/data/Badge.vue"),
          },
          {
            path: "data/skeleton",
            name: "skeleton",
            component: () =>
              import("@/views/documentation/element-ui/data/Skeleton.vue"),
          },
          {
            path: "data/empty",
            name: "empty",
            component: () =>
              import("@/views/documentation/element-ui/data/Empty.vue"),
          },
          {
            path: "notice/alert",
            name: "alert",
            component: () =>
              import("@/views/documentation/element-ui/notice/Alert.vue"),
          },
          {
            path: "notice/loading",
            name: "loading",
            component: () =>
              import("@/views/documentation/element-ui/notice/Loading.vue"),
          },
          {
            path: "notice/message",
            name: "message",
            component: () =>
              import("@/views/documentation/element-ui/notice/Message.vue"),
          },
          {
            path: "notice/message-box",
            name: "message-box",
            component: () =>
              import("@/views/documentation/element-ui/notice/MessageBox.vue"),
          },
          {
            path: "notice/notification",
            name: "notification",
            component: () =>
              import(
                "@/views/documentation/element-ui/notice/Notification.vue"
              ),
          },
          {
            path: "navigation/affix",
            name: "affix",
            component: () =>
              import("@/views/documentation/element-ui/navigation/Affix.vue"),
          },
          {
            path: "navigation/nav-menu",
            name: "nav-menu",
            component: () =>
              import("@/views/documentation/element-ui/navigation/NavMenu.vue"),
          },
          {
            path: "navigation/tabs",
            name: "navigation-tabs",
            component: () =>
              import("@/views/documentation/element-ui/navigation/Tabs.vue"),
          },
          {
            path: "navigation/breadcrumb",
            name: "navigation-breadcrumb",
            component: () =>
              import(
                "@/views/documentation/element-ui/navigation/Breadcrumb.vue"
              ),
          },
          {
            path: "navigation/page-header",
            name: "page-header",
            component: () =>
              import(
                "@/views/documentation/element-ui/navigation/PageHeader.vue"
              ),
          },
          {
            path: "navigation/dropdown",
            name: "dropdown",
            component: () =>
              import(
                "@/views/documentation/element-ui/navigation/Dropdown.vue"
              ),
          },
          {
            path: "navigation/steps",
            name: "steps",
            component: () =>
              import("@/views/documentation/element-ui/navigation/Steps.vue"),
          },
        ],
      },
      {
        path: "tinymce",
        name: "tinymce",
        component: () => import("@/views/documentation/editors/TinyMCE.vue"),
      },
      {
        path: "fullcalendar",
        name: "fullcalendar",
        component: () =>
          import("@/views/documentation/general/FullCalendar.vue"),
      },
      {
        path: "icons/duotune",
        name: "duotune",
        meta: {
          desc: "duotune svg icons",
        },
        component: () => import("@/views/documentation/general/Duotune.vue"),
      },
      {
        path: "icons/bootstrap-icons",
        name: "bootstrap-icons",
        meta: {
          desc: "free, high quality, open source icon library",
        },
        component: () =>
          import("@/views/documentation/general/BootstrapIcons.vue"),
      },
      {
        path: "icons/font-awesome",
        name: "font-awesome",
        meta: {
          desc: "awesome font icons",
        },
        component: () =>
          import("@/views/documentation/general/FontAwesome.vue"),
      },
      {
        path: "icons/line-awesome",
        name: "line-awesome",
        meta: {
          desc: "line font icons",
        },
        component: () =>
          import("@/views/documentation/general/LineAwesome.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/doc-overview",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
