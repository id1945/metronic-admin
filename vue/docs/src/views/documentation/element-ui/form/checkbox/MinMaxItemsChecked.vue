<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#min-max-items-checked"></a>
      Minimum / Maximum items checked
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      The <code>min</code> and <code>max</code> properties can help you to limit
      the number of checked items.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{
          city
        }}</el-checkbox>
      </el-checkbox-group>

      <CodeHighlighter :field-height="400" lang="html">{{
        code4
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

const cityOptions = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
export default defineComponent({
  name: "min-max-items-checked",
  data() {
    return {
      checkedCities: ["Shanghai", "Beijing"],
      cities: cityOptions,
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code4,
    };
  },
});
</script>
