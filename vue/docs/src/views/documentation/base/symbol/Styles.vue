<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="styles">
      <a href="#sizes"></a>
      Styles
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.symbol-circle</code> and <code>.symbol-square</code> classes to
      change a symbol element's style:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex flex-wrap">
        <div class="symbol symbol-50px me-10 mb-10">
          <div
            class="symbol-label"
            style="background-image: url('media/avatars/150-1.jpg')"
          ></div>
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
        </div>

        <div class="symbol symbol-50px symbol-circle me-10 mb-10">
          <div
            class="symbol-label"
            style="background-image: url('media/avatars/150-1.jpg')"
          ></div>
        </div>

        <div class="symbol symbol-50px symbol-circle me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
        </div>

        <div class="symbol symbol-50px symbol-square me-10 mb-10">
          <div
            class="symbol-label"
            style="background-image: url('media/avatars/150-1.jpg')"
          ></div>
        </div>

        <div class="symbol symbol-50px symbol-square me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="symbol symbol-50px">
          <div
            class="symbol-label"
            style="background-image: url(assets/media/avatars/150-1.jpg)"
          ></div>
        </div>

        <div class="symbol symbol-50px">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
        </div>

        <div class="symbol symbol-50px symbol-circle">
          <div
            class="symbol-label"
            style="background-image: url(assets/media/avatars/150-1.jpg)"
          ></div>
        </div>

        <div class="symbol symbol-50px symbol-circle">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
        </div>

        <div class="symbol symbol-50px symbol-square">
          <div
            class="symbol-label"
            style="background-image: url(assets/media/avatars/150-1.jpg)"
          ></div>
        </div>

        <div class="symbol symbol-50px symbol-square">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
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
  name: "styles",
  components: {
    CodeHighlighter,
  },
});
</script>
