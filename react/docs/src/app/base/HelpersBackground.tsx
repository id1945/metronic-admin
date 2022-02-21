/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function HelpersBackground() {
  const {REACT_APP_SASS_VARIABLES_PATH} = process.env

  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-3' id='bg-colors'>
          <a href='#bg-colors'></a>Background Colors
        </h1>

        <div className='py-5'>
          Easily set the background of an element to any contextual class as shown below:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <p className='bg-white text-inverse-white p-3 fw-bold fw-6'>.bg-white</p>
            <p className='bg-primary text-inverse-primary p-3 fw-bold fw-6'>.bg-primary</p>
            <p className='bg-light text-inverse-light p-3 fw-bold fw-6'>.bg-light</p>
            <p className='bg-secondary text-inverse-secondary p-3 fw-bold fw-6'>.bg-secondary</p>
            <p className='bg-success text-inverse-success p-3 fw-bold fw-6'>.bg-success</p>
            <p className='bg-info text-inverse-info p-3 fw-bold fw-6'>.bg-info</p>
            <p className='bg-warning text-inverse-warning p-3 fw-bold fw-6'>.bg-warning</p>
            <p className='bg-danger text-inverse-danger p-3 fw-bold fw-6'>.bg-danger</p>
            <p className='bg-dark text-inverse-dark p-3 fw-bold fw-6'>.bg-dark</p>
          </div>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='light-bg-colors'>
          <a href='#light-bg-colors'></a>Light Background Colors
        </h1>

        <div className='py-5'>
          Use
          <code>.bg-light-{`{color}`}</code>class to set an element's light background color defined
          with
          <code>$theme-light-colors</code>in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <p className='bg-light-primary text-primary p-3 fw-bold fw-6'>.bg-light-primary</p>
            <p className='bg-light-success text-success p-3 fw-bold fw-6'>.bg-light-success</p>
            <p className='bg-light-info text-info p-3 fw-bold fw-6'>.bg-light-info</p>
            <p className='bg-light-warning text-warning p-3 fw-bold fw-6'>.bg-light-warning</p>
            <p className='bg-light-danger text-danger p-3 fw-bold fw-6'>.bg-light-danger</p>
            <p className='bg-light-dark text-dark p-3 fw-bold fw-6'>.bg-light-dark</p>
          </div>
        </div>

        <CodeBlock language='markup' code={code2} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='active-bg-colors'>
          <a href='#active-bg-colors'></a>Active Background Colors
        </h1>

        <div className='py-5'>
          Use
          <code>.bg-active-{`{color}`}</code>class to toggle an element's active background color
          state with
          <code>.active</code>class:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <p className='bg-active-white text-active-inverse-white active p-3 fw-bold fw-6'>
              .bg-active-white
            </p>
            <p className='bg-active-primary text-active-inverse-primary active p-3 fw-bold fw-6'>
              .bg-active-primary
            </p>
            <p className='bg-active-light text-active-inverse-light active p-3 fw-bold fw-6'>
              .bg-active-light
            </p>
            <p className='bg-active-secondary text-active-inverse-secondary active p-3 fw-bold fw-6'>
              .bg-active-secondary
            </p>
            <p className='bg-active-success text-active-inverse-success active p-3 fw-bold fw-6'>
              .bg-active-success
            </p>
            <p className='bg-active-info text-active-inverse-info active p-3 fw-bold fw-6'>
              .bg-active-info
            </p>
            <p className='bg-active-warning text-active-inverse-warning active p-3 fw-bold fw-6'>
              .bg-active-warning
            </p>
            <p className='bg-active-danger text-active-inverse-danger active p-3 fw-bold fw-6'>
              .bg-active-danger
            </p>
            <p className='bg-active-dark text-active-inverse-dark active p-3 fw-bold fw-6'>
              .bg-active-dark
            </p>
          </div>
        </div>

        <CodeBlock language='markup' code={code3} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='hover-bg-colors'>
          <a href='#hover-bg-colors'></a>Hover Background Colors
        </h1>

        <div className='py-5'>
          Use
          <code>.bg-hover-{`{color}`}</code>class to set an element's hover background color:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <p className='text-gray-600 bg-hover-white text-hover-inverse-white p-3 fw-bold fw-6'>
              .bg-hover-white
            </p>
            <p className='text-gray-600 bg-hover-primary text-hover-inverse-primary p-3 fw-bold fw-6'>
              .bg-hover-primary
            </p>
            <p className='text-gray-600 bg-hover-light text-hover-inverse-light p-3 fw-bold fw-6'>
              .bg-hover-light
            </p>
            <p className='text-gray-600 bg-hover-secondary text-hover-inverse-secondary p-3 fw-bold fw-6'>
              .bg-hover-secondary
            </p>
            <p className='text-gray-600 bg-hover-success text-hover-inverse-success p-3 fw-bold fw-6'>
              .bg-hover-success
            </p>
            <p className='text-gray-600 bg-hover-info text-hover-inverse-info p-3 fw-bold fw-6'>
              .bg-hover-info
            </p>
            <p className='text-gray-600 bg-hover-warning text-hover-inverse-warning p-3 fw-bold fw-6'>
              .bg-hover-warning
            </p>
            <p className='text-gray-600 bg-hover-danger text-hover-inverse-danger p-3 fw-bold fw-6'>
              .bg-hover-danger
            </p>
            <p className='text-gray-600 bg-hover-dark text-hover-inverse-dark p-3 fw-bold fw-6'>
              .bg-hover-dark
            </p>
          </div>
        </div>
        <CodeBlock language='markup' code={code4} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='hover-light-bg-colors'>
          <a href='#hover-light-bg-colors'></a>Hover Light Background Colors
        </h1>

        <div className='py-5'>
          Use
          <code>.bg-hover-light-{`{color}`}</code>class to set an element's hover light background
          color:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <p className='text-gray-600 bg-hover-light-primary text-hover-primary p-3 fw-bold fw-6'>
              .bg-hover-light-primary
            </p>
            <p className='text-gray-600 bg-hover-light-success text-hover-success p-3 fw-bold fw-6'>
              .bg-hover-light-success
            </p>
            <p className='text-gray-600 bg-hover-light-info text-hover-info p-3 fw-bold fw-6'>
              .bg-hover-light-info
            </p>
            <p className='text-gray-600 bg-hover-light-warning text-hover-warning p-3 fw-bold fw-6'>
              .bg-hover-light-warning
            </p>
            <p className='text-gray-600 bg-hover-light-danger text-hover-danger p-3 fw-bold fw-6'>
              .bg-hover-light-danger
            </p>
            <p className='text-gray-600 bg-hover-light-dark text-hover-dark p-3 fw-bold fw-6'>
              .bg-hover-light-dark
            </p>
          </div>
        </div>
        <CodeBlock language='markup' code={code5} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='hoverable-bg-colors'>
          <a href='#hoverable-bg-colors'></a>Hoverable Background Colors
        </h1>

        <div className='py-5'>
          Use
          <code>.hoverable</code>with
          <code>.bg-{`{color}`}</code>class to set an element's background color with hover state:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <p className='text-gray-600 bg-white hoverable p-3 fw-bold fw-6'>
              .bg-white .hoverable
            </p>
            <p className='text-gray-600 bg-primary hoverable p-3 fw-bold fw-6'>
              .bg-primary .hoverable
            </p>
            <p className='text-gray-600 bg-light hoverable p-3 fw-bold fw-6'>
              .bg-light .hoverable
            </p>
            <p className='text-gray-600 bg-secondary hoverable p-3 fw-bold fw-6'>
              .bg-secondary .hoverable
            </p>
            <p className='text-gray-600 bg-success hoverable p-3 fw-bold fw-6'>
              .bg-success .hoverable
            </p>
            <p className='text-gray-600 bg-info hoverable p-3 fw-bold fw-6'>.bg-info .hoverable</p>
            <p className='text-gray-600 bg-warning hoverable p-3 fw-bold fw-6'>
              .bg-warning .hoverable
            </p>
            <p className='text-gray-600 bg-danger hoverable p-3 fw-bold fw-6'>
              .bg-danger .hoverable
            </p>
            <p className='text-gray-600 bg-dark hoverable p-3 fw-bold fw-6'>.bg-dark .hoverable</p>
          </div>
        </div>
        <CodeBlock language='markup' code={code6} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='hoverable-bg-colors'>
          <a href='#hoverable-bg-colors'></a>Hoverable Light Background Colors
        </h1>

        <div className='py-5'>
          Use
          <code>.hoverable</code>with
          <code>.bg-light-{`{color}`}</code>class to set an element's light background color with
          hover state:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <p className='text-gray-600 bg-light-primary hoverable p-3 fw-bold fw-6'>
              .bg-primary .hoverable
            </p>
            <p className='text-gray-600 bg-light-success hoverable p-3 fw-bold fw-6'>
              .bg-success .hoverable
            </p>
            <p className='text-gray-600 bg-light-info hoverable p-3 fw-bold fw-6'>
              .bg-info .hoverable
            </p>
            <p className='text-gray-600 bg-light-warning hoverable p-3 fw-bold fw-6'>
              .bg-warning .hoverable
            </p>
            <p className='text-gray-600 bg-light-danger hoverable p-3 fw-bold fw-6'>
              .bg-danger .hoverable
            </p>
            <p className='text-gray-600 bg-light-dark hoverable p-3 fw-bold fw-6'>
              .bg-dark .hoverable
            </p>
          </div>
        </div>
        <CodeBlock language='markup' code={code7} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='opacity'>
          <a href='#opacity'></a>Background Opacity
        </h1>

        <div className='py-5'>
          Use
          <code>.bg-opacity-{`{0, 5, 10, 15, 20, 25, 50, 75, 100}`}</code>class with
          <code>.bg-{`{color}`}</code>or
          <code>.bg-light-{`{color}`}</code>to set an element's background color with opacity:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10 d-flex flex-wrap'>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-opacity-0 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-150px'>bg-opacity-0</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-opacity-5 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-150px'>bg-opacity-5</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-opacity-10 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-150px'>bg-opacity-10</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-opacity-15 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-150px'>bg-opacity-15</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-opacity-20 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-150px'>bg-opacity-20</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-opacity-25 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-150px'>bg-opacity-25</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-opacity-50 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-150px'>bg-opacity-50</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-opacity-75 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-150px'>bg-opacity-75</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-opacity-100 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-150px'>bg-opacity-100</div>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code8} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='opacity'>
          <a href='#hover-bg-opacity'></a>Hover Background Opacity
        </h1>

        <div className='py-5'>
          Use
          <code>.bg-hover-opacity-{`{0, 5, 10, 15, 20, 25, 50, 75, 100}`}</code>class with
          <code>.bg-{`{color}`}</code>or
          <code>.bg-light-{`{color}`}</code>to set an element's background color with opacity:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10 d-flex flex-wrap'>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-hover-opacity-0 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-hover-opacity-0</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-hover-opacity-5 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-hover-opacity-5</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-hover-opacity-10 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-hover-opacity-10</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-hover-opacity-15 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-hover-opacity-15</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-hover-opacity-20 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-hover-opacity-20</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-hover-opacity-25 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-hover-opacity-25</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-hover-opacity-50 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-hover-opacity-50</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-hover-opacity-75 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-hover-opacity-75</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-hover-opacity-100 bg-primary flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-hover-opacity-100</div>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code9} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='opacity'>
          <a href='#active-bg-opacity'></a>Active Background Opacity
        </h1>

        <div className='py-5'>
          Use
          <code>.bg-active-opacity-{`{0, 5, 10, 15, 20, 25, 50, 75, 100}`}</code>class with
          <code>.bg-{`{color}`}</code>or
          <code>.bg-light-{`{color}`}</code>to set an element's background color with opacity:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10 d-flex flex-wrap'>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-active-opacity-0 bg-primary active flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-active-opactiy-0</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-active-opacity-5 bg-primary active flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-active-opactiy-5</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-active-opacity-10 bg-primary active flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-active-opactiy-10</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-active-opacity-15 bg-primary active flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-active-opactiy-15</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-active-opacity-20 bg-primary active flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-active-opactiy-20</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-active-opacity-25 bg-primary active flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-active-opactiy-25</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-active-opacity-50 bg-primary active flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-active-opactiy-50</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-active-opacity-75 bg-primary active flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-active-opactiy-75</div>
            </div>
            <div className='d-flex flex-column me-5 mb-5'>
              <div className='w-90px h-90px bg-active-opacity-100 bg-primary active flex-grow-1'></div>
              <div className='fw-bold py-2 w-175px'>bg-active-opactiy-100</div>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code10} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='bg-image-classes'>
          <a href='#bg-image-classes'></a>Background Image Classes
        </h1>

        <div className='py-5'>
          Assign background image style values to an element with shorthand classes with the format
          <code>bgi-{`{property}`}</code>.
        </div>

        <div className='py-5'>
          Where
          <code>property</code>is one of:
          <ul className='pt-3'>
            <li className='py-2'>
              <code>no-repeat</code>to set
              <code>background-repeat: no-repeat</code>
            </li>
            <li className='py-2'>
              <code>position-y-top</code>to set
              <code>background-position-y: top</code>
            </li>
            <li className='py-2'>
              <code>position-y-bottom</code>to set
              <code>background-position-y: bottom</code>
            </li>
            <li className='py-2'>
              <code>position-y-center</code>to set
              <code>background-position-y: center</code>
            </li>
            <li className='py-2'>
              <code>position-x-start</code>to set
              <code>background-position-x: left</code>
            </li>
            <li className='py-2'>
              <code>position-x-end</code>to set
              <code>background-position-x: right</code>
            </li>
            <li className='py-2'>
              <code>position-x-center</code>to set
              <code>background-position-x: center</code>
            </li>
            <li className='py-2'>
              <code>position-bottom</code>to set
              <code>background-position: 0 bottom</code>
            </li>
            <li className='py-2'>
              <code>position-center</code>to set
              <code>background-position: center</code>
            </li>
          </ul>
        </div>
        <CodeBlock language='markup' code={code11} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='bg-image-size-classes'>
          <a href='#bg-image-size-classes'></a>Background Image Size Classes
        </h1>

        <div className='py-5'>
          Use responsive-friendly background image size style values for an element with shorthand
          classes with the format
          <code>.bgi-size-{`{breakpoint}-{property}`}</code>. The classes are named using the format
          <code>.bgi-size-{`{property}`}</code>for
          <code>xs</code>and
          <code>.bgi-size-{`{breakpoint}-{property}`}</code>for
          <code>sm</code>,<code>md</code>,<code>lg</code>,<code>xl</code>, and
          <code>xxl</code>.
        </div>

        <div className='py-5'>
          Where
          <code>property</code>is one of:
          <ul className='pt-3'>
            <li className='py-2'>
              <code>auto</code>to set
              <code>background-size: auto</code>
            </li>
            <li className='py-2'>
              <code>cover</code>to set
              <code>background-size: cover</code>
            </li>
            <li className='py-2'>
              <code>contain</code>to set
              <code>background-size: contain</code>
            </li>
          </ul>
        </div>
        <CodeBlock language='markup' code={code12} />
      </div>
    </>
  )
}

