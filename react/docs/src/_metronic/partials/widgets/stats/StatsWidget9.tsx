/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import {Carousel} from 'bootstrap'

type Props = {
  className: string
  innerPadding?: string
}

const StatsWidget9: React.FC<Props> = ({className, innerPadding = '', children}) => {
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
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className={`card-body ${innerPadding}`}>
        <div
          id='kt_stats_widget_9_carousel'
          className='carousel carousel-custom slide'
          data-bs-ride='carousel'
          data-bs-interval='8000'
          ref={carouselRef}
        >
          {/* begin::Top */}
          <div className='d-flex align-items-center justify-content-between flex-wrap'>
            {/* begin::Label */}
            <span className='text-muted fw-bolder pe-2'>Today’s Schedule</span>
            {/* end::Label */}

            {/* begin::Carousel Indicators */}
            <ol className='p-0 m-0 carousel-indicators carousel-indicators-dots'>
              <li
                data-bs-target='#kt_stats_widget_9_carousel'
                data-bs-slide-to='0'
                className='ms-1 active'
              ></li>
              <li
                data-bs-target='#kt_stats_widget_9_carousel'
                data-bs-slide-to='1'
                className='ms-1'
              ></li>
              <li
                data-bs-target='#kt_stats_widget_9_carousel'
                data-bs-slide-to='2'
                className='ms-1'
              ></li>
            </ol>
            {/* end::Carousel Indicators */}
          </div>
          {/* end::Top */}

          {/* begin::Carousel */}
          <div className='carousel-inner pt-9'>
            <div className='carousel-item active'>
              <div className='flex-grow-1'>
                <h3 className='fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer'>
                  UI/UX Design Updates
                </h3>

                <p className='text-primary fs-1 fw-bolder pt-3 mb-0'>11:15AM - 12:30PM</p>
              </div>
            </div>

            <div className='carousel-item'>
              <div className='flex-grow-1'>
                <h3 className='fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer'>
                  UI/UX Design Updates
                </h3>

                <p className='text-primary fs-1 fw-bolder pt-3 mb-0'>16:15AM - 11:20PM</p>
              </div>
            </div>

            <div className='carousel-item'>
              <div className='flex-grow-1'>
                <h3 className='fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer'>
                  UI/UX Design Updates
                </h3>

                <p className='text-primary fs-1 fw-bolder pt-3 mb-0'>13:15AM - 14:30PM</p>
              </div>
            </div>
          </div>
          {/* end::Carousel */}
        </div>
      </div>
      {/* end::Body */}

      {/* begin::Footer */}
      <div className='card-footer border-0 d-flex align-items-center justify-content-between pt-0 pb-10'>
        {children}
      </div>
      {/* end::Footer */}
    </div>
  )
}

export {StatsWidget9}
