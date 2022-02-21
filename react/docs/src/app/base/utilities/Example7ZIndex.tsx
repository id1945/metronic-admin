/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example7ZIndex() {
  return (
    <>
      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='z-index'>
          <a href='#icons'></a>Z-Index
        </h1>
        <div className='py-5'>
          Use
          <code>.z-index-{`{value}`}</code>class to set an element's z-index:
        </div>

        <div className='py-5'>
          Where
          <code>value</code>is one of:
          <ul className='pt-3'>
            <li className='py-2'>
              <code>n1</code>- for classes that set z-index
              <code>n1</code>
            </li>
            <li className='py-2'>
              <code>n2</code>- for classes that set z-index
              <code>n2</code>
            </li>
            <li className='py-2'>
              <code>0</code>- for classes that set z-index
              <code>0</code>
            </li>
            <li className='py-2'>
              <code>1</code>- for classes that set z-index
              <code>1</code>
            </li>
            <li className='py-2'>
              <code>2</code>- for classes that set z-index
              <code>2</code>
            </li>
            <li className='py-2'>
              <code>3</code>- for classes that set z-index
              <code>3</code>
            </li>
          </ul>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>
    </>
  )
}

const code = `<div className="z-index-n1"></div>
<div className="z-index-n2"></div>
<div className="z-index-0"></div>
<div className="z-index-1"></div>
<div className="z-index-2"></div>
<div className="z-index-3"></div>`
