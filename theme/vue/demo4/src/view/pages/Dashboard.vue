<template>
  <div>
    <!--begin::Dashboard-->
    <!--begin::Row-->
    <div class="row">
      <div class="col-xl-4">
        <ListWidget5></ListWidget5>
      </div>
      <div class="col-xl-8">
        <AdvancedTableWidget2></AdvancedTableWidget2>
      </div>
    </div>
    <!--end::Row-->
    <div class="row">
      <div class="col-xl-4">
        <ListWidget3></ListWidget3>
      </div>
      <div class="col-xl-4">
        <ListWidget10></ListWidget10>
      </div>
      <div class="col-xl-4">
        <ListWidget4></ListWidget4>
      </div>
    </div>
    <!--end::Row-->
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
    <!--end::Row-->
    <!--begin::Row-->
    <div class="row">
      <div class="col-lg-4">
        <ListWidget8></ListWidget8>
      </div>
      <div class="col-lg-8">
        <ListWidget2></ListWidget2>
      </div>
    </div>
    <!--end::Row-->
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import AdvancedTableWidget2 from "@/view/content/widgets/advance-table/Widget2.vue";
import ListWidget2 from "@/view/content/widgets/list/Widget2.vue";
import ListWidget3 from "@/view/content/widgets/list/Widget3.vue";
import ListWidget4 from "@/view/content/widgets/list/Widget4.vue";
import ListWidget5 from "@/view/content/widgets/list/Widget5.vue";
import ListWidget8 from "@/view/content/widgets/list/Widget8.vue";
import ListWidget10 from "@/view/content/widgets/list/Widget10.vue";
import ListWidget11 from "@/view/content/widgets/list/Widget11.vue";
import ListWidget12 from "@/view/content/widgets/list/Widget12.vue";
import ListWidget13 from "@/view/content/widgets/list/Widget13.vue";

export default {
  name: "dashboard",
  components: {
    AdvancedTableWidget2,
    ListWidget2,
    ListWidget3,
    ListWidget4,
    ListWidget5,
    ListWidget8,
    ListWidget10,
    ListWidget11,
    ListWidget12,
    ListWidget13
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
