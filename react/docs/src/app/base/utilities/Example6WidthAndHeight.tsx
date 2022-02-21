/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example6WidthAndHeight() {
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='width-and-height'>
        <a href='#width-and-height'></a>Width & Height
      </h1>

      <div className='py-5'>
        Assign responsive-friendly
        <code>height</code>,<code>min-height</code>,<code>max-height</code>,<code>width</code>,
        <code>min-with</code>and
        <code>max-width</code>values to an element with shorthand classes. The classes are named
        using the format
        <code>{`{property}-{size}`}</code>for
        <code>xs</code>and
        <code>{`{property}-{breakpoint}-{size}`}</code>for
        <code>sm</code>,<code>md</code>,<code>lg</code>,<code>xl</code>, and
        <code>xxl</code>.
      </div>

      <div className='py-5'>
        Where
        <code>size</code>defined with
        <code>$custom-sizes</code>variable in
        <code>sass/_variables.scss</code>is one of-
        <ul className='pt-3'>
          <li className='py-2'>
            <code>25</code>- for 25%
          </li>
          <li className='py-2'>
            <code>50</code>- for 50%
          </li>
          <li className='py-2'>
            <code>75</code>- for 75%
          </li>
          <li className='py-2'>
            <code>100</code>- for 100%
          </li>
          <li className='py-2'>
            <code>auto</code>- for auto
          </li>
          <li className='py-2'>
            <code>1px</code>
          </li>
          <li className='py-2'>
            <code>2px</code>
          </li>
          <li className='py-2'>
            <code>3px</code>
          </li>
          <li className='py-2'>
            <code>4px</code>
          </li>
          <li className='py-2'>
            <code>5px</code>
          </li>
          <li className='py-2'>
            <code>6px</code>
          </li>
          <li className='py-2'>
            <code>7px</code>
          </li>
          <li className='py-2'>
            <code>8px</code>
          </li>
          <li className='py-2'>
            <code>9px</code>
          </li>
          <li className='py-2'>
            <code>10px</code>
          </li>
          <li className='py-2'>
            <code>15px</code>
          </li>
          <li className='py-2'>
            <code>20px</code>
          </li>
          <li className='py-2'>
            <code>25px</code>
          </li>
          <li className='py-2'>
            <code>30px</code>
          </li>
          <li className='py-2'>
            <code>35px</code>
          </li>
          <li className='py-2'>
            <code>40px</code>
          </li>
          <li className='py-2'>
            <code>45px</code>
          </li>
          <li className='py-2'>
            <code>50px</code>
          </li>
          <li className='py-2'>
            <code>55px</code>
          </li>
          <li className='py-2'>
            <code>60px</code>
          </li>
          <li className='py-2'>
            <code>65px</code>
          </li>
          <li className='py-2'>
            <code>70px</code>
          </li>
          <li className='py-2'>
            <code>75px</code>
          </li>
          <li className='py-2'>
            <code>80px</code>
          </li>
          <li className='py-2'>
            <code>85px</code>
          </li>
          <li className='py-2'>
            <code>90px</code>
          </li>
          <li className='py-2'>
            <code>95px</code>
          </li>
          <li className='py-2'>
            <code>100px</code>
          </li>
          <li className='py-2'>
            <code>125px</code>
          </li>
          <li className='py-2'>
            <code>150px</code>
          </li>
          <li className='py-2'>
            <code>175px</code>
          </li>
          <li className='py-2'>
            <code>200px</code>
          </li>
          <li className='py-2'>
            <code>225px</code>
          </li>
          <li className='py-2'>
            <code>250px</code>
          </li>
          <li className='py-2'>
            <code>275px</code>
          </li>
          <li className='py-2'>
            <code>300px</code>
          </li>
          <li className='py-2'>
            <code>325px</code>
          </li>
          <li className='py-2'>
            <code>350px</code>
          </li>
          <li className='py-2'>
            <code>375px</code>
          </li>
          <li className='py-2'>
            <code>400px</code>
          </li>
          <li className='py-2'>
            <code>425px</code>
          </li>
          <li className='py-2'>
            <code>450px</code>
          </li>
          <li className='py-2'>
            <code>475px</code>
          </li>
          <li className='py-2'>
            <code>500px</code>
          </li>
          <li className='py-2'>
            <code>550px</code>
          </li>
          <li className='py-2'>
            <code>600px</code>
          </li>
          <li className='py-2'>
            <code>650px</code>
          </li>
          <li className='py-2'>
            <code>700px</code>
          </li>
          <li className='py-2'>
            <code>750px</code>
          </li>
          <li className='py-2'>
            <code>800px</code>
          </li>
          <li className='py-2'>
            <code>850px</code>
          </li>
          <li className='py-2'>
            <code>900px</code>
          </li>
          <li className='py-2'>
            <code>950px</code>
          </li>
          <li className='py-2'>
            <code>1000px</code>
          </li>
        </ul>
      </div>
      <div className='py-5'>
        <div className='rounded border p-10'>
          <div className='d-flex flex-wrap align-items-center'>
            <div className='w-100px h-100px d-flex flex-column flex-center me-5 mb-5 bg-light fw-bold'>
              w-100px
              <br />
              h-100px
            </div>
            <div className='w-150px h-150px d-flex flex-column flex-center me-5 mb-5 bg-light fw-bold'>
              w-150px
              <br />
              h-150px
            </div>
            <div className='w-200px h-200px d-flex flex-column flex-center me-5 mb-5 bg-light fw-bold'>
              w-200px
              <br />
              h-200px
            </div>
            <div className='w-250px h-250px d-flex flex-column flex-center me-5 mb-5 bg-light fw-bold'>
              w-250px
              <br />
              h-250px
            </div>
          </div>
          <div className='separator border-solid mt-10 mb-12'></div>
          <div className='d-flex flex-wrap align-items-center'>
            <div className='min-w-100px min-h-100px mw-100px mh-100px d-flex flex-column flex-center me-5 mb-5 bg-light fw-bold'>
              min-w-100px
              <br />
              min-h-100px
              <br />
              mw-100px
              <br />
              mh-100px
            </div>
            <div className='min-w-150px min-h-150px mw-150px mh-150px d-flex flex-column flex-center me-5 mb-5 bg-light fw-bold'>
              min-w-150px
              <br />
              min-h-150px
              <br />
              mw-150px
              <br />
              mh-150px
            </div>
            <div className='min-w-200px min-h-200px mw-200px mh-200px d-flex flex-column flex-center me-5 mb-5 bg-light fw-bold'>
              min-w-200px
              <br />
              min-h-200px
              <br />
              mw-200px
              <br />
              mh-200px
            </div>
            <div className='min-w-250px min-h-250px mw-250px mh-250px d-flex flex-column flex-center me-5 mb-5 bg-light fw-bold'>
              min-w-250px
              <br />
              min-h-250px
              <br />
              mw-250px
              <br />
              mh-250px
            </div>
          </div>
        </div>
      </div>
      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<div className="w-100px h-100px"></div>
<div className="w-150px h-150px"></div>
<div className="w-200px h-200px"></div>
<div className="w-250px h-250px"></div>
<div className="min-w-100px min-h-100px mw-100px mh-100px"></div>
<div className="min-w-150px min-h-150px mw-150px mh-150px"></div>
<div className="min-w-200px min-h-200px mw-200px mh-200px"></div>
<div className="min-w-250px min-h-250px mw-250px mh-250px"></div>`
