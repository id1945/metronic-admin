<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#grouping"></a>
      Grouping
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Display options in groups.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-select v-model="value" placeholder="Select">
        <el-option-group
          v-for="group in options"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-option-group>
      </el-select>

      <CodeHighlighter :field-height="400" lang="html">{{
        code7
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code7 } from "./data";

export default defineComponent({
  name: "grouping",
  data() {
    return {
      options: [
        {
          label: "Popular cities",
          options: [
            {
              value: "Shanghai",
              label: "Shanghai",
            },
            {
              value: "Beijing",
              label: "Beijing",
            },
          ],
        },
        {
          label: "City name",
          options: [
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
            {
              value: "Dalian",
              label: "Dalian",
            },
          ],
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
      code7,
    };
  },
});
</script>
