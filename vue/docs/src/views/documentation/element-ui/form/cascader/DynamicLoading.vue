<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#dynamic-loading"></a>
      Dynamic loading
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Dynamic load its child nodes when checked a node.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-cascader :props="props"></el-cascader>

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

let id = 0;

export default defineComponent({
  name: "dynamic-loading",
  data() {
    return {
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const nodes = Array.from({ length: level + 1 }).map((item) => ({
              value: ++id,
              label: `Option - ${id}`,
              leaf: level >= 2,
            }));
            // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
            resolve(nodes);
          }, 1000);
        },
      },
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
