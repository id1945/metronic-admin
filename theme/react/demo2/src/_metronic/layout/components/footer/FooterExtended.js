/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { toAbsoluteUrl } from "../../../_helpers";

export function FooterExtended({
  today,
  footerClasses,
  footerContainerClasses,
}) {
  const bgStyle = toAbsoluteUrl("/media/bg/bg-2.jpg");
  return (
    <>
      {/* begin::Footer */}
      <div
        className={`footer ${footerClasses} kt-grid__item bgi-position-center-center bgi-size-cover bgi-no-cover`}
        id="kt_footer"
        style={{ backgroundImage: `url("${bgStyle}")` }}
      >
        {/* begin::Container */}
        <div className={`${footerContainerClasses} py-lg-18 py-8`}>
          {/* begin::Row */}
          <div className="row">
            {/* begin::Col */}
            <div className="col-lg-4 my-lg-">
              <h4 className="text-white pb-3">About</h4>
              <p className="m-0 text-white opacity-45">
                Lorem Ipsum is simply dummy text of the printing
                <br />
                and typesetting and typesetting industry has been the <br />
                industry's standard dummy text ever since the 1500s,
                <br />
                when an unknown printer took a galley of type.
              </p>
            </div>
            {/* end::Col */}

            {/* begin::Col */}
            <div className="col-lg-4 my-lg-0 my-5">
              <h4 className="text-white pb-3">Quick Links</h4>
              <div className="d-flex align-items-center">
                <div className="d-flex flex-column mr-18">
                  <a
                    href="#"
                    className="text-white opacity-55 text-hover-primary"
                  >
                    General Reports
                  </a>
                  <a
                    href="#"
                    className="py-2 text-white opacity-55 text-hover-primary"
                  >
                    Dashboart Widgets
                  </a>
                  <a
                    href="#"
                    className="text-white opacity-50 text-hover-primary"
                  >
                    Custom Pages
                  </a>
                </div>
                <div className="d-flex flex-column">
                  <a
                    href="#"
                    className="text-white opacity-55 text-hover-primary"
                  >
                    User Setting
                  </a>
                  <a
                    href="#"
                    className="py-2 text-white opacity-55 text-hover-primary"
                  >
                    Custom Pages
                  </a>
                  <a
                    href="#"
                    className="text-white opacity-55 text-hover-primary"
                  >
                    Intranet Settings
                  </a>
                </div>
              </div>
            </div>
            {/* end::Col */}

            {/* begin::Col */}
            <div className="col-lg-4 my-lg-0 my-5">
              <h4 className="text-white pb-3">Get In Touch</h4>
              <form
                className="rounded"
                style={{ backgroundColor: "rgba(0,0,0,.2);" }}
              >
                <div className="input-group p-2 align-items-center">
                  <input
                    type="text"
                    className="form-control rounded-right border-0 bg-transparent text-white opacity-80"
                    placeholder="Enter Your Email"
                  />
                  <div className="input-group-append p-0 mr-1">
                    <button
                      className="btn btn-fh btn-sm  btn-primary px-6 rounded-left"
                      type="button"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* end::Col */}
          </div>
          {/* end::Row */}
        </div>
        {/* end::Container */}

        {/* begin::Container */}
        <div className="separator separator-solid opacity-7"></div>
        {/* end::Container */}

        {/* begin::Container */}
        <div className={`${footerContainerClasses} py-8`}>
          <div className="d-flex align-items-center justify-content-between flex-lg-row flex-column">
            {/* begin::Copyright */}
            <div className="d-flex align-items-center order-lg-1 order-2">
              <img
                alt="Logo"
                src={toAbsoluteUrl("/media/logos/logo-letter-1.png")}
                className="logo-sticky max-h-35px"
              />
              <span className="text-muted font-weight-bold mx-2">
                {today} ©
              </span>
              <a
                href="http://keenthemes.com/metronic"
                rel="noopener noreferrer"
                target="_blank"
                className="text-primary text-hover-primary"
              >
                Keenthemes
              </a>
            </div>
            {/* end::Copyright */}

            {/* begin::Nav */}
            <div className="d-flex align-items-center order-lg-2 order-1 mb-lg-0 mb-5">
              <a
                href="http://keenthemes.com/metronic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white opacity-55 pl-0 text-hover-primary"
              >
                Purchase Lisence
              </a>
              <a
                href="http://keenthemes.com/metronic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white opacity-55 px-6 text-hover-primary"
              >
                Team
              </a>
              <a
                href="http://keenthemes.com/metronic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white opacity-55 pr-0 text-hover-primary"
              >
                Contact
              </a>
            </div>
            {/* end::Nav */}
          </div>
        </div>
        {/* end::Container */}
      </div>
      {/* end:Footer */}
    </>
  );
}
