<template>
  <div class="aside aside-left d-flex flex-column" id="kt_aside" ref="kt_aside">
    <!--begin::Brand-->
    <KTBrand></KTBrand>
    <!--end::Brand-->
    <!--begin::Nav Wrapper-->
    <div
      class="aside-nav d-flex flex-column align-items-center flex-column-fluid pt-7"
    >
      <!--begin::Nav-->
      <ul class="nav flex-column">
        <!--begin::Item-->
        <li class="nav-item mb-5" v-b-tooltip.hover.right="'Latest Reports'">
          <a
            href="#"
            class="nav-link btn btn-icon btn-clean btn-icon-white btn-lg active"
          >
            <i class="flaticon2-protection icon-lg"></i>
          </a>
        </li>
        <!--end::Item-->
        <!--begin::Item-->
        <li class="nav-item mb-5" v-b-tooltip.hover.right="'Metronic Features'">
          <a
            href="#"
            class="nav-link btn btn-icon btn-icon-white btn-lg"
            data-toggle="tab"
            data-target="#kt_aside_tab_2"
            role="tab"
          >
            <i class="flaticon2-list-3 icon-lg"></i>
          </a>
        </li>
        <!--end::Item-->
        <!--begin::Item-->
        <li class="nav-item mb-5" v-b-tooltip.hover.right="'Latest Reports'">
          <a
            href="#"
            class="nav-link btn btn-icon btn-icon-white btn-lg"
            data-toggle="tab"
            data-target="#kt_aside_tab_3"
            role="tab"
          >
            <i class="flaticon2-calendar-6 icon-lg"></i>
          </a>
        </li>
        <!--end::Item-->
        <!--begin::Item-->
        <li
          class="nav-item mb-5"
          v-b-tooltip.hover.right="'Project Management'"
        >
          <a
            href="#"
            class="nav-link btn btn-icon btn-icon-white btn-lg"
            data-toggle="tab"
            data-target="#kt_aside_tab_4"
            role="tab"
          >
            <i class="flaticon2-hourglass-1 icon-lg"></i>
          </a>
        </li>
        <!--end::Item-->
        <!--begin::Item-->
        <li class="nav-item mb-5" v-b-tooltip.hover.right="'User Management'">
          <a
            href="#"
            class="nav-link btn btn-icon btn-icon-white btn-lg"
            data-toggle="tab"
            data-target="#kt_aside_tab_5"
            role="tab"
          >
            <i class="flaticon2-analytics-2 icon-lg"></i>
          </a>
        </li>
        <!--end::Item-->
        <!--begin::Item-->
        <li
          class="nav-item mb-5"
          v-b-tooltip.hover.right="'Finance &amp; Accounting'"
        >
          <a
            href="#"
            class="nav-link btn btn-icon btn-icon-white btn-lg"
            data-toggle="tab"
            data-target="#kt_aside_tab_6"
            role="tab"
          >
            <i class="flaticon2-medical-records-1 icon-lg"></i>
          </a>
        </li>
        <!--end::Item-->
        <!--begin::Item-->
        <li class="nav-item mb-5" v-b-tooltip.hover.right="'User Management'">
          <a
            href="#"
            class="nav-link btn btn-icon btn-icon-white btn-lg"
            data-toggle="tab"
            data-target="#kt_aside_tab_5"
            role="tab"
          >
            <i class="flaticon2-gear icon-lg"></i>
          </a>
        </li>
        <!--end::Item-->
        <!--begin::Item-->
        <li
          class="nav-item mb-5"
          v-b-tooltip.hover.right="'Finance &amp; Accounting'"
        >
          <a
            href="#"
            class="nav-link btn btn-icon btn-icon-white btn-lg"
            data-toggle="tab"
            data-target="#kt_aside_tab_6"
            role="tab"
          >
            <i class="flaticon2-warning icon-lg"></i>
          </a>
        </li>
        <!--end::Item-->
      </ul>
      <!--end::Nav-->
    </div>
    <!--end::Nav Wrapper-->
    <!--begin::Footer-->
    <div
      class="aside-footer d-flex flex-column align-items-center flex-column-auto py-8"
    >
      <!--begin::Quick Panel-->
      <KTQuickPanel></KTQuickPanel>
      <!--end::Quick Panel-->
    </div>
    <!--end::Footer-->
  </div>
</template>

<style lang="scss">
/* hide default vue-bootstrap tab links */
.hide-tabs > div:not(.tab-content) {
  display: none;
}
</style>

<script>
import KTQuickPanel from "@/view/layout/extras/offcanvas/QuickPanel";
import KTBrand from "@/view/layout/brand/Brand";
import KTLayoutAside from "@/assets/js/layout/base/aside.js";

export default {
  name: "Aside",
  components: {
    KTQuickPanel,
    KTBrand
  },
  mounted() {
    this.$nextTick(() => {
      // Init Aside
      KTLayoutAside.init(this.$refs["kt_aside"]);
    });
  }
};
</script>
