<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-dark">Tasks Overview</h3>
      <div class="card-toolbar">
        <Dropdown3></Dropdown3>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2">
      <template v-for="(item, i) in list">
        <!--begin::Item-->
        <div class="d-flex align-items-center mb-10" v-bind:key="i">
          <!--begin::Symbol-->
          <div class="symbol symbol-40 symbol-light-primary mr-5">
            <span class="symbol-label">
              <span class="svg-icon svg-icon-lg" v-bind:class="item.style">
                <!--begin::Svg Icon-->
                <inline-svg :src="item.svg"></inline-svg>
                <!--end::Svg Icon-->
              </span>
            </span>
          </div>
          <!--end::Symbol-->
          <!--begin::Text-->
          <div class="d-flex flex-column font-weight-bold">
            <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">
              {{ item.title }}
            </a>
            <span class="text-muted">
              {{ item.desc }}
            </span>
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-1",
  data() {
    return {
      list: [
        {
          title: "Briefing",
          desc: "Project Manager",
          svg: "media/svg/icons/Home/Library.svg",
          style: "svg-icon-primary"
        },
        {
          title: "Design",
          desc: "Art Director",
          svg: "media/svg/icons/Communication/Write.svg",
          style: "svg-icon-warning"
        },
        {
          title: "Logics",
          desc: "Lead Developer",
          svg: "media/svg/icons/Communication/Group-chat.svg",
          style: "svg-icon-success"
        },
        {
          title: "Development",
          desc: "DevOps",
          svg: "media/svg/icons/General/Attachment2.svg",
          style: "svg-icon-danger"
        },
        {
          title: "Testing",
          desc: "QA Managers",
          svg: "media/svg/icons/Communication/Shield-user.svg",
          style: "svg-icon-info"
        }
      ]
    };
  },
  components: {
    Dropdown3
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  }
};
</script>
