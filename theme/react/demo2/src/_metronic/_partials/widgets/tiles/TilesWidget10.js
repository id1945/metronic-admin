/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export function TilesWidget10({ className, widgetHeight = "175px" }) {
  return (
    <>
      <div
        className={`card card-custom ${className}`}
        style={{ height: widgetHeight }}
      >
        {/* begin::Body */}
        <div className="card-body d-flex align-items-center justify-content-between flex-wrap">
          <div className="mr-2">
            <h3 className="font-weight-bolder">Create CRM Reports</h3>
            <div className="text-dark-50 font-size-lg mt-2">
              Generate the latest CRM Report
            </div>
          </div>
          <a href="#" className="btn btn-primary font-weight-bold py-3 px-6">
            Start Now
          </a>
        </div>
        {/* end::Body */}
      </div>
    </>
  );
}
