/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function HelpersText() {
  const {REACT_APP_SASS_PATH} = process.env

  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='text-colors'>
          <a href='#text-colors'></a>Text Colors
        </h1>
        <div className='py-5'>
          Use extended text helper classes defined in
          <code>{REACT_APP_SASS_PATH}/helpers/_text.scss</code>for more advance use cases. Colorize
          text with color utilities as shown
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <p className='text-white bg-dark py-3 fw-bold fw-6'>.text-white</p>
            <p className='text-primary py-3 fw-bold fw-6'>.text-primary</p>
            <p className='text-secondary py-3 fw-bold fw-6'>.text-secondary</p>
            <p className='text-light bg-dark py-3 fw-bold fw-6'>.text-light</p>
            <p className='text-success py-3 fw-bold fw-6'>.text-success</p>
            <p className='text-info py-3 fw-bold fw-6'>.text-info</p>
            <p className='text-warning py-3 fw-bold fw-6'>.text-warning</p>
            <p className='text-danger py-3 fw-bold fw-6'>.text-danger</p>
            <p className='text-dark py-3 fw-bold fw-6'>.text-dark</p>
            <p className='text-muted py-3 fw-bold fw-6'>.text-muted</p>
            <p className='text-gray-100 bg-dark py-3 fw-bold fw-6'>.text-gray-100</p>
            <p className='text-gray-200 py-3 fw-bold fw-6'>.text-gray-200</p>
            <p className='text-gray-300 py-3 fw-bold fw-6'>.text-gray-300</p>
            <p className='text-gray-400 py-3 fw-bold fw-6'>.text-gray-400</p>
            <p className='text-gray-500 py-3 fw-bold fw-6'>.text-gray-500</p>
            <p className='text-gray-600 py-3 fw-bold fw-6'>.text-gray-600</p>
            <p className='text-gray-700 py-3 fw-bold fw-6'>.text-gray-700</p>
            <p className='text-gray-800 py-3 fw-bold fw-6'>.text-gray-800</p>
            <p className='text-gray-900 py-3 fw-bold fw-6'>.text-gray-900</p>
          </div>
        </div>

        <CodeBlock language='markup' code={code} />
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='light-colors'>
          <a href='#light-colors'></a>Light Colors
        </h1>

        <div className='py-5'>
          Use
          <code>.text-light-{`{color}`}</code>class to set an element's light color defined with
          <code>$theme-light-colors</code>in
          <code>sass/_variables.scss</code>:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <p className='text-light-primary bg-primary p-3 fw-bold fw-6'>.text-light-primary</p>
            <p className='text-light-success bg-success p-3 fw-bold fw-6'>.text-light-success</p>
            <p className='text-light-info bg-info p-3 fw-bold fw-6'>.text-light-info</p>
            <p className='text-light-warning bg-warning p-3 fw-bold fw-6'>.text-light-warning</p>
            <p className='text-light-danger bg-danger p-3 fw-bold fw-6'>.text-light-danger</p>
            <p className='text-light-dark bg-dark p-3 fw-bold fw-6'>.text-light-dark</p>
          </div>
        </div>
        <CodeBlock language='markup' code={code2} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='inverse-colors'>
          <a href='#inverse-colors'></a>Inverse Colors
        </h1>

        <div className='py-5'>
          Use
          <code>.text-inverse-{`{color}`}</code>class to set an element's inverse color defined with
          <code>$theme-inverse-colors</code>in
          <code>sass/_variables.scss</code>:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <p className='text-inverse-white bg-white p-3 fw-bold fw-6'>.text-light-white</p>
            <p className='text-inverse-primary bg-primary p-3 fw-bold fw-6'>.text-light-primary</p>
            <p className='text-inverse-secondary bg-secondary p-3 fw-bold fw-6'>
              .text-light-secondary
            </p>
            <p className='text-inverse-light bg-light p-3 fw-bold fw-6'>.text-light-light</p>
            <p className='text-inverse-success bg-success p-3 fw-bold fw-6'>.text-light-success</p>
            <p className='text-inverse-info bg-info p-3 fw-bold fw-6'>.text-light-info</p>
            <p className='text-inverse-warning bg-warning p-3 fw-bold fw-6'>.text-light-warning</p>
            <p className='text-inverse-danger bg-danger p-3 fw-bold fw-6'>.text-light-danger</p>
            <p className='text-inverse-dark bg-dark p-3 fw-bold fw-6'>.text-light-dark</p>
          </div>
        </div>
        <CodeBlock language='markup' code={code3} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='inverse-hover-colors'>
          <a href='#inverse-hover-colors'></a>Inverse Hover Colors
        </h1>

        <div className='py-5'>
          Use
          <code>.text-hover-inverse-{`{color}`}</code>class to set an element's hover inverse color
          defined with
          <code>$theme-inverse-colors</code>in
          <code>sass/_variables.scss</code>:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <p className='text-hover-inverse-white bg-hover-white p-3 fw-bold fw-6'>
              .text-hover-inverse-white
            </p>
            <p className='text-hover-inverse-primary bg-hover-primary p-3 fw-bold fw-6'>
              .text-hover-inverse-primary
            </p>
            <p className='text-hover-inverse-secondary bg-hover-secondary p-3 fw-bold fw-6'>
              .text-hover-inverse-secondary
            </p>
            <p className='text-hover-inverse-light bg-hover-light p-3 fw-bold fw-6'>
              .text-hover-inverse-light
            </p>
            <p className='text-hover-inverse-success bg-hover-success p-3 fw-bold fw-6'>
              .text-hover-inverse-success
            </p>
            <p className='text-hover-inverse-info bg-hover-info p-3 fw-bold fw-6'>
              .text-hover-inverse-info
            </p>
            <p className='text-hover-inverse-warning bg-hover-warning p-3 fw-bold fw-6'>
              .text-hover-inverse-warning
            </p>
            <p className='text-hover-inverse-danger bg-hover-danger p-3 fw-bold fw-6'>
              .text-hover-inverse-danger
            </p>
            <p className='text-hover-inverse-dark bg-hover-dark p-3 fw-bold fw-6'>
              .text-hover-inverse-dark
            </p>
          </div>
        </div>
        <CodeBlock language='markup' code={code4} />
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-3' id='inverse-active-colors'>
          <a href='#inverse-active-colors'></a>Inverse Active Colors
        </h1>

        <div className='py-5'>
          Use
          <code>.text-active-inverse-{`{color}`}</code>class to set an element's active inverse
          color when it has
          <code>.active</code>class:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <p className='text-active-inverse-white bg-active-white active p-3 fw-bold fw-6'>
              .text-active-inverse-white
            </p>
            <p className='text-active-inverse-primary bg-active-primary active p-3 fw-bold fw-6'>
              .text-active-inverse-primary
            </p>
            <p className='text-active-inverse-secondary bg-active-secondary active p-3 fw-bold fw-6'>
              .text-active-inverse-secondary
            </p>
            <p className='text-active-inverse-light bg-active-light active p-3 fw-bold fw-6'>
              .text-active-inverse-light
            </p>
            <p className='text-active-inverse-success bg-active-success active p-3 fw-bold fw-6'>
              .text-active-inverse-success
            </p>
            <p className='text-active-inverse-info bg-active-info active p-3 fw-bold fw-6'>
              .text-active-inverse-info
            </p>
            <p className='text-active-inverse-warning bg-active-warning active p-3 fw-bold fw-6'>
              .text-active-inverse-warning
            </p>
            <p className='text-active-inverse-danger bg-active-danger active p-3 fw-bold fw-6'>
              .text-active-inverse-danger
            </p>
            <p className='text-active-inverse-dark bg-active-dark active p-3 fw-bold fw-6'>
              .text-active-inverse-dark
            </p>
          </div>
        </div>

        <CodeBlock language='markup' code={code5} />
      </div>
    </>
  )
}

