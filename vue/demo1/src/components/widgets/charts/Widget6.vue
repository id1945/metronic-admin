<template>
  <!--begin::Charts Widget 6-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Recent Orders</span>

        <span class="text-muted fw-bold fs-7">More than 500+ new orders</span>
      </h3>

      <!--begin::Toolbar-->
      <div class="card-toolbar" data-kt-buttons="true">
        <a
          class="
            btn btn-sm btn-color-muted btn-active btn-active-primary
            active
            px-4
            me-1
          "
          id="kt_charts_widget_6_sales_btn"
          >Sales</a
        >

        <a
          class="
            btn btn-sm btn-color-muted btn-active btn-active-primary
            px-4
            me-1
          "
          id="kt_charts_widget_6_expenses_btn"
          >Expenses</a
        >
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Chart-->
      <apexchart type="bar" :options="options" :series="series"></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Charts Widget 6-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "widget-1",
  props: {
    widgetClasses: String,
  },
  components: {},
  setup() {
    const labelColor = getCSSVariableValue("--bs-gray-500");
    const borderColor = getCSSVariableValue("--bs-gray-200");

    const baseColor = getCSSVariableValue("--bs-primary");
    const baseLightColor = getCSSVariableValue("--bs-light-primary");
    const secondaryColor = getCSSVariableValue("--bs-info");

    const options = {
      chart: {
        fontFamily: "inherit",
        stacked: true,
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          stacked: true,
          horizontal: false,
          endingShape: "rounded",
          columnWidth: ["12%"],
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        max: 120,
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [baseColor, secondaryColor, baseLightColor],
      grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
    };

    const series = [
      {
        name: "Net Profit",
        type: "bar",
        stacked: true,
        data: [40, 50, 65, 70, 50, 30],
      },
      {
        name: "Revenue",
        type: "bar",
        stacked: true,
        data: [20, 20, 25, 30, 30, 20],
      },
      {
        name: "Expenses",
        type: "area",
        data: [50, 80, 60, 90, 50, 70],
      },
    ];

    return {
      options,
      series,
    };
  },
});
</script>
