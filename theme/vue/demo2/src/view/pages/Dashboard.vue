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
        <ListWidget1></ListWidget1>
      </div>
      <div class="col-xxl-8">
        <AdvancedTableWidget2></AdvancedTableWidget2>
      </div>

      <div class="col-xl-4">
        <ListWidget11></ListWidget11>
      </div>
      <div class="col-xl-4">
        <ListWidget12></ListWidget12>
      </div>
      <div class="col-xl-4">
        <ListWidget13></ListWidget13>
      </div>
    </div>

    <div class="row">
      <div class="col-xxl-6 order-1 order-xxl-2">
        <ListWidget14></ListWidget14>
      </div>
      <div class="col-xxl-6 order-1 order-xxl-2">
        <ListWidget15></ListWidget15>
      </div>
    </div>
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import AdvancedTableWidget2 from "@/view/content/widgets/advance-table/Widget2.vue";
import MixedWidget1 from "@/view/content/widgets/mixed/Widget1.vue";
import ListWidget1 from "@/view/content/widgets/list/Widget1.vue";
import ListWidget9 from "@/view/content/widgets/list/Widget9.vue";
import ListWidget11 from "@/view/content/widgets/list/Widget11.vue";
import ListWidget12 from "@/view/content/widgets/list/Widget12.vue";
import ListWidget13 from "@/view/content/widgets/list/Widget13.vue";
import ListWidget14 from "@/view/content/widgets/list/Widget14.vue";
import ListWidget15 from "@/view/content/widgets/list/Widget15.vue";

export default {
  name: "dashboard",
  components: {
    AdvancedTableWidget2,
    MixedWidget1,
    ListWidget1,
    ListWidget9,
    ListWidget11,
    ListWidget12,
    ListWidget13,
    ListWidget14,
    ListWidget15
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
