<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex flex-shrink-0">
    <!--begin::Invite user-->
    <div class="d-flex ms-3">
      <a
        href="#"
        class="
          btn btn-flex
          flex-center
          btn-bg-white btn-text-gray-500 btn-active-color-primary
          w-40px w-md-auto
          h-40px
          px-0 px-md-6
        "
        tooltip="New Member"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_invite_friends"
      >
        <span class="svg-icon svg-icon-2 svg-icon-primary me-0 me-md-2">
          <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
        </span>
        <span class="d-none d-md-inline">New Member</span>
      </a>
    </div>
    <!--end::Invite user-->

    <!--begin::Create app-->
    <div class="d-flex ms-3">
      <a
        href="#"
        class="
          btn btn-flex
          flex-center
          btn-bg-white btn-text-gray-500 btn-active-color-primary
          w-40px w-md-auto
          h-40px
          px-0 px-md-6
        "
        tooltip="New App"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_create_app"
        id="kt_toolbar_primary_button"
      >
        <span class="svg-icon svg-icon-2 svg-icon-primary me-0 me-md-2">
          <inline-svg src="media/icons/duotune/general/gen005.svg" />
        </span>
        <span class="d-none d-md-inline">New App</span>
      </a>
    </div>
    <!--end::Create app-->
    <div class="d-flex align-items-center ms-3">
      <!--begin::Menu wrapper-->
      <div
        class="btn btn-icon btn-primary w-40px h-40px pulse pulse-white"
        id="kt_drawer_chat_toggle"
      >
        <span class="svg-icon svg-icon-2">
          <inline-svg src="media/icons/duotune/communication/com012.svg" />
        </span>
        <span class="pulse-ring"></span>
      </div>
      <!--end::Menu wrapper-->
    </div>
    <!--end::Chat-->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "topbar",
  components: {},
});
</script>
