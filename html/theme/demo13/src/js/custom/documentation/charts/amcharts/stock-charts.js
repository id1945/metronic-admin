"use strict";

// Class definition
var KTGeneralAmChartsMaps = function () {
    // Shared variables
    var chart;

    // Private functions
    var _demo1 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart
            chart = am4core.create("kt_amcharts_1", am4charts.XYChart);
            chart.padding(0, 15, 0, 15);

            // Load external data
            chart.dataSource.url = "https://www.amcharts.com/wp-content/uploads/assets/stock/MSFT.csv";
            chart.dataSource.parser = new am4core.CSVParser();
            chart.dataSource.parser.options.useColumnNames = true;
            chart.dataSource.parser.options.reverse = true;

            // the following line makes value axes to be arranged vertically.
            chart.leftAxesContainer.layout = "vertical";

            // uncomment this line if you want to change order of axes
            //chart.bottomAxesContainer.reverseOrder = true;

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.location = 0;
            dateAxis.renderer.ticks.template.length = 8;
            dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.ticks.template.disabled = false;
            dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
            dateAxis.renderer.minLabelPosition = 0.01;
            dateAxis.renderer.maxLabelPosition = 0.99;
            dateAxis.keepSelection = true;
            dateAxis.minHeight = 30;

            dateAxis.groupData = true;
            dateAxis.minZoomCount = 5;

            // these two lines makes the axis to be initially zoomed-in
            // dateAxis.start = 0.7;
            // dateAxis.keepSelection = true;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.zIndex = 1;
            valueAxis.renderer.baseGrid.disabled = true;
            // height of axis
            valueAxis.height = am4core.percent(65);

            valueAxis.renderer.gridContainer.background.fill = am4core.color("#000000");
            valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
            valueAxis.renderer.inside = true;
            valueAxis.renderer.labels.template.verticalCenter = "bottom";
            valueAxis.renderer.labels.template.padding(2, 2, 2, 2);

            //valueAxis.renderer.maxLabelPosition = 0.95;
            valueAxis.renderer.fontSize = "0.8em"

            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = "Date";
            series.dataFields.valueY = "Adj Close";
            series.tooltipText = "{valueY.value}";
            series.name = "MSFT: Value";
            series.defaultState.transitionDuration = 0;

            var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis2.tooltip.disabled = true;
            // height of axis
            valueAxis2.height = am4core.percent(35);
            valueAxis2.zIndex = 3
            // this makes gap between panels
            valueAxis2.marginTop = 30;
            valueAxis2.renderer.baseGrid.disabled = true;
            valueAxis2.renderer.inside = true;
            valueAxis2.renderer.labels.template.verticalCenter = "bottom";
            valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
            //valueAxis.renderer.maxLabelPosition = 0.95;
            valueAxis2.renderer.fontSize = "0.8em"

            valueAxis2.renderer.gridContainer.background.fill = am4core.color("#000000");
            valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;

            var series2 = chart.series.push(new am4charts.ColumnSeries());
            series2.dataFields.dateX = "Date";
            series2.dataFields.valueY = "Volume";
            series2.yAxis = valueAxis2;
            series2.tooltipText = "{valueY.value}";
            series2.name = "MSFT: Volume";
            // volume should be summed
            series2.groupFields.valueY = "sum";
            series2.defaultState.transitionDuration = 0;

            chart.cursor = new am4charts.XYCursor();

            var scrollbarX = new am4charts.XYChartScrollbar();
            scrollbarX.series.push(series);
            scrollbarX.marginBottom = 20;
            scrollbarX.scrollbarChart.xAxes.getIndex(0).minHeight = undefined;
            chart.scrollbarX = scrollbarX;

        }); // end am4core.ready()
    }


    var _demo2 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            chart = am4core.create("kt_amcharts_2", am4charts.XYChart);
            chart.padding(0, 15, 0, 15);
            chart.colors.step = 3;

            var data = [];
            var price1 = 1000;
            var price2 = 2000;
            var price3 = 3000;
            var quantity = 1000;
            for (var i = 15; i < 3000; i++) {
                price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
                price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
                price3 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);

                if (price1 < 100) {
                    price1 = 100;
                }

                if (price2 < 100) {
                    price2 = 100;
                }

                if (price3 < 100) {
                    price3 = 100;
                }

                quantity += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 500);

                if (quantity < 0) {
                    quantity *= -1;
                }
                data.push({ date: new Date(2000, 0, i), price1: price1, price2: price2, price3: price3, quantity: quantity });
            }


            chart.data = data;
            // the following line makes value axes to be arranged vertically.
            chart.leftAxesContainer.layout = "vertical";

            // uncomment this line if you want to change order of axes
            //chart.bottomAxesContainer.reverseOrder = true;

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.location = 0;
            dateAxis.renderer.ticks.template.length = 8;
            dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.ticks.template.disabled = false;
            dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
            dateAxis.renderer.minLabelPosition = 0.01;
            dateAxis.renderer.maxLabelPosition = 0.99;
            dateAxis.keepSelection = true;

            dateAxis.groupData = true;
            dateAxis.minZoomCount = 5;

            // these two lines makes the axis to be initially zoomed-in
            // dateAxis.start = 0.7;
            // dateAxis.keepSelection = true;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.zIndex = 1;
            valueAxis.renderer.baseGrid.disabled = true;
            // height of axis
            valueAxis.height = am4core.percent(65);

            valueAxis.renderer.gridContainer.background.fill = am4core.color("#000000");
            valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
            valueAxis.renderer.inside = true;
            valueAxis.renderer.labels.template.verticalCenter = "bottom";
            valueAxis.renderer.labels.template.padding(2, 2, 2, 2);

            //valueAxis.renderer.maxLabelPosition = 0.95;
            valueAxis.renderer.fontSize = "0.8em"

            var series1 = chart.series.push(new am4charts.LineSeries());
            series1.dataFields.dateX = "date";
            series1.dataFields.valueY = "price1";
            series1.dataFields.valueYShow = "changePercent";
            series1.tooltipText = "{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%";
            series1.name = "Stock A";
            series1.tooltip.getFillFromObject = false;
            series1.tooltip.getStrokeFromObject = true;
            series1.tooltip.background.fill = am4core.color("#fff");
            series1.tooltip.background.strokeWidth = 2;
            series1.tooltip.label.fill = series1.stroke;

            var series2 = chart.series.push(new am4charts.LineSeries());
            series2.dataFields.dateX = "date";
            series2.dataFields.valueY = "price2";
            series2.dataFields.valueYShow = "changePercent";
            series2.tooltipText = "{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%";
            series2.name = "Stock B";
            series2.tooltip.getFillFromObject = false;
            series2.tooltip.getStrokeFromObject = true;
            series2.tooltip.background.fill = am4core.color("#fff");
            series2.tooltip.background.strokeWidth = 2;
            series2.tooltip.label.fill = series2.stroke;

            var series3 = chart.series.push(new am4charts.LineSeries());
            series3.dataFields.dateX = "date";
            series3.dataFields.valueY = "price3";
            series3.dataFields.valueYShow = "changePercent";
            series3.tooltipText = "{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%";
            series3.name = "Stock C";
            series3.tooltip.getFillFromObject = false;
            series3.tooltip.getStrokeFromObject = true;
            series3.tooltip.background.fill = am4core.color("#fff");
            series3.tooltip.background.strokeWidth = 2;
            series3.tooltip.label.fill = series3.stroke;

            var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis2.tooltip.disabled = true;
            // height of axis
            valueAxis2.height = am4core.percent(35);
            valueAxis2.zIndex = 3
            // this makes gap between panels
            valueAxis2.marginTop = 30;
            valueAxis2.renderer.baseGrid.disabled = true;
            valueAxis2.renderer.inside = true;
            valueAxis2.renderer.labels.template.verticalCenter = "bottom";
            valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
            //valueAxis.renderer.maxLabelPosition = 0.95;
            valueAxis2.renderer.fontSize = "0.8em";

            valueAxis2.renderer.gridContainer.background.fill = am4core.color("#000000");
            valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;

            var volumeSeries = chart.series.push(new am4charts.StepLineSeries());
            volumeSeries.fillOpacity = 1;
            volumeSeries.fill = series1.stroke;
            volumeSeries.stroke = series1.stroke;
            volumeSeries.dataFields.dateX = "date";
            volumeSeries.dataFields.valueY = "quantity";
            volumeSeries.yAxis = valueAxis2;
            volumeSeries.tooltipText = "Volume: {valueY.value}";
            volumeSeries.name = "Series 2";
            // volume should be summed
            volumeSeries.groupFields.valueY = "sum";
            volumeSeries.tooltip.label.fill = volumeSeries.stroke;
            chart.cursor = new am4charts.XYCursor();

            var scrollbarX = new am4charts.XYChartScrollbar();
            scrollbarX.series.push(series1);
            scrollbarX.marginBottom = 20;
            var sbSeries = scrollbarX.scrollbarChart.series.getIndex(0);
            sbSeries.dataFields.valueYShow = undefined;
            chart.scrollbarX = scrollbarX;

        }); // end am4core.ready()
    }

    var _demo3 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            chart = am4core.create("kt_amcharts_3", am4charts.XYChart);

            // Add data
            chart.data = [{
                "year": "2011",
                "value": 600000
            }, {
                "year": "2012",
                "value": 900000
            }, {
                "year": "2013",
                "value": 180000
            }, {
                "year": "2014",
                "value": 600000
            }, {
                "year": "2015",
                "value": 350000
            }, {
                "year": "2016",
                "value": 600000
            }, {
                "year": "2017",
                "value": 670000
            }];

            // Populate data
            for (var i = 0; i < (chart.data.length - 1); i++) {
                chart.data[i].valueNext = chart.data[i + 1].value;
            }

            // Create axes
            var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "year";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.min = 0;

            // Create series
            var series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = "value";
            series.dataFields.categoryX = "year";

            // Add series for showing variance arrows
            var series2 = chart.series.push(new am4charts.ColumnSeries());
            series2.dataFields.valueY = "valueNext";
            series2.dataFields.openValueY = "value";
            series2.dataFields.categoryX = "year";
            series2.columns.template.width = 1;
            series2.fill = am4core.color("#555");
            series2.stroke = am4core.color("#555");

            // Add a triangle for arrow tip
            var arrow = series2.bullets.push(new am4core.Triangle);
            arrow.width = 10;
            arrow.height = 10;
            arrow.horizontalCenter = "middle";
            arrow.verticalCenter = "top";
            arrow.dy = -1;

            // Set up a rotation adapter which would rotate the triangle if its a negative change
            arrow.adapter.add("rotation", function (rotation, target) {
                return getVariancePercent(target.dataItem) < 0 ? 180 : rotation;
            });

            // Set up a rotation adapter which adjusts Y position
            arrow.adapter.add("dy", function (dy, target) {
                return getVariancePercent(target.dataItem) < 0 ? 1 : dy;
            });

            // Add a label
            var label = series2.bullets.push(new am4core.Label);
            label.padding(10, 10, 10, 10);
            label.text = "";
            label.fill = am4core.color("#0c0");
            label.strokeWidth = 0;
            label.horizontalCenter = "middle";
            label.verticalCenter = "bottom";
            label.fontWeight = "bolder";

            // Adapter for label text which calculates change in percent
            label.adapter.add("textOutput", function (text, target) {
                var percent = getVariancePercent(target.dataItem);
                return percent ? percent + "%" : text;
            });

            // Adapter which shifts the label if it's below the variance column
            label.adapter.add("verticalCenter", function (center, target) {
                return getVariancePercent(target.dataItem) < 0 ? "top" : center;
            });

            // Adapter which changes color of label to red
            label.adapter.add("fill", function (fill, target) {
                return getVariancePercent(target.dataItem) < 0 ? am4core.color("#c00") : fill;
            });

            function getVariancePercent(dataItem) {
                if (dataItem) {
                    var value = dataItem.valueY;
                    var openValue = dataItem.openValueY;
                    var change = value - openValue;
                    return Math.round(change / openValue * 100);
                }
                return 0;
            }

        }); // end am4core.ready()
    }

    return {
        // Public Functions
        init: function () {
            _demo1();
            _demo2();
            _demo3();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralAmChartsMaps.init();
});
