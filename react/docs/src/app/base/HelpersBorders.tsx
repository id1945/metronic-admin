/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function HelpersBorders() {
  const {REACT_APP_THEME_NAME, REACT_APP_SASS_PATH, REACT_APP_BOOTSTRAP_DOCS_LINK} = process.env

  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>

        <div className='py-5'>
          <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; extends{' '}
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/utilities/borders`} className='fw-bold'>
            Bootstrap Borders
          </a>
          &nbsp; in
          <code>{REACT_APP_SASS_PATH}/helpers/_borders.scss</code>to provide additional border
          utility classes to cover its own design system.
        </div>
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='border-styles'>
          <a href='#border-styles'></a>Border Styles
        </h1>

        <div className='py-5'>
          Use
          <code>.border-dashed</code>or
          <code>.border-dotted</code>classes to set an element's border style.
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='d-flex flex-wrap align-items-center'>
              <div className='border w-150px h-150px d-flex flex-center me-5 mb-5 fw-bold'>
                default style
              </div>
              <div className='border border-dashed w-150px h-150px d-flex flex-center me-5 mb-5 fw-bold'>
                .border-dashed
              </div>
              <div className='border border-dotted w-150px h-150px d-flex flex-center me-5 mb-5 fw-bold'>
                .border-dotted
              </div>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='border-states'>
          <a href='#border-states'></a>Border States
        </h1>

        <div className='py-5'>
          Use
          <code>.border-hover</code>to display an element's border on hover and
          <code>.border-active</code>to enable the border when
          <code>.active</code>class is applied.
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='d-flex flex-wrap align-items-center'>
              <div className='border border-primary border-hover w-150px h-150px d-flex flex-center me-5 mb-5 fw-bold'>
                .border-hover
              </div>
              <div className='border border-primary border-active active w-150px h-150px d-flex flex-center me-5 mb-5 fw-bold'>
                .border-active
                <br />
                .active
              </div>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code2} />
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-3' id='border-gray-colors'>
          <a href='#border-gray-colors'></a>Border Gray Colors
        </h1>

        <div className='py-5'>
          Use
          <code>.border-gray-{`{100, 200, 300, 400, 500, 600, 700, 800, 900}`}</code>
          to set an element's border color.
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='d-flex flex-wrap align-items-center'>
              <div className='w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold border border-gray-100'>
                .border-gray-100
              </div>
              <div className='w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold border border-gray-200'>
                .border-gray-200
              </div>
              <div className='w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold border border-gray-300'>
                .border-gray-300
              </div>
              <div className='w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold border border-gray-400'>
                .border-gray-400
              </div>
              <div className='w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold border border-gray-500'>
                .border-gray-500
              </div>
              <div className='w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold border border-gray-600'>
                .border-gray-600
              </div>
              <div className='w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold border border-gray-700'>
                .border-gray-700
              </div>
              <div className='w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold border border-gray-800'>
                .border-gray-800
              </div>
              <div className='w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-bold border border-gray-900'>
                .border-gray-900
              </div>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code3} />
      </div>
    </>
  )
}

const code = `<div className="border">
  default style
</div>

<div className="border border-dashed">
  .border-dashed
</div>

<div className="border border-dotted">
  .border-dotted
</div>`

const code2 = `<div className="border border-primary border-hover">
  .border-hover
</div>

<div className="border border-primary border-active active">
  .border-dashed
</div>`

const code3 = `<div className="border border-gray-100"></div>
<div className="border border-gray-200"></div>
<div className="border border-gray-300"></div>
<div className="border border-gray-400"></div>
<div className="border border-gray-500"></div>
<div className="border border-gray-600"></div>
<div className="border border-gray-700"></div>
<div className="border border-gray-800"></div>
<div className="border border-gray-900"></div>`
