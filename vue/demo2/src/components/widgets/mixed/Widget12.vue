<template>
  <!--begin::Mixed Widget 12-->
  <div
    :class="widgetClasses"
    class="card"
    :style="`background-color: ${widgetColor}`"
  >
    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <!--begin::Wrapper-->
      <div class="d-flex flex-column flex-grow-1">
        <!--begin::Title-->
        <a href="#" class="text-dark text-hover-primary fw-bolder fs-3"
          >Earnings</a
        >
        <!--end::Title-->

        <!--begin::Chart-->
        <apexchart
          class="mixed-widget-13-chart"
          :options="chartOptions"
          :series="series"
          :height="chartHeight"
          type="area"
        ></apexchart>
        <!--end::Chart-->
      </div>
      <!--end::Wrapper-->

      <!--begin::Stats-->
      <div class="pt-5">
        <!--begin::Symbol-->
        <span class="text-dark fw-bolder fs-2x lh-0">$</span>
        <!--end::Symbol-->

        <!--begin::Number-->
        <span class="text-dark fw-bolder fs-3x me-2 lh-0">560</span>
        <!--end::Number-->

        <!--begin::Text-->
        <span class="text-dark fw-bolder fs-6 lh-0">+ 28% this week</span>
        <!--end::Text-->
      </div>
      <!--end::Stats-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 12-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "widget-12",
  props: {
    widgetClasses: String,
    widgetColor: String,
    chartHeight: String,
  },
  setup(props) {
    const labelColor = getCSSVariableValue("--bs-" + "gray-800");
    const strokeColor = getCSSVariableValue("--bs-" + "gray-300");

    const chartOptions = {
      grid: {
        show: false,
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      chart: {
        fontFamily: "inherit",
        type: "area",
        height: props.chartHeight,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
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
        type: "gradient",
        gradient: {
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [20, 120, 120, 120],
        },
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: ["#FFFFFF"],
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
          show: false,
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: strokeColor,
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        min: 0,
        max: 60,
        labels: {
          show: false,
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
      colors: ["#ffffff"],
      markers: {
        colors: [labelColor],
        strokeColor: [strokeColor],
        strokeWidth: 3,
      },
    };

    const series = [
      {
        name: "Net Profit",
        data: [15, 25, 15, 40, 20, 50],
      },
    ];

    return {
      series,
      chartOptions,
    };
  },
});
</script>
