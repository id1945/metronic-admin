/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import {CodeBlock} from '../../../_metronic/partials'

export function Example6IconAndTextColorStyle() {
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='color-style'>
        <a href='#icon-and-text-color-style'></a>Icon & Text Color Styles
      </h1>
      <div className='py-5'>
        Use <code>{`.btn-icon-{text-color}`}</code> and <code>{`.btn-text-{text-color}`}</code>{' '}
        classes to set a button's icon and text colors separately:
      </div>
      <div className='py-5'>
        <div className='rounded border p-10'>
          <a href='#' className='btn btn-bg-dark btn-icon-white btn-text-white me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            White
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-primary btn-text-primary me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Primary
          </a>
          <a href='#' className='btn btn-bg-dark btn-icon-secondary btn-text-secondary me-2 mb-2'>
            Secondary
          </a>
          <a href='#' className='btn btn-bg-dark btn-icon-light btn-text-light me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Light
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-success btn-text-success me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Success
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-info btn-text-info me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Info
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-warning btn-text-warning me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Warning
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-danger btn-text-danger me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Danger
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-dark btn-text-dark me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Dark
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-muted btn-text-muted me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Muted
          </a>
          <a href='#' className='btn btn-bg-dark btn-icon-gray-100 btn-text-gray-100 me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-100
          </a>
          <a href='#' className='btn btn-bg-dark btn-icon-gray-200 btn-text-gray-200 me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-200
          </a>
          <a href='#' className='btn btn-bg-dark btn-icon-gray-300 btn-text-gray-300 me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-300
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-gray-400 btn-text-gray-400 me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-400
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-gray-500 btn-text-gray-500 me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-500
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-gray-600 btn-text-gray-600 me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-600
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-gray-700 btn-text-gray-700 me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-700
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-gray-800 btn-text-gray-800 me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-800
          </a>
          <a href='#' className='btn btn-bg-light btn-icon-gray-900 btn-text-gray-900 me-2 mb-2'>
            <KTSVG path='/media/icons/duotune/general/gen006.svg' className='svg-icon-1' />
            Gray-900
          </a>
        </div>
      </div>
      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<a href="#" class="btn btn-icon-white btn-text-white"><span class="svg-icon svg-icon-1"><svg>...</svg></span>White</a>
<a href="#" class="btn btn-icon-primary btn-text-primary"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Primary</a>
<a href="#" class="btn btn-icon-secondary btn-text-secondary"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Secondary</a>
<a href="#" class="btn btn-icon-light btn-text-light"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Light</a>
<a href="#" class="btn btn-icon-success btn-text-success"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Success</a>
<a href="#" class="btn btn-icon-info btn-text-info"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Info</a>
<a href="#" class="btn btn-icon-warning btn-text-warning"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Warning</a>
<a href="#" class="btn btn-icon-danger btn-text-danger"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Danger</a>
<a href="#" class="btn btn-icon-dark btn-text-dark"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Dark</a>
<a href="#" class="btn btn-icon-muted btn-text-muted"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Muted</a>
<a href="#" class="btn btn-icon-gray-100 btn-text-gray-100"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-100</a>
<a href="#" class="btn btn-icon-gray-200 btn-text-gray-200"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-200</a>
<a href="#" class="btn btn-icon-gray-300 btn-text-gray-300"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-300</a>
<a href="#" class="btn btn-icon-gray-400 btn-text-gray-400"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-400</a>
<a href="#" class="btn btn-icon-gray-500 btn-text-gray-500"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-500</a>
<a href="#" class="btn btn-icon-gray-600 btn-text-gray-600"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-600</a>
<a href="#" class="btn btn-icon-gray-700 btn-text-gray-700"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-700</a>
<a href="#" class="btn btn-icon-gray-800 btn-text-gray-800"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-800</a>
<a href="#" class="btn btn-icon-gray-900 btn-text-gray-900"><span class="svg-icon svg-icon-1"><svg>...</svg></span>Gray-900</a>`
