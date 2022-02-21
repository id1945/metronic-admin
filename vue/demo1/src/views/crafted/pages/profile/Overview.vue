<template>
  <div class="row g-5 g-xxl-8">
    <div class="col-xl-6">
      <KTWidget1 widget-classes="mb-5 mb-xxl-8"></KTWidget1>
      <KTWidget2 widget-classes="mb-5 mb-xxl-8"></KTWidget2>
      <KTWidget3 widget-classes="mb-5 mb-xxl-8"></KTWidget3>
      <KTWidget4 widget-classes="mb-5 mb-xxl-8"></KTWidget4>
      <KTWidget5 widget-classes="mb-5 mb-xxl-8"></KTWidget5>
      <KTWidget6 widget-classes="mb-5 mb-xxl-8"></KTWidget6>
    </div>

    <div class="col-xl-6">
      <KTChartWidget1 widget-classes="mb-5 mb-xxl-8"></KTChartWidget1>

      <KTListWidget5 widget-classes="mb-5 mb-xxl-8"></KTListWidget5>

      <KTEngageWidget1 widget-classes="mb-5 mb-xxl-8"></KTEngageWidget1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTWidget1 from "@/components/widgets/feeds/Widget1.vue";
import KTWidget2 from "@/components/widgets/feeds/Widget2.vue";
import KTWidget3 from "@/components/widgets/feeds/Widget3.vue";
import KTWidget4 from "@/components/widgets/feeds/Widget4.vue";
import KTWidget5 from "@/components/widgets/feeds/Widget5.vue";
import KTWidget6 from "@/components/widgets/feeds/Widget6.vue";
import KTChartWidget1 from "@/components/widgets/charts/Widget1.vue";
import KTListWidget5 from "@/components/widgets/lists/Widget5.vue";
import KTEngageWidget1 from "@/components/widgets/engage/Widget1.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "overview",
  components: {
    KTWidget1,
    KTWidget2,
    KTWidget3,
    KTWidget4,
    KTWidget5,
    KTWidget6,
    KTChartWidget1,
    KTListWidget5,
    KTEngageWidget1,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Overview", ["Pages", "Profile"]);
    });
  },
});
</script>
