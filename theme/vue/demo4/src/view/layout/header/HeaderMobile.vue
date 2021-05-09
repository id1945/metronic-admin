<template>
  <div
    id="kt_header_mobile"
    ref="kt_header_mobile"
    class="header-mobile header-mobile-fixed"
    v-bind:class="headerClasses"
  >
    <!--begin::Logo-->
    <a href="/">
      <img
        alt="Logo"
        src="media/logos/logo-letter-3.png"
        class="logo-default max-h-30px"
      />
    </a>
    <!--end::Logo-->
    <!--begin::Toolbar-->
    <div class="d-flex align-items-center">
      <!--begin::Aside Mobile Toggle-->
      <button
        v-if="asideEnabled"
        class="btn p-0 burger-icon burger-icon-left"
        id="kt_aside_mobile_toggle"
        ref="kt_aside_mobile_toggle"
      >
        <span> </span>
      </button>
      <!--end::Aside Mobile Toggle-->
      <!--begin::Header Menu Mobile Toggle-->
      <button
        class="btn p-0 burger-icon ml-4"
        id="kt_header_mobile_toggle"
        ref="kt_header_mobile_toggle"
      >
        <span> </span>
      </button>
      <!--end::Header Menu Mobile Toggle-->
      <!--begin::Topbar Mobile Toggle-->
      <button
        class="btn btn-hover-text-primary p-0 ml-2"
        id="kt_header_mobile_topbar_toggle"
        ref="kt_header_mobile_topbar_toggle"
      >
        <span class="svg-icon svg-icon-xl">
          <!--begin::Svg Icon | path:assets/media/svg/icons/General/User.svg-->
          <inline-svg src="media/svg/icons/General/User.svg" />
          <!--end::Svg Icon-->
        </span>
      </button>
      <!--end::Topbar Mobile Toggle-->
    </div>
    <!--end::Toolbar-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import KTLayoutHeaderTopbar from "@/assets/js/layout/base/header-topbar.js";

export default {
  name: "KTHeaderMobile",
  components: {},
  mounted() {
    // Init Header Topbar For Mobile Mode
    KTLayoutHeaderTopbar.init(this.$refs["kt_header_mobile_topbar_toggle"]);
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Get header logo
     * @returns {string}
     */
    headerLogo() {
      return process.env.BASE_URL + this.layoutConfig("self.logo");
    },

    /**
     * Get classes for mobile header
     * @returns {null|*}
     */
    headerClasses() {
      const classes = this.getClasses("header_mobile");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Check if the left aside menu is enabled
     * @returns {boolean}
     */
    asideEnabled() {
      return this.layoutConfig("aside.self.display");
    }
  }
};
</script>
