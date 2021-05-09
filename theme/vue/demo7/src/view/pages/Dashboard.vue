<template>
  <div>
    <!--begin::Dashboard-->

    <div class="row">
      <div class="col-xl-4">
        <MixedWidget1></MixedWidget1>
      </div>
      <div class="col-xl-4">
        <ListWidget3></ListWidget3>
      </div>
      <div class="col-xl-4">
        <ListWidget2></ListWidget2>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-4">
        <ListWidget14></ListWidget14>
      </div>
      <div class="col-xl-4">
        <ListWidget15></ListWidget15>
      </div>
      <div class="col-xl-4">
        <ListWidget16></ListWidget16>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-6">
        <ListWidget10></ListWidget10>
      </div>
      <div class="col-xl-6">
        <ListWidget4></ListWidget4>
      </div>
    </div>

    <div class="row">
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
      <div class="col-lg-4">
        <ListWidget5></ListWidget5>
      </div>
      <div class="col-lg-8">
        <AdvancedTableWidget2></AdvancedTableWidget2>
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
import ListWidget4 from "@/view/content/widgets/list/Widget4.vue";
import ListWidget5 from "@/view/content/widgets/list/Widget5.vue";
import ListWidget10 from "@/view/content/widgets/list/Widget10.vue";
import ListWidget11 from "@/view/content/widgets/list/Widget11.vue";
import ListWidget12 from "@/view/content/widgets/list/Widget12.vue";
import ListWidget13 from "@/view/content/widgets/list/Widget12.vue";
import ListWidget14 from "@/view/content/widgets/list/Widget14.vue";
import ListWidget15 from "@/view/content/widgets/list/Widget15.vue";
import ListWidget16 from "@/view/content/widgets/list/Widget16.vue";

export default {
  name: "dashboard",
  components: {
    AdvancedTableWidget2,
    MixedWidget1,
    ListWidget2,
    ListWidget3,
    ListWidget4,
    ListWidget5,
    ListWidget10,
    ListWidget11,
    ListWidget12,
    ListWidget13,
    ListWidget14,
    ListWidget15,
    ListWidget16
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
