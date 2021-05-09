<template>
  <!-- begin:: Header -->
  <div
    id="kt_header"
    ref="kt_header"
    class="header header-fixed"
    v-bind:class="headerClasses"
  >
    <div
      class="d-flex align-items-stretch justify-content-between"
      v-bind:class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
      <div class="d-none d-lg-flex align-items-center mr-3">
        <!--begin::Aside Toggle-->
        <button
          class="btn btn-icon aside-toggle ml-n3 mr-10"
          id="kt_aside_desktop_toggle"
          ref="kt_aside_desktop_toggle"
        >
          <span class="svg-icon svg-icon-xxl svg-icon-dark-75">
            <!--begin::Svg Icon | path:assets/media/svg/icons/Text/Align-left.svg-->
            <inline-svg src="media/svg/icons/Text/Align-left.svg" />
            <!--end::Svg Icon-->
          </span>
        </button>
        <!--end::Aside Toggle-->
        <div class="header-logo">
          <router-link to="/">
            <img
              alt="Logo"
              :src="layoutConfig('self.logo.default')"
              class="logo-sticky max-h-35px"
            />
          </router-link>
        </div>

        <!--begin::Desktop Search-->
        <div
          class="quick-search quick-search-inline ml-20 w-300px"
          id="kt_quick_search_inline"
        >
          <!--begin::Form-->
          <form method="get" class="quick-search-form">
            <div class="input-group rounded bg-light">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <span class="svg-icon svg-icon-lg">
                    <!--begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg-->
                    <inline-svg src="media/svg/icons/General/Search.svg" />
                    <!--end::Svg Icon-->
                  </span>
                </span>
              </div>
              <input
                type="text"
                class="form-control h-45px"
                placeholder="Search..."
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i
                    class="quick-search-close ki ki-close icon-sm text-muted"
                  ></i>
                </span>
              </div>
            </div>
          </form>
          <!--end::Form-->
          <!--begin::Search Toggle-->
          <div
            id="kt_quick_search_toggle"
            data-toggle="dropdown"
            data-offset="0px,1px"
          ></div>
          <!--end::Search Toggle-->
          <!--begin::Dropdown-->
          <div
            class="dropdown-menu dropdown-menu-left dropdown-menu-lg dropdown-menu-anim-up"
          >
            <div
              class="quick-search-wrapper scroll"
              data-scroll="true"
              data-height="350"
              data-mobile-height="200"
            ></div>
          </div>
          <!--end::Dropdown-->
        </div>
        <!--end::Desktop Search-->
      </div>

      <KTTopbar></KTTopbar>
    </div>
  </div>
  <!-- end:: Header -->
</template>

<script>
import { mapGetters } from "vuex";
import KTTopbar from "@/view/layout/header/Topbar.vue";
import KTLayoutHeader from "@/assets/js/layout/base/header.js";

export default {
  name: "KTHeader",
  components: {
    KTTopbar
  },
  mounted() {
    // Init Desktop & Mobile Headers
    KTLayoutHeader.init("kt_header", "kt_header_mobile");
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Check if the header menu is enabled
     * @returns {boolean}
     */
    headerMenuEnabled() {
      return !!this.layoutConfig("header.menu.self.display");
    },

    /**
     * Get extra classes for header based on the options
     * @returns {null|*}
     */
    headerClasses() {
      const classes = this.getClasses("header");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Get extra classes for header menu based on the options
     * @returns {null|*}
     */
    headerMenuClasses() {
      const classes = this.getClasses("header_menu");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Check if header container is fluid
     */
    widthFluid() {
      return this.layoutConfig("header.self.width") === "fluid";
    }
  }
};
</script>
