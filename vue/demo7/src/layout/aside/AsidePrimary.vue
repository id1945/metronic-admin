<template>
  <div
    class="aside-primary d-flex flex-column align-items-lg-center flex-row-auto"
  >
    <div
      class="
        aside-logo
        d-none d-lg-flex
        flex-column
        align-items-center
        flex-column-auto
        py-10
      "
      id="kt_aside_logo"
    >
      <a href="#">
        <img alt="Logo" src="media/logos/logo-demo7.svg" class="h-30px" />
      </a>
    </div>

    <div
      class="
        aside-nav
        d-flex
        flex-column
        align-items-center
        flex-column-fluid
        w-100
        pt-5 pt-lg-0
      "
      id="kt_aside_nav"
    >
      <div
        class="hover-scroll-y mb-10"
        data-kt-scroll="true"
        data-kt-scroll-activate="{default: false, lg: true}"
        data-kt-scroll-height="auto"
        data-kt-scroll-wrappers="#kt_aside_nav"
        data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
        data-kt-scroll-offset="0px"
      >
        <ul class="nav flex-column">
          <li
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title=""
            data-bs-original-title="Projects"
          >
            <a
              class="
                nav-link
                btn
                btn-icon
                btn-active-color-primary
                btn-color-gray-400
                btn-active-light
              "
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_projects"
            >
              <span class="svg-icon svg-icon-2x">
                <inline-svg src="media/icons/duotune/general/gen025.svg" />
              </span>
            </a>
          </li>

          <li
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title=""
            data-bs-original-title="Menu"
          >
            <a
              class="
                nav-link
                btn
                btn-icon
                btn-active-color-primary
                btn-color-gray-400
                btn-active-light
                active
              "
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_menu"
            >
              <span class="svg-icon svg-icon-2x">
                <inline-svg src="media/icons/duotune/finance/fin006.svg" />
              </span>
            </a>
          </li>

          <li
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title=""
            data-bs-original-title="Subscription"
          >
            <a
              class="
                nav-link
                btn
                btn-icon
                btn-active-color-primary
                btn-color-gray-400
                btn-active-light
              "
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_subscription"
            >
              <span class="svg-icon svg-icon-2x">
                <inline-svg src="media/icons/duotune/general/gen032.svg" />
              </span>
            </a>
          </li>

          <li
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title=""
            data-bs-original-title="Tasks"
          >
            <a
              class="
                nav-link
                btn
                btn-icon
                btn-active-color-primary
                btn-color-gray-400
                btn-active-light
              "
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_tasks"
            >
              <span class="svg-icon svg-icon-2x">
                <inline-svg src="media/icons/duotune/general/gen048.svg" />
              </span>
            </a>
          </li>

          <li
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title=""
            data-bs-original-title="Notifications"
          >
            <a
              class="
                nav-link
                btn
                btn-icon
                btn-active-color-primary
                btn-color-gray-400
                btn-active-light
              "
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_notifications"
            >
              <span class="svg-icon svg-icon-2x">
                <inline-svg src="media/icons/duotune/abstract/abs027.svg" />
              </span>
            </a>
          </li>

          <li
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title=""
            data-bs-original-title="Authors"
          >
            <a
              class="
                nav-link
                btn
                btn-icon
                btn-active-color-primary
                btn-color-gray-400
                btn-active-light
              "
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_authors"
            >
              <span class="svg-icon svg-icon-2x">
                <inline-svg src="media/icons/duotune/files/fil005.svg" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="
        aside-footer
        d-flex
        flex-column
        align-items-center
        flex-column-auto
      "
      id="kt_aside_footer"
    >
      <div class="d-flex align-items-center mb-2">
        <div
          class="
            btn
            btn-icon
            btn-active-color-primary
            btn-color-gray-400
            btn-active-light
          "
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-kt-menu-flip="top-end"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          title="Quick links"
        >
          <span class="svg-icon svg-icon-2 svg-icon-lg-1">
            <inline-svg src="media/icons/duotune/general/gen022.svg" />
          </span>
        </div>
        <KTQuickLinksMenu></KTQuickLinksMenu>
      </div>

      <div class="d-flex align-items-center mb-2">
        <div
          class="
            btn
            btn-icon
            btn-active-color-primary
            btn-color-gray-400
            btn-active-light
          "
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-kt-menu-flip="top-end"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          title="Notifications"
        >
          <span class="svg-icon svg-icon-2 svg-icon-lg-1">
            <inline-svg src="media/icons/duotune/general/gen025.svg" />
          </span>
        </div>
        <KTNotificationsMenu></KTNotificationsMenu>
      </div>

      <div class="d-flex align-items-center mb-3">
        <div
          class="
            btn
            btn-icon
            btn-active-color-primary
            btn-color-gray-400
            btn-active-light
          "
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-kt-menu-flip="top-end"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          title="Activity Logs"
          id="kt_activities_toggle"
        >
          <span class="svg-icon svg-icon-2 svg-icon-lg-1">
            <inline-svg src="media/icons/duotune/general/gen032.svg" />
          </span>
        </div>
      </div>

      <div
        class="d-flex align-items-center mb-10"
        id="kt_header_user_menu_toggle"
      >
        <div
          class="cursor-pointer symbol symbol-40px"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-kt-menu-flip="top-end"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          title="User profile"
        >
          <img src="media/avatars/150-26.jpg" alt="metronic" />
        </div>
        <KTUserMenu></KTUserMenu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTQuickLinksMenu from "@/layout/header/partials/QuickLinksMenu.vue";
import KTNotificationsMenu from "@/layout/header/partials/NotificationsMenu.vue";
import KTUserMenu from "@/layout/header/partials/UserMenu.vue";

export default defineComponent({
  name: "kt-aside-primary",
  components: {
    KTQuickLinksMenu,
    KTNotificationsMenu,
    KTUserMenu,
  },
});
</script>
