<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customization"></a>
      Customization
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Can be customized to show various content.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button type="text" @click="open">Click to open Message Box</el-button>

      <CodeHighlighter :field-height="400" lang="html">{{
        code4
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent, h } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "customization",
  components: {
    CodeHighlighter,
  },
  methods: {
    open() {
      this.$msgbox({
        title: "Message",
        message: h("p", null, [
          h("span", null, "Message can be "),
          h("i", { style: "color: teal" }, "VNode"),
        ]),
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "Loading...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      }).then((action) => {
        this.$message({
          type: "info",
          message: "action: " + action,
        });
      });
    },
  },
  setup() {
    return {
      code4,
    };
  },
});
</script>
