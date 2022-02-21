/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget2: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bolder text-dark'>Authors</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
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
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/150-1.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              Emma Smith
            </a>
            <span className='text-muted d-block fw-bold'>Project Manager</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/150-4.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              Sean Bean
            </a>
            <span className='text-muted d-block fw-bold'>PHP, SQLite, Artisan CLI</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/150-12.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              Brian Cox
            </a>
            <span className='text-muted d-block fw-bold'>PHP, SQLite, Artisan CLI</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/150-8.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              Francis Mitcham
            </a>
            <span className='text-muted d-block fw-bold'>PHP, SQLite, Artisan CLI</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/150-6.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              Dan Wilson
            </a>
            <span className='text-muted d-block fw-bold'>PHP, SQLite, Artisan CLI</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget2}
