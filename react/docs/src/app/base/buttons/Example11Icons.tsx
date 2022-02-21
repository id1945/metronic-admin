/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../_metronic/helpers'
import {CodeBlock} from '../../../_metronic/partials'

export function Example11Icons() {
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='icons'>
          <a href='#icons'></a>Icons
        </h1>
        <div className='py-5'>
          Use{' '}
          <a
            href='/themes/start/html/dist/?page=documentation/general/icons/duotune'
            className='fw-bold'
          >
            Duotune Svg Icons
          </a>
          &nbsp;in conbination with buttons as shown below:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <a href='#' className='btn btn-primary me-2 mb-2'>
              <KTSVG
                path='/media/icons/duotune/graphs/gra004.svg'
                className='svg-icon svg-icon-1'
              />{' '}
              Caption
            </a>

            <a href='#' className='btn btn-info me-2 mb-2'>
              <KTSVG
                path='/media/icons/duotune/graphs/gra004.svg'
                className='svg-icon svg-icon-1'
              />{' '}
              Caption
            </a>
            <a href='#' className='btn btn-warning me-2 mb-2'>
              <KTSVG
                path='/media/icons/duotune/graphs/gra004.svg'
                className='svg-icon svg-icon-1'
              />{' '}
              Caption
            </a>
            <a href='#' className='btn btn-danger me-2 mb-2'>
              <KTSVG
                path='/media/icons/duotune/graphs/gra004.svg'
                className='svg-icon svg-icon-1'
              />{' '}
              Caption
            </a>
            <a href='#' className='btn btn-dark me-2 mb-2'>
              <KTSVG
                path='/media/icons/duotune/graphs/gra004.svg'
                className='svg-icon svg-icon-1'
              />{' '}
              Caption
            </a>
            <div className='separator my-10'></div>
            <a href='#' className='btn btn-icon btn-primary me-2 mb-2'>
              <KTSVG
                path='/media/icons/duotune/graphs/gra004.svg'
                className='svg-icon svg-icon-1'
              />
            </a>
            <a href='#' className='btn btn-icon btn-success me-2 mb-2'>
              <KTSVG
                path='/media/icons/duotune/graphs/gra004.svg'
                className='svg-icon svg-icon-1'
              />
            </a>
            <a href='#' className='btn btn-icon btn-info me-2 mb-2'>
              <KTSVG
                path='/media/icons/duotune/graphs/gra004.svg'
                className='svg-icon svg-icon-1'
              />
            </a>
            <a href='#' className='btn btn-icon btn-warning me-2 mb-2'>
              <KTSVG
                path='/media/icons/duotune/graphs/gra004.svg'
                className='svg-icon svg-icon-1'
              />
            </a>
            <a href='#' className='btn btn-icon btn-danger me-2 mb-2'>
              <KTSVG
                path='/media/icons/duotune/graphs/gra004.svg'
                className='svg-icon svg-icon-1'
              />
            </a>
            <a href='#' className='btn btn-icon btn-dark me-2 mb-2'>
              <KTSVG
                path='/media/icons/duotune/graphs/gra004.svg'
                className='svg-icon svg-icon-1'
              />
            </a>
          </div>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>
      <div className='pt-5 pb-20'>
        <div className='py-5'>
          Use{` `}
          <Link to='/docs/icons/bootstrap' className='fw-bold'>
            Bootstrap Icons
          </Link>
          &nbsp;in conbination with buttons as shown below:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <a href='#' className='btn btn-primary me-2 mb-2'>
              <i className='bi bi-chat-square-text-fill fs-4 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-success me-2 mb-2'>
              <i className='bi bi-chat-square-text-fill fs-4 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-info me-2 mb-2'>
              <i className='bi bi-chat-square-text-fill fs-4 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-warning me-2 mb-2'>
              <i className='bi bi-chat-square-text-fill fs-4 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-danger me-2 mb-2'>
              <i className='bi bi-chat-square-text-fill fs-4 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-dark me-2 mb-2'>
              <i className='bi bi-chat-square-text-fill fs-4 me-2'></i>Caption
            </a>
            <div className='separator my-10'></div>
            <a href='#' className='btn btn-icon btn-primary me-2 mb-2'>
              <i className='bi bi-chat-square-text-fill fs-4'></i>
            </a>
            <a href='#' className='btn btn-icon btn-success me-2 mb-2'>
              <i className='bi bi-chat-square-text-fill fs-4'></i>
            </a>
            <a href='#' className='btn btn-icon btn-info me-2 mb-2'>
              <i className='bi bi-chat-square-text-fill fs-4'></i>
            </a>
            <a href='#' className='btn btn-icon btn-warning me-2 mb-2'>
              <i className='bi bi-chat-square-text-fill fs-4'></i>
            </a>
            <a href='#' className='btn btn-icon btn-danger me-2 mb-2'>
              <i className='bi bi-chat-square-text-fill fs-4'></i>
            </a>
            <a href='#' className='btn btn-icon btn-dark me-2 mb-2'>
              <i className='bi bi-chat-square-text-fill fs-4'></i>
            </a>
          </div>
        </div>
        <CodeBlock language='markup' code={code2} />
      </div>

      <div className='pt-5 pb-20'>
        <div className='py-5'>
          Use{' '}
          <Link to='/docs/icons/fontawesome' className='fw-bold'>
            Font Awesome Icons
          </Link>
          &nbsp;in conbination with buttons as shown below:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <a href='#' className='btn btn-primary me-2 mb-2'>
              <i className='fas fa-envelope-open-text fs-4 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-success me-2 mb-2'>
              <i className='fas fa-envelope-open-text fs-4 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-info me-2 mb-2'>
              <i className='fas fa-envelope-open-text fs-4 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-warning me-2 mb-2'>
              <i className='fas fa-envelope-open-text fs-4 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-danger me-2 mb-2'>
              <i className='fas fa-envelope-open-text fs-4 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-dark me-2 mb-2'>
              <i className='fas fa-envelope-open-text fs-4 me-2'></i>Caption
            </a>
            <div className='separator my-10'></div>
            <a href='#' className='btn btn-icon btn-primary me-2 mb-2'>
              <i className='fas fa-envelope-open-text fs-4'></i>
            </a>
            <a href='#' className='btn btn-icon btn-success me-2 mb-2'>
              <i className='fas fa-envelope-open-text fs-4'></i>
            </a>
            <a href='#' className='btn btn-icon btn-info me-2 mb-2'>
              <i className='fas fa-envelope-open-text fs-4'></i>
            </a>
            <a href='#' className='btn btn-icon btn-warning me-2 mb-2'>
              <i className='fas fa-envelope-open-text fs-4'></i>
            </a>
            <a href='#' className='btn btn-icon btn-danger me-2 mb-2'>
              <i className='fas fa-envelope-open-text fs-4'></i>
            </a>
            <a href='#' className='btn btn-icon btn-dark me-2 mb-2'>
              <i className='fas fa-envelope-open-text fs-4'></i>
            </a>
          </div>
        </div>
        <CodeBlock language='markup' code={code3} />
      </div>

      <div className='pt-5 pb-20'>
        <div className='py-5'>
          Use{' '}
          <Link to='/docs/icons/lineawesome' className='fw-bold'>
            Line Awesome Icons
          </Link>
          &nbsp;in conbination with buttons as shown below:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <a href='#' className='btn btn-primary me-2 mb-2'>
              <i className='las la-wallet fs-2 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-success me-2 mb-2'>
              <i className='las la-wallet fs-2 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-info me-2 mb-2'>
              <i className='las la-wallet fs-2 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-warning me-2 mb-2'>
              <i className='las la-wallet fs-2 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-danger me-2 mb-2'>
              <i className='las la-wallet fs-2 me-2'></i>Caption
            </a>
            <a href='#' className='btn btn-dark me-2 mb-2'>
              <i className='las la-wallet fs-2 me-2'></i>Caption
            </a>
            <div className='separator my-10'></div>
            <a href='#' className='btn btn-icon btn-primary me-2 mb-2'>
              <i className='las la-wallet fs-2'></i>
            </a>
            <a href='#' className='btn btn-icon btn-success me-2 mb-2'>
              <i className='las la-wallet fs-2'></i>
            </a>
            <a href='#' className='btn btn-icon btn-info me-2 mb-2'>
              <i className='las la-wallet fs-2'></i>
            </a>
            <a href='#' className='btn btn-icon btn-warning me-2 mb-2'>
              <i className='las la-wallet fs-2'></i>
            </a>
            <a href='#' className='btn btn-icon btn-danger me-2 mb-2'>
              <i className='las la-wallet fs-2'></i>
            </a>
            <a href='#' className='btn btn-icon btn-dark me-2 mb-2'>
              <i className='las la-wallet fs-2'></i>
            </a>
          </div>
        </div>

        <CodeBlock language='markup' code={code4} />
      </div>
    </>
  )
}

