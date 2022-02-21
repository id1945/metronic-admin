<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#more-icons"></a>
      More icons
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      You can use different icons to distinguish different rate components.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <i class="icon-rate-face-1"></i>
      <el-rate
        v-model="value"
        :icon-classes="iconClasses"
        void-icon-class="el-icon-remove-outline"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
      >
      </el-rate>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "more-icons",
  data() {
    return {
      value: null,
      iconClasses: ["el-icon-remove", "el-icon-remove", "el-icon-remove"], // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
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
