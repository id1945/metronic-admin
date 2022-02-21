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
      The inline icons can be colored using <code>.text-{color}</code> class
      that defined with <code>$theme-text-colors</code> variable in
      <code>sass/_variables.scss</code>:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border d-flex flex-wrap p-10">
        <template v-for="(item, i) in colors" :key="i">
          <div class="d-flex flex-column flex-center w-150px me-10 mb-5">
            <i
              :class="[`text-${item}`, item === 'white' && `bg-dark`]"
              class="far fa-lightbulb fs-2x"
            ></i>
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
      <CodeHighlighter lang="html"
        >{{`<i class="far fa-lightbulb text-white"></i>
        <i class="far fa-lightbulb text-primary"></i>
        <i class="far fa-lightbulb text-secondary"></i>
        <i class="far fa-lightbulb text-light"></i>
        <i class="far fa-lightbulb text-success"></i>
        <i class="far fa-lightbulb text-info"></i>
        <i class="far fa-lightbulb text-warning"></i>
        <i class="far fa-lightbulb text-danger"></i>
        <i class="far fa-lightbulb text-dark"></i>
        <i class="far fa-lightbulb text-muted"></i>
        <i class="far fa-lightbulb text-gray-100"></i>
        <i class="far fa-lightbulb text-gray-200"></i>
        <i class="far fa-lightbulb text-gray-300"></i>
        <i class="far fa-lightbulb text-gray-400"></i>
        <i class="far fa-lightbulb text-gray-500"></i>
        <i class="far fa-lightbulb text-gray-600"></i>
        <i class="far fa-lightbulb text-gray-700"></i>
        <i class="far fa-lightbulb text-gray-800"></i>
        <i class="far fa-lightbulb text-gray-900"></i>`}}</CodeHighlighter
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
