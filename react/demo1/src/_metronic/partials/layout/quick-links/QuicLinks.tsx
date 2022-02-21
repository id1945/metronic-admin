/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

const QuickLinks: FC = () => (
  <div
    className='menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px'
    data-kt-menu='true'
  >
    <div
      className='d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10'
      style={{backgroundImage: `url('${toAbsoluteUrl('/media/misc/pattern-1.jpg')}')`}}
    >
      <h3 className='text-white fw-bold mb-3'>Quick Links</h3>

      <span className='badge bg-primary py-2 px-3'>25 pending tasks</span>
    </div>

    <div className='row g-0'>
      <div className='col-6'>
        <a
          href='#'
          className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom'
        >
          <KTSVG
            path='/media/icons/duotune/finance/fin009.svg'
            className='svg-icon-3x svg-icon-primary mb-2'
          />
          <span className='fs-5 fw-bold text-gray-800 mb-0'>Accounting</span>
          <span className='fs-7 text-gray-400'>eCommerce</span>
        </a>
      </div>

      <div className='col-6'>
        <a
          href='#'
          className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom'
        >
          <KTSVG
            path='/media/icons/duotune/communication/com010.svg'
            className='svg-icon-3x svg-icon-primary mb-2'
          />
          <span className='fs-5 fw-bold text-gray-800 mb-0'>Administration</span>
          <span className='fs-7 text-gray-400'>Console</span>
        </a>
      </div>

      <div className='col-6'>
        <a href='#' className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end'>
          <KTSVG
            path='/media/icons/duotune/abstract/abs042.svg'
            className='svg-icon-3x svg-icon-primary mb-2'
          />
          <span className='fs-5 fw-bold text-gray-800 mb-0'>Projects</span>
          <span className='fs-7 text-gray-400'>Pending Tasks</span>
        </a>
      </div>

      <div className='col-6'>
        <a href='#' className='d-flex flex-column flex-center h-100 p-6 bg-hover-light'>
          <KTSVG
            path='/media/icons/duotune/finance/fin006.svg'
            className='svg-icon-3x svg-icon-primary mb-2'
          />
          <span className='fs-5 fw-bold text-gray-800 mb-0'>Customers</span>
          <span className='fs-7 text-gray-400'>Latest cases</span>
        </a>
      </div>
    </div>

    <div className='py-2 text-center border-top'>
      <Link to='/crafted/pages/profile' className='btn btn-color-gray-600 btn-active-color-primary'>
        View All <KTSVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-5' />
      </Link>
    </div>
  </div>
)

export {QuickLinks}
