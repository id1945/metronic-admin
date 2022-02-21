<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="dot-style">
      <a href="#dot-style"></a>
      Dot Style
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.bullet-vertical</code> to apply vertical style bullet:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="d-flex flex-column">
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-vertical me-5"></span> Item 1
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-vertical bg-danger me-5"></span> Item 2
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-vertical bg-success me-5"></span> Item 3
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-vertical bg-info me-5"></span> Item 4
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-vertical bg-primary me-5"></span> Item 5
          </li>
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="d-flex flex-column">
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-vertical me-5"></span> Item 1
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-vertical bg-danger me-5"></span> Item 2
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-vertical bg-success me-5"></span> Item 3
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-vertical bg-info me-5"></span> Item 4
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-vertical bg-primary me-5"></span> Item 5
          </li>
        </div>
        `}}</CodeHighlighter
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
  name: "vertical-style",
  components: {
    CodeHighlighter,
  },
});
</script>
