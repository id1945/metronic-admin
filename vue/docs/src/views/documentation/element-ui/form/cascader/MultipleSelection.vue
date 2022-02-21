<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#multiple-selection"></a>
      Multiple Selection
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Set <code>props.multiple = true</code> to use multiple selection.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="block mb-5">
        <span class="demonstration" style="margin-right: 5px"
          >Display all tags (default)</span
        >
        <el-cascader :options="options" :props="props" clearable></el-cascader>
      </div>
      <div class="block">
        <span class="demonstration" style="margin-right: 5px"
          >Collapse tags</span
        >
        <el-cascader
          :options="options"
          :props="props"
          collapse-tags
          clearable
        ></el-cascader>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code5
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

export default defineComponent({
  name: "multiple-selection",
  data() {
    return {
      props: { multiple: true },
      options: [
        {
          value: 1,
          label: "Asia",
          children: [
            {
              value: 2,
              label: "China",
              children: [
                { value: 3, label: "Beijing" },
                { value: 4, label: "Shanghai" },
                { value: 5, label: "Hangzhou" },
              ],
            },
            {
              value: 6,
              label: "Japan",
              children: [
                { value: 7, label: "Tokyo" },
                { value: 8, label: "Osaka" },
                { value: 9, label: "Kyoto" },
              ],
            },
            {
              value: 10,
              label: "Korea",
              children: [
                { value: 11, label: "Seoul" },
                { value: 12, label: "Busan" },
                { value: 13, label: "Taegu" },
              ],
            },
          ],
        },
        {
          value: 14,
          label: "Europe",
          children: [
            {
              value: 15,
              label: "France",
              children: [
                { value: 16, label: "Paris" },
                { value: 17, label: "Marseille" },
                { value: 18, label: "Lyon" },
              ],
            },
            {
              value: 19,
              label: "UK",
              children: [
                { value: 20, label: "London" },
                { value: 21, label: "Birmingham" },
                { value: 22, label: "Manchester" },
              ],
            },
          ],
        },
        {
          value: 23,
          label: "North America",
          children: [
            {
              value: 24,
              label: "US",
              children: [
                { value: 25, label: "New York" },
                { value: 26, label: "Los Angeles" },
                { value: 27, label: "Washington" },
              ],
            },
            {
              value: 28,
              label: "Canada",
              children: [
                { value: 29, label: "Toronto" },
                { value: 30, label: "Montreal" },
                { value: 31, label: "Ottawa" },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code5,
    };
  },
});
</script>
