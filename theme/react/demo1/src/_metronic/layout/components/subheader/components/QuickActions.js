/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {forwardRef} from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import SVG from "react-inlinesvg";
import {DropdownMenu1} from "../../../../_partials/dropdowns";
import {toAbsoluteUrl} from "../../../../_helpers";

const QuickActionsDropdownToggle = forwardRef((props, ref) => {
  return (
    <a
      ref={ref}
      href="#"
      onClick={e => {
        e.preventDefault();
        props.onClick(e);
      }}
      id="kt_subheader_quick_actions"
      className="btn btn-sm btn-clean btn-icon"
    >
      {" "}
      <span className="svg-icon svg-icon-success svg-icon-lg">
        <span className="svg-icon-success svg-icon-2x">
          <SVG  src={toAbsoluteUrl("/media/svg/icons/Files/File-plus.svg")} />
        </span>
      </span>
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
