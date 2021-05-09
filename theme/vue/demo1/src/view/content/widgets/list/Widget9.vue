<template>
  <!--begin::List Widget 9-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
      <h3 class="card-title align-items-start flex-column">
        <span class="font-weight-bolder text-dark">
          My Activity
        </span>
        <span class="text-muted mt-3 font-weight-bold font-size-sm">
          890,344 Sales
        </span>
      </h3>
      <div class="card-toolbar">
        <Dropdown2><i class="ki ki-bold-more-hor"></i></Dropdown2>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-4">
      <div class="timeline timeline-6 mt-3">
        <template v-for="(item, i) in list">
          <!--begin::Item-->
          <div class="timeline-item align-items-start" v-bind:key="i">
            <!--begin::Label-->
            <div
              class="timeline-label font-weight-bolder text-dark-75 font-size-lg"
            >
              {{ item.time }}
            </div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="icon-xl" v-bind:class="item.badge"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Text-->
            <div
              class="font-weight-mormal font-size-lg timeline-content text-muted pl-3"
            >
              <span
                v-bind:class="{
                  'font-weight-bolder text-dark-75': item.bold,
                  'mr-4': item.images
                }"
                v-html="item.desc"
              ></span>
            </div>
            <!--end::Text-->
          </div>
          <!--end::Item-->
        </template>
      </div>
      <!--end: Items-->
    </div>
    <!--end: Card Body-->
  </div>
  <!--end: Card-->
  <!--end: List Widget 9-->
</template>

<script>
import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-9",
  data() {
    return {
      list: [
        {
          time: "08:42",
          desc: "Outlines of the recent activities that happened last weekend",
          badge: "fa fa-genderless text-success"
        },
        {
          time: "10:00",
          desc: "AEOL meeting",
          bold: true,
          badge: "fa fa-genderless text-danger"
        },
        {
          time: "14:37",
          desc: `Make deposit USD 700. to ESL`,
          badge: "fa fa-genderless text-info",
          bold: true
        },
        {
          time: "16:50",
          desc: "Indulging in poorly driving and keep structure keep great",
          badge: "fa fa-genderless text-danger"
        },
        {
          time: "17:30",
          desc: "New order placed #XF-2356.",
          badge: "fa fa-genderless text-success",
          bold: true
        },
        {
          time: "21:03",
          desc: `Outlines keep and you honest. Indulging in poorly driving`,
          badge: "fa fa-genderless text-warning"
        },
        {
          time: "21:07",
          desc: "Indulging in poorly driving and keep structure keep great",
          badge: "fa fa-genderless text-danger"
        },
        {
          time: "20:30",
          desc: "New order placed #XF-2356.",
          badge: "fa fa-genderless text-info",
          bold: true
        }
      ]
    };
  },
  components: {
    Dropdown2
  },
  methods: {
    lastElement(i) {
      if (i === this.list.length - 1) {
        return false;
      } else {
        return true;
      }
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  }
};
</script>
