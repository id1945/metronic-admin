<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#button"></a>
      Link
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Text hyperlink</div>
    <!--end::Block-->
  </div>
  <EUIBasic></EUIBasic>
  <EUIDisabled></EUIDisabled>
  <EUIUnderline></EUIUnderline>
  <EUIIcon></EUIIcon>
</template>

<style>
.el-link {
  margin-right: 5px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasic from "@/views/documentation/element-ui/basic/link/Basic.vue";
import EUIDisabled from "@/views/documentation/element-ui/basic/link/Disabled.vue";
import EUIUnderline from "@/views/documentation/element-ui/basic/link/Underline.vue";
import EUIIcon from "@/views/documentation/element-ui/basic/link/Icon.vue";

export default defineComponent({
  name: "layout",
  components: {
    EUIBasic,
    EUIDisabled,
    EUIUnderline,
    EUIIcon,
  },
  setup() {
    setCurrentPageBreadcrumbs("Link", ["Element UI", "Basic"]);
  },
});
</script>
