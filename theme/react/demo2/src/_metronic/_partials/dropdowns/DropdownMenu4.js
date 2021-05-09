/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

export function DropdownMenu4() {
    return <>
        {/*begin::Navigation*/}
        <ul className="navi navi-hover py-5">
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-drop"></i></span>
                    <span className="navi-text">New Group</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-list-3"></i></span>
                    <span className="navi-text">Contacts</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-rocket-1"></i></span>
                    <span className="navi-text">Groups</span>
                    <span className="navi-link-badge">
                <span className="label label-light-primary label-inline font-weight-bold">new</span>
            </span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-bell-2"></i></span>
                    <span className="navi-text">Calls</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-gear"></i></span>
                    <span className="navi-text">Settings</span>
                </a>
            </li>

            <li className="navi-separator my-3"></li>

            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-magnifier-tool"></i></span>
                    <span className="navi-text">Help</span>
                </a>
            </li>
            <li className="navi-item">
                <a href="#" className="navi-link">
                    <span className="navi-icon"><i className="flaticon2-bell-2"></i></span>
                    <span className="navi-text">Privacy</span>
                    <span className="navi-link-badge">
                <span className="label label-light-danger label-rounded font-weight-bold">5</span>
            </span>
                </a>
            </li>
        </ul>
        {/*end::Navigation*/}

    </>
}
