import React from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";

export function ScrollTop() {
  return (
      <div id="kt_scrolltop" className="scrolltop">
        <span className="svg-icon">
          <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Up-2.svg")}></SVG>
        </span>{" "}
      </div>
  );
}
