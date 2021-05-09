<template>
  <!--begin::Mixed Widget 14-->
  <div class="card card-custom gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title font-weight-bolder">Action Needed</h3>
      <div class="card-toolbar">
        <Dropdown3></Dropdown3>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <div class="flex-grow-1">
        <apexchart
          :options="chartOptions"
          :series="series"
          type="radialBar"
        ></apexchart>
      </div>
      <div class="pt-5">
        <p class="text-center font-weight-normal font-size-lg pb-7">
          Notes: Current sprint requires stakeholders <br />to approve newly
          amended policies
        </p>
        <a
          href="#"
          class="btn btn-success btn-shadow-hover font-weight-bolder w-100 py-3"
          >Generate Report</a
        >
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 14-->
</template>

<script>
import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-7",
  data() {
    return {
      chartOptions: {},
      series: [74]
    };
  },
  components: {
    Dropdown3
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  mounted() {
    // reference; kt_stats_widget_7_chart
    this.chartOptions = {
      chart: {
        height: 200,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "65%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: false,
              fontWeight: "700"
            },
            value: {
              color: this.layoutConfig("colors.gray.gray-700"),
              fontSize: "30px",
              fontWeight: "700",
              offsetY: 12,
              show: true
            }
          },
          track: {
            background: this.layoutConfig("colors.theme.light.success"),
            strokeWidth: "100%"
          }
        }
      },
      colors: [this.layoutConfig("colors.theme.base.success")],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
  }
};
</script>
