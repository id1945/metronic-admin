/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,no-undef */
import React, {useState} from "react";
import SVG from "react-inlinesvg";
import {Tab, Nav} from "react-bootstrap";
import {toAbsoluteUrl} from "../../../../_helpers";

export function QuickPanel() {
  const [selectedTab, setSelectedTab] = useState("AuditLogs");

  const setTab = _tabName => {
    setSelectedTab(_tabName);
  };

  return (
      <div id="kt_quick_panel" className="offcanvas offcanvas-left pt-5 pb-10">
        <Tab.Container
            defaultActiveKey={selectedTab}
        >
          {/*begin::Header*/}
          <div
              className="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5">
            <Nav
                onSelect={setTab}
                as="ul"
                role="tablist"
                className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10"
            >
              <Nav.Item as="li">
                <Nav.Link
                    eventKey="AuditLogs"
                    className={`nav-link ${
                        selectedTab === "AuditLogs" ? "active" : ""
                    }`}
                >
                  Audit Logs
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                    eventKey="Notifications"
                    className={`nav-link ${
                        selectedTab === "Notifications" ? "active" : ""
                    }`}
                >
                  Notifications
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                    eventKey="Settings"
                    className={`nav-link ${
                        selectedTab === "Settings" ? "active" : ""
                    }`}
                >
                  Settings
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <div className="offcanvas-close mt-n1 pr-5" style={{position: "absolute", top: "15px", right: "10px"}}>
              <a
                  href="#"
                  className="btn btn-xs btn-icon btn-light btn-hover-primary"
                  id="kt_quick_panel_close"
              >
                <i className="ki ki-close icon-xs text-muted"></i>
              </a>
            </div>
          </div>
          {/*end::Header*/}

          {/*begin::Content*/}
          <div className="offcanvas-content px-10">
            <div className="tab-content">
              <div
                  id="kt_quick_panel_logs"
                  role="tabpanel"
                  className={`tab-pane fade pt-3 pr-5 mr-n5 scroll ps ${selectedTab === "AuditLogs" ? "active show" : ""}`}
              >
                <div className="mb-15">
                  <h5 className="font-weight-bold mb-5">System Messages</h5>
                  <div className="d-flex align-items-center flex-wrap mb-5">
                    <div className="symbol symbol-50 symbol-light mr-5">
                    <span className="symbol-label">
                      <img
                          src={toAbsoluteUrl("/media/svg/misc/006-plurk.svg")}
                          alt=""
                          className="h-50 align-self-center"
                      />
                    </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 mr-2">
                      <a
                          href="#"
                          className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        Top Authors
                      </a>
                      <span className="text-muted font-weight-bold">
                      Most Successful Fellas
                    </span>
                    </div>
                    <span className="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
                    +82$
                  </span>
                  </div>

                  <div className="d-flex align-items-center flex-wrap mb-5">
                    <div className="symbol symbol-50 symbol-light mr-5">
                    <span className="symbol-label">
                      <img
                          src={toAbsoluteUrl("/media/svg/misc/015-telegram.svg")}
                          alt=""
                          className="h-50 align-self-center"
                      />
                    </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 mr-2">
                      <a
                          href="#"
                          className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        Popular Authors
                      </a>
                      <span className="text-muted font-weight-bold">
                      Most Successful Fellas
                    </span>
                    </div>
                    <span className="btn btn-sm btn-light font-weight-bolder  my-lg-0 my-2 py-1 text-dark-50">
                    +280$
                  </span>
                  </div>

                  <div className="d-flex align-items-center flex-wrap mb-5">
                    <div className="symbol symbol-50 symbol-light mr-5">
                    <span className="symbol-label">
                      <img
                          src={toAbsoluteUrl("/media/svg/misc/003-puzzle.svg")}
                          alt=""
                          className="h-50 align-self-center"
                      />
                    </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 mr-2">
                      <a
                          href="#"
                          className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        New Users
                      </a>
                      <span className="text-muted font-weight-bold">
                      Most Successful Fellas
                    </span>
                    </div>
                    <span className="btn btn-sm btn-light font-weight-bolder  my-lg-0 my-2 py-1 text-dark-50">
                    +4500$
                  </span>
                  </div>

                  <div className="d-flex align-items-center flex-wrap mb-5">
                    <div className="symbol symbol-50 symbol-light mr-5">
                    <span className="symbol-label">
                      <img
                          src={toAbsoluteUrl("/media/svg/misc/005-bebo.svg")}
                          alt=""
                          className="h-50 align-self-center"
                      />
                    </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 mr-2">
                      <a
                          href="#"
                          className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        Active Customers
                      </a>
                      <span className="text-muted font-weight-bold">
                      Most Successful Fellas
                    </span>
                    </div>
                    <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">
                    +4500$
                  </span>
                  </div>

                  <div className="d-flex align-items-center flex-wrap">
                    <div className="symbol symbol-50 symbol-light mr-5">
                    <span className="symbol-label">
                      <img
                          src={toAbsoluteUrl(
                              "/media/svg/misc/014-kickstarter.svg"
                          )}
                          alt=""
                          className="h-50 align-self-center"
                      />
                    </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 mr-2">
                      <a
                          href="#"
                          className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        Bestseller Theme
                      </a>
                      <span className="text-muted font-weight-bold">
                      Most Successful Fellas
                    </span>
                    </div>
                    <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">
                    +4500$
                  </span>
                  </div>
                </div>

                <div className="mb-5">
                  <h5 className="font-weight-bold mb-5">Notifications</h5>

                  <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-5">
                  <span className="svg-icon svg-icon-warning mr-5">
                    <SVG
                        src={toAbsoluteUrl("/media//svg/icons/Home/Library.svg")}
                        className="svg-icon svg-icon-lg"
                    ></SVG>
                  </span>

                    <div className="d-flex flex-column flex-grow-1 mr-2">
                      <a
                          href="#"
                          className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        Another purpose persuade
                      </a>
                      <span className="text-muted font-size-sm">
                      Due in 2 Days
                    </span>
                    </div>

                    <span className="font-weight-bolder text-warning py-1 font-size-lg">
                    +28%
                  </span>
                  </div>

                  <div className="d-flex align-items-center bg-light-success rounded p-5 mb-5">
                  <span className="svg-icon svg-icon-success mr-5">
                    <SVG
                        src={toAbsoluteUrl(
                            "/media/svg/icons/Communication/Write.svg"
                        )}
                        className="svg-icon svg-icon-lg"
                    ></SVG>
                  </span>
                    <div className="d-flex flex-column flex-grow-1 mr-2">
                      <a
                          href="#"
                          className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        Would be to people
                      </a>
                      <span className="text-muted font-size-sm">
                      Due in 2 Days
                    </span>
                    </div>

                    <span className="font-weight-bolder text-success py-1 font-size-lg">
                    +50%
                  </span>
                  </div>

                  <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-5">
                  <span className="svg-icon svg-icon-danger mr-5">
                    <SVG
                        src={toAbsoluteUrl(
                            "/media/svg/icons/Communication/Group-chat.svg"
                        )}
                        className="svg-icon svg-icon-lg"
                    ></SVG>
                  </span>
                    <div className="d-flex flex-column flex-grow-1 mr-2">
                      <a
                          href="#"
                          className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        Purpose would be to persuade
                      </a>
                      <span className="text-muted font-size-sm">
                      Due in 2 Days
                    </span>
                    </div>

                    <span className="font-weight-bolder text-danger py-1 font-size-lg">
                    -27%
                  </span>
                  </div>

                  <div className="d-flex align-items-center bg-light-info rounded p-5">
                  <span className="svg-icon svg-icon-info mr-5">
                    <SVG
                        src={toAbsoluteUrl(
                            "/media/svg/icons/General/Attachment2.svg"
                        )}
                        className="svg-icon svg-icon-lg"
                    ></SVG>
                  </span>

                    <div className="d-flex flex-column flex-grow-1 mr-2">
                      <a
                          href="#"
                          className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        The best product
                      </a>
                      <span className="text-muted font-size-sm">
                      Due in 2 Days
                    </span>
                    </div>

                    <span className="font-weight-bolder text-info py-1 font-size-lg">
                    +8%
                  </span>
                  </div>
                </div>
              </div>
              <div
                  id="kt_quick_panel_notifications"
                  role="tabpanel"
                  className={`tab-pane fade pt-2 pr-5 mr-n5 scroll ps ${selectedTab === "Notifications" ? "active show" : ""}`}
              >
                <div className="navi navi-icon-circle navi-spacer-x-0">
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-bell text-success icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold font-size-lg">
                          5 new user generated report
                        </div>
                        <div className="text-muted">Reports based on sales</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon2-box text-danger icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          2 new items submited
                        </div>
                        <div className="text-muted">by Grog John</div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-psd text-primary icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          79 PSD files generated
                        </div>
                        <div className="text-muted">Reports based on sales</div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon2-supermarket text-warning icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          $2900 worth producucts sold
                        </div>
                        <div className="text-muted">Total 234 items</div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-paper-plane-1 text-success icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          4.5h-avarage response time
                        </div>
                        <div className="text-muted">Fostest is Barry</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-safe-shield-protection text-danger icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          3 Defence alerts
                        </div>
                        <div className="text-muted">
                          40% less alerts thar last week
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-notepad text-primary icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          Avarage 4 blog posts per author
                        </div>
                        <div className="text-muted">Most posted 12 time</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-users-1 text-warning icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          16 authors joined last week
                        </div>
                        <div className="text-muted">
                          9 photodrapehrs, 7 designer
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon2-box text-info icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          2 new items have been submited
                        </div>
                        <div className="text-muted">by Grog John</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon2-download text-success icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          2.8 GB-total downloads size
                        </div>
                        <div className="text-muted">
                          Mostly PSD end AL concepts
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon2-supermarket text-danger icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          $2900 worth producucts sold
                        </div>
                        <div className="text-muted">Total 234 items</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-bell text-primary icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          7 new user generated report
                        </div>
                        <div className="text-muted">Reports based on sales</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-paper-plane-1 text-success icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          4.5h-avarage response time
                        </div>
                        <div className="text-muted">Fostest is Barry</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                  id="kt_quick_panel_settings"
                  role="tabpanel"
                  className={`tab-pane fade pt-3 pr-5 mr-n5 scroll ps ${selectedTab === "Settings" ? "active show" : ""}`}
              >
                <form className="form">
                  <div>
                    <h5 className="font-weight-bold mb-3">Customer Care</h5>
                    <div className="form-group mb-0 row">
                      <label className="col-8 col-form-label">
                        Enable Notifications:
                      </label>
                      <div className="col-4 text-right">
                      <span className="switch switch-success switch-sm">
                        <label>
                          <input
                              type="checkbox"
                              onChange={() => {
                              }}
                              checked
                              name=""
                          />
                          <span></span>
                        </label>
                      </span>
                      </div>
                    </div>
                    <div className="form-group mb-0 row">
                      <label className="col-8 col-form-label">
                        Enable Case Tracking:
                      </label>
                      <div className="col-4 text-right">
                      <span className="switch switch-success switch-sm">
                        <label>
                          <input
                              type="checkbox"
                              name="quick_panel_notifications_2"
                              onChange={() => {
                              }}
                          />
                          <span></span>
                        </label>
                      </span>
                      </div>
                    </div>
                    <div className="form-group mb-0 row">
                      <label className="col-8 col-form-label">
                        Support Portal:
                      </label>
                      <div className="col-4 text-right">
                      <span className="switch switch-success switch-sm">
                        <label>
                          <input type="checkbox" name="" onChange={() => {
                          }}/>
                          <span></span>
                        </label>
                      </span>
                      </div>
                    </div>
                  </div>

                  <div className="separator separator-dashed my-6"></div>

                  <div className="pt-2">
                    <h5 className="font-weight-bold mb-3">Reports</h5>
                    <div className="form-group mb-0 row">
                      <label className="col-8 col-form-label">
                        Generate Reports:
                      </label>
                      <div className="col-4 text-right">
                      <span className="switch switch-sm switch-danger">
                        <label>
                          <input
                              type="checkbox"
                              name=""
                              onChange={() => {
                              }}
                              checked
                          />
                          <span></span>
                        </label>
                      </span>
                      </div>
                    </div>
                    <div className="form-group mb-0 row">
                      <label className="col-8 col-form-label">
                        Enable Report Export:
                      </label>
                      <div className="col-4 text-right">
                      <span className="switch switch-sm switch-danger">
                        <label>
                          <input type="checkbox" name="" onChange={() => {
                          }}/>
                          <span></span>
                        </label>
                      </span>
                      </div>
                    </div>
                    <div className="form-group mb-0 row">
                      <label className="col-8 col-form-label">
                        Allow Data Collection:
                      </label>
                      <div className="col-4 text-right">
                      <span className="switch switch-sm switch-danger">
                        <label>
                          <input
                              type="checkbox"
                              name=""
                              onChange={() => {
                              }}
                              checked
                          />
                          <span></span>
                        </label>
                      </span>
                      </div>
                    </div>
                  </div>

                  <div className="separator separator-dashed my-6"></div>

                  <div className="pt-2">
                    <h5 className="font-weight-bold mb-3">Memebers</h5>
                    <div className="form-group mb-0 row">
                      <label className="col-8 col-form-label">
                        Enable Member singup:
                      </label>
                      <div className="col-4 text-right">
                      <span className="switch switch-sm switch-primary">
                        <label>
                          <input
                              type="checkbox"
                              checked
                              onChange={() => {
                              }}
                              name=""
                          />
                          <span></span>
                        </label>
                      </span>
                      </div>
                    </div>
                    <div className="form-group mb-0 row">
                      <label className="col-8 col-form-label">
                        Allow User Feedbacks:
                      </label>
                      <div className="col-4 text-right">
                      <span className="switch switch-sm switch-primary">
                        <label>
                          <input type="checkbox" name="" onChange={() => {
                          }}/>
                          <span></span>
                        </label>
                      </span>
                      </div>
                    </div>
                    <div className="form-group mb-0 row">
                      <label className="col-8 col-form-label">
                        Enable Customer Portal:
                      </label>
                      <div className="col-4 text-right">
                      <span className="switch switch-sm switch-primary">
                        <label>
                          <input
                              type="checkbox"
                              checked
                              onChange={() => {
                              }}
                              name=""
                          />
                          <span></span>
                        </label>
                      </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/*end::Content*/}
        </Tab.Container>
      </div>
  );
}
