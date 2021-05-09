<template>
  <!--begin::Profile 4-->
  <div class="d-flex flex-row">
    <!--begin::Aside-->
    <div
      class="flex-row-auto offcanvas-mobile w-300px w-xl-350px"
      id="kt_profile_aside"
    >
      <!--begin::Card-->
      <div class="card card-custom gutter-b">
        <!--begin::Body-->
        <div class="card-body pt-4">
          <!--begin::Toolbar-->
          <div class="d-flex justify-content-end">
            <Dropdown3></Dropdown3>
          </div>
          <!--end::Toolbar-->

          <!--begin::User-->
          <div class="d-flex align-items-center">
            <div
              class="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center"
            >
              <div
                class="symbol-label"
                :style="{
                  backgroundImage: `url(${currentUserPhoto})`
                }"
              ></div>
              <i class="symbol-badge bg-success"></i>
            </div>
            <div>
              <a
                href="#"
                class="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
              >
                James Jones
              </a>
              <div class="text-muted">
                Application Developer
              </div>
              <div class="mt-2">
                <a
                  href="#"
                  class="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
                  >Chat</a
                >
                <a
                  href="#"
                  class="btn btn-sm btn-success font-weight-bold py-2 px-3 px-xxl-5 my-1"
                  >Follow</a
                >
              </div>
            </div>
          </div>
          <!--end::User-->

          <!--begin::Contact-->
          <div class="pt-8 pb-6">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="font-weight-bold mr-2">Email:</span>
              <a href="#" class="text-muted text-hover-primary"
                >matt@fifestudios.com</a
              >
            </div>
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="font-weight-bold mr-2">Phone:</span>
              <span class="text-muted">44(76)34254578</span>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <span class="font-weight-bold mr-2">Location:</span>
              <span class="text-muted">Melbourne</span>
            </div>
          </div>
          <!--end::Contact-->

          <!--begin::Contact-->
          <div class="pb-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical.
          </div>
          <!--end::Contact-->

          <a
            href="#"
            class="btn btn-light-success font-weight-bold py-3 px-6 mb-2 text-center btn-block"
          >
            Profile Overview
          </a>
        </div>
        <!--end::Body-->
      </div>
      <!--end::Card-->
      <Widget13></Widget13>
    </div>
    <!--end::Aside-->

    <!--begin::Content-->
    <div class="flex-row-fluid ml-lg-8">
      <!--begin::Row-->
      <div class="row">
        <div class="col-lg-6">
          <Widget1></Widget1>
        </div>
        <div class="col-lg-6">
          <Widget14></Widget14>
        </div>
      </div>
      <!--end::Row-->
      <Widget2></Widget2>
    </div>
    <!--end::Content-->
  </div>
  <!--end::Profile 4-->
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Dropdown3 from "@/view/content/dropdown/Dropdown3";
import Widget1 from "@/view/pages/profile/profile-comp-4/Widget1";
import Widget2 from "@/view/pages/profile/profile-comp-4/Widget2";
import Widget13 from "@/view/pages/profile/profile-comp-4/Widget13";
import Widget14 from "@/view/pages/profile/profile-comp-4/Widget14";

export default {
  name: "Profile-4.vue",
  components: {
    Dropdown3,
    Widget1,
    Widget2,
    Widget13,
    Widget14
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Profile 2" }]);
  },
  computed: {
    ...mapGetters(["currentUserPhoto"])
  }
};
</script>
