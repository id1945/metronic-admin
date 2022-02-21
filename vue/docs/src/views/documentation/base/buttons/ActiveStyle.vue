<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="active-style">
      <a href="#active-style"></a>
      Active Style
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.btn-active-{color}</code> class to set a button's color for
      active & hover states only:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <template v-for="(item, i) in colors" :key="i">
          <a href="#" :class="`btn-active-${item}`" class="btn me-2 mb-2">{{
            item
          }}</a>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<a href="#" class="btn btn-active-white">white</a>
        <a href="#" class="btn btn-active-primary">primary</a>
        <a href="#" class="btn btn-active-light">light</a>
        <a href="#" class="btn btn-active-secondary">secondary</a>
        <a href="#" class="btn btn-active-success">success</a>
        <a href="#" class="btn btn-active-info">info</a>
        <a href="#" class="btn btn-active-warning">warning</a>
        <a href="#" class="btn btn-active-danger">danger</a>
        <a href="#" class="btn btn-active-dark">dark</a>`}}</CodeHighlighter
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
  name: "overview",
  components: {
    CodeHighlighter,
  },
  setup() {
    const colors = [
      "white",
      "primary",
      "light",
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
