<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="overview">
      <a href="#example6"></a>
      Multiselect with custom label slot
    </h1>
    <!--end::Heading-->
    <!--begin::Block-->
    <div class="py-5">
      <div class="bg-dark text-white rounded-1 mb-2 p-3">
        Data: {{ example6.value }}
      </div>
      <Multiselect v-model="example6.value" v-bind="example6">
        <template v-slot:multiplelabel="{ values }">
          <div class="multiselect-multiple-label">
            {{ values.length }} characters selected
          </div>
        </template>
      </Multiselect>
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
  name: "example-6",
  components: {
    Multiselect,
    CodeHighlighter2,
  },
  setup() {
    const example6 = ref({
      mode: "multiple",
      value: null,
      placeholder: "Select your characters",
      options: {
        batman: "Batman",
        robin: "Robin",
        joker: "Joker",
      },
    });

    const htmlCode = `<Multiselect
      v-model="example6.value"
      v-bind="example6"
    >
      <template v-slot:multiplelabel="{ values }">
        <div class="multiselect-multiple-label">
          {{ values.length }} characters selected
        </div>
      </template>
    </Multiselect>`;

    const jsCode = `const example6 = ref({
      mode: "multiple",
      value: null,
      placeholder: "Select your characters",
      options: {
        batman: "Batman",
        robin: "Robin",
        joker: "Joker"
      }
    });`;

    return {
      example6,
      htmlCode,
      jsCode,
    };
  },
});
</script>
