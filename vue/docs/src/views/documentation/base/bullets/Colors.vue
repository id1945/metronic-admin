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
      Use <code>.bg-{color}</code> class to set a bullets background color:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="d-flex flex-column">
          <template v-for="(item, i) in colors" :key="i">
            <li class="d-flex align-items-center py-2">
              <span :class="`bg-${item}`" class="bullet me-5"></span>{{ item }}
            </li>
          </template>
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter :fieldHeight="400" lang="html"
        >{{`
        <div class="d-flex flex-column">
          <li class="d-flex align-items-center py-2">
            <span class="bullet bg-white"></span> white
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bg-primary"></span> primary
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bg-light"></span> light
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bg-secondary"></span> secondary
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bg-success"></span> success
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bg-info"></span> info
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bg-warning"></span> warning
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bg-danger"></span> danger
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bg-dark"></span> dark
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
