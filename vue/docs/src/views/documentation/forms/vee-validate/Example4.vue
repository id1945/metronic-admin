<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="overview">
      <a href="#example4"></a>
      Validation schemas with yup
    </h1>
    <!--end::Heading-->
    <!--begin::Block-->
    <div class="py-5">
      <p>
        Fortunately there is already a very neat way to build validation schemas
        for your forms by using <b>yup</b>, it allows you create validation
        objects like this:
      </p>

      <CodeHighlighter lang="js">{{ example4Js1 }}</CodeHighlighter>

      <p>
        vee-validate has built-in support for yup schemas, You can pass your
        schemas to the <b>useForm</b> function using the same
        <b>validationSchema</b> option:
      </p>

      <div class="rounded border p-10">
        <div class="mb-10">
          <label for="emailField" class="form-label">Email address</label>
          <input
            type="email"
            name="email"
            v-model="email"
            class="form-control form-control-solid"
            id="emailField"
            placeholder="email"
          />
          <span class="text-danger">{{ emailError }}</span>
        </div>

        <label for="passwordField" class="form-label">Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="form-control form-control-solid"
          id="passwordField"
          placeholder="password"
        />
        <span class="text-danger">{{ passwordError }}</span>

        <CodeHighlighter2>
          <template v-slot:html>{{ example4Html }}</template>
          <template v-slot:js>{{ example4Js2 }}</template>
        </CodeHighlighter2>
      </div>
    </div>
    <!--end::Block-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as yup from "yup";
import { useForm, useField } from "vee-validate";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import CodeHighlighter2 from "@/components/highlighters/CodeHighlighter2.vue";
import {
  example4Js1,
  example4Html,
  example4Js2,
} from "@/views/documentation/forms/vee-validate/codes";

export default defineComponent({
  name: "example-4",
  components: {
    CodeHighlighter,
    CodeHighlighter2,
  },
  setup() {
    // Define a validation schema
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    });

    // Create a form context with the validation schema
    useForm({
      validationSchema: schema,
    });

    // No need to define rules for fields
    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } =
      useField("password");

    return {
      email,
      emailError,
      password,
      passwordError,
      example4Js1,
      example4Html,
      example4Js2,
    };
  },
});
</script>
