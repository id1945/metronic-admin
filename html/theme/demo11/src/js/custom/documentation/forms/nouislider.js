"use strict";

// Class definition
var KTFormsNouisliderDemos = function() {
    // Private functions
    var _exampleBasic = function() {
        var slider = document.querySelector("#kt_slider_basic");
        var valueMin = document.querySelector("#kt_slider_basic_min");
        var valueMax = document.querySelector("#kt_slider_basic_max");

        noUiSlider.create(slider, {
            start: [20, 80],
            connect: true,
            range: {
                "min": 0,
                "max": 100
            }
        });

        slider.noUiSlider.on("update", function (values, handle) {
            if (handle) {
                valueMax.innerHTML = values[handle];
            } else {
                valueMin.innerHTML = values[handle];
            }
        });
    }

    var _exampleSizes = function() {
        var slider1 = document.querySelector("#kt_slider_sizes_sm");
        var slider2 = document.querySelector("#kt_slider_sizes_default");
        var slider3 = document.querySelector("#kt_slider_sizes_lg");

        noUiSlider.create(slider1, {
            start: [20, 80],
            connect: true,
            range: {
                "min": 0,
                "max": 100
            }
        });

        noUiSlider.create(slider2, {
            start: [20, 80],
            connect: true,
            range: {
                "min": 0,
                "max": 100
            }
        });

        noUiSlider.create(slider3, {
            start: [20, 80],
            connect: true,
            range: {
                "min": 0,
                "max": 100
            }
        });
    }   

    var _exampleVertical = function() {
        var slider = document.querySelector("#kt_slider_vertical");

        noUiSlider.create(slider, {
            start: [60, 160],
            connect: true,
            orientation: "vertical",
            range: {
                "min": 0,
                "max": 200
            }
        });
    }

    var _exampleTooltip = function() {
        var slider = document.querySelector("#kt_slider_tooltip");

        noUiSlider.create(slider, {
            start: [20, 80, 120],
            tooltips: [false, wNumb({decimals: 1}), true],
            range: {
                "min": 0,
                "max": 200
            }
        });        
    }

    var _exampleSoftLimits = function() {
        var slider = document.querySelector("#kt_slider_soft_limits");

        noUiSlider.create(slider, {
            start: 50,
            range: {
                min: 0,
                max: 100
            },
            pips: {
                mode: "values",
                values: [20, 80],
                density: 4
            }
        });
    } 

    return {
        // Public Functions
        init: function(element) {
            _exampleBasic();
            _exampleSizes();
            _exampleVertical();
            _exampleTooltip();
            _exampleSoftLimits();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsNouisliderDemos.init();
});