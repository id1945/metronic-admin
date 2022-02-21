/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example9ActiveColorStyle() {
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='active-style-color'>
        <a href='#active-style-color'></a>Active Color Style
      </h1>
      <div className='py-5'>
        Use
        <code>.btn-active-color-{'{color}'}</code>class to set a button's text and icon colors for
        active and hover states only:
      </div>

      <div className='py-5'>
        <div className='rounded border p-10'>
          <a href='#' className='btn btn-bg-light btn-active-color-primary me-2 mb-2'>
            Primary
          </a>
          <a href='#' className='btn btn-bg-light btn-active-color-success me-2 mb-2'>
            Success
          </a>
          <a href='#' className='btn btn-bg-light btn-active-color-info me-2 mb-2'>
            Info
          </a>
          <a href='#' className='btn btn-bg-light btn-active-color-warning me-2 mb-2'>
            Warning
          </a>
          <a href='#' className='btn btn-bg-light btn-active-color-danger me-2 mb-2'>
            Danger
          </a>
          <a href='#' className='btn btn-bg-light btn-active-color-dark me-2 mb-2'>
            Dark
          </a>
        </div>
      </div>
      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<a href="#" className="btn btn-bg-light btn-active-color-primary">Primary</a>
<a href="#" className="btn btn-bg-light btn-active-color-success">Success</a>
<a href="#" className="btn btn-bg-light btn-active-color-info">Info</a>
<a href="#" className="btn btn-bg-light btn-active-color-warning">Warning</a>
<a href="#" className="btn btn-bg-light btn-active-color-danger">Danger</a>
<a href="#" className="btn btn-bg-light btn-active-color-dark">Dark</a>`
