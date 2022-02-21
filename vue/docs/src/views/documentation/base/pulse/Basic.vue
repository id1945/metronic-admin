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
      Use <code>.pulse</code> with for any element to provide a user's
      attentation.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex align-items-center flex-wrap">
        <a href="#" class="btn btn-icon btn-light pulse me-10 mb-10">
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen025.svg" />
          </span>
          <span class="pulse-ring"></span>
        </a>

        <a href="#" class="btn btn-icon btn-light pulse me-10 mb-10">
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen043.svg" />
          </span>
          <span class="pulse-ring"></span>
        </a>

        <a href="#" class="btn btn-icon btn-light pulse me-10 mb-10">
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/communication/com010.svg" />
          </span>
          <span class="pulse-ring"></span>
        </a>

        <a href="#" class="btn btn-icon btn-light pulse me-10 mb-10">
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/art/art007.svg" />
          </span>
          <span class="pulse-ring"></span>
        </a>

        <a href="#" class="btn btn-icon btn-light pulse me-10 mb-10">
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/art/art002.svg" />
          </span>
          <span class="pulse-ring"></span>
        </a>

        <a href="#" class="btn btn-icon btn-light pulse me-10 mb-10">
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen005.svg" />
          </span>
          <span class="pulse-ring"></span>
        </a>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<a href="#" class="btn btn-icon btn-light pulse">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring"></span> </a
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
  name: "basic",
  components: {
    CodeHighlighter,
  },
});
</script>