const code = `<a href="#" className="btn btn-primary"><span className="svg-icon svg-icon-1"><svg>...</svg></span>Caption</a>
<a href="#" className="btn btn-success"><span className="svg-icon svg-icon-1"><svg>...</svg></span>Caption</a>
<a href="#" className="btn btn-info"><span className="svg-icon svg-icon-1"><svg>...</svg></span>Caption</a>
<a href="#" className="btn btn-warning"><span className="svg-icon svg-icon-1"><svg>...</svg></span>Caption</a>
<a href="#" className="btn btn-danger"><span className="svg-icon svg-icon-1"><svg>...</svg></span>Caption</a>
<a href="#" className="btn btn-dark"><span className="svg-icon svg-icon-1"><svg>...</svg></span>Caption</a>

<a href="#" className="btn btn-icon btn-primary"><span className="svg-icon svg-icon-1"><svg>...</svg></span></a>
<a href="#" className="btn btn-icon btn-success"><span className="svg-icon svg-icon-1"><svg>...</svg></span></a>
<a href="#" className="btn btn-icon btn-info"><span className="svg-icon svg-icon-1"><svg>...</svg></span></a>
<a href="#" className="btn btn-icon btn-warning"><span className="svg-icon svg-icon-1"><svg>...</svg></span></a>
<a href="#" className="btn btn-icon btn-danger"><span className="svg-icon svg-icon-1"><svg>...</svg></span></a>
<a href="#" className="btn btn-icon btn-dark"><span className="svg-icon svg-icon-1"><svg>...</svg></span></a>`

