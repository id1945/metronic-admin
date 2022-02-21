<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="opacity">
      <a href="#opacity"></a>
      Opacity
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.opacity-{0, 5, 10, 15, 20, 25, 50, 75, 100}</code>&nbsp;class
      to set an element's opacity:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 d-flex flex-wrap">
        <template v-for="(value, i) in opacityValues" :key="i">
          <div class="d-flex flex-column me-5 mb-5">
            <div
              :class="`opacity-${value}`"
              class="w-90px h-90px bg-dark flex-grow-1"
            ></div>
            <div class="fw-bold py-2">opacity-{{ value }}</div>
          </div>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="opacity-0"></div>
        <div class="opacity-5"></div>
        <div class="opacity-10"></div>
        <div class="opacity-15"></div>
        <div class="opacity-20"></div>
        <div class="opacity-25"></div>
        <div class="opacity-50"></div>
        <div class="opacity-75"></div>
        <div class="opacity-100"></div>
        `}}</CodeHighlighter
      >
    </div>
    <!--end::Code-->
  </div>
  <!--end::Section-->

  <!--begin::Section-->
  <div class="pt-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="opacity-hover">
      <a href="#opacity-hover"></a>
      Opacity Hover
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use
      <code>.opacity-{0, 5, 10, 15, 20, 25, 50, 75, 100}-hover</code>&nbsp;class
      to set an element's opacity on hover:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 d-flex flex-wrap">
        <template v-for="(value, i) in opacityValues" :key="i">
          <div class="d-flex flex-column me-5 mb-5">
            <div
              :class="`opacity-${value}-hover`"
              class="w-100px h-100px bg-dark flex-grow-1 opacity-100"
            ></div>
            <div class="fw-bold py-2">opacity-{{ value }}-hover</div>
          </div>
        </template>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="opacity-hover-0"></div>
        <div class="opacity-hover-5"></div>
        <div class="opacity-hover-10"></div>
        <div class="opacity-hover-15"></div>
        <div class="opacity-hover-20"></div>
        <div class="opacity-hover-25"></div>
        <div class="opacity-hover-50"></div>
        <div class="opacity-hover-75"></div>
        <div class="opacity-hover-100"></div>
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
  name: "opacity",
  components: {
    CodeHighlighter,
  },
  setup() {
    const opacityValues = [0, 5, 10, 15, 20, 25, 50, 75, 100];

    return {
      opacityValues,
    };
  },
});
</script>
