<template>
  <div class="card card-custom gutter-b card-stretch">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >New Arrivals</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
          >More than 400+ new members</span
        >
      </h3>
      <div class="card-toolbar">
        <ul class="nav nav-pills nav-pills-sm nav-dark-75">
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              data-toggle="tab"
              :class="{ active: this.show === 'month' }"
              href="#kt_tab_pane_4_1"
              @click="show = 'month'"
              >Month</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              data-toggle="tab"
              :class="{ active: this.show === 'week' }"
              href="#kt_tab_pane_4_2"
              @click="show = 'week'"
              >Week</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              data-toggle="tab"
              :class="{ active: this.show === 'day' }"
              href="#kt_tab_pane_4_3"
              @click="show = 'day'"
              >Day</a
            >
          </li>
        </ul>
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
              <th class="p-0" style="min-width: 110px"></th>
              <th class="p-0" style="min-width: 50px"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in dataToShow">
              <tr v-bind:key="i">
                <td class="py-5 pl-0">
                  <div class="symbol symbol-50 symbol-light mr-2">
                    <span class="symbol-label">
                      <img
                        :src="item.svg"
                        class="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                </td>
                <td class="pl-0">
                  <a
                    href="#"
                    class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >{{ item.name }}</a
                  >
                  <span class="text-muted font-weight-bold d-block">{{
                    item.desc
                  }}</span>
                </td>
                <td class="text-right">
                  <span class="text-muted font-weight-500">{{
                    item.desc2
                  }}</span>
                </td>
                <td class="text-right">
                  <span
                    class="label label-lg label-inline"
                    v-bind:class="`label-light-${item.class}`"
                    >{{ item.status }}</span
                  >
                </td>
                <td class="text-right pr-0">
                  <a href="#" class="btn btn-icon btn-light btn-sm">
                    <span class="svg-icon svg-icon-md svg-icon-success">
                      <inline-svg
                        src="media/svg/icons/Navigation/Arrow-right.svg"
                      />
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--end::Tablet-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "widget-4",
  data() {
    return {
      show: "day",
      day: [
        {
          title: "New Users",
          desc: "Awesome Users",
          desc2: "Laravel,Metronic",
          status: "Success",
          svg: "media/svg/misc/003-puzzle.svg",
          class: "success"
        },
        {
          title: "Active Customers",
          desc: "Best Customers",
          desc2: "AngularJS, C#",
          status: "Rejected",
          svg: "media/svg/misc/005-bebo.svg",
          class: "danger"
        },
        {
          title: "Top Authors",
          desc: "Successful Fellas",
          desc2: "ReactJs, HTML",
          status: "Approved",
          svg: "media/svg/misc/006-plurk.svg",
          class: "primary"
        },
        {
          title: "Popular Authors",
          desc: "Most Successful",
          desc2: "Python, MySQL",
          status: "In Progress",
          svg: "media/svg/misc/015-telegram.svg",
          class: "warning"
        },
        {
          title: "Bestseller Theme",
          desc: "Amazing Templates",
          desc2: "ReactJS, Ruby",
          status: "In Progress",
          svg: "media/svg/misc/014-kickstarter.svg",
          class: "warning"
        }
      ],
      month: [
        {
          title: "Bestseller Theme",
          desc: "Amazing Templates",
          desc2: "ReactJS, Ruby",
          status: "In Progress",
          svg: "media/svg/misc/014-kickstarter.svg",
          class: "warning"
        },
        {
          title: "Popular Authors",
          desc: "Most Successful",
          desc2: "Python, MySQL",
          status: "In Progress",
          svg: "media/svg/misc/015-telegram.svg",
          class: "warning"
        },
        {
          title: "New Users",
          desc: "Awesome Users",
          desc2: "Laravel,Metronic",
          status: "Success",
          svg: "media/svg/misc/003-puzzle.svg",
          class: "success"
        },
        {
          title: "Active Customers",
          desc: "Best Customers",
          desc2: "AngularJS, C#",
          status: "Rejected",
          svg: "media/svg/misc/005-bebo.svg",
          class: "danger"
        },
        {
          title: "Top Authors",
          desc: "Successful Fellas",
          desc2: "ReactJs, HTML",
          status: "Approved",
          svg: "media/svg/misc/006-plurk.svg",
          class: "primary"
        }
      ],
      week: [
        {
          title: "Popular Authors",
          desc: "Most Successful",
          desc2: "Python, MySQL",
          status: "In Progress",
          svg: "media/svg/misc/015-telegram.svg",
          class: "warning"
        },
        {
          title: "New Users",
          desc: "Awesome Users",
          desc2: "Laravel,Metronic",
          status: "Success",
          svg: "media/svg/misc/003-puzzle.svg",
          class: "success"
        },
        {
          title: "Active Customers",
          desc: "Best Customers",
          desc2: "AngularJS, C#",
          status: "Rejected",
          svg: "media/svg/misc/005-bebo.svg",
          class: "danger"
        },
        {
          title: "Top Authors",
          desc: "Successful Fellas",
          desc2: "ReactJs, HTML",
          status: "Approved",
          svg: "media/svg/misc/006-plurk.svg",
          class: "primary"
        },
        {
          title: "Bestseller Theme",
          desc: "Amazing Templates",
          desc2: "ReactJS, Ruby",
          status: "In Progress",
          svg: "media/svg/misc/014-kickstarter.svg",
          class: "warning"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    dataToShow() {
      if (this.show === "month") return this.month;
      if (this.show === "week") return this.week;
      if (this.show === "day") return this.day;
      return this.day;
    }
  }
};
</script>
