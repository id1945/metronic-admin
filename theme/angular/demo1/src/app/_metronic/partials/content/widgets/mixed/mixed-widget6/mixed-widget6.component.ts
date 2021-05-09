import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../../../../core';

@Component({
  selector: 'app-mixed-widget6',
  templateUrl: './mixed-widget6.component.html',
})
export class MixedWidget6Component implements OnInit {
  @Input() cssClass: '';
  @Input() chartColor;
  chartOptions: any = {};
  fontFamily = '';
  colorsGrayGray500 = '';
  colorsGrayGray200 = '';
  colorsGrayGray300 = '';
  colorsThemeBaseDanger = '';

  constructor(private layout: LayoutService) {
    this.fontFamily = this.layout.getProp('js.fontFamily');
    this.colorsGrayGray500 = this.layout.getProp('js.colors.gray.gray500');
    this.colorsGrayGray200 = this.layout.getProp('js.colors.gray.gray200');
    this.colorsGrayGray300 = this.layout.getProp('js.colors.gray.gray300');
    this.colorsThemeBaseDanger = this.layout.getProp(
      'js.colors.theme.base.danger'
    );
  }

  ngOnInit(): void {
    this.chartOptions = this.getChartOptions();
  }

  getChartOptions() {
    return {
      series: [{
        name: 'Net Profit',
        data: [35, 65, 75, 55, 45, 60, 55]
      }, {
        name: 'Revenue',
        data: [40, 70, 80, 60, 50, 65, 60]
      }],
      chart: {
        type: 'bar',
        height: '200px',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded'
        },
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: this.colorsGrayGray500,
            fontSize: '12px',
            fontFamily: this.fontFamily
          }
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: {
          style: {
            colors: this.colorsGrayGray500,
            fontSize: '12px',
            fontFamily: this.fontFamily
          }
        }
      },
      fill: {
        type: ['solid', 'solid'],
        opacity: [0.25, 1]
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: this.fontFamily
        },
        y: {
          formatter: (val) => {
            return `$ ${val} thousands`;
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#ffffff', '#ffffff'],
      grid: {
        borderColor: this.colorsGrayGray200,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          left: 20,
          right: 20
        }
      }
    };
  }
}
