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
      Use <code>.overlay</code> on an element and wrap the element's primary
      content with <code>.overlay-wrapper</code> and the overlay content with
      <code>.overlay-layer</code> and set the overlay backgroud color with
      opacity with <code>.bg-white .bg-opacity-5</code>:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="row">
          <div class="col-lg-4">
            <!--begin::Card-->
            <div class="card overlay">
              <div class="card-body p-0">
                <div class="overlay-wrapper">
                  <img
                    src="media/stock/600x400/img-1.jpg"
                    alt=""
                    class="w-100 rounded"
                  />
                </div>
                <div class="overlay-layer bg-dark bg-opacity-10">
                  <a href="#" class="btn btn-primary btn-shadow">Explore</a>
                  <a href="#" class="btn btn-light-primary btn-shadow ms-2"
                    >Purchase</a
                  >
                </div>
              </div>
            </div>
            <!--end::Card-->
          </div>

          <div class="col-lg-4">
            <!--begin::Card-->
            <div class="card overlay">
              <div class="card-body p-0">
                <div class="overlay-wrapper">
                  <img
                    src="media/stock/600x400/img-2.jpg"
                    alt=""
                    class="w-100 rounded"
                  />
                </div>
                <div
                  class="
                    overlay-layer
                    bg-dark bg-opacity-10
                    align-items-end
                    justify-content-center
                  "
                >
                  <div class="d-flex flex-grow-1 flex-center py-5">
                    <a href="#" class="btn btn-primary btn-shadow">Explore</a>
                    <a href="#" class="btn btn-light-primary btn-shadow ms-2"
                      >Purchase</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!--end::Card-->
          </div>

          <div class="col-lg-4">
            <!--begin::Card-->
            <div class="card overlay">
              <div class="card-body p-0">
                <div class="overlay-wrapper">
                  <img
                    src="media/stock/600x400/img-3.jpg"
                    alt=""
                    class="w-100 rounded"
                  />
                </div>
                <div
                  class="
                    overlay-layer
                    bg-dark bg-opacity-10
                    align-items-start
                    justify-content-center
                  "
                >
                  <div class="d-flex flex-grow-1 flex-center py-5">
                    <a href="#" class="btn btn-primary btn-shadow">Explore</a>
                    <a href="#" class="btn btn-light-primary btn-shadow ms-2"
                      >Purchase</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!--end::Card-->
          </div>
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter :fieldHeight="400" lang="html"
        >{{`
        <div class="row">
          <div class="col-lg-4">
            <!--begin::Card-->
            <div class="card overlay">
              <div class="card-body p-0">
                <div class="overlay-wrapper">
                  <img
                    src="assets/media/stock/600x400/img-1.jpg"
                    alt=""
                    class="w-100 rounded"
                  />
                </div>
                <div class="overlay-layer bg-dark bg-opacity-10">
                  <a href="#" class="btn btn-primary btn-shadow">Explore</a>
                  <a href="#" class="btn btn-light-primary btn-shadow ms-2"
                    >Purchase</a
                  >
                </div>
              </div>
            </div>
            <!--end::Card-->
          </div>

          <div class="col-lg-4">
            <!--begin::Card-->
            <div class="card overlay">
              <div class="card-body p-0">
                <div class="overlay-wrapper">
                  <img
                    src="assets/media/stock/600x400/img-2.jpg"
                    alt=""
                    class="w-100 rounded"
                  />
                </div>
                <div
                  class="
                    overlay-layer
                    bg-dark bg-opacity-10
                    align-items-end
                    justify-content-center
                  "
                >
                  <div class="d-flex flex-grow-1 flex-center py-5">
                    <a href="#" class="btn btn-primary btn-shadow">Explore</a>
                    <a href="#" class="btn btn-light-primary btn-shadow ms-2"
                      >Purchase</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!--end::Card-->
          </div>

          <div class="col-lg-4">
            <!--begin::Card-->
            <div class="card overlay">
              <div class="card-body p-0">
                <div class="overlay-wrapper">
                  <img
                    src="assets/media/stock/600x400/img-3.jpg"
                    alt=""
                    class="w-100 rounded"
                  />
                </div>
                <div
                  class="
                    overlay-layer
                    bg-dark bg-opacity-10
                    align-items-start
                    justify-content-center
                  "
                >
                  <div class="d-flex flex-grow-1 flex-center py-5">
                    <a href="#" class="btn btn-primary btn-shadow">Explore</a>
                    <a href="#" class="btn btn-light-primary btn-shadow ms-2"
                      >Purchase</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!--end::Card-->
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
  name: "basic-examples",
  components: {
    CodeHighlighter,
  },
});
</script>
