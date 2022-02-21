<template>
  <!--begin::Mixed Widget 4-->
  <div :class="widgetClasses" class="card">
    <!--begin::Beader-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Action Needed</span>
        <span class="text-muted fw-bold fs-7">Complete your profile setup</span>
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
    <div class="card-body d-flex flex-column">
      <div class="flex-grow-1">
        <!--begin::Chart-->
        <apexchart
          class="mixed-widget-4-chart"
          :options="chartOptions"
          :series="series"
          :height="chartHeight"
          type="radialBar"
        ></apexchart>
        <!--end::Chart-->
      </div>

      <div class="pt-5">
        <p class="text-center fs-6 pb-5">
          <span class="badge badge-light-danger fs-8">Notes:</span>&nbsp;
          Current sprint requires stakeholders<br />
          to approve newly amended policies
        </p>

        <a href="#" :class="`btn-${btnColor}`" class="btn w-100 py-3"
          >Take Action</a
        >
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 4-->
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
    btnColor: String,
  },
  setup(props) {
    const color = ref(props.chartColor);

    const baseColor = getCSSVariableValue("--bs-" + color.value);
    const lightColor = getCSSVariableValue("--bs-light-" + color.value);
    const labelColor = getCSSVariableValue("--bs-" + "gray-700");

    const chartOptions = {
      chart: {
        fontFamily: "inherit",
        height: props.chartHeight,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "65%",
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: false,
              fontWeight: "700",
            },
            value: {
              color: labelColor,
              fontSize: "30px",
              fontWeight: "700",
              offsetY: 12,
              show: true,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
          track: {
            background: lightColor,
            strokeWidth: "100%",
          },
        },
      },
      colors: [baseColor],
      stroke: {
        lineCap: "round",
      },
      labels: ["Progress"],
    };

    const series = [74];

    return {
      series,
      chartOptions,
    };
  },
});
</script>
