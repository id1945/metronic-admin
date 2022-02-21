/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import {KTSVG} from '../../../helpers'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSS, getCSSVariableValue} from '../../../assets/ts/_utils'
import clsx from 'clsx'

type Props = {
  className: string
  svgIcon: string
  color: string
  change: string
  description: string
}

const StatisticsWidget4: React.FC<Props> = ({className, svgIcon, color, change, description}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const height = parseInt(getCSS(chartRef.current, 'height'))
    const labelColor = getCSSVariableValue('--bs-gray-800')
    const baseColor = getCSSVariableValue('--bs-' + color)
    const lightColor = getCSSVariableValue('--bs-light-' + color)

    const chart = new ApexCharts(
      chartRef.current,
      getChartOptions(height, labelColor, baseColor, lightColor)
    )
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, color])

  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body p-0'>
        <div className='d-flex flex-stack card-p flex-grow-1'>
          <span className={clsx('symbol symbol-50px', `symbol-light-${color}`, 'me-2')}>
            <span className='symbol-label'>
              <KTSVG path={svgIcon} className={`svg-icon-2x svg-icon-${color}`} />
            </span>
          </span>

          <div className='d-flex flex-column text-end'>
            <span className='text-dark fw-bolder fs-2'>{change}</span>

            <span className='text-muted fw-bold mt-1'>{description}</span>
          </div>
        </div>

        <div
          ref={chartRef}
          className='statistics-widget-4-chart card-rounded-bottom'
          style={{height: '150px'}}
        ></div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {StatisticsWidget4}

function getChartOptions(
  height: number,
  labelColor: string,
  baseColor: string,
  lightColor: string
): ApexOptions {
  return {
    series: [
      {
        name: 'Net Profit',
        data: [40, 40, 30, 30, 35, 35, 50],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: height,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          color: '#E4E6EF',
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          colors: labelColor,
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
        formatter: function (val) {
          return '$' + val + ' thousands'
        },
      },
    },
    colors: [lightColor],
    markers: {
      colors: [lightColor],
      strokeColors: [baseColor],
      strokeWidth: 3,
    },
  }
}
