/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {KTSVG} from '../../../helpers'

export function Dropdown2() {
  const [activeTab, setActiveTab] = useState('tab1')
  const [searchVal, setSearchVal] = useState('')
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column w-300px w-lg-350px p-5'
      data-kt-menu='true'
    >
      {/* <!--begin::Input--> */}
      <div className='input-group input-group-solid mb-5'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>
            <KTSVG className='svg-icon-4' path='/media/icons/duotune/general/gen021.svg' />
          </span>
        </div>
        <input
          type='text'
          className='form-control ps-0'
          name='search'
          value={searchVal}
          placeholder='Filter reports'
          onChange={(e) => {
            setSearchVal(e.target.value)
          }}
        />
      </div>
      {/* <!--end::Input--> */}

      {/* <!--begin::Tabs--> */}
      <ul className='nav nav-line-tabs nav-line-tabs-2x border-light fw-bold mb-5'>
        <li className='nav-item'>
          <a
            onClick={() => setActiveTab('tab1')}
            className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
          >
            Today
          </a>
        </li>

        <li className='nav-item'>
          <a
            onClick={() => setActiveTab('tab2')}
            className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
          >
            Last Week
          </a>
        </li>
      </ul>
      {/* <!--end::Tabs--> */}

      {/* <!--begin::Tab Content--> */}
      <div className='tab-content'>
        {/* <!--begin::Tab Pane--> */}
        <div
          className={`tab-pane ${activeTab === 'tab1' ? 'active' : ''}`}
          id='kt_dropdown_2_tab_1'
        >
          <ul className='menu menu-custom menu-column menu-rounded menu-title-gray-600 menu-icon-muted menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold'>
            <li className='menu-item py-1'>
              <a href='#' className='menu-link px-3'>
                <span className='menu-icon'>
                  <KTSVG className='svg-icon-1' path='/media/icons/duotune/general/gen002.svg' />
                </span>
                <span className='menu-title'>Web & App History</span>
              </a>
            </li>
            <li className='menu-item py-1'>
              <a href='#' className='menu-link px-3'>
                <span className='menu-icon'>
                  <KTSVG
                    className='svg-icon-1'
                    path='/media/icons/duotune/communication/com010.svg'
                  />
                </span>
                <span className='menu-title'>Activity and Timeline</span>
                <span className='menu-badge badge badge-light-danger fw-bold'>new</span>
              </a>
            </li>
            <li className='menu-item py-1'>
              <a href='#' className='menu-link px-3'>
                <span className='menu-icon'>
                  <KTSVG className='svg-icon-1' path='/media/icons/duotune/files/fil017.svg' />
                </span>
                <span className='menu-title'>Business Features</span>
              </a>
            </li>
            <li className='menu-item py-1'>
              <a href='#' className='menu-link px-3'>
                <span className='menu-icon'>
                  <KTSVG className='svg-icon-1' path='/media/icons/duotune/abstract/abs021.svg' />
                </span>
                <span className='menu-title'>Accessibility Settings</span>
              </a>
            </li>
            <li className='menu-item py-1'>
              <a href='#' className='menu-link px-3'>
                <span className='menu-icon'>
                  <KTSVG className='svg-icon-1' path='/media/icons/duotune/abstract/abs038.svg' />
                </span>
                <span className='menu-title'>Data & Personalisation</span>
              </a>
            </li>
            <li className='menu-item py-1'>
              <a href='#' className='menu-link px-3'>
                <span className='menu-icon'>
                  <KTSVG className='svg-icon-1' path='/media/icons/duotune/general/gen007.svg' />
                </span>
                <span className='menu-title'>General Preference</span>
              </a>
            </li>
          </ul>
        </div>
        {/* <!--end::Tab Pane--> */}

        {/* <!--begin::Tab Pane--> */}
        <div
          className={`tab-pane ${activeTab === 'tab2' ? 'active' : ''}`}
          id='kt_dropdown_2_tab_2'
        >
          <ul className='menu menu-custom menu-column menu-rounded menu-title-gray-600 menu-icon-muted menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold'>
            <li className='menu-item py-1'>
              <a href='#' className='menu-link active px-3'>
                <span className='menu-icon'>
                  <KTSVG
                    className='svg-icon-1'
                    path='/media/icons/duotune/communication/com010.svg'
                  />
                </span>
                <span className='menu-title'>Activity and Timeline</span>
                <span className='menu-badge badge badge-danger fw-bold'>new</span>
              </a>
            </li>

            <li className='menu-item py-1'>
              <a href='#' className='menu-link px-3'>
                <span className='menu-icon'>
                  <KTSVG className='svg-icon-1' path='/media/icons/duotune/files/fil017.svg' />
                </span>
                <span className='menu-title'>Business Features</span>
              </a>
            </li>

            <li className='menu-item py-1'>
              <a href='#' className='menu-link px-3'>
                <span className='menu-icon'>
                  <KTSVG className='svg-icon-1' path='/media/icons/duotune/abstract/abs021.svg' />
                </span>
                <span className='menu-title'>Accessibility Settings</span>
              </a>
            </li>

            <li className='menu-item py-1'>
              <a href='#' className='menu-link px-3'>
                <span className='menu-icon'>
                  <KTSVG className='svg-icon-1' path='/media/icons/duotune/abstract/abs038.svg' />
                </span>
                <span className='menu-title'>Data & Personalisation</span>
              </a>
            </li>

            <li className='menu-item py-1'>
              <a href='#' className='menu-link px-3'>
                <span className='menu-icon'>
                  <KTSVG className='svg-icon-1' path='/media/icons/duotune/general/gen007.svg' />
                </span>
                <span className='menu-title'>General Preference</span>
              </a>
            </li>

            <li className='menu-item py-1'>
              <a href='#' className='menu-link px-3'>
                <span className='menu-icon'>
                  <KTSVG className='svg-icon-1' path='/media/icons/duotune/general/gen002.svg' />
                </span>
                <span className='menu-title'>Web & App History</span>
              </a>
            </li>
          </ul>
        </div>
        {/* <!--end::Tab Pane--> */}
      </div>
      {/* <!--end::Tab Content--> */}
    </div>
  )
}
