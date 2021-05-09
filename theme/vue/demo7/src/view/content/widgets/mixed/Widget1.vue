<template>
  <!--begin::Mixed Widget 1-->
  <div class="card card-custom bg-gray-100 card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 bg-primary py-5">
      <h3 class="card-title font-weight-bolder text-white">
        Sales Stat
      </h3>
      <div class="card-toolbar">
        <Dropdown1></Dropdown1>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body p-0 position-relative overflow-hidden">
      <!--begin::Chart-->
      <apexchart
        class="card-rounded-bottom bg-primary"
        :options="chartOptions"
        :series="series"
        type="area"
      ></apexchart>
      <!--end::Chart-->
      <!--begin::Stats-->
      <div class="card-spacer mt-n25">
        <!--begin::Row-->
        <div class="row m-0">
          <div class="col bg-white px-6 py-8 rounded-xl mr-7 mb-7">
            <span class="svg-icon svg-icon-3x svg-icon-info d-block my-2">
              <inline-svg src="media/svg/icons/Media/Equalizer.svg" />
            </span>
            <a href="#" class="text-info font-weight-bold font-size-h6">
              Weekly Sales
            </a>
          </div>
          <div class="col bg-white px-6 py-8 rounded-xl mb-7">
            <span class="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
              <inline-svg src="media/svg/icons/Communication/Add-user.svg" />
            </span>
            <a href="#" class="text-warning font-weight-bold font-size-h6 mt-2">
              New Users
            </a>
          </div>
        </div>
        <!--end::Row-->
        <!--begin::Row-->
        <div class="row m-0">
          <div class="col bg-white px-6 py-8 rounded-xl mr-7">
            <span class="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
              <inline-svg src="media/svg/icons/Design/Layers.svg" />
            </span>
            <a href="#" class="text-danger font-weight-bold font-size-h6 mt-2">
              Item Orders
            </a>
          </div>
          <div class="col bg-white px-6 py-8 rounded-xl">
            <span class="svg-icon svg-icon-3x svg-icon-success d-block my-2">
              <inline-svg src="media/svg/icons/Communication/Urgent-mail.svg" />
            </span>
            <a href="#" class="text-success font-weight-bold font-size-h6 mt-2">
              Bug Reports
            </a>
          </div>
        </div>
        <!--end::Row-->
      </div>
      <!--end::Stats-->
      <!--end::Body-->
    </div>
    <!--end::Mixed Widget 1-->
  </div>
</template>

<script>
import Dropdown1 from "@/view/content/dropdown/Dropdown1.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-1",
  components: {
    Dropdown1
  },
  data() {
    return {
      strokeColor: "#2E82DF",
      chartOptions: {},
      series: [
        {
          name: "Net Profit",
          data: [30, 45, 32, 70, 40, 40, 40]
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
        type: "area",
        height: 200,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: this.strokeColor,
          opacity: 0.5
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
        opacity: 0
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [this.strokeColor]
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
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
        }
      },
      yaxis: {
        show: false,
        min: 0,
        max: 80,
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
        },
        marker: {
          show: false
        }
      },
      colors: ["transparent"],
      markers: {
        colors: [this.layoutConfig("colors.theme.light.primary")],
        strokeColor: [this.strokeColor],
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
