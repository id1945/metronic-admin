<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#hide-pagination-when-there-is-only-one-page"></a>
      Hide pagination when there is only one page
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      When there is only one page, hide the pagination by setting the
      <code>hide-on-single-page</code> attribute.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div>
        <el-switch v-model="value"> </el-switch>
        <el-pagination
          :hide-on-single-page="value"
          :total="5"
          layout="prev, pager, next"
        >
        </el-pagination>
      </div>

      <CodeHighlighter lang="html">{{ code6 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data";

export default defineComponent({
  name: "hide-pagination-when-there-is-only-one-page",
  components: {
    CodeHighlighter,
  },
  data() {
    return {
      value: false,
    };
  },
  setup() {
    return {
      code6,
    };
  },
});
</script>
