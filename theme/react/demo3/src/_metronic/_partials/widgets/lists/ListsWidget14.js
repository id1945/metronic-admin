/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown } from "react-bootstrap";
import { DropdownCustomToggler, DropdownMenu1 } from "../../dropdowns";
import { toAbsoluteUrl } from "../../../_helpers";

export function ListsWidget14({ className }) {
  return (
    <>
      {/* begin::List Widget 14 */}
      <div className={`card card-custom ${className}`}>
        {/* begin::Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Market Leaders
          </h3>
          <div className="card-toolbar">
            <Dropdown className="dropdown-inline" alignRight>
              <Dropdown.Toggle
                id="dropdown-toggle-top"
                as={DropdownCustomToggler}
              >
                <i className="ki ki-bold-more-ver" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <DropdownMenu1 />{" "}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body pt-2">
          {/* begin::Item */}
          <div className="d-flex flex-wrap align-items-center mb-10">
            {/* begin::Symbol */}
            <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
              <div
                className="symbol-label"
                style={{
                  backgroundImage: `url('${toAbsoluteUrl(
                    "/media/stock-600x400/img-17.jpg"
                  )}')`,
                }}
              ></div>
            </div>
            {/* end::Symbol */}

            {/* begin::Title */}
            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
              <a
                href="#"
                className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
              >
                Cup & Green
              </a>
              <span className="text-muted font-weight-bold font-size-sm my-1">
                Local, clean & environmental
              </span>
              <span className="text-muted font-weight-bold font-size-sm">
                Created by:{" "}
                <span className="text-primary font-weight-bold">CoreAd</span>
              </span>
            </div>
            {/* end::Title */}

            {/* begin::Info */}
            <div className="d-flex align-items-center py-lg-0 py-2">
              <div className="d-flex flex-column text-right">
                <span className="text-dark-75 font-weight-bolder font-size-h4">
                  24,900
                </span>
                <span className="text-muted font-size-sm font-weight-bolder">
                  votes
                </span>
              </div>
            </div>
            {/* end::Info */}
          </div>
          {/* end::Item */}

          {/* begin: Item */}
          <div className="d-flex flex-wrap align-items-center mb-10">
            {/* begin::Symbol */}
            <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
              <div
                className="symbol-label"
                style={{
                  backgroundImage: `url('${toAbsoluteUrl(
                    "/media/stock-600x400/img-10.jpg"
                  )}')`,
                }}
              ></div>
            </div>
            {/* end::Symbol */}

            {/* begin::Title */}
            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
              <a
                href="#"
                className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
              >
                Yellow Background
              </a>
              <span className="text-muted font-weight-bold font-size-sm my-1">
                Strong abstract concept
              </span>
              <span className="text-muted font-weight-bold font-size-sm">
                Created by:{" "}
                <span className="text-primary font-weight-bold">
                  KeenThemes
                </span>
              </span>
            </div>
            {/* end::Title */}

            {/* begin::Info */}
            <div className="d-flex align-items-center py-lg-0 py-2">
              <div className="d-flex flex-column text-right">
                <span className="text-dark-75 font-weight-bolder font-size-h4">
                  70,380
                </span>
                <span className="text-muted font-weight-bolder font-size-sm">
                  votes
                </span>
              </div>
            </div>
            {/* end::Info */}
          </div>
          {/* end: Item */}

          {/* begin::Item */}
          <div className="d-flex flex-wrap align-items-center mb-10">
            {/* begin::Symbol */}
            <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
              <div
                className="symbol-label"
                style={{
                  backgroundImage: `url('${toAbsoluteUrl(
                    "/media/stock-600x400/img-1.jpg"
                  )}')`,
                }}
              ></div>
            </div>
            {/* end::Symbol */}

            {/* begin::Title */}
            <div className="d-flex flex-column flex-grow-1 pr-3">
              <a
                href="#"
                className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
              >
                Nike & Blue
              </a>
              <span className="text-muted font-weight-bold font-size-sm my-1">
                Footwear overalls
              </span>
              <span className="text-muted font-weight-bold font-size-sm">
                Created by:{" "}
                <span className="text-primary font-weight-bold">
                  Invision Inc.
                </span>
              </span>
            </div>
            {/* end::Title */}

            {/* begin::Info */}
            <div className="d-flex align-items-center py-lg-0 py-2">
              <div className="d-flex flex-column text-right">
                <span className="text-dark-75 font-size-h4 font-weight-bolder">
                  7,200
                </span>
                <span className="text-muted font-size-sm font-weight-bolder">
                  votes
                </span>
              </div>
            </div>
            {/* end::Info */}
          </div>
          {/* end::Item */}

          {/* begin::Item */}
          <div className="d-flex flex-wrap align-items-center mb-10">
            {/* begin::Symbol */}
            <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
              <div
                className="symbol-label"
                style={{
                  backgroundImage: `url('${toAbsoluteUrl(
                    "/media/stock-600x400/img-9.jpg"
                  )}')`,
                }}
              ></div>
            </div>
            {/* end::Symbol */}

            {/* begin::Title */}
            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
              <a
                href="#"
                className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
              >
                Desserts platter
              </a>
              <span className="text-muted font-size-sm font-weight-bold my-1">
                Food trends & reviews
              </span>
              <span className="text-muted font-size-sm font-weight-bold">
                Created by:{" "}
                <span className="text-primary font-weight-bold">
                  Figma Studio
                </span>
              </span>
            </div>
            {/* end::Title */}

            {/* begin::Info */}
            <div className="d-flex align-items-center py-lg-0 py-2">
              <div className="d-flex flex-column text-right">
                <span className="text-dark-75 font-size-h4 font-weight-bolder">
                  36,450
                </span>
                <span className="text-muted font-size-sm font-weight-bolder">
                  votes
                </span>
              </div>
            </div>
            {/* end::Info */}
          </div>
          {/* end::Item */}

          {/* begin::Item */}
          <div className="d-flex flex-wrap align-items-center">
            {/* begin::Symbol */}
            <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
              <div
                className="symbol-label"
                style={{
                  backgroundImage: `url('${toAbsoluteUrl(
                    "/media/stock-600x400/img-12.jpg"
                  )}')`,
                }}
              ></div>
            </div>
            {/* end::Symbol */}

            {/* begin::Title */}
            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
              <a
                href="#"
                className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
              >
                Cup & Green
              </a>
              <span className="text-muted font-weight-bold font-size-sm my-1">
                Local, clean & environmental
              </span>
              <span className="text-muted font-weight-bold font-size-sm">
                Created by:{" "}
                <span className="text-primary font-weight-bold">CoreAd</span>
              </span>
            </div>
            {/* end::Title */}

            {/* begin::Info */}
            <div className="d-flex align-items-center py-lg-0 py-2">
              <div className="d-flex flex-column text-right">
                <span className="text-dark-75 font-weight-bolder font-size-h4">
                  23,900
                </span>
                <span className="text-muted font-size-sm font-weight-bolder">
                  votes
                </span>
              </div>
            </div>
            {/* end::Info */}
          </div>
          {/* end::Item */}
        </div>
        {/* end::Body */}
      </div>
      {/* end::List Widget 14 */}
    </>
  );
}
