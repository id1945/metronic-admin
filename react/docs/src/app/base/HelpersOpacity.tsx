/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function HelpersOpacity() {
  const {REACT_APP_THEME_NAME, REACT_APP_SASS_PATH} = process.env
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>

        <div className='py-5'>
          <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; sets custom opacity classes in{' '}
          <code>{REACT_APP_SASS_PATH}/helpers/_opacity.scss</code> and through a SASS variable{' '}
          <code>$opacity-values</code> defined in{' '}
          <code>{REACT_APP_SASS_PATH}/components/_variables.scss</code> to provide additional
          opacity utility classes to cover its own design system.
        </div>
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#opacity'></a>Opacity
        </h1>

        <div className='py-5'>
          Use the <code>{`.opacity-{ 0, 5, 10, 15 ,20, 25, 50, 75, 100 }`}</code> class to set an
          element's opacity style.
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='d-flex flex-wrap align-items-center'>
              <div className='opacity-0 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-bold'>
                .opacity-0
              </div>
              <div className='opacity-5 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-bold'>
                .opacity-5
              </div>
              <div className='opacity-10 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-bold'>
                .opacity-10
              </div>
              <div className='opacity-15 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-bold'>
                .opacity-15
              </div>
              <div className='opacity-20 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-bold'>
                .opacity-20
              </div>
              <div className='opacity-25 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-bold'>
                .opacity-25
              </div>
              <div className='opacity-50 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-bold'>
                .opacity-50
              </div>
              <div className='opacity-75 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-bold'>
                .opacity-75
              </div>
              <div className='opacity-100 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-bold'>
                .opacity-100
              </div>
            </div>
          </div>
        </div>

        <CodeBlock language='markup' code={code} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#opactiy-hover-effects'></a>Opacity Hover Effects
        </h1>

        <div className='py-5'>
          Use <code>{`.opacity-{ 0, 5, 10, 15 ,20, 25, 50, 75, 100 }-hover`}</code> to display an
          element's opacity on hover.
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='d-flex flex-wrap align-items-center'>
              <div className='opacity-0-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'>
                .opacity-0-hover
              </div>
              <div className='opacity-5-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'>
                .opacity-5-hover
              </div>
              <div className='opacity-10-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'>
                .opacity-10-hover
              </div>
              <div className='opacity-15-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'>
                .opacity-15-hover
              </div>
              <div className='opacity-20-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'>
                .opacity-20-hover
              </div>
              <div className='opacity-25-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'>
                .opacity-25-hover
              </div>
              <div className='opacity-50-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'>
                .opacity-50-hover
              </div>
              <div className='opacity-75-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'>
                .opacity-75-hover
              </div>
              <div className='opacity-100-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'>
                .opacity-100-hover
              </div>
            </div>
          </div>
        </div>

        <CodeBlock language='markup' code={code2} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#opacity-active-state'></a>Opacity Active State
        </h1>

        <div className='py-5'>
          Use <code>{`.opacity-active-{ 0, 5, 10, 15 ,20, 25, 50, 75, 100 }`}</code> to set an
          element's opacity on active states. Click on the demo below to trigger the active state.
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='d-flex flex-wrap align-items-center nav'>
              <div
                className='nav-link opacity-active-0 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-active-0
              </div>
              <div
                className='nav-link opacity-active-5 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-active-5
              </div>
              <div
                className='nav-link opacity-active-10 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-active-10
              </div>
              <div
                className='nav-link opacity-active-15 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-active-15
              </div>
              <div
                className='nav-link opacity-active-20 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-active-20
              </div>
              <div
                className='nav-link opacity-active-25 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-active-25
              </div>
              <div
                className='nav-link opacity-active-50 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-active-50
              </div>
              <div
                className='nav-link opacity-active-75 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-active-75
              </div>
              <div
                className='nav-link opacity-active-100 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-active-100
              </div>
            </div>
          </div>
        </div>

        <CodeBlock language='markup' code={code3} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#opacity-combine'></a>Opacity Combined Active & Hover State
        </h1>

        <div className='py-5'>
          Use <code>{`.opacity-state-{ 0, 5, 10, 15 ,20, 25, 50, 75, 100 }`}</code> to set an
          element's opacity on both active and hover states. Click on the demo below to trigger the
          active state.
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='d-flex flex-wrap align-items-center nav'>
              <div
                className='nav-link opacity-state-0 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-state-0
              </div>
              <div
                className='nav-link opacity-state-5 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-state-5
              </div>
              <div
                className='nav-link opacity-state-10 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-state-10
              </div>
              <div
                className='nav-link opacity-state-15 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-state-15
              </div>
              <div
                className='nav-link opacity-state-20 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-state-20
              </div>
              <div
                className='nav-link opacity-state-25 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-state-25
              </div>
              <div
                className='nav-link opacity-state-50 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-state-50
              </div>
              <div
                className='nav-link opacity-state-75 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-state-75
              </div>
              <div
                className='nav-link opacity-state-100 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold'
                data-bs-toggle='tab'
              >
                .opacity-state-100
              </div>
            </div>
          </div>
        </div>

        <CodeBlock language='markup' code={code4} />
      </div>
    </>
  )
}

const code = `<div class="opacity-0"></div>
<div class="opacity-5"></div>
<div class="opacity-10"></div>
<div class="opacity-15"></div>
<div class="opacity-20"></div>
<div class="opacity-25"></div>
<div class="opacity-50"></div>
<div class="opacity-75"></div>
<div class="opacity-100"></div>`

const code2 = `<div class="opacity-0-hover"></div>
<div class="opacity-5-hover"></div>
<div class="opacity-10-hover"></div>
<div class="opacity-15-hover"></div>
<div class="opacity-20-hover"></div>
<div class="opacity-25-hover"></div>
<div class="opacity-50-hover"></div>
<div class="opacity-75-hover"></div>
<div class="opacity-100-hover"></div>`

const code3 = `<div class="opacity-active-0"></div>
<div class="opacity-active-5"></div>
<div class="opacity-active-10"></div>
<div class="opacity-active-15"></div>
<div class="opacity-active-20"></div>
<div class="opacity-active-25"></div>
<div class="opacity-active-50"></div>
<div class="opacity-active-75"></div>
<div class="opacity-active-100"></div>`

const code4 = `<div class="opacity-state-0"></div>
<div class="opacity-state-5"></div>
<div class="opacity-state-10"></div>
<div class="opacity-state-15"></div>
<div class="opacity-state-20"></div>
<div class="opacity-state-25"></div>
<div class="opacity-state-50"></div>
<div class="opacity-state-75"></div>
<div class="opacity-state-100"></div>`
