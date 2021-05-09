<template>
  <div class="card card-custom card-stretch card-shadowless gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <div class="card-title font-weight-bolder">
        <div class="card-label">
          Weekly Sales Stats
          <div class="font-size-sm text-muted mt-2">890,344 Sales</div>
        </div>
      </div>
      <div class="card-toolbar">
        <Dropdown3></Dropdown3>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Chart-->
      <div style="height: 250px">
        <apexchart
          :options="chartOptions"
          :series="series"
          type="radialBar"
        ></apexchart>
      </div>
      <!--end::Chart-->
      <!--begin::Items-->
      <div class="mt-n12 position-relative zindex-0">
        <template v-for="(item, i) in list">
          <div
            class="d-flex align-items-center"
            v-bind:key="i"
            v-bind:class="{ 'mb-8': lastElement(i) }"
          >
            <!--begin::Symbol-->
            <div
              class="symbol symbol-circle symbol-40 symbol-light mr-3 flex-shrink-0"
            >
              <div class="symbol-label">
                <span class="svg-icon svg-icon-lg svg-icon-gray-500">
                  <!--begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg-->
                  <inline-svg :src="item.svg" />
                  <!--end::Svg Icon-->
                </span>
              </div>
            </div>
            <!--end::Symbol-->
            <!--begin::Title-->
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
            <!--end::Title-->
          </div>
        </template>
      </div>
      <!--end::Items-->
    </div>
    <!--end::Body-->
  </div>
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
          title: "Most Sales",
          desc: "Authors with the best sales",
          svg: "media/svg/icons/Media/Equalizer.svg"
        },
        {
          title: "Total Sales Lead",
          desc: "40% increased on week-to-week reports",
          svg: "media/svg/icons/Shopping/Chart-pie.svg"
        },
        {
          title: "Average Bestseller",
          desc: "Pitstop Email Marketing",
          svg: "media/svg/icons/Design/Layers.svg"
        }
      ],
      chartOptions: {},
      series: [74]
    };
  },
  methods: {
    lastElement(i) {
      if (i === this.list.length - 1) {
        return false;
      } else {
        return true;
      }
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  mounted() {
    this.chartOptions = {
      chart: {
        height: 250,
        type: "radialBar",
        offsetY: 0
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,

          hollow: {
            margin: 0,
            size: "70%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: true,
              fontSize: "13px",
              fontWeight: "700",
              offsetY: -5,
              color: this.layoutConfig("colors.gray.gray-500")
            },
            value: {
              color: this.layoutConfig("colors.gray.gray-700"),
              fontSize: "30px",
              fontWeight: "700",
              offsetY: -40,
              show: true
            }
          },
          track: {
            background: this.layoutConfig("colors.theme.light.info"),
            strokeWidth: "100%"
          }
        }
      },
      colors: [this.layoutConfig("colors.theme.base.info")],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
  }
};
</script>
