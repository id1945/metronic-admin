/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export function BreadCrumbs({ items }) {
  if (!items || !items.length) {
    return "";
  }

  return (
    <div className="d-flex align-items-center font-weight-bold my-2">
      <Link className="opacity-75 hover-opacity-100" to="/dashboard">
        <i className="flaticon2-shelter text-white icon-1x" />
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="label label-dot label-sm bg-white opacity-75 mx-3" />
          <Link
            className="text-white text-hover-white opacity-75 hover-opacity-100"
            to={{ pathname: item.pathname }}
          >
            {item.title}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
