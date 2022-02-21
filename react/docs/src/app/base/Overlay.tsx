/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../_metronic/helpers'
import {CodeBlock} from '../../_metronic/partials'

export function Overlay() {
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>
          Overlay is a custom component to create an overlay effect on elements.
        </div>
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>Basic Example
        </h1>
        <div className='py-5'>
          Use
          <code>.overlay</code>on an element and wrap the element's primary content with
          <code>.overlay-wrapper</code>and the overlay content with
          <code>.overlay-layer</code>and set the overlay backgroud color with opacity with
          <code>.bg-white .bg-opacity-5</code>:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='card card-custom overlay overflow-hidden'>
                  <div className='card-body p-0'>
                    <div className='overlay-wrapper'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-1.jpg')}
                        alt=''
                        className='w-100 rounded'
                      />
                    </div>
                    <div className='overlay-layer bg-dark bg-opacity-10'>
                      <a href='#' className='btn btn-primary btn-shadow'>
                        Explore
                      </a>
                      <a href='#' className='btn btn-light-primary btn-shadow ms-2'>
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card card-custom overlay overflow-hidden'>
                  <div className='card-body p-0'>
                    <div className='overlay-wrapper'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-2.jpg')}
                        alt=''
                        className='w-100 rounded'
                      />
                    </div>
                    <div className='overlay-layer bg-dark bg-opacity-10 align-items-end justify-content-center'>
                      <div className='d-flex flex-grow-1 flex-center py-5'>
                        <a href='#' className='btn btn-primary btn-shadow'>
                          Explore
                        </a>
                        <a href='#' className='btn btn-light-primary btn-shadow ms-2'>
                          Purchase
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card card-custom overlay overflow-hidden'>
                  <div className='card-body p-0'>
                    <div className='overlay-wrapper'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-3.jpg')}
                        alt=''
                        className='w-100 rounded'
                      />
                    </div>
                    <div className='overlay-layer bg-dark bg-opacity-10 align-items-start justify-content-center'>
                      <div className='d-flex flex-grow-1 flex-center py-5'>
                        <a href='#' className='btn btn-primary btn-shadow'>
                          Explore
                        </a>
                        <a href='#' className='btn btn-light-primary btn-shadow ms-2'>
                          Purchase
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#default-shown'></a>Default Shown
        </h1>
        <div className='py-5'>
          Use <code>.overlay-blockon</code> an element to display its overlay content by default:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='card overlay overlay-block'>
                  <div className='card-body p-0'>
                    <div className='overlay-wrapper'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-1.jpg')}
                        alt=''
                        className='w-100 card-rounded'
                      />
                    </div>
                    <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                      <img
                        src={toAbsoluteUrl('/media/svg/misc/video-play.svg')}
                        className='h-60px'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card overlay overlay-block'>
                  <div className='card-body p-0'>
                    <div className='overlay-wrapper'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-2.jpg')}
                        alt=''
                        className='w-100 card-rounded'
                      />
                    </div>
                    <div className='overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end justify-content-center'>
                      <div className='d-flex flex-grow-1 flex-center py-5'>
                        <img
                          src={toAbsoluteUrl('/media/svg/misc/video-play.svg')}
                          className='h-60px'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card overlay overlay-block'>
                  <div className='card-body p-0'>
                    <div className='overlay-wrapper'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-3.jpg')}
                        alt=''
                        className='w-100 card-rounded'
                      />
                    </div>
                    <div className='overlay-layer card-rounded bg-dark bg-opacity-10 align-items-start justify-content-center'>
                      <div className='d-flex flex-grow-1 flex-center py-5'>
                        <img
                          src={toAbsoluteUrl('/media/svg/misc/video-play.svg')}
                          className='h-60px'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='content-blocking'>
          <a href='#content-blocking'></a>Content Blocking
        </h1>

        <div className='py-5'>
          Use
          <code>.overlay-block</code>class for blocking an element content.
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='card card-custom shadow'>
                  <div className='card-header'>
                    <h3 className='card-title'>Content Blocking</h3>
                  </div>
                  <div className='card-body'>
                    <div className='overlay overlay-block rounded'>
                      <div className='overlay-wrapper p-5'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to.
                      </div>
                      <div className='overlay-layer rounded bg-dark bg-opacity-5'>
                        <div className='spinner-border text-primary' role='status'>
                          <span className='visually-hidden'>Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code3} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='card-blocking'>
          <a href='#card-blocking'></a>Card Blocking
        </h1>
        <div className='py-5'>
          Use
          <code>.overlay-block</code>class for blocking card element.
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='card card-custom card-border overlay overlay-block'>
                  <div className='card-header'>
                    <h3 className='card-title'>Card Blocking</h3>
                  </div>
                  <div className='card-body'>
                    <div className='overlay-wrapper p-5'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to.
                    </div>
                    <div className='overlay-layer rounded bg-dark bg-opacity-5'>
                      <div className='spinner-border text-primary' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code4} language='markup' />
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='modal-blocking'>
          <a href='#modal-blocking'></a>Modal Blocking
        </h1>
        <div className='py-5'>
          Use
          <code>.overlay-block</code>class block a modal's content.
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='row'>
              <div className='col-lg-6'>
                <button
                  type='button'
                  className='btn btn-primary me-2'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                >
                  Launch modal
                </button>
                <div
                  className='modal fade'
                  id='exampleModal'
                  tabIndex={-1}
                  aria-labelledby='exampleModalLabel'
                  style={{display: 'none'}}
                  aria-hidden='true'
                >
                  <div className='modal-dialog modal-dialog-centered' role='document'>
                    <div className='modal-content modal-content'>
                      <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                          Modal Title
                        </h5>
                        <div
                          className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          <KTSVG
                            className='svg-icon svg-icon-2x'
                            path='/media/icons/duotune/arrows/arr061.svg'
                          />
                        </div>
                      </div>
                      <div className='modal-body overlay overlay-block'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. Lorem
                        Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s,
                        <div className='overlay-layer bg-dark bg-opacity-5'>
                          <div className='spinner-border text-primary' role='status'>
                            <span className='visually-hidden'>Loading...</span>
                          </div>
                        </div>
                      </div>
                      <div className='modal-footer'>
                        <button
                          type='button'
                          className='btn btn-light-primary fw-bold'
                          data-bs-dismiss='modal'
                        >
                          Close
                        </button>
                        <button type='button' className='btn btn-primary fw-bold'>
                          Ok
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code5} language='markup' />
      </div>
    </>
  )
}

