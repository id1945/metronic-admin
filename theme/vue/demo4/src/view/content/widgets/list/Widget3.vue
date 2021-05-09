<template>
  <!--begin::List Widget 16-->
  <div class="card card-custom gutter-b card-stretch">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-dark">Properties</h3>
      <div class="card-toolbar">
        <Dropdown2><i class="ki ki-bold-more-hor"></i></Dropdown2>
      </div>
    </div>
    <!--end:Header-->
    <!--begin::Body-->
    <div class="card-body pt-2">
      <template v-for="(item, i) in list">
        <div class="d-flex flex-wrap align-items-center pb-10" v-bind:key="i">
          <!--begin::Symbol-->
          <div class="symbol symbol-50 symbol-2by3 flex-shrink-0 mr-4">
            <div
              class="symbol-label"
              :style="`background-image:url(${item.img})`"
            ></div>
          </div>
          <!--end::Symbol-->
          <!--begin::Title-->
          <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 mr-2">
            <a
              href="#"
              class="text-dark font-weight-bold text-hover-primary mb-1 font-size-lg"
              >{{ item.title }}</a
            >
            <span class="text-muted font-weight-bold">{{ item.desc }}</span>
          </div>
          <!--end::Title-->
          <!--begin::Btn-->
          <a href="#" class="btn btn-icon btn-light btn-sm">
            <span class="svg-icon svg-icon-success">
              <span class="svg-icon svg-icon-md">
                <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg-->
                <inline-svg
                  src="media/svg/icons/Navigation/Arrow-right.svg"
                ></inline-svg>
                <!--end::Svg Icon-->
              </span>
            </span>
          </a>
          <!--end::Btn-->
        </div>
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 13-->
</template>

<script>
import Dropdown2 from "@/view/content/dropdown/Dropdown3.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-3",
  data() {
    return {
      list: [
        {
          title: "BlueSky Apartments",
          desc: "2 bed, 1 bath, 1 carpark",
          img: "media/stock-600x400/img-17.jpg"
        },
        {
          title: "Yellow Apartments",
          desc: "2 bed, 2 bath, 1 carpark",
          img: "media/stock-600x400/img-1.jpg"
        },
        {
          title: "421 Avenue",
          desc: "3 bed, 1 bath, 1 carpark",
          img: "media/stock-600x400/img-22.jpg"
        },
        {
          title: "Glassbricks",
          desc: "2 bed, 2 bath, 1 carpark",
          img: "media/stock-600x400/img-9.jpg"
        },
        {
          title: "RollerCoaster",
          desc: "4 bed, 3 bath, 1 carpark",
          img: "media/stock-600x400/img-11.jpg"
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
