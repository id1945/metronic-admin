<template>
  <div class="card card-custom gutter-b card-stretch">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-dark">Market Leaders</h3>
      <div class="card-toolbar">
        <div class="dropdown dropdown-inline">
          <Dropdown2></Dropdown2>
        </div>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2">
      <template v-for="(item, i) in list">
        <!--begin::Item-->
        <div
          class="d-flex flex-wrap align-items-center"
          v-bind:key="i"
          v-bind:class="{ 'mb-9': lastElement(i) }"
        >
          <!--begin::Symbol-->
          <div class="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
            <div
              class="symbol-label"
              :style="`background-image:url(${item.text0})`"
            ></div>
          </div>
          <!--end::Symbol-->
          <!--begin::Title-->
          <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
            <a
              href="#"
              class="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
              >{{ item.text1 }}</a
            >
            <span class="text-muted font-weight-bold font-size-sm my-1">{{
              item.text2
            }}</span>
            <span class="text-muted font-weight-bold font-size-sm"
              >Created by:
              <span class="text-primary font-weight-bold">{{
                item.text3
              }}</span></span
            >
          </div>
          <!--end::Title-->
          <!--begin::Info-->
          <div class="d-flex align-items-center py-lg-0 py-2">
            <div class="d-flex flex-column text-right">
              <span class="text-dark-75 font-weight-bolder font-size-h4">{{
                item.text4
              }}</span>
              <span class="text-muted font-size-sm font-weight-bolder"
                >votes</span
              >
            </div>
          </div>
          <!--end::Info-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-2",
  data() {
    return {
      list: [
        {
          text0: "media/stock-600x400/img-17.jpg",
          text1: "Cup & Green",
          text2: "Local, clean & environmental",
          text3: "CoreAd",
          text4: "24,900"
        },
        {
          text0: "media/stock-600x400/img-10.jpg",
          text1: "Yellow Background",
          text2: "Strong abstract concept",
          text3: "KeenThemes",
          text4: "70,380"
        },
        {
          text0: "media/stock-600x400/img-17.jpg",
          text1: "Nike & Blue",
          text2: "Footwear overalls",
          text3: "Invision Inc.",
          text4: "7,200"
        },
        {
          text0: "media/stock-600x400/img-9.jpg",
          text1: "Desserts platter",
          text2: "Food trends & reviews",
          text3: "Figma Studio",
          text4: "36,450"
        },
        {
          text0: "media/stock-600x400/img-12.jpg",
          text1: "Cup & Green",
          text2: "Local, clean & environmental",
          text3: "CoreAd",
          text4: "23,900"
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
