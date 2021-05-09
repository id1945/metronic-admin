/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export function QuickNotification() {
  return (
    <>
      {/* begin::Notifications Panel */}
      <div id="kt_quick_notifications" className="offcanvas offcanvas-left p-10">
        {/* begin::Header */}
        <div className="offcanvas-header d-flex align-items-center justify-content-between mb-10">
          <h3 className="font-weight-bold m-0">
            Notifications
            <small className="text-muted font-size-sm ml-2">24 New</small>
          </h3>
          <a
            href="#"
            className="btn btn-xs btn-icon btn-light btn-hover-primary"
            id="kt_quick_notifications_close"
          >
            <i className="ki ki-close icon-xs text-muted"></i>
          </a>
        </div>
        {/* end::Header */}

        {/* begin::Content */}
        <div className="offcanvas-content pr-5 mr-n5">
          {/* begin::Nav */}
          <div className="navi navi-icon-circle navi-spacer-x-0">
            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
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
            {/* end::Item */}

            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
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
            {/* end::Item */}

            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
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
            {/* end::Item */}

            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
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
            {/* end::Item */}

            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
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
            {/* end::Item */}

            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
                  <div className="symbol-label">
                    <i className="flaticon-safe-shield-protection text-danger icon-lg"></i>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold  font-size-lg">
                    3 Defence alerts
                  </div>
                  <div className="text-muted">40% less alerts thar last week</div>
                </div>
              </div>
            </a>
            {/* end::Item */}

            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
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
            {/* end::Item */}

            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
                  <div className="symbol-label">
                    <i className="flaticon-users-1 text-warning icon-lg"></i>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold  font-size-lg">
                    16 authors joined last week
                  </div>
                  <div className="text-muted">9 photodrapehrs, 7 designer</div>
                </div>
              </div>
            </a>
            {/* end::Item */}

            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
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
            {/* end::Item */}

            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
                  <div className="symbol-label">
                    <i className="flaticon2-download text-success icon-lg"></i>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold  font-size-lg">
                    2.8 GB-total downloads size
                  </div>
                  <div className="text-muted">Mostly PSD end AL concepts</div>
                </div>
              </div>
            </a>
            {/* end::Item */}

            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
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
            {/* end::Item */}

            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
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
            {/* end::Item */}

            {/* begin::Item */}
            <a href="#" className="navi-item">
              <div className="navi-link rounded">
                <div className="symbol symbol-50 symbol-circle mr-3">
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
            {/* end::Item */}
          </div>
          {/* end::Nav */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::Notifications Panel */}
    </>
  );
}
