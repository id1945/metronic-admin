<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="bg-style">
      <a href="#bg-style"></a>
      Background Style
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.btn-bg-{color}</code> class to set a button's background color
      only without hover or active states:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <template v-for="(item, i) in colors" :key="i">
          <a
            href="#"
            :class="`btn-bg-${item} text-inverse-${item}`"
            class="btn me-2 mb-2"
            >{{ item }}</a
          >
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<a href="#" class="btn btn-bg-white">white</a>
        <a href="#" class="btn btn-bg-primary">primary</a>
        <a href="#" class="btn btn-bg-light">light</a>
        <a href="#" class="btn btn-bg-secondary">secondary</a>
        <a href="#" class="btn btn-bg-success">success</a>
        <a href="#" class="btn btn-bg-info">info</a>
        <a href="#" class="btn btn-bg-warning">warning</a>
        <a href="#" class="btn btn-bg-danger">danger</a>
        <a href="#" class="btn btn-bg-dark">dark</a>`}}</CodeHighlighter
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
