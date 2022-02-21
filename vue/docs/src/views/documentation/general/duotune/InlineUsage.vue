<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-3" id="inline-usage">
      <a href="#inline-usage"></a>
      Inline Usage
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use svg icons as inline svg element in order to customize the icon size
      and color via CSS:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border d-flex flex-wrap p-10">
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/abstract/abs001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/arrows/arr001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/art/art001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/coding/cod001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/communication/com001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/ecommerce/ecm001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/electronics/elc001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/files/fil001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/finance/fin001.svg" />
        </span>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html"
        >{{`<span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/abstract/abs001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/arrows/arr001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/art/art001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/coding/cod001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/communication/com001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/ecommerce/ecm001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/electronics/elc001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/files/fil001.svg" />
        </span>
        <span class="svg-icon svg-icon-3x me-10">
          <inline-svg src="media/icons/duotune/finance/fin001.svg" /> </span
        >`}}</CodeHighlighter
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
  name: "inlne-usage",
  components: {
    CodeHighlighter,
  },
});
</script>
