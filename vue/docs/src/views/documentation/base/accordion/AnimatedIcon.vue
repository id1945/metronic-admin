<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="animated-icon">
      <a href="#animated-icon"></a>
      Animated Icon
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Add <code>.accordion-icon-toggle</code> class to add toggle based animated
      icon in header:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <!--begin::Accordion-->
        <div class="accordion accordion-icon-toggle" id="kt_accordion_2">
          <!--begin::Item-->
          <div class="mb-5">
            <!--begin::Header-->
            <div
              class="accordion-header py-3 d-flex"
              data-bs-toggle="collapse"
              data-bs-target="#kt_accordion_2_item_1"
            >
              <span class="accordion-icon">
                <span class="svg-icon svg-icon-4">
                  <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                Accordion Item #1
              </h3>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div
              id="kt_accordion_2_item_1"
              class="fs-5 collapse show ps-10"
              data-bs-parent="#kt_accordion_2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <!--end::Body-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="mb-5">
            <!--begin::Header-->
            <div
              class="accordion-header py-3 d-flex collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#kt_accordion_2_item_2"
            >
              <span class="accordion-icon">
                <span class="svg-icon svg-icon-4">
                  <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                Accordion Item #2
              </h3>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div
              id="kt_accordion_2_item_2"
              class="collapse fs-5 ps-10"
              data-bs-parent="#kt_accordion_2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <!--end::Body-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="mb-5">
            <!--begin::Header-->
            <div
              class="accordion-header py-3 d-flex collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#kt_accordion_2_item_3"
            >
              <span class="accordion-icon">
                <span class="svg-icon svg-icon-4">
                  <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                Accordion Item #3
              </h3>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div
              id="kt_accordion_2_item_3"
              class="collapse fs-5 ps-10"
              data-bs-parent="#kt_accordion_2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <!--end::Body-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Accordion-->
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter :fieldHeight="400" lang="html">{{
        code
      }}</CodeHighlighter>
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
  setup() {
    const colors = [
      "white",
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "danger",
      "dark",
    ];

    const code = `<!--begin::Accordion-->
<div class="accordion accordion-icon-toggle" id="kt_accordion_2_1">
          <!--begin::Item-->
          <div class="mb-5">
            <!--begin::Header-->
            <div class="accordion-header py-3 d-flex" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_1">
              <span class="accordion-icon"><span class="svg-icon svg-icon-4"><svg>...</svg></span></span>
        <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">The best way to quick start business</h3>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div id="kt_accordion_2_item_1_1" class="fs-5 collapse show ps-10" data-bs-parent="#kt_accordion_2">
              ...
            </div>
            <!--end::Body-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="mb-5">
            <!--begin::Header-->
            <div class="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_2">
        <span class="accordion-icon"><span class="svg-icon svg-icon-4"><svg>...</svg></span>
        <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">How To Create Channel ?</h3>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div id="kt_accordion_2_item_2_1" class="collapse fs-5 ps-10" data-bs-parent="#kt_accordion_2">
              ...
            </div>
            <!--end::Body-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="mb-5">
            <!--begin::Header-->
            <div class="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_3">
              <span class="accordion-icon"><span class="svg-icon svg-icon-4"><svg>...</svg></span></span>
        <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">What are the support terms & conditions ?</h3>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div id="kt_accordion_2_item_3_1" class="collapse fs-5 ps-10" data-bs-parent="#kt_accordion_2">
              ...
            </div>
            <!--end::Body-->
          </div>
          <!--end::Item-->
        </div>
<!--end::Accordion-->`;

    return {
      colors,
      code,
    };
  },
});
</script>
