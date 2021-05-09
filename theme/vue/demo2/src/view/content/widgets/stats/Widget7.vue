<template>
  <div class="card card-custom card-stretch card-stretch-half gutter-b">
    <!--begin::Body-->
    <div class="card-body d-flex flex-column p-0">
      <div
        class="d-flex align-items-center justify-content-between card-spacer flex-grow-1"
      >
        <div class="d-flex flex-column mr-2">
          <a
            href="#"
            class="text-dark-75 text-hover-primary font-weight-bolder font-size-h5"
          >
            Weekly Sales
          </a>
          <span class="text-muted font-weight-bold mt-2">
            Your Weekly Sales Chart
          </span>
        </div>
        <span class="symbol symbol-light-success symbol-45">
          <span class="symbol-label font-weight-bolder font-size-h6">
            +57
          </span>
        </span>
      </div>
      <!--begin::Chart-->
      <apexchart
        class="card-rounded-bottom"
        :options="chartOptions"
        :series="series"
        type="area"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "widget-7",
  data() {
    return {
      chartOptions: {},
      series: [
        {
          name: "Net Profit",
          data: [30, 45, 32, 70, 40]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  mounted() {
    // reference; kt_stats_widget_7_chart
    this.chartOptions = {
      chart: {
        type: "area",
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "solid",
        opacity: 1
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [this.layoutConfig("colors.theme.base.success")]
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: this.layoutConfig("colors.gray.gray-500"),
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: this.layoutConfig("colors.gray.gray-300"),
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        }
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
          style: {
            colors: this.layoutConfig("colors.gray.gray-500"),
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0
          }
        },
        hover: {
          filter: {
            type: "none",
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: this.layoutConfig("font-family")
        },
        y: {
          formatter: function(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [this.layoutConfig("colors.theme.light.success")],
      markers: {
        colors: [this.layoutConfig("colors.theme.light.success")],
        strokeColor: [this.layoutConfig("colors.theme.base.success")],
        strokeWidth: 3
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      }
    };
  }
};
</script>
