<template>
  <div class="d-flex flex-column flex-root">
    <!-- begin:: Header Mobile -->
    <KTHeaderMobile></KTHeaderMobile>
    <!-- end:: Header Mobile -->

    <Loader v-if="loaderEnabled" v-bind:logo="loaderLogo"></Loader>

    <div class="d-flex flex-row flex-column-fluid page">
      <!--begin::Aside-->
      <KTAside></KTAside>
      <!--end::Aside-->

      <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
        <!--begin::Header-->
        <KTHeader></KTHeader>
        <!--end::Header-->
        <!--begin::Content-->
        <div
          class="content  d-flex flex-column flex-column-fluid"
          id="kt_content"
        >
          <!--begin::Subheader-->
          <KTSubheader></KTSubheader>
          <!--end::Subheader-->

          <div class="d-flex flex-column-fluid">
            <div
              :class="{
                'container-fluid': contentFluid,
                container: !contentFluid
              }"
            >
              <transition name="fade-in-up">
                <router-view />
              </transition>
            </div>
          </div>
        </div>
        <!--end::Content-->
        <!--begin::Footer-->
        <KTFooter></KTFooter>
        <!--end::Footer-->
        <KTStickyToolbar v-if="toolbarDisplay"></KTStickyToolbar>
        <KTScrollTop></KTScrollTop>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HtmlClass from "@/core/services/htmlclass.service";
import KTAside from "@/view/layout/aside/Aside.vue";
import KTHeaderMobile from "@/view/layout/header/HeaderMobile";
import Loader from "@/view/layout/content/Loader";
import KTHeader from "@/view/layout/header/Header";
import KTSubheader from "@/view/layout/subheader/Subheader";
import KTFooter from "@/view/layout/footer/Footer";
import KTStickyToolbar from "@/view/layout/extras/StickyToolbar.vue";
import KTScrollTop from "@/view/layout/extras/ScrollTop";
import {
  ADD_BODY_CLASSNAME,
  REMOVE_BODY_CLASSNAME
} from "@/core/services/store/htmlclass.module.js";

export default {
  name: "Layout",
  components: {
    KTAside,
    KTHeaderMobile,
    Loader,
    KTHeader,
    KTFooter,
    KTSubheader,
    KTStickyToolbar,
    KTScrollTop
  },
  beforeMount() {
    // show page loading
    this.$store.dispatch(ADD_BODY_CLASSNAME, "page-loading");

    // initialize html element classes
    HtmlClass.init(this.layoutConfig());
  },
  mounted() {
    // check if current user is authenticated
    if (!this.isAuthenticated) {
      this.$router.push({ name: "login" });
    }

    // Simulate the delay page loading
    setTimeout(() => {
      // Remove page loader after some time
      this.$store.dispatch(REMOVE_BODY_CLASSNAME, "page-loading");
    }, 2000);
  },
  computed: {
    ...mapGetters([
      "isAuthenticated",
      "breadcrumbs",
      "pageTitle",
      "layoutConfig"
    ]),

    /**
     * Check if the page loader is enabled
     * @returns {boolean}
     */
    loaderEnabled() {
      return !/false/.test(this.layoutConfig("loader.type"));
    },

    /**
     * Check if container width is fluid
     * @returns {boolean}
     */
    contentFluid() {
      return this.layoutConfig("content.width") === "fluid";
    },

    /**
     * Page loader logo image using require() function
     * @returns {string}
     */
    loaderLogo() {
      return process.env.BASE_URL + this.layoutConfig("loader.logo");
    },

    /**
     * Set the right toolbar display
     * @returns {boolean}
     */
    toolbarDisplay() {
      // return !!this.layoutConfig("toolbar.display");
      return true;
    }
  }
};
</script>
