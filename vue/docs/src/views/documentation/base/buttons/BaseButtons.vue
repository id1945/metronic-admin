<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="base-style">
      <a href="#base-style"></a>
      Base Buttons
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.btn-{color}</code> class to set button base color defined with
      <code>$theme-colors</code> map in <code>src/sass/_variables.scss</code>:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <template v-for="(item, i) in colors" :key="i">
          <a href="#" :class="`btn-${item}`" class="btn me-2 mb-2">{{
            item
          }}</a>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<a href="#" class="btn btn-white">white</a>
        <a href="#" class="btn btn-primary">primary</a>
        <a href="#" class="btn btn-light">light</a>
        <a href="#" class="btn btn-secondary">secondary</a>
        <a href="#" class="btn btn-success">success</a>
        <a href="#" class="btn btn-info">info</a>
        <a href="#" class="btn btn-warning">warning</a>
        <a href="#" class="btn btn-danger">danger</a>
        <a href="#" class="btn btn-dark">dark</a>`}}</CodeHighlighter
      >
    </div>
    <!--end::Code-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "overview",
  components: {
    CodeHighlighter,
  },
  setup() {
    const colors = ref([
      "white",
      "primary",
      "light",
      "secondary",
      "success",
      "info",
      "warning",
      "danger",
      "dark",
    ]);

    return {
      colors,
    };
  },
});
</script>
