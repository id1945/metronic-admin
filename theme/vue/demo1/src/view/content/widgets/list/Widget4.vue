<template>
  <!--begin::List Widget 4-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-dark">Todo</h3>
      <div class="card-toolbar">
        <Dropdown4
          :btnClass="
            'btn btn-light btn-sm font-size-sm font-weight-bolder dropdown-toggle text-dark-75'
          "
          :btnText="'Create'"
        ></Dropdown4>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2">
      <template v-for="(item, i) in list">
        <!--begin::Item-->
        <div class="d-flex align-items-center mb-10" v-bind:key="i">
          <!--begin::Bullet-->
          <span
            class="bullet bullet-bar align-self-stretch"
            v-bind:class="`bg-${item.style}`"
          ></span>
          <!--end::Bullet-->
          <!--begin::Checkbox-->
          <label
            class="checkbox checkbox-lg checkbox-single flex-shrink-0 m-0 mx-4"
            v-bind:class="`checkbox-light-${item.style}`"
          >
            <input type="checkbox" name="" value="1" />
            <span></span>
          </label>
          <!--end::Checkbox-->
          <!--begin::Text-->
          <div class="d-flex flex-column flex-grow-1">
            <a
              class="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1"
            >
              {{ item.title }}
            </a>
            <span class="text-muted font-weight-bold">
              {{ item.desc }}
            </span>
          </div>
          <!--end::Text-->
          <!--begin::Dropdown-->
          <Dropdown2><i class="ki ki-bold-more-hor"></i></Dropdown2>
          <!--end::Dropdown-->
        </div>
        <!--end:Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end: List Widget 4-->
</template>

<script>
import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";
import Dropdown4 from "@/view/content/dropdown/Dropdown4.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-4",
  data() {
    return {
      list: [
        {
          title: "Create FireStone Logo",
          desc: "Due in 2 Days",
          svg: "media/svg/icons/Home/Library.svg",
          style: "success"
        },
        {
          title: "Stakeholder Meeting",
          desc: "Due in 3 Days",
          svg: "media/svg/icons/Communication/Write.svg",
          style: "primary"
        },
        {
          title: "Scoping & Estimations",
          desc: "Due in 5 Days",
          svg: "media/svg/icons/Communication/Group-chat.svg",
          style: "warning"
        },
        {
          title: "Sprint Showcase",
          desc: "Due in 1 Day",
          svg: "media/svg/icons/General/Attachment2.svg",
          style: "info"
        },
        {
          title: "Project Retro",
          desc: "Due in 12 Days",
          svg: "media/svg/icons/Communication/Shield-user.svg",
          style: "danger"
        }
      ]
    };
  },
  components: {
    Dropdown2,
    Dropdown4
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  }
};
</script>
