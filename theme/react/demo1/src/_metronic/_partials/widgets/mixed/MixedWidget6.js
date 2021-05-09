/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo } from "react";
import { Dropdown } from "react-bootstrap";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import { DropdownCustomToggler, DropdownMenu2 } from "../../dropdowns";
import { useHtmlClassService } from "../../../layout";

export function MixedWidget6({ className, chartColor = "danger" }) {
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
    const element = document.getElementById("kt_mixed_widget_6_chart");

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
      <div
        className={`card card-custom bg-radial-gradient-danger ${className}`}
      >
        {/* begin::Header */}
        <div className="card-header border-0 pt-5">
          <h3 className="card-title font-weight-bolder text-white">
            Sales Progress
          </h3>
          <div className="card-toolbar">
            <Dropdown className="dropdown-inline" alignRight>
              <Dropdown.Toggle
                className="btn btn-text-white btn-hover-white btn-sm btn-icon border-0"
                variant="transparent"
                id="dropdown-toggle-top"
                as={DropdownCustomToggler}
              >
                <i className="ki ki-bold-more-hor" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <DropdownMenu2 />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body d-flex flex-column p-0">
          {/* begin::Chart */}
          <div
            id="kt_mixed_widget_6_chart"
            data-color={chartColor}
            style={{ height: "200px" }}
          />
          {/* end::Chart */}

          {/* begin::Stats */}
          <div className="card-spacer bg-white card-rounded flex-grow-1">
            {/* begin::Row */}
            <div className="row m-0">
              <div className="col px-8 py-6 mr-8">
                <div className="font-size-sm text-muted font-weight-bold">
                  Average Sale
                </div>
                <div className="font-size-h4 font-weight-bolder">$650</div>
              </div>
              <div className="col px-8 py-6">
                <div className="font-size-sm text-muted font-weight-bold">
                  Commission
                </div>
                <div className="font-size-h4 font-weight-bolder">$233,600</div>
              </div>
            </div>
            {/* end::Row */}
            {/* begin::Row */}
            <div className="row m-0">
              <div className="col px-8 py-6 mr-8">
                <div className="font-size-sm text-muted font-weight-bold">
                  Annual Taxes
                </div>
                <div className="font-size-h4 font-weight-bolder">$29,004</div>
              </div>
              <div className="col px-8 py-6">
                <div className="font-size-sm text-muted font-weight-bold">
                  Annual Income
                </div>
                <div className="font-size-h4 font-weight-bolder">$1,480,00</div>
              </div>
            </div>
            {/* end::Row */}
          </div>
          {/* end::Stats */}
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
        data: [35, 65, 75, 55, 45, 60, 55],
      },
      {
        name: "Revenue",
        data: [40, 70, 80, 60, 50, 65, 60],
      },
    ],
    chart: {
      type: "bar",
      height: "200px",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: ["30%"],
        endingShape: "rounded",
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
    },
    fill: {
      type: ["solid", "solid"],
      opacity: [0.25, 1],
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
      marker: {
        show: false,
      },
    },
    colors: ["#ffffff", "#ffffff"],
    grid: {
      borderColor: layoutProps.colorsGrayGray200,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        left: 20,
        right: 20,
      },
    },
  };
  return options;
}
