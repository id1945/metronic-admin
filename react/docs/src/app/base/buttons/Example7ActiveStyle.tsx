/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example7ActiveStyle() {
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='active-style'>
        <a href='#active-style'></a>Active Style
      </h1>
      <div className='py-5'>
        Use
        <code>.btn-active-{'{color}'}</code>class to set a button's color for active &amp; hover
        states only:
      </div>
      <div className='py-5'>
        <div className='rounded border p-10'>
          <a href='#' className='btn btn-active-white me-2 mb-2'>
            White
          </a>
          <a href='#' className='btn btn-active-primary me-2 mb-2'>
            Primary
          </a>
          <a href='#' className='btn btn-active-light me-2 mb-2'>
            Light
          </a>
          <a href='#' className='btn btn-active-secondary me-2 mb-2'>
            Secondary
          </a>
          <a href='#' className='btn btn-active-success me-2 mb-2'>
            Success
          </a>
          <a href='#' className='btn btn-active-info me-2 mb-2'>
            Info
          </a>
          <a href='#' className='btn btn-active-warning me-2 mb-2'>
            Warning
          </a>
          <a href='#' className='btn btn-active-danger me-2 mb-2'>
            Danger
          </a>
          <a href='#' className='btn btn-active-dark me-2 mb-2'>
            Dark
          </a>
        </div>
      </div>

      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<a href="#" className="btn btn-active-white">White</a>
<a href="#" className="btn btn-active-primary">Primary</a>
<a href="#" className="btn btn-active-light">Light</a>
<a href="#" className="btn btn-active-secondary">Secondary</a>
<a href="#" className="btn btn-active-success">Success</a>
<a href="#" className="btn btn-active-info">Info</a>
<a href="#" className="btn btn-active-warning">Warning</a>
<a href="#" className="btn btn-active-danger">Danger</a>
<a href="#" className="btn btn-active-dark">Dark</a>`
