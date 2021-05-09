/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown } from "react-bootstrap";
import { DropdownCustomToggler, DropdownMenu3 } from "../../dropdowns";

export function ListsWidget10({ className }) {
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Notifications
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
                <DropdownMenu3 />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Body */}
        <div className="card-body pt-0">
          <div className="mb-6">
            <div className="d-flex align-items-center flex-grow-1">
              <label className="checkbox checkbox-lg checkbox-lg checkbox-single flex-shrink-0 mr-4">
                <input type="checkbox" value="1" />
                <span></span>
              </label>

              <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                <div className="d-flex flex-column align-items-cente py-2 w-75">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1"
                  >
                    Daily Standup Meeting
                  </a>

                  <span className="text-muted font-weight-bold">
                    Due in 2 Days
                  </span>
                </div>

                <span className="label label-lg label-light-primary label-inline font-weight-bold py-4">
                  Approved
                </span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="d-flex align-items-center flex-grow-1">
              <label className="checkbox checkbox-lg checkbox-lg checkbox-single flex-shrink-0 mr-4">
                <input type="checkbox" value="1" />
                <span></span>
              </label>

              {/* begin::Section */}
              <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                {/* begin::Info */}
                <div className="d-flex flex-column align-items-cente py-2 w-75">
                  {/* begin::Title */}
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1"
                  >
                    Group Town Hall Meet-up with showcase
                  </a>
                  {/* end::Title */}

                  {/* begin::Data */}
                  <span className="text-muted font-weight-bold">
                    Due in 2 Days
                  </span>
                  {/* end::Data */}
                </div>
                {/* end::Info */}

                {/* begin::Label */}
                <span className="label label-lg label-light-warning label-inline font-weight-bold py-4">
                  In Progress
                </span>
                {/* end::Label */}
              </div>
              {/* end::Section */}
            </div>
            {/* end::Content */}
          </div>
          {/* end::Item */}

          {/* begin::Item */}
          <div className="mb-6">
            {/* begin::Content */}
            <div className="d-flex align-items-center flex-grow-1">
              {/* begin::Checkbox */}
              <label className="checkbox checkbox-lg checkbox-lg checkbox-single flex-shrink-0 mr-4">
                <input type="checkbox" value="1" />
                <span></span>
              </label>
              {/* end::Checkbox */}

              {/* begin::Section */}
              <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                {/* begin::Info */}
                <div className="d-flex flex-column align-items-cente py-2 w-75">
                  {/* begin::Title */}
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1"
                  >
                    Next sprint planning and estimations
                  </a>
                  {/* end::Title */}

                  {/* begin::Data */}
                  <span className="text-muted font-weight-bold">
                    Due in 2 Days
                  </span>
                  {/* end::Data */}
                </div>
                {/* end::Info */}

                {/* begin::Label */}
                <span className="label label-lg label-light-success label-inline font-weight-bold py-4">
                  Success
                </span>
                {/* end::Label */}
              </div>
              {/* end::Section */}
            </div>
            {/* end::Content */}
          </div>
          {/* end::Item */}

          {/* begin::Item */}
          <div className="mb-6">
            {/* begin::Content */}
            <div className="d-flex align-items-center flex-grow-1">
              {/* begin::Checkbox */}
              <label className="checkbox checkbox-lg checkbox-lg checkbox-single flex-shrink-0 mr-4">
                <input type="checkbox" value="1" />
                <span></span>
              </label>
              {/* end::Checkbox */}

              {/* begin::Section */}
              <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                {/* begin::Info */}
                <div className="d-flex flex-column align-items-cente py-2 w-75">
                  {/* begin::Title */}
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1"
                  >
                    Sprint delivery and project deployment
                  </a>
                  {/* end::Title */}

                  {/* begin::Data */}
                  <span className="text-muted font-weight-bold">
                    Due in 2 Days
                  </span>
                  {/* end::Data */}
                </div>
                {/* end::Info */}

                {/* begin::Label */}
                <span className="label label-lg label-light-danger label-inline font-weight-bold py-4">
                  Rejected
                </span>
                {/* end::Label */}
              </div>
              {/* end::Section */}
            </div>
            {/* end::Content */}
          </div>
          {/* end: Item */}

          {/* begin: Item */}
          <div className="">
            {/* begin::Content */}
            <div className="d-flex align-items-center flex-grow-1">
              {/* begin::Checkbox */}
              <label className="checkbox checkbox-lg checkbox-lg checkbox-single flex-shrink-0 mr-4">
                <input type="checkbox" value="1" />
                <span></span>
              </label>
              {/* end::Checkbox */}

              {/* begin::Section */}
              <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                {/* begin::Info */}
                <div className="d-flex flex-column align-items-cente py-2 w-75">
                  {/* begin::Title */}
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1"
                  >
                    Data analytics research showcase
                  </a>
                  {/* end::Title */}

                  {/* begin::Data */}
                  <span className="text-muted font-weight-bold">
                    Due in 2 Days
                  </span>
                  {/* end::Data */}
                </div>
                {/* end::Info */}

                {/* begin::Label */}
                <span className="label label-lg label-light-warning label-inline font-weight-bold py-4">
                  In Progress
                </span>
                {/* end::Label */}
              </div>
              {/* end::Section */}
            </div>
            {/* end::Content */}
          </div>
          {/* end: Item */}
        </div>
      </div>
    </>
  );
}
