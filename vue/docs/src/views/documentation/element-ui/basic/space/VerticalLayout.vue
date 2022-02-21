<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#vertical-layout"></a>
      Vertical Layout
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Using <code>direction</code> attribute to control the layout, we use
      <code>flex-direction</code> to implement this.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-space direction="vertical">
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

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "@/views/documentation/element-ui/basic/space/code";

export default defineComponent({
  name: "vertical-layout",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code2,
    };
  },
});
</script>
