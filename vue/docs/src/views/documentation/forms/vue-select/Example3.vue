<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="overview">
      <a href="#example3"></a>
      Multiselect with disabled options
    </h1>
    <!--end::Heading-->
    <!--begin::Block-->
    <div class="py-5">
      <div class="bg-dark text-white rounded-1 mb-2 p-3">
        Data: {{ example3.value }}
      </div>
      <Multiselect v-model="example3.value" v-bind="example3"></Multiselect>
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
  name: "example-3",
  components: {
    Multiselect,
    CodeHighlighter2,
  },
  setup() {
    const example3 = ref({
      mode: "multiple",
      value: [],
      options: [
        { value: "batman", label: "Batman" },
        { value: "robin", label: "Robin", disabled: true },
        { value: "joker", label: "Joker" },
      ],
    });

    const htmlCode = `<Multiselect v-model="example3.value" v-bind="example3"></Multiselect>`;

    const jsCode = `const example3 = ref({
      mode: "multiple",
      value: [],
      options: [
        { value: "batman", label: "Batman" },
        { value: "robin", label: "Robin", disabled: true },
        { value: "joker", label: "Joker" }
      ]
    });`;

    return {
      example3,
      htmlCode,
      jsCode,
    };
  },
});
</script>
