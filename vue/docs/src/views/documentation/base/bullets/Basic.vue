<template>
  <!--begin::Section-->
  <div class="pt-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="basic">
      <a href="#basic"></a>
      Basic Example
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.separator</code> class to place a separator with border color
      and add vertical space with margin spacing classes as shown below:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        Some text goes here
        <div class="separator my-10"></div>
        Other text goes here
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`
        <div class="d-flex flex-column">
          <li class="d-flex align-items-center py-2">
            <span class="bullet me-5"></span> Item 1
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet me-5"></span> Item 2
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet me-5"></span> Item 3
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet me-5"></span> Item 4
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet me-5"></span> Item 5
          </li>
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
  name: "basic",
  components: {
    CodeHighlighter,
  },
});
</script>
