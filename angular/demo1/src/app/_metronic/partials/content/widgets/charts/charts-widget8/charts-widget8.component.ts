import { Component, OnInit } from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';

@Component({
  selector: 'app-charts-widget8',
  templateUrl: './charts-widget8.component.html',
})
export class ChartsWidget8Component implements OnInit {
  chartOptions: any = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = getChartOptions(350);
  }
}

function getChartOptions(height: number) {
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const strokeColor = getCSSVariableValue('--bs-gray-300');

  const color1 = getCSSVariableValue('--bs-warning');
  const color1Light = getCSSVariableValue('--bs-light-warning');

  const color2 = getCSSVariableValue('--bs-success');
  const color2Light = getCSSVariableValue('--bs-light-success');

  const color3 = getCSSVariableValue('--bs-primary');
  const color3Light = getCSSVariableValue('--bs-light-primary');

  return {
    series: [
      {
        name: 'Net Profit',
        data: [30, 30, 50, 50, 35, 35],
      },
      {
        name: 'Revenue',
        data: [55, 20, 20, 20, 70, 70],
      },
      {
        name: 'Expenses',
        data: [60, 60, 40, 40, 30, 30],
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
      width: 2,
      colors: [color1, color2, color3],
    },
    xaxis: {
      offsetX: 0,
      offsetY: 0,
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
          color: strokeColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
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
        formatter: function (val: number) {
          return '$' + val + ' thousands';
        },
      },
    },
    colors: [color1Light, color2Light, color3Light],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    markers: {
      colors: [color1, color2, color3],
      strokeColors: [color1, color2, color3],
      strokeWidth: 3,
    },
  };
}
