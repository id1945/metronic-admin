<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customized-size"></a>
      Customized Size
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Sometimes built-in sizes could not meet the business needs, we can use
      custom size (number type) to control the space between items.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-slider v-model="size" />
      <el-space wrap :size="size">
        <el-card class="box-card" style="width: 250px" v-for="i in 2" :key="i">
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

      <CodeHighlighter :field-height="400" lang="html">{{
        code4
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "@/views/documentation/element-ui/basic/space/code";

export default defineComponent({
  name: "customized-size",
  data() {
    return {
      size: 20,
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
