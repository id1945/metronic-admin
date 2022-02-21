<template>
  <!--begin::Mixed Widget 7-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body d-flex flex-column p-0">
      <!--begin::Stats-->
      <div class="flex-grow-1 card-p pb-0">
        <div class="d-flex flex-stack flex-wrap">
          <div class="me-2">
            <a href="#" class="text-dark text-hover-primary fw-bolder fs-3"
              >Generate Reports</a
            >

            <div class="text-muted fs-7 fw-bold">
              Finance and accounting reports
            </div>
          </div>

          <div :class="`text-${chartColor}`" class="fw-bolder fs-3">
            $24,500
          </div>
        </div>
      </div>
      <!--end::Stats-->

      <!--begin::Chart-->
      <apexchart
        class="mixed-widget-7-chart card-rounded-bottom"
        :options="chartOptions"
        :series="series"
        type="area"
        :height="chartHeight"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 7-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "widget-7",
  props: {
    widgetClasses: String,
    chartColor: String,
    chartHeight: String,
  },
  setup(props) {
    const color = ref(props.chartColor);

    const labelColor = getCSSVariableValue("--bs-" + "gray-800");
    const strokeColor = getCSSVariableValue("--bs-" + "gray-300");
    const baseColor = getCSSVariableValue("--bs-" + color.value);
    const lightColor = getCSSVariableValue("--bs-light-" + color.value);

    const chartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [15, 25, 15, 40, 20, 50],
        },
      ],
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
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [baseColor],
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
      colors: [lightColor],
      markers: {
        colors: [lightColor],
        strokeColor: [baseColor],
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
      chartOptions,
      series,
    };
  },
});
</script>
