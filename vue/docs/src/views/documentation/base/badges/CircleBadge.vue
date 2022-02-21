<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="circle">
      <a href="#circle"></a>
      Circle Badge
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.badge-circle</code> class to use a badge with circle style:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex flex-wrap align-items-center">
        <template v-for="(item, i) in colors" :key="i">
          <span class="d-flex p-2 bg-dark me-10 mb-10"
            ><span :class="`badge-${item}`" class="badge badge-circle"
              >5</span
            ></span
          >
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<span class="badge badge-circle badge-white">5</span>
        <span class="badge badge-circle badge-primary">5</span>
        <span class="badge badge-circle badge-light">5</span>
        <span class="badge badge-circle badge-secondary">5</span>
        <span class="badge badge-circle badge-success">5</span>
        <span class="badge badge-circle badge-info">5</span>
        <span class="badge badge-circle badge-warning">5</span>
        <span class="badge badge-circle badge-danger">5</span>
        <span class="badge badge-circle badge-dark">5</span>`}}</CodeHighlighter
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
  name: "circle-badge",
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
