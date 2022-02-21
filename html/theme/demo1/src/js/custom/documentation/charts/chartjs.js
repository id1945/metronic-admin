"use strict";

// Class definition
var KTGeneralChartJS = function () {
    // Randomizer function
    function getRandom(min = 1, max = 100) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function generateRandomData(min = 1, max = 100, count = 10) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(getRandom(min, max));
        }
        return arr;
    }

    // Private functions
    var example1 = function () {
        // Define chart element
        var ctx = document.getElementById('kt_chartjs_1');

        // Define colors
        var primaryColor = KTUtil.getCssVariableValue('--bs-primary');
        var dangerColor = KTUtil.getCssVariableValue('--bs-danger');
        var successColor = KTUtil.getCssVariableValue('--bs-success');

        // Define fonts
        var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif');

        // Chart labels
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Chart data
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: generateRandomData(1, 100, 12),
                    backgroundColor: primaryColor,
                    stack: 'Stack 0',
                },
                {
                    label: 'Dataset 2',
                    data: generateRandomData(1, 100, 12),
                    backgroundColor: dangerColor,
                    stack: 'Stack 1',
                },
                {
                    label: 'Dataset 3',
                    data: generateRandomData(1, 100, 12),
                    backgroundColor: successColor,
                    stack: 'Stack 2',
                },
            ]
        };

        // Chart config
        const config = {
            type: 'bar',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: false,
                    }
                },
                responsive: true,
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true
                    }
                }
            }
        };

        // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/
        var myChart = new Chart(ctx, config);
    }

    var example2 = function () {
        // Define chart element
        var ctx = document.getElementById('kt_chartjs_2');

        // Define colors
        var primaryColor = KTUtil.getCssVariableValue('--bs-primary');
        var dangerColor = KTUtil.getCssVariableValue('--bs-danger');
        var successColor = KTUtil.getCssVariableValue('--bs-success');

        // Define fonts
        var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif');

        // Chart labels
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

        // Chart data
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: generateRandomData(1, 50, 7),
                    borderColor: primaryColor,
                    backgroundColor: 'transparent'
                },
                {
                    label: 'Dataset 2',
                    data: generateRandomData(1, 50, 7),
                    borderColor: dangerColor,
                    backgroundColor: 'transparent'
                },
            ]
        };

        // Chart config
        const config = {
            type: 'line',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: false,
                    }
                },
                responsive: true,
            }
        };

        // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/
        var myChart = new Chart(ctx, config);
    }

    var example3 = function () {
        // Define chart element
        var ctx = document.getElementById('kt_chartjs_3');

        // Define colors
        var primaryColor = KTUtil.getCssVariableValue('--bs-primary');
        var dangerColor = KTUtil.getCssVariableValue('--bs-danger');
        var successColor = KTUtil.getCssVariableValue('--bs-success');
        var warningColor = KTUtil.getCssVariableValue('--bs-warning');
        var infoColor = KTUtil.getCssVariableValue('--bs-info');

        // Chart labels
        const labels = ['January', 'February', 'March', 'April', 'May'];

        // Chart data
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: generateRandomData(1, 100, 5),
                    backgroundColor: [primaryColor, dangerColor, successColor, warningColor, infoColor]
                },
            ]
        };

        // Chart config
        const config = {
            type: 'pie',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: false,
                    }
                },
                responsive: true,
            }
        };

        // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/
        var myChart = new Chart(ctx, config);
    }

    var example4 = function () {
        // Define chart element
        var ctx = document.getElementById('kt_chartjs_4');

        // Define colors
        var primaryColor = KTUtil.getCssVariableValue('--bs-primary');
        var dangerColor = KTUtil.getCssVariableValue('--bs-danger');
        var dangerLightColor = KTUtil.getCssVariableValue('--bs-light-danger');

        // Define fonts
        var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif');

        // Chart labels
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Chart data
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: generateRandomData(50, 100, 12),
                    borderColor: primaryColor,
                    backgroundColor: 'transparent',
                    stack: 'combined'
                },
                {
                    label: 'Dataset 2',
                    data: generateRandomData(1, 60, 12),
                    backgroundColor: dangerColor,
                    borderColor: dangerColor,
                    stack: 'combined',
                    type: 'bar'
                },
                
            ]
        };

        // Chart config
        const config = {
            type: 'line',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: false,
                    }
                },
                responsive: true,
                interaction: {
                    intersect: false,
                },
                scales: {
                    y: {
                        stacked: true
                    }
                }
            },
            defaults: {
                font: {
                    family: 'inherit',
                }
            }
        };

        // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/
        var myChart = new Chart(ctx, config);
    }

    var example5 = function () {
        // Define chart element
        var ctx = document.getElementById('kt_chartjs_5');

        // Define colors
        var infoColor = KTUtil.getCssVariableValue('--bs-info');
        var infoLightColor = KTUtil.getCssVariableValue('--bs-light-info');
        var warningColor = KTUtil.getCssVariableValue('--bs-warning');
        var warningLightColor = KTUtil.getCssVariableValue('--bs-light-warning');
        var primaryColor = KTUtil.getCssVariableValue('--bs-primary');
        var primaryLightColor = KTUtil.getCssVariableValue('--bs-light-primary');

        // Define fonts
        var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif');

        // Chart labels
        const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

        // Chart data
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: generateRandomData(20, 80, 6),
                    borderColor: infoColor,
                    backgroundColor: infoLightColor,
                },
                {
                    label: 'Dataset 2',
                    data: generateRandomData(10, 60, 6),
                    backgroundColor: warningLightColor,
                    borderColor: warningColor,
                },
                {
                    label: 'Dataset 3',
                    data: generateRandomData(0, 80, 6),
                    backgroundColor: primaryLightColor,
                    borderColor: primaryColor,
                },                
            ]
        };

        // Chart config
        const config = {
            type: 'radar',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: false,
                    }
                },
                responsive: true,
            }
        };

        // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/
        var myChart = new Chart(ctx, config);
    }

    return {
        // Public Functions
        init: function () {
            // Global font settings: https://www.chartjs.org/docs/latest/general/fonts.html
            Chart.defaults.font.size = 13;
            Chart.defaults.font.family = KTUtil.getCssVariableValue('--bs-font-sans-serif');

            example1();
            example2();
            example3();
            example4();
            example5();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralChartJS.init();
});
