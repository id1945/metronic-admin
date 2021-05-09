/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";

export function TilesWidget14({ className }) {
  const backgroundImageUrl = toAbsoluteUrl("/media/stock-600x600/img-16.jpg");

  return (
    <>
      <div
        className={`card card-custom bgi-no-repeat bgi-size-cover ${className}`}
        style={{
          backgroundImage: `url("${backgroundImageUrl}")`,
        }}
      >
        {/* begin::Body */}
        <div className="card-body d-flex flex-column align-items-start justify-content-start">
          <div className="p-1 flex-grow-1">
            <h3 className="text-white font-weight-bolder line-height-lg mb-5">
              Create Reports
              <br />
              With App
            </h3>
          </div>

          <a
            href="#"
            className="btn btn-link btn-link-warning font-weight-bold"
          >
            Create Report
            <span className="svg-icon-lg svg-icon-warning">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Navigation/Arrow-right.svg"
                )}
              />
            </span>
          </a>
        </div>
        {/* end::Body */}
      </div>
    </>
  );
}
