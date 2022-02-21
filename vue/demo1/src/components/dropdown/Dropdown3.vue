<template>
  <!--begin::Menu-->
  <div
    class="
      menu
      menu-sub
      menu-sub-dropdown
      menu-column
      menu-rounded
      menu-gray-800
      menu-state-bg-light-primary
      fw-bold
      py-4
      w-250px
      fs-6
    "
    data-kt-menu="true"
  >
    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <div class="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">
        Payments
      </div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a href="#" class="menu-link px-5"> Create invoice </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a href="#" class="menu-link flex-stack px-5">
        Create payments

        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Specify a target name for future usage and reference"
        ></i>
      </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div
      class="menu-item px-5"
      data-kt-menu-trigger="hover"
      data-kt-menu-placement="left-start"
    >
      <a href="#" class="menu-link px-5">
        <span class="menu-title">Subscription</span>
        <span class="menu-arrow"></span>
      </a>

      <!--begin::Menu sub-->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a href="#" class="menu-link px-5"> Apps </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a href="#" class="menu-link px-5"> Billing </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a href="#" class="menu-link px-5"> Statements </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu separator-->
        <div class="separator my-2"></div>
        <!--end::Menu separator-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <div class="menu-content px-3">
            <label
              class="form-check form-switch form-check-custom form-check-solid"
            >
              <input
                class="form-check-input w-30px h-20px"
                type="checkbox"
                value=""
                name="notifications"
                checked
                id="kt_user_menu_notifications"
              />
              <span
                class="form-check-label text-muted fs-6"
                for="kt_user_menu_notifications"
              >
                Notifications
              </span>
            </label>
          </div>
        </div>
        <!--end::Menu item-->
      </div>
      <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-3"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <div class="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">
        Account
      </div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a href="#" class="menu-link px-5"> Reports </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5 my-1">
      <a href="#" class="menu-link px-5"> Account Settings </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a href="#" class="menu-link text-danger px-5"> Delete customer </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "dropdown-3",
  components: {},
});
</script>
