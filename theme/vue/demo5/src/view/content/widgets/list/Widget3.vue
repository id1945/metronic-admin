<template>
  <div class="card card-custom gutter-b card-stretch card-shadowless bg-light">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          New Arrivals
        </span>
        <span class="text-muted mt-3 font-weight-bold font-size-sm">
          More than 400+ new members
        </span>
      </h3>
      <div class="card-toolbar">
        <ul class="nav nav-pills nav-pills-sm nav-dark-75">
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              data-toggle="tab"
              :class="{ active: this.show === 'month' }"
              href="#kt_tab_pane_1_1"
              @click="show = 'month'"
            >
              Month
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              data-toggle="tab"
              :class="{ active: this.show === 'week' }"
              href="#kt_tab_pane_1_2"
              @click="show = 'week'"
            >
              Week
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              data-toggle="tab"
              :class="{ active: this.show === 'day' }"
              href="#kt_tab_pane_1_3"
              @click="show = 'day'"
            >
              Day
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-3 pb-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table class="table table-borderless table-vertical-center">
          <thead>
            <tr>
              <th class="p-0" style="width: 50px"></th>
              <th class="p-0" style="min-width: 200px"></th>
              <th class="p-0" style="min-width: 100px"></th>
              <th class="p-0" style="min-width: 125px"></th>
              <th class="p-0" style="min-width: 110px"></th>
              <th class="p-0" style="min-width: 150px"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in dataToShow">
              <tr v-bind:key="i">
                <td class="pl-0 py-4">
                  <div class="symbol symbol-50 symbol-light mr-1">
                    <span class="symbol-label">
                      <img
                        :src="item.text0"
                        class="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                </td>
                <td class="pl-0">
                  <a
                    href="#"
                    class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    {{ item.text1 }}
                  </a>
                  <div>
                    <span class="font-weight-bolder">Email:</span>
                    <a
                      class="text-muted font-weight-bold text-hover-primary"
                      href="#"
                    >
                      {{ item.text2 }}
                    </a>
                  </div>
                </td>
                <td class="text-right">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.text3 }}
                  </span>
                  <span class="text-muted font-weight-bold">Paid</span>
                </td>
                <td class="text-right">
                  <span class="text-muted font-weight-500">
                    {{ item.text4 }}
                  </span>
                </td>
                <td class="text-right">
                  <span
                    class="label label-lg label-inline"
                    v-bind:class="`label-light-${item.text6}`"
                  >
                    {{ item.text5 }}
                  </span>
                </td>
                <td class="text-right pr-0">
                  <a href="#" class="btn btn-icon btn-light btn-sm">
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <!--begin::Svg Icon-->
                      <inline-svg
                        src="media/svg/icons/General/Settings-1.svg"
                      ></inline-svg>
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <a href="#" class="btn btn-icon btn-light btn-sm mx-3">
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <!--begin::Svg Icon-->
                      <inline-svg
                        src="media/svg/icons/Communication/Write.svg"
                      ></inline-svg>
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <a href="#" class="btn btn-icon btn-light btn-sm">
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <!--begin::Svg Icon-->
                      <inline-svg
                        src="media/svg/icons/General/Trash.svg"
                      ></inline-svg>
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--end::Table-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "widget-3",
  data() {
    return {
      show: "day",
      month: [
        {
          text0: "media/svg/misc/015-telegram.svg",
          text1: "Application Development",
          text2: "app@dev.com",
          text3: "$4,600,000",
          text4: "Python, MySQL",
          text5: "In Progress",
          text6: "warning"
        },
        {
          text0: "media/svg/misc/006-plurk.svg",
          text1: "Sant Outstanding",
          text2: "bprow@bnc.cc",
          text3: "$2,000,000",
          text4: "ReactJs, HTML",
          text5: "Approved",
          text6: "primary"
        },
        {
          text0: "media/svg/misc/005-bebo.svg",
          text1: "HR Management System",
          text2: "hr@demo.com",
          text3: "$57,000",
          text4: "AngularJS, C#",
          text5: "Rejected",
          text6: "danger"
        },
        {
          text0: "media/svg/misc/014-kickstarter.svg",
          text1: "KTR Mobile Application",
          text2: "ktr@demo.com",
          text3: "$45,200,000",
          text4: "ReactJS, Ruby",
          text5: "In Progress",
          text6: "warning"
        },
        {
          text0: "media/svg/misc/003-puzzle.svg",
          text1: "Payrol Application",
          text2: "company@dev.com",
          text3: "$560,000",
          text4: "Laravel, Metronic",
          text5: "Success",
          text6: "success"
        }
      ],
      week: [
        {
          text0: "media/svg/misc/015-telegram.svg",
          text1: "Application Development",
          text2: "app@dev.com",
          text3: "$4,600,000",
          text4: "Python, MySQL",
          text5: "In Progress",
          text6: "warning"
        },
        {
          text0: "media/svg/misc/005-bebo.svg",
          text1: "HR Management System",
          text2: "hr@demo.com",
          text3: "$57,000",
          text4: "AngularJS, C#",
          text5: "Rejected",
          text6: "danger"
        },
        {
          text0: "media/svg/misc/003-puzzle.svg",
          text1: "Payrol Application",
          text2: "company@dev.com",
          text3: "$560,000",
          text4: "Laravel, Metronic",
          text5: "Success",
          text6: "success"
        },
        {
          text0: "media/svg/misc/014-kickstarter.svg",
          text1: "KTR Mobile Application",
          text2: "ktr@demo.com",
          text3: "$45,200,000",
          text4: "ReactJS, Ruby",
          text5: "In Progress",
          text6: "warning"
        },
        {
          text0: "media/svg/misc/006-plurk.svg",
          text1: "Sant Outstanding",
          text2: "bprow@bnc.cc",
          text3: "$2,000,000",
          text4: "ReactJs, HTML",
          text5: "Approved",
          text6: "primary"
        }
      ],
      day: [
        {
          text0: "media/svg/misc/006-plurk.svg",
          text1: "Sant Outstanding",
          text2: "bprow@bnc.cc",
          text3: "$2,000,000",
          text4: "ReactJs, HTML",
          text5: "Approved",
          text6: "primary"
        },
        {
          text0: "media/svg/misc/015-telegram.svg",
          text1: "Application Development",
          text2: "app@dev.com",
          text3: "$4,600,000",
          text4: "Python, MySQL",
          text5: "In Progress",
          text6: "warning"
        },
        {
          text0: "media/svg/misc/003-puzzle.svg",
          text1: "Payrol Application",
          text2: "company@dev.com",
          text3: "$560,000",
          text4: "Laravel, Metronic",
          text5: "Success",
          text6: "success"
        },
        {
          text0: "media/svg/misc/005-bebo.svg",
          text1: "HR Management System",
          text2: "hr@demo.com",
          text3: "$57,000",
          text4: "AngularJS, C#",
          text5: "Rejected",
          text6: "danger"
        },
        {
          text0: "media/svg/misc/014-kickstarter.svg",
          text1: "KTR Mobile Application",
          text2: "ktr@demo.com",
          text3: "$45,200,000",
          text4: "ReactJS, Ruby",
          text5: "In Progress",
          text6: "warning"
        }
      ]
    };
  },
  components: {},
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
