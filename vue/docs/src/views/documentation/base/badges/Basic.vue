<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="basic">
      <a href="#basic"></a>
      Basic
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.badge</code> with <code>.badge-{color}</code> classes to set a
      badge's style defined with <code>$theme-colors</code> map in
      <code>src/sass/_variables.scss</code>:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex flex-wrap">
        <template v-for="(item, i) in colors" :key="i">
          <span :class="`badge-${item}`" class="badge me-10 mb-10">New</span>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<span class="badge badge-white">New</span>
        <span class="badge badge-primary">New</span>
        <span class="badge badge-light">New</span>
        <span class="badge badge-secondary">New</span>
        <span class="badge badge-success">New</span>
        <span class="badge badge-info">New</span>
        <span class="badge badge-warning">New</span>
        <span class="badge badge-danger">New</span>
        <span class="badge badge-dark">New</span>`}}</CodeHighlighter
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
  name: "basic",
  components: {
    CodeHighlighter,
  },
  setup() {
    const colors = [
      "white",
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "danger",
      "dark",
    ];

    return {
      colors,
    };
  },
});
</script>
