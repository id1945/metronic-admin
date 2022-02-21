<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="overview">
      <a href="#example2"></a>
      Validating fields with yup
    </h1>
    <!--end::Heading-->
    <!--begin::Block-->
    <div class="py-5">
      <p>
        yup is a very popular, simple and powerful data validation library for
        JavaScript, you can use it in combination with vee-validate, You can use
        <b>yup</b> to define your validation rules for that field:
      </p>

      <div class="rounded border p-10">
        <input
          v-model="value"
          type="text"
          class="form-control form-control-solid"
          id="example1VeeValidate"
          placeholder="Interact with this field"
        />
        <span class="text-danger">{{ errorMessage }}</span>

        <CodeHighlighter2>
          <template v-slot:html>
            {{ example2Html }}
          </template>
          <template v-slot:js>{{ example2Js }}</template>
        </CodeHighlighter2>
      </div>
    </div>
    <!--end::Block-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useField } from "vee-validate";
import * as yup from "yup";
import CodeHighlighter2 from "@/components/highlighters/CodeHighlighter2.vue";
import {
  example2Html,
  example2Js,
} from "@/views/documentation/forms/vee-validate/codes";

export default defineComponent({
  name: "example-2",
  components: {
    CodeHighlighter2,
  },
  setup() {
    const { errorMessage, value } = useField(
      "fieldName",
      yup.string().required().min(8)
    );

    return {
      value,
      errorMessage,
      example2Html,
      example2Js,
    };
  },
});
</script>
