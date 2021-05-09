import React, { forwardRef } from "react";
import clsx from "clsx";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_helpers";

export const Notice = forwardRef(
  (
    {
      icon,
      svg,
      iconRef,
      textRef,
      iconWrapperRef,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        role="alert"
        className={clsx(
          "alert alert-custom alert-white alert-shadow gutter-b",
          className
        )}
      >
        <div className="alert-icon alert-icon-top">
          <span className="svg-icon svg-icon-3x svg-icon-primary mt-4">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Tools/Compass.svg")}
            ></SVG>
          </span>
        </div>

        <div className="alert-text" ref={textRef}>
          {children}
        </div>
      </div>
    );
  }
);

// Set display name for debugging.
if (process.env.NODE_ENV !== "production") {
  Notice.displayName = "Notice";
}
