<template>
  <!--begin::Section-->
  <div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="custom-form-control">
      <a href="#custom-form-control"></a>
      Custom Form Control
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.form-control-solid</code> class with
      <code>.form-control</code> to set solid background style for a form
      control:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control form-control-solid"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div class="mb-10">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Example textarea</label
          >
          <textarea
            class="form-control form-control-solid"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <!--begin::Code-->
        <div class="py-0">
          <CodeHighlighter lang="html"
            >{{`
            <div class="mb-10">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control form-control-solid"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>

            <div class="mb-10">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Example textarea</label
              >
              <textarea
                class="form-control form-control-solid"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
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
  name: "custom-form-control",
  components: {
    CodeHighlighter,
  },
});
</script>
