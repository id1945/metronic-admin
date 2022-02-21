/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown2} from '../../content/dropdown/Dropdown2'

type Props = {
  className: string
}

const FeedsWidget3: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body pb-0'>
        {/* begin::Header */}
        <div className='d-flex align-items-center mb-3'>
          {/* begin::User */}
          <div className='d-flex align-items-center flex-grow-1'>
            {/* begin::Avatar */}
            <div className='symbol symbol-45px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/150-10.jpg')} alt='' />
            </div>
            {/* end::Avatar */}

            {/* begin::Info */}
            <div className='d-flex flex-column'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder'>
                Carles Nilson
              </a>
              <span className='text-gray-400 fw-bold'>Yestarday at 5:06 PM</span>
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
            <Dropdown2 />
          </div>
          {/* end::Menu */}
        </div>
        {/* end::Header */}

        {/* begin::Post */}
        <div className='mb-7'>
          {/* begin::Text */}
          <div className='text-gray-800 mb-5'>
            Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors
            about driving and keep you focused on the overall structure of your post
          </div>
          {/* end::Text */}

          {/* begin::Toolbar */}
          <div className='d-flex align-items-center mb-5'>
            <a
              href='#'
              className='btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4'
            >
              <KTSVG path='/media/icons/duotune/communication/com012.svg' className='svg-icon-2' />
              12
            </a>

            <a
              href='#'
              className='btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2'
            >
              <KTSVG path='/media/icons/duotune/general/gen030.svg' className='svg-icon-2' />
              150
            </a>
          </div>
          {/* end::Toolbar */}
        </div>
        {/* end::Post */}

        {/* begin::Replies */}
        <div className='mb-7 ps-10'>
          {/* begin::Reply */}
          <div className='d-flex mb-5'>
            {/* begin::Avatar */}
            <div className='symbol symbol-45px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/150-11.jpg')} alt='' />
            </div>
            {/* end::Avatar */}

            {/* begin::Info */}
            <div className='d-flex flex-column flex-row-fluid'>
              {/* begin::Info */}
              <div className='d-flex align-items-center flex-wrap mb-1'>
                <a href='#' className='text-gray-800 text-hover-primary fw-bolder me-2'>
                  Alice Danchik
                </a>

                <span className='text-gray-400 fw-bold fs-7'>1 day</span>

                <a href='#' className='ms-auto text-gray-400 text-hover-primary fw-bold fs-7'>
                  Reply
                </a>
              </div>
              {/* end::Info */}

              {/* begin::Post */}
              <span className='text-gray-800 fs-7 fw-normal pt-1'>
                Long before you sit dow to put digital pen to paper you need to make sure you have
                to sit down and write.
              </span>
              {/* end::Post */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Reply */}

          {/* begin::Reply */}
          <div className='d-flex'>
            {/* begin::Avatar */}
            <div className='symbol symbol-45px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/150-8.jpg')} alt='' />
            </div>
            {/* end::Avatar */}

            {/* begin::Info */}
            <div className='d-flex flex-column flex-row-fluid'>
              {/* begin::Info */}
              <div className='d-flex align-items-center flex-wrap mb-1'>
                <a href='#' className='text-gray-800 text-hover-primary fw-bolder me-2'>
                  Harris Bold
                </a>

                <span className='text-gray-400 fw-bold fs-7'>2 days</span>

                <a href='#' className='ms-auto text-gray-400 text-hover-primary fw-bold fs-7'>
                  Reply
                </a>
              </div>
              {/* end::Info */}

              {/* begin::Post */}
              <span className='text-gray-800 fs-7 fw-normal pt-1'>
                Outlines keep you honest. They stop you from indulging in poorly
              </span>
              {/* end::Post */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Reply */}
        </div>
        {/* end::Replies */}

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
                path='/media/icons/duotune/communication/com012.svg'
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

export {FeedsWidget3}
