<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#notification"></a>
      Notification
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Displays a global notification message at a corner of the page.
    </div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIWithTypes></EUIWithTypes>
  <EUICustomPosition></EUICustomPosition>
  <EUIWithOffset></EUIWithOffset>
  <EUIUseHTMLString></EUIUseHTMLString>
  <EUIHideCloseButton></EUIHideCloseButton>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/notice/notification/BasicUsage.vue";
import EUIWithTypes from "@/views/documentation/element-ui/notice/notification/WithTypes.vue";
import EUICustomPosition from "@/views/documentation/element-ui/notice/notification/CustomPosition.vue";
import EUIWithOffset from "@/views/documentation/element-ui/notice/notification/WithOffset.vue";
import EUIUseHTMLString from "@/views/documentation/element-ui/notice/notification/UseHTMLString.vue";
import EUIHideCloseButton from "@/views/documentation/element-ui/notice/notification/HideCloseButton.vue";

export default defineComponent({
  name: "notification",
  components: {
    EUIBasicUsage,
    EUIWithTypes,
    EUICustomPosition,
    EUIWithOffset,
    EUIUseHTMLString,
    EUIHideCloseButton,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Notification", ["Element UI", "Notice"]);
    });
  },
});
</script>