const code = `<div className="bg-white"></div>
<div className="bg-primary"></div>
<div className="bg-light"></div>
<div className="bg-secondary"></div>
<div className="bg-success"></div>
<div className="bg-info"></div>
<div className="bg-warning"></div>
<div className="bg-danger"></div>
<div className="bg-dark"></div>`

const code2 = `<div className="bg-light-primary text-primary"></div>
<div className="bg-light-success text-success"></div>
<div className="bg-light-info text-info"></div>
<div className="bg-light-warning text-warning"></div>
<div className="bg-light-danger text-danger"></div>
<div className="bg-light-dark text-dark"></div>`

const code3 = `<div className="bg-active-white text-active-inverse-white active"></div>
<div className="bg-active-primary text-active-inverse-primary active"></div>
<div className="bg-active-light text-active-inverse-light active"></div>
<div className="bg-active-secondary text-active-inverse-secondary active"></div>
<div className="bg-active-success text-active-inverse-success active"></div>
<div className="bg-active-info text-active-inverse-info active"></div>
<div className="bg-active-warning text-active-inverse-warning active"></div>
<div className="bg-active-danger text-active-inverse-danger active"></div>
<div className="bg-active-dark text-active-inverse-dark active"></div>`

const code4 = `<div className="bg-hover-white text-hover-inverse-white"></div>
<div className="bg-hover-primary text-hover-inverse-primary"></div>
<div className="bg-hover-light text-hover-inverse-light"></div>
<div className="bg-hover-secondary text-hover-inverse-secondary"></div>
<div className="bg-hover-success text-hover-inverse-success"></div>
<div className="bg-hover-info text-hover-inverse-info"></div>
<div className="bg-hover-warning text-hover-inverse-warning"></div>
<div className="bg-hover-danger text-hover-inverse-danger"></div>
<div className="bg-hover-dark text-hover-inverse-dark"></div>`

