<template>
  <div class="card card-custom card-stretch gutter-b">
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
    <div class="card-body d-flex flex-column">
      <!--begin::Chart-->
      <apexchart
        :options="chartOptions"
        :series="series"
        type="radialBar"
      ></apexchart>
      <!--end::Chart-->
      <!--begin::Items-->
      <div class="mt-10 mb-5">
        <div class="row row-paddingless mb-10">
          <!--begin::Item-->
          <div class="col">
            <div class="d-flex align-items-center mr-2">
              <!--begin::Symbol-->
              <div
                class="symbol symbol-45 symbol-light-info mr-4 flex-shrink-0"
              >
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-lg svg-icon-info">
                    <inline-svg src="media/svg/icons/Shopping/Cart3.svg" />
                  </span>
                </div>
              </div>
              <!--end::Symbol-->
              <!--begin::Title-->
              <div>
                <div class="font-size-h4 text-dark-75 font-weight-bolder">
                  $2,034
                </div>
                <div class="font-size-sm text-muted font-weight-bold mt-1">
                  Author Sales
                </div>
              </div>
              <!--end::Title-->
            </div>
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="col">
            <div class="d-flex align-items-center mr-2">
              <!--begin::Symbol-->
              <div
                class="symbol symbol-45 symbol-light-danger mr-4 flex-shrink-0"
              >
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-lg svg-icon-danger">
                    <inline-svg src="media/svg/icons/Home/Library.svg" />
                  </span>
                </div>
              </div>
              <!--end::Symbol-->
              <!--begin::Title-->
              <div>
                <div class="font-size-h4 text-dark-75 font-weight-bolder">
                  $706
                </div>
                <div class="font-size-sm text-muted font-weight-bold mt-1">
                  Commission
                </div>
              </div>
              <!--end::Title-->
            </div>
          </div>
          <!--end::Item-->
        </div>
        <div class="row row-paddingless">
          <!--begin::Item-->
          <div class="col">
            <div class="d-flex align-items-center mr-2">
              <!--begin::Symbol-->
              <div
                class="symbol symbol-45 symbol-light-success mr-4 flex-shrink-0"
              >
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-lg svg-icon-success">
                    <inline-svg src="media/svg/icons/Shopping/Cart3.svg" />
                  </span>
                </div>
              </div>
              <!--end::Symbol-->
              <!--begin::Title-->
              <div>
                <div class="font-size-h4 text-dark-75 font-weight-bolder">
                  $49
                </div>
                <div class="font-size-sm text-muted font-weight-bold mt-1">
                  Average Bid
                </div>
              </div>
              <!--end::Title-->
            </div>
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="col">
            <div class="d-flex align-items-center mr-2">
              <!--begin::Symbol-->
              <div
                class="symbol symbol-45 symbol-light-primary mr-4 flex-shrink-0"
              >
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-lg svg-icon-primary">
                    <inline-svg
                      src="media/svg/icons/Shopping/Barcode-read.svg"
                    />
                  </span>
                </div>
              </div>
              <!--end::Symbol-->
              <!--begin::Title-->
              <div>
                <div class="font-size-h4 text-dark-75 font-weight-bolder">
                  $5.8M
                </div>
                <div class="font-size-sm text-muted font-weight-bold mt-1">
                  All Time Sales
                </div>
              </div>
              <!--end::Title-->
            </div>
          </div>
          <!--end::Item-->
        </div>
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
      chartOptions: {},
      series: [60, 50, 75, 80]
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
        height: 200,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "30%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: false,
              fontWeight: "700"
            },
            value: {
              color: this.layoutConfig("colors.gray.gray-700"),
              fontSize: "18px",
              fontWeight: "700",
              offsetY: 10,
              show: true
            },
            total: {
              show: true,
              label: "Total",
              fontWeight: "bold",
              formatter: function() {
                return "60%";
              }
            }
          },
          track: {
            background: this.layoutConfig("colors.gray.gray-100"),
            strokeWidth: "100%"
          }
        }
      },
      colors: [
        this.layoutConfig("colors.theme.base.info"),
        this.layoutConfig("colors.theme.base.danger"),
        this.layoutConfig("colors.theme.base.success"),
        this.layoutConfig("colors.theme.base.primary")
      ],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
  }
};
</script>
