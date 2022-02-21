<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#global-method"></a>
      Global method
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Element Plus has added a global method $message for
      <code>app.config.globalProperties</code>. So in a vue instance you can
      call <code>Message</code> like what we did in this page.
    </div>
    <!--end::Block-->
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "global-method",
  setup() {
    return {};
  },
});
</script>
