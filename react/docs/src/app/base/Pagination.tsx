/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function Pagination() {
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
            <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/pagination/`} className='fw-bold'>
              Bootstrap Pagination
            </a>
            &nbsp; through the SASS variables in
            <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
            <code>{REACT_APP_SASS_PATH}/_pagination.scss</code>.
          </div>
        </div>
        <div className='pt-10'>
          <h1 className='anchor fw-bolder mb-5' id='basic'>
            <a href='#basic'></a>Basic Example
          </h1>
          <div className='py-5'>
            Use slightly customized pagination with previouse and next icon links:
          </div>

          <div className='py-5'>
            <div className='rounded border p-10'>
              <ul className='pagination'>
                <li className='page-item previous disabled'>
                  <a href='#' className='page-link'>
                    <i className='previous'></i>
                  </a>
                </li>
                <li className='page-item'>
                  <a href='#' className='page-link'>
                    1
                  </a>
                </li>
                <li className='page-item active'>
                  <a href='#' className='page-link'>
                    2
                  </a>
                </li>
                <li className='page-item'>
                  <a href='#' className='page-link'>
                    3
                  </a>
                </li>
                <li className='page-item'>
                  <a href='#' className='page-link'>
                    4
                  </a>
                </li>
                <li className='page-item'>
                  <a href='#' className='page-link'>
                    5
                  </a>
                </li>
                <li className='page-item'>
                  <a href='#' className='page-link'>
                    6
                  </a>
                </li>
                <li className='page-item next'>
                  <a href='#' className='page-link'>
                    <i className='next'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <CodeBlock code={code} language='markup' />
        </div>
      </div>
    </>
  )
}

const code = `<ul className="pagination">
  <li className="page-item previous disabled">
    <a href="#" className="page-link">
      <i className="previous"></i>
    </a>
  </li>
  <li className="page-item">
    <a href="#" className="page-link">
      1
    </a>
  </li>
  <li className="page-item active">
    <a href="#" className="page-link">
      2
    </a>
  </li>
  <li className="page-item">
    <a href="#" className="page-link">
      3
    </a>
  </li>
  <li className="page-item">
    <a href="#" className="page-link">
      4
    </a>
  </li>
  <li className="page-item">
    <a href="#" className="page-link">
      5
    </a>
  </li>
  <li className="page-item">
    <a href="#" className="page-link">
      6
    </a>
  </li>
  <li className="page-item next">
    <a href="#" className="page-link">
      <i className="next"></i>
    </a>
  </li>
</ul>
`
