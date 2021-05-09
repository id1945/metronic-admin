import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from '../../../../../core';

@Component({
  selector: 'app-tiles-widget1',
  templateUrl: './tiles-widget1.component.html',
})
export class TilesWidget1Component implements OnInit {
  @Input() cssClass = '';
  @Input() chartColor = 'primary';
  chartOptions: any = {};
  fontFamily = '';
  colorsGrayGray500 = '';
  colorsGrayGray200 = '';
  colorsGrayGray300 = '';
  colorsThemeBaseDanger = '';
  colorsThemeBaseColor = '';
  colorsThemeLightColor = '';

  constructor(private layout: LayoutService) {
  }

  setupLayoutProps() {
    this.fontFamily = this.layout.getProp('js.fontFamily');
    this.colorsGrayGray500 = this.layout.getProp('js.colors.gray.gray500');
    this.colorsGrayGray200 = this.layout.getProp('js.colors.gray.gray200');
    this.colorsGrayGray300 = this.layout.getProp('js.colors.gray.gray300');
    this.colorsThemeBaseDanger = this.layout.getProp(
      'js.colors.theme.base.danger'
    );
    this.colorsThemeBaseColor = this.layout.getProp(
      `js.colors.theme.base.${this.chartColor}`
    );
    this.colorsThemeLightColor = this.layout.getProp(
      `js.colors.theme.light.${this.chartColor}`
    );
  }

  ngOnInit(): void {
    this.setupLayoutProps();
    this.chartOptions = this.getChartOptions();
  }

  getChartOptions() {
    const height = '120px';
    return {
      series: [{
        name: 'Net Profit',
        data: [20, 22, 30, 28, 25, 26, 30, 28, 22, 24, 25, 35]
      }],
      chart: {
        type: 'area',
        height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        opacity: 1,
        gradient: {

          type: 'vertical',
          shadeIntensity: 0.55,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.2,
          stops: [25, 50, 100],
          colorStops: []
        }
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [this.colorsThemeBaseColor]
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: this.colorsGrayGray500,
            fontSize: '12px',
            fontFamily: this.fontFamily
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: this.colorsGrayGray300,
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: this.fontFamily
          }
        }
      },
      yaxis: {
        min: 0,
        max: 37,
        labels: {
          show: false,
          style: {
            colors: this.colorsGrayGray500,
            fontSize: '12px',
            fontFamily: this.fontFamily
          }
        }
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
        }
      },
      colors: [this.colorsThemeLightColor],
      markers: {
        colors: [this.colorsThemeLightColor],
        strokeColor: [this.colorsThemeBaseColor],
        strokeWidth: 3
      },
      padding: {
        top: 0,
        bottom: 0
      }
    };
  }
}
