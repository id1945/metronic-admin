<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="overview">
      <a href="#example4"></a>
      Tags with create, search and array of objects options
    </h1>
    <!--end::Heading-->
    <!--begin::Block-->
    <div class="py-5">
      <div class="bg-dark text-white rounded-1 mb-2 p-3">
        Data: {{ example4.value }}
      </div>
      <Multiselect v-model="example4.value" v-bind="example4"></Multiselect>
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
  name: "example-4",
  components: {
    Multiselect,
    CodeHighlighter2,
  },
  setup() {
    const example4 = ref({
      mode: "tags",
      value: ["batman"],
      options: [
        { value: "batman", label: "Batman" },
        { value: "robin", label: "Robin" },
        { value: "joker", label: "Joker" },
      ],
      searchable: true,
      createTag: true,
    });

    const htmlCode = ` <Multiselect v-model="example4.value" v-bind="example4"></Multiselect>`;

    const jsCode = `const example4 = ref({
      mode: "tags",
      value: ["batman"],
      options: [
        { value: "batman", label: "Batman" },
        { value: "robin", label: "Robin" },
        { value: "joker", label: "Joker" }
      ],
      searchable: true,
      createTag: true
    });`;

    return {
      example4,
      htmlCode,
      jsCode,
    };
  },
});
</script>
