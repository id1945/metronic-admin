<template>
  <div>
    <a
      href="#"
      class="btn btn-icon btn-clean btn-lg mb-1"
      id="kt_quick_actions_toggle"
      data-toggle="tooltip"
      data-placement="right"
      data-container="body"
      data-boundary="window"
      title=""
      data-original-title="Quick Actions"
    >
      <span class="svg-icon svg-icon-xl">
        <!--begin::Svg Icon-->
        <inline-svg src="media/svg/icons/Media/Equalizer.svg" />
        <!--end::Svg Icon-->
      </span>
    </a>

    <!-- begin::Quick Panel -->
    <div
      id="kt_quick_actions"
      ref="kt_quick_actions"
      class="offcanvas offcanvas-left p-10"
    >
      <!--begin::Header-->
      <div
        class="offcanvas-header d-flex align-items-center justify-content-between pb-10"
        kt-hidden-height="56"
        style=""
      >
        <h3 class="font-weight-bold m-0">
          Quick Actions
          <small class="text-muted font-size-sm ml-2">
            finance &amp; reports
          </small>
        </h3>
        <a
          href="#"
          class="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_actions_close"
        >
          <i class="ki ki-close icon-xs text-muted"></i>
        </a>
      </div>
      <!--end::Header-->
      <!--begin::Content-->
      <div
        class="offcanvas-content pr-5 mr-n5 scroll ps"
        style="height: 804px; overflow: hidden;"
      >
        <div class="row gutter-b">
          <!--begin::Item-->
          <div class="col-6">
            <a
              href="#"
              class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
            >
              <span class="svg-icon svg-icon-3x svg-icon-primary m-0">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/Shopping/Euro.svg" />
                <!--end::Svg Icon-->
              </span>
              <span class="d-block font-weight-bold font-size-h6 mt-2"
                >Accounting</span
              >
            </a>
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="col-6">
            <a
              href="#"
              class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
            >
              <span class="svg-icon svg-icon-3x svg-icon-primary m-0">
                <!--begin::Svg Icon-->
                <inline-svg
                  src="media/svg/icons/Communication/Mail-attachment.svg"
                />
                <!--end::Svg Icon-->
              </span>
              <span class="d-block font-weight-bold font-size-h6 mt-2">
                Members
              </span>
            </a>
          </div>
          <!--end::Item-->
        </div>
        <div class="row gutter-b">
          <!--begin::Item-->
          <div class="col-6">
            <a
              href="#"
              class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
            >
              <span class="svg-icon svg-icon-3x svg-icon-primary m-0">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/Shopping/Box2.svg" />
                <!--end::Svg Icon-->
              </span>
              <span class="d-block font-weight-bold font-size-h6 mt-2">
                Projects
              </span>
            </a>
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="col-6">
            <a
              href="#"
              class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
            >
              <span class="svg-icon svg-icon-3x svg-icon-primary m-0">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/Communication/Group.svg" />
                <!--end::Svg Icon-->
              </span>
              <span class="d-block font-weight-bold font-size-h6 mt-2">
                Customers
              </span>
            </a>
          </div>
          <!--end::Item-->
        </div>
        <div class="row gutter-b">
          <!--begin::Item-->
          <div class="col-6">
            <a
              href="#"
              class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
            >
              <span class="svg-icon svg-icon-3x svg-icon-primary m-0">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/Shopping/Chart-bar1.svg" />
                <!--end::Svg Icon-->
              </span>
              <span class="d-block font-weight-bold font-size-h6 mt-2">
                Email
              </span>
            </a>
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="col-6">
            <a
              href="#"
              class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
            >
              <span class="svg-icon svg-icon-3x svg-icon-primary m-0">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/Design/Color-profile.svg" />
                <!--end::Svg Icon-->
              </span>
              <span class="d-block font-weight-bold font-size-h6 mt-2">
                Settings
              </span>
            </a>
          </div>
          <!--end::Item-->
        </div>
        <div class="row">
          <!--begin::Item-->
          <div class="col-6">
            <a
              href="#"
              class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
            >
              <span class="svg-icon svg-icon-3x svg-icon-primary m-0">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/Shopping/Euro.svg" />
                <!--end::Svg Icon-->
              </span>
              <span class="d-block font-weight-bold font-size-h6 mt-2">
                Orders
              </span>
            </a>
          </div>
          <!--end::Item-->
        </div>
        <!--end::Content-->
      </div>
      <!-- end::Quick Panel -->
    </div>
    <!-- end::Quick Panel -->
  </div>
</template>

<script>
import KTLayoutQuickActions from "@/assets/js/layout/extended/quick-actions.js";

export default {
  name: "KTQuickActions",
  data() {
    return {};
  },
  mounted() {
    // Init Quick Actions Offcanvas Panel
    KTLayoutQuickActions.init(this.$refs["kt_quick_actions"]);
  }
};
</script>
