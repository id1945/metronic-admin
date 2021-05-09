<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row">
      <div class="col-xxl-4">
        <MixedWidget1></MixedWidget1>
      </div>
      <div class="col-xxl-8">
        <ListWidget9></ListWidget9>
      </div>

      <div class="col-xxl-4">
        <StatsWidget7></StatsWidget7>
        <StatsWidget12></StatsWidget12>
      </div>
      <div class="col-xl-8">
        <AdvancedTableWidget2></AdvancedTableWidget2>
      </div>

      <div class="col-lg-12 col-xxl-12">
        <ListWidget3></ListWidget3>
      </div>

      <div class="col-xxl-6">
        <ListWidget14></ListWidget14>
      </div>
      <div class="col-xxl-6">
        <ListWidget15></ListWidget15>
      </div>

      <div class="col-xxl-4">
        <ListWidget8></ListWidget8>
      </div>
      <div class="col-xxl-8">
        <ListWidget2></ListWidget2>
      </div>
    </div>
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import AdvancedTableWidget2 from "@/view/content/widgets/advance-table/Widget2.vue";
import MixedWidget1 from "@/view/content/widgets/mixed/Widget1.vue";
import ListWidget2 from "@/view/content/widgets/list/Widget2.vue";
import ListWidget3 from "@/view/content/widgets/list/Widget3.vue";
import ListWidget8 from "@/view/content/widgets/list/Widget8.vue";
import ListWidget9 from "@/view/content/widgets/list/Widget9.vue";
import ListWidget14 from "@/view/content/widgets/list/Widget14.vue";
import ListWidget15 from "@/view/content/widgets/list/Widget15.vue";
import StatsWidget7 from "@/view/content/widgets/stats/Widget7.vue";
import StatsWidget12 from "@/view/content/widgets/stats/Widget12.vue";

export default {
  name: "dashboard",
  components: {
    AdvancedTableWidget2,
    MixedWidget1,
    ListWidget2,
    ListWidget3,
    ListWidget8,
    ListWidget9,
    ListWidget14,
    ListWidget15,
    StatsWidget7,
    StatsWidget12
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },
  methods: {
    setActiveTab1(event) {
      this.tabIndex = this.setActiveTab(event);
    },
    setActiveTab2(event) {
      this.tabIndex2 = this.setActiveTab(event);
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      return parseInt(event.target.getAttribute("data-tab"));
    }
  }
};
</script>
