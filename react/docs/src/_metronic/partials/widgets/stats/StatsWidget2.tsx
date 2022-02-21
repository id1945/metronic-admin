/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown2} from '../../content/dropdown/Dropdown2'
import {getCSSVariableValue} from '../../../assets/ts/_utils'

type Props = {
  className: string
  innerPadding?: string
}

const StatsWidget2: React.FC<Props> = ({className, innerPadding = ''}) => {
  const [activeTab, setActiveTab] = useState('#tab1')
  const [activeChart, setActiveChart] = useState<ApexCharts | undefined>()
  useEffect(() => {
    setTab(1)
    return function cleanUp() {
      if (activeChart) {
        activeChart.destroy()
      }
    }
  }, [])

  const setTab = (tabNumber: number) => {
    setActiveTab(`#tab${tabNumber}`)
    if (activeChart) {
      activeChart.destroy()
    }

    const element = document.querySelector(`#tab${tabNumber}_chart`) as HTMLElement
    if (!element) {
      return
    }

    const height = parseInt(getCss(element, 'height'))
    const chart = new ApexCharts(element, getChartOptions(tabNumber, height))
    chart.render()
    setActiveChart(chart)
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bolder text-dark fs-3'>Milestones</span>
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
            <KTSVG className='svg-icon-1' path='/media/icons/duotune/general/gen024.svg' />
          </button>
          <Dropdown2 />
          {/* end::Dropdown */}
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body pt-0'>
        <div className='d-flex flex-wrap flex-xxl-nowrap justify-content-center justify-content-md-start pt-4'>
          {/* begin::Nav */}
          <div className='me-sm-10 me-0'>
            <ul className='nav flex-column nav-pills nav-pills-custom'>
              <li className='nav-item mb-3'>
                <a
                  onClick={() => setTab(1)}
                  className={`nav-link w-225px h-70px ${
                    activeTab === '#tab1' ? 'active btn-active-light' : ''
                  } fw-bolder me-2`}
                  id='tab1'
                >
                  <div className='nav-icon me-3'>
                    <img
                      alt=''
                      src={toAbsoluteUrl('/media/svg/logo/gray/aven.svg')}
                      className='default'
                    />

                    <img
                      alt=''
                      src={toAbsoluteUrl('/media/svg/logo/colored/aven.svg')}
                      className='active'
                    />
                  </div>
                  <div className='ps-1'>
                    <span className='nav-text text-gray-600 fw-bolder fs-6'>Man&Flower SaaS</span>
                    <span className='text-muted fw-bold d-block pt-1'>HR Solutions</span>
                  </div>
                </a>
              </li>

              <li className='nav-item mb-3'>
                <a
                  id='tab2'
                  className={`nav-link w-225px h-70px ${
                    activeTab === '#tab2' ? 'active btn-active-light' : ''
                  } fw-bolder me-2`}
                  onClick={() => setTab(2)}
                >
                  <div className='nav-icon me-3'>
                    <img
                      alt=''
                      src={toAbsoluteUrl('/media/svg/logo/gray/tower.svg')}
                      className='default'
                    />
                    <img
                      alt=''
                      src={toAbsoluteUrl('/media/svg/logo/colored/tower.svg')}
                      className='active'
                    />
                  </div>
                  <div className='ps-1'>
                    <span className='nav-text text-gray-600 fw-bolder fs-6'>Building Studio</span>
                    <span className='text-muted fw-bold d-block pt-1'>HR Solutions</span>
                  </div>
                </a>
              </li>

              <li className='nav-item mb-3'>
                <a
                  id='tab3'
                  className={`nav-link w-225px h-70px ${
                    activeTab === '#tab3' ? 'active btn-active-light' : ''
                  } fw-bolder me-2`}
                  onClick={() => setTab(3)}
                >
                  <div className='nav-icon me-3'>
                    <img
                      alt=''
                      src={toAbsoluteUrl('/media/svg/logo/gray/fox-hub-2.svg')}
                      className='default'
                    />
                    <img
                      alt=''
                      src={toAbsoluteUrl('/media/svg/logo/colored/fox-hub-2.svg')}
                      className='active'
                    />
                  </div>
                  <div className='ps-1'>
                    <span className='nav-text text-gray-600 fw-bolder fs-6'>Foxy Solutions</span>
                    <span className='text-muted fw-bold d-block pt-1'>HR Solutions</span>
                  </div>
                </a>
              </li>

              <li className='nav-item mb-5'>
                <a
                  id='tab4'
                  className={`nav-link w-225px h-70px ${
                    activeTab === '#tab4' ? 'active btn-active-light' : ''
                  } fw-bolder me-2`}
                  onClick={() => setTab(4)}
                >
                  <div className='nav-icon me-3'>
                    <img
                      alt=''
                      src={toAbsoluteUrl('/media/svg/logo/gray/kanba.svg')}
                      className='default'
                    />
                    <img
                      alt=''
                      src={toAbsoluteUrl('/media/svg/logo/colored/kanba.svg')}
                      className='active'
                    />
                  </div>
                  <div className='ps-1'>
                    <span className='nav-text text-gray-600 fw-bolder fs-6'>MyStreams</span>
                    <span className='text-muted fw-bold d-block pt-1'>HR Solutions</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {/* end::Nav */}

          {/* begin::Tab Content */}
          <div
            className='tab-content flex-grow-1' // style={{ paddingLeft: "0.23rem !important" }}
          >
            {/* begin::Tab Pane 1 */}
            <div
              className={`tab-pane fade ${activeTab === '#tab1' ? 'show active' : ''}`}
              id='tab1_content'
            >
              {/* begin::Content */}
              <div className='d-flex justify-content-center mb-10'>
                {/* begin::Item */}
                <div className='px-10'>
                  <span className='text-muted fw-bold fs-7'>Sale</span>
                  <span className='text-gray-800 fw-bolder fs-3 d-block'>$650</span>
                </div>
                {/* end::Item */}

                {/* begin::Item */}
                <div className='px-10'>
                  <span className='text-muted fw-bold fs-7'>Commission</span>
                  <span className='text-gray-800 fw-bolder fs-3 d-block'>$2,040</span>
                </div>
                {/* end::Item */}

                {/* begin::Item */}
                <div className='px-10'>
                  <span className='text-muted fw-bold fs-7'>Refers</span>
                  <span className='text-gray-800 fw-bolder fs-3 d-block'>8,926</span>
                </div>
                {/* end::Item */}
              </div>
              {/* end::Content  */}

              {/* begin::Chart */}
              <div id='tab1_chart' style={{height: '250px'}} />
              {/* end::Chart      */}
            </div>
            {/* end::Tab Pane 1 */}

            {/* begin::Tab Pane 2 */}
            <div
              className={`tab-pane fade ${activeTab === '#tab2' ? 'show active' : ''}`}
              id='tab2_content'
            >
              {/* begin::Content */}
              <div className='d-flex justify-content-center mb-10'>
                {/* begin::Item */}
                <div className='px-10'>
                  <span className='text-muted fw-bold fs-7'>Sale</span>
                  <span className='text-gray-800 fw-bolder fs-3 d-block'>$1250</span>
                </div>
                {/* end::Item */}

                {/* begin::Item */}
                <div className='px-10'>
                  <span className='text-muted fw-bold fs-7'>Commission</span>
                  <span className='text-gray-800 fw-bolder fs-3 d-block'>$5,000</span>
                </div>
                {/* end::Item */}

                {/* begin::Item */}
                <div className='px-10'>
                  <span className='text-muted fw-bold fs-7'>Refers</span>
                  <span className='text-gray-800 fw-bolder fs-3 d-block'>4,926</span>
                </div>
                {/* end::Item */}
              </div>
              {/* end::Content  */}

              {/* begin::Chart */}
              <div id='tab2_chart' style={{height: '250px'}} />
              {/* end::Chart */}
            </div>
            {/* end::Tab Pane 2 */}

            {/* begin::Tab Pane 3 */}
            <div
              className={`tab-pane fade ${activeTab === '#tab3' ? 'show active' : ''}`}
              id='tab3_content'
            >
              {/* begin::Content */}
              <div className='d-flex justify-content-center mb-10'>
                {/* begin::Item */}
                <div className='px-10'>
                  <span className='text-muted fw-bold fs-7'>Sale</span>
                  <span className='text-gray-800 fw-bolder fs-3 d-block'>$350</span>
                </div>
                {/* end::Item */}

                {/* begin::Item */}
                <div className='px-10'>
                  <span className='text-muted fw-bold fs-7'>Comission</span>
                  <span className='text-gray-800 fw-bolder fs-3 d-block'>$1,200</span>
                </div>
                {/* end::Item */}

                {/* begin::Item */}
                <div className='px-10'>
                  <span className='text-muted fw-bold fs-7'>Refers</span>
                  <span className='text-gray-800 fw-bolder fs-3 d-block'>5,500</span>
                </div>
                {/* end::Item */}
              </div>
              {/* end::Content  */}

              {/* begin::Chart */}
              <div id='tab3_chart' style={{height: '250px'}} />
              {/* end::Chart      */}
            </div>
            {/* end::Tab Pane 3 */}

            {/* begin::Tab Pane 4 */}
            <div
              className={`tab-pane fade ${activeTab === '#tab4' ? 'show active' : ''}`}
              id='tab4_content'
            >
              {/* begin::Content */}
              <div className='d-flex justify-content-center mb-10'>
                {/* begin::Item */}
                <div className='px-10'>
                  <span className='text-muted fw-bold fs-7'>Sale</span>
                  <span className='text-gray-800 fw-bolder fs-3 d-block'>$450</span>
                </div>
                {/* end::Item */}

                {/* begin::Item */}
                <div className='px-10'>
                  <span className='text-muted fw-bold fs-7'>Comission</span>
                  <span className='text-gray-800 fw-bolder fs-3 d-block'>$6,500</span>
                </div>
                {/* end::Item */}

                {/* begin::Item */}
                <div className='px-10'>
                  <span className='text-muted fw-bold fs-7'>Refers</span>
                  <span className='text-gray-800 fw-bolder fs-3 d-block'>500</span>
                </div>
                {/* end::Item */}
              </div>
              {/* end::Content  */}

              {/* begin::Chart */}
              <div id='tab4_chart' style={{height: '250px'}} />
              {/* end::Chart      */}
            </div>
            {/* end::Tab Pane 4 */}
          </div>
          {/* end::Tab Content */}
        </div>
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export {StatsWidget2}

function getChartOptions(tabNumber: number, height: string | number | undefined): ApexOptions {
  return {
    series: [
      {
        name: 'Net Profit',
        data: data1[tabNumber - 1],
      },
      {
        name: 'Revenue',
        data: data2[tabNumber - 1],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        /* @ts-ignore */
        endingShape: 'rounded',
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: getCSSVariableValue('--bs-gray-700'),
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: getCSSVariableValue('--bs-gray-700'),
          fontSize: '12px',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: number) {
          return `$${val} thousands`
        },
      },
    },
    colors: [getCSSVariableValue('--bs-primary'), getCSSVariableValue('--bs-light-primary')],
    grid: {
      borderColor: getCSSVariableValue('--bs-gray-200'),
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
}

const data1 = [
  [44, 55, 57, 56, 61, 58],
  [35, 60, 35, 50, 45, 30],
  [25, 40, 45, 50, 40, 60],
  [50, 35, 45, 55, 30, 40],
]

const data2 = [
  [76, 85, 101, 98, 87, 105],
  [65, 80, 50, 80, 75, 105],
  [76, 85, 101, 98, 87, 105],
  [76, 85, 101, 98, 87, 105],
]

function getCss(el: HTMLElement, styleProp: string) {
  const defaultView = (el.ownerDocument || document).defaultView
  if (!defaultView) {
    return ''
  }

  // sanitize property name to css notation
  // (hyphen separated words eg. font-Size)
  styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase()
  return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp)
}
