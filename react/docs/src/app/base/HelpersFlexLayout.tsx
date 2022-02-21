/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function HelpersFlexLayout() {
  return (
    <div className='py-0'>
      <h1 className='anchor fw-bolder mb-5' id='overview'>
        <a href='#overview'></a>Overview
      </h1>

      <div className='py-5'>
        Use responsive-friendly custom flex classes to build nested layouts with fixed and fluid
        columns. The classes are named using the format <code>{`flex-{property}`}</code> for{' '}
        <code>xs</code> and <code>{`flex-{breakpoint}-{property}`}</code> for <code>sm</code>,{' '}
        <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>.
      </div>

      <div className='py-5'>
        Where
        <code>property</code>is one of:
        <ul className='pt-3'>
          <li className='py-2'>
            <code>root</code>- to define the root node of the flex layout(usually it's used when the
            layout is placed as a direct child of the body element in order to fully occupy the
            window height)
          </li>
          <li className='py-2'>
            <code>column-auto</code>- to set a column with auto height
          </li>
          <li className='py-2'>
            <code>column-fluid</code>- to set a column with fluid height
          </li>
          <li className='py-2'>
            <code>row-auto</code>- to set a column with auto width
          </li>
          <li className='py-2'>
            <code>row-fluid</code>- to set a column with fluid width
          </li>
          <li className='py-2'>
            <code>center</code>- to set a column's content vertically and horizontally centered
          </li>
        </ul>
      </div>
      <div className='py-5'>
        <div className='rounded border p-10'>
          <div className='d-flex flex-row h-300px'>
            <div className='d-flex flex-column flex-row-auto w-200px'>
              <div className='d-flex flex-column-auto flex-center h-50px bg-primary'>
                <span className='text-white'>Fixed Height</span>
              </div>
              <div className='d-flex flex-column-fluid bg-success flex-center'>
                <span className='text-white'>Fluid Height</span>
              </div>
            </div>
            <div className='d-flex flex-column flex-row-fluid'>
              <div className='d-flex flex-column-auto h-70px bg-info flex-center'>
                <span className='text-white'>Fixed Height</span>
              </div>
              <div className='d-flex flex-row flex-column-fluid'>
                <div className='d-flex flex-row-fluid bg-dark flex-center'>
                  <span className='text-white'>Fluid Width</span>
                </div>
                <div className='d-flex flex-row-auto w-200px bg-warning flex-center'>
                  <span className='text-white'>Fixed Width</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<div className="d-flex flex-row h-300px">
  <div className="d-flex flex-column flex-row-auto w-200px">
      <div className="d-flex flex-column-auto h-50px bg-primary">
          <span className="text-white">Fixed Height</span>
      </div>

      <div className="d-flex flex-column-fluid bg-success flex-center">
          <span className="text-white">Fluid Height</span>
      </div>
  </div>

  <div className="d-flex flex-column flex-row-fluid">
      <div className="d-flex flex-column-auto h-70px bg-info flex-center">
          <span className="text-white">Fixed Height</span>
      </div>

      <div className="d-flex flex-row flex-column-fluid">
          <div className="d-flex flex-row-fluid bg-dark flex-center">
              <span className="text-white">Fluid Width</span>
          </div>

          <div className="d-flex flex-row-auto w-200px bg-warning flex-center">
              <span className="text-white">Fixed Width</span>
          </div>
      </div>
  </div>
</div>`
