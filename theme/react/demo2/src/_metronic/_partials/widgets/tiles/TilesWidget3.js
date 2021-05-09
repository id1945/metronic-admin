/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { toAbsoluteUrl } from "../../../_helpers";

export function TilesWidget3({ className, widgetHeight = "175px" }) {
  const backgroundImageUrl = toAbsoluteUrl("/media/bg/bg-9.jpg");
  return (
    <>
      {/* begin::Tiles Widget 3 */}
      <div
        className={`card card-custom bgi-no-repeat bgi-no-repeat bgi-size-cover ${className}`}
        style={{
          height: widgetHeight,
          backgroundImage: `url("${backgroundImageUrl}")`,
        }}
      >
        {/* begin::Body */}
        <div className="card-body d-flex flex-column">
          {/* begin::Title */}
          <a
            href="#"
            className="text-dark-75 text-hover-primary font-weight-bolder font-size-h3"
          >
            Properties
          </a>
          {/* end::Title */}
        </div>
        {/* end::Body */}
      </div>
      {/* end::Tiles Widget 3 */}
    </>
  );
}
