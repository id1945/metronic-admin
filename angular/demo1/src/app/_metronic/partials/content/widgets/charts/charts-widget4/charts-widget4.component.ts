import { Component, OnInit } from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';

@Component({
  selector: 'app-charts-widget4',
  templateUrl: './charts-widget4.component.html',
})
export class ChartsWidget4Component implements OnInit {
  chartOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = getChartOptions();
  }
}

function getChartOptions() {
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');

  const baseColor = getCSSVariableValue('--bs-success');
  const baseLightColor = getCSSVariableValue('--bs-light-success');
  const secondaryColor = getCSSVariableValue('--bs-warning');
  const secondaryLightColor = getCSSVariableValue('--bs-light-warning');

  return {
    series: [
      {
        name: 'Net Profit',
        data: [60, 50, 80, 40, 100, 60],
      },
      {
        name: 'Revenue',
        data: [70, 60, 110, 40, 50, 70],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
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
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        position: 'front',
        stroke: {
          color: labelColor,
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
    colors: [baseColor, secondaryColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      colors: [baseLightColor, secondaryLightColor],
      strokeColors: [baseLightColor, secondaryLightColor],
      strokeWidth: 3,
    },
  };
}
