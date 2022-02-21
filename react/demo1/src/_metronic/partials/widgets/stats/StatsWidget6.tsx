/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
  innerPadding?: string
}

const StatsWidget6: React.FC<Props> = ({className, innerPadding = '', children}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className={`card-body ${innerPadding}`}>
        {/* begin::Top */}
        <div className='d-flex bg-light-primary card-rounded flex-grow-1'>
          {/* begin::Section */}
          <div className='py-10 ps-7'>
            {/* begin::Text */}
            <div className=''>
              <span className='text-primary d-block mb-n1'>Your Storage</span>
              <span className='font-weight-light fs-1 text-gray-800'>
                GB <span className='fw-bolder fs-1 text-gray-800'>7,562.00</span>
              </span>
            </div>
            {/* end::Text */}
            {children}
          </div>
          {/* end::Section */}

          {/* begin::Pic */}
          <div
            className='position-relative bgi-no-repeat bgi-size-contain bgi-position-y-bottom bgi-position-x-end mt-6 flex-grow-1'
            style={{
              backgroundImage: `url('${toAbsoluteUrl('/media/misc/illustration-1.png')}')`,
            }}
          ></div>
          {/* end::Pic */}
        </div>
        {/* end::Top */}

        {/* begin::Stats */}
        <div className='pt-9'>
          {/* begin::Row */}
          <div className='row'>
            <div className='col me-n2 mb-5'>
              <button
                type='button'
                className='btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active border-primary px-6 py-7 text-start w-100 min-w-150px'
              >
                <KTSVG
                  className='svg-icon-2x ms-n1'
                  path='/media/icons/duotune/general/gen002.svg'
                />{' '}
                <span className='text-gray-800 fw-bolder fs-6 d-block pt-6'>Upload File</span>
              </button>
            </div>
            <div className='col mb-5'>
              <button
                type='button'
                className='btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px'
              >
                <KTSVG
                  className='svg-icon-2x ms-n1'
                  path='/media/icons/duotune/general/gen005.svg'
                />{' '}
                <span className='text-gray-800 fw-bolder fs-6 d-block pt-6'>Read Docs</span>
              </button>
            </div>
          </div>
          {/* end::Row */}

          {/* begin::Row */}
          <div className='row'>
            <div className='col me-n2 mb-5'>
              <button
                type='button'
                className='btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px'
              >
                <KTSVG
                  className='svg-icon-2x ms-n1'
                  path='/media/icons/duotune/general/gen002.svg'
                />{' '}
                <span className='text-gray-800 fw-bolder fs-6 d-block pt-6'>MRC 22 XML</span>
              </button>
            </div>
            <div className='col mb-5'>
              <button
                type='button'
                className='btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px'
              >
                <KTSVG
                  className='svg-icon-2x ms-n1'
                  path='/media/icons/duotune/general/gen005.svg'
                />{' '}
                <span className='text-gray-800 fw-bolder fs-6 d-block pt-6'>CTI Tech Specs</span>
              </button>
            </div>
          </div>
          {/* end::Row */}

          {/* begin::Row */}
          <div className='row'>
            <div className='col mb-5 me-n2'>
              <button
                type='button'
                className='btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px'
              >
                <KTSVG
                  className='svg-icon-2x ms-n1'
                  path='/media/icons/duotune/general/gen005.svg'
                />{' '}
                <span className='text-gray-800 fw-bolder fs-6 d-block pt-6'>Check List</span>
              </button>
            </div>
            <div className='col mb-5'>
              <button
                type='button'
                className='btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7  text-start w-100 min-w-150px'
              >
                <KTSVG className='svg-icon-2x ms-n1' path='/media/icons/duotune/files/fil023.svg' />{' '}
                <span className='text-gray-800 fw-bolder fs-6 d-block pt-6'>Reports</span>
              </button>
            </div>
          </div>
          {/* end::Row */}
        </div>
        {/* end::Stats */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {StatsWidget6}
