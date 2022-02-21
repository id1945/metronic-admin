<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage"></a>
      Basic usage
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      The current value is displayed when the slider is being dragged.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="block">
        <span class="demonstration">Default value</span>
        <el-slider v-model="value1"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">Customized initial value</span>
        <el-slider v-model="value2"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">Hide Tooltip</span>
        <el-slider v-model="value3" :show-tooltip="false"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">Format Tooltip</span>
        <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">Disabled</span>
        <el-slider v-model="value5" disabled></el-slider>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code1
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "./data";

export default defineComponent({
  name: "basic-usage",
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
    };
  },
  components: {
    CodeHighlighter,
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
  },
  setup() {
    return {
      code1,
    };
  },
});
</script>
