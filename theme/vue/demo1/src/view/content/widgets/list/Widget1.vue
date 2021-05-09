<template>
  <!--begin::List Widget 1-->
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
          <div
            class="symbol symbol-40 mr-5"
            v-bind:class="`symbol-light-${item.style}`"
          >
            <span class="symbol-label">
              <span
                class="svg-icon svg-icon-lg"
                v-bind:class="`svg-icon-${item.style}`"
              >
                <!--begin::Svg Icon-->
                <inline-svg :src="item.svg"></inline-svg>
                <!--end::Svg Icon-->
              </span>
            </span>
          </div>
          <!--end::Symbol-->
          <!--begin::Text-->
          <div class="d-flex flex-column font-weight-bold">
            <a class="text-dark text-hover-primary mb-1 font-size-lg">
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
  <!--end: List Widget 1-->
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
          style: "primary"
        },
        {
          title: "Design",
          desc: "Art Director",
          svg: "media/svg/icons/Communication/Write.svg",
          style: "warning"
        },
        {
          title: "Logics",
          desc: "Lead Developer",
          svg: "media/svg/icons/Communication/Group-chat.svg",
          style: "success"
        },
        {
          title: "Development",
          desc: "DevOps",
          svg: "media/svg/icons/General/Attachment2.svg",
          style: "danger"
        },
        {
          title: "Testing",
          desc: "QA Managers",
          svg: "media/svg/icons/Communication/Shield-user.svg",
          style: "info"
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