const code2 = `<a href="#" className="btn btn-primary"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-success"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-info"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-warning"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-danger"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-dark"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i> Caption</a>

<a href="#" className="btn btn-icon btn-primary"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-success"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-info"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-warning"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-danger"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-dark"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i></a>`

const code3 = `<a href="#" className="btn btn-primary"><i className="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-success"><i className="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-info"><i className="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-warning"><i className="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-danger"><i className="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-dark"><i className="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a>

<a href="#" className="btn btn-icon btn-primary"><i className="fas fa-envelope-open-text fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-success"><i className="fas fa-envelope-open-text fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-info"><i className="fas fa-envelope-open-text fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-warning"><i className="fas fa-envelope-open-text fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-danger"><i className="fas fa-envelope-open-text fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-dark"><i className="fas fa-envelope-open-text fs-4 me-2"></i></a>`

const code4 = `<a href="#" className="btn btn-icon btn-primary"><i className="las la-wallet fs-2 me-2"></i> Caption</a>
<a href="#" className="btn btn-icon btn-success"><i className="las la-wallet fs-2 me-2"></i> Caption</a>
<a href="#" className="btn btn-icon btn-info"><i className="las la-wallet fs-2 me-2"></i> Caption</a>
<a href="#" className="btn btn-icon btn-warning"><i className="las la-wallet fs-2 me-2"></i> Caption</a>
<a href="#" className="btn btn-icon btn-danger"><i className="las la-wallet fs-2 me-2"></i> Caption</a>
<a href="#" className="btn btn-icon btn-dark"><i className="las la-wallet fs-2 me-2"></i> Caption</a>

<a href="#" className="btn btn-icon btn-primary"><i className="las la-wallet fs-2 me-2"></i></a>
<a href="#" className="btn btn-icon btn-success"><i className="las la-wallet fs-2 me-2"></i></a>
<a href="#" className="btn btn-icon btn-info"><i className="las la-wallet fs-2 me-2"></i></a>
<a href="#" className="btn btn-icon btn-warning"><i className="las la-wallet fs-2 me-2"></i></a>
<a href="#" className="btn btn-icon btn-danger"><i className="las la-wallet fs-2 me-2"></i></a>
<a href="#" className="btn btn-icon btn-dark"><i className="las la-wallet fs-2 me-2"></i></a>`
