/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example8ActiveLightStyle() {
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='Example7ActiveLightStyle'>
        <a href='#Example7ActiveLightStyle'></a>Active Light Style
      </h1>
      <div className='py-5'>
        Use
        <code>.btn-active-light-{'{color}'}</code>class to set a button's light color for active
        &amp; hover states only:
      </div>
      <div className='py-5'>
        <div className='rounded border p-10'>
          <a href='#' className='btn btn-active-light-primary me-2 mb-2'>
            Primary
          </a>
          <a href='#' className='btn btn-active-light-success me-2 mb-2'>
            Success
          </a>
          <a href='#' className='btn btn-active-light-info me-2 mb-2'>
            Info
          </a>
          <a href='#' className='btn btn-active-light-warning me-2 mb-2'>
            Warning
          </a>
          <a href='#' className='btn btn-active-light-danger me-2 mb-2'>
            Danger
          </a>
          <a href='#' className='btn btn-active-light-dark me-2 mb-2'>
            Dark
          </a>
        </div>
      </div>
      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<a href="#" className="btn btn-active-light-primary">Primary</a>
<a href="#" className="btn btn-active-light-success">Success</a>
<a href="#" className="btn btn-active-light-info">Info</a>
<a href="#" className="btn btn-active-light-warning">Warning</a>
<a href="#" className="btn btn-active-light-danger">Danger</a>
<a href="#" className="btn btn-active-light-dark">Dark</a>`
