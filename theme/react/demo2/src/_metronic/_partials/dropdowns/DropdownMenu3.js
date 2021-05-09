/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

export function DropdownMenu3() {
    return <>
        {/*begin::Naviigation*/}
        <ul className="navi">
            <li className="navi-header font-weight-bold py-5">
                <span className="font-size-lg">Add New:</span>
                <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right"
                   title="Click to learn more..."></i>
            </li>
            <li className="navi-separator mb-3 opacity-70"></li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-shopping-cart-1"></i></span>
                    <span className="navi-text">Order</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="navi-icon flaticon2-calendar-8"></i></span>
                    <span className="navi-text">Members</span>
                    <span className="navi-label">
                <span className="label label-light-danger label-rounded font-weight-bold">3</span>
            </span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="navi-icon flaticon2-telegram-logo"></i></span>
                    <span className="navi-text">Project</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="navi-icon flaticon2-new-email"></i></span>
                    <span className="navi-text">Record</span>
                    <span className="navi-label">
                <span className="label label-light-success label-rounded font-weight-bold">5</span>
            </span>
                </a>
            </li>
            <li className="navi-separator mt-3 opacity-70"></li>
            <li className="navi-footer pt-5 pb-4">
                <a className="btn btn-light-primary font-weight-bolder btn-sm" href="#">More options</a>
                <a className="btn btn-clean font-weight-bold btn-sm d-none" href="#" data-toggle="tooltip"
                   data-placement="right" title="Click to learn more...">Learn more</a>
            </li>
        </ul>
        {/*end::Naviigation*/}
    </>
}
