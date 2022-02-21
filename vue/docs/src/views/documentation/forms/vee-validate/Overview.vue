<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="overview">
      <a href="#overview"></a>
      Overview
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      <p>
        Form validation is a difficult subject in frontend, not only you have to
        deal with ensuring correct values are submitted, you also should provide
        a pleasant UX for your users.
      </p>

      <p>
        Doing form validation by hand is a lot of work and you won't probably
        cover all your needs if you decide to build your own.
      </p>

      <p>
        <b
          >The time you spend working on a custom form validation solution is
          better spent building your application logic.</b
        >
      </p>

      <p>
        Most validation libraries will save you a lot of time, but vee-validate
        tackles the major pain points of form validation and addresses them in a
        very flexible way:
      </p>

      <ul>
        <li>Tracking form state</li>
        <li>UI and UX</li>
        <li>Synchronous and Asynchronous Validation</li>
        <li>Handling submissions</li>
      </ul>

      By only handling the complex stuff, vee-validate gets out of your way of
      building your awesome forms.
    </div>
    <!--end::Block-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "overview",
  components: {},
});
</script>
