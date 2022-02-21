<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="colors">
      <a href="#colors"></a>
      Colors
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.separator</code> class in combination with
      <a
        href="https://getbootstrap.com/docs/5.0/utilities/borders/#border-color"
        class="fw-bold"
        >Bootstrap Border Color</a
      >&nbsp; classes to change separator's border color:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <template v-for="(item, i) in colors" :key="i">
          <div class="bg-dark my-10 py-5">
            <div :class="`border-${item}`" class="separator"></div>
          </div>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="separator border-white my-10"></div>
        <div class="separator border-primary my-10"></div>
        <div class="separator border-light my-10"></div>
        <div class="separator border-secondary my-10"></div>
        <div class="separator border-success my-10"></div>
        <div class="separator border-info my-10"></div>
        <div class="separator border-warning my-10"></div>
        <div class="separator border-danger my-10"></div>
        <div class="separator border-dark my-10"></div>
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
