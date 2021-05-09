/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector, shallowEqual } from "react-redux";
import objectPath from "object-path";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { UserProfileDropdown } from "./dropdowns/UserProfileDropdown";

export function QuickUserToggler() {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas:
        objectPath.get(uiService.config, "extras.user.layout") === "offcanvas",
    };
  }, [uiService]);

  return (
    <>
      {layoutProps.offcanvas && (
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="quick-user-tooltip">View user</Tooltip>}
        >
          <div className="topbar-item">
            <div
              className="btn btn-icon btn-hover-transparent-white d-flex align-items-center btn-lg px-md-2 w-md-auto"
              id="kt_quick_user_toggle"
            >
              <span className="text-white opacity-70 font-weight-bold font-size-base d-none d-md-inline mr-1">
                Hi,
              </span>
              <span className="text-white opacity-90 font-weight-bolder font-size-base d-none d-md-inline mr-4">
                {user.firsname} {user.lastname}
              </span>
              <span className="symbol symbol-35">
                <span className="symbol-label text-white font-size-h5 font-weight-bold bg-white-o-30">
                  {user.fullname[0]}
                </span>
              </span>
            </div>
          </div>
        </OverlayTrigger>
      )}

      {!layoutProps.offcanvas && <UserProfileDropdown />}
    </>
  );
}
