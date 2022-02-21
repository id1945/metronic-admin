/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example4LineHeight() {
  const {REACT_APP_THEME_NAME, REACT_APP_BOOTSTRAP_DOCS_LINK} = process.env

  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='line-height'>
        <a href='#line-height'></a>Line Height
      </h1>
      <div className='py-5'>
        <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; extends{' '}
        <a
          href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/utilities/text/#line-height`}
          className='fw-bold'
        >
          Bootstrap Line Height Classes
        </a>
        &nbsp; to provide additonal line height options by overidding the line height SASS variable.
      </div>

      <ul className='pt-3 pb-5'>
        <li className='py-2'>
          <code>1</code>- for classes that set line height to
          <code>1</code>
        </li>
        <li className='py-2'>
          <code>sm</code>- for classes that set line height to
          <code>1.25</code>
        </li>
        <li className='py-2'>
          <code>base</code>- for classes that set line height to
          <code>1.5</code>
        </li>
        <li className='py-2'>
          <code>lg</code>- for classes that set line height to
          <code>1.75</code>
        </li>
        <li className='py-2'>
          <code>xl</code>- for classes that set line height to
          <code>2</code>
        </li>
        <li className='py-2'>
          <code>xxl</code>- for classes that set line height to
          <code>2.25</code>
        </li>
      </ul>

      <div className='py-5'>
        <div className='rounded border p-10'>
          <div className='lh-1 py-5'>
            Example text
            <br />
            for
            <code>.lh-1</code>
          </div>
          <div className='lh-sm py-5'>
            Example text
            <br />
            for
            <code>.lh-sm</code>
          </div>
          <div className='lh-base py-5'>
            Example text
            <br />
            for
            <code>.lh-base</code>
          </div>
          <div className='lh-lg py-5'>
            Example text
            <br />
            for
            <code>.lh-lg</code>
          </div>
          <div className='lh-xl py-5'>
            Example text
            <br />
            for
            <code>.lh-xl</code>
          </div>
          <div className='lh-xxl py-5'>
            Example text
            <br />
            for
            <code>.lh-xxl</code>
          </div>
        </div>
      </div>

      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<div className="lh-1">Example text for .lh-1</div>
<div className="lh-sm">Example text for .lh-sm</div>
<div className="lh-base">Example text for .lh-base</div>
<div className="lh-lg">Example text for .lh-lg</div>
<div className="lh-xl">Example text for .lh-xl</div>
<div className="lh-xxl">Example text for .lh-xxl</div>`
