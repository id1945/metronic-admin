import React from "react";

export function FooterCompact({
  today,
  footerClasses,
  footerContainerClasses,
}) {
  return (
    <>
      {/* begin::Footer */}
      <div
        className={`footer bg-white py-4 d-flex flex-lg-column  ${footerClasses}`}
        id="kt_footer"
      >
        {/* begin::Container */}
        <div
          className={`${footerContainerClasses} d-flex flex-column flex-md-row align-items-center justify-content-between`}
        >
          {/* begin::Copyright */}
          <div className="text-dark order-2 order-md-1">
            <span className="text-muted font-weight-bold mr-2">
              {today} &copy;
            </span>
            {` `}
            <a
              href="http://keenthemes.com/metronic"
              rel="noopener noreferrer"
              target="_blank"
              className="text-dark-75 text-hover-primary"
            >
              Keenthemes
            </a>
          </div>
          {/* end::Copyright */}
          {` `}
          {/* begin::Nav */}
          <div className="nav nav-dark order-1 order-md-2">
            <a
              href="http://keenthemes.com/metronic"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link pr-3 pl-0"
            >
              About
            </a>
            <a
              href="http://keenthemes.com/metronic"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link px-3"
            >
              Team
            </a>
            <a
              href="http://keenthemes.com/metronic"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link pl-3 pr-0"
            >
              Contact
            </a>
          </div>
          {/* end::Nav */}
        </div>
        {/* end::Container */}
      </div>
      {/* end::Footer */}
    </>
  );
}
