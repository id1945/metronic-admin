/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example2LightStyle() {
  const {REACT_APP_SASS_VARIABLES_PATH} = process.env
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='light-style'>
        <a href='#light-style'></a>Light Style
      </h1>
      <div className='py-5'>
        Use
        <code>.btn-light-{`{color}`}</code>class to set a button's light style defined with
        <code>$theme-light-colors</code>mapped in
        <code>{REACT_APP_SASS_VARIABLES_PATH}</code>:
      </div>
      <div className='py-5'>
        <div className='rounded border p-10'>
          <a href='#' className='btn btn-light-primary me-2 mb-2'>
            Primary
          </a>
          <a href='#' className='btn btn-light-success me-2 mb-2'>
            Success
          </a>
          <a href='#' className='btn btn-light-info me-2 mb-2'>
            Info
          </a>
          <a href='#' className='btn btn-light-warning me-2 mb-2'>
            Warning
          </a>
          <a href='#' className='btn btn-light-danger me-2 mb-2'>
            Danger
          </a>
          <a href='#' className='btn btn-light-dark me-2 mb-2'>
            Dark
          </a>
        </div>
      </div>
      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<a href="#" className="btn btn-light-primary">Primary</a>
<a href="#" className="btn btn-light-success">Success</a>
<a href="#" className="btn btn-light-info">Info</a>
<a href="#" className="btn btn-light-warning">Warning</a>
<a href="#" className="btn btn-light-danger">Danger</a>
<a href="#" className="btn btn-light-dark">Dark</a>`
