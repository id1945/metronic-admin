<template>
  <!--begin::Mixed Widget 5-->
  <div :class="widgetClasses" class="card">
    <!--begin::Beader-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Trends</span>

        <span class="text-muted fw-bold fs-7">Latest trends</span>
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
        <Dropdown3></Dropdown3>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <!--begin::Chart-->
      <apexchart
        class="mixed-widget-5-chart card-rounded-top"
        :options="chartOptions"
        :series="series"
        type="area"
        :height="chartHeight"
      ></apexchart>
      <!--end::Chart-->

      <!--begin::Items-->
      <div class="mt-5">
        <!--begin::Item-->
        <div class="d-flex flex-stack mb-5">
          <!--begin::Section-->
          <div class="d-flex align-items-center me-2">
            <!--begin::Symbol-->
            <div class="symbol symbol-50px me-3">
              <div class="symbol-label bg-light">
                <img
                  src="media/svg/brand-logos/plurk.svg"
                  alt=""
                  class="h-50"
                />
              </div>
            </div>
            <!--end::Symbol-->

            <!--begin::Title-->
            <div>
              <a
                href="#"
                class="fs-6 text-gray-800 text-hover-primary fw-bolder"
                >Top Authors</a
              >
              <div class="fs-7 text-muted fw-bold mt-1">
                Ricky Hunt, Sandra Trepp
              </div>
            </div>
            <!--end::Title-->
          </div>
          <!--end::Section-->

          <!--begin::Label-->
          <div class="badge badge-light fw-bold py-4 px-3">+82$</div>
          <!--end::Label-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="d-flex flex-stack mb-5">
          <!--begin::Section-->
          <div class="d-flex align-items-center me-2">
            <!--begin::Symbol-->
            <div class="symbol symbol-50px me-3">
              <div class="symbol-label bg-light">
                <img
                  src="media/svg/brand-logos/figma-1.svg"
                  alt=""
                  class="h-50"
                />
              </div>
            </div>
            <!--end::Symbol-->

            <!--begin::Title-->
            <div>
              <a
                href="#"
                class="fs-6 text-gray-800 text-hover-primary fw-bolder"
                >Top Sales</a
              >
              <div class="fs-7 text-muted fw-bold mt-1">PitStop Emails</div>
            </div>
            <!--end::Title-->
          </div>
          <!--end::Section-->

          <!--begin::Label-->
          <div class="badge badge-light fw-bold py-4 px-3">+82$</div>
          <!--end::Label-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="d-flex flex-stack">
          <!--begin::Section-->
          <div class="d-flex align-items-center me-2">
            <!--begin::Symbol-->
            <div class="symbol symbol-50px me-3">
              <div class="symbol-label bg-light">
                <img
                  src="media/svg/brand-logos/vimeo.svg"
                  alt=""
                  class="h-50"
                />
              </div>
            </div>
            <!--end::Symbol-->

            <!--begin::Title-->
            <div class="py-1">
              <a
                href="#"
                class="fs-6 text-gray-800 text-hover-primary fw-bolder"
                >Top Engagement</a
              >

              <div class="fs-7 text-muted fw-bold mt-1">KT.com</div>
            </div>
            <!--end::Title-->
          </div>
          <!--end::Section-->

          <!--begin::Label-->
          <div class="badge badge-light fw-bold py-4 px-3">+82$</div>
          <!--end::Label-->
        </div>
        <!--end::Item-->
      </div>
      <!--end::Items-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 5-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "widget-7",
  components: {
    Dropdown3,
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
        type: "gradient",
        opacity: 1,
        gradient: {
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.375,
          stops: [25, 50, 100],
          colorStops: [],
        },
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
        max: 65,
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
        data: [30, 30, 60, 25, 25, 40],
      },
    ];

    return {
      chartOptions,
      series,
    };
  },
});
</script>
