<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="basic">
      <a href="#basic"></a>
      Basic Example
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Click the accordions below to expand/collapse the accordion content.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <!--begin::Accordion-->
        <div class="accordion" id="kt_accordion_1">
          <div class="accordion-item">
            <h2 class="accordion-header" id="kt_accordion_1_header_1">
              <button
                class="accordion-button fs-4 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_accordion_1_body_1"
                aria-expanded="true"
                aria-controls="kt_accordion_1_body_1"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="kt_accordion_1_body_1"
              class="accordion-collapse collapse show"
              aria-labelledby="kt_accordion_1_header_1"
              data-bs-parent="#kt_accordion_1"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="kt_accordion_1_header_2">
              <button
                class="accordion-button fs-4 fw-bold collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_accordion_1_body_2"
                aria-expanded="false"
                aria-controls="kt_accordion_1_body_2"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="kt_accordion_1_body_2"
              class="accordion-collapse collapse"
              aria-labelledby="kt_accordion_1_header_2"
              data-bs-parent="#kt_accordion_1"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="kt_accordion_1_header_3">
              <button
                class="accordion-button fs-4 fw-bold collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_accordion_1_body_3"
                aria-expanded="false"
                aria-controls="kt_accordion_1_body_3"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="kt_accordion_1_body_3"
              class="accordion-collapse collapse"
              aria-labelledby="kt_accordion_1_header_3"
              data-bs-parent="#kt_accordion_1"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <!--end::Accordion-->
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter :fieldHeight="400" lang="html"
        >{{`<!--begin::Accordion-->
        <div class="accordion" id="kt_accordion_1">
          <div class="accordion-item">
            <h2 class="accordion-header" id="kt_accordion_1_header_1">
              <button
                class="accordion-button fs-4 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_accordion_1_body_1"
                aria-expanded="true"
                aria-controls="kt_accordion_1_body_1"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="kt_accordion_1_body_1"
              class="accordion-collapse collapse show"
              aria-labelledby="kt_accordion_1_header_1"
              data-bs-parent="#kt_accordion_1"
            >
              <div class="accordion-body">...</div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="kt_accordion_1_header_2">
              <button
                class="accordion-button fs-4 fw-bold collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_accordion_1_body_2"
                aria-expanded="false"
                aria-controls="kt_accordion_1_body_2"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="kt_accordion_1_body_2"
              class="accordion-collapse collapse"
              aria-labelledby="kt_accordion_1_header_2"
              data-bs-parent="#kt_accordion_1"
            >
              <div class="accordion-body">...</div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="kt_accordion_1_header_3">
              <button
                class="accordion-button fs-4 fw-bold collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_accordion_1_body_3"
                aria-expanded="false"
                aria-controls="kt_accordion_1_body_3"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="kt_accordion_1_body_3"
              class="accordion-collapse collapse"
              aria-labelledby="kt_accordion_1_header_3"
              data-bs-parent="#kt_accordion_1"
            >
              <div class="accordion-body">...</div>
            </div>
          </div>
        </div>
        <!--end::Accordion-->`}}</CodeHighlighter
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
  name: "basic",
  components: {
    CodeHighlighter,
  },
});
</script>
