<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="Colors">
      <a href="#colors"></a>
      Colors
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.pulse-{color}</code> class to set a pulse's color:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex flex-wrap align-items-center">
        <template v-for="(item, i) in colors" :key="i">
          <a
            href="#"
            :class="`pulse-${item}`"
            class="btn btn-icon btn-light pulse me-10 mb-10"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/general/gen025.svg" />
            </span>
            <span class="pulse-ring"></span>
          </a>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter :fieldHeight="400" lang="html"
        >{{`<a href="#" class="btn btn-icon btn-light pulse pulse-white">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-primary">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-light">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-secondary">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-success">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-info">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-warning">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-danger">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-dark">
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
  name: "colors",
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
