/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import {CodeBlock} from '../../../_metronic/partials'

export function Example14UtilityClasses() {
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='utility-classes'>
        <a href='#utility-classes'></a>Utility Classes
      </h1>
      <div className='py-5'>
        Use
        <code>.btn-flush</code>class to remove paddings, borders, background and rounded corners:
      </div>
      <div className='py-5'>
        <div className='rounded border p-10'>
          <a href='#' className='btn btn-flush'>
            Flushed button
          </a>
        </div>
      </div>
      <CodeBlock language='markup' code={code} />
      <div className='pt-10 pb-5'>
        Use
        <code>.btn-flex</code>class to vertically center button inner elements with
        <code>display: inline-flex</code>and
        <code>align-items: center</code>:
      </div>
      <div className='py-5'>
        <div className='rounded border p-10'>
          <a href='#' className='btn btn-flex btn-primary px-6'>
            <KTSVG path='/media/icons/duotune/graphs/gra004.svg' className='svg-icon svg-icon-2x' />

            <span className='d-flex flex-column align-items-start ms-2'>
              <span className='fs-3 fw-bolder'>Caption</span>
              <span className='fs-7'>Some description</span>
            </span>
          </a>
        </div>
      </div>
      <CodeBlock language='markup' code={code2} />
    </div>
  )
}

const code = `<a href="#" className="btn btn-flush">Flushed button</a>`
const code2 = `<a href="#" className="btn btn-flex btn-primary px-6">
  <span className="svg-icon svg-icon-2x"><svg>...</svg></span>
  <span className="d-flex flex-column align-items-start ms-2">
      <span className="fs-3 fw-bolder">Caption</span>
      <span className="fs-7">Some description</span>
  </span>
</a>`
