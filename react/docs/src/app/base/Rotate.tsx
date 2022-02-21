/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {KTSVG} from '../../_metronic/helpers'
import {CodeBlock} from '../../_metronic/partials'

export function Rotate() {
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>
          Overview
        </h1>
        <div className='py-5'>
          Rotate is a custom component used to rotate an element with a spesific angle when it's
          parent assigned with <code>.active</code> class. This component can be useful to change a
          buttons icon direction when it's <code>.active</code> class is toggled.
        </div>
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>
          Basic
        </h1>
        <div className='py-5'>
          Use <code>.rotate</code> class on a button and <code>.rotate-{'{degree}'}</code> class on
          a icon to rotate it to following <code>degree</code> options:
        </div>
        <ul className='pt-3 pb-5'>
          <li className='py-2'>
            <code>90</code> - for classes that rotates to <code>90 deg</code>
          </li>
          <li className='py-2'>
            <code>180</code> - for classes that rotates to <code>180 deg</code>
          </li>
          <li className='py-2'>
            <code>270</code> - for classes that rotates to <code>270 deg</code>
          </li>
          <li className='py-2'>
            <code>n90</code> - for classes that rotates to negative <code>-90 deg</code>
          </li>
          <li className='py-2'>
            <code>n180</code> - for classes that rotates to negative <code>-180 deg</code>
          </li>
          <li className='py-2'>
            <code>n270</code> - for classes that rotates to negative <code>-270 deg</code>
          </li>
        </ul>
        <div className='py-5'>
          <div className='rounded border p-10 pb-5'>
            <button type='button' className='btn btn-primary me-5 mb-5'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr069.svg'
                className='svg-icon-2 ms-3 ms-3'
              />
            </button>

            <button type='button' className='btn btn-primary active me-5 mb-5 rotate'>
              90 deg{' '}
              <KTSVG
                path='/media/icons/duotune/arrows/arr069.svg'
                className='svg-icon-2 rotate-90 ms-3'
              />
            </button>

            <button type='button' className='btn btn-primary rotate active me-5 mb-5'>
              180 deg{' '}
              <KTSVG
                path='/media/icons/duotune/arrows/arr069.svg'
                className='svg-icon-2 rotate-180 ms-3'
              />
            </button>

            <button type='button' className='btn btn-primary rotate active me-5 mb-5'>
              270 deg{' '}
              <KTSVG
                path='/media/icons/duotune/arrows/arr069.svg'
                className='svg-icon-2 rotate-270 ms-3'
              />
            </button>

            <button type='button' className='btn btn-primary rotate active me-5 mb-5'>
              -90 deg{' '}
              <KTSVG
                path='/media/icons/duotune/arrows/arr069.svg'
                className='svg-icon-2 rotate-n90 ms-3'
              />
            </button>

            <button type='button' className='btn btn-primary rotate active me-5 mb-5'>
              -180 deg{' '}
              <KTSVG
                path='/media/icons/duotune/arrows/arr069.svg'
                className='svg-icon-2 rotate-n180 ms-3'
              />
            </button>

            <button type='button' className='btn btn-primary rotate active me-5 mb-5'>
              -270 deg{' '}
              <KTSVG
                path='/media/icons/duotune/arrows/arr069.svg'
                className='svg-icon-2 rotate-n270 ms-3'
              />
            </button>
          </div>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='toggle'>
          <a href='#toggle'></a>Toggle
        </h1>
        <div className='py-5'>
          Click on the below buttons to toggle the button active state and rotate the icons
          accordingly:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <button
              type='button'
              className='btn btn-primary me-5 rotate'
              onClick={(e) => e.currentTarget.classList.toggle('active')}
            >
              90 deg{' '}
              <KTSVG
                path='/media/icons/duotune/arrows/arr069.svg'
                className='svg-icon-2 rotate-90 ms-3'
              />
            </button>

            <button
              type='button'
              className='btn btn-danger me-5 rotate'
              onClick={(e) => e.currentTarget.classList.toggle('active')}
            >
              180 deg{' '}
              <KTSVG
                path='/media/icons/duotune/arrows/arr069.svg'
                className='svg-icon-2 rotate-90 ms-3'
              />
            </button>
            <button
              type='button'
              className='btn btn-success me-5 rotate'
              onClick={(e) => e.currentTarget.classList.toggle('active')}
            >
              180 deg{' '}
              <KTSVG
                path='/media/icons/duotune/arrows/arr069.svg'
                className='svg-icon-2 rotate-90 ms-3'
              />
            </button>
          </div>
        </div>
        <CodeBlock language='markup' code={code2} />
      </div>
    </>
  )
}

const code = `<button type="button" className="btn btn-primary me-5 mb-5">
  <KTSVG
    path="/media/icons/duotune/arrows/arr069.svg"
    className="svg-icon-2 ms-3 ms-3"
  />
</button>

<button type="button" className="btn btn-primary active me-5 mb-5 rotate">
  90 deg{" "}
  <KTSVG
    path="/media/icons/duotune/arrows/arr069.svg"
    className="svg-icon-2 rotate-90 ms-3"
  />
</button>

<button type="button" className="btn btn-primary rotate active me-5 mb-5">
  180 deg{" "}
  <KTSVG
    path="/media/icons/duotune/arrows/arr069.svg"
    className="svg-icon-2 rotate-180 ms-3"
  />
</button>

<button type="button" className="btn btn-primary rotate active me-5 mb-5">
  270 deg{" "}
  <KTSVG
    path="/media/icons/duotune/arrows/arr069.svg"
    className="svg-icon-2 rotate-270 ms-3"
  />
</button>

<button type="button" className="btn btn-primary rotate active me-5 mb-5">
  -90 deg{" "}
  <KTSVG
    path="/media/icons/duotune/arrows/arr069.svg"
    className="svg-icon-2 rotate-n90 ms-3"
  />
</button>

<button type="button" className="btn btn-primary rotate active me-5 mb-5">
  -180 deg{" "}
  <KTSVG
    path="/media/icons/duotune/arrows/arr069.svg"
    className="svg-icon-2 rotate-n180 ms-3"
  />
</button>

<button type="button" className="btn btn-primary rotate active me-5 mb-5">
  -270 deg{" "}
  <KTSVG
    path="/media/icons/duotune/arrows/arr069.svg"
    className="svg-icon-2 rotate-n270 ms-3"
  />
</button>`

const code2 = `<button type="button" className="btn btn-primary me-5 rotate" onClick={(e) => e.currentTarget.classList.toggle('active')}>
  90 deg{" "}
  <KTSVG
    path="/media/icons/duotune/arrows/arr069.svg"
    className="svg-icon-2 rotate-90 ms-3"
  />
</button>

<button type="button" className="btn btn-danger me-5 rotate" onClick={(e) => e.currentTarget.classList.toggle('active')}>
  180 deg{" "}
  <KTSVG
    path="/media/icons/duotune/arrows/arr069.svg"
    className="svg-icon-2 rotate-90 ms-3"
  />
</button>
<button type="button" className="btn btn-success me-5 rotate" onClick={(e) => e.currentTarget.classList.toggle('active')}>
  180 deg{" "}
  <KTSVG
    path="/media/icons/duotune/arrows/arr069.svg"
    className="svg-icon-2 rotate-90 ms-3"
  />
</button>`
