<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-3" id="image-usage">
      <a href="#image-usage"></a>
      Image Usage
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use svg icons as image with <code>&lt;img&gt;</code> tag as shown below:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border d-flex flex-wrap p-10">
        <img
          src="media/icons/duotune/abstract/abs001.svg"
          class="h-40px me-10"
        />
        <img src="media/icons/duotune/arrows/arr001.svg" class="h-40px me-10" />
        <img src="media/icons/duotune/art/art001.svg" class="h-40px me-10" />
        <img src="media/icons/duotune/coding/cod001.svg" class="h-40px me-10" />
        <img
          src="media/icons/duotune/communication/com001.svg"
          class="h-40px me-10"
        />
        <img
          src="media/icons/duotune/ecommerce/ecm001.svg"
          class="h-40px me-10"
        />
        <img
          src="media/icons/duotune/electronics/elc001.svg"
          class="h-40px me-10"
        />
        <img src="media/icons/duotune/files/fil001.svg" class="h-40px me-10" />
        <img
          src="media/icons/duotune/finance/fin001.svg"
          class="h-40px me-10"
        />
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<img
          src="media/icons/duotune/abstract/abs001.svg"
          class="h-40px me-10"
        />
        <img src="media/icons/duotune/arrows/arr001.svg" class="h-40px me-10" />
        <img src="media/icons/duotune/art/art001.svg" class="h-40px me-10" />
        <img src="media/icons/duotune/coding/cod001.svg" class="h-40px me-10" />
        <img
          src="media/icons/duotune/communication/com001.svg"
          class="h-40px me-10"
        />
        <img
          src="media/icons/duotune/ecommerce/ecm001.svg"
          class="h-40px me-10"
        />
        <img
          src="media/icons/duotune/electronics/elc001.svg"
          class="h-40px me-10"
        />
        <img src="media/icons/duotune/files/fil001.svg" class="h-40px me-10" />
        <img
          src="media/icons/duotune/finance/fin001.svg"
          class="h-40px me-10"
        />`}}</CodeHighlighter
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
  name: "image-usage",
  components: {
    CodeHighlighter,
  },
});
</script>
