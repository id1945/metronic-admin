<template>
  <!--begin::Tiles Widget 8-->
  <div class="card card-custom gutter-b card-stretch">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <div class="card-title">
        <div class="card-label">
          <div class="font-weight-bolder">Weekly Sales Stats</div>
          <div class="font-size-sm text-muted mt-2">890,344 Sales</div>
        </div>
      </div>
      <div class="card-toolbar">
        <Dropdown3></Dropdown3>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex flex-column p-0">
      <!--begin::Items-->
      <div class="flex-grow-1 card-spacer">
        <!--begin::Item-->
        <template v-for="(item, i) in list">
          <div
            class="d-flex align-items-center justify-content-between mb-10"
            v-bind:key="i"
          >
            <div class="d-flex align-items-center mr-2">
              <div
                class="symbol symbol-40 mr-3 flex-shrink-0"
                v-bind:class="`symbol-light-${item.class}`"
              >
                <div class="symbol-label">
                  <span
                    class="svg-icon svg-icon-lg"
                    v-bind:class="`svg-icon-${item.class}`"
                  >
                    <inline-svg :src="`${item.svg}`"></inline-svg>
                  </span>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  class="font-size-h6 text-dark-75 text-hover-primary font-weight-bolder"
                  >{{ item.title }}</a
                >
                <div class="font-size-sm text-muted font-weight-bold mt-1">
                  {{ item.desc }}
                </div>
              </div>
            </div>
            <div
              class="label label-light label-inline font-weight-bold text-dark-50 py-4 px-3 font-size-base"
            >
              {{ item.profit }}
            </div>
          </div>
        </template>
        <!--end::Item-->
      </div>
      <!--end::Items-->
      <!--begin::Chart-->
      <div
        id="kt_tiles_widget_8_chart"
        class="card-rounded-bottom"
        data-color="warning"
        style="height: 150px; padding-rigth:0"
      >
        <apexchart
          class="card-rounded-bottom"
          :options="chartOptions"
          :series="series"
          type="area"
        ></apexchart>
      </div>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Tiles Widget 8-->
</template>

<script>
import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-4",
  components: {
    Dropdown3
  },
  data() {
    return {
      list: [
        {
          title: "Top Authors",
          desc: "Ricky Hunt, Sandra Trepp",
          svg: process.env.BASE_URL + "media/svg/icons/Home/Library.svg",
          profit: "+90$",
          class: "primary"
        },
        {
          title: "Top Sales",
          desc: "PitStop Emails",
          svg: process.env.BASE_URL + "media/svg/icons/Devices/Mic.svg",
          profit: "+4500$",
          class: "warning"
        },
        {
          title: "Bestsellers",
          desc: "Pitstop Email Marketing",
          svg:
            process.env.BASE_URL +
            "media/svg/icons/Communication/Group-chat.svg",
          profit: "+75$",
          class: "success"
        }
      ],
      chartOptions: {},
      series: [
        {
          name: "Net Profit",
          data: [20, 20, 30, 15, 40, 30]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  mounted() {
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
        colors: [this.layoutConfig("colors.theme.base.primary")]
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep"],
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
          enabled: false
        }
      },
      yaxis: {
        show: false,
        min: 0,
        max: 45,
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
      colors: [this.layoutConfig("colors.theme.light.secondary")],
      markers: {
        colors: [this.layoutConfig("colors.theme.light.primary")],
        strokeColor: [this.layoutConfig("colors.theme.base.white")],
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
