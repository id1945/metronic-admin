<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-3" id="usage">
      <a href="#usage"></a>
      Usage
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use Bootstrap Icons with a spesific class as explained in the
      <a
        class="fw-bold"
        href="https://icons.getbootstrap.com/icons/alarm-fill/"
        target="_blank"
        >Icons Preview Page</a
      >:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border d-flex flex-wrap p-10">
        <i class="bi bi-bookmarks-fill fs-2x me-15"></i>
        <i class="bi bi-calendar-check fs-2x me-15"></i>
        <i class="bi bi-check2-square fs-2x me-15"></i>
        <i class="bi bi-diagram-3 fs-2x me-15"></i>
        <i class="bi bi-gear fs-2x me-15"></i>
        <i class="bi bi-circle-square fs-2x me-15"></i>
        <i class="bi bi-graph-down fs-2x me-15"></i>
        <i class="bi bi-vector-pen fs-2x me-15"></i>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<i class="bi bi-bookmarks-fill fs-2x"></i>
        <i class="bi bi-calendar-check fs-2x"></i>
        <i class="bi bi-check2-square fs-2x"></i>
        <i class="bi bi-diagram-3 fs-2x"></i>
        <i class="bi bi-gear fs-2x"></i>
        <i class="bi bi-circle-square fs-2x"></i>
        <i class="bi bi-graph-down fs-2x"></i>
        <i class="bi bi-vector-pen fs-2x"></i>`}}</CodeHighlighter
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
  name: "usage",
  components: {
    CodeHighlighter,
  },
});
</script>
