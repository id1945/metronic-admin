/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_helpers";

export function QuickSearch() {
  return (
    <>
      {/* begin::Search Panel */}
      <div id="kt_quick_search" className="offcanvas offcanvas-left p-10">
        {/* begin::Header */}
        <div className="offcanvas-header d-flex align-items-center justify-content-between mb-5">
          <h3 className="font-weight-bold m-0">
            Search
            <small className="text-muted font-size-sm ml-2">
              files, reports, members
            </small>
          </h3>
          <a
            href="#"
            className="btn btn-xs btn-icon btn-light btn-hover-primary"
            id="kt_quick_search_close"
          >
            <i className="ki ki-close icon-xs text-muted"></i>
          </a>
        </div>
        {/* end::Header */}

        {/* begin::Content */}
        <div className="offcanvas-content">
          {/* begin::Container */}
          <div
            className="quick-search quick-search-offcanvas quick-search-has-result"
            id="kt_quick_search_offcanvas"
          >
            {/* begin::Form */}
            <form
              method="get"
              className="quick-search-form border-bottom pt-5 pb-1"
            >
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="svg-icon svg-icon-lg">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Search.svg"
                        )}
                      />
                    </span>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Search..."
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="quick-search-close ki ki-close icon-sm text-muted"></i>
                  </span>
                </div>
              </div>
            </form>
            {/* end::Form */}

            {/* begin::Wrapper */}
            <div className="quick-search-wrapper pt-5">
              <div className="quick-search-result">
                {/* begin::Message */}
                <div className="text-muted d-none">No record found</div>
                {/* end::Message */}

                {/* begin::Section */}
                <div className="font-size-sm text-primary font-weight-bolder text-uppercase mb-2">
                  Documents
                </div>
                <div className="mb-10">
                  {/* begin::Item */}
                  <div className="d-flex align-items-center flex-grow-1 mb-2">
                    <div className="symbol symbol-30 bg-transparent flex-shrink-0">
                      <div className="svg-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/files/doc.svg")} />
                      </div>
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
                  {/* end::Item */}

                  {/* begin::Item */}
                  <div className="d-flex align-items-center flex-grow-1 mb-2">
                    <div className="symbol symbol-30 bg-transparent flex-shrink-0">
                      <div className="svg-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/files/pdf.svg")} />
                      </div>
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
                  {/* end::Item */}

                  {/* begin::Item */}
                  <div className="d-flex align-items-center flex-grow-1 mb-2">
                    <div className="symbol symbol-30 bg-transparent flex-shrink-0">
                      <div className="svg-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/files/xml.svg")} />
                      </div>
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
                  {/* end::Item */}

                  {/* begin::Item */}
                  <div className="d-flex align-items-center flex-grow-1 mb-2">
                    <div className="symbol symbol-30 bg-transparent flex-shrink-0">
                      <div className="svg-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/files/csv.svg")} />
                      </div>
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
                  {/* end::Item */}
                </div>
                {/* end::Section */}

                {/* begin::Section */}
                <div className="font-size-sm text-primary font-weight-bolder text-uppercase mb-2">
                  Members
                </div>
                <div className="mb-10">
                  <div className="d-flex align-items-center flex-grow-1 mb-2">
                    <div className="symbol symbol-30 flex-shrink-0">
                      <div
                        className="symbol-label"
                        style={{
                          backgroundImage: `url("${toAbsoluteUrl(
                            "/media/users/300_20.jpg"
                          )}")`,
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
                    <div className="symbol symbol-30 flex-shrink-0">
                      <div
                        className="symbol-label"
                        style={{
                          backgroundImage: `url("${toAbsoluteUrl(
                            "/media/users/300_15.jpg"
                          )}")`,
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
                    <div className="symbol symbol-30 flex-shrink-0">
                      <div
                        className="symbol-label"
                        style={{
                          backgroundImage: `url("${toAbsoluteUrl(
                            "/media/users/300_12.jpg"
                          )}")`,
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
                    <div className="symbol symbol-30 flex-shrink-0">
                      <div
                        className="symbol-label"
                        style={{
                          backgroundImage: `url("${toAbsoluteUrl(
                            "/media/users/300_16.jpg"
                          )}")`,
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
                {/* end::Section */}

                {/* begin::Section */}
                <div className="font-size-sm text-primary font-weight-bolder text-uppercase mb-2">
                  Files
                </div>
                <div className="mb-10">
                  <div className="d-flex align-items-center flex-grow-1 mb-2">
                    <div className="symbol symbol-30 flex-shrink-0">
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
                    <div className="symbol symbol-30 flex-shrink-0">
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
                    <div className="symbol symbol-30 flex-shrink-0">
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
                    <div className="symbol symbol-30 flex-shrink-0">
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
                {/* end::Section */}
              </div>
            </div>
            {/* end::Wrapper */}
          </div>
          {/* end::Container */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::Search Panel */}
    </>
  );
}