const code = `<div className="text-white"></div>
<div className="text-primary"></div>
<div className="text-secondary"></div>
<div className="text-light"></div>
<div className="text-success"></div>
<div className="text-info"></div>
<div className="text-warning"></div>
<div className="text-danger"></div>
<div className="text-dark"></div>
<div className="text-muted"></div>
<div className="text-gray-100"></div>
<div className="text-gray-200"></div>
<div className="text-gray-300"></div>
<div className="text-gray-400"></div>
<div className="text-gray-500"></div>
<div className="text-gray-600"></div>
<div className="text-gray-700"></div>
<div className="text-gray-800"></div>
<div className="text-gray-900"></div>`

const code2 = `<div className="text-light-primary bg-primary"></div>
<div className="text-light-success bg-success"></div>
<div className="text-light-info bg-info"></div>
<div className="text-light-warning bg-warning"></div>
<div className="text-light-danger bg-danger"></div>
<div className="text-light-dark bg-dark"></div>`

const code3 = `<div className="text-inverse-white bg-white"></div>
<div className="text-inverse-primary bg-primary"></div>
<div className="text-inverse-secondary bg-secondary"></div>
<div className="text-inverse-light bg-light"></div>
<div className="text-inverse-success bg-success"></div>
<div className="text-inverse-info bg-info"></div>
<div className="text-inverse-warning bg-warning"></div>
<div className="text-inverse-danger bg-danger"></div>
<div className="text-inverse-dark bg-dark"></div>`

const code4 = `<div className="text-hover-inverse-white bg-hover-white"></div>
<div className="text-hover-inverse-primary bg-hover-primary"></div>
<div className="text-hover-inverse-secondary bg-hover-secondary"></div>
<div className="text-hover-inverse-light bg-hover-light"></div>
<div className="text-hover-inverse-success bg-hover-success"></div>
<div className="text-hover-inverse-info bg-hover-info"></div>
<div className="text-hover-inverse-warning bg-hover-warning"></div>
<div className="text-hover-inverse-danger bg-hover-danger"></div>
<div className="text-hover-inverse-dark bg-hover-dark"></div>`

const code5 = `<div className="text-active-inverse-white bg-active-white active"></div>
<div className="text-active-inverse-primary bg-active-primary active"></div>
<div className="text-active-inverse-secondary bg-active-secondary active"></div>
<div className="text-active-inverse-light bg-active-light active"></div>
<div className="text-active-inverse-success bg-active-success active"></div>
<div className="text-active-inverse-info bg-active-info active"></div>
<div className="text-active-inverse-warning bg-active-warning active"></div>
<div className="text-active-inverse-danger bg-active-danger active"></div>
<div className="text-active-inverse-dark bg-active-dark active"></div>`
