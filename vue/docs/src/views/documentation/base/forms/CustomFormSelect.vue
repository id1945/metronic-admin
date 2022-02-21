<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="custom-form-select">
      <a href="#custom-form-select"></a>
      Custom Form Select
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.form-select-solid</code> class with
      <code>.form-select</code> to set solid background style for a form select:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="form-label"
            >Select option</label
          >
          <select
            class="form-select form-select-solid"
            aria-label="Select example"
            id="exampleFormControlInput1"
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="mb-10">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Select options</label
          >
          <select
            class="form-select form-select-solid"
            aria-label="Select example"
            multiple="multiple"
            id="exampleFormControlTextarea1"
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <!--begin::Code-->
        <div class="py-0">
          <CodeHighlighter lang="html"
            >{{`
            <div class="mb-10">
              <label for="exampleFormControlInput1" class="form-label"
                >Select option</label
              >
              <select
                class="form-select form-select-solid"
                aria-label="Select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="mb-10">
              <label for="exampleFormControlTextarea1" class="form-label"
                >ESelect options</label
              >
              <select
                class="form-select form-select-solid"
                aria-label="Select example"
                multiple="multiple"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
    </div>
    <!--end::Block-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "custom-form-select",
  components: {
    CodeHighlighter,
  },
});
</script>
