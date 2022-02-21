<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="reset-side-paddings">
      <a href="#reset-side-paddings"></a>
      Reset Side Paddings
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Add <code>.card-px-0</code> to reset a card header, body and footer's side
      paddings:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="card card-px-0 shadow">
        <div class="card-header">
          <h3 class="card-title">Title</h3>
          <div class="card-toolbar">
            <button type="button" class="btn btn-sm btn-light">Action</button>
          </div>
        </div>
        <div class="card-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div class="card-footer">Footer</div>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="card card-px-0">
          <div class="card-header">
            <h3 class="card-title">Title</h3>
            <div class="card-toolbar">
              <button type="button" class="btn btn-sm btn-light">Action</button>
            </div>
          </div>
          <div class="card-body">Lorem Ipsum is simply dummy text...</div>
          <div class="card-footer">Footer</div>
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
  name: "reset-side-padding",
  components: {
    CodeHighlighter,
  },
});
</script>
