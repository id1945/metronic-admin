<template>
  <div
    class="card card-custom bg-gray-100 gutter-b card-stretch card-shadowless"
  >
    <!--begin::Header-->
    <div class="card-header h-auto border-0">
      <!--begin::Title-->
      <div class="card-title py-5">
        <h3 class="card-label">
          <span class="d-block text-dark font-weight-bolder"
            >Recent Orders</span
          >
          <span class="d-block text-dark-50 mt-2 font-size-sm"
            >More than 500+ new orders</span
          >
        </h3>
      </div>
      <!--end::Title-->
      <!--begin::Toolbar-->
      <div class="card-toolbar">
        <ul class="nav nav-pills nav-pills-sm nav-dark-75" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              data-toggle="tab"
              :class="{ active: this.show === 'month' }"
              href="#kt_charts_widget_2_chart_tab_1"
              @click="show = 'month'"
            >
              <span class="nav-text font-size-sm">Month</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              data-toggle="tab"
              :class="{ active: this.show === 'week' }"
              href="#kt_charts_widget_2_chart_tab_2"
              @click="show = 'week'"
            >
              <span class="nav-text font-size-sm">Week</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              data-toggle="tab"
              :class="{ active: this.show === 'day' }"
              href="#kt_charts_widget_2_chart_tab_3"
              @click="show = 'day'"
            >
              <span class="nav-text font-size-sm">Day</span>
            </a>
          </li>
        </ul>
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Chart-->
      <apexchart
        class="card-rounded-bottom"
        :options="chartOptions"
        :series="dataToShow"
        type="bar"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "widget-5",
  components: {},
  data() {
    return {
      show: "day",
      chartOptions: {},
      month: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 34, 61, 101]
        },
        {
          name: "Revenue",
          data: [76, 34, 56, 15, 87, 105]
        }
      ],
      day: [
        {
          name: "Net Profit",
          data: [44, 34, 57, 21, 61, 58]
        },
        {
          name: "Revenue",
          data: [20, 85, 30, 34, 87, 105]
        }
      ],
      week: [
        {
          name: "Net Profit",
          data: [44, 34, 57, 56, 61, 44]
        },
        {
          name: "Revenue",
          data: [76, 55, 101, 98, 34, 105]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"]),
    dataToShow() {
      if (this.show === "month") return this.month;
      if (this.show === "week") return this.week;
      if (this.show === "day") return this.day;
      return this.day;
    }
  },
  mounted() {
    // reference; kt_mixed_widget_1_chart
    this.chartOptions = {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false
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
          style: {
            colors: this.layoutConfig("colors.gray.gray-500"),
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        }
      },
      yaxis: {
        labels: {
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
      colors: [
        this.layoutConfig("colors.theme.base.warning"),
        this.layoutConfig("colors.gray.gray-300")
      ],
      grid: {
        borderColor: this.layoutConfig("colors.gray.gray-200"),
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      }
    };
  }
};
</script>
