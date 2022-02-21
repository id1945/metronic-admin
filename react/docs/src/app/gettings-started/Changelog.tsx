import React from 'react'
import {KTSVG} from '../../_metronic/helpers'

export function Changelog() {
  const {REACT_APP_THEME_NAME, REACT_APP_VERSION} = process.env

  return (
    <>
      <div className='accordion accordion-flush accordion-icon-toggle' id='kt_accordion'>
        <div className='accordion-item mb-5'>
          <div
              className='accordion-header py-3 d-flex'
              data-bs-toggle='collapse'
              data-bs-target='#kt_accordion_body_v8_0_24'
              aria-expanded='true'
          >
            <span className='accordion-icon'>
              <KTSVG
                  path='/media/icons/duotune/arrows/arr064.svg'
                  className='svg-icon svg-icon-3'
              />
            </span>
            <h3 className='fs-3 text-gray-800 fw-bolder mb-0 ms-4'>
              {REACT_APP_THEME_NAME} {REACT_APP_VERSION} - September 20, 2021
            </h3>
          </div>
          <div
              id='kt_accordion_body_v8_0_24'
              className='fs-6 my-1 py-0 ps-10 collapse show'
              data-bs-parent='#kt_accordion'
          >
            <div className='accordion-body ps-0 pt-0'>
              <div className='mb-5'>
                <h3 className='fs-6 fw-bolder mb-1'>Update:</h3>
                <ul className='my-0 py-0'>
                  <li className='py-2'>Updated Explore drawer. <a href="https://preview.keenthemes.com/metronic8/react/demo1">Preview</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item mb-5'>
          <div
              className='accordion-header py-3 d-flex collapsed'
              data-bs-toggle='collapse'
              data-bs-target='#kt_accordion_body_v8_0_24'
              aria-expanded='true'
          >
            <span className='accordion-icon'>
              <KTSVG
                  path='/media/icons/duotune/arrows/arr064.svg'
                  className='svg-icon svg-icon-3'
              />
            </span>
            <h3 className='fs-3 text-gray-800 fw-bolder mb-0 ms-4'>
              {REACT_APP_THEME_NAME} v8.0.24 - September 2, 2021
            </h3>
          </div>
          <div
              id='kt_accordion_body_v8_0_24'
              className='fs-6 my-1 py-0 ps-10 collapse'
              data-bs-parent='#kt_accordion'
          >
            <div className='accordion-body ps-0 pt-0'>
              <div className='mb-5'>
                <h3 className='fs-6 fw-bolder mb-1'>Update:</h3>
                <ul className='my-0 py-0'>
                  <li className='py-2'>SwapperComponent improvements.</li>
                </ul>
              </div>
              <div className='mb-5'>
                <h3 className='fs-6 fw-bolder mb-1'>Fixes:</h3>
                <ul className='my-0 py-0'>
                  <li className='py-2'>
                    Fixed breadcrumbs on mobile version. <a href="https://preview.keenthemes.com/metronic8/react/demo1/dashboard">Preview</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item mb-5'>
          <div
            className='accordion-header py-3 d-flex collapsed'
            data-bs-toggle='collapse'
            data-bs-target='#kt_accordion_body_v8_0_23'
            aria-expanded='true'
          >
            <span className='accordion-icon'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr064.svg'
                className='svg-icon svg-icon-3'
              />
            </span>
            <h3 className='fs-3 text-gray-800 fw-bolder mb-0 ms-4'>
              {REACT_APP_THEME_NAME} v8.0.23 - August 20, 2021
            </h3>
          </div>
          <div
            id='kt_accordion_body_v8_0_23'
            className='fs-6 my-1 py-0 ps-10 collapse'
            data-bs-parent='#kt_accordion'
          >
            <div className='accordion-body ps-0 pt-0'>
              <div className='mb-5'>
                <h3 className='fs-6 fw-bolder mb-1'>New:</h3>
                <ul className='my-0 py-0'>
                  <li className='py-2'>
                    RTL version setup doc.{' '}
                    <a href='https://preview.keenthemes.com/metronic8/react/demo1-docs/docs/rtl'>
                      Preview
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mb-5'>
                <h3 className='fs-6 fw-bolder mb-1'>Update:</h3>
                <ul className='my-0 py-0'>
                  <li className='py-2'>
                    Migration to new doutone icons set.{' '}
                    <a href='https://preview.keenthemes.com/metronic8/react/demo1-docs/docs/icons/duotune'>
                      Preview
                    </a>
                  </li>
                  <li className='py-2'>Migration to new illustrations set.</li>
                  <li className='py-2'>DrawerComponent improvements.</li>
                </ul>
              </div>
              <div className='mb-5'>
                <h3 className='fs-6 fw-bolder mb-1'>Fixes:</h3>
                <ul className='my-0 py-0'>
                  <li className='py-2'>
                    Duplicated drawer overlay on second DrawerComponent initialization.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item mb-5'>
          <div
            className='accordion-header py-3 d-flex collapsed'
            data-bs-toggle='collapse'
            data-bs-target='#kt_accordion_body_v8_0_22'
            aria-expanded='true'
          >
            <span className='accordion-icon'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr064.svg'
                className='svg-icon svg-icon-3'
              />
            </span>
            <h3 className='fs-3 text-gray-800 fw-bolder mb-0 ms-4'>
              {REACT_APP_THEME_NAME} v8.0.22 - August 6, 2021
            </h3>
          </div>
          <div
            id='kt_accordion_body_v8_0_22'
            className='fs-6 my-1 py-0 ps-10 collapse'
            data-bs-parent='#kt_accordion'
          >
            <div className='accordion-body ps-0 pt-0'>
              <div className='mb-5'>
                <h3 className='fs-6 fw-bolder mb-1'>New:</h3>
                <ul className='my-0 py-0'>
                  <li className='py-2'>
                    Added demo2 react version.{' '}
                    <a href='https://preview.keenthemes.com/metronic/react/demo1/dashboard'>
                      Preview
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item mb-5'>
          <div
            className='accordion-header py-3 d-flex collapsed'
            data-bs-toggle='collapse'
            data-bs-target='#kt_accordion_body_v8_0_21'
            aria-expanded='true'
          >
            <span className='accordion-icon'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr064.svg'
                className='svg-icon svg-icon-3'
              />
            </span>
            <h3 className='fs-3 text-gray-800 fw-bolder mb-0 ms-4'>
              {REACT_APP_THEME_NAME} v8.0.21 - July 30, 2021
            </h3>
          </div>
          <div
            id='kt_accordion_body_v8_0_21'
            className='fs-6 my-1 py-0 ps-10 collapse'
            data-bs-parent='#kt_accordion'
          >
            <div className='accordion-body ps-0 pt-0'>
              <div className='mb-5'>
                <h3 className='fs-6 fw-bolder mb-1'>New:</h3>
                <ul className='my-0 py-0'>
                  <li className='py-2'>
                    Dark mode setup doc.{' '}
                    <a href='https://preview.keenthemes.com/metronic8/react/demo1-docs/docs/dark-mode'>
                      Preview
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mb-5'>
                <h3 className='fs-6 fw-bolder mb-1'>Fix:</h3>
                <ul className='my-0 py-0'>
                  <li className='py-2'>
                    <code className='ms-0'>Error page </code> redirect issue. Now we have page
                    refresh after redirect from Error pages.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item mb-5'>
          <div
            className='accordion-header py-3 d-flex collapsed'
            data-bs-toggle='collapse'
            data-bs-target='#kt_accordion_body_v1_0_0'
            aria-expanded='true'
          >
            <span className='accordion-icon'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr064.svg'
                className='svg-icon svg-icon-3'
              />
            </span>
            <h3 className='fs-3 text-gray-800 fw-bolder mb-0 ms-4'>
              {REACT_APP_THEME_NAME} v8.0.19 - July 20, 2021
            </h3>
          </div>
          <div
            id='kt_accordion_body_v1_0_0'
            className='fs-6 my-1 py-0 ps-10 collapse'
            data-bs-parent='#kt_accordion'
          >
            <div className='accordion-body ps-0 pt-0'>
              <ul className='my-0 py-0'>
                <li className='py-2'>Initial release</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
