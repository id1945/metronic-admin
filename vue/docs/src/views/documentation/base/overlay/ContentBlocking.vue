<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="content-blocking">
      <a href="#content-blocking"></a>
      Content Blocking
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.overlay-block</code> class for blocking an element content.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="row">
          <div class="col-lg-6">
            <!--begin::Card-->
            <div class="card shadow">
              <div class="card-header">
                <h3 class="card-title">Content Blocking</h3>
              </div>
              <div class="card-body">
                <div class="overlay overlay-block rounded">
                  <div class="overlay-wrapper p-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to.
                  </div>

                  <div class="overlay-layer rounded bg-dark bg-opacity-5">
                    <div class="spinner-border text-primary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
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
      <CodeHighlighter lang="html"
        >{{`
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Content Blocking</h3>
          </div>
          <div class="card-body">
            <div class="overlay overlay-block rounded">
              <div class="overlay-wrapper p-5">
                Lorem Ipsum is simply dummy text...
              </div>
              <div class="overlay-layer rounded bg-dark bg-opacity-5">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
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
