/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import {Chart, ChartConfiguration} from 'chart.js'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
  innerPadding?: string
}

const StatsWidget1: React.FC<Props> = ({className, innerPadding = ''}) => {
  useEffect(() => {
    const element = document.getElementById('kt_stats_widget_1_chart') as HTMLCanvasElement
    if (!element) {
      return
    }

    const options = getChartOptions()
    const ctx = element.getContext('2d')
    let myDoughnut: Chart | null
    if (ctx) {
      myDoughnut = new Chart(ctx, options)
    }
    return function cleanUp() {
      if (myDoughnut) {
        myDoughnut.destroy()
      }
    }
  }, [])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className={`card-header align-items-center border-0 mt-5 ${innerPadding}`}>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bolder text-dark fs-3'>Sales Share</span>
          <span className='text-muted mt-2 fw-bold fs-6'>890,344 Sales</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Dropdown */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
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
      <div className='card-body pt-12'>
        {/* begin::Chart */}
        <div
          className='d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px'
          style={{
            backgroundImage: `url('${toAbsoluteUrl('/media/svg/illustrations/bg-1.svg')}')`,
          }}
        >
          <div className='fw-bolder fs-1 text-gray-800 position-absolute'>8,345</div>
          <canvas id='kt_stats_widget_1_chart'></canvas>
        </div>
        {/* end::Chart */}

        {/* begin::Items */}
        <div className='d-flex justify-content-around pt-18'>
          {/* begin::Item */}
          <div className=''>
            <span className='fw-bolder text-gray-800'>48% SNT</span>
            <span className='bg-info w-25px h-5px d-block rounded mt-1'></span>
          </div>
          {/* end::Item */}

          {/* begin::Item */}
          <div className=''>
            <span className='fw-bolder text-gray-800'>20% REX</span>
            <span className='bg-primary w-25px h-5px d-block rounded mt-1'></span>
          </div>
          {/* end::Item */}

          {/* begin::Item */}
          <div className=''>
            <span className='fw-bolder text-gray-800'>32% SAP</span>
            <span className='bg-warning w-25px h-5px d-block rounded mt-1'></span>
          </div>
          {/* end::Item */}
        </div>
        {/* end::Items */}
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export {StatsWidget1}

function getChartOptions() {
  const tooltipBgColor = getCSSVariableValue('--bs-gray-200')
  const tooltipColor = getCSSVariableValue('--bs-gray-800')

  const color1 = getCSSVariableValue('--bs-success')
  const color2 = getCSSVariableValue('--bs-warning')
  const color3 = getCSSVariableValue('--bs-primary')

  const options: ChartConfiguration = {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [30, 40, 25],
          backgroundColor: [color1, color2, color3],
        },
      ],
      labels: ['Angular', 'CSS', 'HTML'],
    },
    options: {
      cutoutPercentage: 75,
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Technology',
      },
      animation: {
        /* @ts-ignore */
        animateScale: true,
        animateRotate: true,
      },
      tooltips: {
        enabled: true,
        intersect: false,
        mode: 'nearest',
        bodySpacing: 5,
        yPadding: 10,
        xPadding: 10,
        caretPadding: 0,
        displayColors: false,
        backgroundColor: tooltipBgColor,
        bodyFontColor: tooltipColor,
        cornerRadius: 4,
        footerSpacing: 0,
        titleSpacing: 0,
      },
    },
  }
  return options
}

// function randomScalingFactor() {
//   return Math.round(Math.random() * 100);
// }
