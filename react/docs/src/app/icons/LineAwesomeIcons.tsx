/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function LineAwesomeIcons() {
  const {REACT_APP_THEME_NAME, REACT_APP_SASS_VARIABLES_PATH} = process.env
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>
          Swap Font Awesome for modern{' '}
          <a href='https://icons8.com/line-awesome' className='fw-bold' target='_blank'>
            Line Awesome Icons
          </a>
          &nbsp;in one line of code and use with <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; right
          away.
        </div>
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='usage'>
          <a href='#usage'></a>Ugage
        </h1>
        <div className='py-5'>
          Use Line Awesome icons with spesific class as explained in the{' '}
          <a className='fw-bold' href='https://icons8.com/line-awesome' target='_blank'>
            Icons Preview Page
          </a>
          :
        </div>

        <div className='py-5'>
          <div className='rounded border d-flex flex-wrap p-10'>
            <i className='las la-wallet fs-2x me-15'></i>
            <i className='las la-highlighter fs-2x me-15'></i>
            <i className='las la-calendar-alt fs-2x me-15'></i>
            <i className='las la-comments fs-2x me-15'></i>
            <i className='las la-file-code fs-2x me-15'></i>
            <i className='las la-drafting-compass fs-2x me-15'></i>
            <i className='las la-tags fs-2x me-15'></i>
            <i className='las la-tools fs-2x me-15'></i>
          </div>
        </div>
        <CodeBlock code={code} language='markup' />
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='icon-colors'>
          <a href='#icon-colors'></a>Icon Colors
        </h1>
        <div className='py-5'>
          The inline icons can be colored using
          <code>.text-{'{color}'}</code>class that defined with
          <code>$theme-text-colors</code>variable in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>:
        </div>
        <div className='py-5'>
          <div className='rounded border d-flex flex-wrap p-10'>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-white bg-dark'></i>
              <div className='fw-bold py-2'>white</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-primary'></i>
              <div className='fw-bold py-2'>primary</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-secondary'></i>
              <div className='fw-bold py-2'>secondary</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-light'></i>
              <div className='fw-bold py-2'>light</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-success'></i>
              <div className='fw-bold py-2'>success</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-info'></i>
              <div className='fw-bold py-2'>info</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-warning'></i>
              <div className='fw-bold py-2'>warning</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-danger'></i>
              <div className='fw-bold py-2'>danger</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-dark'></i>
              <div className='fw-bold py-2'>dark</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-muted'></i>
              <div className='fw-bold py-2'>muted</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-gray-100'></i>
              <div className='fw-bold py-2'>gray-100</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-gray-200'></i>
              <div className='fw-bold py-2'>gray-200</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-gray-300'></i>
              <div className='fw-bold py-2'>gray-300</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-gray-400'></i>
              <div className='fw-bold py-2'>gray-400</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-gray-500'></i>
              <div className='fw-bold py-2'>gray-500</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-gray-600'></i>
              <div className='fw-bold py-2'>gray-600</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-gray-700'></i>
              <div className='fw-bold py-2'>gray-700</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-gray-800'></i>
              <div className='fw-bold py-2'>gray-800</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <i className='las la-tint fs-2x text-gray-900'></i>
              <div className='fw-bold py-2'>gray-900</div>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code2} />
      </div>
      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-3' id='icon-sizes'>
          <a href='#icon-sizes'></a>Icon Sizes
        </h1>

        <div className='py-5'>
          The font icons can be sized using
          <code>.fs-{'{size}'}</code>class that defined with
          <code>$font-sizes</code>variable in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>
        </div>
        <div className='py-5'>
          Where
          <code>size</code>is one of:
          <ul className='pt-3'>
            <li className='py-2'>
              <code>1</code>- sets icon size that equals to
              <code>&lt;h1&gt;</code>font size
            </li>
            <li className='py-2'>
              <code>2</code>- sets icon size that equals to
              <code>&lt;h2&gt;</code>font size
            </li>
            <li className='py-2'>
              <code>3</code>- sets icon size that equals to
              <code>&lt;h3&gt;</code>font size
            </li>
            <li className='py-2'>
              <code>4</code>- sets icon size that equals to
              <code>&lt;h4&gt;</code>font size
            </li>
            <li className='py-2'>
              <code>5</code>- sets icon size that equals to
              <code>&lt;h5&gt;</code>font size
            </li>
            <li className='py-2'>
              <code>6</code>- sets icon size that equals to
              <code>&lt;h6&gt;</code>font size
            </li>
            <li className='py-2'>
              <code>7</code>- sets icon size that equals to
              <code>&lt;h7&gt;</code>font size
            </li>
            <li className='py-2'>
              <code>7</code>- sets icon size that equals to
              <code>0.95 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>8</code>- sets icon size that equals to
              <code>0.85 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>9</code>- sets icon size that equals to
              <code>0.75 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>10</code>- sets icon size that equals to
              <code>0.5 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>base</code>- sets icon size that equals to
              <code>$font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>fluid</code>- sets icon size that equals to
              <code>100%</code>
            </li>
            <li className='py-2'>
              <code>2x</code>- sets icon size that equals to
              <code>2 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>2qx</code>- sets icon size that equals to
              <code>2.25 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>2hx</code>- sets icon size that equals to
              <code>2.5 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>2tx</code>- sets icon size that equals to
              <code>2.75 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>3x</code>- sets icon size that equals to
              <code>3 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>3qx</code>- sets icon size that equals to
              <code>3.25 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>3hx</code>- sets icon size that equals to
              <code>3.5 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>3tx</code>- sets icon size that equals to
              <code>3.75 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>4x</code>- sets icon size that equals to
              <code>4 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>4qx</code>- sets icon size that equals to
              <code>4.25 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>4hx</code>- sets icon size that equals to
              <code>4.5 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>4tx</code>- sets icon size that equals to
              <code>4.75 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>5x</code>- sets icon size that equals to
              <code>5 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>5qx</code>- sets icon size that equals to
              <code>5.25 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>5hx</code>- sets icon size that equals to
              <code>5.5 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
            <li className='py-2'>
              <code>5tx</code>- sets icon size that equals to
              <code>5.75 of $font-size-base</code>where
              <code>$font-size-base: 1rem</code>
            </li>
          </ul>
        </div>
        <div className='py-5'>
          <div className='rounded border d-flex flex-wrap p-10'>
            <div className='d-flex flex-column h-100px w-100px me-10 mb-5'>
              <div className='d-flex flex-center flex-grow-1'>
                <i className='las la-tint fs-5x'></i>
              </div>
              <div className='fw-bold py-2 text-center'>.fs-5x</div>
            </div>
            <div className='d-flex flex-column h-100px w-100px me-10 mb-5'>
              <div className='d-flex flex-center flex-grow-1'>
                <i className='las la-tint fs-4x'></i>
              </div>
              <div className='fw-bold py-2 text-center'>.fs-4x</div>
            </div>
            <div className='d-flex flex-column h-100px w-100px me-10 mb-5'>
              <div className='d-flex flex-center flex-grow-1'>
                <i className='las la-tint fs-3x'></i>
              </div>
              <div className='fw-bold py-2 text-center'>.fs-3x</div>
            </div>
            <div className='d-flex flex-column h-100px w-100px me-10 mb-5'>
              <div className='d-flex flex-center flex-grow-1'>
                <i className='las la-tint fs-2tx'></i>
              </div>
              <div className='fw-bold py-2 text-center'>.fs-2tx</div>
            </div>
            <div className='d-flex flex-column h-100px w-100px me-10 mb-5'>
              <div className='d-flex flex-center flex-grow-1'>
                <i className='las la-tint fs-2hx'></i>
              </div>
              <div className='fw-bold py-2 text-center'>.fs-2hx</div>
            </div>
            <div className='d-flex flex-column h-100px w-100px me-10 mb-5'>
              <div className='d-flex flex-center flex-grow-1'>
                <i className='las la-tint fs-2qx'></i>
              </div>
              <div className='fw-bold py-2 text-center'>.fs-2qx</div>
            </div>
            <div className='d-flex flex-column h-100px w-100px me-10 mb-5'>
              <div className='d-flex flex-center flex-grow-1'>
                <i className='las la-tint fs-2x'></i>
              </div>
              <div className='fw-bold py-2 text-center'>.fs-2x</div>
            </div>
            <div className='d-flex flex-column h-100px w-100px me-10 mb-5'>
              <div className='d-flex flex-center flex-grow-1'>
                <i className='las la-tint fs-1'></i>
              </div>
              <div className='fw-bold py-2 text-center'>.fs-1</div>
            </div>
            <div className='d-flex flex-column h-100px w-100px me-10 mb-5'>
              <div className='d-flex flex-center flex-grow-1'>
                <i className='las la-tint fs-2'></i>
              </div>
              <div className='fw-bold py-2 text-center'>.fs-2</div>
            </div>
            <div className='d-flex flex-column h-100px w-100px me-10 mb-5'>
              <div className='d-flex flex-center flex-grow-1'>
                <i className='las la-tint fs-3'></i>
              </div>
              <div className='fw-bold py-2 text-center'>.fs-3</div>
            </div>
            <div className='d-flex flex-column h-100px w-100px me-10 mb-5'>
              <div className='d-flex flex-center flex-grow-1'>
                <i className='las la-tint fs-5'></i>
              </div>
              <div className='fw-bold py-2 text-center'>.fs-5</div>
            </div>
            <div className='d-flex flex-column h-100px w-100px me-10 mb-5'>
              <div className='d-flex flex-center flex-grow-1'>
                <i className='las la-tint fs-6'></i>
              </div>
              <div className='fw-bold py-2 text-center'>.fs-6</div>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code3} />
      </div>
    </>
  )
}

