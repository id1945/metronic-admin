<template>
  <!--begin::Section-->
  <div class="pt-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="basic">
      <a href="#basic"></a>
      Basic
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use
      <a class="fw-bold" href="#" target="_blank">Custom Size Classes</a>&nbsp;
      for bullets to set custom width and height:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 d-flex flex-column flex-wrap">
        <div class="d-flex">
          <div class="d-flex align-items-center me-15">
            <span class="bullet bg-primary h-15px w-25px me-5"></span> .h-15px
            .w-25px
          </div>
          <div class="d-flex align-items-center me-15">
            <span class="bullet bg-primary h-20px w-30px me-5"></span> .h-20px
            .w-30px
          </div>
          <div class="d-flex align-items-center">
            <span class="bullet bg-primary h-30px w-50px me-5"></span> .h-30px
            .w-50px
          </div>
        </div>

        <div class="separator my-10"></div>

        <div class="d-flex">
          <div class="d-flex align-items-center me-15">
            <span
              class="bullet bullet-dot bg-primary h-15px w-15px me-5"
            ></span>
            .h-15px .w-15px
          </div>
          <div class="d-flex align-items-center me-15">
            <span
              class="bullet bullet-dot bg-primary h-20px w-20px me-5"
            ></span>
            .h-20px .w-20px
          </div>
          <div class="d-flex align-items-center">
            <span
              class="bullet bullet-dot bg-primary h-30px w-30px me-5"
            ></span>
            .h-30px .w-30px
          </div>
        </div>

        <div class="separator my-10"></div>

        <div class="d-flex">
          <div class="d-flex align-items-center me-15">
            <span
              class="bullet bullet-vertical bg-primary h-25px w-15px me-5"
            ></span>
            .h-25px .w-15px
          </div>
          <div class="d-flex align-items-center me-15">
            <span
              class="bullet bullet-vertical bg-primary h-30px w-20px me-5"
            ></span>
            .h-30px .w-20px
          </div>
          <div class="d-flex align-items-center">
            <span
              class="bullet bullet-vertical bg-primary h-50px w-30px me-5"
            ></span>
            .h-50px .w-30px
          </div>
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="d-flex align-items-center me-15">
          <span class="bullet bg-primary h-15px w-25px me-5"></span> .h-15px
          .w-25px
        </div>
        <div class="d-flex align-items-center me-15">
          <span class="bullet bg-primary h-20px w-30px me-5"></span> .h-20px
          .w-30px
        </div>
        <div class="d-flex align-items-center">
          <span class="bullet bg-primary h-30px w-50px me-5"></span> .h-30px
          .w-50px
        </div>

        <div class="d-flex align-items-center me-15">
          <span class="bullet bullet-dot bg-primary h-15px w-15px me-5"></span>
          .h-15px .w-15px
        </div>
        <div class="d-flex align-items-center me-15">
          <span class="bullet bullet-dot bg-primary h-20px w-20px me-5"></span>
          .h-20px .w-20px
        </div>
        <div class="d-flex align-items-center">
          <span class="bullet bullet-dot bg-primary h-30px w-30px me-5"></span>
          .h-30px .w-30px
        </div>

        <div class="d-flex align-items-center me-15">
          <span
            class="bullet bullet-vertical bg-primary h-25px w-15px me-5"
          ></span>
          .h-25px .w-15px
        </div>
        <div class="d-flex align-items-center me-15">
          <span
            class="bullet bullet-vertical bg-primary h-30px w-20px me-5"
          ></span>
          .h-30px .w-20px
        </div>
        <div class="d-flex align-items-center">
          <span
            class="bullet bullet-vertical bg-primary h-50px w-30px me-5"
          ></span>
          .h-50px .w-30px
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
  name: "sizes",
  components: {
    CodeHighlighter,
  },
});
</script>
