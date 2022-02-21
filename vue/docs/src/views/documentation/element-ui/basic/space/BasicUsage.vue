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
      The basic use case is using this component to provide unified space
      between each components
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-space wrap>
        <el-card class="box-card" style="width: 250px" v-for="i in 3" :key="i">
          <template #header>
            <div class="card-header">
              <span>Card name</span>
              <el-button class="button" type="text">Operation button</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "List item " + o }}
          </div>
        </el-card>
      </el-space>

      <CodeHighlighter lang="html">{{ code1 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "@/views/documentation/element-ui/basic/space/code";

export default defineComponent({
  name: "basic-usage",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code1,
    };
  },
});
</script>