const code = `  <div className="row">
  <div className="col-lg-4">
    <div className="card card-custom overlay overflow-hidden">
      <div className="card-body p-0">
        <div className="overlay-wrapper">
          <img
            src={toAbsoluteUrl('/media/stock/600x400/img-1.jpg')}
            alt=""
            className="w-100 rounded"
          />
        </div>
        <div className="overlay-layer bg-dark bg-opacity-10">
          <a href="#" className="btn btn-primary btn-shadow">
            Explore
          </a>
          <a
            href="#"
            className="btn btn-light-primary btn-shadow ms-2"
          >
            Purchase
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4">
    <div className="card card-custom overlay overflow-hidden">
      <div className="card-body p-0">
        <div className="overlay-wrapper">
          <img
            src={toAbsoluteUrl('/media/stock/600x400/img-2.jpg')}
            alt=""
            className="w-100 rounded"
          />
        </div>
        <div className="overlay-layer bg-dark bg-opacity-10 align-items-end justify-content-center">
          <div className="d-flex flex-grow-1 flex-center py-5">
            <a href="#" className="btn btn-primary btn-shadow">
              Explore
            </a>
            <a
              href="#"
              className="btn btn-light-primary btn-shadow ms-2"
            >
              Purchase
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4">
    <div className="card card-custom overlay overflow-hidden">
      <div className="card-body p-0">
        <div className="overlay-wrapper">
          <img
            src={toAbsoluteUrl('/media/stock/600x400/img-3.jpg')}
            alt=""
            className="w-100 rounded"
          />
        </div>
        <div className="overlay-layer bg-dark bg-opacity-10 align-items-start justify-content-center">
          <div className="d-flex flex-grow-1 flex-center py-5">
            <a href="#" className="btn btn-primary btn-shadow">
              Explore
            </a>
            <a
              href="#"
              className="btn btn-light-primary btn-shadow ms-2"
            >
              Purchase
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`

