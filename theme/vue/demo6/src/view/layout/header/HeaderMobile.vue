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
        src="media/logos/logo-letter-1.png"
        class="logo-default max-h-30px"
      />
    </a>
    <!--end::Logo-->
    <!--begin::Toolbar-->
    <div class="d-flex align-items-center">
      <button
        class="btn rounded-0 p-0 burger-icon burger-icon-left"
        id="kt_header_mobile_toggle"
      >
        <span> </span>
      </button>
      <button
        class="btn btn-hover-text-primary p-0 ml-5"
        id="kt_sidebar_mobile_toggle"
        ref="kt_sidebar_mobile_toggle"
      >
        <span class="svg-icon svg-icon-xl">
          <inline-svg src="media/svg/icons/Design/Substract.svg" />
        </span>
      </button>
      <button
        class="btn btn-hover-text-primary p-0 ml-2"
        id="kt_aside_mobile_toggle"
        ref="kt_aside_mobile_toggle"
      >
        <span class="svg-icon svg-icon-xl">
          <inline-svg src="media/svg/icons/General/User.svg" />
        </span>
      </button>
    </div>
    <!--end::Toolbar-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "KTHeaderMobile",
  components: {},
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
