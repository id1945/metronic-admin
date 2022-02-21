/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function Breadcrumb() {
  const {
    REACT_APP_THEME_NAME,
    REACT_APP_BOOTSTRAP_DOCS_LINK,
    REACT_APP_SASS_PATH,
    REACT_APP_SASS_VARIABLES_PATH,
  } = process.env
  return (
    <>
      <div className='card-body p-10 p-lg-15'>
        <div className='pb-10'>
          <h1 className='anchor fw-bolder mb-5' id='overview'>
            <a href='#overview'></a>Overview
          </h1>

          <div className='py-5'>
            <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; customizes the{' '}
            <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/breadcrumb/`} className='fw-bold'>
              Bootstrap Breadcrumb
            </a>
            &nbsp; through the SASS variables in
            <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
            <code>{REACT_APP_SASS_PATH}/_breadcrumb.scss</code>.
          </div>
        </div>
        <div className='py-10'>
          <h1 className='anchor fw-bolder mb-5' id='basic'>
            <a href='#basic'></a>Basic Example
          </h1>

          <div className='py-5'>
            Use an ordered or unordered list with linked list items to create a minimally styled
            breadcrumb. Use our utilities to add additional styles as desired.
          </div>

          <div className='py-5'>
            <div className='rounded border p-10'>
              <ol className='breadcrumb text-muted fs-6 fw-bold'>
                <li className='breadcrumb-item pe-3'>
                  <a href='#' className='pe-3'>
                    Home
                  </a>
                </li>
                <li className='breadcrumb-item pe-3'>
                  <a href='#' className='pe-3'>
                    Library
                  </a>
                </li>
                <li className='breadcrumb-item px-3 text-muted'>Active</li>
              </ol>
            </div>
          </div>
          <CodeBlock code={code} language='markup' />
        </div>
        <div className='py-10'>
          <h1 className='anchor fw-bolder mb-5' id='line-separator'>
            <a href='#line-separator'></a>Line Separator
          </h1>

          <div className='py-5'>
            Add
            <code>.breadcrumb-line</code>to enable line separator style for a breadcrumb.
          </div>

          <div className='py-5'>
            <div className='rounded border p-10'>
              <ol className='breadcrumb breadcrumb-line text-muted fs-6 fw-bold'>
                <li className='breadcrumb-item pe-3'>
                  <a href='#' className='pe-3'>
                    Home
                  </a>
                </li>
                <li className='breadcrumb-item pe-3'>
                  <a href='#' className='pe-3'>
                    Library
                  </a>
                </li>
                <li className='breadcrumb-item px-3 text-muted'>Active</li>
              </ol>
            </div>
          </div>
          <CodeBlock code={code2} language='markup' />
        </div>

        <div className='py-10'>
          <h1 className='anchor fw-bolder mb-5' id='dot-separator'>
            <a href='#dot-separator'></a>Dot Separator
          </h1>

          <div className='py-5'>
            Add
            <code>.breadcrumb-dot</code>to enable dot separator style for a breadcrumb.
          </div>

          <div className='py-5'>
            <div className='rounded border p-10'>
              <ol className='breadcrumb breadcrumb-dot text-muted fs-6 fw-bold'>
                <li className='breadcrumb-item pe-3'>
                  <a href='#' className='pe-3'>
                    Home
                  </a>
                </li>
                <li className='breadcrumb-item pe-3'>
                  <a href='#' className='pe-3'>
                    Library
                  </a>
                </li>
                <li className='breadcrumb-item px-3 text-muted'>Active</li>
              </ol>
            </div>
          </div>
          <CodeBlock code={code3} language='markup' />
        </div>
        <div className='pt-10'>
          <h1 className='anchor fw-bolder mb-5' id='separatorless'>
            <a href='#separatorless'></a>Without Separator
          </h1>
          <div className='py-5'>
            Add
            <code>.breadcrumb-separatorless</code>to remove the separator.
          </div>

          <div className='py-5'>
            <div className='rounded border p-10'>
              <ol className='breadcrumb breadcrumb-separatorless text-muted fs-6 fw-bold'>
                <li className='breadcrumb-item pe-3'>
                  <a href='#' className='pe-3'>
                    Home
                  </a>
                </li>
                <li className='breadcrumb-item pe-3'>
                  <a href='#' className='pe-3'>
                    Library
                  </a>
                </li>
                <li className='breadcrumb-item px-3 text-muted'>Active</li>
              </ol>
            </div>
          </div>
          <CodeBlock code={code4} language='markup' />
        </div>
      </div>
    </>
  )
}

const code = `<ol className="breadcrumb text-muted fs-6 fw-bold">
  <li className="breadcrumb-item pe-3">
    <a href="#" className="pe-3">
      Home
    </a>
  </li>
  <li className="breadcrumb-item pe-3">
    <a href="#" className="pe-3">
      Library
    </a>
  </li>
  <li className="breadcrumb-item px-3 text-muted">Active</li>
</ol>`

const code2 = `<ol className="breadcrumb breadcrumb-line text-muted fs-6 fw-bold">
  <li className="breadcrumb-item pe-3">
    <a href="#" className="pe-3">
      Home
    </a>
  </li>
  <li className="breadcrumb-item pe-3">
    <a href="#" className="pe-3">
      Library
    </a>
  </li>
  <li className="breadcrumb-item px-3 text-muted">Active</li>
</ol>`

const code3 = `<ol className="breadcrumb breadcrumb-dot text-muted fs-6 fw-bold">
  <li className="breadcrumb-item pe-3">
    <a href="#" className="pe-3">
      Home
    </a>
  </li>
  <li className="breadcrumb-item pe-3">
    <a href="#" className="pe-3">
      Library
    </a>
  </li>
  <li className="breadcrumb-item px-3 text-muted">Active</li>
</ol>`

const code4 = `<ol className="breadcrumb breadcrumb-separatorless text-muted fs-6 fw-bold">
  <li className="breadcrumb-item pe-3">
    <a href="#" className="pe-3">
      Home
    </a>
  </li>
  <li className="breadcrumb-item pe-3">
    <a href="#" className="pe-3">
      Library
    </a>
  </li>
  <li className="breadcrumb-item px-3 text-muted">Active</li>
</ol>`
