/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function Carousel() {
  const {
    REACT_APP_THEME_NAME,
    REACT_APP_BOOTSTRAP_DOCS_LINK,
    REACT_APP_SASS_PATH,
    REACT_APP_SASS_VARIABLES_PATH,
  } = process.env

  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>
          <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; customizes the{' '}
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/carousel`} className='fw-bold'>
            Bootstrap Carousel
          </a>
          &nbsp; through the SASS variables in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
          <code>{REACT_APP_SASS_PATH}/_carousel.scss</code>.
        </div>
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='custom'>
          <a href='#custom'></a>Custom Example
        </h1>
        <div className='py-5'>
          Add
          <code>.carousel-custom</code>to use a customized carousel as shown below:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div
              id='kt_carousel_1_carousel'
              className='carousel carousel-custom slide'
              data-bs-ride='carousel'
              data-bs-interval='8000'
            >
              <div className='d-flex align-items-center justify-content-between flex-wrap'>
                <span className='fs-4 fw-bolder pe-2'>Projects</span>
                <ol className='p-0 m-0 carousel-indicators carousel-indicators-dots'>
                  <li
                    data-bs-target='#kt_carousel_1_carousel'
                    data-bs-slide-to='0'
                    className='ms-1 active'
                  ></li>
                  <li
                    data-bs-target='#kt_carousel_1_carousel'
                    data-bs-slide-to='1'
                    className='ms-1'
                  ></li>
                  <li
                    data-bs-target='#kt_carousel_1_carousel'
                    data-bs-slide-to='2'
                    className='ms-1'
                  ></li>
                </ol>
              </div>

              <div className='carousel-inner pt-8'>
                <div className='carousel-item active'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>

                <div className='carousel-item'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </div>

                <div className='carousel-item'>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code} language='markup' />
      </div>
    </>
  )
}

const code = `<div id="kt_carousel_1_carousel"
  className="carousel carousel-custom slide"
  data-bs-ride="carousel"
  data-bs-interval="8000"
>
  <div className="d-flex align-items-center justify-content-between flex-wrap">
    <span className="fs-4 fw-bolder pe-2">Projects</span>
    <ol className="p-0 m-0 carousel-indicators carousel-indicators-dots">
      <li
        data-bs-target="#kt_carousel_1_carousel"
        data-bs-slide-to="0"
        className="ms-1 active"
      ></li>
      <li
        data-bs-target="#kt_carousel_1_carousel"
        data-bs-slide-to="1"
        className="ms-1"
      ></li>
      <li
        data-bs-target="#kt_carousel_1_carousel"
        data-bs-slide-to="2"
        className="ms-1"
      ></li>
    </ol>
  </div>

  <div className="carousel-inner pt-8">
    <div className="carousel-item active">
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining
      essentially unchanged.
    </div>

    <div className="carousel-item">
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type
      specimen book.
    </div>

    <div className="carousel-item">
      Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged.
    </div>
  </div>
</div>
`
