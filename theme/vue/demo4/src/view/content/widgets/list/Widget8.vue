<template>
  <!--begin::List Widget 8-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-dark">Trends</h3>
      <div class="card-toolbar">
        <Dropdown2><i class="ki ki-bold-more-hor"></i></Dropdown2>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-0">
      <template v-for="(item, i) in list">
        <!--begin::Item-->
        <div class="mb-10" v-bind:key="i">
          <!--begin::Section-->
          <div class="d-flex align-items-center">
            <!--begin::Symbol-->
            <div class="symbol symbol-45 symbol-light mr-5">
              <span class="symbol-label">
                <inline-svg
                  :src="item.svg"
                  class="h-50 align-self-center"
                ></inline-svg>
              </span>
            </div>
            <!--end::Symbol-->
            <!--begin::Text-->
            <div class="d-flex flex-column flex-grow-1">
              <a
                href="#"
                class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                {{ item.title }}
              </a>
              <span class="text-muted font-weight-bold">
                {{ item.alt }}
              </span>
            </div>
            <!--end::Text-->
          </div>
          <!--end::Section-->
          <!--begin::Desc-->
          <p class="text-dark-50 m-0 pt-5 font-weight-normal">
            {{ item.desc }}
          </p>
          <!--end::Desc-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end: List Widget 8-->
</template>

<script>
import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-8",
  data() {
    return {
      list: [
        {
          title: "Top Authors",
          desc:
            "A brief write up about the top Authors that fits within this section",
          alt: "5 day ago",
          svg: "media/svg/misc/006-plurk.svg"
        },
        {
          title: "Popular Authors",
          desc:
            "A brief write up about the Popular Authors that fits within this section",
          alt: "5 day ago",
          svg: "media/svg/misc/015-telegram.svg"
        },
        {
          title: "New Users",
          desc:
            "A brief write up about the New Users that fits within this section",
          alt: "5 day ago",
          svg: "media/svg/misc/014-kickstarter.svg"
        }
      ]
    };
  },
  components: {
    Dropdown2
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  }
};
</script>
