/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget7: React.FC<Props> = ({className}) => {
  return (
    <div className='card card-xl-stretch mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bolder text-dark'>Latest Media</span>
          <span className='text-muted mt-1 fw-bold fs-7'>Articles and publications</span>
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
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-3'>
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-60px symbol-2by3 me-4'>
            <div
              className='symbol-label'
              style={{backgroundImage: `url(${toAbsoluteUrl('/media/stock/600x400/img-20.jpg')})`}}
            ></div>
          </div>
          {/* end::Symbol */}
          {/* begin::Title */}
          <div className='d-flex flex-row-fluid flex-wrap align-items-center'>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                Cup &amp; Green
              </a>
              <span className='text-muted fw-bold d-block pt-1'>Size: 87KB</span>
            </div>
            <span className='badge badge-light-success fs-8 fw-bolder my-2'>Approved</span>
          </div>
          {/* end::Title */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-60px symbol-2by3 me-4'>
            <div
              className='symbol-label'
              style={{backgroundImage: `url(${toAbsoluteUrl('/media/stock/600x400/img-19.jpg')})`}}
            ></div>
          </div>
          {/* end::Symbol */}
          {/* begin::Title */}
          <div className='d-flex flex-row-fluid flex-wrap align-items-center'>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                Yellow Background
              </a>
              <span className='text-muted fw-bold d-block pt-1'>Size: 1.2MB</span>
            </div>
            <span className='badge badge-light-warning fs-8 fw-bolder my-2'>In Progress</span>
          </div>
          {/* end::Title */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-60px symbol-2by3 me-4'>
            <div
              className='symbol-label'
              style={{backgroundImage: `url(${toAbsoluteUrl('/media/stock/600x400/img-25.jpg')})`}}
            ></div>
          </div>
          {/* end::Symbol */}
          {/* begin::Title */}
          <div className='d-flex flex-row-fluid flex-wrap align-items-center'>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                Nike &amp; Blue
              </a>
              <span className='text-muted fw-bold d-block pt-1'>Size: 87KB</span>
            </div>
            <span className='badge badge-light-success fs-8 fw-bolder my-2'>Success</span>
          </div>
          {/* end::Title */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center'>
          {/* begin::Symbol */}
          <div className='symbol symbol-60px symbol-2by3 me-4'>
            <div
              className='symbol-label'
              style={{backgroundImage: `url(${toAbsoluteUrl('/media/stock/600x400/img-24.jpg')}`}}
            ></div>
          </div>
          {/* end::Symbol */}
          {/* begin::Title */}
          <div className='d-flex flex-row-fluid flex-wrap align-items-center'>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                Red Boots
              </a>
              <span className='text-muted fw-bold d-block pt-1'>Size: 345KB</span>
            </div>
            <span className='badge badge-light-danger fs-8 fw-bolder my-2'>Rejected</span>
          </div>
          {/* end::Title */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget7}
