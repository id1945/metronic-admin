<template>
  <div class="col-12 col-sm-12 col-xl">
    <!--begin::Card-->
    <div class="card h-100">
      <!--begin::Card body-->
      <div
        class="
          card-body
          d-flex
          justify-content-center
          text-center
          flex-column
          p-8
        "
      >
        <!--begin::Name-->
        <a href="#" class="text-gray-800 text-hover-primary d-flex flex-column">
          <!--begin::Image-->
          <div class="symbol symbol-75px mb-6">
            <img src="media/svg/files/folder-document.svg" alt="" />
          </div>
          <!--end::Image-->

          <!--begin::Title-->
          <div class="fs-5 fw-bolder mb-2">Finance</div>
          <!--end::Title-->
        </a>
        <!--end::Name-->

        <!--begin::Description-->
        <div class="fs-7 fw-bold text-gray-400 mt-auto">7 files</div>
        <!--end::Description-->
      </div>
      <!--end::Card body-->
    </div>
    <!--end::Card-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "file",
  props: {
    folderName: String,

    files: String,
  },
  components: {},
});
</script>
