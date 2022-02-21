<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="group">
      <a href="#group"></a>
      Group
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Wrap symbols with <code>.symbol-group</code> class to have a group with
      slighly overlapped symbols:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex flex-wrap">
        <div class="symbol-group symbol-hover">
          <div class="symbol symbol-circle symbol-50px mb-10">
            <img src="media/avatars/150-1.jpg" alt="" />
          </div>

          <div class="symbol symbol-circle symbol-50px mb-10">
            <img src="media/avatars/150-2.jpg" alt="" />
          </div>

          <div class="symbol symbol-circle symbol-50px mb-10">
            <img src="media/avatars/150-3.jpg" alt="" />
          </div>

          <div class="symbol symbol-circle symbol-50px mb-10">
            <img src="media/avatars/150-4.jpg" alt="" />
          </div>

          <div class="symbol symbol-circle symbol-50px mb-10">
            <img src="media/avatars/150-5.jpg" alt="" />
          </div>

          <div class="symbol symbol-circle symbol-50px mb-10">
            <img src="media/avatars/150-6.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="symbol-group symbol-hover">
          <div class="symbol symbol-circle symbol-50px">
            <img src="assets/media/avatars/150-1.jpg" alt="" />
          </div>

          <div class="symbol symbol-circle symbol-50px">
            <img src="assets/media/avatars/150-2.jpg" alt="" />
          </div>

          <div class="symbol symbol-circle symbol-50px">
            <img src="assets/media/avatars/150-3.jpg" alt="" />
          </div>

          <div class="symbol symbol-circle symbol-50px">
            <img src="assets/media/avatars/150-4.jpg" alt="" />
          </div>

          <div class="symbol symbol-circle symbol-50px">
            <img src="assets/media/avatars/150-5.jpg" alt="" />
          </div>

          <div class="symbol symbol-circle symbol-50px">
            <img src="assets/media/avatars/150-6.jpg" alt="" />
          </div>
        </div>
        `}}</CodeHighlighter
      >
    </div>
    <!--end::Code-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "group",
  components: {
    CodeHighlighter,
  },
});
</script>
