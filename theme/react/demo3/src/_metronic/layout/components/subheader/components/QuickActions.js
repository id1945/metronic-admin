/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { forwardRef } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownMenu1 } from "../../../../_partials/dropdowns";

const QuickActionsDropdownToggle = forwardRef((props, ref) => {
  return (
    <a
      href="#"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        props.onClick(e);
      }}
      id="kt_subheader_quick_actions"
      className={`btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2`}
    >
      <span className="svg-icon svg-icon-lg">
        <SVG src={toAbsoluteUrl("/media/svg/icons/Files/File.svg")} />
      </span>
      {` `}New Report
    </a>
  );
});

export function QuickActions() {
  return (
    <>
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id="quick-actions-tooltip">Quick actions</Tooltip>}
      >
        <Dropdown className="dropdown-inline" drop="down" alignRight>
          <Dropdown.Toggle
            as={QuickActionsDropdownToggle}
            id="dropdown-toggle-quick-actions-subheader"
          />

          <Dropdown.Menu className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
            <DropdownMenu1 />
          </Dropdown.Menu>
        </Dropdown>
      </OverlayTrigger>
    </>
  );
}
