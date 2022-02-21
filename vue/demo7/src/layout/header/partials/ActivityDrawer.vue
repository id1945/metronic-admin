<template>
  <!--begin::Activities drawer-->
  <div
    id="kt_activities"
    class="bg-white"
    data-kt-drawer="true"
    data-kt-drawer-name="activities"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_activities_toggle"
    data-kt-drawer-close="#kt_activities_close"
  >
    <div class="card shadow-none">
      <!--begin::Header-->
      <div class="card-header" id="kt_activities_header">
        <h3 class="card-title fw-bolder text-dark">Activity Logs</h3>

        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_activities_close"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_activities_body">
        <!--begin::Content-->
        <div
          id="kt_activities_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_activities_body"
          data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="timeline">
            <Item1></Item1>
            <Item2></Item2>
            <Item3></Item3>
            <Item4></Item4>
            <Item5></Item5>
            <Item6></Item6>
            <Item7></Item7>
            <Item8></Item8>
          </div>
          <!--end::Timeline items-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::Body-->

      <!--begin::Footer-->
      <div class="card-footer py-5 text-center" id="kt_activities_footer">
        <a href="#" class="btn btn-bg-white text-primary">
          View All Activities<span class="svg-icon svg-icon-3 svg-icon-primary">
            <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
          </span>
        </a>
      </div>
      <!--end::Footer-->
    </div>
  </div>
  <!--end::Activities drawer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Item1 from "@/layout/header/partials/activity-timeline/Item1.vue";
import Item2 from "@/layout/header/partials/activity-timeline/Item2.vue";
import Item3 from "@/layout/header/partials/activity-timeline/Item3.vue";
import Item4 from "@/layout/header/partials/activity-timeline/Item4.vue";
import Item5 from "@/layout/header/partials/activity-timeline/Item5.vue";
import Item6 from "@/layout/header/partials/activity-timeline/Item6.vue";
import Item7 from "@/layout/header/partials/activity-timeline/Item7.vue";
import Item8 from "@/layout/header/partials/activity-timeline/Item8.vue";

export default defineComponent({
  name: "kt-activity-drawer",
  components: {
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
    Item6,
    Item7,
    Item8,
  },
});
</script>
