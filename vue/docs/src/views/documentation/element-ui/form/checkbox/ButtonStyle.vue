<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#button-style"></a>
      Button style
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Checkbox with button styles.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div>
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button
            v-for="city in cities"
            :label="city"
            :key="city"
            >{{ city }}</el-checkbox-button
          >
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup2" size="medium">
          <el-checkbox-button
            v-for="city in cities"
            :label="city"
            :key="city"
            >{{ city }}</el-checkbox-button
          >
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup3" size="small">
          <el-checkbox-button
            v-for="city in cities"
            :label="city"
            :disabled="city === 'Beijing'"
            :key="city"
            >{{ city }}</el-checkbox-button
          >
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
          <el-checkbox-button
            v-for="city in cities"
            :label="city"
            :key="city"
            >{{ city }}</el-checkbox-button
          >
        </el-checkbox-group>
      </div>

      <CodeHighlighter lang="html">{{ code5 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

const cityOptions = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
export default defineComponent({
  name: "button-style",
  data() {
    return {
      checkboxGroup1: ["Shanghai"],
      checkboxGroup2: ["Shanghai"],
      checkboxGroup3: ["Shanghai"],
      checkboxGroup4: ["Shanghai"],
      cities: cityOptions,
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
