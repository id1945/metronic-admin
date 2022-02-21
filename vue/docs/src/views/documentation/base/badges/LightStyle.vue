<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="light-style">
      <a href="#light-style"></a>
      Light Style
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.badge</code> with <code>.badge-light-{color}</code> classes to
      set a badge's light style defined with
      <code>$theme-light-colors</code> map in
      <code>src/sass/_variables.scss</code>:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex flex-wrap">
        <template v-for="(item, i) in colors" :key="i">
          <span :class="`badge-light-${item}`" class="badge me-10 mb-10"
            >New</span
          >
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<span class="badge badge-light-primary">New</span>
        <span class="badge badge-light-success">New</span>
        <span class="badge badge-light-info">New</span>
        <span class="badge badge-light-warning">New</span>
        <span class="badge badge-light-danger">New</span>
        <span class="badge badge-light-dark">New</span>`}}</CodeHighlighter
      >
    </div>
    <!--end::Code-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "light-badge",
  components: {
    CodeHighlighter,
  },
  setup() {
    const colors = ["primary", "success", "info", "warning", "danger", "dark"];

    return {
      colors,
    };
  },
});
</script>