const code5 = `<div className="bg-hover-light-primary text-hover-primary"></div>
<div className="bg-hover-light-success text-hover-success"></div>
<div className="bg-hover-light-info text-hover-info"></div>
<div className="bg-hover-light-warning text-hover-warning"></div>
<div className="bg-hover-light-danger text-hover-danger"></div>
<div className="bg-hover-light-dark text-hover-dark"></div>`

const code6 = `<div className="bg-white hoverable"></div>
<div className="bg-primary hoverable"></div>
<div className="bg-light hoverable"></div>
<div className="bg-secondary hoverable"></div>
<div className="bg-success hoverable"></div>
<div className="bg-info hoverable"></div>
<div className="bg-warning hoverable"></div>
<div className="bg-danger hoverable"></div>
<div className="bg-dark hoverable"></div>`

const code7 = `<div className="bg-light-primary hoverable"></div>
<div className="bg-light-success hoverable"></div>
<div className="bg-light-info hoverable"></div>
<div className="bg-light-warning hoverable"></div>
<div className="bg-light-danger hoverable"></div>
<div className="bg-light-dark hoverable"></div>`

const code8 = `<div className="bg-opacity-0 bg-primary"></div>
<div className="bg-opacity-5 bg-primary"></div>
<div className="bg-opacity-10 bg-primary"></div>
<div className="bg-opacity-15 bg-primary"></div>
<div className="bg-opacity-20 bg-primary"></div>
<div className="bg-opacity-25 bg-primary"></div>
<div className="bg-opacity-50 bg-primary"></div>
<div className="bg-opacity-75 bg-primary"></div>
<div className="bg-opacity-100 bg-primary"></div>`

