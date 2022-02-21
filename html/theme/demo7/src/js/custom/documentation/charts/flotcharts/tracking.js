"use strict";

// Class definition
var KTFlotDemoTracking = function () {
    // Private functions
    var exampleTracking = function () {
        var sin = [],
			cos = [];
		for (var i = 0; i < 14; i += 0.1) {
			sin.push([i, Math.sin(i)]);
			cos.push([i, Math.cos(i)]);
		}

		var plot = $.plot($("#kt_docs_flot_tracking"), [{
			data: sin,
			label: "sin(x) = -0.00",
			lines: {
				lineWidth: 1,
			},
			shadowSize: 0
		}, {
			data: cos,
			label: "cos(x) = -0.00",
			lines: {
				lineWidth: 1,
			},
			shadowSize: 0
		}], {
			colors: [KTUtil.getCssVariableValue('--bs-active-primary'), KTUtil.getCssVariableValue('--bs-active-warning')],
			series: {
				lines: {
					show: true
				}
			},
			crosshair: {
				mode: "x"
			},
			grid: {
				hoverable: true,
				autoHighlight: false,
				tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
				borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),
				borderWidth: 1
			},
			yaxis: {
				min: -1.2,
				max: 1.2
			}
		});

		var legends = $("#kt_docs_flot_tracking .legendLabel");
		legends.each(function() {
			// fix the widths so they don't jump around
			$(this).css('width', $(this).width());
		});

		var updateLegendTimeout = null;
		var latestPosition = null;

		function updateLegend() {
			updateLegendTimeout = null;

			var pos = latestPosition;

			var axes = plot.getAxes();
			if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max || pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) return;

			var i, j, dataset = plot.getData();
			for (i = 0; i < dataset.length; ++i) {
				var series = dataset[i];

				// find the nearest points, x-wise
				for (j = 0; j < series.data.length; ++j)
					if (series.data[j][0] > pos.x) break;

				// now interpolate
				var y, p1 = series.data[j - 1],
					p2 = series.data[j];

				if (p1 == null) y = p2[1];
				else if (p2 == null) y = p1[1];
				else y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);

				legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
			}
		}

		$("#kt_docs_flot_tracking").bind("plothover", function(event, pos, item) {
			latestPosition = pos;
			if (!updateLegendTimeout) updateLegendTimeout = setTimeout(updateLegend, 50);
		});
    }

    return {
        // Public Functions
        init: function () {
            exampleTracking();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFlotDemoTracking.init();
});
