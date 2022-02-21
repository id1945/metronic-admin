<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="avatar">
      <a href="#avatar"></a>
      Avatar
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Refer to below example to use Symbol for avatar image display:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex flex-wrap">
        <div class="symbol symbol-50px me-10 mb-10">
          <img src="media/avatars/150-1.jpg" alt="" />
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <img src="media/avatars/150-2.jpg" alt="" />
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <img src="media/avatars/150-3.jpg" alt="" />
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <img src="media/avatars/150-4.jpg" alt="" />
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <img src="media/avatars/150-5.jpg" alt="" />
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <img src="media/avatars/150-6.jpg" alt="" />
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="symbol symbol-50px">
          <img src="assets/media/avatars/150-1.jpg" alt="" />
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
  name: "avatar",
  components: {
    CodeHighlighter,
  },
});
</script>
