<template>
  <!--begin::Section-->
  <div class="pt-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="toggle">
      <a href="#toggle"></a>
      Toggle
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Click on the below buttons to toggle the button active state and rotate
      the icons accordingly:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <button
          @click="click($event)"
          type="button"
          class="btn btn-primary me-5 rotate"
          id="kt_button_1"
        >
          90 deg
          <span class="svg-icon svg-icon-2 rotate-90 ms-3">
            <inline-svg src="media/icons/duotune/arrows/arr069.svg" />
          </span>
        </button>

        <button
          @click="click($event)"
          type="button"
          class="btn btn-danger me-5 rotate"
          id="kt_button_2"
        >
          180 deg
          <span class="svg-icon svg-icon-2 rotate-180 ms-3">
            <inline-svg src="media/icons/duotune/arrows/arr069.svg" />
          </span>
        </button>

        <button
          @click="click($event)"
          type="button"
          class="btn btn-success me-5 rotate"
          id="kt_button_3"
        >
          270 deg
          <span class="svg-icon svg-icon-2 rotate-270 ms-3">
            <inline-svg src="media/icons/duotune/arrows/arr069.svg" />
          </span>
        </button>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter2>
        <template v-slot:html>{{ html }}</template>
        <template v-slot:js>{{ js }}</template>
      </CodeHighlighter2>
    </div>
    <!--end::Code-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter2 from "@/components/highlighters/CodeHighlighter2.vue";

export default defineComponent({
  name: "overview",
  components: {
    CodeHighlighter2,
  },
  setup() {
    const html = `<button type="button" class="btn btn-primary rotate" id="kt_button_1">
    90 deg <span class="svg-icon-2 rotate-90"><svg></svg></span>
</button>`;

    const js = `// Element to indecate
var button = document.querySelector("#kt_button_1");

// Handle button click event
button.addEventListener("click", function() {
    button.classList.toggle("active");
});`;

    const click = (event) => {
      const button = event.currentTarget;
      button.classList.toggle("active");
    };

    return {
      html,
      js,
      click,
    };
  },
});
</script>
