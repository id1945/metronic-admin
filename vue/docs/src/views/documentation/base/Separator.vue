<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <BasicExample></BasicExample>

      <Sizes></Sizes>

      <Colors></Colors>

      <Styles></Styles>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/base/separator/Overview.vue";
import BasicExample from "@/views/documentation/base/separator/BasicExample.vue";
import Sizes from "@/views/documentation/base/separator/Sizes.vue";
import Colors from "@/views/documentation/base/separator/Colors.vue";
import Styles from "@/views/documentation/base/separator/Styles.vue";

export default defineComponent({
  name: "separator",
  components: {
    Overview,
    BasicExample,
    Sizes,
    Colors,
    Styles,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Separator", ["Base"]);
    });
  },
});
</script>
