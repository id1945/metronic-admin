<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#alert"></a>
      Alert
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Displays important alert messages.</div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUITheme></EUITheme>
  <EUICustomizableCloseButton></EUICustomizableCloseButton>
  <EUIWithIcon></EUIWithIcon>
  <EUICenteredText></EUICenteredText>
  <EUIWithDescription></EUIWithDescription>
  <EUIWithIconAndDescription></EUIWithIconAndDescription>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/notice/alert/BasicUsage.vue";
import EUITheme from "@/views/documentation/element-ui/notice/alert/Theme.vue";
import EUICustomizableCloseButton from "@/views/documentation/element-ui/notice/alert/CustomizableCloseButton.vue";
import EUIWithIcon from "@/views/documentation/element-ui/notice/alert/WithIcon.vue";
import EUICenteredText from "@/views/documentation/element-ui/notice/alert/CenteredText.vue";
import EUIWithDescription from "@/views/documentation/element-ui/notice/alert/WithDescription.vue";
import EUIWithIconAndDescription from "@/views/documentation/element-ui/notice/alert/WithIconAndDescription.vue";

export default defineComponent({
  name: "alert",
  components: {
    EUIBasicUsage,
    EUITheme,
    EUICustomizableCloseButton,
    EUIWithIcon,
    EUICenteredText,
    EUIWithDescription,
    EUIWithIconAndDescription,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Alert", ["Element UI", "Notice"]);
    });
  },
});
</script>
