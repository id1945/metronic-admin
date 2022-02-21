<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-3" id="icon-colors">
      <a href="#icon-colors"></a>
      Icon Colors
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      The inline icons can be colored using <code>.svg-icon-{color}</code> class
      that defined with <code>$theme-text-colors</code> variable in
      <code>sass/_variables.scss</code>:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border d-flex flex-wrap p-10">
        <template v-for="(item, i) in colors" :key="i">
          <div class="d-flex flex-column flex-center w-150px me-10 mb-5">
            <span
              :class="[`svg-icon-${item}`, item === `white` && `bg-dark`]"
              class="svg-icon svg-icon-3x"
            >
              <inline-svg src="media/icons/duotune/general/gen001.svg" />
            </span>
            <div class="fw-bold py-2">
              {{ item }}
            </div>
          </div>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html" :fieldHeight="400"
        >{{`<span class="svg-icon svg-icon-2x svg-icon-white"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-primary"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-secondary"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-light"><svg>...</svg></span>
        <span class="svg-icon svg-icon-2x svg-icon-success"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-info"><svg>...</svg></span>
        <span class="svg-icon svg-icon-2x svg-icon-warning"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-danger"><svg>...</svg></span>
        <span class="svg-icon svg-icon-2x svg-icon-dark"><svg>...</svg></span>
        <span class="svg-icon svg-icon-2x svg-icon-muted"><svg>...</svg></span>
        <span class="svg-icon svg-icon-2x svg-icon-gray-100"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-gray-200"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-gray-300"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-gray-400"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-gray-500"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-gray-600"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-gray-700"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-gray-800"
          ><svg>...</svg></span
        >
        <span class="svg-icon svg-icon-2x svg-icon-gray-900"
          ><svg>...</svg></span
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
  name: "icon-color",
  components: {
    CodeHighlighter,
  },
  setup() {
    const colors = [
      "white",
      "primary",
      "secondary",
      "light",
      "success",
      "info",
      "warning",
      "danger",
      "dark",
      "muted",
      "gray-100",
      "gray-200",
      "gray-300",
      "gray-400",
      "gray-500",
      "gray-600",
      "gray-700",
      "gray-800",
      "gray-900",
    ];

    return {
      colors,
    };
  },
});
</script>
