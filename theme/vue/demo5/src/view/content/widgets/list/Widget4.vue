<template>
  <div class="card card-custom gutter-b card-stretch">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <div class="card-title">
        <div class="card-label">
          <div class="font-weight-bolder">Weekly Sales Stats</div>
          <div class="font-size-sm text-muted mt-2">890,344 Sales</div>
        </div>
      </div>
      <div class="card-toolbar">
        <Dropdown3></Dropdown3>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <!--begin::Items-->
      <div class="flex-grow-1">
        <template v-for="(item, i) in list">
          <div
            class="d-flex align-items-center justify-content-between mb-10"
            v-bind:key="i"
          >
            <div class="d-flex align-items-center mr-2">
              <div class="symbol symbol-50 symbol-light mr-3 flex-shrink-0">
                <div class="symbol-label">
                  <img :src="`${item.svg}`" alt="" class="h-50" />
                </div>
              </div>
              <div>
                <a
                  href="#"
                  class="font-size-h6 text-dark-75 text-hover-primary font-weight-bolder"
                  >{{ item.title }}</a
                >
                <div class="font-size-sm text-muted font-weight-bold mt-1">
                  {{ item.desc }}
                </div>
              </div>
            </div>
            <div
              class="label label-light label-inline font-weight-bold text-dark-50 py-4 px-3 font-size-base"
            >
              {{ item.profit }}
            </div>
          </div>
        </template>
      </div>
      <!--end::Items-->
      <!--begin::Action-->
      <div class="pt-10 pb-5 text-center">
        <a href="#" class="btn btn-primary font-weight-bold px-5 py-3"
          >Create Report</a
        >
      </div>
      <!--end::Action-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-4",
  data() {
    return {
      list: [
        {
          title: "Top Authors",
          desc: "Ricky Hunt, Sandra Trepp",
          svg: "media/svg/misc/006-plurk.svg",
          profit: "+105$"
        },
        {
          title: "Top Sales",
          desc: "PitStop Emails",
          svg: "media/svg/misc/015-telegram.svg",
          profit: "+60$"
        },
        {
          title: "Bestsellers",
          desc: "Pitstop Email Marketing",
          svg: "media/svg/misc/003-puzzle.svg",
          profit: "+75$"
        },
        {
          title: "Top Engagement",
          desc: "KT.com solutions",
          svg: "media/svg/misc/009-hot-air-balloon.svg",
          profit: "+75$"
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
