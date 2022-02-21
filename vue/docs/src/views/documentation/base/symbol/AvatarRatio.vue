<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="avatar-ratio">
      <a href="#avatar-ratio"></a>
      Avatar Ratio
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.symbol-2by3</code> class to set avatar background image with 2
      by 3 ratio:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex flex-wrap">
        <div class="symbol symbol-50px symbol-2by3 me-10 mb-10">
          <div
            class="symbol-label"
            style="background-image: url('media/avatars/150-1.jpg')"
          ></div>
        </div>

        <div class="symbol symbol-50px symbol-2by3 me-10 mb-10">
          <div
            class="symbol-label"
            style="background-image: url('media/avatars/150-2.jpg')"
          ></div>
        </div>

        <div class="symbol symbol-50px symbol-2by3 me-10 mb-10">
          <div
            class="symbol-label"
            style="background-image: url('media/avatars/150-3.jpg')"
          ></div>
        </div>

        <div class="symbol symbol-50px symbol-2by3 me-10 mb-10">
          <div
            class="symbol-label"
            style="background-image: url('media/avatars/150-4.jpg')"
          ></div>
        </div>

        <div class="symbol symbol-50px symbol-2by3 me-10 mb-10">
          <div
            class="symbol-label"
            style="background-image: url('media/avatars/150-5.jpg')"
          ></div>
        </div>

        <div class="symbol symbol-50px symbol-2by3 me-10 mb-10">
          <div
            class="symbol-label"
            style="background-image: url('media/avatars/150-6.jpg')"
          ></div>
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="symbol symbol-50px symbol-2by3">
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
  name: "avatar-radio",
  components: {
    CodeHighlighter,
  },
});
</script>
