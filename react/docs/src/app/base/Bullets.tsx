/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {Link} from 'react-router-dom'
import {CodeBlock} from '../../_metronic/partials'

export function Bullets() {
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>
          Bullet is a custom component used with combination with other components to display a
          pointer to an item in the list or navigation.
        </div>
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>Basic
        </h1>
        <div className='py-5'>
          Use
          <code>.bullet</code>in a list or navigation items as a pointer:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='d-flex flex-column'>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet me-5'></span>Item 1
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet me-5'></span>Item 2
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet me-5'></span>Item 3
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet me-5'></span>Item 4
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet me-5'></span>Item 5
              </li>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='Colors'>
          <a href='#colors'></a>Colors
        </h1>
        <div className='py-5'>
          Use
          <code>.bg-{'{color}'}</code>class to set a bullets background color:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='d-flex flex-column'>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bg-white me-5'></span>white
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bg-primary me-5'></span>primary
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bg-light me-5'></span>light
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bg-secondary me-5'></span>secondary
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bg-success me-5'></span>success
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bg-info me-5'></span>info
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bg-warning me-5'></span>warning
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bg-danger me-5'></span>danger
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bg-dark me-5'></span>dark
              </li>
            </div>
          </div>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='dot-style'>
          <a href='#dot-style'></a>Dot Style
        </h1>
        <div className='py-5'>
          Use
          <code>.bullet-dot</code>to apply a dot style bullet:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='d-flex flex-column'>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-dot me-5'></span>Item 1
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-dot bg-danger me-5'></span>Item 2
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-dot bg-success me-5'></span>Item 3
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-dot bg-info me-5'></span>Item 4
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-dot bg-primary me-5'></span>Item 5
              </li>
            </div>
          </div>
        </div>
        <CodeBlock code={code3} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='dot-style'>
          <a href='#dot-style'></a>Vertical Style
        </h1>
        <div className='py-5'>
          Use
          <code>.bullet-vertical</code>to apply vertical style bullet:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='d-flex flex-column'>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-vertical me-5'></span>Item 1
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-vertical bg-danger me-5'></span>
                Item 2
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-vertical bg-success me-5'></span>
                Item 3
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-vertical bg-info me-5'></span>
                Item 4
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-vertical bg-primary me-5'></span>
                Item 5
              </li>
            </div>
          </div>
        </div>
        <CodeBlock code={code4} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='line-style'>
          <a href='#line-style'></a>Line Style
        </h1>
        <div className='py-5'>
          Use
          <code>.bullet-line</code>to apply a line style bullet:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='d-flex flex-column'>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-line me-5'></span>Item 1
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-line bg-danger me-5'></span>Item 2
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-line bg-success me-5'></span>Item 3
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-line bg-info me-5'></span>Item 4
              </li>
              <li className='d-flex align-items-center py-2'>
                <span className='bullet bullet-line bg-primary me-5'></span>Item 5
              </li>
            </div>
          </div>
        </div>
        <CodeBlock code={code5} language='markdown' />
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='sizes'>
          <a href='#sizes'></a>Sizes
        </h1>
        <div className='py-5'>
          Use
          <Link className='fw-bold' target='_blank' to='/docs/utilities##width-and-height'>
            Custom Size Classes
          </Link>
          &nbsp; for bullets to set custom width and height:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10 d-flex flex-column flex-wrap'>
            <div className='d-flex'>
              <div className='d-flex align-items-center me-15'>
                <span className='bullet bg-primary h-15px w-25px me-5'></span>
                .h-15px .w-25px
              </div>
              <div className='d-flex align-items-center me-15'>
                <span className='bullet bg-primary h-20px w-30px me-5'></span>
                .h-20px .w-30px
              </div>
              <div className='d-flex align-items-center'>
                <span className='bullet bg-primary h-30px w-50px me-5'></span>
                .h-30px .w-50px
              </div>
            </div>
            <div className='separator my-10'></div>
            <div className='d-flex'>
              <div className='d-flex align-items-center me-15'>
                <span className='bullet bullet-dot bg-primary h-15px w-15px me-5'></span>
                .h-15px .w-15px
              </div>
              <div className='d-flex align-items-center me-15'>
                <span className='bullet bullet-dot bg-primary h-20px w-20px me-5'></span>
                .h-20px .w-20px
              </div>
              <div className='d-flex align-items-center'>
                <span className='bullet bullet-dot bg-primary h-30px w-30px me-5'></span>
                .h-30px .w-30px
              </div>
            </div>
            <div className='separator my-10'></div>
            <div className='d-flex'>
              <div className='d-flex align-items-center me-15'>
                <span className='bullet bullet-vertical bg-primary h-25px w-15px me-5'></span>
                .h-25px .w-15px
              </div>
              <div className='d-flex align-items-center me-15'>
                <span className='bullet bullet-vertical bg-primary h-30px w-20px me-5'></span>
                .h-30px .w-20px
              </div>
              <div className='d-flex align-items-center'>
                <span className='bullet bullet-vertical bg-primary h-50px w-30px me-5'></span>
                .h-50px .w-30px
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code6} language='markdown' />
      </div>
    </>
  )
}

