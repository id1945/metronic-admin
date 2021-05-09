<template>
  <div class="topbar-item">
    <div id="kt_quick_notifications_toggle">
      <div class="btn btn-icon btn-sm btn-primary font-weight-bolder p-0">
        3
      </div>
    </div>

    <!-- begin::Notifications Panel-->
    <div
      id="kt_quick_notifications"
      ref="kt_quick_notifications"
      class="offcanvas offcanvas-right p-10"
    >
      <div
        class="offcanvas-header d-flex align-items-center justify-content-between mb-10"
      >
        <h3 class="font-weight-bold m-0">
          Notifications
          <small class="text-muted font-size-sm ml-2">24 New</small>
        </h3>
        <a
          href="#"
          class="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_notifications_close"
        >
          <i class="ki ki-close icon-xs text-muted"></i>
        </a>
      </div>
      <!--begin::Content-->
      <div class="offcanvas-content pr-5 mr-n5">
        <div class="navi navi-icon-circle navi-spacer-x-0">
          <template v-for="(item, i) in list1">
            <!--begin::Item-->
            <a href="#" class="navi-item" v-bind:key="i">
              <div class="navi-link rounded">
                <div class="symbol symbol-50 mr-3">
                  <div class="symbol-label">
                    <i class="icon-lg" v-bind:class="item.icon" />
                  </div>
                </div>
                <div class="navi-text">
                  <div class="font-weight-bold font-size-lg">
                    {{ item.title }}
                  </div>
                  <div class="text-muted">
                    {{ item.desc }}
                  </div>
                </div>
              </div>
            </a>
            <!--end::Item-->
          </template>
        </div>
      </div>
      <!--end::Content-->
    </div>
    <!-- end::Notifications Panel-->
  </div>
</template>

<script>
import KTLayoutQuickNotifications from "@/assets/js/layout/extended/quick-notifications.js";

export default {
  name: "KTQuickPanel",
  data() {
    return {
      list1: [
        {
          title: "5 new user generated report",
          desc: "Reports based on sales",
          icon: "flaticon-bell text-success"
        },
        {
          title: "2 new items submited",
          desc: "by Grog John",
          icon: "flaticon2-box text-danger"
        },
        {
          title: "79 PSD files generated",
          desc: "Reports based on sales",
          icon: "flaticon-psd text-primary"
        },
        {
          title: "$2900 worth producucts sold",
          desc: "Total 234 items",
          icon: "flaticon2-supermarket text-warning"
        },
        {
          title: "4.5h-avarage response time",
          desc: "Fostest is Barry",
          icon: "flaticon-paper-plane-1 text-success"
        },
        {
          title: "3 Defence alerts",
          desc: "40% less alerts thar last week",
          icon: "flaticon-safe-shield-protection text-danger"
        },
        {
          title: "Avarage 4 blog posts per author",
          desc: "Most posted 12 time",
          icon: "flaticon-notepad text-primary"
        },
        {
          title: "16 authors joined last week",
          desc: "9 photodrapehrs, 7 designer",
          icon: "flaticon-users-1 text-warning"
        },
        {
          title: "2 new items have been submited",
          desc: "by Grog John",
          icon: "flaticon2-box text-info"
        },
        {
          title: "2.8 GB-total downloads size",
          desc: "Mostly PSD end  AL concepts",
          icon: "flaticon2-download text-success"
        },
        {
          title: "$2900 worth producucts sold",
          desc: "Total 234 items",
          icon: "flaticon2-supermarket text-danger"
        },
        {
          title: "7 new user generated report",
          desc: "Reports based on sales",
          icon: "flaticon-bell text-primary"
        },
        {
          title: "4.5h-avarage response time",
          desc: "Fostest is Barry",
          icon: "flaticon-paper-plane-1 text-success"
        }
      ]
    };
  },
  mounted() {
    // Init Quick Offcanvas Panel
    KTLayoutQuickNotifications.init(this.$refs["kt_quick_notifications"]);
  },
  methods: {}
};
</script>
