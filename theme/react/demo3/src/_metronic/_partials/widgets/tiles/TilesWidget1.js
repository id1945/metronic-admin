/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo } from "react";
import SVG from "react-inlinesvg";
import { Dropdown } from "react-bootstrap";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import { toAbsoluteUrl } from "../../../_helpers";
import { DropdownCustomToggler, DropdownMenu4 } from "../../dropdowns";
import { useHtmlClassService } from "../../../layout";

export function TilesWidget1({ className, chartColor = "danger" }) {
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray500: objectPath.get(
        uiService.config,
        "js.colors.gray.gray500"
      ),
      colorsGrayGray300: objectPath.get(
        uiService.config,
        "js.colors.gray.gray300"
      ),
      colorsThemeBaseColor: objectPath.get(
        uiService.config,
        `js.colors.theme.base.${chartColor}`
      ),
      colorsThemeLightColor: objectPath.get(
        uiService.config,
        `js.colors.theme.light.${chartColor}`
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily"),
    };
  }, [uiService, chartColor]);

  useEffect(() => {
    const element = document.getElementById("kt_tiles_widget_1_chart");

    if (!element) {
      return;
    }

    const options = getChartOption(layoutProps);
    const chart = new ApexCharts(element, options);
    chart.render();
    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps]);

  return (
    <>
      {/* begin::Tiles Widget 1 */}
      <div className={`card card-custom ${className}`}>
        {/* begin::Header */}
        <div className="card-header border-0 pt-5">
          <div className="card-title">
            <div className="card-label">
              <div className="font-weight-bolder">Weekly Sales Stats</div>
              <div className="font-size-sm text-muted mt-2">890,344 Sales</div>
            </div>
          </div>
          <div className="card-toolbar">
            <Dropdown className="dropdown-inline" alignRight>
              <Dropdown.Toggle
                className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                variant="transparent"
                id="dropdown-toggle-top"
                as={DropdownCustomToggler}
              >
                <i className="ki ki-bold-more-hor" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <DropdownMenu4 />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body d-flex flex-column px-0">
          {/* begin::Chart */}
          <div
            id="kt_tiles_widget_1_chart"
            data-color={chartColor}
            style={{ height: "150px" }}
          />
          {/* end::Chart */}

          {/* begin::Items */}
          <div className="flex-grow-1 card-spacer-x">
            {/* begin::Item */}
            <div className="d-flex align-items-center justify-content-between mb-10">
              <div className="d-flex align-items-center mr-2">
                <div className="symbol symbol-50 symbol-light mr-3 flex-shrink-0">
                  <div className="symbol-label">
                    <span className="svg-icon">
                      <SVG
                        className=" h-50"
                        src={toAbsoluteUrl("/media/svg/misc/006-plurk.svg")}
                      ></SVG>
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-size-h6 text-dark-75 text-hover-primary font-weight-bolder"
                  >
                    Top Authors
                  </a>
                  <div className="font-size-sm text-muted font-weight-bold mt-1">
                    Ricky Hunt, Sandra Trepp
                  </div>
                </div>
              </div>
              <div className="label label-light label-inline font-weight-bold text-dark-50 py-4 px-3 font-size-base">
                +105$
              </div>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="d-flex align-items-center justify-content-between mb-10">
              <div className="d-flex align-items-center mr-2">
                <div className="symbol symbol-50 symbol-light mr-3 flex-shrink-0">
                  <div className="symbol-label">
                    <span className="svg-icon">
                      <SVG
                        className=" h-50"
                        src={toAbsoluteUrl("/media/svg/misc/015-telegram.svg")}
                      ></SVG>
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-size-h6 text-dark-75 text-hover-primary font-weight-bolder"
                  >
                    Bestsellers
                  </a>
                  <div className="font-size-sm text-muted font-weight-bold mt-1">
                    Pitstop Email Marketing
                  </div>
                </div>
              </div>
              <div className="label label-light label-inline font-weight-bold text-dark-50 py-4 px-3 font-size-base">
                +60$
              </div>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center mr-2">
                <div className="symbol symbol-50 symbol-light mr-3 flex-shrink-0">
                  <div className="symbol-label">
                    <span className="svg-icon">
                      <SVG
                        className=" h-50"
                        src={toAbsoluteUrl("/media/svg/misc/003-puzzle.svg")}
                      ></SVG>
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-size-h6 text-dark-75 text-hover-primary font-weight-bolder"
                  >
                    Top Engagement
                  </a>
                  <div className="font-size-sm text-muted font-weight-bold mt-1">
                    KT.com solution provider
                  </div>
                </div>
              </div>
              <div className="label label-light label-inline font-weight-bold text-dark-50 py-4 px-3 font-size-base">
                +75$
              </div>
            </div>
            {/* end::Item */}
          </div>
          {/* end::Items */}
        </div>
        {/* end::Body */}
      </div>
      {/* end::Tiles Widget 1 */}
    </>
  );
}

function getChartOption(layoutProps) {
  const options = {
    series: [
      {
        name: "Net Profit",
        data: [20, 22, 30, 28, 25, 26, 30, 28, 22, 24, 25, 35],
      },
    ],
    chart: {
      type: "area",
      height: 150,
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
      type: "gradient",
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0.55,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.2,
        stops: [25, 50, 100],
        colorStops: [],
      },
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [layoutProps.colorsThemeBaseColor],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
      max: 37,
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
    colors: [layoutProps.colorsThemeLightColor],
    markers: {
      colors: [layoutProps.colorsThemeLightColor],
      strokeColor: [layoutProps.colorsThemeBaseColor],
      strokeWidth: 3,
    },
    padding: {
      top: 0,
      bottom: 0,
    },
  };
  return options;
}
