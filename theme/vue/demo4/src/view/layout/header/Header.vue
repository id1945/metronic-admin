<template>
  <div id="kt_header" ref="kt_header" class="header bg-white header-fixed">
    <!--begin::Container-->
    <div
      class="d-flex align-items-stretch justify-content-between"
      v-bind:class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
      <!--begin::Left-->
      <div class="d-flex align-items-stretch mr-2">
        <!--begin::Page Title-->
        <h3 class="d-none text-dark d-lg-flex align-items-center mr-10 mb-0">
          Dashboard
        </h3>
        <!--end::Page Title-->
        <!--begin::Header Menu Wrapper-->
        <div
          class="header-menu-wrapper header-menu-wrapper-left"
          id="kt_header_menu_wrapper"
          ref="kt_header_menu_wrapper"
        >
          <!--begin::Header Menu-->
          <div
            id="kt_header_menu"
            ref="kt_header_menu"
            class="header-menu header-menu-mobile header-menu-layout-default"
            v-bind:class="headerMenuClasses"
          >
            <!--begin::Header Nav-->
            <KTMenu></KTMenu>
            <!--end::Header Nav-->
          </div>
          <!--end::Header Menu-->
        </div>
        <!--end::Header Menu Wrapper-->
      </div>
      <!--end::Left-->
      <!--begin::Topbar-->
      <KTTopbar></KTTopbar>
      <!--end::Topbar-->
    </div>
    <!--end::Container-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import KTMenu from "@/view/layout/header/Menu";
import KTLayoutHeader from "@/assets/js/layout/base/header.js";
import KTLayoutHeaderMenu from "@/assets/js/layout/base/header-menu.js";
import KTTopbar from "@/view/layout/header/Topbar";

export default {
  name: "Header",
  components: {
    KTMenu,
    KTTopbar
  },
  mounted() {
    // Init Desktop & Mobile Headers
    KTLayoutHeader.init("kt_header", "kt_header_mobile");

    // Init Header Menu
    KTLayoutHeaderMenu.init(
      this.$refs["kt_header_menu"],
      this.$refs["kt_header_menu_wrapper"]
    );

    const headerRef = this.$refs["kt_header"];

    headerRef.querySelectorAll("a[class='menu-link']").forEach(item => {
      item.addEventListener("click", () => {
        KTLayoutHeaderMenu.getOffcanvas().hide();
      });
    });
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
