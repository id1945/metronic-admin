"use strict";

// Class definition
var KTGoogleChartPieDemo = function () {
    // Private functions
    var examplePie = function () {
        // GOOGLE CHARTS INIT
        google.load('visualization', '1', {
            packages: ['corechart', 'bar', 'line']
        });

        google.setOnLoadCallback(function () {
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ]);

            var options = {
                title: 'My Daily Activities',
                colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']
            };

            var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));
            chart.draw(data, options);

            // Example of a doughnut chart
            // var options = {
            //     pieHole: 0.4,
            //     colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']
            // };

            // var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));
            // chart.draw(data, options);
        });
    }

    return {
        // Public Functions
        init: function () {
            examplePie();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGoogleChartPieDemo.init();
});
