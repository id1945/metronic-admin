<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#spacer"></a>
      Spacer
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Sometimes we want something more than blank space, so we have (spacer) to
      help us.
    </div>
    <!--end::Block-->

    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#literal-type-spacer"></a>
      Literal type spacer
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-space :size="size" spacer="|">
        <div v-for="i in 2" :key="i">
          <el-button> button {{ i }} </el-button>
        </div>
      </el-space>

      <CodeHighlighter lang="html">{{ literalCode6 }}</CodeHighlighter>
    </div>
  </div>

  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#spacer-can-also-be-vnode"></a>
      Spacer can also be VNode
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-space :size="size" :spacer="spacer">
        <div v-for="i in 2" :key="i">
          <el-button> button {{ i }} </el-button>
        </div>
      </el-space>

      <CodeHighlighter lang="html">{{ spacerCode6 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import { ElDivider } from "element-plus";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import {
  literalCode6,
  spacerCode6,
} from "@/views/documentation/element-ui/basic/space/code";

export default defineComponent({
  name: "spacer",
  data() {
    return {
      size: 10,
      spacer: h(ElDivider, { direction: "vertical" }),
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      literalCode6,
      spacerCode6,
    };
  },
});
</script>
