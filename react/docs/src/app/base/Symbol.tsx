/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {toAbsoluteUrl} from '../../_metronic/helpers'
import {CodeBlock} from '../../_metronic/partials'

export function Symbol() {
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>
          Symbol is a custom component for avatars or labels with content colors.
        </div>
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='avatar'>
          <a href='#avatar'></a>Avatar
        </h1>
        <div className='py-5'>Refer to below example to use Symbol for avatar image display:</div>
        <div className='py-5'>
          <div className='rounded border p-10 pb-0 d-flex flex-wrap'>
            <div className='symbol symbol-50px me-10 mb-10'>
              <img src={toAbsoluteUrl('/media/avatars/150-1.jpg')} alt='' />
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <img src={toAbsoluteUrl('/media/avatars/150-2.jpg')} alt='' />
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <img src={toAbsoluteUrl('/media/avatars/150-3.jpg')} alt='' />
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <img src={toAbsoluteUrl('/media/avatars/150-4.jpg')} alt='' />
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <img src={toAbsoluteUrl('/media/avatars/150-5.jpg')} alt='' />
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <img src={toAbsoluteUrl('/media/avatars/150-6.jpg')} alt='' />
            </div>
          </div>
        </div>
        <CodeBlock code={code} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='avatar-bg'>
          <a href='#avatar-bg'></a>Avatar Background
        </h1>
        <div className='py-5'>Refer to below example to place avatar as background image:</div>
        <div className='py-5'>
          <div className='rounded border p-10 pb-0 d-flex flex-wrap'>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-7.jpg')}')`,
                }}
              ></div>
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-8.jpg')}')`,
                }}
              ></div>
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-9.jpg')}')`,
                }}
              ></div>
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-10.jpg')}')`,
                }}
              ></div>
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-11.jpg')}')`,
                }}
              ></div>
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-12.jpg')}')`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='avatar-ratio'>
          <a href='#avatar-ratio'></a>Avatar Ratio
        </h1>
        <div className='py-5'>
          Use
          <code>.symbol-2by3</code>class to set avatar background image with 2 by 3 ratio:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10 pb-0 d-flex flex-wrap'>
            <div className='symbol symbol-50px symbol-2by3 me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-1.jpg')}')`,
                }}
              ></div>
            </div>
            <div className='symbol symbol-50px symbol-2by3 me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-2.jpg')}')`,
                }}
              ></div>
            </div>
            <div className='symbol symbol-50px symbol-2by3 me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-3.jpg')}')`,
                }}
              ></div>{' '}
            </div>
            <div className='symbol symbol-50px symbol-2by3 me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-4.jpg')}')`,
                }}
              ></div>{' '}
            </div>
            <div className='symbol symbol-50px symbol-2by3 me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-5.jpg')}')`,
                }}
              ></div>{' '}
            </div>
            <div className='symbol symbol-50px symbol-2by3 me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-6.jpg')}')`,
                }}
              ></div>{' '}
            </div>
          </div>
        </div>
        <CodeBlock code={code3} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='label'>
          <a href='#badge'></a>Label
        </h1>

        <div className='py-5'>
          Set symbol label within
          <code>.symbol-label</code>element and style it with text and background utility classes:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10 pb-0 d-flex flex-wrap'>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold text-success'>A</div>
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold bg-danger text-inverse-danger'>L</div>
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold text-danger'>C</div>
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold bg-primary text-inverse-primary'>T</div>
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold text-warning'>X</div>
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold bg-info text-inverse-info'>S</div>
            </div>
          </div>
        </div>
        <CodeBlock code={code4} language='markup' />
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='badge'>
          <a href='#badge'></a>Badge
        </h1>
        <div className='py-5'>
          Add a badge element using
          <code>.badge</code>component inside a symbol element:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10 pb-0 d-flex flex-wrap'>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold'>A</div>
              <span className='symbol-badge badge badge-circle bg-danger start-100'>3</span>
            </div>

            <div className='symbol symbol-50px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold'>A</div>
              <span className='symbol-badge badge badge-circle bg-success top-100 start-100'>
                3
              </span>
            </div>

            <div className='symbol symbol-50px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold'>A</div>
              <span className='symbol-badge badge badge-circle bg-primary start-0'>3</span>
            </div>

            <div className='symbol symbol-50px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold'>A</div>
              <span className='symbol-badge badge badge-circle bg-warning start-0 top-100'>3</span>
            </div>
          </div>
        </div>
        <CodeBlock code={code5} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='styles'>
          <a href='#sizes'></a>Styles
        </h1>

        <div className='py-5'>
          Use
          <code>.symbol-circle</code>and
          <code>.symbol-square</code>classes to change a symbol element's style:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10 pb-0 d-flex flex-wrap'>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-1.jpg')}')`,
                }}
              ></div>
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold text-success'>A</div>
            </div>
            <div className='symbol symbol-50px symbol-circle me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-1.jpg')}')`,
                }}
              ></div>
            </div>
            <div className='symbol symbol-50px symbol-circle me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold text-success'>A</div>
            </div>
            <div className='symbol symbol-50px symbol-square me-10 mb-10'>
              <div
                className='symbol-label'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/avatars/150-1.jpg')}')`,
                }}
              ></div>{' '}
            </div>
            <div className='symbol symbol-50px symbol-square me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold text-success'>A</div>
            </div>
          </div>
        </div>
        <CodeBlock code={code6} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='sizes'>
          <a href='#sizes'></a>Sizes
        </h1>
        <div className='py-5'>
          Assign responsive-friendly size to a symbol element with shorthand classes. The classes
          are named using the format
          <code>.symbol-{`{size}`}</code>for
          <code>xs</code>and
          <code>.symbol-{`{breakpoint}-{size}`}</code>for
          <code>sm</code>,<code>md</code>,<code>lg</code>,<code>xl</code>, and
          <code>xxl</code>.
        </div>
        <div className='py-5'>
          Where
          <code>size</code>is one of:
          <ul className='pt-3'>
            <li className='py-2'>
              <code>20px</code>- for classes that set height and width to 20px
            </li>
            <li className='py-2'>
              <code>25px</code>- for classes that set height and width to 25px
            </li>
            <li className='py-2'>
              <code>30px</code>- for classes that set height and width to 30px
            </li>
            <li className='py-2'>
              <code>35px</code>- for classes that set height and width to 35px
            </li>
            <li className='py-2'>
              <code>40px</code>- for classes that set height and width to 40px
            </li>
            <li className='py-2'>
              <code>45px</code>- for classes that set height and width to 45px
            </li>
            <li className='py-2'>
              <code>50px</code>- for classes that set height and width to 50px
            </li>
            <li className='py-2'>
              <code>55px</code>- for classes that set height and width to 55px
            </li>
            <li className='py-2'>
              <code>60px</code>- for classes that set height and width to 60px
            </li>
            <li className='py-2'>
              <code>65px</code>- for classes that set height and width to 65px
            </li>
            <li className='py-2'>
              <code>70px</code>- for classes that set height and width to 70px
            </li>
            <li className='py-2'>
              <code>75px</code>- for classes that set height and width to 75px
            </li>
            <li className='py-2'>
              <code>100px</code>- for classes that set height and width to 100px
            </li>
            <li className='py-2'>
              <code>125px</code>- for classes that set height and width to 125px
            </li>
            <li className='py-2'>
              <code>150px</code>- for classes that set height and width to 150px
            </li>
            <li className='py-2'>
              <code>160px</code>- for classes that set height and width to 160px
            </li>
            <li className='py-2'>
              <code>175px</code>- for classes that set height and width to 175px
            </li>
            <li className='py-2'>
              <code>200px</code>- for classes that set height and width to 200px
            </li>
          </ul>
        </div>
        <div className='py-5'>
          <div className='rounded border p-10 pb-0 d-flex flex-wrap align-items-center'>
            <div className='symbol symbol-30px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold text-success'>A</div>
            </div>
            <div className='symbol symbol-50px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold text-success'>A</div>
            </div>
            <div className='symbol symbol-75px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold text-success'>A</div>
            </div>
            <div className='symbol symbol-100px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold text-success'>A</div>
            </div>
            <div className='symbol symbol-125px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold text-success'>A</div>
            </div>
            <div className='symbol symbol-150px me-10 mb-10'>
              <div className='symbol-label fs-2 fw-bold text-success'>A</div>
            </div>
          </div>
        </div>
        <CodeBlock code={code7} language='markup' />
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='group'>
          <a href='#group'></a>Group
        </h1>

        <div className='py-5'>
          Wrap symbols with
          <code>.symbol-group</code>class to have a group with slighly overlapped symbols:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10 pb-0 d-flex flex-wrap'>
            <div className='symbol-group symbol-hover'>
              <div className='symbol symbol-circle symbol-50px mb-10'>
                <img src={toAbsoluteUrl('/media/avatars/150-1.jpg')} alt='' />
              </div>
              <div className='symbol symbol-circle symbol-50px mb-10'>
                <img src={toAbsoluteUrl('/media/avatars/150-2.jpg')} alt='' />
              </div>
              <div className='symbol symbol-circle symbol-50px mb-10'>
                <img src={toAbsoluteUrl('/media/avatars/150-3.jpg')} alt='' />
              </div>
              <div className='symbol symbol-circle symbol-50px mb-10'>
                <img src={toAbsoluteUrl('/media/avatars/150-4.jpg')} alt='' />
              </div>
              <div className='symbol symbol-circle symbol-50px mb-10'>
                <img src={toAbsoluteUrl('/media/avatars/150-5.jpg')} alt='' />
              </div>
              <div className='symbol symbol-circle symbol-50px mb-10'>
                <img src={toAbsoluteUrl('/media/avatars/150-6.jpg')} alt='' />
              </div>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code8} />
      </div>
    </>
  )
}

const code = `<div className="symbol symbol-50px me-10 mb-10">
  <img src={toAbsoluteUrl("/media/avatars/150-1.jpg")} alt="" />
