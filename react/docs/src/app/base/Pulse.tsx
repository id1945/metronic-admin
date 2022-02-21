/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {KTSVG} from '../../_metronic/helpers'
import {CodeBlock} from '../../_metronic/partials'

export function Pulse() {
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>Pulse is a custom component for highlighting elements.</div>
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>Basic
        </h1>
        <div className='py-5'>
          Use
          <code>.pulse</code>with for any element to provide a user's attentation.
        </div>
        <div className='py-5'>
          <div className='rounded border p-10 pb-0 d-flex align-items-center flex-wrap'>
            <a href='#' className='btn btn-icon btn-light pulse me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen043.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/communication/com010.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse me-10 mb-10'>
              <KTSVG path='/media/icons/duotune/art/art007.svg' className='svg-icon svg-icon-1' />

              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse me-10 mb-10'>
              <KTSVG path='/media/icons/duotune/art/art002.svg' className='svg-icon svg-icon-1' />
              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen005.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
          </div>
        </div>
        <CodeBlock language='tsx' code={code} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='Colors'>
          <a href='#colors'></a>Colors
        </h1>

        <div className='py-5'>
          Use
          <code>.pulse-{'{color}'}</code>class to set a pulse's color:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10 pb-0 d-flex flex-wrap align-items-center'>
            <a href='#' className='btn btn-icon btn-light pulse pulse-white me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-primary me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-light me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-secondary me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-success me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-info me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-warning me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-danger me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-dark me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring'></span>
            </a>
          </div>
        </div>
        <CodeBlock language='tsx' code={code2} />
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='border-width'>
          <a href='#border-width'></a>Border Width
        </h1>
        <div className='py-5'>
          Use the standard
          <code>.border-{'{width}'}</code>class with
          <code>.pulse-ring</code>to set a pulse ring's border width.
        </div>
        <div className='py-5'>
          Where
          <code>width</code>is one of:
          <ul className='pt-3'>
            <li className='py-2'>
              <code>0</code>- for classes that set border width to 0px
            </li>
            <li className='py-2'>
              <code>1</code>- for classes that set border width to 1px
            </li>
            <li className='py-2'>
              <code>2</code>- for classes that set border width to 2px
            </li>
            <li className='py-2'>
              <code>3</code>- for classes that set border width to 3px
            </li>
            <li className='py-2'>
              <code>4</code>- for classes that set border width to 4px
            </li>
            <li className='py-2'>
              <code>5</code>- for classes that set border width to 5px
            </li>
          </ul>
        </div>
        <div className='py-5'>
          <div className='rounded border p-10 pb-0 d-flex flex-wrap align-items-center'>
            <a href='#' className='btn btn-icon btn-light pulse pulse-primary me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring border-0'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-primary me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring border-1'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-primary me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring border-2'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-primary me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring border-3'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-primary me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring border-4'></span>
            </a>
            <a href='#' className='btn btn-icon btn-light pulse pulse-primary me-10 mb-10'>
              <KTSVG
                path='/media/icons/duotune/general/gen025.svg'
                className='svg-icon svg-icon-1'
              />
              <span className='pulse-ring border-5'></span>
            </a>
          </div>
        </div>
        <CodeBlock language='tsx' code={code3} />
      </div>
    </>
  )
}

const code = `<a href="#" className="btn btn-icon btn-light pulse me-10 mb-10">
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring"></span>
</a>`

const code2 = ` <a href="#"
  className="btn btn-icon btn-light pulse pulse-white me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-primary me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-light me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-secondary me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-success me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-info me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-warning me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-danger me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-dark me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring"></span>
</a>`

const code3 = `<a href="#"
  className="btn btn-icon btn-light pulse pulse-primary me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring border-0"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-primary me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring border-1"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-primary me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring border-2"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-primary me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring border-3"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-primary me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring border-4"></span>
</a>
<a href="#"
  className="btn btn-icon btn-light pulse pulse-primary me-10 mb-10"
>
  <KTSVG
    path="/media/icons/duotune/general/gen025.svg"
    className="svg-icon svg-icon-1"
  />
  <span className="pulse-ring border-5"></span>
</a>`
