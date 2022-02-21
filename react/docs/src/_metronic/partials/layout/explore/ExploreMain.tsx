/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Toggle} from './Toggle'
import {Demos} from './Demos'
import {KTSVG} from '../../../helpers'

export function ExploreMain() {
  return (
    <>
      <Toggle />
      {/* begin::Exolore drawer */}
      <div
        id='kt_explore'
        className='bg-white'
        data-kt-drawer='true'
        data-kt-drawer-name='explore'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'300px', 'lg': '375px'}"
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_explore_toggle'
        data-kt-drawer-close='#kt_explore_close'
      >
        {/* begin::Card  */}
        <div className='card shadow-none w-100'>
          {/* begin::Header */}
          <div className='card-header' id='kt_explore_header'>
            <h5 className='card-title fw-bold text-gray-600'>
              Explore {process.env.REACT_APP_THEME_NAME}
            </h5>

            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon explore-btn-dismiss me-n5'
                id='kt_explore_close'
              >
                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-2' />
              </button>
            </div>
          </div>
          {/* end::Header */}
          {/* begin::Body */}
          <div className='card-body' id='kt_explore_body'>
            {/* begin::Content */}
            <div
              id='kt_explore_scroll'
              className='scroll-y me-n5 pe-5'
              data-kt-scroll='true'
              data-kt-scroll-height='auto'
              data-kt-scroll-wrappers='#kt_explore_body'
              data-kt-scroll-dependencies='#kt_explore_header, #kt_explore_footer'
              data-kt-scroll-offset='5px'
            >
              <Demos />
            </div>
            {/* end::Content */}
          </div>
          {/* end::Body */}
          {/* begin::Footer */}
          <div className='card-footer py-5 text-center' id='kt_explore_footer'>
            <a href={process.env.REACT_APP_PURCHASE_URL} className='btn btn-primary'>
              Purchase {process.env.REACT_APP_THEME_NAME}
            </a>
          </div>
          {/* end::Footer */}
        </div>
        {/* begin::Card */}
      </div>
      {/* end::Exolore drawer */}
    </>
  )
}
