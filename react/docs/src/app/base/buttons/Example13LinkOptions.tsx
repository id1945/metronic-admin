/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example13LinkOptions() {
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='utility-classes'>
        <a href='#link-option'></a>Link Option
      </h1>
      <div className='py-5'>
        Use <code>.btn-link</code> class with any other button classes to set a link buttons without
        side paddings:
      </div>
      <div className='py-5'>
        <div className='rounded border p-10'>
          <a href='#' className='btn btn-link btn-color-muted btn-active-color-primary me-5 mb-2'>
            Muted
          </a>
          <a
            href='#'
            className='btn btn-link btn-color-gray-500 btn-active-color-primary me-5 mb-2'
          >
            Gray 500
          </a>
          <a href='#' className='btn btn-link btn-color-info btn-active-color-primary me-5 mb-2'>
            Primary
          </a>
          <a href='#' className='btn btn-link btn-color-success btn-active-color-primary me-5 mb-2'>
            Success
          </a>
          <a href='#' className='btn btn-link btn-color-danger btn-active-color-primary me-5 mb-2'>
            Danger
          </a>
          <a href='#' className='btn btn-link btn-color-warning btn-active-color-primary me-5 mb-2'>
            Warning
          </a>
        </div>
      </div>
      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<a href="#" class="btn btn-link btn-color-muted btn-active-color-primary me-5 mb-2">Muted</a>
<a href="#" class="btn btn-link btn-color-gray-500 btn-active-color-primary me-5 mb-2">Gray 500</a>
<a href="#" class="btn btn-link btn-color-info btn-active-color-primary me-5 mb-2">Primary</a>
<a href="#" class="btn btn-link btn-color-success btn-active-color-primary me-5 mb-2">Success</a>
<a href="#" class="btn btn-link btn-color-danger btn-active-color-primary me-5 mb-2">Danger</a>
<a href="#" class="btn btn-link btn-color-warning btn-active-color-primary me-5 mb-2">Warning</a>`
