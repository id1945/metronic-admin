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
      Click on the below buttons to check toggling indicator state with a simple
      Javascript code:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <button
          @click.prevent="click($event)"
          type="button"
          class="btn btn-primary me-10"
          id="kt_button_1"
        >
          <span class="indicator-label"> Submit </span>
          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>

        <button
          @click.prevent="click($event)"
          type="button"
          class="btn btn-success me-10"
          id="kt_button_2"
        >
          <span class="indicator-label"> Submit </span>
          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>

        <button
          @click.prevent="click($event)"
          type="button"
          class="btn btn-danger me-10"
          id="kt_button_3"
        >
          <span class="indicator-label"> Submit </span>
          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
      <CodeHighlighter2>
        <template v-slot:html
          >{{ `<button
            type="button"
            class="btn btn-primary me-10"
            id="kt_button_1"
          >
            <span class="indicator-label"> Submit </span>
            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span></button
          >` }}</template
        >
        <template v-slot:js>{{
          `// Element to indecate
var button = document.querySelector("#kt_button_1");

// Handle button click event
button.addEventListener("click", function() {
    // Activate indicator
    button.setAttribute("data-kt-indicator", "on");

    // Disable indicator after 3 seconds
    setTimeout(function() {
        button.removeAttribute("data-kt-indicator");
    }, 3000);
});`
        }}</template>
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
    const click = (event) => {
      const target = event.currentTarget;

      // Activate indicator
      target.setAttribute("data-kt-indicator", "on");

      // Disable indicator after 3 seconds
      setTimeout(function () {
        target.removeAttribute("data-kt-indicator");
      }, 3000);
    };

    return {
      click,
    };
  },
});
</script>
