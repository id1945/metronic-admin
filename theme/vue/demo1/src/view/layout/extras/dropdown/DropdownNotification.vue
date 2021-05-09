<template>
  <div>
    <div
      class="d-flex flex-column pt-12 bgi-size-cover bgi-no-repeat rounded-top"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <h4 class="d-flex flex-center rounded-top">
        <span class="text-white">User Notifications</span>
        <span
          class="btn btn-text btn-success btn-sm font-weight-bold btn-font-md ml-2"
        >
          23 new
        </span>
      </h4>

      <ul
        class="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success mt-3 px-8"
        role="tablist"
      >
        <li class="nav-item">
          <a
            v-on:click="setActiveTab"
            data-tab="0"
            class="nav-link active"
            data-toggle="tab"
            href="#"
            role="tab"
          >
            Alerts
          </a>
        </li>
        <li class="nav-item">
          <a
            v-on:click="setActiveTab"
            data-tab="1"
            class="nav-link"
            data-toggle="tab"
            href="#"
            role="tab"
          >
            Events
          </a>
        </li>
        <li class="nav-item">
          <a
            v-on:click="setActiveTab"
            data-tab="2"
            class="nav-link"
            data-toggle="tab"
            href="#"
            role="tab"
          >
            Logs
          </a>
        </li>
      </ul>
    </div>

    <b-tabs class="hide-tabs" v-model="tabIndex">
      <b-tab active class="p-8">
        <perfect-scrollbar
          class="scroll pr-7 mr-n7"
          style="max-height: 40vh; position: relative;"
        >
          <template v-for="(item, i) in list1">
            <!--begin::Item-->
            <div class="d-flex align-items-center mb-6" v-bind:key="i">
              <!--begin::Symbol-->
              <div
                class="symbol symbol-40 mr-5"
                v-bind:class="`symbol-light-${item.color}`"
              >
                <span class="symbol-label">
                  <span
                    class="svg-icon svg-icon-lg"
                    v-bind:class="`svg-icon-${item.color}`"
                  >
                    <!--begin::Svg Icon-->
                    <inline-svg :src="item.svg" />
                    <!--end::Svg Icon-->
                  </span>
                </span>
              </div>
              <!--end::Symbol-->
              <!--begin::Text-->
              <div class="d-flex flex-column font-weight-bold">
                <a
                  href="#"
                  class="text-dark text-hover-primary mb-1 font-size-lg"
                >
                  {{ item.title }}
                </a>
                <span class="text-muted">
                  {{ item.desc }}
                </span>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Item-->
          </template>
        </perfect-scrollbar>
      </b-tab>

      <b-tab>
        <perfect-scrollbar
          class="navi navi-hover scroll my-4"
          style="max-height: 40vh; position: relative;"
        >
          <template v-for="(item, i) in list2">
            <a href="#" class="navi-item" v-bind:key="i">
              <div class="navi-link">
                <div class="navi-icon mr-2">
                  <i v-bind:class="item.icon"></i>
                </div>
                <div class="navi-text">
                  <div class="font-weight-bold">
                    {{ item.title }}
                  </div>
                  <div class="text-muted">
                    {{ item.desc }}
                  </div>
                </div>
              </div>
            </a>
          </template>
        </perfect-scrollbar>
      </b-tab>

      <b-tab>
        <div class="d-flex flex-center text-center text-muted min-h-200px">
          All caught up!<br />No new notifications.
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<style lang="scss">
/* hide default vue-bootstrap tab links */
.hide-tabs > div:not(.tab-content) {
  display: none;
}
</style>

<script>
export default {
  name: "KTDropdownNotification",
  data() {
    return {
      tabIndex: 0,
      list1: [
        {
          title: "Briviba SaaS",
          desc: "PHP, SQLite, Artisan CLIмм",
          color: "primary",
          svg: process.env.BASE_URL + "media/svg/icons/Home/Library.svg"
        },
        {
          title: "Briviba SaaS",
          desc: "PHP, SQLite, Artisan CLIмм",
          color: "warning",
          svg: process.env.BASE_URL + "media/svg/icons/Communication/Write.svg"
        },
        {
          title: "Briviba SaaS",
          desc: "PHP, SQLite, Artisan CLIмм",
          color: "success",
          svg:
            process.env.BASE_URL +
            "media/svg/icons/Communication/Group-chat.svg"
        },
        {
          title: "Briviba SaaS",
          desc: "PHP, SQLite, Artisan CLIмм",
          color: "danger",
          svg: process.env.BASE_URL + "media/svg/icons/General/Attachment2.svg"
        },
        {
          title: "Briviba SaaS",
          desc: "PHP, SQLite, Artisan CLIмм",
          color: "info",
          svg:
            process.env.BASE_URL +
            "media/svg/icons/Communication/Shield-user.svg"
        },
        {
          title: "Briviba SaaS",
          desc: "PHP, SQLite, Artisan CLIмм",
          color: "info",
          svg:
            process.env.BASE_URL +
            "media/svg/icons/Communication/Mail-notification.svg"
        },
        {
          title: "Briviba SaaS",
          desc: "PHP, SQLite, Artisan CLIмм",
          color: "info",
          svg: process.env.BASE_URL + "media/svg/icons/Design/Bucket.svg"
        }
      ],
      list2: [
        {
          title: "New report has been received",
          desc: "23 hrs ago",
          icon: "flaticon2-line-chart text-success"
        },
        {
          title: "Finance report has been generated",
          desc: "25 hrs ago",
          icon: "flaticon2-paper-plane text-danger"
        },
        {
          title: "New order has been received",
          desc: "2 hrs ago",
          icon: "flaticon2-user flaticon2-line- text-success"
        },
        {
          title: "New customer is registered",
          desc: "3 hrs ago",
          icon: "flaticon2-pin text-primary"
        },
        {
          title: "Application has been approved",
          desc: "3 hrs ago",
          icon: "flaticon2-sms text-danger"
        },
        {
          title: "New file has been uploaded",
          desc: "5 hrs ago",
          icon: "flaticon2-pie-chart-3 text-warning"
        },
        {
          title: "New user feedback received",
          desc: "8 hrs ago",
          icon: "flaticon-pie-chart-1 text-info"
        },
        {
          title: "System reboot has been successfully completed",
          desc: "12 hrs ago",
          icon: "flaticon2-settings text-success"
        },
        {
          title: "New order has been placed",
          desc: "15 hrs ago",
          icon: "flaticon-safe-shield-protection text-primary"
        },
        {
          title: "Company meeting canceled",
          desc: "19 hrs ago",
          icon: "flaticon2-notification text-primary"
        },
        {
          title: "New report has been received",
          desc: "23 hrs ago",
          icon: "flaticon2-fax text-success"
        },
        {
          title: "Finance report has been generated",
          desc: "25 hrs ago",
          icon: "flaticon-download-1 text-danger"
        }
      ]
    };
  },
  methods: {
    setActiveTab(event) {
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(event.target.getAttribute("data-tab"));

      // set current active tab
      event.target.classList.add("active");
    }
  },
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "media/misc/bg-1.jpg";
    }
  }
};
</script>
