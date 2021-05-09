/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useEffect } from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import { useHtmlClassService } from "../../../layout";
import { KTUtil } from "../../../_assets/js/components/util";

export function StatsWidget10({ className, symbolShape, baseColor }) {
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray500: objectPath.get(
        uiService.config,
        "js.colors.gray.gray500"
      ),
      colorsGrayGray200: objectPath.get(
        uiService.config,
        "js.colors.gray.gray200"
      ),
      colorsGrayGray300: objectPath.get(
        uiService.config,
        "js.colors.gray.gray300"
      ),
      colorsThemeBaseSuccess: objectPath.get(
        uiService.config,
        `js.colors.theme.base.${baseColor}`
      ),
      colorsThemeLightSuccess: objectPath.get(
        uiService.config,
        `js.colors.theme.light.${baseColor}`
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily"),
    };
  }, [uiService, baseColor]);

  useEffect(() => {
    const element = document.getElementById("kt_stats_widget_10_chart");

    if (!element) {
      return;
    }

    const height = parseInt(KTUtil.css(element, "height"));
    const options = getChartOption(layoutProps, height);
    const chart = new ApexCharts(element, options);
    chart.render();
    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps]);

  return (
    <>
      {/* begin::Stats Widget 10 */}
      <div className={`card card-custom ${className}`}>
        {/* begin::Body */}
        <div className="card-body p-0">
          <div className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
            <span
              className={`symbol ${symbolShape} symbol-50 symbol-light${baseColor} mr-2`}
            >
              <span className="symbol-label">
                <span className={`svg-icon svg-icon-xl svg-icon-${baseColor}`}>
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Shopping/Cart3.svg")}
                  ></SVG>
                </span>
              </span>
            </span>
            <div className="d-flex flex-column text-right">
              <span className="text-dark-75 font-weight-bolder font-size-h3">
                +259
              </span>
              <span className="text-muted font-weight-bold mt-2">Sales Change</span>
            </div>
          </div>
          <div
            id="kt_stats_widget_10_chart"
            className="card-rounded-bottom"
            data-color={baseColor}
            style={{ height: "150px" }}
          />
        </div>
        {/* end::Body */}
      </div>
      {/* end::Stats Widget 10 */}
    </>
  );
}

function getChartOption(layoutProps, height) {
  const options = {
    series: [
      {
        name: "Net Profit",
        data: [40, 40, 30, 30, 35, 35, 50],
      },
    ],
    chart: {
      type: "area",
      height: height,
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
      type: "solid",
      opacity: 1,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [layoutProps.colorsThemeBaseSuccess],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: layoutProps.colorsGrayGray300,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 55,
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
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
        fontFamily: layoutProps.fontFamily,
      },
      y: {
        formatter: function(val) {
          return "$" + val + " thousands";
        },
      },
    },
    colors: [layoutProps.colorsThemeLightSuccess],
    markers: {
      colors: [layoutProps.colorsThemeLightSuccess],
      strokeColor: [layoutProps.colorsThemeBaseSuccess],
      strokeWidth: 3,
    },
  };
  return options;
}
