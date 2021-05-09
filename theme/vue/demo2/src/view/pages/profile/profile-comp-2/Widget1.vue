<template>
  <div
    class="card card-custom bg-radial-gradient-primary gutter-b card-stretch"
  >
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title font-weight-bolder text-white">Sales Progress</h3>
      <div class="card-toolbar">
        <Dropdown2><i class="ki ki-bold-more-hor text-white"></i></Dropdown2>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex flex-column p-0">
      <!--begin::Chart-->
      <apexchart
        class="card-rounded-bottom"
        :options="chartOptions"
        :series="series"
        type="bar"
      ></apexchart>
      <!--end::Chart-->
      <!--begin::Stats-->
      <div class="card-spacer bg-white card-rounded flex-grow-1">
        <!--begin::Row-->
        <div class="row m-0">
          <div class="col px-8 py-6 mr-8">
            <div class="font-size-sm text-muted font-weight-bold">
              Average Sale
            </div>
            <div class="font-size-h4 font-weight-bolder">$650</div>
          </div>
          <div class="col px-8 py-6">
            <div class="font-size-sm text-muted font-weight-bold">
              Commission
            </div>
            <div class="font-size-h4 font-weight-bolder">$233,600</div>
          </div>
        </div>
        <!--end::Row-->
        <!--begin::Row-->
        <div class="row m-0">
          <div class="col px-8 py-6 mr-8">
            <div class="font-size-sm text-muted font-weight-bold">
              Annual Taxes
            </div>
            <div class="font-size-h4 font-weight-bolder">$29,004</div>
          </div>
          <div class="col px-8 py-6">
            <div class="font-size-sm text-muted font-weight-bold">
              Annual Income
            </div>
            <div class="font-size-h4 font-weight-bolder">$1,480,00</div>
          </div>
        </div>
        <!--end::Row-->
      </div>
      <!--end::Stats-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-10",
  components: {
    Dropdown2
  },
  data() {
    return {
      chartOptions: {},
      series: [
        {
          name: "Net Profit",
          data: [35, 65, 75, 55, 45, 60, 55]
        },
        {
          name: "Revenue",
          data: [40, 70, 80, 60, 50, 65, 60]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  mounted() {
    // reference; kt_mixed_widget_1_chart
    this.chartOptions = {
      chart: {
        type: "bar",
        height: 200,
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ["30%"],
          endingShape: "rounded"
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
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
        }
      },
      yaxis: {
        min: 0,
        max: 100,
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
        }
      },
      fill: {
        opacity: 1
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
      colors: ["#aac0ff", "#ffffff"],
      grid: {
        borderColor: this.layoutConfig("colors.gray.gray-200"),
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: false
          }
        }
      }
    };
  }
};
</script>
