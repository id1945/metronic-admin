"use strict";

// Class definition
var KTFlotDemoDynamic = function () {
    // Private functions
    var exampleDynamic = function () {
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

		//server load
		var options = {
			colors: [KTUtil.getCssVariableValue('--bs-active-danger'), KTUtil.getCssVariableValue('--bs-active-primary')],
			series: {
				shadowSize: 1
			},
			lines: {
				show: true,
				lineWidth: 0.5,
				fill: true,
				fillColor: {
					colors: [{
						opacity: 0.1
					}, {
						opacity: 1
					}]
				}
			},
			yaxis: {
				min: 0,
				max: 100,
				tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
				tickFormatter: function(v) {
					return v + "%";
				}
			},
			xaxis: {
				show: false,
			},
			colors: [KTUtil.getCssVariableValue('--bs-active-primary')],
			grid: {
				tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
				borderWidth: 0,
			}
		};

		var updateInterval = 30;
		var plot = $.plot($("#kt_docs_flot_dynamic"), [getRandomData()], options);

		function update() {
			plot.setData([getRandomData()]);
			plot.draw();
			setTimeout(update, updateInterval);
		}

		update();
    }

    return {
        // Public Functions
        init: function () {
            exampleDynamic();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFlotDemoDynamic.init();
});
