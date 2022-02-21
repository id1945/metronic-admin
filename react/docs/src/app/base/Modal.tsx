/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {KTSVG} from '../../_metronic/helpers'
import {CodeBlock} from '../../_metronic/partials'

export function Modal() {
  const {
    REACT_APP_THEME_NAME,
    REACT_APP_BOOTSTRAP_DOCS_LINK,
    REACT_APP_SASS_PATH,
    REACT_APP_SASS_VARIABLES_PATH,
  } = process.env

  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>

        <div className='py-5'>
          <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; customizes the{' '}
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/modal/`} className='fw-bold'>
            Bootstrap Modal
          </a>
          &nbsp; through the SASS variables in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
          <code>{REACT_APP_SASS_PATH}/_modal.scss</code>.
        </div>
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>Basic Example
        </h1>

        <div className='py-5'>
          Click the below toggle button to see a slightly customized modal with custom close icon
          button.
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <button
              type='button'
              className='btn btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_1'
            >
              Launch demo modal
            </button>
            <div className='modal fade' tabIndex={-1} id='kt_modal_1'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title'>Modal title</h5>
                    <div
                      className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    >
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr061.svg'
                        className='svg-icon svg-icon-2x'
                      />
                    </div>
                  </div>
                  <div className='modal-body'>
                    <p>Modal body text goes here.</p>
                  </div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                      Close
                    </button>
                    <button type='button' className='btn btn-primary'>
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code} language='markup' />
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='fullscreen'>
          <a href='#fullscreen'></a>Fullscreen
        </h1>

        <div className='py-5'>
          Add
          <code>.modal-fullscreen</code>class to enable a modal with fullscreen mode. Add
          <code>.bg-white</code>and
          <code>.shadow-none</code>classes to fix background color and unwanted shadow issue when
          modal has a long scrollable content.
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <button
              type='button'
              className='btn btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_2'
            >
              Launch demo modal
            </button>
            <div className='modal bg-white fade' tabIndex={-1} id='kt_modal_2'>
              <div className='modal-dialog modal-fullscreen'>
                <div className='modal-content shadow-none'>
                  <div className='modal-header'>
                    <h5 className='modal-title'>Modal title</h5>
                    <div
                      className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    >
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr061.svg'
                        className='svg-icon svg-icon-2x'
                      />
                    </div>
                  </div>
                  <div className='modal-body'>
                    <p>Modal body text goes here.</p>
                  </div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                      Close
                    </button>
                    <button type='button' className='btn btn-primary'>
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>
    </>
  )
}

const code = `<button type="button"
  className="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#kt_modal_1"
>
  Launch demo modal
</button>
<div className="modal fade" tabIndex={-1} id="kt_modal_1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <div
          className="btn btn-icon btn-sm btn-active-light-primary ms-2"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <KTSVG
            path="/media/icons/duotune/arrows/arr061.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-light"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
`

const code2 = `<button type="button"
  className="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#kt_modal_2"
>
  Launch demo modal
</button>
<div className="modal bg-white fade" tabIndex={-1} id="kt_modal_2">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content shadow-none">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <div
          className="btn btn-icon btn-sm btn-active-light-primary ms-2"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <KTSVG
            path="/media/icons/duotune/arrows/arr061.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-light"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
`
