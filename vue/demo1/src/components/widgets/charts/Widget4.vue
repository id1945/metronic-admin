<template>
  <!--begin::Charts Widget 4-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Recent Customers</span>

        <span class="text-muted fw-bold fs-7">More than 500 new customers</span>
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
          id="kt_charts_widget_4_year_btn"
          >Year</a
        >

        <a
          class="
            btn btn-sm btn-color-muted btn-active btn-active-primary
            px-4
            me-1
          "
          id="kt_charts_widget_4_month_btn"
          >Month</a
        >

        <a
          class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
          id="kt_charts_widget_4_week_btn"
          >Week</a
        >
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Chart-->
      <apexchart type="area" :options="options" :series="series"></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Charts Widget 4-->
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

    const baseColor = getCSSVariableValue("--bs-success");
    const baseLightColor = getCSSVariableValue("--bs-light-success");
    const secondaryColor = getCSSVariableValue("--bs-warning");
    const secondaryLightColor = getCSSVariableValue("--bs-light-warning");

    const options = {
      chart: {
        fontFamily: "inherit",
        type: "area",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
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
        crosshairs: {
          position: "front",
          stroke: {
            color: labelColor,
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
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
      colors: [baseColor, secondaryColor],
      grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        colors: [baseLightColor, secondaryLightColor],
        strokeColor: [baseLightColor, secondaryLightColor],
        strokeWidth: 3,
      },
    };

    const series = [
      {
        name: "Net Profit",
        data: [60, 50, 80, 40, 100, 60],
      },
      {
        name: "Revenue",
        data: [70, 60, 110, 40, 50, 70],
      },
    ];

    return {
      options,
      series,
    };
  },
});
</script>
