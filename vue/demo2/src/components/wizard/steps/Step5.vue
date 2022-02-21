<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-8 pb-lg-10">
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark">Your Are Done!</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
        If you need more info, please
        <router-link to="/sign-in" class="link-primary fw-bolder"
          >Sign In</router-link
        >.
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <!--begin::Body-->
    <div class="mb-0">
      <!--begin::Text-->
      <div class="fs-6 text-gray-600 mb-5">
        Writing headlines for blog posts is as much an art as it is a science
        and probably warrants its own post, but for all advise is with what
        works for your great & amazing audience.
      </div>
      <!--end::Text-->

      <!--begin::Alert-->
      <div
        class="
          notice
          d-flex
          bg-light-warning
          rounded
          border-warning border border-dashed
          p-6
        "
      >
        <!--begin::Icon-->
        <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
          <inline-svg src="media/icons/duotune/general/gen044.svg" />
        </span>
        <!--end::Icon-->
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack flex-grow-1">
          <!--begin::Content-->
          <div class="fw-bold">
            <h4 class="text-gray-800 fw-bolder">We need your attention!</h4>
            <div class="fs-6 text-gray-600">
              To start using great tools, please, please
              <a href="#" class="fw-bolder">Create Team Platform</a>
            </div>
          </div>
          <!--end::Content-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Alert-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "step-5",
  components: {},
});
</script>
