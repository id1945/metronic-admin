/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {Link} from "react-router-dom";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

export function StickyToolbar() {
  return (
    <>
      <ul className="sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 mt-4">
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip id="layout-tooltip">Layout Builder</Tooltip>}
        >
          <li className="nav-item mb-2" data-placement="left">
            <Link
              to="/builder"
              className="btn btn-sm btn-icon btn-bg-light btn-text-primary btn-hover-primary"
            >
              <i className="flaticon2-gear"></i>
            </Link>
          </li>
        </OverlayTrigger>

        <OverlayTrigger
          placement="left"
          overlay={<Tooltip id="documentations-tooltip">Documentation</Tooltip>}
        >
          <li className="nav-item mb-2" data-placement="left">
            <a
              className="btn btn-sm btn-icon btn-bg-light btn-text-warning btn-hover-warning"
              target="_blank"
              rel="noopener noreferrer"
              href="https://keenthemes.com/metronic/?page=docs&section=react-quick-start"
            >
              <i className="flaticon2-telegram-logo"></i>
            </a>
          </li>
        </OverlayTrigger>
      </ul>
    </>
  );
}
