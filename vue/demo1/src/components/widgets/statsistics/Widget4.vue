<template>
  <!--begin::Statistics Widget 4-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body p-0">
      <div class="d-flex flex-stack card-p flex-grow-1">
        <span class="symbol symbol-50px me-2">
          <span class="symbol-label">
            <span :class="`svg-icon-${color}`" class="svg-icon svg-icon-2x">
              <inline-svg :src="svgIcon" />
            </span>
          </span>
        </span>

        <div class="d-flex flex-column text-end">
          <span class="text-dark fw-bolder fs-2">{{ change }}</span>

          <span class="text-muted fw-bold mt-1">{{ description }}</span>
        </div>
      </div>

      <!--begin::Chart-->
      <apexchart
        class="statistics-widget-4-chart card-rounded-bottom"
        :options="chartOptions"
        :series="series"
        :height="height"
        type="area"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Statistics Widget 4-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "kt-widget-4",
  props: {
    widgetClasses: String,
    svgIcon: String,
    color: String,
    change: String,
    description: String,
    height: Number,
  },
  components: {},
  setup(props) {
    const height = ref(props.height);

    const color = ref(props.color);

    const labelColor = getCSSVariableValue("--bs-" + "gray-800");
    const baseColor = getCSSVariableValue("--bs-" + color.value);
    const lightColor = getCSSVariableValue("--bs-light-" + color.value);

    const chartOptions = {
      chart: {
        fontFamily: "inherit",
        type: "area",
        height: height.value,
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
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [baseColor],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
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
            color: "#E4E6EF",
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
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 100],
        },
      },
      colors: [baseColor],
      markers: {
        colors: [baseColor],
        strokeColor: [lightColor],
        strokeWidth: 3,
      },
    };

    const series = [
      {
        name: "Net Profit",
        data: [40, 40, 30, 30, 35, 35, 50],
      },
    ];

    return {
      chartOptions,
      series,
    };
  },
});
</script>
