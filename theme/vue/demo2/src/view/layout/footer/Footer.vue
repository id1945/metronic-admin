<template>
  <div id="kt_footer" class="footer bg-white py-4 d-flex flex-lg-column">
    <!--begin::Container-->
    <div
      class="d-flex flex-column flex-md-row align-items-center justify-content-between"
      v-bind:class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
      <!--begin::Copyright-->
      <div class="text-dark order-2 order-md-1">
        <span class="text-muted font-weight-bold mr-2">2020©</span>
        <a
          href="http://keenthemes.com/metronic"
          target="_blank"
          class="text-dark-75 text-hover-primary"
          >Keenthemes</a
        >
      </div>
      <!--end::Copyright-->
      <!--begin::Nav-->
      <div class="nav nav-dark order-1 order-md-2">
        <a
          href="http://keenthemes.com/metronic"
          target="_blank"
          class="nav-link pr-3 pl-0"
          >About</a
        >
        <a
          href="http://keenthemes.com/metronic"
          target="_blank"
          class="nav-link px-3"
          >Team</a
        >
        <a
          href="http://keenthemes.com/metronic"
          target="_blank"
          class="nav-link pl-3 pr-0"
          >Contact</a
        >
      </div>
      <!--end::Nav-->
    </div>
    <!--end::Container-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "KTFooter",
  computed: {
    ...mapGetters(["layoutConfig"]),

    /**
     * Check if subheader width is fluid
     */
    widthFluid() {
      return this.layoutConfig("footer.width") === "fluid";
    }
  }
};
</script>
