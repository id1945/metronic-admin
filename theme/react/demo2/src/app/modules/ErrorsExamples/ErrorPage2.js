import React from "react";
import {toAbsoluteUrl} from "../../../_metronic/_helpers";

export function ErrorPage2() {
  return (
    <div className="d-flex flex-column flex-root">
      <div
        className="d-flex flex-row-fluid bgi-size-cover bgi-position-center"
        style={{
          backgroundImage: `url(${toAbsoluteUrl("/media/error/bg2.jpg")})`
        }}
      >
        <div className="d-flex flex-row-fluid flex-column justify-content-end align-items-center text-center text-white pb-40">
          <h1 className="display-1 font-weight-bold">OOPS!</h1>
          <span className="display-4 font-weight-boldest mb-8">
            Something went wrong here
          </span>
        </div>
      </div>
    </div>
  );
}
