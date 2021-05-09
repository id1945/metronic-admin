<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-dark">Authors</h3>
      <div class="card-toolbar">
        <Dropdown4 :btnClass="'btn-light-primary'"></Dropdown4>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2">
      <template v-for="(item, i) in list">
        <!--begin::Item-->
        <div class="d-flex align-items-center mb-10" v-bind:key="i">
          <!--begin::Symbol-->
          <div class="symbol symbol-40 symbol-light-success mr-5">
            <span class="symbol-label">
              <inline-svg
                :src="item.svg"
                class="h-75 align-self-end"
              ></inline-svg>
            </span>
          </div>
          <!--end::Symbol-->
          <!--begin::Text-->
          <div class="d-flex flex-column flex-grow-1 font-weight-bold">
            <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">
              {{ item.title }}
            </a>
            <span class="text-muted">
              {{ item.desc }}
            </span>
          </div>
          <!--end::Text-->
          <!--begin::Dropdown-->
          <Dropdown2><i class="ki ki-bold-more-hor"></i></Dropdown2>
          <!--end::Dropdown-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";
import Dropdown4 from "@/view/content/dropdown/Dropdown4.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-3",
  data() {
    return {
      list: [
        {
          title: "Ricky Hunt",
          desc: "PHP, SQLite, Artisan CLI",
          svg: "media/svg/avatars/009-boy-4.svg",
          style: "svg-icon-primary"
        },
        {
          title: "Anne Clarc",
          desc: "PHP, SQLite, Artisan CLI",
          svg: "media/svg/avatars/006-girl-3.svg",
          style: "svg-icon-warning"
        },
        {
          title: "Kristaps Zumman",
          desc: "PHP, SQLite, Artisan CLI",
          svg: "media/svg/avatars/011-boy-5.svg",
          style: "svg-icon-success"
        },
        {
          title: "Ricky Hunt",
          desc: "PHP, SQLite, Artisan CLI",
          svg: "media/svg/avatars/015-boy-6.svg",
          style: "svg-icon-danger"
        },
        {
          title: "Carles Puyol",
          desc: "PHP, SQLite, Artisan CLI",
          svg: "media/svg/avatars/016-boy-7.svg",
          style: "svg-icon-info"
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
