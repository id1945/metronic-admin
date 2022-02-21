<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <!--begin::Section-->
      <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="animated-icon">
          <a href="#animated-icon"></a>
          Animated Icon
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Add <code>.accordion-icon-toggle</code> class to add toggle based
          animated icon in header:
        </div>
        <!--end::Block-->

        <CodeHighlighter2></CodeHighlighter2>
      </div>
      <!--end::Section-->
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
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
    setCurrentPageBreadcrumbs("Typography", ["Element UI", "Basic"]);
  },
});
</script>
