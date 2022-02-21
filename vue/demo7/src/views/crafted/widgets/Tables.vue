<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <!--begin::Col-->
    <div class="col-xl-6">
      <TablesWidget1 widget-classes="card-xl-stretch mb-xl-8"></TablesWidget1>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6">
      <TablesWidget2
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></TablesWidget2>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <!--begin::Col-->
    <div class="col-xl-6">
      <TablesWidget3 widget-classes="card-xl-stretch mb-xl-8"></TablesWidget3>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6">
      <TablesWidget4
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></TablesWidget4>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <!--begin::Col-->
    <div class="col-xl-6">
      <TablesWidget5 widget-classes="card-xl-stretch mb-xl-8"></TablesWidget5>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6">
      <TablesWidget6
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></TablesWidget6>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <!--begin::Col-->
    <div class="col-xl-6">
      <TablesWidget7 widget-classes="card-xl-stretch mb-xl-8"></TablesWidget7>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6">
      <TablesWidget8
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></TablesWidget8>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <TablesWidget9 widget-classes="mb-5 mb-xl-8"></TablesWidget9>

  <TablesWidget10 widget-classes="mb-5 mb-xl-8"></TablesWidget10>

  <TablesWidget11 widget-classes="mb-5 mb-xl-8"></TablesWidget11>

  <TablesWidget12 widget-classes="mb-5 mb-xl-8"></TablesWidget12>

  <TablesWidget13 widget-classes="mb-5 mb-xl-8"></TablesWidget13>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TablesWidget1 from "@/components/widgets/tables/Widget1.vue";
import TablesWidget2 from "@/components/widgets/tables/Widget2.vue";
import TablesWidget3 from "@/components/widgets/tables/Widget3.vue";
import TablesWidget4 from "@/components/widgets/tables/Widget4.vue";
import TablesWidget5 from "@/components/widgets/tables/Widget5.vue";
import TablesWidget6 from "@/components/widgets/tables/Widget6.vue";
import TablesWidget7 from "@/components/widgets/tables/Widget7.vue";
import TablesWidget8 from "@/components/widgets/tables/Widget8.vue";
import TablesWidget9 from "@/components/widgets/tables/Widget9.vue";
import TablesWidget10 from "@/components/widgets/tables/Widget10.vue";
import TablesWidget11 from "@/components/widgets/tables/Widget11.vue";
import TablesWidget12 from "@/components/widgets/tables/Widget12.vue";
import TablesWidget13 from "@/components/widgets/tables/Widget13.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { MenuComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "widgets-tables",
  components: {
    TablesWidget1,
    TablesWidget2,
    TablesWidget3,
    TablesWidget4,
    TablesWidget5,
    TablesWidget6,
    TablesWidget7,
    TablesWidget8,
    TablesWidget9,
    TablesWidget10,
    TablesWidget11,
    TablesWidget12,
    TablesWidget13,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Tables", ["Widgets"]);

      MenuComponent.reinitialization();
    });
  },
});
</script>
