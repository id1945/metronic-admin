/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

export function DropdownMenu2() {
    return <>
        {/*begin::Navigation*/}
        <ul className="navi navi-hover">
            <li className="navi-header pb-1">
                <span className="text-primary text-uppercase font-weight-bold font-size-sm">Add new:</span>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-shopping-cart-1"></i></span>
                    <span className="navi-text">Order</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-calendar-8"></i></span>
                    <span className="navi-text">Event</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-graph-1"></i></span>
                    <span className="navi-text">Report</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-rocket-1"></i></span>
                    <span className="navi-text">Post</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-writing"></i></span>
                    <span className="navi-text">File</span>
                </a>
            </li>
        </ul>
        {/*end::Navigation*/}
    </>
}
