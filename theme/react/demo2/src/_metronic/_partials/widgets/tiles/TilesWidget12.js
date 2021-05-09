/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";

export function TilesWidget12({
  className,
  iconColor = "success",
  widgetHeight = "150px",
}) {
  return (
    <>
      <div
        className={`card card-custom ${className}`}
        style={{ height: widgetHeight }}
      >
        <div className="card-body">
          <span className={`svg-icon svg-icon-3x svg-icon-${iconColor}`}>
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")}
            />
          </span>
          <div className="text-dark font-weight-bolder font-size-h2 mt-3">
            8,600
          </div>

          <a
            href="#"
            className="text-muted text-hover-primary font-weight-bold font-size-lg mt-1"
          >
            New Customers
          </a>
        </div>
      </div>
    </>
  );
}
