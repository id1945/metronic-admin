/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";

const perfectScrollbarOptions = {
  wheelSpeed: 2,
  wheelPropagation: false,
};

export function MyCartDropdown() {
  const bgImage = toAbsoluteUrl("/media/misc/bg-1.jpg");
  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-my-cart-toggle"
      >
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip id="mycart-panel-tooltip">User Cart</Tooltip>}
        >
          <div className="btn btn-icon btn-clean btn-lg mr-1">
            <span className="svg-icon svg-icon-xl svg-icon-primary">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Cart3.svg")} />
            </span>
          </div>
        </OverlayTrigger>
      </Dropdown.Toggle>
      <Dropdown.Menu className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg">
        <form>
          <div
            className="d-flex align-items-center py-10 px-8 bgi-size-cover bgi-no-repeat rounded-top"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <span className="btn btn-md btn-icon bg-white-o-15 mr-4">
              <i className="flaticon2-shopping-cart-1 text-success"></i>
            </span>
            <h4 className="text-white m-0 flex-grow-1 mr-3">My Cart</h4>
            <button type="button" className="btn btn-success btn-sm">
              2 Items
            </button>
          </div>
          <PerfectScrollbar
            options={perfectScrollbarOptions}
            className="scroll"
            style={{ maxHeight: "35vh", position: "relative" }}
          >
            <div className="d-flex align-items-center justify-content-between p-8">
              <div className="d-flex flex-column mr-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark-75 font-size-lg text-hover-primary"
                >
                  iBlender
                </a>
                <span className="text-muted">Best kichen badge in 2020</span>
                <div className="d-flex align-items-center mt-2">
                  <span className="font-weight-bold mr-1 text-dark-75 font-size-3">
                    $ 350
                  </span>
                  <span className="text-muted mr-1">for</span>
                  <span className="font-weight-bold mr-2 text-dark-75 font-size-3">
                    5
                  </span>
                  <a
                    href="#"
                    className="btn btn-xs btn-light-success btn-icon mr-2"
                  >
                    <i className="ki ki-minus icon-xs"></i>
                  </a>
                  <a href="#" className="btn btn-xs btn-light-success btn-icon">
                    <i className="ki ki-plus icon-xs"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="symbol symbol-70 flex-shrink-0">
                <img
                  src={toAbsoluteUrl("/media/stock-600x400/img-1.jpg")}
                  alt=""
                />
              </a>
            </div>

            <div className="separator separator-solid"></div>

            <div className="d-flex align-items-center justify-content-between p-8">
              <div className="d-flex flex-column mr-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark-75 font-size-lg text-hover-primary"
                >
                  SmartCleaner
                </a>
                <span className="text-muted">Smart tool for cooking</span>
                <div className="d-flex align-items-center mt-2">
                  <span className="font-weight-bold mr-1 text-dark-75 font-size-3">
                    $ 650
                  </span>
                  <span className="text-muted mr-1">for</span>
                  <span className="font-weight-bold mr-2 text-dark-75 font-size-3">
                    4
                  </span>
                  <a
                    href="#"
                    className="btn btn-xs btn-light-success btn-icon mr-2"
                  >
                    <i className="ki ki-minus icon-xs"></i>
                  </a>
                  <a href="#" className="btn btn-xs btn-light-success btn-icon">
                    <i className="ki ki-plus icon-xs"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="symbol symbol-70 flex-shrink-0">
                <img
                  src={toAbsoluteUrl("/media/stock-600x400/img-2.jpg")}
                  alt=""
                />
              </a>
            </div>

            <div className="separator separator-solid"></div>

            <div className="d-flex align-items-center justify-content-between p-8">
              <div className="d-flex flex-column mr-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark-75 font-size-lg text-hover-primary"
                >
                  CameraX
                </a>
                <span className="text-muted">
                  Professional camera for edge cutting shots
                </span>
                <div className="d-flex align-items-center mt-2">
                  <span className="font-weight-bold mr-1 text-dark-75 font-size-sm">
                    $ 150
                  </span>
                  <span className="text-muted mr-1">for</span>
                  <span className="font-weight-bold mr-2 text-dark-75 font-size-sm">
                    3
                  </span>
                  <a
                    href="#"
                    className="btn btn-xs btn-light-success btn-icon mr-2"
                  >
                    <i className="ki ki-minus icon-xs"></i>
                  </a>
                  <a href="#" className="btn btn-xs btn-light-success btn-icon">
                    <i className="ki ki-plus icon-xs"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="symbol symbol-70 flex-shrink-0">
                <img
                  src={toAbsoluteUrl("/media/stock-600x400/img-3.jpg")}
                  alt=""
                />
              </a>
            </div>

            <div className="separator separator-solid"></div>

            <div className="d-flex align-items-center justify-content-between p-8">
              <div className="d-flex flex-column mr-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark font-size-3 text-hover-primary"
                >
                  3DPrinted
                </a>
                <span className="text-muted">Manufactoring unique objects</span>
                <div className="d-flex align-items-center mt-2">
                  <span className="font-weight-bold mr-1 text-dark-75 font-size-sm">
                    $ 1450
                  </span>
                  <span className="text-muted mr-1">for</span>
                  <span className="font-weight-bold mr-2 text-dark-75 font-size-sm">
                    7
                  </span>
                  <a
                    href="#"
                    className="btn btn-xs btn-light-success btn-icon mr-2"
                  >
                    <i className="ki ki-minus icon-xs"></i>
                  </a>
                  <a href="#" className="btn btn-xs btn-light-success btn-icon">
                    <i className="ki ki-plus icon-xs"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="symbol symbol-70 flex-shrink-0">
                <img
                  src={toAbsoluteUrl("/media/stock-600x400/img-4.jpg")}
                  alt=""
                />
              </a>
            </div>
          </PerfectScrollbar>

          <div className="p-8">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <span className="font-weight-bold text-muted font-size-sm mr-2">
                Total
              </span>
              <span className="font-weight-bolder text-dark-50 text-right">
                $1840.00
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-7">
              <span className="font-weight-bold text-muted font-size-sm mr-2">
                Sub total
              </span>
              <span className="font-weight-bolder text-primary text-right">
                $5640.00
              </span>
            </div>
            <div className="text-right">
              <button
                type="button"
                className="btn btn-primary text-weight-bold"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </Dropdown.Menu>
    </Dropdown>
  );
}
