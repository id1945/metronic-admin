<template>
  <!--begin::Card-->
  <div class="card card-custom">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>
      <Example1></Example1>
      <Example2></Example2>
      <Example3></Example3>
      <Example4></Example4>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/forms/vee-validate/Overview.vue";
import Example1 from "@/views/documentation/forms/vee-validate/Example1.vue";
import Example2 from "@/views/documentation/forms/vee-validate/Example2.vue";
import Example3 from "@/views/documentation/forms/vee-validate/Example3.vue";
import Example4 from "@/views/documentation/forms/vee-validate/Example4.vue";

export default defineComponent({
  name: "vee-validate",
  components: {
    Overview,
    Example1,
    Example2,
    Example3,
    Example4,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("VeeValidate", ["Forms"]);
    });
  },
});
</script>
