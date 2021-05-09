<template>
  <!--begin::Aside Secondary-->
  <div
    class="sidebar sidebar-left d-flex flex-row-auto flex-column"
    id="kt_sidebar"
    ref="kt_sidebar"
  >
    <!--begin::Aside Secondary Header-->
    <div
      class="sidebar-header flex-column-auto pt-5 pt-lg-19 pb-5 px-5 px-lg-10"
    >
      <!--begin::Toolbar-->
      <div class="d-flex">
        <!--begin::Desktop Search-->
        <div
          class="quick-search quick-search-inline flex-grow-1"
          id="kt_quick_search_inline"
        >
          <!--begin::Form-->
          <form method="get" class="quick-search-form">
            <div class="input-group rounded bg-light">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <span class="svg-icon svg-icon-lg">
                    <inline-svg src="media/svg/icons/General/Search.svg" />
                  </span>
                </span>
              </div>
              <input
                type="text"
                class="form-control h-40px"
                placeholder="Search..."
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i
                    class="quick-search-close ki ki-close icon-sm text-muted"
                  ></i>
                </span>
              </div>
            </div>
          </form>
          <!--end::Form-->
          <!--begin::Search Toggle-->
          <div
            id="kt_quick_search_toggle"
            data-toggle="dropdown"
            data-offset="0px,1px"
          ></div>
          <!--end::Search Toggle-->
          <!--begin::Dropdown-->
          <div
            class="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-anim-up"
          >
            <div
              class="quick-search-wrapper scroll"
              data-scroll="true"
              data-height="350"
              data-mobile-height="200"
            ></div>
          </div>
          <!--end::Dropdown-->
        </div>
        <!--end::Desktop Search-->
        <!--begin::Dropdown-->
        <div
          class="dropdown dropdown-inline"
          data-toggle="tooltip"
          title="Quick actions"
          data-placement="left"
        >
          <a
            href="#"
            class="btn btn-icon btn-light-info ml-3 h-40px w-40px flex-shrink-0"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="svg-icon svg-icon-lg">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg-->
              <inline-svg src="media/svg/icons/Media/Equalizer.svg" />
              <!--end::Svg Icon-->
            </span>
          </a>
          <div class="dropdown-menu dropdown-menu-md dropdown-menu-right p-0">
            <!--begin::Navigation-->
            <ul class="navi navi-hover py-5">
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-icon">
                    <i class="flaticon2-drop"></i>
                  </span>
                  <span class="navi-text">New Group</span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-icon">
                    <i class="flaticon2-list-3"></i>
                  </span>
                  <span class="navi-text">Contacts</span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-icon">
                    <i class="flaticon2-rocket-1"></i>
                  </span>
                  <span class="navi-text">Groups</span>
                  <span class="navi-link-badge">
                    <span
                      class="label label-light-primary label-inline font-weight-bold"
                      >new</span
                    >
                  </span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-icon">
                    <i class="flaticon2-bell-2"></i>
                  </span>
                  <span class="navi-text">Calls</span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-icon">
                    <i class="flaticon2-gear"></i>
                  </span>
                  <span class="navi-text">Settings</span>
                </a>
              </li>
              <li class="navi-separator my-3"></li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-icon">
                    <i class="flaticon2-magnifier-tool"></i>
                  </span>
                  <span class="navi-text">Help</span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-icon">
                    <i class="flaticon2-bell-2"></i>
                  </span>
                  <span class="navi-text">Privacy</span>
                  <span class="navi-link-badge">
                    <span
                      class="label label-light-danger label-rounded font-weight-bold"
                      >5</span
                    >
                  </span>
                </a>
              </li>
            </ul>
            <!--end::Navigation-->
          </div>
        </div>
        <!--end::Dropdown-->
        <!--begin::Dropdown-->
        <div
          class="dropdown dropdown-inline"
          data-toggle="tooltip"
          title="More links"
          data-placement="left"
        >
          <a
            href="#"
            class="btn btn-icon btn-light-danger ml-3 h-40px w-40px flex-shrink-0"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="svg-icon svg-icon-lg">
              <inline-svg src="media/svg/icons/Layout/Layout-vertical.svg" />
            </span>
          </a>
          <div class="dropdown-menu dropdown-menu-md dropdown-menu-right p-0">
            <!--begin::Navigation-->
            <ul class="navi navi-hover">
              <li class="navi-header font-weight-bold py-4">
                <span class="font-size-lg">Choose Label:</span>
                <i
                  class="flaticon2-information icon-md text-muted"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Click to learn more..."
                ></i>
              </li>
              <li class="navi-separator mb-3 opacity-70"></li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-text">
                    <span
                      class="label label-xl label-inline label-light-success"
                      >Customer</span
                    >
                  </span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-text">
                    <span class="label label-xl label-inline label-light-danger"
                      >Partner</span
                    >
                  </span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-text">
                    <span
                      class="label label-xl label-inline label-light-warning"
                      >Suplier</span
                    >
                  </span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-text">
                    <span
                      class="label label-xl label-inline label-light-primary"
                      >Member</span
                    >
                  </span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-text">
                    <span class="label label-xl label-inline label-light-dark"
                      >Staff</span
                    >
                  </span>
                </a>
              </li>
              <li class="navi-separator mt-3 opacity-70"></li>
              <li class="navi-footer py-4">
                <a class="btn btn-clean font-weight-bold btn-sm" href="#">
                  <i class="ki ki-plus icon-sm"></i>Add new</a
                >
              </li>
            </ul>
            <!--end::Navigation-->
          </div>
        </div>
        <!--end::Dropdown-->
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Aside Secondary Header-->
    <!--begin::Aside Secondary Content-->
    <div class="sidebar-content flex-column-fluid pb-10 pt-9 px-5 px-lg-10">
      <!--begin: Stats Widget 19-->
      <div class="card card-custom bg-light-success card-shadowless gutter-b">
        <!--begin::Body-->
        <div class="card-body my-3">
          <a
            href="#"
            class="card-title font-weight-bolder text-success text-hover-state-dark font-size-h6 mb-4 d-block"
            >SAP UI Progress</a
          >
          <div class="font-weight-bold text-muted font-size-sm">
            <span class="text-dark-75 font-size-h2 font-weight-bolder mr-2"
              >67%</span
            >Average
          </div>
          <div class="progress progress-xs mt-7 bg-success-o-60">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style="width: 67%;"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <!--end:: Body-->
      </div>
      <!--end: Stats:Widget 19-->
      <!--begin::Stats Widget 20-->
      <div class="card card-custom bg-light-warning card-shadowless gutter-b">
        <!--begin::Body-->
        <div class="card-body my-4">
          <a
            href="#"
            class="card-title font-weight-bolder text-warning font-size-h6 mb-4 text-hover-state-dark d-block"
            >Airplus Budget</a
          >
          <div class="font-weight-bold text-muted font-size-sm">
            <span class="text-dark-75 font-weight-bolder font-size-h2 mr-2"
              >87K%</span
            >23k to goal
          </div>
          <div class="progress progress-xs mt-7 bg-warning-o-60">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              style="width: 87%;"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <!--end::Body-->
      </div>
      <ListWidget4></ListWidget4>
      <ListWidget1></ListWidget1>
    </div>
    <!--end::Aside Secondary Content-->
  </div>
  <!--end::Aside Secondary-->
</template>

<style lang="scss">
/* hide default vue-bootstrap tab links */
.hide-tabs > div:not(.tab-content) {
  display: none;
}
</style>

<script>
import KTLayoutSidebar from "@/assets/js/layout/base/sidebar.js";
import ListWidget1 from "@/view/content/widgets/list/Widget1.vue";
import ListWidget4 from "@/view/content/widgets/list/Widget4.vue";

export default {
  name: "sidebar",
  components: {
    ListWidget1,
    ListWidget4
  },
  mounted() {
    this.$nextTick(() => {
      // Init sidebar
      KTLayoutSidebar.init(this.$refs["kt_sidebar"]);
    });
  }
};
</script>
