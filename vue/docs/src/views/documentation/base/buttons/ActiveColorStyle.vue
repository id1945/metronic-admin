<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="active-color-style">
      <a href="#active-color-style"></a>
      Active Color Style
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.btn-active-color-{color}</code> class to set a button's text
      and icon colors for active and hover states only:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <template v-for="(item, i) in colors" :key="i">
          <a
            href="#"
            :class="`btn-active-color-${item}`"
            class="btn btn-bg-light me-2 mb-2"
            >{{ item }}</a
          >
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<a href="#" class="btn btn-active-white">White</a>
        <a href="#" class="btn btn-active-primary">Primary</a>
        <a href="#" class="btn btn-active-light">Light</a>
        <a href="#" class="btn btn-active-secondary">Secondary</a>
        <a href="#" class="btn btn-active-success">Success</a>
        <a href="#" class="btn btn-active-info">Info</a>
        <a href="#" class="btn btn-active-warning">Warning</a>
        <a href="#" class="btn btn-active-danger">Danger</a>
        <a href="#" class="btn btn-active-dark">Dark</a>`}}</CodeHighlighter
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
