/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React, {useRef} from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function Indicator() {
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const onClick = () => {
    // Disable indicator after 3 seconds
    btnRef.current?.setAttribute('data-kt-indicator', 'on')
    setTimeout(() => {
      // Activate indicator
      btnRef.current?.removeAttribute('data-kt-indicator')
    }, 3000)
  }

  const {REACT_APP_BOOTSTRAP_DOCS_LINK} = process.env

  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>
          Indicator is a custom component used in combination with{' '}
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/buttons/`} className='fw-bold'>
            Bootstrap Spinners
          </a>
          ,
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/spinners/`} className='fw-bold'>
            Bootstrap Spinners
          </a>
          &nbsp; and other components to provide a progress indication toggling for a user action.
        </div>
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>Basic
        </h1>
        <div className='py-5'>
          Use
          <code>.indication</code>class on a button and specify the button's label and progress
          message and toggle the indicator state with
          <code>data-kt-indicator="on"</code>custom HTML attribute:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <button type='button' className='btn btn-primary me-10'>
              <span className='indicator-label'>Submit</span>
              <span className='indicator-progress'>
                Please wait...
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            </button>
            <button type='button' className='btn btn-primary' data-kt-indicator='on'>
              <span className='indicator-label'>Submit</span>
              <span className='indicator-progress'>
                Please wait...
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            </button>
          </div>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>
      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='toggle'>
          <a href='#toggle'></a>Toggle
        </h1>
        <div className='py-5'>
          Click on the below buttons to check toggling indicator state with a simple Javascript
          code:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <button
              ref={btnRef}
              onClick={onClick}
              type='button'
              className='btn btn-primary me-10'
              id='kt_button_1'
            >
              <span className='indicator-label'>Submit</span>
              <span className='indicator-progress'>
                Please wait...
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            </button>
          </div>
        </div>
        <CodeBlock language='tsx' code={code2} />
      </div>
    </>
  )
}

const code = `<!-- Default state -->
<button type="button" className="btn btn-primary me-10">
    <span className="indicator-label">
        Submit
    </span>
    <span className="indicator-progress">
        Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
    </span>
</button>

<!-- Progress enabled state -->
<button type="button" className="btn btn-primary" data-kt-indicator="on">
    <span className="indicator-label">
        Submit
    </span>
    <span className="indicator-progress">
        Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
    </span>
</button>`

const code2 = `// import {useRef} from 'react';
// in your function add rows =>
const btnRef = useRef<HTMLButtonElement | null>(null);
const onClick = () => {
  // Disable indicator after 3 seconds
  btnRef.current?.setAttribute('data-kt-indicator', 'on');
  setTimeout(() => {
    // Activate indicator
    btnRef.current?.removeAttribute("data-kt-indicator");
  }, 3000);
};
// in your HTML add
<button ref={btnRef} onClick={onClick} type="button" className="btn btn-primary me-10" id="kt_button_1">
  <span className="indicator-label">Submit</span>
  <span className="indicator-progress">Please wait... 
  <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
</button>
`
