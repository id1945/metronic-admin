/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState, useEffect} from 'react'
import ApexCharts from 'apexcharts'
import {toAbsoluteUrl, KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

const chartsData: Array<{
  tabId: number
  selector: string
  values: Array<number>
}> = [
  {
    tabId: 0,
    selector: '#kt_sidebar_tab_1_chart',
    values: [40, 30, 25, 40, 50, 30],
  },
  {
    tabId: 1,
    selector: '#kt_sidebar_tab_2_chart',
    values: [30, 30, 25, 45, 30, 40],
  },
  {
    tabId: 2,
    selector: '#kt_sidebar_tab_3_chart',
    values: [25, 30, 40, 30, 35, 30],
  },
  {
    tabId: 3,
    selector: '#kt_sidebar_tab_4_chart',
    values: [25, 30, 35, 40, 50, 30],
  },
  {
    tabId: 4,
    selector: '#kt_sidebar_tab_5_chart',
    values: [40, 20, 50, 50, 55, 45],
  },
]

export function SidebarGeneral() {
  const [activeTab, setActiveTab] = useState(2)
  const [activeChart, setActiveChart] = useState<ApexCharts | undefined>()

  const setTab = (tabId: number) => {
    setActiveTab(tabId)
  }

  const activateChart = (tabId: number) => {
    const chartData = chartsData[tabId]
    if (!chartData) {
      return
    }

    setTimeout(() => {
      const element = document.querySelector(chartData.selector)
      if (!element) {
        return
      }

      if (activeChart) {
        activeChart.destroy()
      }

      const height = parseInt(getCss(element as HTMLElement, 'height'))

      const options = {
        series: [
          {
            name: 'Profit',
            data: chartData.values,
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
            columnWidth: ['30%'],
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
          crosshairs: {
            show: false,
          },
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            style: {
              colors: '#823FD9',
              fontSize: '12px',
            },
          },
        },
        yaxis: {
          crosshairs: {
            show: false,
          },
          labels: {
            style: {
              colors: '#823FD9',
              fontSize: '12px',
            },
          },
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
        fill: {
          opacity: 1,
        },
        tooltip: {
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: (val: string) => {
              return '$' + val + 'k'
            },
          },
        },
        colors: ['#661DC5'],
        grid: {
          borderColor: '#661DC5',
          strokeDashArray: 4,
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
      }

      const chart = new ApexCharts(element, options)
      chart.render()
      setActiveChart(chart)
    }, 0)
  }

  useEffect(() => {
    setTab(2)
    activateChart(2)

    return function cleanup() {
      if (activeChart) {
        activeChart.destroy()
      }
    }
  }, [])

  return (
    <>
      {/* begin::Sidebar Nav */}
      <ul className='sidebar-nav nav nav-tabs pt-15 pb-5 px-5' id='kt_sidebar_tabs' role='tablist'>
        <li className='nav-item'>
          <a
            onClick={() => {
              setTab(0)
              activateChart(0)
            }}
            className={clsx('nav-link', {active: activeTab === 0})}
            id='kt_sidebar_tab_1'
          >
            <img
              alt=''
              src={toAbsoluteUrl('/media/svg/logo/purple/aven.svg')}
              className='default'
            />
            <img
              alt=''
              src={toAbsoluteUrl('/media/svg/logo/colored/aven.svg')}
              className='active'
            />
          </a>
        </li>

        <li className='nav-item'>
          <a
            onClick={() => {
              setTab(1)
              activateChart(1)
            }}
            className={clsx('nav-link', {active: activeTab === 1})}
            id='kt_sidebar_tab_2'
          >
            <img
              alt=''
              src={toAbsoluteUrl('/media/svg/logo/purple/kanba.svg')}
              className='default'
            />
            <img
              alt=''
              src={toAbsoluteUrl('/media/svg/logo/colored/kanba.svg')}
              className='active'
            />
          </a>
        </li>

        <li className='nav-item'>
          <a
            onClick={() => {
              setTab(2)
              activateChart(2)
            }}
            className={clsx('nav-link', {active: activeTab === 2})}
            id='kt_sidebar_tab_3'
          >
            <img
              alt=''
              src={toAbsoluteUrl('/media/svg/logo/purple/fox-hub-2.svg')}
              className='default'
            />
            <img
              alt=''
              src={toAbsoluteUrl('/media/svg/logo/colored/fox-hub-2.svg')}
              className='active'
            />
          </a>
        </li>

        <li className='nav-item'>
          <a
            onClick={() => {
              setTab(3)
              activateChart(3)
            }}
            className={clsx('nav-link', {active: activeTab === 3})}
            id='kt_sidebar_tab_4'
          >
            <img
              alt=''
              src={toAbsoluteUrl('/media/svg/logo/purple/tower.svg')}
              className='default'
            />
            <img
              alt=''
              src={toAbsoluteUrl('/media/svg/logo/colored/tower.svg')}
              className='active'
            />
          </a>
        </li>

        <li className='nav-item'>
          <a
            onClick={() => {
              setTab(4)
              activateChart(4)
            }}
            className={clsx('nav-link', {active: activeTab === 4})}
            id='kt_sidebar_tab_5'
          >
            <img
              alt=''
              src={toAbsoluteUrl('/media/svg/logo/purple/treva.svg')}
              className='default'
            />
            <img
              alt=''
              src={toAbsoluteUrl('/media/svg/logo/colored/treva.svg')}
              className='active'
            />
          </a>
        </li>
      </ul>
      {/* end::Sidebar Nav */}

      {/* begin::Sidebar Content */}
      {/* begin::Sidebar Content */}
      <div id='kt_sidebar_content' className='py-10 px-5 px-lg-5'>
        <div
          className='hover-scroll-y me-lg-n2 pe-lg-2'
          data-kt-scroll='true'
          data-kt-scroll-height='auto'
          data-kt-scroll-offset='10px'
          data-kt-scroll-dependencies='#kt_sidebar_tabs, #kt_sidebar_footer'
          data-kt-scroll-wrappers='#kt_sidebar_content'
        >
          <div className='tab-content'>
            <div
              className={clsx('tab-pane', {active: activeTab === 0})}
              id='kt_sidebar_tab_pane_1'
              role='tabpanel'
            >
              {/* begin::Card */}
              <div className='card card-custom bg-transparent'>
                {/* begin::Header */}
                <div className='card-header align-items-center border-0'>
                  <h3 className='card-title fw-bolder text-white fs-3'>Aven Sales</h3>
                  <div className='card-toolbar'>
                    <button
                      type='button'
                      className='btn btn-md btn-icon btn-icon-white btn-info'
                      data-kt-menu-trigger='click'
                      data-kt-menu-overflow='true'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen024.svg'
                        className='svg-icon-1'
                      />
                    </button>
                    <Dropdown1 />
                  </div>
                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className='card-body px-3 py-0'>
                  {/* begin::Chart */}
                  <div
                    id='kt_sidebar_tab_1_chart'
                    className='apexcharts-bar-hover-danger'
                    style={{height: '250px'}}
                  ></div>
                  {/* end::Chart */}
                </div>
                {/* end: Card Body */}
              </div>
              {/* end::Card */}

              {/* begin::Card */}
              <div className='card card-custom bg-transparent'>
                {/* begin::Header */}
                <div className='card-header align-items-center border-0'>
                  <h3 className='card-title fw-bolder text-white fs-3'>Tasks Overview</h3>
                  <div className='card-toolbar'>
                    <button
                      type='button'
                      className='btn btn-md btn-icon btn-icon-white btn-info'
                      data-kt-menu-trigger='click'
                      data-kt-menu-overflow='true'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen024.svg'
                        className='svg-icon-1'
                      />
                    </button>
                    <Dropdown1 />
                  </div>
                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className='card-body pt-0'>
                  {/* begin::Item */}
                  <div className='d-flex flex-wrap align-items-center mb-7'>
                    {/* begin::Symbol */}
                    <div className='symbol symbol-40px symbol-2by3 me-4'>
                      <img
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-1.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        Sunspots
                      </a>
                      <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                        Mark, Rowling, Esther
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-2.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        Ocean Drive
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-3.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        Soar, Eco
                      </a>
                      <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                        HTML, CSS. jQuery
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-5.jpg')}
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
                        ASP.NET Developer
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-6.jpg')}
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

            <div
              className={clsx('tab-pane', {active: activeTab === 1})}
              id='kt_sidebar_tab_pane_2'
              role='tabpanel'
            >
              {/* begin::Card */}
              <div className='card card-custom bg-transparent'>
                {/* begin::Header */}
                <div className='card-header align-items-center border-0'>
                  <h3 className='card-title fw-bolder text-white fs-3'>Kanba Sales</h3>
                  <div className='card-toolbar'>
                    <button
                      type='button'
                      className='btn btn-md btn-icon btn-icon-white btn-info'
                      data-kt-menu-trigger='click'
                      data-kt-menu-overflow='true'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen024.svg'
                        className='svg-icon-1'
                      />
                    </button>
                    <Dropdown1 />
                  </div>
                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className='card-body px-3 py-0'>
                  {/* begin::Chart */}
                  <div
                    id='kt_sidebar_tab_2_chart'
                    className='apexcharts-bar-hover-danger'
                    style={{height: '250px'}}
                  ></div>
                  {/* end::Chart */}
                </div>
                {/* end: Card Body */}
              </div>
              {/* end::Card */}

              {/* begin::Card */}
              <div className='card card-custom bg-transparent'>
                {/* begin::Header */}
                <div className='card-header align-items-center border-0'>
                  <h3 className='card-title fw-bolder text-white fs-3'>Kanba Products</h3>
                  <div className='card-toolbar'>
                    <button
                      type='button'
                      className='btn btn-md btn-icon btn-icon-white btn-info'
                      data-kt-menu-trigger='click'
                      data-kt-menu-overflow='true'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen024.svg'
                        className='svg-icon-1'
                      />
                    </button>
                    <Dropdown1 />
                  </div>
                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className='card-body pt-0'>
                  {/* begin::Item */}
                  <div className='d-flex flex-wrap align-items-center mb-7'>
                    {/* begin::Symbol */}
                    <div className='symbol symbol-40px symbol-2by3 me-4'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-7.jpg')}
                        alt=''
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        BP Industries
                      </a>
                      <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                        Successful Fellas
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-8.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        Automatica
                      </a>
                      <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                        Successful Fellas
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-9.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        Python Inc.
                      </a>
                      <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                        Most Successful
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-19.jpg')}
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
                        ASP.NET Developer
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-6.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        Active Customers
                      </a>
                      <span className='text-white opacity-25 fs-7 fw-bold my-1'>
                        Best Customers
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

            <div
              className={clsx('tab-pane', {active: activeTab === 2})}
              id='kt_sidebar_tab_pane_3'
              role='tabpanel'
            >
              {/* begin::Card */}
              <div className='card card-custom bg-transparent'>
                {/* begin::Header */}
                <div className='card-header align-items-center border-0'>
                  <h3 className='card-title fw-bolder text-white fs-3'>Fox Sales</h3>
                  <div className='card-toolbar'>
                    <button
                      type='button'
                      className='btn btn-md btn-icon btn-icon-white btn-info'
                      data-kt-menu-trigger='click'
                      data-kt-menu-overflow='true'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen024.svg'
                        className='svg-icon-1'
                      />
                    </button>
                    <Dropdown1 />
                  </div>
                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className='card-body px-3 py-0'>
                  {/* begin::Chart */}
                  <div
                    id='kt_sidebar_tab_3_chart'
                    className='apexcharts-bar-hover-danger'
                    style={{height: '250px'}}
                  ></div>
                  {/* end::Chart */}
                </div>
                {/* end: Card Body */}
              </div>
              {/* end::Card */}

              {/* begin::Card */}
              <div className='card card-custom bg-transparent'>
                {/* begin::Header */}
                <div className='card-header align-items-center border-0'>
                  <h3 className='card-title fw-bolder text-white fs-3'>Fox Bestsellers</h3>
                  <div className='card-toolbar'>
                    <button
                      type='button'
                      className='btn btn-md btn-icon btn-icon-white btn-info'
                      data-kt-menu-trigger='click'
                      data-kt-menu-overflow='true'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen024.svg'
                        className='svg-icon-1'
                      />
                    </button>
                    <Dropdown1 />
                  </div>
                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className='card-body pt-0'>
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-10.jpg')}
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-1.jpg')}
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-9.jpg')}
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-4.jpg')}
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

            <div
              className={clsx('tab-pane', {active: activeTab === 3})}
              id='kt_sidebar_tab_pane_4'
              role='tabpanel'
            >
              {/* begin::Card */}
              <div className='card card-custom bg-transparent'>
                {/* begin::Header */}
                <div className='card-header align-items-center border-0'>
                  <h3 className='card-title fw-bolder text-white fs-3'>Tower Sales</h3>
                  <div className='card-toolbar'>
                    <button
                      type='button'
                      className='btn btn-md btn-icon btn-icon-white btn-info'
                      data-kt-menu-trigger='click'
                      data-kt-menu-overflow='true'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen024.svg'
                        className='svg-icon-1'
                      />
                    </button>
                    <Dropdown1 />
                  </div>
                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className='card-body px-3 py-0'>
                  {/* begin::Chart */}
                  <div
                    id='kt_sidebar_tab_4_chart'
                    className='apexcharts-bar-hover-danger'
                    style={{height: '250px'}}
                  ></div>
                  {/* end::Chart */}
                </div>
                {/* end: Card Body */}
              </div>
              {/* end::Card */}

              {/* begin::Card */}
              <div className='card card-custom bg-transparent'>
                {/* begin::Header */}
                <div className='card-header align-items-center border-0'>
                  <h3 className='card-title fw-bolder text-white fs-3'>Tower Latest Products</h3>
                  <div className='card-toolbar'>
                    <button
                      type='button'
                      className='btn btn-md btn-icon btn-icon-white btn-info'
                      data-kt-menu-trigger='click'
                      data-kt-menu-overflow='true'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen024.svg'
                        className='svg-icon-1'
                      />
                    </button>
                    <Dropdown1 />
                  </div>
                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className='card-body pt-0'>
                  {/* begin: Item */}
                  <div className='d-flex flex-wrap align-items-center mb-7'>
                    {/* begin::Symbol */}
                    <div className='symbol symbol-40px symbol-2by3 me-4'>
                      <img
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-8.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        Automatica
                      </a>
                      <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                        Successful Fellas
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-11.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        BP Industries
                      </a>
                      <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                        Successful Fellas
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-19.jpg')}
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
                        ASP.NET Developer
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
                    <div className='d-flex flex-column flex-grow-1 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        Python Inc.
                      </a>
                      <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                        Most Successful
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-6.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        Active Customers
                      </a>
                      <span className='text-white opacity-25 fs-7 fw-bold my-1'>
                        Best Customers
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

            <div
              className={clsx('tab-pane', {active: activeTab === 4})}
              id='kt_sidebar_tab_pane_5'
              role='tabpanel'
            >
              {/* begin::Card */}
              <div className='card card-custom bg-transparent'>
                {/* begin::Header */}
                <div className='card-header align-items-center border-0'>
                  <h3 className='card-title fw-bolder text-white fs-3'>Treva Sales</h3>
                  <div className='card-toolbar'>
                    <button
                      type='button'
                      className='btn btn-md btn-icon btn-icon-white btn-info'
                      data-kt-menu-trigger='click'
                      data-kt-menu-overflow='true'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen024.svg'
                        className='svg-icon-1'
                      />
                    </button>
                    <Dropdown1 />
                  </div>
                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className='card-body px-3 py-0'>
                  {/* begin::Chart */}
                  <div
                    id='kt_sidebar_tab_5_chart'
                    className='apexcharts-bar-hover-danger'
                    style={{height: '250px'}}
                  ></div>
                  {/* end::Chart */}
                </div>
                {/* end: Card Body */}
              </div>
              {/* end::Card */}

              {/* begin::Card */}
              <div className='card card-custom bg-transparent'>
                {/* begin::Header */}
                <div className='card-header align-items-center border-0'>
                  <h3 className='card-title fw-bolder text-white fs-3'>Treva's Products</h3>
                  <div className='card-toolbar'>
                    <button
                      type='button'
                      className='btn btn-md btn-icon btn-icon-white btn-info'
                      data-kt-menu-trigger='click'
                      data-kt-menu-overflow='true'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen024.svg'
                        className='svg-icon-1'
                      />
                    </button>
                    <Dropdown1 />
                  </div>
                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className='card-body pt-0'>
                  {/* begin::Item */}
                  <div className='d-flex flex-wrap align-items-center mb-7'>
                    {/* begin::Symbol */}
                    <div className='symbol symbol-40px symbol-2by3 me-4'>
                      <img
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-12.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        Top Authors
                      </a>
                      <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                        Successful Fellas
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-13.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        Popular Authors
                      </a>
                      <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                        Most Successful
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-14.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        New Users
                      </a>
                      <span className='text-white opacity-25 fw-bold fs-7 my-1'>
                        HTML, CSS. jQuery
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
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-15.jpg')}
                        className='mw-100'
                      />
                    </div>
                    {/* end::Symbol */}

                    {/* begin::Title */}
                    <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
                      <a href='#' className='text-white fw-bolder text-hover-primary fs-6'>
                        Active Customers
                      </a>
                      <span className='text-white opacity-25 fs-7 fw-bold my-1'>Awesome Users</span>
                    </div>
                    {/* end::Title */}
                  </div>
                  {/* end::Item */}

                  {/* begin::Item */}
                  <div className='d-flex flex-wrap align-items-center'>
                    {/* begin::Symbol */}
                    <div className='symbol symbol-40px symbol-2by3 me-4'>
                      <img
                        alt=''
                        src={toAbsoluteUrl('/media/stock/600x400/img-16.jpg')}
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
                        Best Customers
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
        </div>
      </div>
      {/* end::Sidebar Content */}

      {/* begin::Sidebar footer */}
      <div id='kt_sidebar_footer' className='py-2 px-5 pb-md-6 text-center'>
        <a
          href='#'
          className='btn btn-color-white bg-white  bg-opacity-10 bg-hover-opacity-20 fw-bolder w-100'
        >
          View Extended Layout
        </a>
      </div>
      {/* end::Sidebar footer */}
    </>
  )
}

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
