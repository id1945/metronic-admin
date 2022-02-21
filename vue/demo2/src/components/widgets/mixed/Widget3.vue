<template>
  <!--begin::Mixed Widget 3-->
  <div :class="widgetClasses" class="card">
    <!--begin::Beader-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Sales Overview</span>

        <span class="text-muted fw-bold fs-7">Recent sales statistics</span>
      </h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown1></Dropdown1>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body p-0 d-flex flex-column">
      <!--begin::Stats-->
      <div class="card-p pt-5 bg-white flex-grow-1">
        <!--begin::Row-->
        <div class="row g-0">
          <!--begin::Col-->
          <div class="col mr-8">
            <!--begin::Label-->
            <div class="fs-7 text-muted fw-bold">Average Sale</div>
            <!--end::Label-->

            <!--begin::Stat-->
            <div class="d-flex align-items-center">
              <div class="fs-4 fw-bolder">$650</div>
              <span class="svg-icon svg-icon-5 svg-icon-success ms-1">
                <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
              </span>
            </div>
            <!--end::Stat-->
          </div>
          <!--end::Col-->

          <!--begin::Col-->
          <div class="col">
            <!--begin::Label-->
            <div class="fs-7 text-muted fw-bold">Commission</div>
            <!--end::Label-->

            <!--begin::Stat-->
            <div class="fs-4 fw-bolder">$233,600</div>
            <!--end::Stat-->
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->

        <!--begin::Row-->
        <div class="row g-0 mt-8">
          <!--begin::Col-->
          <div class="col mr-8">
            <!--begin::Label-->
            <div class="fs-7 text-muted fw-bold">Annual Taxes 2019</div>
            <!--end::Label-->

            <!--begin::Stat-->
            <div class="fs-4 fw-bolder">$29,004</div>
            <!--end::Stat-->
          </div>
          <!--end::Col-->

          <!--begin::Col-->
          <div class="col">
            <!--begin::Label-->
            <div class="fs-7 text-muted fw-bold">Annual Income</div>
            <!--end::Label-->

            <!--begin::Stat-->
            <div class="d-flex align-items-center">
              <div class="fs-4 fw-bolder">$1,480,00</div>
              <span class="svg-icon svg-icon-5 svg-icon-danger ms-1">
                <inline-svg src="media/icons/duotune/arrows/arr065.svg" />
              </span>
            </div>
            <!--end::Stat-->
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->
      </div>
      <!--end::Stats-->

      <!--begin::Chart-->
      <apexchart
        class="mixed-widget-3-chart card-rounded-bottom"
        :options="chartOptions"
        :series="series"
        :height="chartHeight"
        type="area"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 3-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "widget-1",
  components: {
    Dropdown1,
  },
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
        data: [30, 25, 45, 30, 55, 55],
      },
    ];

    return {
      chartOptions,
      series,
    };
  },
});
</script>
