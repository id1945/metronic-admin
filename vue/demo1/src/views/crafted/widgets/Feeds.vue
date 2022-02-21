<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <!--begin::Col-->
    <div class="col-xl-6">
      <FeedsWidget1 widget-classes="mb-5 mb-xl-8"></FeedsWidget1>

      <FeedsWidget2 widget-classes="mb-5 mb-xl-8"></FeedsWidget2>

      <FeedsWidget3 widget-classes="mb-5 mb-xl-8"></FeedsWidget3>

      <FeedsWidget4 widget-classes="mb-5 mb-xl-8"></FeedsWidget4>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6">
      <FeedsWidget5 widget-classes="mb-5 mb-xl-8"></FeedsWidget5>

      <FeedsWidget6 widget-classes="mb-5 mb-xl-8"></FeedsWidget6>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import FeedsWidget1 from "@/components/widgets/feeds/Widget1.vue";
import FeedsWidget2 from "@/components/widgets/feeds/Widget2.vue";
import FeedsWidget3 from "@/components/widgets/feeds/Widget3.vue";
import FeedsWidget4 from "@/components/widgets/feeds/Widget4.vue";
import FeedsWidget5 from "@/components/widgets/feeds/Widget5.vue";
import FeedsWidget6 from "@/components/widgets/feeds/Widget6.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { MenuComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "widgets-feeds",
  components: {
    FeedsWidget1,
    FeedsWidget2,
    FeedsWidget3,
    FeedsWidget4,
    FeedsWidget5,
    FeedsWidget6,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Feeds", ["Widgets"]);

      MenuComponent.reinitialization();
    });
  },
});
</script>
