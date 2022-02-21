<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="overview">
      <a href="#example3"></a>
      Form-level Validation
    </h1>
    <!--end::Heading-->
    <!--begin::Block-->
    <div class="py-5">
      <p>
        Instead of providing validations for each field individually which can
        clutter your code, you can instead define the validation schema using
        the <b>useForm</b> function by passing a <b>validationSchema</b> option.
        Each field will automatically be associated with it and will be
        validated accordingly.
      </p>

      <p>
        A simple validation schema can be an object containing field names as
        keys and validation functions as the value for those keys.
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
          <template v-slot:html>{{ example3Html }}</template>
          <template v-slot:js>{{ example3Js }}</template>
        </CodeHighlighter2>
      </div>
    </div>
    <!--end::Block-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useField, useForm } from "vee-validate";
import {
  example3Html,
  example3Js,
} from "@/views/documentation/forms/vee-validate/codes";
import CodeHighlighter2 from "@/components/highlighters/CodeHighlighter2.vue";

export default defineComponent({
  name: "example-3",
  components: {
    CodeHighlighter2,
  },
  setup() {
    // Define a validation schema
    const simpleSchema = {
      email(value) {
        if (value && value.trim()) {
          return true;
        }

        return "Email is required";
      },
      password(value) {
        if (value && value.trim()) {
          return true;
        }

        return "Password is required";
      },
    };

    // Create a form context with the validation schema
    useForm({
      validationSchema: simpleSchema,
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
      example3Html,
      example3Js,
    };
  },
});
</script>
