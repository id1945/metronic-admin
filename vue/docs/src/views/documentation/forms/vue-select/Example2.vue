<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="overview">
      <a href="#example2"></a>
      Multiselect with object options
    </h1>
    <!--end::Heading-->
    <!--begin::Block-->
    <div class="py-5">
      <div class="bg-dark text-white rounded-1 mb-2 p-3">
        Data: {{ example2.value }}
      </div>
      <Multiselect v-model="example2.value" v-bind="example2"></Multiselect>
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
  name: "example-2",
  components: {
    Multiselect,
    CodeHighlighter2,
  },
  setup() {
    const example2 = ref({
      mode: "multiple",
      value: ["robin"],
      options: {
        batman: "Batman",
        robin: "Robin",
        joker: "Joker",
      },
    });

    const htmlCode = ` <Multiselect v-model="example2.value" v-bind="example2"></Multiselect>`;

    const jsCode = `const example2 = ref({
      mode: "multiple",
      value: ["robin"],
      options: {
        batman: "Batman",
        robin: "Robin",
        joker: "Joker"
      }
    });`;

    return {
      example2,
      htmlCode,
      jsCode,
    };
  },
});
</script>
