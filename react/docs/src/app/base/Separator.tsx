/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function Separator() {
  const {REACT_APP_BOOTSTRAP_DOCS_LINK} = process.env
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>
          Separator is a custom component to used to device page blocks with space and visual line.
        </div>
      </div>
      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>Basic Example
        </h1>
        <div className='py-5'>
          Use
          <code>.separator</code>class to place a separator with border color and add vertical space
          with margin spacing classes as shown below:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            Some text goes here
            <div className='separator my-10'></div>Other text goes here
          </div>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='sizes'>
          <a href='#sizes'></a>Sizes
        </h1>
        <div className='py-5'>
          Use
          <code>.separator</code>class in combination with{' '}
          <a
            href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/utilities/borders/#border-width`}
            className='fw-bold'
          >
            Bootstrap Border Width
          </a>
          &nbsp; classes to change separator border width:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='separator my-10'></div>
            <div className='separator border-2 my-10'></div>
            <div className='separator border-3 my-10'></div>
            <div className='separator border-4 my-10'></div>
            <div className='separator border-5 my-10'></div>
          </div>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='colors'>
          <a href='#colors'></a>Colors
        </h1>
        <div className='py-5'>
          Use
          <code>.separator</code>class in combination with{' '}
          <a
            href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/utilities/borders/#border-color`}
            className='fw-bold'
          >
            Bootstrap Border Color
          </a>
          &nbsp; classes to change separator's border color:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='bg-dark my-10 py-5'>
              <div className='separator border-white'></div>
            </div>
            <div className='separator border-primary my-10'></div>
            <div className='separator border-light my-10'></div>
            <div className='separator border-secondary my-10'></div>
            <div className='separator border-success my-10'></div>
            <div className='separator border-info my-10'></div>
            <div className='separator border-warning my-10'></div>
            <div className='separator border-danger my-10'></div>
            <div className='separator border-dark my-10'></div>
          </div>
        </div>
        <CodeBlock language='markup' code={code3} />
      </div>
      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='styles'>
          <a href='#styles'></a>Styles
        </h1>
        <div className='py-5'>
          Add
          <code>.separator-dotted</code>and
          <code>.separator-dashed</code>classes to change a separator's border style:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='separator separator-dotted border-dark my-10'></div>
            <div className='separator separator-dashed border-dark my-10'></div>
          </div>
        </div>
        <CodeBlock language='markup' code={code4} />
      </div>
    </>
  )
}

const code = `<div className="separator my-10"></div>`

const code2 = `<div className="separator my-10"></div>
<div className="separator border-2 my-10"></div>
<div className="separator border-3 my-10"></div>
<div className="separator border-4 my-10"></div>
<div className="separator border-5 my-10"></div>`

const code3 = `<div className="separator border-white my-10"></div>
<div className="separator border-primary my-10"></div>
<div className="separator border-light my-10"></div>
<div className="separator border-secondary my-10"></div>
<div className="separator border-success my-10"></div>
<div className="separator border-info my-10"></div>
<div className="separator border-warning my-10"></div>
<div className="separator border-danger my-10"></div>
<div className="separator border-dark my-10"></div>`

const code4 = `<div className="separator separator-dotted border-dark my-10"></div>
<div className="separator separator-dashed border-dark my-10"></div>`
