/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget3: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bolder text-dark'>Todo</h3>
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
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-success'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Create FireStone Logo
            </a>
            <span className='text-muted fw-bold d-block'>Due in 2 Days</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-success fs-8 fw-bolder'>New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-primary'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Stakeholder Meeting
            </a>
            <span className='text-muted fw-bold d-block'>Due in 3 Days</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-primary fs-8 fw-bolder'>New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-warning'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Scoping &amp; Estimations
            </a>
            <span className='text-muted fw-bold d-block'>Due in 5 Days</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-warning fs-8 fw-bolder'>New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-primary'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              KPI App Showcase
            </a>
            <span className='text-muted fw-bold d-block'>Due in 2 Days</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-primary fs-8 fw-bolder'>New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-danger'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Project Meeting
            </a>
            <span className='text-muted fw-bold d-block'>Due in 12 Days</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-danger fs-8 fw-bolder'>New</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-success'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Customers Update
            </a>
            <span className='text-muted fw-bold d-block'>Due in 1 week</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-success fs-8 fw-bolder'>New</span>
        </div>
        {/* end:Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget3}
