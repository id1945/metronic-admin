<template>
  <div id="kt_header" ref="kt_header" class="header header-fixed">
    <!--begin::Header Wrapper-->
    <div
      class="header-wrapper rounded-top-xl d-flex flex-grow-1 align-items-center"
    >
      <!--begin::Container-->
      <div
        class="container-fluid d-flex align-items-center justify-content-end justify-content-lg-between flex-wrap"
      >
        <!--begin::Menu Wrapper-->
        <div
          class="header-menu-wrapper header-menu-wrapper-left py-lg-2"
          id="kt_header_menu_wrapper"
          ref="kt_header_menu_wrapper"
        >
          <!--begin::Menu-->
          <div
            id="kt_header_menu"
            ref="kt_header_menu"
            class="header-menu header-menu-mobile header-menu-layout-default"
          >
            <!--begin::Header Nav-->
            <KTMenu></KTMenu>
            <!--end::Header Nav-->
          </div>
          <!--end::Menu-->
        </div>
        <!--end::Menu Wrapper-->
        <div class="d-flex align-items-center py-3">
          <KTDropdown></KTDropdown>
        </div>
      </div>
      <!--end::Container-->
    </div>
    <!--end::Header Wrapper-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import KTMenu from "@/view/layout/header/Menu";
import KTLayoutHeader from "@/assets/js/layout/base/header.js";
import KTLayoutHeaderMenu from "@/assets/js/layout/base/header-menu.js";
import KTDropdown from "@/view/layout/header/Dropdown2";

export default {
  name: "Header",
  components: {
    KTMenu,
    KTDropdown
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
