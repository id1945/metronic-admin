/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import {Dropdown} from "react-bootstrap";
import {toAbsoluteUrl} from "../../../_helpers";
import {DropdownCustomToggler, DropdownMenu4} from "../../dropdowns";

export function ListsWidget1({ className }) {
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Tasks Overview
          </h3>
          <div className="card-toolbar">
            <Dropdown className="dropdown-inline" alignRight>
              <Dropdown.Toggle
                className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                variant="transparent"
                id="dropdown-toggle-top"
                as={DropdownCustomToggler}
               >
                <i className="ki ki-bold-more-hor" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <DropdownMenu4 />
              </Dropdown.Menu>
            </Dropdown>            
          </div>
        </div>

        {/* Body */}
        <div className="card-body pt-2">
          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-primary mr-5">
              <span className="symbol-label">
                <span className="svg-icon svg-icon-lg svg-icon-primary">
                  <SVG
                    className="h-75 align-self-end"
                    src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}
                  ></SVG>
                </span>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold">
              <a
                href="#"
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                Project Briefing
              </a>
              <span className="text-muted">Project Manager</span>
            </div>
          </div>

          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-warning mr-5">
              <span className="symbol-label">
                <span className="svg-icon svg-icon-lg svg-icon-warning">
                  <SVG
                    className="h-75 align-self-end"
                    src={toAbsoluteUrl(
                      "/media/svg/icons/Communication/Write.svg"
                    )}
                  ></SVG>
                </span>
              </span>
            </div>
            <div className="d-flex flex-column font-weight-bold">
              <a
                href="#"
                className="text-dark-75 text-hover-primary mb-1 font-size-lg"
              >
                Concept Design
              </a>
              <span className="text-muted">Art Director</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-success mr-5">
              <span className="symbol-label">
                <span className="svg-icon svg-icon-lg svg-icon-success">
                  <SVG
                    className="h-75 align-self-end"
                    src={toAbsoluteUrl(
                      "/media/svg/icons/Communication/Group-chat.svg"
                    )}
                  ></SVG>
                </span>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold">
              <a
                href="#"
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                Functional Logics
              </a>
              <span className="text-muted">Lead Developer</span>
            </div>
          </div>

          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-danger mr-5">
              <span className="symbol-label">
                <span className="svg-icon svg-icon-lg svg-icon-danger">
                  <SVG
                    className="h-75 align-self-end"
                    src={toAbsoluteUrl(
                      "/media/svg/icons/General/Attachment2.svg"
                    )}
                  ></SVG>
                </span>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold">
              <a
                href="#"
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                Development
              </a>
              <span className="text-muted">DevOps</span>
            </div>
          </div>

          <div className="d-flex align-items-center mb-2">
            <div className="symbol symbol-40 symbol-light-info mr-5">
              <span className="symbol-label">
                <span className="svg-icon svg-icon-lg  svg-icon-info">
                  <SVG
                    className="h-75 align-self-end"
                    src={toAbsoluteUrl(
                      "/media/svg/icons/Communication/Shield-user.svg"
                    )}
                  ></SVG>
                </span>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold">
              <a
                href="#"
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                Testing
              </a>
              <span className="text-muted">QA Managers</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
