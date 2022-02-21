<template>
  <!--begin::Mixed Widget 11-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div :class="`bg-${widgetColor}`" class="card-header border-0 py-5">
      <h3 class="card-title fw-bolder text-white">Sales Progress</h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          :class="`btn-active-color-${widgetColor}`"
          class="
            btn btn-sm btn-icon btn-color-white btn-active-white
            border-0
            me-n3
          "
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown3></Dropdown3>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body p-0">
      <!--begin::Chart-->
      <apexchart
        :class="`bg-${widgetColor}`"
        class="mixed-widget-12-chart card-rounded-bottom"
        :options="chartOptions"
        :series="series"
        height="200"
        type="bar"
      ></apexchart>
      <!--end::Chart-->

      <!--begin::Stats-->
      <div class="card-rounded bg-body mt-n10 position-relative card-px py-15">
        <!--begin::Row-->
        <div class="row g-0 mb-7">
          <!--begin::Col-->
          <div class="col mx-5">
            <div class="fs-6 text-gray-400">Avarage Sale</div>
            <div class="fs-2 fw-bolder text-gray-800">$650</div>
          </div>
          <!--end::Col-->

          <!--begin::Col-->
          <div class="col mx-5">
            <div class="fs-6 text-gray-400">Comissions</div>
            <div class="fs-2 fw-bolder text-gray-800">$29,500</div>
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->

        <!--begin::Row-->
        <div class="row g-0">
          <!--begin::Col-->
          <div class="col mx-5">
            <div class="fs-6 text-gray-400">Revenue</div>
            <div class="fs-2 fw-bolder text-gray-800">$55,000</div>
          </div>
          <!--end::Col-->

          <!--begin::Col-->
          <div class="col mx-5">
            <div class="fs-6 text-gray-400">Expenses</div>
            <div class="fs-2 fw-bolder text-gray-800">$1,130,600</div>
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->
      </div>
      <!--end::Stats-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 11-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "widget-12",
  props: {
    widgetClasses: String,
    widgetColor: String,
    chartHeight: String,
  },
  components: {
    Dropdown3,
  },
  setup(props) {
    const labelColor = getCSSVariableValue("--bs-gray-500");
    const borderColor = getCSSVariableValue("--bs-gray-200");

    const chartOptions = {
      chart: {
        fontFamily: "inherit",
        type: "bar",
        height: props.chartHeight,
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          borderRadius: 5,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
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
        min: 0,
        max: 100,
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      fill: {
        type: ["solid", "solid"],
        opacity: [0.25, 1],
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
        marker: {
          show: false,
        },
      },
      colors: ["#ffffff", "#ffffff"],
      grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          left: 20,
          right: 20,
        },
      },
    };

    const series = [
      {
        name: "Net Profit",
        data: [35, 65, 75, 55, 45, 60, 55],
      },
      {
        name: "Revenue",
        data: [40, 70, 80, 60, 50, 65, 60],
      },
    ];

    return {
      series,
      chartOptions,
    };
  },
});
</script>
