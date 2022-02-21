/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {KTSVG} from '../../../helpers'

type Props = {
  className: string
  color: string
}

const MixedWidget1: React.FC<Props> = ({className, color}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body p-0'>
        {/* begin::Header */}
        <div className={`px-9 pt-7 card-rounded h-275px w-100 bg-${color}`}>
          {/* begin::Heading */}
          <div className='d-flex flex-stack'>
            <h3 className='m-0 text-white fw-bolder fs-3'>Sales Summary</h3>
            <div className='ms-1'>
              {/* begin::Menu */}
              <button
                type='button'
                className={`btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color-${color} border-0 me-n3`}
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
          {/* end::Heading */}
          {/* begin::Balance */}
          <div className='d-flex text-center flex-column text-white pt-8'>
            <span className='fw-bold fs-7'>You Balance</span>
            <span className='fw-bolder fs-2x pt-1'>$37,562.00</span>
          </div>
          {/* end::Balance */}
        </div>
        {/* end::Header */}
        {/* begin::Items */}
        <div
          className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-white'
          style={{marginTop: '-100px'}}
        >
          {/* begin::Item */}
          <div className='d-flex align-items-center mb-6'>
            {/* begin::Symbol */}
            <div className='symbol symbol-45px w-40px me-5'>
              <span className='symbol-label bg-lighten'>
                <KTSVG path='/media/icons/duotune/maps/map004.svg' className='svg-icon-1' />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Description */}
            <div className='d-flex align-items-center flex-wrap w-100'>
              {/* begin::Title */}
              <div className='mb-1 pe-3 flex-grow-1'>
                <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                  Sales
                </a>
                <div className='text-gray-400 fw-bold fs-7'>100 Regions</div>
              </div>
              {/* end::Title */}
              {/* begin::Label */}
              <div className='d-flex align-items-center'>
                <div className='fw-bolder fs-5 text-gray-800 pe-1'>$2,5b</div>
                <KTSVG
                  path='/media/icons/duotune/arrows/arr066.svg'
                  className='svg-icon-5 svg-icon-success ms-1'
                />
              </div>
              {/* end::Label */}
            </div>
            {/* end::Description */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='d-flex align-items-center mb-6'>
            {/* begin::Symbol */}
            <div className='symbol symbol-45px w-40px me-5'>
              <span className='symbol-label bg-lighten'>
                <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-1' />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Description */}
            <div className='d-flex align-items-center flex-wrap w-100'>
              {/* begin::Title */}
              <div className='mb-1 pe-3 flex-grow-1'>
                <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                  Revenue
                </a>
                <div className='text-gray-400 fw-bold fs-7'>Quarter 2/3</div>
              </div>
              {/* end::Title */}
              {/* begin::Label */}
              <div className='d-flex align-items-center'>
                <div className='fw-bolder fs-5 text-gray-800 pe-1'>$1,7b</div>
                <KTSVG
                  path='/media/icons/duotune/general/gen024.svg'
                  className='svg-icon-5 svg-icon-danger ms-1'
                />
              </div>
              {/* end::Label */}
            </div>
            {/* end::Description */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='d-flex align-items-center mb-6'>
            {/* begin::Symbol */}
            <div className='symbol symbol-45px w-40px me-5'>
              <span className='symbol-label bg-lighten'>
                <KTSVG path='/media/icons/duotune/electronics/elc005.svg' className='svg-icon-1' />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Description */}
            <div className='d-flex align-items-center flex-wrap w-100'>
              {/* begin::Title */}
              <div className='mb-1 pe-3 flex-grow-1'>
                <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                  Growth
                </a>
                <div className='text-gray-400 fw-bold fs-7'>80% Rate</div>
              </div>
              {/* end::Title */}
              {/* begin::Label */}
              <div className='d-flex align-items-center'>
                <div className='fw-bolder fs-5 text-gray-800 pe-1'>$8,8m</div>
                <KTSVG
                  path='/media/icons/duotune/arrows/arr066.svg'
                  className='svg-icon-5 svg-icon-success ms-1'
                />
              </div>
              {/* end::Label */}
            </div>
            {/* end::Description */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='d-flex align-items-center'>
            {/* begin::Symbol */}
            <div className='symbol symbol-45px w-40px me-5'>
              <span className='symbol-label bg-lighten'>
                <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-1' />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Description */}
            <div className='d-flex align-items-center flex-wrap w-100'>
              {/* begin::Title */}
              <div className='mb-1 pe-3 flex-grow-1'>
                <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                  Dispute
                </a>
                <div className='text-gray-400 fw-bold fs-7'>3090 Refunds</div>
              </div>
              {/* end::Title */}
              {/* begin::Label */}
              <div className='d-flex align-items-center'>
                <div className='fw-bolder fs-5 text-gray-800 pe-1'>$270m</div>
                <KTSVG
                  path='/media/icons/duotune/arrows/arr065.svg'
                  className='svg-icon-5 svg-icon-danger ms-1'
                />
              </div>
              {/* end::Label */}
            </div>
            {/* end::Description */}
          </div>
          {/* end::Item */}
        </div>
        {/* end::Items */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {MixedWidget1}
