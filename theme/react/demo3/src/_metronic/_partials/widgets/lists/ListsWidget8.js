/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import {Dropdown} from "react-bootstrap";
import {toAbsoluteUrl} from "../../../_helpers";
import {DropdownCustomToggler, DropdownMenu2} from "../../dropdowns";

export function ListsWidget8({ className }) {
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">Trends</h3>
          <div className="card-toolbar">
            <Dropdown className="dropdown-inline" alignRight>
              <Dropdown.Toggle
                variant="transparent"
                id="dropdown-toggle-top"
                className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                as={DropdownCustomToggler}>
                <i className="ki ki-bold-more-hor" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <DropdownMenu2 />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        {/* Body */}
        <div className="card-body pt-0">
          <div className="mb-10">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45 symbol-light mr-5">
                <span className="symbol-label">
                  <SVG
                    className="h-50 align-self-center"
                    src={toAbsoluteUrl("/media/svg/misc/006-plurk.svg")}
                  ></SVG>
                </span>
              </div>

              <div className="d-flex flex-column flex-grow-1">
                <a
                  href="#"
                  className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  Top Authors
                </a>
                <span className="text-muted font-weight-bold">5 day ago</span>
              </div>
            </div>

            <p className="text-dark-50 m-0 pt-5 font-weight-normal">
              A brief write up about the top Authors that fits within this
              section
            </p>
          </div>

          <div className="mb-10">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45 symbol-light mr-5">
                <span className="symbol-label">
                  <SVG
                    className="h-50 align-self-center"
                    src={toAbsoluteUrl("/media/svg/misc/015-telegram.svg")}
                  ></SVG>
                </span>
              </div>

              <div className="d-flex flex-column flex-grow-1">
                <a
                  href="#"
                  className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  Popular Authors
                </a>
                <span className="text-muted font-weight-bold">5 day ago</span>
              </div>
            </div>

            <p className="text-dark-50 m-0 pt-5 font-weight-normal">
              A brief write up about the Popular Authors that fits within this
              section
            </p>
          </div>

          <div className="">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45 symbol-light mr-5">
                <span className="symbol-label">
                  <SVG
                    className="h-50 align-self-center"
                    src={toAbsoluteUrl("/media/svg/misc/014-kickstarter.svg")}
                  ></SVG>
                </span>
              </div>

              <div className="d-flex flex-column flex-grow-1">
                <a
                  href="#"
                  className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  New Users
                </a>
                <span className="text-muted font-weight-bold">5 day ago</span>
              </div>
            </div>

            <p className="text-dark-50 m-0 pt-5 font-weight-normal">
              A brief write up about the New Users that fits within this section
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
