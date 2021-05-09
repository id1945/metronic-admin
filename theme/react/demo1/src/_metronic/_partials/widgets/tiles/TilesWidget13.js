/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { toAbsoluteUrl } from "../../../_helpers";

export function TilesWidget13({ className, widgetHeight = "175px" }) {
  const backgroundImageUrl = toAbsoluteUrl("/media/svg/patterns/taieri.svg");

  return (
    <>
      <div
        className={`card card-custom bgi-no-repeat ${className}`}
        style={{ height: widgetHeight, backgroundColor: "#663259", backgroundPosition: "calc(100% + 0.5rem) 100%", backgroundSize: "100% auto", backgroundImage: `url("${backgroundImageUrl}")`  }}
      >
        {/* begin::Body */}
        <div className="card-body d-flex align-items-center">
        <div>
            <h3 className="text-white font-weight-bolder line-height-lg mb-5">Create SaaS<br/>Based Reports</h3>
            <a href='#' className="btn btn-success font-weight-bold px-6 py-3">Create Report</a>
        </div>
    </div>
        {/* end::Body */}
      </div>
    </>
  );
}
