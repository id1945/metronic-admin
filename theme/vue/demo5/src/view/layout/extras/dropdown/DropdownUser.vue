<template>
  <div>
    <!--begin::Header-->
    <div class="d-flex align-items-center p-8 rounded-top">
      <!--begin::Symbol-->
      <div class="symbol symbol-md bg-light-primary mr-3 flex-shrink-0">
        <img :src="picture" alt="" />
      </div>
      <!--end::Symbol-->

      <!--begin::Text-->
      <div class="text-dark m-0 flex-grow-1 mr-3 font-size-h5">Sean Stone</div>
      <span
        class="label label-light-success label-lg font-weight-bold label-inline"
        >3 messages</span
      >
      <!--end::Text-->
    </div>
    <div class="separator separator-solid"></div>
    <!--end::Header-->

    <!--begin::Nav-->
    <div class="navi navi-spacer-x-0 pt-5">
      <!--begin::Item-->
      <a href="#" class="navi-item px-8">
        <div class="navi-link">
          <div class="navi-icon mr-2">
            <i class="flaticon2-calendar-3 text-success"></i>
          </div>
          <div class="navi-text">
            <div class="font-weight-bold">
              My Profile
            </div>
            <div class="text-muted">
              Account settings and more
              <span
                class="label label-light-danger label-inline font-weight-bold"
                >update</span
              >
            </div>
          </div>
        </div>
      </a>
      <!--end::Item-->

      <!--begin::Item-->
      <a href="#" class="navi-item px-8">
        <div class="navi-link">
          <div class="navi-icon mr-2">
            <i class="flaticon2-mail text-warning"></i>
          </div>
          <div class="navi-text">
            <div class="font-weight-bold">
              My Messages
            </div>
            <div class="text-muted">
              Inbox and tasks
            </div>
          </div>
        </div>
      </a>
      <!--end::Item-->

      <!--begin::Item-->
      <a href="#" class="navi-item px-8">
        <div class="navi-link">
          <div class="navi-icon mr-2">
            <i class="flaticon2-rocket-1 text-danger"></i>
          </div>
          <div class="navi-text">
            <div class="font-weight-bold">
              My Activities
            </div>
            <div class="text-muted">
              Logs and notifications
            </div>
          </div>
        </div>
      </a>
      <!--end::Item-->

      <!--begin::Item-->
      <a href="#" class="navi-item px-8">
        <div class="navi-link">
          <div class="navi-icon mr-2">
            <i class="flaticon2-hourglass text-primary"></i>
          </div>
          <div class="navi-text">
            <div class="font-weight-bold">
              My Tasks
            </div>
            <div class="text-muted">
              latest tasks and projects
            </div>
          </div>
        </div>
      </a>
      <!--end::Item-->

      <!--begin::Footer-->
      <div class="navi-separator mt-3"></div>
      <div class="navi-footer  px-8 py-5">
        <a
          href="#"
          class="btn btn-light-primary font-weight-bold"
          @click="onLogout"
          >Sign Out</a
        >
        <a href="#" class="btn btn-clean font-weight-bold">Upgrade Plan</a>
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Nav-->
  </div>
</template>

<script>
import { LOGOUT } from "@/core/services/store/auth.module";

export default {
  name: "KTDropdownUser",
  methods: {
    onLogout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    }
  },
  computed: {
    picture() {
      return process.env.BASE_URL + "media/users/300_21.jpg";
    }
  }
};
</script>
