/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react'
import {Carousel} from 'bootstrap'

type Props = {
  className: string
  innerPadding?: string
}

const StatsWidget8: React.FC<Props> = ({className, innerPadding = ''}) => {
  const carouselRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const element = carouselRef.current
    if (!element) {
      return
    }

    const carousel = new Carousel(element)
    return function cleanUp() {
      carousel.dispose()
    }
  }, [])
  return (
    <div className={`card card-custom ${className}`}>
      {/* begin::Body */}
      <div className={`card-body ${innerPadding}`}>
        <div
          className='carousel carousel-custom slide'
          id='widget8_carousel'
          data-bs-ride='carousel'
          data-bs-interval='8000'
          ref={carouselRef}
        >
          {/* begin::Heading */}
          <div className='d-flex align-items-center justify-content-between flex-wrap'>
            {/* begin::Label */}
            <span className='fs-6 text-muted fw-bolder pe-2'>Projects</span>
            {/* end::Label */}
            {/* begin::Carousel Indicators */}
            <ol className='p-0 m-0 carousel-indicators carousel-indicators-dots'>
              <li className='ms-1 active' data-bs-target='#widget8_carousel' data-bs-slide-to='0' />
              <li className='ms-1' data-bs-target='#widget8_carousel' data-bs-slide-to='1' />
              <li className='ms-1' data-bs-target='#widget8_carousel' data-bs-slide-to='2' />
            </ol>
            {/* end::Carousel Indicators */}
          </div>
          {/* end::Heading */}
          {/* begin::Carousel */}
          <div className='carousel-inner pt-8'>
            <div className='carousel-item active'>
              <div className='d-flex flex-column justify-content-between h-100'>
                <h3 className='fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer'>
                  Admin Launch Day
                </h3>
                <p className='text-gray-600 fw-bold pt-3 mb-0'>
                  To start a blog, think of a topic about and first brainstorm ways to write details
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              {/* begin::Section */}
              <div className='d-flex flex-column justify-content-between h-100'>
                {/* begin::Title */}
                <h3 className='fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer'>
                  Reached 50,000 Sales
                </h3>
                {/* end::Title */}

                {/* begin::Text */}
                <p className='text-gray-600 fw-bold pt-3 mb-0'>
                  To start a blog, think of a topic about and first brainstorm ways to write details
                </p>
                {/* end::Text */}
              </div>
              {/* end::Section */}
            </div>
            <div className='carousel-item'>
              {/* begin::Section */}
              <div className='d-flex flex-column justify-content-between h-100'>
                {/* begin::Title */}
                <h3 className='fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer'>
                  Close 300 support tickets
                </h3>
                {/* end::Title */}

                {/* begin::Text */}
                <p className='text-gray-600 fw-bold pt-3 mb-0'>
                  Each Leaflet map instance has its own React context.
                </p>
                {/* end::Text */}
              </div>
              {/* end::Section */}
            </div>
          </div>
          {/* end::Carousel */}
          {/* end::Body */}
        </div>
      </div>
      {/* begin::Footer */}
      <div className='card-footer border-0 pt-0 pb-10'>
        {/* begin::Text */}
        <div className='d-flex text-muted fw-bold fs-6 pb-4'>
          <span className='flex-grow-1'>Progress</span>
          <span className=''>78%</span>
        </div>
        {/* end::Text */}
        {/* begin::Progress */}
        <div className='progress h-6px  bg-light-danger'>
          <div
            className='progress-bar bg-danger'
            role='progressbar'
            style={{width: '70%'}}
            aria-valuenow={24}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
        {/* end::Progress */}
      </div>
      {/* end::Footer */}
    </div>
  )
}

export {StatsWidget8}
