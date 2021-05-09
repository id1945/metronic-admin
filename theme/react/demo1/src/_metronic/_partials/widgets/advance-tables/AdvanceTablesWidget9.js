/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";

export function AdvanceTablesWidget9({ className }) {
  return (
    <>
      {/* begin::Advance Table Widget 9 */}
      <div className={`card card-custom ${className}`}>
        {/* begin::Header */}
        <div className="card-header border-0 py-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder text-dark">
              Agents Stats
            </span>
            <span className="text-muted mt-3 font-weight-bold font-size-sm">
              More than 400+ new members
            </span>
          </h3>
          <div className="card-toolbar">
            <a
              href="#"
              className="btn btn-info font-weight-bolder font-size-sm mr-3"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="btn btn-danger font-weight-bolder font-size-sm"
            >
              Create
            </a>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body pt-0 pb-3">
          <div className="tab-content">
            {/* begin::Table */}
            <div className="table-responsive">
              <table className="table table-head-custom table-vertical-center table-head-bg table-borderless">
                <thead>
                  <tr className="text-left">
                    <th style={{ minWidth: "250px" }} className="pl-7">
                      <span className="text-dark-75">products</span>
                    </th>
                    <th style={{ minWidth: "120px" }}>earnings</th>
                    <th style={{ minWidth: "100px" }}>comission</th>
                    <th style={{ minWidth: "100px" }}>company</th>
                    <th style={{ minWidth: "100px" }}>rating</th>
                    <th style={{ minWidth: "100px" }} />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pl-0 py-8">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-50 symbol-light mr-4">
                          <span className="symbol-label">
                            <SVG
                              className="h-75 align-self-end"
                              src={toAbsoluteUrl(
                                "/media/svg/avatars/001-boy.svg"
                              )}
                            ></SVG>
                          </span>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >
                            Brad Simmons
                          </a>
                          <span className="text-muted font-weight-bold d-block">
                            HTML, JS, ReactJS
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        $8,000,000
                      </span>
                      <span className="text-muted font-weight-bold">
                        In Proccess
                      </span>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        $520
                      </span>
                      <span className="text-muted font-weight-bold">Paid</span>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Intertico
                      </span>
                      <span className="text-muted font-weight-bold">
                        Web, UI/UX Design
                      </span>
                    </td>
                    <td>
                      <img
                        src={`${toAbsoluteUrl("/media/logos/stars.png")}`}
                        alt="image"
                        style={{ width: "5rem" }}
                      />
                      <span className="text-muted font-weight-bold d-block">
                        Best Rated
                      </span>
                    </td>
                    <td className="pr-0 text-right">
                      <a
                        href="#"
                        className="btn btn-light-success font-weight-bolder font-size-sm"
                      >
                        View Offer
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-0 py-0">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-50 symbol-light mr-4">
                          <span className="symbol-label">
                            <SVG
                              className="h-75 align-self-end"
                              src={toAbsoluteUrl(
                                "/media/svg/avatars/018-girl-9.svg"
                              )}
                            ></SVG>{" "}
                          </span>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >
                            Jessie Clarcson
                          </a>
                          <span className="text-muted font-weight-bold d-block">
                            C#, ASP.NET, MS SQL
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        $23,000,000
                      </span>
                      <span className="text-muted font-weight-bold">
                        Pending
                      </span>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        $1,600
                      </span>
                      <span className="text-muted font-weight-bold">
                        Rejected
                      </span>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Agoda
                      </span>
                      <span className="text-muted font-weight-bold">
                        Houses & Hotels
                      </span>
                    </td>
                    <td>
                      <img
                        src={`${toAbsoluteUrl("/media/logos/stars.png")}`}
                        alt="image"
                        style={{ width: "5rem" }}
                      />
                      <span className="text-muted font-weight-bold d-block">
                        Above Average
                      </span>
                    </td>
                    <td className="pr-0 text-right">
                      <a
                        href="#"
                        className="btn btn-light-success font-weight-bolder font-size-sm"
                      >
                        View Offer
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-0 py-8">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-50 symbol-light mr-4">
                          <span className="symbol-label">
                            <SVG
                              className="h-75 align-self-end"
                              src={toAbsoluteUrl(
                                "/media/svg/avatars/047-girl-25.svg"
                              )}
                            ></SVG>{" "}
                          </span>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >
                            Lebron Wayde
                          </a>
                          <span className="text-muted font-weight-bold d-block">
                            PHP, Laravel, VueJS
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        $34,000,000
                      </span>
                      <span className="text-muted font-weight-bold">Paid</span>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        $6,700
                      </span>
                      <span className="text-muted font-weight-bold">Paid</span>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        RoadGee
                      </span>
                      <span className="text-muted font-weight-bold">
                        Transportation
                      </span>
                    </td>
                    <td>
                      <img
                        src={`${toAbsoluteUrl("/media/logos/stars.png")}`}
                        alt="image"
                        style={{ width: "5rem" }}
                      />
                      <span className="text-muted font-weight-bold d-block">
                        Best Rated
                      </span>
                    </td>
                    <td className="pr-0 text-right">
                      <a
                        href="#"
                        className="btn btn-light-success font-weight-bolder font-size-sm"
                      >
                        View Offer
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-0 py-0">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-50 symbol-light mr-4">
                          <span className="symbol-label">
                            <SVG
                              className="h-75 align-self-end"
                              src={toAbsoluteUrl(
                                "/media/svg/avatars/014-girl-7.svg"
                              )}
                            ></SVG>
                          </span>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >
                            Natali Trump
                          </a>
                          <span className="text-muted font-weight-bold d-block">
                            Python, PostgreSQL, ReactJS
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        $2,600,000
                      </span>
                      <span className="text-muted font-weight-bold">Paid</span>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        $14,000
                      </span>
                      <span className="text-muted font-weight-bold">
                        Pending
                      </span>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        The Hill
                      </span>
                      <span className="text-muted font-weight-bold">
                        Insurance
                      </span>
                    </td>
                    <td>
                      <img
                        src={`${toAbsoluteUrl("/media/logos/stars.png")}`}
                        alt="image"
                        style={{ width: "5rem" }}
                      />
                      <span className="text-muted font-weight-bold d-block">
                        Average
                      </span>
                    </td>
                    <td className="pr-0  text-right">
                      <a
                        href="#"
                        className="btn btn-light-success font-weight-bolder font-size-sm"
                      >
                        View Offer
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* end::Table */}
          </div>
        </div>
        {/* end::Body */}
      </div>
      {/* end::Advance Table Widget 9 */}
    </>
  );
}
