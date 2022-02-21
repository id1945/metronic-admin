<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="animated-icon">
      <a href="#layout"></a>
      Layout
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Add <code>.accordion-icon-toggle</code> class to add toggle based animated
      icon in header:
    </div>
    <!--end::Block-->

    <CodeHighlighter2></CodeHighlighter2>
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import CodeHighlighter2 from "@/components/highlighters/CodeHighlighter2.vue";

export default defineComponent({
  name: "layout",
  components: {
    CodeHighlighter2,
  },
  setup() {
    setCurrentPageBreadcrumbs("Border", ["Element UI", "Basic"]);
  },
});
</script>
