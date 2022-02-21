/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget1: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Tasks Overview</span>
          <span className='text-muted mt-1 fw-bold fs-7'>Pending 10 tasks</span>
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
      <div className='card-body pt-5'>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-success'>
              <KTSVG
                path='/media/icons/duotune/abstract/abs027.svg'
                className='svg-icon-2x svg-icon-success'
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bolder'>
              Project Briefing
            </a>
            <span className='text-muted fw-bold'>Project Manager</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-warning'>
              <KTSVG
                path='/media/icons/duotune/art/art005.svg'
                className='svg-icon-2x svg-icon-warning'
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bolder'>
              Concept Design
            </a>
            <span className='text-muted fw-bold'>Art Director</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-primary'>
              <KTSVG
                path='/media/icons/duotune/communication/com012.svg'
                className='svg-icon-2x svg-icon-primary'
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bolder'>
              Functional Logics
            </a>
            <span className='text-muted fw-bold'>Lead Developer</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-danger'>
              <KTSVG
                path='/media/icons/duotune/coding/cod008.svg'
                className='svg-icon-2x svg-icon-danger'
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bolder'>
              Development
            </a>
            <span className='text-muted fw-bold'>DevOps</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-info'>
              <KTSVG
                path='/media/icons/duotune/general/gen049.svg'
                className='svg-icon-2x svg-icon-info'
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-dark text-hover-primary fs-6 fw-bolder'>
              Testing
            </a>
            <span className='text-muted fw-bold'>QA Managers</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget1}
