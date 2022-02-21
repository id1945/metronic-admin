/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'
// import { KTSVG } from "../../../helpers";

type Props = {
  className: string
  innerPadding?: string
}

const EngageWidget5: React.FC<Props> = ({className, innerPadding = '', children}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className={`card-body pb-0 ${innerPadding}`}>
        {/* begin::Wrapper */}
        <div className='d-flex flex-column h-100'>
          {/* begin::Text */}
          <h3 className='text-dark text-center fs-1 fw-bolder pt-15 lh-lg'>
            Kickstart
            <br />
            Mobile Application
          </h3>
          {/* end::Text */}
          {children}
          {/* begin::Image */}
          <div
            className='flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom h-200px'
            style={{
              backgroundImage: `url('${toAbsoluteUrl('/media/illustrations/terms-2.png')}')`,
            }}
          ></div>

          {/* end::Image */}
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {EngageWidget5}
