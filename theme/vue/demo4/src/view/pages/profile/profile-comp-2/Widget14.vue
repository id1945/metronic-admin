<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-dark">Notifications</h3>
      <div class="card-toolbar">
        <Dropdown2><i class="ki ki-bold-more-hor"></i></Dropdown2>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-0">
      <template v-for="(item, i) in list">
        <div class="mb-6" v-bind:key="i">
          <!--begin::Content-->
          <div class="d-flex align-items-center flex-grow-1">
            <!--begin::Checkbox-->
            <label
              class="checkbox checkbox-lg checkbox-lg checkbox-single flex-shrink-0 mr-4"
            >
              <input type="checkbox" value="1" />
              <span></span>
            </label>
            <!--end::Checkbox-->
            <!--begin::Section-->
            <div
              class="d-flex flex-wrap align-items-center justify-content-between w-100"
            >
              <!--begin::Info-->
              <div class="d-flex flex-column align-items-cente py-2 w-75">
                <!--begin::Title-->
                <a
                  href="#"
                  class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1"
                  >{{ item.title }}</a
                >
                <!--end::Title-->
                <!--begin::Data-->
                <span class="text-muted font-weight-bold">{{ item.desc }}</span>
                <!--end::Data-->
              </div>
              <!--end::Info-->
              <!--begin::Label-->
              <span
                class="label label-lg label-inline font-weight-bold py-4"
                v-bind:class="`label-light-${item.class}`"
                >{{ item.status }}</span
              >
              <!--end::Label-->
            </div>
            <!--end::Section-->
          </div>
          <!--end::Content-->
        </div>
      </template>
      <!--begin::Item-->
      <!--end::Item-->
    </div>
    <!--end: Card Body-->
  </div>
</template>

<script>
import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";

export default {
  name: "Widget13",
  data() {
    return {
      list: [
        {
          title: "Daily Standup Meeting",
          desc: "Due in 2 Days",
          status: "Approved",
          class: "primary"
        },
        {
          title: "Group Town Hall Meet-up with showcase",
          desc: "Due in 2 Days",
          status: "In Progress",
          class: "warning"
        },
        {
          title: "Next sprint planning and estimations",
          desc: "Due in 2 Days",
          status: "Success",
          class: "success"
        },
        {
          title: "Sprint delivery and project deployment",
          desc: "Due in 2 Days",
          status: "Rejected",
          class: "danger"
        },
        {
          title: "Data analytics research showcase",
          desc: "Due in 2 Days",
          status: "In Progress",
          class: "warning"
        }
      ]
    };
  },
  components: {
    Dropdown2
  }
};
</script>
