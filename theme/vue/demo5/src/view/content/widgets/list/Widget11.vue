<template>
  <div class="card card-custom card-stretch gutter-b bg-light-info">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-dark">Authors</h3>
      <div class="card-toolbar">
        <Dropdown4
          :btnClass="
            'btn btn-light-primary btn-sm font-weight-bolder dropdown-toggle'
          "
          :btnText="'August'"
        ></Dropdown4>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2">
      <template v-for="(item, i) in list">
        <div class="d-flex align-items-center mb-10" v-bind:key="i">
          <!--begin::Symbol-->
          <div class="symbol symbol-40 symbol-light-success mr-5">
            <span class="symbol-label">
              <img :src="item.svg" class="h-75 align-self-end" alt="" />
            </span>
          </div>
          <!--end::Symbol-->
          <!--begin::Text-->
          <div class="d-flex flex-column flex-grow-1 font-weight-bold">
            <a
              href="#"
              class="text-dark text-hover-primary mb-1 font-size-lg"
              >{{ item.name }}</a
            >
            <span class="text-muted">{{ item.desc }}</span>
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
import Dropdown4 from "@/view/content/dropdown/Dropdown4.vue";
import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";

export default {
  name: "widget-11",
  components: {
    Dropdown4,
    Dropdown2
  },
  data() {
    return {
      list: [
        {
          name: "Ricky Hunt",
          desc: "PHP, SQLite, Artisan CLI",
          svg: "media/svg/avatars/009-boy-4.svg"
        },
        {
          name: "Anne Clarc",
          desc: "PHP, SQLite, Artisan CLI",
          svg: "media/svg/avatars/006-girl-3.svg"
        },
        {
          name: "Kristaps Zumman",
          desc: "PHP, SQLite, Artisan CLI",
          svg: "media/svg/avatars/011-boy-5.svg"
        },
        {
          name: "Randy Trent",
          desc: "PHP, SQLite, Artisan CLI",
          svg: "media/svg/avatars/015-boy-6.svg"
        },
        {
          name: "Carles Puyol",
          desc: "Project Manager",
          svg: "media/svg/avatars/016-boy-7.svg"
        }
      ]
    };
  }
};
</script>
