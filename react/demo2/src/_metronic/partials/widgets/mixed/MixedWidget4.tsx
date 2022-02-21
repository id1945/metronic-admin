/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
  color: string
  image: string
  title: string
  date: string
  progress: string
}

const MixedWidget4: React.FC<Props> = ({className, color, image, title, date, progress}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body'>
        {/* begin::Heading */}
        <div className='d-flex flex-stack'>
          {/* begin:Info */}
          <div className='d-flex align-items-center'>
            {/* begin:Image */}
            <div className='symbol symbol-60px me-5'>
              <span className={clsx(`symbol-label`, `bg-${color}-light`)}>
                <img src={toAbsoluteUrl(image)} className='h-50 align-self-center' alt='' />
              </span>
            </div>
            {/* end:Image */}

            {/* begin:Title */}
            <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3'>
              <a href='#' className='text-dark fw-bolder text-hover-primary fs-5'>
                {title}
              </a>

              <span className='text-muted fw-bold'>{date}</span>
            </div>
            {/* end:Title */}
          </div>
          {/* begin:Info */}

          {/* begin:Menu */}
          <div className='ms-1'>
            <button
              type='button'
              className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
            >
              <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
            </button>
            <Dropdown1 />
          </div>
          {/* end::Menu */}
        </div>
        {/* end::Heading */}

        {/* begin:Stats */}
        <div className='d-flex flex-column w-100 mt-12'>
          <span className='text-dark me-2 fw-bolder pb-3'>Progress</span>

          <div className='progress h-5px w-100'>
            <div
              className={`progress-bar bg-${color}`}
              role='progressbar'
              style={{width: progress}}
            ></div>
          </div>
        </div>
        {/* end:Stats */}

        {/* begin:Team */}
        <div className='d-flex flex-column mt-10'>
          <div className='text-dark me-2 fw-bolder pb-4'>Team</div>

          <div className='d-flex'>
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

            <a href='#' className='symbol symbol-35px' data-bs-toggle='tooltip' title='Alice Micto'>
              <img src={toAbsoluteUrl('/media/avatars/150-9.jpg')} alt='' />
            </a>
          </div>
        </div>
        {/* end:Team */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {MixedWidget4}
