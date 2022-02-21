/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget6: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Authors Earnings</span>
          <span className='text-muted mt-1 fw-bold fs-7'>More than 400 new authors</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_6_tab_1'
              >
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_6_tab_2'
              >
                Week
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_6_tab_3'
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
          <div className='tab-pane fade show active' id='kt_table_widget_6_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-bold d-block'>Successful Fellas</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bolder d-block fs-5'>$200,500</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-primary fs-7 fw-bolder'>+28%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-2'
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/018-girl-9.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-bold d-block'>HTML, CSS Coding</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bolder d-block fs-5'>$1,200,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-warning fs-7 fw-bolder'>+52%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-2'
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/047-girl-25.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-bold d-block'>PHP, Laravel, VueJS</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bolder d-block fs-5'>$1,200,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-danger fs-7 fw-bolder'>+52%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-2'
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/014-girl-7.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Natali Trump
                      </a>
                      <span className='text-muted fw-bold d-block'>UI/UX Designer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bolder d-block fs-5'>$3,400,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-success fs-7 fw-bolder'>-34%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-2'
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/043-boy-18.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Kevin Leonard
                      </a>
                      <span className='text-muted fw-bold d-block'>Art Director</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bolder d-block fs-5'>$35,600,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-info fs-7 fw-bolder'>+230%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-2'
                        />
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
          <div className='tab-pane fade' id='kt_table_widget_6_tab_2'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/018-girl-9.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-bold d-block'>HTML, CSS Coding</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bolder d-block fs-5'>$1,200,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-warning fs-7 fw-bolder'>+52%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-2'
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/014-girl-7.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Natali Trump
                      </a>
                      <span className='text-muted fw-bold d-block'>UI/UX Designer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bolder d-block fs-5'>$3,400,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-success fs-7 fw-bolder'>-34%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-2'
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-bold d-block'>Successful Fellas</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bolder d-block fs-5'>$200,500</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-primary fs-7 fw-bolder'>+28%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-2'
                        />
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
          <div className='tab-pane fade' id='kt_table_widget_6_tab_3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/047-girl-25.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-bold d-block'>HTML, CSS Coding</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bolder d-block fs-5'>$1,200,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-danger fs-7 fw-bolder'>+52%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-2'
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/014-girl-7.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Natali Trump
                      </a>
                      <span className='text-muted fw-bold d-block'>UI/UX Designer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bolder d-block fs-5'>$3,400,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-success fs-7 fw-bolder'>-34%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-2'
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/043-boy-18.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Kevin Leonard
                      </a>
                      <span className='text-muted fw-bold d-block'>Art Director</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bolder d-block fs-5'>$35,600,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-info fs-7 fw-bolder'>+230%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-2'
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-bold d-block'>Successful Fellas</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bolder d-block fs-5'>$200,500</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-primary fs-7 fw-bolder'>+28%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-2'
                        />
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

export {TablesWidget6}
