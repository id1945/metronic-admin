<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <CustomFormControl></CustomFormControl>

      <CustomFormSelect></CustomFormSelect>

      <CustomCheckboxAndRadio></CustomCheckboxAndRadio>

      <CustomSwitch></CustomSwitch>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/base/forms/Overview.vue";
import CustomFormControl from "@/views/documentation/base/forms/CustomFormControl.vue";
import CustomFormSelect from "@/views/documentation/base/forms/CustomFormSelect.vue";
import CustomCheckboxAndRadio from "@/views/documentation/base/forms/CustomCheckboxAndRadio.vue";
import CustomSwitch from "@/views/documentation/base/forms/CustomSwitch.vue";

export default defineComponent({
  name: "forms",
  components: {
    Overview,
    CustomFormControl,
    CustomFormSelect,
    CustomCheckboxAndRadio,
    CustomSwitch,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Forms", ["Base"]);
    });
  },
});
</script>
