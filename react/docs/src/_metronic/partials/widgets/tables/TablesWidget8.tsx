/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget8: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Latest Products</span>
          <span className='text-muted mt-1 fw-bold fs-7'>More than 100 new orders</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_1'
              >
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_2'
              >
                Week
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_3'
              >
                Day
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_8_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-danger'>
                          <KTSVG
                            path='/media/icons/duotune/coding/cod002.svg'
                            className='svg-icon-2x svg-icon-danger'
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        School Music Festival
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>by Rose Liam</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-dark fw-bolder d-block fs-7'>4:20PM, 03 Sep</span>
                      <span className='text-muted fw-bold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-warning'>
                          <KTSVG
                            path='/media/icons/duotune/general/gen024.svg'
                            className='svg-icon-2x svg-icon-warning'
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Maths Championship
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>By Tom Gere</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-dark fw-bolder d-block fs-7'>10:05PM, 25 Oct</span>
                      <span className='text-muted fw-bold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                          <KTSVG
                            path='/media/icons/duotune/maps/map004.svg'
                            className='svg-icon-2x svg-icon-info'
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Who Knows Geography
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>By Zoey Dylan</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-dark fw-bolder d-block fs-7'>3:22PM, 07 Sep</span>
                      <span className='text-muted fw-bold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-primary'>
                          <KTSVG
                            path='/media/icons/duotune/abstract/abs027.svg'
                            className='svg-icon-2x svg-icon-primary'
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Napoleon Days
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>By Luke Owen</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-dark fw-bolder d-block fs-7'>1:20PM, 02 Dec</span>
                      <span className='text-muted fw-bold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-success'>
                          <KTSVG
                            path='/media/icons/duotune/art/art007.svg'
                            className='svg-icon-2x svg-icon-success'
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        The School Art Leads
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>By Ellie Cole</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-dark fw-bolder d-block fs-7'>6:20PM, 07 Sep</span>
                      <span className='text-muted fw-bold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_2'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                          <KTSVG
                            path='/media/icons/duotune/maps/map004.svg'
                            className='svg-icon-2x svg-icon-info'
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Who Knows Geography
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>By Zoey Dylan</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-dark fw-bolder d-block fs-7'>3:22PM, 07 Sep</span>
                      <span className='text-muted fw-bold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-warning'>
                          <KTSVG
                            path='/media/icons/duotune/general/gen024.svg'
                            className='svg-icon-2x svg-icon-warning'
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Maths Championship
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>By Tom Gere</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-dark fw-bolder d-block fs-7'>10:05PM, 25 Oct</span>
                      <span className='text-muted fw-bold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-danger'>
                          <KTSVG
                            path='/media/icons/duotune/coding/cod002.svg'
                            className='svg-icon-2x svg-icon-danger'
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        School Music Festival
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>by Rose Liam</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-dark fw-bolder d-block fs-7'>4:20PM, 03 Sep</span>
                      <span className='text-muted fw-bold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-warning'>
                          <KTSVG
                            path='/media/icons/duotune/general/gen024.svg'
                            className='svg-icon-2x svg-icon-warning'
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Maths Championship
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>By Tom Gere</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-dark fw-bolder d-block fs-7'>10:05PM, 25 Oct</span>
                      <span className='text-muted fw-bold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                          <KTSVG
                            path='/media/icons/duotune/maps/map004.svg'
                            className='svg-icon-2x svg-icon-info'
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Who Knows Geography
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>By Zoey Dylan</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-dark fw-bolder d-block fs-7'>3:22PM, 07 Sep</span>
                      <span className='text-muted fw-bold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-primary'>
                          <KTSVG
                            path='/media/icons/duotune/abstract/abs027.svg'
                            className='svg-icon-2x svg-icon-primary'
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Napoleon Days
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>By Luke Owen</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-dark fw-bolder d-block fs-7'>1:20PM, 02 Dec</span>
                      <span className='text-muted fw-bold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-danger'>
                          <KTSVG
                            path='/media/icons/duotune/coding/cod002.svg'
                            className='svg-icon-2x svg-icon-danger'
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        School Music Festival
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>by Rose Liam</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-dark fw-bolder d-block fs-7'>4:20PM, 03 Sep</span>
                      <span className='text-muted fw-bold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TablesWidget8}
