<template>
  <!--begin::Section-->
  <div class="pt-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="custom">
      <a href="#custom"></a>
      Custom Example
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Add <code>.carousel-custom</code> to use a customized carousel as shown
      below:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <div
          id="kt_carousel_1_carousel"
          class="carousel carousel-custom slide"
          data-bs-ride="carousel"
          data-bs-interval="8000"
        >
          <!--begin::Heading-->
          <div
            class="d-flex align-items-center justify-content-between flex-wrap"
          >
            <!--begin::Label-->
            <span class="fs-4 fw-bolder pe-2">Projects</span>
            <!--end::Label-->

            <!--begin::Carousel Indicators-->
            <ol class="p-0 m-0 carousel-indicators carousel-indicators-dots">
              <li
                data-bs-target="#kt_carousel_1_carousel"
                data-bs-slide-to="0"
                class="ms-1 active"
              ></li>
              <li
                data-bs-target="#kt_carousel_1_carousel"
                data-bs-slide-to="1"
                class="ms-1"
              ></li>
              <li
                data-bs-target="#kt_carousel_1_carousel"
                data-bs-slide-to="2"
                class="ms-1"
              ></li>
            </ol>
            <!--end::Carousel Indicators-->
          </div>
          <!--end::Heading-->

          <!--begin::Carousel-->
          <div class="carousel-inner pt-8">
            <!--begin::Item-->
            <div class="carousel-item active">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <!--end::Item-->

            <!--begin::Item-->
            <div class="carousel-item">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <!--end::Item-->

            <!--begin::Item-->
            <div class="carousel-item">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </div>
            <!--end::Item-->
          </div>
          <!--end::Carousel-->
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter fieldHeight="400" lang="html"
        >{{`
        <div
          id="kt_carousel_1_carousel"
          class="carousel carousel-custom slide"
          data-bs-ride="carousel"
          data-bs-interval="8000"
        >
          <!--begin::Heading-->
          <div
            class="d-flex align-items-center justify-content-between flex-wrap"
          >
            <!--begin::Label-->
            <span class="fs-4 fw-bolder pe-2">Projects</span>
            <!--end::Label-->

            <!--begin::Carousel Indicators-->
            <ol class="p-0 m-0 carousel-indicators carousel-indicators-dots">
              <li
                data-bs-target="#kt_carousel_1_carousel"
                data-bs-slide-to="0"
                class="ms-1 active"
              ></li>
              <li
                data-bs-target="#kt_carousel_1_carousel"
                data-bs-slide-to="1"
                class="ms-1"
              ></li>
              <li
                data-bs-target="#kt_carousel_1_carousel"
                data-bs-slide-to="2"
                class="ms-1"
              ></li>
            </ol>
            <!--end::Carousel Indicators-->
          </div>
          <!--end::Heading-->

          <!--begin::Carousel-->
          <div class="carousel-inner pt-8">
            <!--begin::Item-->
            <div class="carousel-item active">...</div>
            <!--end::Item-->

            <!--begin::Item-->
            <div class="carousel-item">...</div>
            <!--end::Item-->

            <!--begin::Item-->
            <div class="carousel-item">...</div>
            <!--end::Item-->
          </div>
          <!--end::Carousel-->
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
  name: "custom-example",
  components: {
    CodeHighlighter,
  },
});
</script>
