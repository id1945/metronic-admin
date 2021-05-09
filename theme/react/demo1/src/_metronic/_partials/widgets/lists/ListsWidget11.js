/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { Dropdown } from "react-bootstrap";
import { DropdownCustomToggler, DropdownMenu4 } from "../../dropdowns";
import { toAbsoluteUrl } from "../../../_helpers";

export function ListsWidget11({ className }) {
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">Trends</h3>

          <div className="card-toolbar">
            <Dropdown className="dropdown-inline" alignRight>
              <Dropdown.Toggle
                id="dropdown-toggle-top"
                as={DropdownCustomToggler}
              >
                <i className="ki ki-bold-more-ver" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <DropdownMenu4 />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Body */}
        <div className="card-body pt-0">
          <div className="d-flex align-items-center mb-9 bg-light-warning rounded p-5">
            <span className="svg-icon svg-icon-warning mr-5 svg-icon-lg">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}
              ></SVG>
            </span>

            <div className="d-flex flex-column flex-grow-1 mr-2">
              <a
                href="#"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                Group lunch celebration
              </a>
              <span className="text-muted font-weight-bold">Due in 2 Days</span>
            </div>

            <span className="font-weight-bolder text-warning py-1 font-size-lg">
              +28%
            </span>
          </div>

          <div className="d-flex align-items-center bg-light-success rounded p-5 mb-9">
            <span className="svg-icon svg-icon-success mr-5 svg-icon-lg">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
              ></SVG>
            </span>
            <div className="d-flex flex-column flex-grow-1 mr-2">
              <a
                href="#"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                Home navigation optimization
              </a>
              <span className="text-muted font-weight-bold">Due in 2 Days</span>
            </div>

            <span className="font-weight-bolder text-success py-1 font-size-lg">
              +50%
            </span>
          </div>

          <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-9">
            <span className="svg-icon svg-icon-danger mr-5 svg-icon-lg">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Group-chat.svg"
                )}
              ></SVG>
            </span>

            <div className="d-flex flex-column flex-grow-1 mr-2">
              <a
                href="#"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                Rebrand strategy planning
              </a>
              <span className="text-muted font-weight-bold">Due in 2 Days</span>
            </div>

            <span className="font-weight-bolder text-danger py-1 font-size-lg">
              -27%
            </span>
          </div>

          <div className="d-flex align-items-center bg-light-info rounded p-5">
            <span className="svg-icon svg-icon-info mr-5 svg-icon-lg">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/General/Attachment2.svg")}
              ></SVG>
            </span>

            <div className="d-flex flex-column flex-grow-1 mr-2">
              <a
                href="#"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                Product goals strategy meet-up
              </a>
              <span className="text-muted font-weight-bold">Due in 2 Days</span>
            </div>

            <span className="font-weight-bolder text-info py-1 font-size-lg">
              +8%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
