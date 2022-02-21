"use strict";

// Class definition
var KTFlotDemoBasic = function () {
    // Private functions
    var exampleBasic = function () {
        var data = [];
        var totalPoints = 250;

        // random data generator for plot charts

        function getRandomData() {
            if (data.length > 0) data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0) y = 0;
                if (y > 100) y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]]);
            }

            return res;
        }

        var d1 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25)
            d1.push([i, Math.sin(i)]);

        var d2 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25)
            d2.push([i, Math.cos(i)]);

        var d3 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.1)
            d3.push([i, Math.tan(i)]);

        $.plot($("#kt_docs_flot_basic"), [{
            label: "sin(x)",
            data: d1,
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }, {
            label: "cos(x)",
            data: d2,
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }, {
            label: "tan(x)",
            data: d3,
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }], {
            colors: [KTUtil.getCssVariableValue('--bs-active-success'), KTUtil.getCssVariableValue('--bs-active-primary'), KTUtil.getCssVariableValue('--bs-active-danger')],
            series: {
                lines: {
                    show: true,
                },
                points: {
                    show: true,
                    fill: true,
                    radius: 3,
                    lineWidth: 1
                }
            },
            xaxis: {
                tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
                ticks: [0, [Math.PI / 2, "\u03c0/2"],
                    [Math.PI, "\u03c0"],
                    [Math.PI * 3 / 2, "3\u03c0/2"],
                    [Math.PI * 2, "2\u03c0"]
                ]
            },
            yaxis: {
                tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
                ticks: 10,
                min: -2,
                max: 2
            },
            grid: {
                borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),
                borderWidth: 1
            }
        });
    }

    return {
        // Public Functions
        init: function () {
            exampleBasic();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFlotDemoBasic.init();
});
