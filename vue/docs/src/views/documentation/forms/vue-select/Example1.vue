<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="overview">
      <a href="#example1"></a>
      Single select
    </h1>
    <!--end::Heading-->
    <!--begin::Block-->
    <div class="py-5">
      <div class="bg-dark text-white rounded-1 mb-2 p-3">
        Data: {{ example1.value }}
      </div>
      <Multiselect v-model="example1.value" v-bind="example1"></Multiselect>
      <CodeHighlighter2>
        <template v-slot:html>{{ htmlCode }}</template>
        <template v-slot:js>{{ jsCode }}</template>
      </CodeHighlighter2>
    </div>
    <!--end::Block-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Multiselect from "@vueform/multiselect";
import CodeHighlighter2 from "@/components/highlighters/CodeHighlighter2.vue";

export default defineComponent({
  name: "example-1",
  components: {
    Multiselect,
    CodeHighlighter2,
  },
  setup() {
    const example1 = ref({
      value: 0,
      options: ["Batman", "Robin", "Joker"],
    });

    const htmlCode = `<Multiselect v-model="example1.value" v-bind="example1"></Multiselect>`;

    const jsCode = `const example1 = ref({
  value: 0,
  options: ["Batman", "Robin", "Joker"]
});`;

    return {
      example1,
      htmlCode,
      jsCode,
    };
  },
});
</script>
