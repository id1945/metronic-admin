/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";

export function BaseTablesWidget1({ className }) {
  const tabs = {
    tab1: "kt_tab_pane_3_1",
    tab2: "kt_tab_pane_3_2",
    tab3: "kt_tab_pane_3_3",
  };
  const [activeTab, setActiveTab] = useState(tabs.tab1);

  return (
    <>
      {/* begin::Base Table Widget 6 */}
      <div className={`card card-custom ${className}`}>
        {/* begin::Header */}
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder text-dark">
              Authors Earnings
            </span>
            <span className="text-muted mt-3 font-weight-bold font-size-sm">
              More than 400+ new members
            </span>
          </h3>
          <div className="card-toolbar">
            <ul className="nav nav-pills nav-pills-sm nav-dark-75">
              <li className="nav-item">
                <a
                  className={`nav-link py-2 px-4 ${activeTab === tabs.tab1 &&
                    "active"}`}
                  data-toggle="tab"
                  href={`#${tabs.tab1}`}
                  onClick={() => setActiveTab(tabs.tab1)}
                >
                  Month
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link py-2 px-4 ${activeTab === tabs.tab2 &&
                    "active"}`}
                  data-toggle="tab"
                  href={`#${tabs.tab2}`}
                  onClick={() => setActiveTab(tabs.tab2)}
                >
                  Week
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link py-2 px-4 ${activeTab === tabs.tab3 &&
                    "active"}`}
                  data-toggle="tab"
                  href={`#${tabs.tab3}`}
                  onClick={() => setActiveTab(tabs.tab3)}
                >
                  Day
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body pt-2 pb-0">
          {/* begin::Table */}
          <div className="table-responsive">
            <table className="table table-borderless table-vertical-center">
              <thead>
                <tr>
                  <th className="p-0" style={{ width: "50px" }} />
                  <th className="p-0" style={{ minWidth: "150px" }} />
                  <th className="p-0" style={{ minWidth: "120px" }} />
                  <th className="p-0" style={{ minWidth: "70px" }} />
                  <th className="p-0" style={{ minWidth: "70px" }} />
                  <th className="p-0" style={{ minWidth: "50px" }} />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pl-0">
                    <div className="symbol symbol-50 symbol-light mr-2 mt-2">
                      <span className="symbol-label">
                        <SVG
                          className="h-75 align-self-end"
                          src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
                        ></SVG>
                      </span>
                    </div>
                  </td>
                  <td className="pl-0">
                    <a
                      href="#"
                      className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >
                      Brad Simmons
                    </a>
                    <span className="text-muted font-weight-bold d-block">
                      Successful Fellas
                    </span>
                  </td>
                  <td></td>
                  <td className="text-right">
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                      Paid
                    </span>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      $2,000,000
                    </span>
                  </td>
                  <td className="text-right">
                    <span className="font-weight-bolder text-primary">
                      +28%
                    </span>
                  </td>
                  <td className="text-right pr-0">
                    <a href="#" className="btn btn-icon btn-light btn-sm">
                      <span className="svg-icon svg-icon-md svg-icon-success">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Navigation/Arrow-right.svg"
                          )}
                        ></SVG>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pl-0">
                    <div className="symbol symbol-50 symbol-light mr-2 mt-2">
                      <span className="symbol-label">
                        <SVG
                          className="h-75 align-self-end"
                          src={toAbsoluteUrl(
                            "/media/svg/avatars/018-girl-9.svg"
                          )}
                        ></SVG>
                      </span>
                    </div>
                  </td>
                  <td className="pl-0">
                    <a
                      href="#"
                      className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >
                      Jessie Clarcson
                    </a>
                    <span className="text-muted font-weight-bold d-block">
                      HTML, CSS Coding
                    </span>
                  </td>
                  <td></td>
                  <td className="text-right">
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                      Paid
                    </span>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      $1,200,000
                    </span>
                  </td>
                  <td className="text-right">
                    <span className="font-weight-bolder text-warning">
                      +52%
                    </span>
                  </td>
                  <td className="text-right pr-0">
                    <a href="#" className="btn btn-icon btn-light btn-sm">
                      <span className="svg-icon svg-icon-md svg-icon-success">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Navigation/Arrow-right.svg"
                          )}
                        ></SVG>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pl-0">
                    <div className="symbol symbol-50 symbol-light mr-2 mt-2">
                      <span className="symbol-label">
                        <SVG
                          className="h-75 align-self-end"
                          src={toAbsoluteUrl(
                            "/media/svg/avatars/047-girl-25.svg"
                          )}
                        ></SVG>
                      </span>
                    </div>
                  </td>
                  <td className="pl-0">
                    <a
                      href="#"
                      className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >
                      Lebron Wayde
                    </a>
                    <span className="text-muted font-weight-bold d-block">
                      ReactJS Developer
                    </span>
                  </td>
                  <td></td>
                  <td className="text-right">
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                      Paid
                    </span>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      $3,400,000
                    </span>
                  </td>
                  <td className="text-right">
                    <span className="font-weight-bolder text-danger">-34%</span>
                  </td>
                  <td className="text-right pr-0">
                    <a href="#" className="btn btn-icon btn-light btn-sm">
                      <span className="svg-icon svg-icon-md svg-icon-success">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Navigation/Arrow-right.svg"
                          )}
                        ></SVG>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pl-0">
                    <div className="symbol symbol-50 symbol-light mr-2 mt-2">
                      <span className="symbol-label">
                        <SVG
                          className="h-75 align-self-end"
                          src={toAbsoluteUrl(
                            "/media/svg/avatars/014-girl-7.svg"
                          )}
                        ></SVG>
                      </span>
                    </div>
                  </td>
                  <td className="pl-0">
                    <a
                      href="#"
                      className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >
                      Natali Trump
                    </a>
                    <span className="text-muted font-weight-bold d-block">
                      UI/UX Designer
                    </span>
                  </td>
                  <td></td>
                  <td className="text-right">
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                      Paid
                    </span>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      $4,500,000
                    </span>
                  </td>
                  <td className="text-right">
                    <span className="font-weight-bolder text-success">
                      +48%
                    </span>
                  </td>
                  <td className="text-right pr-0">
                    <a href="#" className="btn btn-icon btn-light btn-sm">
                      <span className="svg-icon svg-icon-md svg-icon-success">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Navigation/Arrow-right.svg"
                          )}
                        ></SVG>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pl-0">
                    <div className="symbol symbol-50 symbol-light mr-2 mt-2">
                      <span className="symbol-label">
                        <SVG
                          className="h-75 align-self-end"
                          src={toAbsoluteUrl(
                            "/media/svg/avatars/043-boy-18.svg"
                          )}
                        ></SVG>
                      </span>
                    </div>
                  </td>
                  <td className="pl-0">
                    <a
                      href="#"
                      className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >
                      Kevin Leonard
                    </a>
                    <span className="text-muted font-weight-bold d-block">
                      Art Director
                    </span>
                  </td>
                  <td></td>
                  <td className="text-right">
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                      Paid
                    </span>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      $35,600,000
                    </span>
                  </td>
                  <td className="text-right">
                    <span className="font-weight-bolder text-info">+230%</span>
                  </td>
                  <td className="text-right pr-0">
                    <a href="#" className="btn btn-icon btn-light btn-sm">
                      <span className="svg-icon svg-icon-md svg-icon-success">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Navigation/Arrow-right.svg"
                          )}
                        ></SVG>
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* end::Table */}
        </div>
        {/* end::Body */}
      </div>
      {/* end::Base Table Widget 6 */}
    </>
  );
}
