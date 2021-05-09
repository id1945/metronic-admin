import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_helpers";

export function Brand() {
  return (
    <>
      {/* begin::Brand */}
      <div
        className={`aside-brand d-flex flex-column align-items-center flex-column-auto py-5 py-lg-12`}
      >
        {/* begin::Logo */}
        <Link to="" className="brand-logo">
          <img
            alt="logo"
            src={toAbsoluteUrl("/media/logos/logo-letter-2.png")}
            className="max-h-30px"
          />
        </Link>
        {/* end::Logo */}
      </div>
      {/* end::Brand */}
    </>
  );
}
