<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#full-screen-loading"></a>
      Full screen loading
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Show a full screen animation while loading data.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button
        type="primary"
        @click="openFullScreen1"
        v-loading.fullscreen.lock="fullscreenLoading"
      >
        As a directive
      </el-button>
      <el-button type="primary" @click="openFullScreen2">
        As a service
      </el-button>

      <CodeHighlighter :field-height="400" lang="html">{{
        code3
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data.ts";

export default defineComponent({
  name: "full-screen-loading",
  data() {
    return {
      fullscreenLoading: false,
    };
  },
  methods: {
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
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
