/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
  time: string
  image: string
  title: string
  description: string
}

const MixedWidget5: React.FC<Props> = ({className, time, image, title, description}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body d-flex flex-column pb-10 pb-lg-15'>
        <div className='flex-grow-1'>
          {/* begin::Info */}
          <div className='d-flex align-items-center pe-2 mb-5'>
            <span className='text-muted fw-bolder fs-5 flex-grow-1'>{time}</span>

            <div className='symbol symbol-50px'>
              <span className='symbol-label bg-light'>
                <img src={toAbsoluteUrl(image)} className='h-50 align-self-center' alt='' />
              </span>
            </div>
          </div>
          {/* end::Info */}

          {/* begin::Link */}
          <a href='#' className='text-dark fw-bolder text-hover-primary fs-4'>
            {title}
          </a>
          {/* end::Link */}

          {/* begin::Desc */}
          <p className='py-3' dangerouslySetInnerHTML={{__html: description}}></p>
          {/* end::Desc */}
        </div>

        {/* begin::Team */}
        <div className='d-flex align-items-center'>
          <a
            href='#'
            className='symbol symbol-35px me-2'
            data-bs-toggle='tooltip'
            title='Ana Stone'
          >
            <img src={toAbsoluteUrl('/media/avatars/150-1.jpg')} alt='' />
          </a>

          <a
            href='#'
            className='symbol symbol-35px me-2'
            data-bs-toggle='tooltip'
            title='Mark Larson'
          >
            <img src={toAbsoluteUrl('/media/avatars/150-4.jpg')} alt='' />
          </a>

          <a
            href='#'
            className='symbol symbol-35px me-2'
            data-bs-toggle='tooltip'
            title='Sam Harris'
          >
            <img src={toAbsoluteUrl('/media/avatars/150-8.jpg')} alt='' />
          </a>
        </div>
        {/* end::Team */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {MixedWidget5}
