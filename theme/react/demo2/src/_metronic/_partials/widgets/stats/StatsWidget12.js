/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useMemo, useEffect} from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import SVG from "react-inlinesvg";
import {useHtmlClassService} from "../../../layout";
import {toAbsoluteUrl} from "../../../_helpers";

export function StatsWidget12({ className }) {
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
      colorsThemeBasePrimary: objectPath.get(
        uiService.config,
        "js.colors.theme.base.primary"
      ),
      colorsThemeLightPrimary: objectPath.get(
        uiService.config,
        "js.colors.theme.light.primary"
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily")
    };
  }, [uiService]);

  useEffect(() => {
    const element = document.getElementById("kt_stats_widget_12_chart");

    if (!element) {
      return;
    }

    const options = getChartOption(layoutProps);
    const chartnewUsers = new ApexCharts(element, options);
    chartnewUsers.render();
    return function cleanUp() {
      chartnewUsers.destroy();
    };
  }, [layoutProps]);

  return (
    <div className={`card card-custom ${className}`}>
      <div className="card-body d-flex flex-column p-0">
        <div className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
          <span className="symbol symbol-circle symbol-50 symbol-light-primary mr-2">
            <span className="symbol-label">
              <span className="svg-icon svg-icon-xl svg-icon-primary">
                <SVG
                  src={toAbsoluteUrl(
                    "/media/svg/icons/Communication/Group.svg"
                  )}
                ></SVG>
              </span>
            </span>
          </span>
          <div className="d-flex flex-column text-right">
            <span className="text-dark-75 font-weight-bolder font-size-h3">
              +6,5K
            </span>
            <span className="text-muted font-weight-bold mt-2">New Users</span>
          </div>
        </div>
        <div
          id="kt_stats_widget_12_chart"
          className="card-rounded-bottom"
          style={{ height: "150px" }}
        ></div>
      </div>
    </div>
  );
}

function getChartOption(layoutProps) {
  var options = {
    series: [
      {
        name: "Net Profit",
        data: [40, 40, 30, 30, 35, 35, 50]
      }
    ],
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
      colors: [layoutProps.colorsThemeBasePrimary]
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
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily
        }
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: layoutProps.colorsGrayGray300,
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
          fontFamily: layoutProps.fontFamily
        }
      }
    },
    yaxis: {
      min: 0,
      max: 55,
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily
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
        fontFamily: layoutProps.fontFamily
      },
      y: {
        formatter: function(val) {
          return "$" + val + " thousands";
        }
      }
    },
    colors: [layoutProps.colorsThemeLightPrimary],
    markers: {
      colors: [layoutProps.colorsThemeLightPrimary],
      strokeColor: [layoutProps.colorsThemeBasePrimary],
      strokeWidth: 3
    }
  };
  return options;
}
