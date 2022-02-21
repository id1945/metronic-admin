/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example5LetterSpacing() {
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='letter-spacing'>
        <a href='#letter-spacing'></a>Letter Spacing
      </h1>
      <div className='py-5'>
        Use
        <code>.ls-{`{value}`}</code>class to set an element's letter spacing where
        <code>value</code>is one of:
      </div>

      <ul className='pt-3 pb-5'>
        <li className='py-2'>
          <code>1</code>- for classes that set letter spacing to
          <code>0.1rem</code>
        </li>
        <li className='py-2'>
          <code>2</code>- for classes that set letter spacing to
          <code>0.115rem</code>
        </li>
        <li className='py-2'>
          <code>3</code>- for classes that set letter spacing to
          <code>0.125rem</code>
        </li>
        <li className='py-2'>
          <code>4</code>- for classes that set letter spacing to
          <code>0.25rem</code>
        </li>
        <li className='py-2'>
          <code>5</code>- for classes that set letter spacing to
          <code>0.5rem</code>
        </li>
      </ul>
      <div className='py-5'>
        <div className='rounded border p-10'>
          <div className='ls-1 py-5'>
            Example text for
            <code>.ls-1</code>
          </div>
          <div className='ls-2 py-5'>
            Example text for
            <code>.ls-2</code>
          </div>
          <div className='ls-3 py-5'>
            Example text for
            <code>.ls-3</code>
          </div>
          <div className='ls-4 py-5'>
            Example text for
            <code>.ls-4</code>
          </div>
          <div className='ls-5 py-5'>
            Example text for
            <code>.ls-5</code>
          </div>
        </div>
      </div>

      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<div className="ls-1">Example text for .ls-1</div>
<div className="ls-2">Example text for .ls-2</div>
<div className="ls-3">Example text for .ls-3</div>
<div className="ls-4">Example text for .ls-4</div>
<div className="ls-5">Example text for .ls-5</div>`
