/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'
import {KTSVG} from '../../../_metronic/helpers'

export function Example10ActiveIconAndTextColorStyle() {
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='active-style-color'>
        <a href='#active-icon-and-text-color-style'></a>Active Icon & Text Color Styles
      </h1>
      <div className='py-5'>
        Use
        <code>.btn-active-color-{'{color}'}</code>class to set a button's text and icon colors for
        active and hover states only:
      </div>

      <div className='py-5'>
        <div className='rounded border p-10'>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-white btn-active-text-white me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            White
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-primary btn-active-text-primary me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Primary
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-secondary btn-active-text-secondary me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Secondary
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-light btn-active-text-light me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Light
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-success btn-active-text-success me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Success
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-info btn-active-text-info me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Info
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-warning btn-active-text-warning me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Warning
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-danger btn-active-text-danger me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Danger
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-dark btn-active-text-dark me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Dark
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-muted btn-active-text-muted me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Muted
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-gray-100 btn-active-text-gray-100 me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-100
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-gray-200 btn-active-text-gray-200 me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-200
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-gray-300 btn-active-text-gray-300 me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-300
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-gray-400 btn-active-text-gray-400 me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-400
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-gray-500 btn-active-text-gray-500 me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-500
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-gray-600 btn-active-text-gray-600 me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-600
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-gray-700 btn-active-text-gray-700 me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-700
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-gray-800 btn-active-text-gray-800 me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-800
          </a>
          <a
            href='#'
            className='btn btn-bg-light btn-active-icon-gray-900 btn-active-text-gray-900 me-2 mb-2'
          >
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-900
          </a>
        </div>
      </div>
      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<a href="#" class="btn btn-active-icon-white btn-active-text-white"><span class="svg-icon svg-icon-1"><svg>...</svg></span>White</a>
<a href="#" class="btn btn-active-icon-primary btn-active-text-primary"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Primary</a>
<a href="#" class="btn btn-active-icon-secondary btn-active-text-secondary"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Secondary</a>
<a href="#" class="btn btn-active-icon-light btn-active-text-light"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Light</a>
<a href="#" class="btn btn-active-icon-success btn-active-text-success"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Success</a>
<a href="#" class="btn btn-active-icon-info btn-active-text-info"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Info</a>
<a href="#" class="btn btn-active-icon-warning btn-active-text-warning"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Warning</a>
<a href="#" class="btn btn-active-icon-danger btn-active-text-danger"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Danger</a>
<a href="#" class="btn btn-active-icon-dark btn-active-text-dark"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Dark</a>
<a href="#" class="btn btn-active-icon-muted btn-active-text-muted"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Muted</a>
<a href="#" class="btn btn-active-icon-gray-100 btn-active-text-gray-100"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-100</a>
<a href="#" class="btn btn-active-icon-gray-200 btn-active-text-gray-200"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-200</a>
<a href="#" class="btn btn-active-icon-gray-300 btn-active-text-gray-300"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-300</a>
<a href="#" class="btn btn-active-icon-gray-400 btn-active-text-gray-400"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-400</a>
<a href="#" class="btn btn-active-icon-gray-500 btn-active-text-gray-500"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-500</a>
<a href="#" class="btn btn-active-icon-gray-600 btn-active-text-gray-600"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-600</a>
<a href="#" class="btn btn-active-icon-gray-700 btn-active-text-gray-700"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-700</a>
<a href="#" class="btn btn-active-icon-gray-800 btn-active-text-gray-800"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-800</a>
<a href="#" class="btn btn-active-icon-gray-900 btn-active-text-gray-900"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-900</a>`
