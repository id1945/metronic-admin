<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="z-index">
      <router-link to="/documentation/utilities#z-index"></router-link>
      Z-Index
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.z-index-{value}</code> class to set an element's z-index:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      Where <code>value</code> is one of:
      <ul class="pt-3">
        <template v-for="(key, value, i) in zIndexValues" :key="i">
          <li class="py-2">
            <code>{{ key }}</code> - for classes that set z-index
            <code>{{ key }}</code>
          </li>
        </template>
      </ul>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="z-index-n1"></div>
        <div class="z-index-n2"></div>
        <div class="z-index-0"></div>
        <div class="z-index-1"></div>
        <div class="z-index-2"></div>
        <div class="z-index-3"></div>
        `}}</CodeHighlighter
      >
    </div>
    <!--end::Code-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "z-index",
  components: {
    CodeHighlighter,
  },
  setup() {
    const zIndexValues = ref({
      n1: -1,
      n2: -2,
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
    });

    return {
      zIndexValues,
    };
  },
});
</script>