</div>`

const code2 = `<div className="symbol symbol-50px me-10 mb-10"><div className="symbol-label" style={{backgroundImage: \`url('\${toAbsoluteUrl("/media/avatars/150-11.jpg")}')\`}}></div></div>`
const code3 = `<div className="symbol symbol-50px symbol-2by3 me-10 mb-10">
  <div className="symbol-label"
    style={{
      backgroundImage: \`url('\${toAbsoluteUrl(
        "/media/avatars/150-1.jpg"
      )}')\`,
    }}
  ></div>
</div>`

const code4 = `<div className="symbol symbol-50px">
  <div className="symbol-label fs-2 fw-bold text-success">A</div>
</div>

<div className="symbol symbol-50px">
  <div className="symbol-label fs-2 fw-bold bg-danger text-inverse-danger">L</div>
</div>

<div className="symbol symbol-50px">
  <div className="symbol-label fs-2 fw-bold text-danger">C</div>
</div>

<div className="symbol symbol-50px">
  <div className="symbol-label fs-2 fw-bold bg-primary text-inverse-primary">T</div>
</div>

<div className="symbol symbol-50px">
  <div className="symbol-label fs-2 fw-bold text-warning">X</div>
</div>

<div className="symbol symbol-50px">
  <div className="symbol-label fs-2 fw-bold bg-info text-inverse-info">S</div>
</div>`

const code5 = `<div className="symbol symbol-50px">
  <div className="symbol-label fs-2 fw-bold">A</div>
  <span className="badge badge-circle bg-danger">3</span>
</div>

<div className="symbol symbol-50px">
  <div className="symbol-label fs-2 fw-bold">A</div>
  <span className="badge badge-circle bg-danger top-100">3</span>
</div>

<div className="symbol symbol-50px">
  <div className="symbol-label fs-2 fw-bold">A</div>
  <span className="badge badge-circle bg-danger start-0">3</span>
</div>

<div className="symbol symbol-50px">
  <div className="symbol-label fs-2 fw-bold">A</div>
  <span className="badge badge-circle bg-danger start-0 top-100">3</span>
</div>`

const code6 = `<div className="symbol symbol-50px symbol-circle me-10 mb-10">
  <div className="symbol-label"
    style={{
      backgroundImage: \`url('\${toAbsoluteUrl(
        "/media/avatars/150-1.jpg"
      )}')\`,
    }}></div>
</div>`

const code7 = `<div className="symbol symbol-30px me-10 mb-10">
  <div className="symbol-label fs-2 fw-bold text-success">A</div>
</div>
<div className="symbol symbol-50px me-10 mb-10">
  <div className="symbol-label fs-2 fw-bold text-success">A</div>
</div>
<div className="symbol symbol-75px me-10 mb-10">
  <div className="symbol-label fs-2 fw-bold text-success">A</div>
</div>
<div className="symbol symbol-100px me-10 mb-10">
  <div className="symbol-label fs-2 fw-bold text-success">A</div>
</div>
<div className="symbol symbol-125px me-10 mb-10">
  <div className="symbol-label fs-2 fw-bold text-success">A</div>
</div>
<div className="symbol symbol-150px me-10 mb-10">
  <div className="symbol-label fs-2 fw-bold text-success">A</div>
</div>`

const code8 = `<div className="symbol-group symbol-hover">
  <div className="symbol symbol-circle symbol-50px mb-10">
    <img src={toAbsoluteUrl("/media/avatars/150-1.jpg")} alt="" />
  </div>
  <div className="symbol symbol-circle symbol-50px mb-10">
    <img src={toAbsoluteUrl("/media/avatars/150-2.jpg")} alt="" />
  </div>
  <div className="symbol symbol-circle symbol-50px mb-10">
    <img src={toAbsoluteUrl("/media/avatars/150-3.jpg")} alt="" />
  </div>
  <div className="symbol symbol-circle symbol-50px mb-10">
    <img src={toAbsoluteUrl("/media/avatars/150-4.jpg")} alt="" />
  </div>
  <div className="symbol symbol-circle symbol-50px mb-10">
    <img src={toAbsoluteUrl("/media/avatars/150-5.jpg")} alt="" />
  </div>
  <div className="symbol symbol-circle symbol-50px mb-10">
    <img src={toAbsoluteUrl("/media/avatars/150-6.jpg")} alt="" />
  </div>
</div>`