const code = `<div className="d-flex flex-column">
  <li className="d-flex align-items-center py-2">
    <span className="bullet me-5"></span>Item 1
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet me-5"></span>Item 2
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet me-5"></span>Item 3
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet me-5"></span>Item 4
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet me-5"></span>Item 5
  </li>
</div>`

const code2 = `<div className="d-flex flex-column">
  <li className="d-flex align-items-center py-2">
    <span className="bullet bg-white me-5"></span>white
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bg-primary me-5"></span>primary
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bg-light me-5"></span>light
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bg-secondary me-5"></span>secondary
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bg-success me-5"></span>success
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bg-info me-5"></span>info
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bg-warning me-5"></span>warning
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bg-danger me-5"></span>danger
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bg-dark me-5"></span>dark
  </li>
</div>`

const code3 = `<div className="d-flex flex-column">
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-dot me-5"></span>Item 1
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-dot bg-danger me-5"></span>Item 2
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-dot bg-success me-5"></span>Item
    3
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-dot bg-info me-5"></span>Item 4
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-dot bg-primary me-5"></span>Item
    5
  </li>
</div>`

const code4 = ` <div className="d-flex flex-column">
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-vertical me-5"></span>Item 1
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-vertical bg-danger me-5"></span>
    Item 2
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-vertical bg-success me-5"></span>
    Item 3
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-vertical bg-info me-5"></span>
    Item 4
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-vertical bg-primary me-5"></span>
    Item 5
  </li>
</div>`

const code5 = `<div className="d-flex flex-column">
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-line me-5"></span>Item 1
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-line bg-danger me-5"></span>Item
    2
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-line bg-success me-5"></span>Item
    3
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-line bg-info me-5"></span>Item 4
  </li>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-line bg-primary me-5"></span>Item
    5
  </li>
</div>`

const code6 = `<div className="rounded border p-10 d-flex flex-column flex-wrap">
  <div className="d-flex">
    <div className="d-flex align-items-center me-15">
      <span className="bullet bg-primary h-15px w-25px me-5"></span>
      .h-15px .w-25px
    </div>
    <div className="d-flex align-items-center me-15">
      <span className="bullet bg-primary h-20px w-30px me-5"></span>
      .h-20px .w-30px
    </div>
    <div className="d-flex align-items-center">
      <span className="bullet bg-primary h-30px w-50px me-5"></span>
      .h-30px .w-50px
    </div>
  </div>
  <div className="separator my-10"></div>
  <div className="d-flex">
    <div className="d-flex align-items-center me-15">
      <span className="bullet bullet-dot bg-primary h-15px w-15px me-5"></span>
      .h-15px .w-15px
    </div>
    <div className="d-flex align-items-center me-15">
      <span className="bullet bullet-dot bg-primary h-20px w-20px me-5"></span>
      .h-20px .w-20px
    </div>
    <div className="d-flex align-items-center">
      <span className="bullet bullet-dot bg-primary h-30px w-30px me-5"></span>
      .h-30px .w-30px
    </div>
  </div>
  <div className="separator my-10"></div>
  <div className="d-flex">
    <div className="d-flex align-items-center me-15">
      <span className="bullet bullet-vertical bg-primary h-25px w-15px me-5"></span>
      .h-25px .w-15px
    </div>
    <div className="d-flex align-items-center me-15">
      <span className="bullet bullet-vertical bg-primary h-30px w-20px me-5"></span>
      .h-30px .w-20px
    </div>
    <div className="d-flex align-items-center">
      <span className="bullet bullet-vertical bg-primary h-50px w-30px me-5"></span>
      .h-50px .w-30px
    </div>
  </div>
</div>`
