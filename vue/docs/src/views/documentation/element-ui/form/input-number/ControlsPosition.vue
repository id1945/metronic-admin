<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#controls-position"></a>
      Controls Position
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-input-number
        v-model="num"
        controls-position="right"
        @change="handleChange"
        :min="1"
        :max="10"
      ></el-input-number>

      <CodeHighlighter lang="html">{{ code7 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code7 } from "./data";

export default defineComponent({
  name: "controls-position",
  data() {
    return {
      num: 1,
    };
  },
  components: {
    CodeHighlighter,
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
  setup() {
    return {
      code7,
    };
  },
});
</script>
