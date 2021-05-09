<template>
  <div>
    <div
      class="subheader py-5 py-lg-10 gutter-b subheader-transparent subheader-background"
      id="kt_subheader"
      v-if="headerMenuEnabled"
      style="background-image: url('media/svg/patterns/taieri.svg');"
    >
      <div
        class="d-flex flex-column"
        v-bind:class="{ 'container-fluid': widthFluid, container: !widthFluid }"
      >
        <!--begin::Title-->
        <div class="d-flex align-items-sm-end flex-column flex-sm-row mb-5">
          <h2 class="text-white mr-5 mb-0">Search Job</h2>
          <span class="text-white opacity-60 font-weight-bold"
            >Job Management System</span
          >
        </div>
        <!--end::Title-->
        <!--begin::Search Bar-->
        <div class="d-flex align-items-md-center mb-2 flex-column flex-md-row">
          <div class="bg-white rounded p-4 d-flex flex-grow-1 flex-sm-grow-0">
            <!--begin::Form-->
            <form
              class="form d-flex align-items-md-center flex-sm-row flex-column flex-grow-1 flex-sm-grow-0"
            >
              <!--begin::Input-->
              <div class="d-flex align-items-center py-3 py-sm-0 px-sm-3">
                <span class="svg-icon svg-icon-lg">
                  <!--begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg-->
                  <inline-svg src="media/svg/icons/General/Search.svg" />
                  <!--end::Svg Icon-->
                </span>
                <input
                  type="text"
                  class="form-control border-0 font-weight-bold pl-2"
                  placeholder="Job Title"
                />
              </div>
              <!--end::Input-->
              <!--begin::Input-->
              <span
                class="bullet bullet-ver h-25px d-none d-sm-flex mr-2"
              ></span>
              <div class="d-flex align-items-center py-3 py-sm-0 px-sm-3">
                <span class="svg-icon svg-icon-lg">
                  <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
                  <inline-svg
                    src="media/svg/icons/Layout/Layout-4-blocks.svg"
                  />
                  <!--end::Svg Icon-->
                </span>
                <input
                  type="text"
                  class="form-control border-0 font-weight-bold pl-2"
                  placeholder="Category"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-target="kt_searchbar_7_category-options"
                  data-offset="0,10"
                  readonly="readonly"
                />
                <div
                  id="kt_searchbar_7_category-options"
                  class="dropdown-menu dropdown-menu-sm"
                >
                  <div class="dropdown-item cursor-pointer">HR Management</div>
                  <div class="dropdown-item cursor-pointer">Developers</div>
                  <div class="dropdown-item cursor-pointer">Creative</div>
                  <div class="dropdown-divider"></div>
                  <div class="dropdown-item cursor-pointer">Top Management</div>
                </div>
              </div>
              <!--end::Input-->
              <!--begin::Input-->
              <span
                class="bullet bullet-ver h-25px d-none d-sm-flex mr-2"
              ></span>
              <div class="d-flex align-items-center py-3 py-sm-0 px-sm-3">
                <span class="svg-icon svg-icon-lg">
                  <!--begin::Svg Icon | path:assets/media/svg/icons/Media/Rec.svg-->
                  <inline-svg src="media/svg/icons/Media/Rec.svg" />
                  <!--end::Svg Icon-->
                </span>
                <input
                  id="kt_subheader_7_location"
                  type="text"
                  class="form-control border-0 font-weight-bold pl-2"
                  placeholder="Location"
                  data-toggle="modal"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-target="#subheader7Modal"
                  readonly="readonly"
                />
              </div>
              <!--end::Input-->
              <button
                type="submit"
                class="btn btn-dark font-weight-bold btn-hover-light-primary mt-3 mt-sm-0 px-7"
              >
                Search
              </button>
            </form>
            <!--end::Form-->
          </div>
          <!--begin::Advanced Search-->
          <div class="mt-4 my-md-0 mx-md-10">
            <a href="#" class="text-white font-weight-bolder text-hover-primary"
              >Advanced Search</a
            >
          </div>
          <!--end::Advanced Search-->
        </div>
        <!--end::Search Bar-->
      </div>
    </div>
    <div v-if="!headerMenuEnabled" class="gutter-b"></div>
  </div>
</template>

<style>
.subheader-background {
  background-color: #663259;
  background-position: right bottom;
  background-size: auto 100%;
  background-repeat: no-repeat;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Subheader",
  computed: {
    ...mapGetters(["layoutConfig"]),

    /**
     * Check if the header menu is enabled
     * @returns {boolean}
     */
    headerMenuEnabled() {
      return !!this.layoutConfig("subheader.display");
    },

    /**
     * Check if subheader width is fluid
     */
    widthFluid() {
      return this.layoutConfig("subheader.width") === "fluid";
    },

    subheaderClasses() {
      const classes = [];
      const style = this.layoutConfig("subheader.style");
      if (style) {
        classes.push(style);

        if (style === "solid") {
          classes.push("bg-white");
        }

        if (this.layoutConfig("subheader.fixed")) {
          classes.push("border-top");
        }
      }
      return classes.join(" ");
    }
  }
};
</script>
