/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import objectPath from "object-path";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownItemToggler } from "../../../../_partials/dropdowns";

export function QuickActionsDropdown() {
  const bgImage = toAbsoluteUrl("/media/misc/bg-2.jpg");
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas:
        objectPath.get(uiService.config, "extras.quick-actions.layout") ===
        "offcanvas",
    };
  }, [uiService]);

  return (
    <>
      {layoutProps.offcanvas && (
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip id="quick-actions-tooltip">Quick actions</Tooltip>}
        >
          <div className="topbar-item">
            <div
              className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1"
              id="kt_quick_actions_toggle"
            >
              <span className="svg-icon svg-icon-xl svg-icon-primary">
                <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Media/Equalizer.svg")}
                />
              </span>
            </div>
          </div>
        </OverlayTrigger>
      )}
      {!layoutProps.offcanvas && (
        <Dropdown drop="down" alignRight>
          <Dropdown.Toggle
            as={DropdownItemToggler}
            id="kt_quick_actions_panel_toggle"
          >
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="quick-actions-tooltip">Quick actions</Tooltip>
              }
            >
              <div className="btn btn-icon btn-hover-transparent-white btn-dropdown btn-lg mr-1">
                <span className="svg-icon svg-icon-xl">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Media/Equalizer.svg")}
                  />
                </span>
              </div>
            </OverlayTrigger>
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
            <form>
              {/* begin: Head */}
              <div
                className="d-flex flex-column align-items-center justify-content-center pt-10 pb-10 bgi-size-cover bgi-no-repeat rounded-top"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                <h3 className="text-white font-weight-bold font-size-5">
                  Quick Actions
                </h3>
                <span className="btn btn-success btn-sm btn-bold btn-font-md mt-2">
                  23 tasks pending
                </span>
              </div>
              {/* end: Head */}

              <div className="row row-paddingless">
                <div className="col-6">
                  <a
                    href="#"
                    className="d-block py-10 px-5 text-center bg-hover-light border-right border-bottom"
                  >
                    <span className="svg-icon svg-icon-3x svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Shopping/Euro.svg"
                        )}
                      ></SVG>
                    </span>
                    <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">
                      Accounting
                    </span>
                    <span className="d-block text-dark-50 font-size-lg">
                      eCommerce
                    </span>
                  </a>
                </div>

                <div className="col-6">
                  <a
                    href="#"
                    className="d-block py-10 px-5 text-center bg-hover-light border-bottom"
                  >
                    {" "}
                    <span className="svg-icon svg-icon-3x svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Mail-attachment.svg"
                        )}
                      ></SVG>
                    </span>
                    <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">
                      Administration
                    </span>
                    <span className="d-block text-dark-50 font-size-lg">
                      Console
                    </span>
                  </a>
                </div>

                <div className="col-6">
                  <a
                    href="#"
                    className="d-block py-10 px-5 text-center bg-hover-light border-right"
                  >
                    <span className="svg-icon svg-icon-3x svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Shopping/Box2.svg"
                        )}
                      ></SVG>
                    </span>
                    <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">
                      Projects
                    </span>
                    <span className="d-block text-dark-50 font-size-lg">
                      Pending Tasks
                    </span>
                  </a>
                </div>

                <div className="col-6">
                  <a
                    href="#"
                    className="d-block py-10 px-5 text-center bg-hover-light"
                  >
                    <span className="svg-icon svg-icon-3x svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Group.svg"
                        )}
                      ></SVG>
                    </span>
                    <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">
                      Customers
                    </span>
                    <span className="d-block text-dark-50 font-size-lg">
                      Latest cases
                    </span>
                  </a>
                </div>
              </div>
            </form>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
}
