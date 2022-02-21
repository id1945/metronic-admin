<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="badge">
      <a href="#badge"></a>
      Badge
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Add a badge element using <code>.badge</code> component inside a symbol
      element:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex flex-wrap">
        <div class="symbol symbol-50px me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold">A</div>
          <span class="badge badge-circle bg-danger">3</span>
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold">A</div>
          <span class="badge badge-circle bg-danger top-100">3</span>
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold">A</div>
          <span class="badge badge-circle bg-danger start-0">3</span>
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold">A</div>
          <span class="badge badge-circle bg-danger start-0 top-100">3</span>
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="symbol symbol-50px">
          <div class="symbol-label fs-2 fw-bold">A</div>
          <span class="badge badge-circle bg-danger">3</span>
        </div>

        <div class="symbol symbol-50px">
          <div class="symbol-label fs-2 fw-bold">A</div>
          <span class="badge badge-circle bg-danger top-100">3</span>
        </div>

        <div class="symbol symbol-50px">
          <div class="symbol-label fs-2 fw-bold">A</div>
          <span class="badge badge-circle bg-danger start-0">3</span>
        </div>

        <div class="symbol symbol-50px">
          <div class="symbol-label fs-2 fw-bold">A</div>
          <span class="badge badge-circle bg-danger start-0 top-100">3</span>
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
  name: "badge",
  components: {
    CodeHighlighter,
  },
});
</script>
