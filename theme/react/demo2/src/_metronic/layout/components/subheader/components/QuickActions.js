/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { forwardRef } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownMenu4 } from "../../../../_partials/dropdowns";

const QuickActionsDropdownToggle = forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        props.onClick(e);
      }}
      id="kt_subheader_quick_actions"
      className="btn btn-white font-weight-bold py-3 px-6"
    >
      Actions
    </button>
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
            <DropdownMenu4 />
          </Dropdown.Menu>
        </Dropdown>
      </OverlayTrigger>
    </>
  );
}