const code = `<i className="las la-wallet fs-2x me-15"></i>
<i className="las la-highlighter fs-2x me-15"></i>
<i className="las la-calendar-alt fs-2x me-15"></i>
<i className="las la-comments fs-2x me-15"></i>
<i className="las la-file-code fs-2x me-15"></i>
<i className="las la-drafting-compass fs-2x me-15"></i>
<i className="las la-tags fs-2x me-15"></i>
<i className="las la-tools fs-2x me-15"></i>`

const code2 = `<i className="las la-tint text-white"></i>
<i className="las la-tint text-primary"></i>
<i className="las la-tint text-secondary"></i>
<i className="las la-tint text-light"></i>
<i className="las la-tint text-success"></i>
<i className="las la-tint text-info"></i>
<i className="las la-tint text-warning"></i>
<i className="las la-tint text-danger"></i>
<i className="las la-tint text-dark"></i>
<i className="las la-tint text-muted"></i>
<i className="las la-tint text-gray-100"></i>
<i className="las la-tint text-gray-200"></i>
<i className="las la-tint text-gray-300"></i>
<i className="las la-tint text-gray-400"></i>
<i className="las la-tint text-gray-500"></i>
<i className="las la-tint text-gray-600"></i>
<i className="las la-tint text-gray-700"></i>
<i className="las la-tint text-gray-800"></i>
<i className="las la-tint text-gray-900"></i>`

const code3 = `<i className="las la-tint fs-5x"></i>
<i className="las la-tint fs-4x"></i>
<i className="las la-tint fs-3x"></i>
<i className="las la-tint fs-2tx"></i>
<i className="las la-tint fs-2hx"></i>
<i className="las la-tint fs-2qx"></i>
<i className="las la-tint fs-2x"></i>
<i className="las la-tint fs-1"></i>
<i className="las la-tint fs-2"></i>
<i className="las la-tint fs-3"></i>
<i className="las la-tint fs-5"></i>
<i className="las la-tint fs-6"></i>`
