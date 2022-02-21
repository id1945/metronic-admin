/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example1BaseButtons() {
  const {REACT_APP_SASS_VARIABLES_PATH} = process.env

  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='base-style'>
        <a href='#base-style'></a>Base Buttons
      </h1>
      <div className='py-5'>
        Use
        <code>.btn-{'{color}'}</code>class to set button base color defined with
        <code>$theme-colors</code>mapped in
        <code>{REACT_APP_SASS_VARIABLES_PATH}</code>:
      </div>
      <div className='py-5'>
        <div className='rounded border p-10'>
          <a href='#' className='btn btn-white me-2 mb-2'>
            White
          </a>
          <a href='#' className='btn btn-primary me-2 mb-2'>
            Primary
          </a>
          <a href='#' className='btn btn-light me-2 mb-2'>
            Light
          </a>
          <a href='#' className='btn btn-secondary me-2 mb-2'>
            Secondary
          </a>
          <a href='#' className='btn btn-success me-2 mb-2'>
            Success
          </a>
          <a href='#' className='btn btn-info me-2 mb-2'>
            Info
          </a>
          <a href='#' className='btn btn-warning me-2 mb-2'>
            Warning
          </a>
          <a href='#' className='btn btn-danger me-2 mb-2'>
            Danger
          </a>
          <a href='#' className='btn btn-dark me-2 mb-2'>
            Dark
          </a>
        </div>
      </div>
      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<a href="#" className="btn btn-white">White</a>
<a href="#" className="btn btn-primary">Primary</a>
<a href="#" className="btn btn-light">Light</a>
<a href="#" className="btn btn-secondary">Secondary</a>
<a href="#" className="btn btn-success">Success</a>
<a href="#" className="btn btn-info">Info</a>
<a href="#" className="btn btn-warning">Warning</a>
<a href="#" className="btn btn-danger">Danger</a>
<a href="#" className="btn btn-dark">Dark</a>`
