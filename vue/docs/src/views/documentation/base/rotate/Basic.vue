<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="basic">
      <a href="#basic"></a>
      Basic
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.rotate</code> class on a button and
      <code>.rotate-{degree}</code> class on a icon to rotate it to following
      <code>degree</code> options:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <ul class="pt-3 pb-5">
      <li class="py-2">
        <code>90</code> - for classes that rotates to <code>90 deg</code>
      </li>
      <li class="py-2">
        <code>180</code> - for classes that rotates to <code>180 deg</code>
      </li>
      <li class="py-2">
        <code>270</code> - for classes that rotates to <code>270 deg</code>
      </li>
      <li class="py-2">
        <code>n90</code> - for classes that rotates to negative
        <code>-90 deg</code>
      </li>
      <li class="py-2">
        <code>n180</code> - for classes that rotates to negative
        <code>-180 deg</code>
      </li>
      <li class="py-2">
        <code>n270</code> - for classes that rotates to negative
        <code>-270 deg</code>
      </li>
    </ul>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10 pb-5">
        <button type="button" class="btn btn-primary me-5 mb-5">
          Default
          <span class="svg-icon svg-icon-2 ms-3">
            <inline-svg src="media/icons/duotune/arrows/arr069.svg" />
          </span>
        </button>

        <button type="button" class="btn btn-primary active me-5 mb-5 rotate">
          90 deg
          <span class="svg-icon svg-icon-2 rotate-90 ms-3">
            <inline-svg src="media/icons/duotune/arrows/arr069.svg" />
          </span>
        </button>

        <button type="button" class="btn btn-primary rotate active me-5 mb-5">
          180 deg
          <span class="svg-icon svg-icon-2 rotate-180 ms-3">
            <inline-svg src="media/icons/duotune/arrows/arr069.svg" />
          </span>
        </button>

        <button type="button" class="btn btn-primary rotate active me-5 mb-5">
          270 deg
          <span class="svg-icon svg-icon-2 rotate-270 ms-3">
            <inline-svg src="media/icons/duotune/arrows/arr069.svg" />
          </span>
        </button>

        <button type="button" class="btn btn-primary rotate active me-5 mb-5">
          -90 deg
          <span class="svg-icon svg-icon-2 rotate-n90 ms-3">
            <inline-svg src="media/icons/duotune/arrows/arr069.svg" />
          </span>
        </button>

        <button type="button" class="btn btn-primary rotate active me-5 mb-5">
          -180 deg
          <span class="svg-icon svg-icon-2 rotate-n180 ms-3">
            <inline-svg src="media/icons/duotune/arrows/arr069.svg" />
          </span>
        </button>

        <button type="button" class="btn btn-primary rotate active me-5 mb-5">
          -270 deg
          <span class="svg-icon svg-icon-2 rotate-n270 ms-3">
            <inline-svg src="media/icons/duotune/arrows/arr069.svg" />
          </span>
        </button>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter lang="html" :fieldHeight="400"
        >{{`<button type="button" class="btn btn-primary">
          Default <svg class="svg-icon-2"></svg>
        </button>

        <button type="button" class="btn btn-primary rotate">
          90 deg <span class="svg-icon-2 rotate-90"><svg></svg></span>
        </button>

        <button type="button" class="btn btn-primary rotate">
          180 deg <span class="svg-icon-2 rotate-180"><svg></svg></span>
        </button>

        <button type="button" class="btn btn-primary rotate">
          270 deg <span class="svg-icon-2 rotate-270"><svg></svg></span>
        </button>

        <button type="button" class="btn btn-primary rotate">
          -90 deg <span class="svg-icon-2 rotate-n90"><svg></svg></span>
        </button>

        <button type="button" class="btn btn-primary rotate">
          -180 deg <span class="svg-icon-2 rotate-n180"><svg></svg></span>
        </button>

        <button type="button" class="btn btn-primary rotate">
          -270 deg
          <span class="svg-icon-2 rotate-n270"><svg></svg></span></button
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
  name: "overview",
  components: {
    CodeHighlighter,
  },
});
</script>
