/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_helpers";

export function QuickActions() {
  return (
    <>
      {/* begin::Quick Actions Panel */}
      <div id="kt_quick_actions" className="offcanvas offcanvas-left p-10">
        {/* begin::Header */}
        <div className="offcanvas-header d-flex align-items-center justify-content-between pb-10">
          <h3 className="font-weight-bold m-0">
            Quick Actions
            <small className="text-muted font-size-sm ml-2">
              finance & reports
            </small>
          </h3>
          <a
            href="#"
            className="btn btn-xs btn-icon btn-light btn-hover-primary"
            id="kt_quick_actions_close"
          >
            <i className="ki ki-close icon-xs text-muted"></i>
          </a>
        </div>
        {/* end::Header */}

        {/* begin::Content */}
        <div className="offcanvas-content pr-5 mr-n5">
          <div className="row gutter-b">
            {/* begin::Item */}
            <div className="col-6">
              <a
                href="#"
                className="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
              >
                <span className="svg-icon svg-icon-3x svg-icon-primary m-0">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Shopping/Euro.svg")}
                  />
                </span>
                <span className="d-block font-weight-bold font-size-h6 mt-2">
                  Accounting
                </span>
              </a>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="col-6">
              <a
                href="#"
                className="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
              >
                <span className="svg-icon svg-icon-3x svg-icon-primary m-0">
                  <SVG
                    src={toAbsoluteUrl(
                      "/media/svg/icons/Communication/Mail-attachment.svg"
                    )}
                  />
                </span>
                <span className="d-block font-weight-bold font-size-h6 mt-2">
                  Members
                </span>
              </a>
            </div>
            {/* end::Item */}
          </div>
          <div className="row gutter-b">
            {/* begin::Item */}
            <div className="col-6">
              <a
                href="#"
                className="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
              >
                <span className="svg-icon svg-icon-3x svg-icon-primary m-0">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")}
                  />
                </span>
                <span className="d-block font-weight-bold font-size-h6 mt-2">
                  Projects
                </span>
              </a>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="col-6">
              <a
                href="#"
                className="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
              >
                <span className="svg-icon svg-icon-3x svg-icon-primary m-0">
                  <SVG
                    src={toAbsoluteUrl(
                      "/media/svg/icons/Communication/Group.svg"
                    )}
                  />
                </span>
                <span className="d-block font-weight-bold font-size-h6 mt-2">
                  Customers
                </span>
              </a>
            </div>
            {/* end::Item */}
          </div>
          <div className="row gutter-b">
            {/* begin::Item */}
            <div className="col-6">
              <a
                href="#"
                className="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
              >
                <span className="svg-icon svg-icon-3x svg-icon-primary m-0">
                  <SVG
                    src={toAbsoluteUrl(
                      "/media/svg/icons/Shopping/Chart-bar1.svg"
                    )}
                  />
                </span>
                <span className="d-block font-weight-bold font-size-h6 mt-2">
                  Email
                </span>
              </a>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="col-6">
              <a
                href="#"
                className="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
              >
                <span className="svg-icon svg-icon-3x svg-icon-primary m-0">
                  <SVG
                    src={toAbsoluteUrl(
                      "/media/svg/icons/Design/Color-profile.svg"
                    )}
                  />
                </span>
                <span className="d-block font-weight-bold font-size-h6 mt-2">
                  Settings
                </span>
              </a>
            </div>
            {/* end::Item */}
          </div>
          <div className="row">
            {/* begin::Item */}
            <div className="col-6">
              <a
                href="#"
                className="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
              >
                <span className="svg-icon svg-icon-3x svg-icon-primary m-0">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Shopping/Euro.svg")}
                  />
                </span>
                <span className="d-block font-weight-bold font-size-h6 mt-2">
                  Orders
                </span>
              </a>
            </div>
            {/* end::Item */}
          </div>
        </div>
        {/* end::Content */}
      </div>
      {/* end::Quick Actions Panel */}
    </>
  );
}
