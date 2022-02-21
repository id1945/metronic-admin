/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const FeedsWidget6: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body pb-0'>
        {/* begin::Header */}
        <div className='d-flex align-items-center mb-5'>
          {/* begin::User */}
          <div className='d-flex align-items-center flex-grow-1'>
            {/* begin::Avatar */}
            <div className='symbol symbol-45px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/150-17.jpg')} alt='' />
            </div>
            {/* end::Avatar */}

            {/* begin::Info */}
            <div className='d-flex flex-column'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder'>
                Mat Dillon
              </a>
              <span className='text-gray-400 fw-bold'>Last month</span>
            </div>
            {/* end::Info */}
          </div>
          {/* end::User */}

          {/* begin::Menu */}
          <div className='my-0'>
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
        {/* end::Header */}

        {/* begin::Post */}
        <div className='mb-6'>
          {/* begin::Text */}
          <div className='text-gray-800 fs-6 fw-normal mb-5'>
            Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors
          </div>
          {/* end::Text */}

          {/* begin::Video */}
          <div className='mb-5'>
            <iframe
              title='widget11-video'
              className='embed-responsive-item rounded h-300px w-100'
              src='https://www.youtube.com/embed/qIHXpnASPAA'
              allowFullScreen={true}
            />
          </div>
          {/* end::Video */}

          {/* begin::Toolbar */}
          <div className='d-flex align-items-center mb-5'>
            <a
              href='#'
              className='btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4'
            >
              <KTSVG path='/media/icons/duotune/communication/com012.svg' className='svg-icon-3' />
              189
            </a>

            <a
              href='#'
              className='btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2'
            >
              <KTSVG path='/media/icons/duotune/general/gen030.svg' className='svg-icon-2' />
              229
            </a>
          </div>
          {/* end::Toolbar */}
        </div>
        {/* end::Bottom */}

        {/* begin::Separator */}
        <div className='separator mb-4'></div>
        {/* end::Separator */}

        {/* begin::Reply input */}
        <form className='position-relative mb-6'>
          <textarea
            className='form-control border-0 p-0 pe-10 resize-none min-h-25px'
            data-kt-autosize='true'
            rows={1}
            placeholder='Reply..'
          ></textarea>

          <div className='position-absolute top-0 end-0 me-n5'>
            <span className='btn btn-icon btn-sm btn-active-color-primary pe-0 me-2'>
              <KTSVG
                path='/media/icons/duotune/communication/com008.svg'
                className='svg-icon-3 mb-3'
              />
            </span>

            <span className='btn btn-icon btn-sm btn-active-color-primary ps-0'>
              <KTSVG path='/media/icons/duotune/general/gen018.svg' className='svg-icon-2 mb-3' />
            </span>
          </div>
        </form>
        {/* edit::Reply input */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {FeedsWidget6}
