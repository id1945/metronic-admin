<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-template"></a>
      Custom Template
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">You can customize HTML templates for options.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in cities"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{
            item.value
          }}</span>
        </el-option>
      </el-select>

      <CodeHighlighter :field-height="400" lang="html">{{
        code6
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data";

export default defineComponent({
  name: "custom-template",
  data() {
    return {
      cities: [
        {
          value: "Beijing",
          label: "Beijing",
        },
        {
          value: "Shanghai",
          label: "Shanghai",
        },
        {
          value: "Nanjing",
          label: "Nanjing",
        },
        {
          value: "Chengdu",
          label: "Chengdu",
        },
        {
          value: "Shenzhen",
          label: "Shenzhen",
        },
        {
          value: "Guangzhou",
          label: "Guangzhou",
        },
      ],
      value: "",
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code6,
    };
  },
});
</script>