const code2 = `<div className="row">
  <div className="col-lg-4">
    <div className="card overlay overlay-block">
      <div className="card-body p-0">
        <div className="overlay-wrapper">
          <img src={toAbsoluteUrl('/media/stock/600x400/img-1.jpg')} alt=""
               className="w-100 card-rounded"/>
        </div>
        <div className="overlay-layer card-rounded bg-dark bg-opacity-10">
          <img src={toAbsoluteUrl('/media/svg/misc/video-play.svg')} className="h-60px" alt=""/>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4">
    <div className="card overlay overlay-block">
      <div className="card-body p-0">
        <div className="overlay-wrapper">
          <img src={toAbsoluteUrl('/media/stock/600x400/img-2.jpg')} alt=""
               className="w-100 card-rounded"/>
        </div>
        <div
            className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end justify-content-center">
          <div className="d-flex flex-grow-1 flex-center py-5">
            <img src={toAbsoluteUrl('/media/svg/misc/video-play.svg')} className="h-60px" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4">
    <div className="card overlay overlay-block">
      <div className="card-body p-0">
        <div className="overlay-wrapper">
          <img src={toAbsoluteUrl('/media/stock/600x400/img-3.jpg')} alt=""
               className="w-100 card-rounded"/>
        </div>
        <div
            className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-start justify-content-center">
          <div className="d-flex flex-grow-1 flex-center py-5">
            <img src={toAbsoluteUrl('/media/svg/misc/video-play.svg')} className="h-60px" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`

const code3 = `<div className="card card-custom shadow">
  <div className="card-header">
    <h3 className="card-title">Content Blocking</h3>
  </div>
  <div className="card-body">
    <div className="overlay overlay-block rounded">
      <div className="overlay-wrapper p-5">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to.
      </div>
      <div className="overlay-layer rounded bg-dark bg-opacity-5">
        <div
          className="spinner-border text-primary"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</div>
`

const code4 = `<div className="card card-custom card-border overlay overlay-block">
  <div className="card-header">
    <h3 className="card-title">Card Blocking</h3>
  </div>
  <div className="card-body">
    <div className="overlay-wrapper p-5">
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to.
    </div>
    <div className="overlay-layer rounded bg-dark bg-opacity-5">
      <div
        className="spinner-border text-primary"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</div>
`

const code5 = `<button
  type="button"
  className="btn btn-primary me-2"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Launch modal
</button>
<div
  className="modal fade"
  id="exampleModal"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  style={{ display: "none" }}
  aria-hidden="true"
>
  <div
    className="modal-dialog modal-dialog-centered"
    role="document"
  >
    <div className="modal-content modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Modal Title
        </h5>
        <div
          className="btn btn-icon btn-sm btn-active-light-primary ms-2"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <KTSVG
            className="svg-icon svg-icon-2x"
            path="/media/icons/duotune/arrows/arr061.svg"
          />
        </div>
      </div>
      <div className="modal-body overlay overlay-block">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        <div className="overlay-layer bg-dark bg-opacity-5">
          <div
            className="spinner-border text-primary"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-light-primary fw-bold"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary fw-bold"
        >
          Ok
        </button>
      </div>
    </div>
  </div>
</div>
`
