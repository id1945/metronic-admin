/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'

type Props = {
  className: string
  innerPadding?: string
}

const StatsWidget3: React.FC<Props> = ({className, innerPadding = ''}) => {
  return (
    <div className={`card bg-danger ${className}`}>
      {/* begin::Body */}
      <div className={`card-body ${innerPadding}`}>
        {/* begin::Section */}
        <div className='d-flex align-items-center'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-white bg-opacity-10'>
              <KTSVG
                className='svg-icon-2x svg-icon-white'
                path='/media/icons/duotune/communication/com012.svg'
              />
            </span>
          </div>
          {/* end::Symbol */}

          {/* begin::Title */}
          <div>
            <a href='#' className='fs-4 text-white text-hover-primary fw-bolder'>
              Chat Application
            </a>
            <div className='fs-7 text-white opacity-75 fw-bold mt-1'>HTML, Django</div>
          </div>
          {/* end::Title */}
        </div>
        {/* end::Section */}

        {/* begin::Info */}
        <div className='fw-bolder text-white pt-7'>
          <span className='d-block'>26 Authors</span>
          <span className='d-block pt-2'>140 Comments</span>
        </div>
        {/* end::Info */}

        {/* begin::Progress */}
        <div className='progress h-6px mt-7 bg-white bg-opacity-10'>
          <div
            className='progress-bar bg-white'
            role='progressbar'
            style={{width: '70%'}}
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
        {/* end::Progress */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {StatsWidget3}
