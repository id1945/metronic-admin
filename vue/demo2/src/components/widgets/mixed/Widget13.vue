<template>
  <!--begin::Mixed Widget 13-->
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
          >Contributors</a
        >
        <!--end::Title-->

        <!--begin::Chart-->
        <apexchart
          class="mixed-widget-14-chart"
          :options="chartOptions"
          :series="series"
          :height="chartHeight"
          type="bar"
        ></apexchart>
        <!--end::Chart-->
      </div>
      <!--end::Wrapper-->

      <!--begin::Stats-->
      <div class="pt-5">
        <!--begin::Number-->
        <span class="text-dark fw-bolder fs-3x me-2 lh-0">47</span>
        <!--end::Number-->

        <!--begin::Text-->
        <span class="text-dark fw-bolder fs-6 lh-0">- 12% this week</span>
        <!--end::Text-->
      </div>
      <!--end::Stats-->
    </div>
  </div>
  <!--end::Mixed Widget 13-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "widget-13",
  props: {
    widgetClasses: String,
    widgetColor: String,
    chartHeight: String,
  },
  setup(props) {
    const labelColor = getCSSVariableValue("--bs-" + "gray-800");

    const chartOptions = {
      chart: {
        fontFamily: "inherit",
        height: props.chartHeight,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      colors: ["#ffffff"],
      plotOptions: {
        bar: {
          borderRadius: 2.5,
          dataLabels: {
            position: "top", // top, center, bottom
          },
          columnWidth: "20%",
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "Jan",
          "Feb",
          "Mar",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        show: false,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
          background: labelColor,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    };

    const series = [
      {
        name: "Inflation",
        data: [
          1, 2.1, 1, 2.1, 4.1, 6.1, 4.1, 4.1, 2.1, 4.1, 2.1, 3.1, 1, 1, 2.1,
        ],
      },
    ];

    return {
      series,
      chartOptions,
    };
  },
});
</script>
