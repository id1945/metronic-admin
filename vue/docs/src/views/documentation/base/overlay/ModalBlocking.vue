<template>
  <!--begin::Section-->
  <div class="pt-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="modal-blocking">
      <a href="#modal-blocking"></a>
      Modal Blocking
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.overlay-block</code> class block a modal's content.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="row">
          <div class="col-lg-6">
            <button
              type="button"
              class="btn btn-primary me-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Launch modal
            </button>

            <!--begin::Modal Body Overlay-->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal Title
                    </h5>

                    <!--begin::Close-->
                    <div
                      class="btn btn-icon btn-sm btn-active-light-primary ms-2"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span class="svg-icon svg-icon-2x">
                        <inline-svg
                          src="media/icons/duotune/arrows/arr061.svg"
                        />
                      </span>
                    </div>
                    <!--end::Close-->
                  </div>

                  <!--begin::Overlay-->
                  <div class="modal-body overlay overlay-block">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,

                    <!--begin::Overlay Layer-->
                    <div class="overlay-layer bg-dark bg-opacity-5">
                      <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                    <!--end::Overlay Layer-->
                  </div>
                  <!--end::Overlay-->

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-light-primary fw-bold"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary fw-bold">
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!--end::Modal Body Overlay-->
          </div>
        </div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<button
          type="button"
          class="btn btn-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch modal
        </button>

        <!--begin::Modal Body Overlay-->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>

                <!--begin::Close-->
                <div
                  class="btn btn-icon btn-sm btn-active-light-primary ms-2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span class="svg-icon svg-icon-2x"></span>
                </div>
                <!--end::Close-->
              </div>

              <!--begin::Overlay-->
              <div class="modal-body overlay overlay-block">
                Lorem Ipsum is simply dummy text ...

                <!--begin::Overlay Layer-->
                <div class="overlay-layer bg-dark bg-opacity-5">
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                <!--end::Overlay Layer-->
              </div>
              <!--end::Overlay-->

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light-primary fw-bold"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary fw-bold">
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
        <!--end::Modal Body Overlay-->`}}</CodeHighlighter
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
