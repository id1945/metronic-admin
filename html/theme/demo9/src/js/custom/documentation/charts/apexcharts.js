"use strict";

// Class definition
var KTGeneralApexCharts = function () {
    // Shared variables

    // Private functions
    var example1 = function () {
        var element = document.getElementById("kt_apexcharts_1");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');
        var dangerColor = KTUtil.getCssVariableValue('--bs-danger');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 43, 56, 65, 41, 55, 66]
            }, {
                name: 'Cost',
                data: [32, 34, 52, 46, 27, 60, 41, 49, 13, 11, 44, 33]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 87, 99, 75, 82, 91, 89]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['40%'],
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
                width: 2,
                colors: ['transparent']
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
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1
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
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, dangerColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    var example2 = function () {
        var element = document.getElementById("kt_apexcharts_2");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-warning');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
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
                width: 2,
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
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1
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
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    var example3 = function () {
        var element = document.getElementById("kt_apexcharts_3");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-info');
        var lightColor = KTUtil.getCssVariableValue('--bs-light-info');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [30, 40, 40, 90, 90, 70, 70]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
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
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [lightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    var example4 = function () {
        var element = document.getElementById("kt_apexcharts_4");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');

        var baseColor = KTUtil.getCssVariableValue('--bs-success');
        var baseLightColor = KTUtil.getCssVariableValue('--bs-light-success');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-warning');
        var secondaryLightColor = KTUtil.getCssVariableValue('--bs-light-warning');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [60, 50, 80, 40, 100, 60]
            }, {
                name: 'Revenue',
                data: [70, 60, 110, 40, 50, 70]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
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
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth'
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
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: labelColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
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
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                colors: [baseLightColor, secondaryLightColor],
                strokeColor: [baseLightColor, secondaryLightColor],
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    var example5 = function () {
        var element = document.getElementById("kt_apexcharts_5");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');

        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var baseLightColor = KTUtil.getCssVariableValue('--bs-light-primary');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-info');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                type: 'bar',
                stacked: true,
                data: [40, 50, 65, 70, 50, 30]
            }, {
                name: 'Revenue',
                type: 'bar',
                stacked: true,
                data: [20, 20, 25, 30, 30, 20]
            }, {
                name: 'Expenses',
                type: 'area',
                data: [50, 80, 60, 90, 50, 70]
            }],
            chart: {
                fontFamily: 'inherit',
                stacked: true,
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    stacked: true,
                    horizontal: false,
                    endingShape: 'rounded',
                    columnWidth: ['12%']
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
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
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                max: 120,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1
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
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, secondaryColor, baseLightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    var example6 = function () {
        var element = document.getElementById("kt_apexcharts_6");

        var height = parseInt(KTUtil.css(element, 'height'));

        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var baseLightColor = KTUtil.getCssVariableValue('--bs-success');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-info');

        if (!element) {
            return;
        }

        var options = {
            series: [
                {
                    name: 'Bob',
                    data: [
                        {
                            x: 'Design',
                            y: [
                                new Date('2019-03-05').getTime(),
                                new Date('2019-03-08').getTime()
                            ]
                        },
                        {
                            x: 'Code',
                            y: [
                                new Date('2019-03-02').getTime(),
                                new Date('2019-03-05').getTime()
                            ]
                        },
                        {
                            x: 'Code',
                            y: [
                                new Date('2019-03-05').getTime(),
                                new Date('2019-03-07').getTime()
                            ]
                        },
                        {
                            x: 'Test',
                            y: [
                                new Date('2019-03-03').getTime(),
                                new Date('2019-03-09').getTime()
                            ]
                        },
                        {
                            x: 'Test',
                            y: [
                                new Date('2019-03-08').getTime(),
                                new Date('2019-03-11').getTime()
                            ]
                        },
                        {
                            x: 'Validation',
                            y: [
                                new Date('2019-03-11').getTime(),
                                new Date('2019-03-16').getTime()
                            ]
                        },
                        {
                            x: 'Design',
                            y: [
                                new Date('2019-03-01').getTime(),
                                new Date('2019-03-03').getTime()
                            ]
                        }
                    ]
                },
                {
                    name: 'Joe',
                    data: [
                        {
                            x: 'Design',
                            y: [
                                new Date('2019-03-02').getTime(),
                                new Date('2019-03-05').getTime()
                            ]
                        },
                        {
                            x: 'Test',
                            y: [
                                new Date('2019-03-06').getTime(),
                                new Date('2019-03-16').getTime()
                            ]
                        },
                        {
                            x: 'Code',
                            y: [
                                new Date('2019-03-03').getTime(),
                                new Date('2019-03-07').getTime()
                            ]
                        },
                        {
                            x: 'Deployment',
                            y: [
                                new Date('2019-03-20').getTime(),
                                new Date('2019-03-22').getTime()
                            ]
                        },
                        {
                            x: 'Design',
                            y: [
                                new Date('2019-03-10').getTime(),
                                new Date('2019-03-16').getTime()
                            ]
                        }
                    ]
                },
                {
                    name: 'Dan',
                    data: [
                        {
                            x: 'Code',
                            y: [
                                new Date('2019-03-10').getTime(),
                                new Date('2019-03-17').getTime()
                            ]
                        },
                        {
                            x: 'Validation',
                            y: [
                                new Date('2019-03-05').getTime(),
                                new Date('2019-03-09').getTime()
                            ]
                        },
                    ]
                }
            ],
            chart: {
                type: 'rangeBar',
                fontFamily: 'inherit',
                height: height,
                toolbar: {
                    show: false
                }
            },
            colors: [baseColor, secondaryColor, baseLightColor],
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '80%'
                }
            },
            xaxis: {
                type: 'datetime'
            },
            stroke: {
                width: 1
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left'
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    return {
        // Public Functions
        init: function () {
            example1();
            example2();
            example3();
            example4();
            example5();
            example6();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralApexCharts.init();
});
