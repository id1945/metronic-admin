/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
  items?: number
}

const ListsWidget4: React.FC<Props> = ({className, items = 6}) => {
  return (
    <div className='card card-xl-stretch mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Trends</span>
          <span className='text-muted mt-1 fw-bold fs-7'>Latest tech trends</span>
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
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label'>
              <img
                src={toAbsoluteUrl('/media/svg/brand-logos/plurk.svg')}
                className='h-50 align-self-center'
                alt=''
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Section */}
          <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder'>
                Top Authors
              </a>
              <span className='text-muted fw-bold d-block fs-7'>Mark, Rowling, Esther</span>
            </div>
            <span className='badge badge-light fw-bolder my-2'>+82$</span>
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label'>
              <img
                src={toAbsoluteUrl('/media/svg/brand-logos/telegram.svg')}
                className='h-50 align-self-center'
                alt=''
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Section */}
          <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder'>
                Popular Authors
              </a>
              <span className='text-muted fw-bold d-block fs-7'>Randy, Steve, Mike</span>
            </div>
            <span className='badge badge-light fw-bolder my-2'>+280$</span>
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label'>
              <img
                src={toAbsoluteUrl('/media/svg/brand-logos/vimeo.svg')}
                className='h-50 align-self-center'
                alt=''
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Section */}
          <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder'>
                New Users
              </a>
              <span className='text-muted fw-bold d-block fs-7'>John, Pat, Jimmy</span>
            </div>
            <span className='badge badge-light fw-bolder my-2'>+4500$</span>
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label'>
              <img
                src={toAbsoluteUrl('/media/svg/brand-logos/bebo.svg')}
                className='h-50 align-self-center'
                alt=''
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Section */}
          <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder'>
                Active Customers
              </a>
              <span className='text-muted fw-bold d-block fs-7'>Mark, Rowling, Esther</span>
            </div>
            <span className='badge badge-light fw-bolder my-2'>+4500$</span>
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}

        {items > 4 && (
          <div className='d-flex align-items-sm-center mb-7'>
            {/* begin::Symbol */}
            <div className='symbol symbol-50px me-5'>
              <span className='symbol-label'>
                <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/kickstarter.svg')}
                  className='h-50 align-self-center'
                  alt=''
                />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Section */}
            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
              <div className='flex-grow-1 me-2'>
                <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder'>
                  Bestseller Theme
                </a>
                <span className='text-muted fw-bold d-block fs-7'>Disco, Retro, Sports</span>
              </div>
              <span className='badge badge-light fw-bolder my-2'>+4500$</span>
            </div>
            {/* end::Section */}
          </div>
        )}

        {items > 5 && (
          <div className='d-flex align-items-sm-center'>
            {/* begin::Symbol */}
            <div className='symbol symbol-50px me-5'>
              <span className='symbol-label'>
                <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/fox-hub.svg')}
                  className='h-50 align-self-center'
                  alt=''
                />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Section */}
            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
              <div className='flex-grow-1 me-2'>
                <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder'>
                  Fox Broker App
                </a>
                <span className='text-muted fw-bold d-block fs-7'>Finance, Corporate, Apps</span>
              </div>
              <span className='badge badge-light fw-bolder my-2'>+4500$</span>
            </div>
            {/* end::Section */}
          </div>
        )}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget4}