const code9 = `<div className="bg-hover-opacity-0 bg-primary"></div>
<div className="bg-hover-opacity-5 bg-primary"></div>
<div className="bg-hover-opacity-10 bg-primary"></div>
<div className="bg-hover-opacity-15 bg-primary"></div>
<div className="bg-hover-opacity-20 bg-primary"></div>
<div className="bg-hover-opacity-25 bg-primary"></div>
<div className="bg-hover-opacity-50 bg-primary"></div>
<div className="bg-hover-opacity-75 bg-primary"></div>
<div className="bg-hover-opacity-100 bg-primary"></div>`

const code10 = `<div className="bg-active-opacity-0 bg-primary active"></div>
<div className="bg-active-opacity-5 bg-primary active"></div>
<div className="bg-active-opacity-10 bg-primary active"></div>
<div className="bg-active-opacity-15 bg-primary active"></div>
<div className="bg-active-opacity-20 bg-primary active"></div>
<div className="bg-active-opacity-25 bg-primary active"></div>
<div className="bg-active-opacity-50 bg-primary active"></div>
<div className="bg-active-opacity-75 bg-primary active"></div>
<div className="bg-active-opacity-100 bg-primary active"></div>`

const code11 = `<div style="background-image: url(image.png)" className="bgi-no-repeat bgi-position-center"></div>`

const code12 = `<div style="background-image: url(image.png)" className="bgi-size-contain bgi-size-lg-auto bgi-no-repeat bgi-position-center"></div>`
