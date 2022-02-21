/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef, useEffect} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {getCSS} from '../../../assets/ts/_utils'

export function SidebarUser() {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const height = parseInt(getCSS(chartRef.current, 'height'))
    const chart = new ApexCharts(chartRef.current, chartOptions(height))
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef])

  return (
    <div id='kt_sidebar_content' className='py-10 px-2 px-lg-8'>
      <div
        className='hover-scroll-y me-lg-n5 pe-lg-4'
        data-kt-scroll='true'
        data-kt-scroll-height='auto'
        data-kt-scroll-offset='10px'
        data-kt-scroll-wrappers='#kt_sidebar_content'
      >
        {/* begin::Card */}
        <div className='card card-custom bg-info'>
          {/* begin::Body */}
          <div className='card-body px-0'>
            <div className='pt-0'>
              {/* begin::Chart */}
              <div
                className='d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center'
                style={{
                  backgroundImage: `url('${toAbsoluteUrl('/media/svg/illustrations/bg-2.svg')}')`,
                }}
              >
                <div className='position-absolute mb-7'>
                  <div className='symbol symbol-circle symbol-100px overflow-hidden d-flex flex-center z-index-1'>
                    <span className='symbol-label bg-warning  align-items-end'>
                      <img
                        alt='Logo'
                        src={toAbsoluteUrl('/media/svg/avatars/016-boy-7.svg')}
                        className='mh-75px'
                      />
                    </span>
                  </div>
                </div>
                <div ref={chartRef} id='kt_user_chart' style={{height: '200px'}}></div>
              </div>
              {/* end::Chart */}

              {/* begin::Items */}
              <div className='pt-4'>
                {/* begin::Title */}
                <div className='text-center pb-12'>
                  {/* begin::Username */}
                  <h3 className='fw-bolder text-white fs-2 pb-4'>Mr. Anderson</h3>
                  {/* end::Username */}

                  {/* end::Action */}
                  <span className='fw-bolder fs-6 text-primary px-4 py-2 rounded bg-white bg-opacity-10'>
                    Python Dev
                  </span>
                  {/* begin::Action */}
                </div>
                {/* end::Title */}

                {/* begin::Row */}
                <div className='row row-cols-2 px-xl-12 sidebar-toolbar'>
                  <div className='col p-3'>
                    <a href='#' className='btn  p-5 w-100 text-start btn-active-primary'>
                      <span className='text-white fw-bolder fs-1 d-block pb-1'>38</span>
                      <span className='fw-bold'>Pending</span>
                    </a>
                  </div>

                  <div className='col p-3'>
                    <a href='#' className='btn  p-5 w-100 text-start btn-active-primary'>
                      <span className='text-white fw-bolder fs-1 d-block pb-1'>204</span>
                      <span className='fw-bold'>Completed</span>
                    </a>
                  </div>

                  <div className='col p-3'>
                    <a href='#' className='btn  p-5 w-100 text-start btn-active-primary'>
                      <span className='text-white fw-bolder fs-1 d-block pb-1'>76</span>
                      <span className='fw-bold'>On Hold</span>
                    </a>
                  </div>

                  <div className='col p-3'>
                    <a href='#' className='btn  p-5 w-100 text-start btn-active-primary'>
                      <span className='text-white fw-bolder fs-1 d-block pb-1'>9</span>
                      <span className='fw-bold'>In Progress</span>
                    </a>
                  </div>
                </div>
                {/* end::Row */}
              </div>
              {/* end::Items */}
            </div>
          </div>
          {/* end::Body */}
        </div>
        {/* end::Card */}

        {/* begin::Card */}
        <div className='card card-custom bg-info'>
          {/* begin::Header */}
          <div className='card-header border-0'>
            <h3 className='card-title fw-bolder text-white fs-3'>Fox Bestsellers</h3>
            <div className='card-toolbar'>
              {/* begin::Dropdown */}
              <button
                type='button'
                className='btn btn-md btn-icon btn-icon-white btn-info'
                data-kt-menu-trigger='click'
                data-kt-menu-overflow='true'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-1' />
              </button>
              <Dropdown1 />
              {/* end::Dropdown */}
            </div>
          </div>
          {/* end::Header */}

          {/* begin::Body */}
          <div className='card-body'>
            {/* begin::Item */}
            <div className='d-flex flex-wrap align-items-center mb-7'>
              {/* begin::Symbol */}
              <div className='symbol symbol-40px symbol-2by3 me-4'>
                <img
                  src={toAbsoluteUrl('/media/stock/600x400/img-17.jpg')}
                  alt=''
                  className='mw-100'
                />
              </div>
              {/* end::Symbol */}

              {/* begin::Title */}
              <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                  Blue Donut
                </a>
                <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                  Study the highway types
                </span>
              </div>
              {/* end::Title */}
            </div>
            {/* end::Item */}

            {/* begin: Item */}
            <div className='d-flex flex-wrap align-items-center mb-7'>
              {/* begin::Symbol */}
              <div className='symbol symbol-40px symbol-2by3 me-4'>
                <img
                  src={toAbsoluteUrl('/media/stock/600x400/img-10.jpg')}
                  alt=''
                  className='mw-100'
                />
              </div>
              {/* end::Symbol */}

              {/* begin::Title */}
              <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                  Lovely Hearts
                </a>
                <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                  Study the highway types
                </span>
              </div>
              {/* end::Title */}
            </div>
            {/* end: Item */}

            {/* begin::Item */}
            <div className='d-flex flex-wrap align-items-center mb-7'>
              {/* begin::Symbol */}
              <div className='symbol symbol-40px symbol-2by3 me-4'>
                <img
                  src={toAbsoluteUrl('/media/stock/600x400/img-1.jpg')}
                  alt=''
                  className='mw-100'
                />
              </div>
              {/* end::Symbol */}

              {/* begin::Title */}
              <div className='d-flex flex-column flex-grow-1 pe-3'>
                <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                  Hands & Yellow
                </a>
                <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                  Study the highway types
                </span>
              </div>
              {/* end::Title */}
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className='d-flex flex-wrap align-items-center mb-7'>
              {/* begin::Symbol */}
              <div className='symbol symbol-40px symbol-2by3 me-4'>
                <img
                  src={toAbsoluteUrl('/media/stock/600x400/img-9.jpg')}
                  alt=''
                  className='mw-100'
                />
              </div>
              {/* end::Symbol */}

              {/* begin::Title */}
              <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                  Cup & Green
                </a>
                <span className='text-white opacity-25 fs-7 fw-bold my-1'>
                  Study the highway types
                </span>
              </div>
              {/* end::Title */}
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className='d-flex flex-wrap align-items-center'>
              {/* begin::Symbol */}
              <div className='symbol symbol-40px symbol-2by3 me-4'>
                <img
                  src={toAbsoluteUrl('/media/stock/600x400/img-4.jpg')}
                  alt=''
                  className='mw-100'
                />
              </div>
              {/* end::Symbol */}

              {/* begin::Title */}
              <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                  Bose QC 35 II
                </a>
                <span className='text-white opacity-25 fs-7 fw-bold my-1'>
                  Study the highway types
                </span>
              </div>
              {/* end::Title */}
            </div>
            {/* end::Item */}
          </div>
          {/* end: Card Body */}
        </div>
        {/* end::Card */}
      </div>
    </div>
  )
}

const chartOptions = (height: string | number | undefined): ApexOptions => {
  return {
    series: [74],
    chart: {
      fontFamily: 'inherit',
      height: height,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '78%',
        },
        dataLabels: {
          name: {
            show: false,
            fontWeight: '700',
          },
          value: {
            color: '#5E6278',
            fontSize: '30px',
            fontWeight: '700',
            offsetY: 6,
            show: true,
            formatter: (val: number) => {
              return val + '%'
            },
          },
        },
        track: {
          background: '#00A3FF',
          strokeWidth: '100%',
        },
      },
    },
    colors: ['#F1416C'],
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  }
}
