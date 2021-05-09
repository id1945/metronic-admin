<template>
  <!-- begin:: Aside -->
  <div
    class="aside aside-left aside-fixed d-flex flex-column flex-row-auto"
    id="kt_aside"
    ref="kt_aside"
    @mouseover="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <!-- begin:: Aside -->
    <KTBrand></KTBrand>
    <!-- end:: Aside -->

    <!-- begin:: Aside Menu -->
    <div
      class="aside-menu-wrapper flex-column-fluid"
      id="kt_aside_menu_wrapper"
    >
      <div
        ref="kt_aside_menu"
        id="kt_aside_menu"
        class="aside-menu my-4"
        data-menu-vertical="1"
        data-menu-dropdown-timeout="500"
        v-bind:class="asideMenuClass"
      >
        <!-- example static menu here -->
        <perfect-scrollbar
          class="aside-menu scroll"
          style="max-height: 90vh; position: relative;"
        >
          <KTMenu></KTMenu>
        </perfect-scrollbar>
      </div>
    </div>
  </div>
  <!-- end:: Aside -->
</template>

<script>
import { mapGetters } from "vuex";
import KTBrand from "@/view/layout/brand/Brand.vue";

import KTLayoutAside from "@/assets/js/layout/base/aside.js";
import KTLayoutAsideMenu from "@/assets/js/layout/base/aside-menu.js";
import KTMenu from "@/view/layout/aside/Menu.vue";

export default {
  name: "KTAside",
  data() {
    return {
      insideTm: 0,
      outsideTm: 0
    };
  },
  components: {
    KTBrand,
    KTMenu
  },
  mounted() {
    this.$nextTick(() => {
      const asideRef = this.$refs["kt_aside"];

      // Init Aside
      KTLayoutAside.init(asideRef);

      asideRef.querySelectorAll("a[class='menu-link']").forEach(item => {
        item.addEventListener("click", () => {
          KTLayoutAside.getOffcanvas().hide();
        });
      });

      // Init Aside Menu
      KTLayoutAsideMenu.init(this.$refs["kt_aside_menu"]);
    });
  },
  methods: {
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     */
    mouseEnter() {
      if (this.layoutConfig("aside.self.minimize.hoverable")) {
        // check if the left aside menu is fixed
        if (document.body.classList.contains("aside-fixed")) {
          if (this.outsideTm) {
            clearTimeout(this.outsideTm);
            this.outsideTm = null;
          }

          // if the left aside menu is minimized
          if (document.body.classList.contains("aside-minimize")) {
            document.body.classList.add("aside-minimize-hover");

            // show the left aside menu
            document.body.classList.remove("aside-minimize");
          }
        }
      }
    },

    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     */
    mouseLeave() {
      if (this.layoutConfig("aside.self.minimize.hoverable")) {
        if (document.body.classList.contains("aside-fixed")) {
          if (this.insideTm) {
            clearTimeout(this.insideTm);
            this.insideTm = null;
          }

          if (document.querySelector(".aside-menu .scroll")) {
            document.querySelector(".aside-menu .scroll").scrollTop = 0;
          }

          // if the left aside menu is expand
          if (document.body.classList.contains("aside-minimize-hover")) {
            // hide back the left aside menu
            document.body.classList.remove("aside-minimize-hover");
            document.body.classList.add("aside-minimize");
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Get extra classes for menu based on the options
     */
    asideMenuClass() {
      const classes = this.getClasses("aside_menu");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    }
  }
};
</script>
