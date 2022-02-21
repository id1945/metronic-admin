<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#control-the-size-of-the-space"></a>
      Control the size of the space
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Control the space size via <code>size</code> API. You can set the size
      with built-in sizes <code>mini</code>, <code>small</code>,
      <code>medium</code>, <code>large</code>, these size coresponds to
      <code>4px</code>, <code>8px</code>, <code>12px</code>, <code>16px</code>.
      The default size is <code>small</code>, A.K.A. <code>8px</code>

      You can also using customized size to override it. Refer to the next part.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-space direction="vertical" alignment="start" :size="30">
        <el-radio-group v-model="size">
          <el-radio :label="'mini'">mini</el-radio>
          <el-radio :label="'small'">small</el-radio>
          <el-radio :label="'medium'">medium</el-radio>
          <el-radio :label="'large'">large</el-radio>
        </el-radio-group>

        <el-space wrap :size="size">
          <el-card
            class="box-card"
            style="width: 250px"
            v-for="i in 3"
            :key="i"
          >
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" type="text"
                  >Operation button</el-button
                >
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">
              {{ "List item " + o }}
            </div>
          </el-card>
        </el-space>
      </el-space>

      <CodeHighlighter :field-height="400" lang="html">{{
        code3
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<style lang="scss">
.c-white {
  color: white;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "@/views/documentation/element-ui/basic/space/code";

export default defineComponent({
  name: "control-the-size-of-space",
  data() {
    return {
      size: "mini",
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code3,
    };
  },
});
</script>
