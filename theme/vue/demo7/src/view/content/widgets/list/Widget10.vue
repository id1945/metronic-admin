<template>
  <!--begin::Base Table Widget 3-->
  <div class="card card-custom gutter-b card-stretch">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Files</span>
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
          >More than 400+ new members</span
        >
      </h3>
      <div class="card-toolbar">
        <Dropdown3></Dropdown3>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2 pb-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table class="table table-borderless table-vertical-center">
          <thead>
            <tr>
              <th class="p-0" style="width: 50px"></th>
              <th class="p-0" style="min-width: 150px"></th>
              <th class="p-0" style="min-width: 140px"></th>
              <th class="p-0" style="min-width: 100px"></th>
              <th class="p-0" style="min-width: 40px"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in list">
              <tr v-bind:key="i">
                <td class="pl-0 py-5">
                  <div
                    class="symbol symbol-45 mr-2"
                    v-bind:class="`symbol-light-${item.class}`"
                  >
                    <span class="symbol-label">
                      <span
                        class="svg-icon svg-icon-2x"
                        v-bind:class="`svg-icon-${item.class}`"
                      >
                        <inline-svg :src="item.svg" />
                      </span>
                    </span>
                  </div>
                </td>
                <td class="pl-0">
                  <a
                    href="#"
                    class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >{{ item.title }}</a
                  >
                </td>
                <td class="text-right">
                  <span class="text-muted font-weight-bold">{{
                    item.desc
                  }}</span>
                </td>
                <td class="text-right">
                  <span class="text-muted font-weight-bold">{{
                    item.users
                  }}</span>
                </td>
                <td class="text-right pr-0">
                  <span class="text-dark-75 font-weight-bolder font-size-lg">{{
                    item.size
                  }}</span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--end::table-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Base Table Widget 3-->
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
          desc: "ReactJs, HTML",
          users: "4600 Users",
          size: "5.4MB",
          svg: "media/svg/icons/Shopping/Cart3.svg",
          class: "success"
        },
        {
          title: "Popular Authors",
          desc: "Python, MySQL",
          users: "7200 Users",
          size: "2.8MB",
          svg: "media/svg/icons/Layout/Layout-4-blocks.svg",
          class: "danger"
        },
        {
          title: "New Users",
          desc: "Laravel, Metronic",
          users: "890 Users",
          size: "1.5MB",
          svg: "media/svg/icons/Communication/Group.svg",
          class: "info"
        },
        {
          title: "Active Customers",
          desc: "AngularJS, C#",
          users: "6370 Users",
          size: "890KB",
          svg: "media/svg/icons/Home/Library.svg",
          class: "warning"
        },
        {
          title: "Bestseller Theme",
          desc: "ReactJS, Ruby",
          users: "354 Users",
          size: "500KB",
          svg: "media/svg/icons/Shopping/Box2.svg",
          class: "primary"
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
