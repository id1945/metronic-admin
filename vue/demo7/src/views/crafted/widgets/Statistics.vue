<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget1
        widget-classes="card-xl-stretch mb-xl-8"
        background="abstract-4.svg"
        title="Meeting Schedule"
        time="3:30PM - 4:20PM"
        description="Create a headline that is informative<br/>
      and will capture readers"
      ></StatisticsWidget1>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget1
        widget-classes="card-xl-stretch mb-xl-8"
        background="abstract-2.svg"
        title="Meeting Schedule"
        time="03 May 2020"
        description="Great blog posts don’t just happen Even the best bloggers need it"
      ></StatisticsWidget1>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget1
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
        background="abstract-1.svg"
        title="UI Conference"
        time="10AM Jan, 2021"
        description="AirWays A Front-end solution for airlines build with ReactJS"
      ></StatisticsWidget1>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget2
        widget-classes="card-xl-stretch mb-xl-8"
        avatar="media/svg/avatars/029-boy-11.svg"
        title="Arthur Goldstain"
        description="System & Software Architect"
      ></StatisticsWidget2>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget2
        widget-classes="card-xl-stretch mb-xl-8"
        avatar="media/svg/avatars/014-girl-7.svg"
        title="Lisa Bold"
        description="Marketing & Fanance Manager"
      ></StatisticsWidget2>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget2
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
        avatar="media/svg/avatars/004-boy-1.svg"
        title="Nick Stone"
        description="Customer Support Team"
      ></StatisticsWidget2>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget3
        widget-classes="card-xl-stretch mb-xl-8"
        :height="150"
        color="success"
        title="Weekly Sales"
        description="Your Weekly Sales Chart"
        change="+100"
      ></StatisticsWidget3>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget3
        widget-classes="card-xl-stretch mb-xl-8"
        :height="150"
        color="danger"
        title="Authors Progress"
        description="Marketplace Authors Chart"
        change="-260"
      ></StatisticsWidget3>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget3
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
        :height="150"
        color="primary"
        title="Sales Progress"
        description="Marketplace Sales Chart"
        change="+180"
      ></StatisticsWidget3>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget4
        widget-classes="card-xl-stretch mb-xl-8"
        :height="150"
        svg-icon="media/icons/duotune/ecommerce/ecm002.svg"
        color="info"
        description="Sales Change"
        change="+256"
      ></StatisticsWidget4>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget4
        widget-classes="card-xl-stretch mb-xl-8"
        :height="150"
        svg-icon="media/icons/duotune/general/gen025.svg"
        color="success"
        description="Weekly Income"
        change="750$"
      ></StatisticsWidget4
      >->
    </div>

    <div class="col-xl-4">
      <StatisticsWidget4
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
        :height="150"
        svg-icon="media/icons/duotune/finance/fin006.svg"
        color="primary"
        description="New Users"
        change="+6.6K"
      ></StatisticsWidget4>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="media/icons/duotune/ecommerce/ecm002.svg"
        color="danger"
        icon-color="white"
        title="Shopping Chart"
        description="Lands, Houses"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="media/icons/duotune/ecommerce/ecm008.svg"
        color="primary"
        icon-color="white"
        title="Appartments"
        description="Flats, Shared Rooms, Duplex"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
        svg-icon="media/icons/duotune/graphs/gra005.svg"
        color="success"
        icon-color="white"
        title="Sales Stats"
        description="50% Increased for FY20"
      ></StatisticsWidget5>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-3">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="media/icons/duotune/general/gen032.svg"
        color="white"
        icon-color="primary"
        title="500M$"
        description="SAP UI Progress"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-3">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="media/icons/duotune/ecommerce/ecm008.svg"
        color="dark"
        icon-color="white"
        title="+3000"
        description="New Customers"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-3">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="media/icons/duotune/finance/fin006.svg"
        color="warning"
        icon-color="white"
        title="$50,000"
        description="Milestone Reached"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-3">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="media/icons/duotune/graphs/gra007.svg"
        color="info"
        icon-color="white"
        title="$50,000"
        description="Milestone Reached"
      ></StatisticsWidget5>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget6
        widget-classes="card-xl-stretch mb-xl-8"
        color="success"
        title="Avarage"
        description="Project Progress"
        progress="50%"
      ></StatisticsWidget6>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget6
        widget-classes="card-xl-stretch mb-xl-8"
        color="warning"
        title="48k Goal"
        description="Company Finance"
        progress="15%"
      ></StatisticsWidget6>
    </div>

    <div class="col-xl-4">
      <StatisticsWidget6
        widget-classes="card-xl-stretch mb-xl-8"
        color="primary"
        title="400k Impressions"
        description="Marketing Analysis"
        progress="76%"
      ></StatisticsWidget6>
    </div>
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import StatisticsWidget1 from "@/components/widgets/statsistics/Widget1.vue";
import StatisticsWidget2 from "@/components/widgets/statsistics/Widget2.vue";
import StatisticsWidget3 from "@/components/widgets/statsistics/Widget3.vue";
import StatisticsWidget4 from "@/components/widgets/statsistics/Widget4.vue";
import StatisticsWidget5 from "@/components/widgets/statsistics/Widget5.vue";
import StatisticsWidget6 from "@/components/widgets/statsistics/Widget6.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { MenuComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "widgets-statistics",
  components: {
    StatisticsWidget1,
    StatisticsWidget2,
    StatisticsWidget3,
    StatisticsWidget4,
    StatisticsWidget5,
    StatisticsWidget6,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Statistics", ["Widgets"]);

      MenuComponent.reinitialization();
    });
  },
});
</script>
