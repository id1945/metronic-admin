/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const TablesWidget2: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Latest Arrivals</span>
          <span className='text-muted mt-1 fw-bold fs-7'>More than 100 new products</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-5'>
            {/* begin::Table head */}
            <thead>
              <tr>
                <th className='p-0 w-50px'></th>
                <th className='p-0 min-w-150px'></th>
                <th className='p-0 min-w-150px'></th>
                <th className='p-0 min-w-125px'></th>
                <th className='p-0 min-w-40px'></th>
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
                        src={toAbsoluteUrl('/media/svg/brand-logos/plurk.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    Top Authors
                  </a>
                  <span className='text-muted fw-bold d-block fs-7'>Successful Fellas</span>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-danger fw-bold me-1'>Angular</span>
                  <span className='badge badge-light-info fw-bold me-1'>PHP</span>
                </td>
                <td className='text-end'>
                  <span className='text-muted fw-bold'>4600 Users</span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                    <KTSVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-2' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/telegram.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    Popular Authors
                  </a>
                  <span className='text-muted fw-bold d-block fs-7'>Most Successful</span>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-danger fw-bold me-1'>HTML</span>
                  <span className='badge badge-light-info fw-bold me-1'>CSS</span>
                </td>
                <td className='text-end'>
                  <span className='text-muted fw-bold'>7200 Users</span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                    <KTSVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-2' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/vimeo.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    New Users
                  </a>
                  <span className='text-muted fw-bold d-block fs-7'>Awesome Users</span>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-danger fw-bold me-1'>React</span>
                  <span className='badge badge-light-info fw-bold me-1'>SASS</span>
                </td>
                <td className='text-end'>
                  <span className='text-muted fw-bold'>890 Users</span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                    <KTSVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-2' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/bebo.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    Active Customers
                  </a>
                  <span className='text-muted fw-bold d-block fs-7'>Best Customers</span>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-danger fw-bold me-1'>Java</span>
                  <span className='badge badge-light-info fw-bold me-1'>PHP</span>
                </td>
                <td className='text-end'>
                  <span className='text-muted fw-bold'>6370 Users</span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                    <KTSVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-2' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/kickstarter.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    Bestseller Theme
                  </a>
                  <span className='text-muted fw-bold d-block fs-7'>Amazing Templates</span>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-danger fw-bold me-1'>Python</span>
                  <span className='badge badge-light-info fw-bold me-1'>MySQL</span>
                </td>
                <td className='text-end'>
                  <span className='text-muted fw-bold'>354 Users</span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                    <KTSVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-2' />
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TablesWidget2}
