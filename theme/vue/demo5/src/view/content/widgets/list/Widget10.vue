<template>
  <div class="card card-custom bg-light-warning gutter-b card-stretch">
    <!--begin::header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-warning">Todo</h3>
      <div class="card-toolbar">
        <Dropdown6></Dropdown6>
      </div>
    </div>
    <!--end::header-->
    <!--begin::Body-->
    <div class="card-body pt-0">
      <template v-for="(item, i) in list">
        <div class="d-flex align-items-center mb-6" v-bind:key="i">
          <!--begin::Checkbox-->
          <label
            class="checkbox checkbox-lg checkbox-warning checkbox-single flex-shrink-0 m-0 mr-4"
          >
            <input type="checkbox" value="1" />
            <span class="bg-gray-300"></span>
          </label>
          <!--end::Checkbox-->
          <!--begin::Text-->
          <div class="d-flex flex-column flex-grow-1 py-2">
            <a
              href="#"
              class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1"
              >{{ item.title }}</a
            >
            <a
              href="#"
              class="text-muted font-weight-bold text-hover-primary"
              >{{ item.desc }}</a
            >
          </div>
          <!--end::Text-->
          <Dropdown2><i class="ki ki-bold-more-hor"></i></Dropdown2>
        </div>
      </template>
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";
import Dropdown6 from "@/view/content/dropdown/Dropdown6.vue";

export default {
  name: "Widget2",
  components: {
    Dropdown2,
    Dropdown6
  },
  data() {
    return {
      list: [
        {
          title: "Create FireStone Logo",
          desc: "Due in 2 Days"
        },
        {
          title: "Stakeholder Meeting",
          desc: "Due in 3 Weeks"
        },
        {
          title: "Scoping & Estimations",
          desc: "Due in 8 Hours"
        },
        {
          title: "Scoping & Estimations",
          desc: "Due in 8 Hours"
        },
        {
          title: "Project Retro",
          desc: "Due in 1 Year"
        }
      ]
    };
  }
};
</script>
