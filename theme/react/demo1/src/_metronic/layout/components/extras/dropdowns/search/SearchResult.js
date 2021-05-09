/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import PerfectScrollbar from "react-perfect-scrollbar";
import { toAbsoluteUrl } from "../../../../../_helpers";

const perfectScrollbarOptions = {
  wheelSpeed: 2,
  wheelPropagation: false,
};

export function SearchResult({ data }) {
  if (!data) {
    return null;
  }

  if (data.length === 0) {
    return (
      <div
        style={{ maxHeight: "325px", overflow: "hidden" }}
        className="quick-search-wrapper scroll ps ps--active-y"
      >
        <div className="quick-search-result">
          <div className="text-muted d-none">No record found</div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ maxHeight: "325px", overflow: "hidden" }}
      className="quick-search-wrapper scroll ps ps--active-y"
    >
      <PerfectScrollbar
        options={perfectScrollbarOptions}
        className="scroll"
        style={{ maxHeight: "325px", position: "relative" }}
      >
        <div className="quick-search-result">
          {/* begin: Section */}
          <div className="font-size-sm text-primary font-weight-bolder text-uppercase mb-2">
            Documents
          </div>
          <div className="mb-10">
            <div className="d-flex align-items-center flex-grow-1 mb-2">
              <div className="symbol symbol-45 bg-transparent flex-shrink-0">
                <SVG src={toAbsoluteUrl("/media/svg/files/doc.svg")}></SVG>
              </div>
              <div className="d-flex flex-column ml-3 mt-2 mb-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  AirPlus Requirements
                </a>
                <span className="font-size-sm font-weight-bold text-muted">
                  by Grog John
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center flex-grow-1 mb-2">
              <div className="symbol symbol-45 bg-transparent flex-shrink-0">
                <SVG src={toAbsoluteUrl("/media/svg/files/pdf.svg")}></SVG>
              </div>
              <div className="d-flex flex-column ml-3 mt-2 mb-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  TechNav Documentation
                </a>
                <span className="font-size-sm font-weight-bold text-muted">
                  by Mary Broun
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center flex-grow-1 mb-2">
              <div className="symbol symbol-45 bg-transparent flex-shrink-0">
                <SVG src={toAbsoluteUrl("/media/svg/files/xml.svg")}></SVG>
              </div>
              <div className="d-flex flex-column ml-3 mt-2 mb-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  All Framework Docs
                </a>
                <span className="font-size-sm font-weight-bold text-muted">
                  by Nick Stone
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center flex-grow-1 mb-2">
              <div className="symbol symbol-45 bg-transparent flex-shrink-0">
                <SVG src={toAbsoluteUrl("/media/svg/files/csv.svg")}></SVG>
              </div>
              <div className="d-flex flex-column ml-3 mt-2 mb-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  Finance & Accounting Reports
                </a>
                <span className="font-size-sm font-weight-bold text-muted">
                  by Jhon Larson
                </span>
              </div>
            </div>
          </div>
          {/* end: Section */}

          {/* begin: Section */}
          <div className="font-size-sm text-primary font-weight-bolder text-uppercase mb-2">
            Members
          </div>
          <div className="mb-10">
            <div className="d-flex align-items-center flex-grow-1 mb-2">
              <div className="symbol symbol-30  flex-shrink-0">
                <div
                  className="symbol-label"
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl(
                      "/media/users/300_20.jpg"
                    )})`,
                  }}
                />
              </div>
              <div className="d-flex flex-column ml-3 mt-2 mb-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  Milena Gibson
                </a>
                <span className="font-size-sm font-weight-bold text-muted">
                  UI Designer
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center flex-grow-1 mb-2">
              <div className="symbol symbol-30  flex-shrink-0">
                <div
                  className="symbol-label"
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl(
                      "/media/users/300_15.jpg"
                    )}`,
                  }}
                />
              </div>
              <div className="d-flex flex-column ml-3 mt-2 mb-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  Stefan JohnStefan
                </a>
                <span className="font-size-sm font-weight-bold text-muted">
                  Marketing Manager
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center flex-grow-1 mb-2">
              <div className="symbol symbol-30  flex-shrink-0">
                <div
                  className="symbol-label"
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl(
                      "/media/users/300_12.jpg"
                    )})`,
                  }}
                />
              </div>
              <div className="d-flex flex-column ml-3 mt-2 mb-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  Anna Strong
                </a>
                <span className="font-size-sm font-weight-bold text-muted">
                  Software Developer
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center flex-grow-1 mb-2">
              <div className="symbol symbol-30  flex-shrink-0">
                <div
                  className="symbol-label"
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl(
                      "/media/users/300_16.jpg"
                    )})`,
                  }}
                />
              </div>
              <div className="d-flex flex-column ml-3 mt-2 mb-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  Nick Bold
                </a>
                <span className="font-size-sm font-weight-bold text-muted">
                  Project Coordinator
                </span>
              </div>
            </div>
          </div>
          {/* end: Section */}

          {/* begin: Section */}
          <div className="font-size-sm text-primary font-weight-bolder text-uppercase mb-2">
            Files
          </div>
          <div className="mb-10">
            <div className="d-flex align-items-center flex-grow-1 mb-2">
              <div className="symbol symbol-45 symbol-circle flex-shrink-0">
                <div className="symbol-label">
                  <i className="flaticon-psd text-primary"></i>
                </div>
              </div>
              <div className="d-flex flex-column ml-3 mt-2 mb-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  79 PSD files generated
                </a>
                <span className="font-size-sm font-weight-bold text-muted">
                  by Grog John
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center flex-grow-1 mb-2">
              <div className="symbol symbol-45 symbol-circle flex-shrink-0">
                <div className="symbol-label">
                  <i className="flaticon2-supermarket text-warning"></i>
                </div>
              </div>
              <div className="d-flex flex-column ml-3 mt-2 mb-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  $2900 worth products sold
                </a>
                <span className="font-size-sm font-weight-bold text-muted">
                  Total 234 items
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center flex-grow-1 mb-2">
              <div className="symbol symbol-45 symbol-circle flex-shrink-0">
                <div className="symbol-label">
                  <i className="flaticon-safe-shield-protection text-info"></i>
                </div>
              </div>
              <div className="d-flex flex-column ml-3 mt-2 mb-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  4 New items submitted
                </a>
                <span className="font-size-sm font-weight-bold text-muted">
                  Marketing Manager
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center flex-grow-1 mb-2">
              <div className="symbol symbol-45 symbol-circle flex-shrink-0">
                <div className="symbol-label">
                  <i className="flaticon-safe-shield-protection text-warning"></i>
                </div>
              </div>
              <div className="d-flex flex-column ml-3 mt-2 mb-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  4 New items submitted
                </a>
                <span className="font-size-sm font-weight-bold text-muted">
                  Marketing Manager
                </span>
              </div>
            </div>
          </div>
          {/* end: Section */}
        </div>
      </PerfectScrollbar>
    </div>
  );
}
