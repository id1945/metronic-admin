<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="active-light-style">
      <a href="#active-light-style"></a>
      Active Light Style
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.btn-active-light-{color}</code> class to set a button's light
      color for active & hover states only:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <template v-for="(item, i) in colors" :key="i">
          <a
            href="#"
            :class="`btn-active-light-${item}`"
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
        >{{`<a href="#" class="btn btn-active-light-primary">primary</a>
        <a href="#" class="btn btn-active-light-success">success</a>
        <a href="#" class="btn btn-active-light-info">info</a>
        <a href="#" class="btn btn-active-light-warning">warning</a>
        <a href="#" class="btn btn-active-light-danger">danger</a>
        <a href="#" class="btn btn-active-light-dark">dark</a
        >`}}</CodeHighlighter
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
    const colors = ["primary", "success", "info", "warning", "danger", "dark"];

    return {
      colors,
    };
  },
});
</script>
