"use strict";

// Class definition
var KTGeneralAmCharts = function () {
    // Shared variable
    var chart;

    // Private functions
    var _demo1 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            chart = am4core.create('kt_amcharts_1', am4charts.XYChart)
            chart.colors.step = 2;

            chart.legend = new am4charts.Legend()
            chart.legend.position = 'top'
            chart.legend.paddingBottom = 20
            chart.legend.labels.template.maxWidth = 95

            var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
            xAxis.dataFields.category = 'category'
            xAxis.renderer.cellStartLocation = 0.1
            xAxis.renderer.cellEndLocation = 0.9
            xAxis.renderer.grid.template.location = 0;

            var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
            yAxis.min = 0;

            function createSeries(value, name) {
                var series = chart.series.push(new am4charts.ColumnSeries())
                series.dataFields.valueY = value
                series.dataFields.categoryX = 'category'
                series.name = name

                series.events.on("hidden", arrangeColumns);
                series.events.on("shown", arrangeColumns);

                var bullet = series.bullets.push(new am4charts.LabelBullet())
                bullet.interactionsEnabled = false
                bullet.dy = 30;
                bullet.label.text = '{valueY}'
                bullet.label.fill = am4core.color('#ffffff')

                return series;
            }

            chart.data = [
                {
                    category: 'Place #1',
                    first: 40,
                    second: 55,
                    third: 60
                },
                {
                    category: 'Place #2',
                    first: 30,
                    second: 78,
                    third: 69
                },
                {
                    category: 'Place #3',
                    first: 27,
                    second: 40,
                    third: 45
                },
                {
                    category: 'Place #4',
                    first: 50,
                    second: 33,
                    third: 22
                }
            ]


            createSeries('first', 'The First');
            createSeries('second', 'The Second');
            createSeries('third', 'The Third');

            function arrangeColumns() {

                var series = chart.series.getIndex(0);

                var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
                if (series.dataItems.length > 1) {
                    var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
                    var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
                    var delta = ((x1 - x0) / chart.series.length) * w;
                    if (am4core.isNumber(delta)) {
                        var middle = chart.series.length / 2;

                        var newIndex = 0;
                        chart.series.each(function (series) {
                            if (!series.isHidden && !series.isHiding) {
                                series.dummyData = newIndex;
                                newIndex++;
                            }
                            else {
                                series.dummyData = chart.series.indexOf(series);
                            }
                        })
                        var visibleCount = newIndex;
                        var newMiddle = visibleCount / 2;

                        chart.series.each(function (series) {
                            var trueIndex = chart.series.indexOf(series);
                            var newIndex = series.dummyData;

                            var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                            series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                            series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                        })
                    }
                }
            }

        }); // end am4core.ready()
    }

    var _demo2 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart
            chart = am4core.create("kt_amcharts_2", am4charts.XYChart);

            var data = [];
            var price1 = 1000, price2 = 1200;
            var quantity = 30000;
            for (var i = 0; i < 360; i++) {
                price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
                data.push({ date1: new Date(2015, 0, i), price1: price1 });
            }
            for (var i = 0; i < 360; i++) {
                price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
                data.push({ date2: new Date(2017, 0, i), price2: price2 });
            }

            chart.data = data;

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.location = 0;
            dateAxis.renderer.labels.template.fill = am4core.color("#e59165");

            var dateAxis2 = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis2.renderer.grid.template.location = 0;
            dateAxis2.renderer.labels.template.fill = am4core.color("#dfcc64");

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.renderer.labels.template.fill = am4core.color("#e59165");

            valueAxis.renderer.minWidth = 60;

            var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis2.tooltip.disabled = true;
            valueAxis2.renderer.labels.template.fill = am4core.color("#dfcc64");
            valueAxis2.renderer.minWidth = 60;
            valueAxis2.syncWithAxis = valueAxis;

            var series = chart.series.push(new am4charts.LineSeries());
            series.name = "2015";
            series.dataFields.dateX = "date1";
            series.dataFields.valueY = "price1";
            series.tooltipText = "{valueY.value}";
            series.fill = am4core.color("#e59165");
            series.stroke = am4core.color("#e59165");
            //series.strokeWidth = 3;

            var series2 = chart.series.push(new am4charts.LineSeries());
            series2.name = "2017";
            series2.dataFields.dateX = "date2";
            series2.dataFields.valueY = "price2";
            series2.yAxis = valueAxis2;
            series2.xAxis = dateAxis2;
            series2.tooltipText = "{valueY.value}";
            series2.fill = am4core.color("#dfcc64");
            series2.stroke = am4core.color("#dfcc64");
            //series2.strokeWidth = 3;

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.xAxis = dateAxis2;

            var scrollbarX = new am4charts.XYChartScrollbar();
            scrollbarX.series.push(series);
            chart.scrollbarX = scrollbarX;

            chart.legend = new am4charts.Legend();
            chart.legend.parent = chart.plotContainer;
            chart.legend.zIndex = 100;

            valueAxis2.renderer.grid.template.strokeOpacity = 0.07;
            dateAxis2.renderer.grid.template.strokeOpacity = 0.07;
            dateAxis.renderer.grid.template.strokeOpacity = 0.07;
            valueAxis.renderer.grid.template.strokeOpacity = 0.07;

        }); // end am4core.ready()
    }

    var _demo3 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_dataviz);
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart
            chart = am4core.create("kt_amcharts_3", am4charts.PieChart);
            chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

            chart.data = [
                {
                    country: "Lithuania",
                    value: 260
                },
                {
                    country: "Czechia",
                    value: 230
                },
                {
                    country: "Ireland",
                    value: 200
                },
                {
                    country: "Germany",
                    value: 165
                },
                {
                    country: "Australia",
                    value: 139
                },
                {
                    country: "Austria",
                    value: 128
                }
            ];

            var series = chart.series.push(new am4charts.PieSeries());
            series.dataFields.value = "value";
            series.dataFields.radiusValue = "value";
            series.dataFields.category = "country";
            series.slices.template.cornerRadius = 6;
            series.colors.step = 3;

            series.hiddenState.properties.endAngle = -90;

            chart.legend = new am4charts.Legend();

        }); // end am4core.ready()
    }

    var _demo4 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_frozen);
            am4core.useTheme(am4themes_animated);
            // Themes end

            chart = am4core.create("kt_amcharts_4", am4plugins_timeline.SerpentineChart);
            chart.curveContainer.padding(20, 20, 20, 20);
            chart.levelCount = 8;
            chart.orientation = "horizontal";
            chart.fontSize = 11;

            var colorSet = new am4core.ColorSet();
            colorSet.saturation = 0.6;

            chart.data = [{
                "category": "Module #1",
                "start": "2016-01-10",
                "end": "2016-01-13",
                "color": colorSet.getIndex(0),
                "task": "Gathering requirements"
            }, {
                "category": "Module #1",
                "start": "2016-02-05",
                "end": "2016-04-18",
                "color": colorSet.getIndex(0),
                "task": "Development"
            }, {
                "category": "Module #2",
                "start": "2016-01-08",
                "end": "2016-01-10",
                "color": colorSet.getIndex(5),
                "task": "Gathering requirements"
            }, {
                "category": "Module #2",
                "start": "2016-01-12",
                "end": "2016-01-15",
                "color": colorSet.getIndex(5),
                "task": "Producing specifications"
            }, {
                "category": "Module #2",
                "start": "2016-01-16",
                "end": "2016-02-05",
                "color": colorSet.getIndex(5),
                "task": "Development"
            }, {
                "category": "Module #2",
                "start": "2016-02-10",
                "end": "2016-02-18",
                "color": colorSet.getIndex(5),
                "task": "Testing and QA"
            }, {
                "category": "",
                "task": ""
            }, {
                "category": "Module #3",
                "start": "2016-01-01",
                "end": "2016-01-19",
                "color": colorSet.getIndex(9),
                "task": "Gathering requirements"
            }, {
                "category": "Module #3",
                "start": "2016-02-01",
                "end": "2016-02-10",
                "color": colorSet.getIndex(9),
                "task": "Producing specifications"
            }, {
                "category": "Module #3",
                "start": "2016-03-10",
                "end": "2016-04-15",
                "color": colorSet.getIndex(9),
                "task": "Development"
            }, {
                "category": "Module #3",
                "start": "2016-04-20",
                "end": "2016-04-30",
                "color": colorSet.getIndex(9),
                "task": "Testing and QA"
            }, {
                "category": "Module #4",
                "start": "2016-01-15",
                "end": "2016-02-12",
                "color": colorSet.getIndex(15),
                "task": "Gathering requirements"
            }, {
                "category": "Module #4",
                "start": "2016-02-25",
                "end": "2016-03-10",
                "color": colorSet.getIndex(15),
                "task": "Development"
            }, {
                "category": "Module #4",
                "start": "2016-03-23",
                "end": "2016-04-29",
                "color": colorSet.getIndex(15),
                "task": "Testing and QA"
            }];

            chart.dateFormatter.dateFormat = "yyyy-MM-dd";
            chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

            var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "category";
            categoryAxis.renderer.grid.template.disabled = true;
            categoryAxis.renderer.labels.template.paddingRight = 25;
            categoryAxis.renderer.minGridDistance = 10;
            categoryAxis.renderer.innerRadius = -60;
            categoryAxis.renderer.radius = 60;

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.minGridDistance = 70;
            dateAxis.baseInterval = { count: 1, timeUnit: "day" };

            dateAxis.renderer.tooltipLocation = 0;
            dateAxis.startLocation = -0.5;
            dateAxis.renderer.line.strokeDasharray = "1,4";
            dateAxis.renderer.line.strokeOpacity = 0.7;
            dateAxis.tooltip.background.fillOpacity = 0.2;
            dateAxis.tooltip.background.cornerRadius = 5;
            dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
            dateAxis.tooltip.label.paddingTop = 7;

            var labelTemplate = dateAxis.renderer.labels.template;
            labelTemplate.verticalCenter = "middle";
            labelTemplate.fillOpacity = 0.7;
            labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
            labelTemplate.background.fillOpacity = 1;
            labelTemplate.padding(7, 7, 7, 7);

            var categoryAxisLabelTemplate = categoryAxis.renderer.labels.template;
            categoryAxisLabelTemplate.horizontalCenter = "left";
            categoryAxisLabelTemplate.adapter.add("rotation", function (rotation, target) {
                var position = dateAxis.valueToPosition(dateAxis.min);
                return dateAxis.renderer.positionToAngle(position) + 90;
            })

            var series1 = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
            series1.columns.template.height = am4core.percent(20);
            series1.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

            series1.dataFields.openDateX = "start";
            series1.dataFields.dateX = "end";
            series1.dataFields.categoryY = "category";
            series1.columns.template.propertyFields.fill = "color"; // get color from data
            series1.columns.template.propertyFields.stroke = "color";
            series1.columns.template.strokeOpacity = 0;

            var bullet = new am4charts.CircleBullet();
            series1.bullets.push(bullet);
            bullet.circle.radius = 3;
            bullet.circle.strokeOpacity = 0;
            bullet.propertyFields.fill = "color";
            bullet.locationX = 0;


            var bullet2 = new am4charts.CircleBullet();
            series1.bullets.push(bullet2);
            bullet2.circle.radius = 3;
            bullet2.circle.strokeOpacity = 0;
            bullet2.propertyFields.fill = "color";
            bullet2.locationX = 1;

            chart.scrollbarX = new am4core.Scrollbar();
            chart.scrollbarX.align = "center"
            chart.scrollbarX.width = am4core.percent(90);

            var cursor = new am4plugins_timeline.CurveCursor();
            chart.cursor = cursor;
            cursor.xAxis = dateAxis;
            cursor.yAxis = categoryAxis;
            cursor.lineY.disabled = true;
            cursor.lineX.strokeDasharray = "1,4";
            cursor.lineX.strokeOpacity = 1;

            dateAxis.renderer.tooltipLocation2 = 0;
            categoryAxis.cursorTooltipEnabled = false;

        }); // end am4core.ready()
    }

    var _demo5 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            chart = am4core.create("kt_amcharts_5", am4charts.RadarChart);
            chart.innerRadius = am4core.percent(30);
            chart.fontSize = 11;

            var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
            yAxis.renderer.minGridDistance = 5;

            xAxis.renderer.labels.template.location = 0.5;
            xAxis.renderer.labels.template.bent = true;
            xAxis.renderer.labels.template.radius = 5;

            xAxis.dataFields.category = "hour";
            yAxis.dataFields.category = "weekday";

            xAxis.renderer.grid.template.disabled = true;
            xAxis.renderer.minGridDistance = 10;

            yAxis.renderer.grid.template.disabled = true;
            yAxis.renderer.inversed = true;

            // this makes the y axis labels to be bent. By default y Axis labels are regular AxisLabels, so we replace them with AxisLabelCircular
            // and call fixPosition for them to be bent
            var yAxisLabel = new am4charts.AxisLabelCircular();
            yAxisLabel.bent = true;
            yAxisLabel.events.on("validated", function (event) {
                event.target.fixPosition(-90, am4core.math.getDistance({ x: event.target.pixelX, y: event.target.pixelY }) - 5);
                event.target.dx = -event.target.pixelX;
                event.target.dy = -event.target.pixelY;
            })
            yAxis.renderer.labels.template = yAxisLabel;

            var series = chart.series.push(new am4charts.RadarColumnSeries());
            series.dataFields.categoryX = "hour";
            series.dataFields.categoryY = "weekday";
            series.dataFields.value = "value";
            series.sequencedInterpolation = true;

            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            columnTemplate.stroke = am4core.color("#ffffff");
            columnTemplate.tooltipText = "{weekday}, {hour}: {value.workingValue.formatNumber('#.')}";
            columnTemplate.width = am4core.percent(100);
            columnTemplate.height = am4core.percent(100);

            chart.seriesContainer.zIndex = -5;

            columnTemplate.hiddenState.properties.opacity = 0;

            // heat rule, this makes columns to change color depending on value
            series.heatRules.push({ target: columnTemplate, property: "fill", min: am4core.color("#fffb77"), max: am4core.color("#fe131a") });

            // heat legend

            var heatLegend = chart.bottomAxesContainer.createChild(am4charts.HeatLegend);
            heatLegend.width = am4core.percent(100);
            heatLegend.series = series;
            heatLegend.valueAxis.renderer.labels.template.fontSize = 9;
            heatLegend.valueAxis.renderer.minGridDistance = 30;

            // heat legend behavior
            series.columns.template.events.on("over", function (event) {
                handleHover(event.target);
            })

            series.columns.template.events.on("hit", function (event) {
                handleHover(event.target);
            })

            function handleHover(column) {
                if (!isNaN(column.dataItem.value)) {
                    heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
                }
                else {
                    heatLegend.valueAxis.hideTooltip();
                }
            }

            series.columns.template.events.on("out", function (event) {
                heatLegend.valueAxis.hideTooltip();
            })

            chart.data = [
                {
                    "hour": "12pm",
                    "weekday": "Sunday",
                    "value": 2990
                },
                {
                    "hour": "1am",
                    "weekday": "Sunday",
                    "value": 2520
                },
                {
                    "hour": "2am",
                    "weekday": "Sunday",
                    "value": 2334
                },
                {
                    "hour": "3am",
                    "weekday": "Sunday",
                    "value": 2230
                },
                {
                    "hour": "4am",
                    "weekday": "Sunday",
                    "value": 2325
                },
                {
                    "hour": "5am",
                    "weekday": "Sunday",
                    "value": 2019
                },
                {
                    "hour": "6am",
                    "weekday": "Sunday",
                    "value": 2128
                },
                {
                    "hour": "7am",
                    "weekday": "Sunday",
                    "value": 2246
                },
                {
                    "hour": "8am",
                    "weekday": "Sunday",
                    "value": 2421
                },
                {
                    "hour": "9am",
                    "weekday": "Sunday",
                    "value": 2788
                },
                {
                    "hour": "10am",
                    "weekday": "Sunday",
                    "value": 2959
                },
                {
                    "hour": "11am",
                    "weekday": "Sunday",
                    "value": 3018
                },
                {
                    "hour": "12am",
                    "weekday": "Sunday",
                    "value": 3154
                },
                {
                    "hour": "1pm",
                    "weekday": "Sunday",
                    "value": 3172
                },
                {
                    "hour": "2pm",
                    "weekday": "Sunday",
                    "value": 3368
                },
                {
                    "hour": "3pm",
                    "weekday": "Sunday",
                    "value": 3464
                },
                {
                    "hour": "4pm",
                    "weekday": "Sunday",
                    "value": 3746
                },
                {
                    "hour": "5pm",
                    "weekday": "Sunday",
                    "value": 3656
                },
                {
                    "hour": "6pm",
                    "weekday": "Sunday",
                    "value": 3336
                },
                {
                    "hour": "7pm",
                    "weekday": "Sunday",
                    "value": 3292
                },
                {
                    "hour": "8pm",
                    "weekday": "Sunday",
                    "value": 3269
                },
                {
                    "hour": "9pm",
                    "weekday": "Sunday",
                    "value": 3300
                },
                {
                    "hour": "10pm",
                    "weekday": "Sunday",
                    "value": 3403
                },
                {
                    "hour": "11pm",
                    "weekday": "Sunday",
                    "value": 3323
                },
                {
                    "hour": "12pm",
                    "weekday": "Monday",
                    "value": 3346
                },
                {
                    "hour": "1am",
                    "weekday": "Monday",
                    "value": 2725
                },
                {
                    "hour": "2am",
                    "weekday": "Monday",
                    "value": 3052
                },
                {
                    "hour": "3am",
                    "weekday": "Monday",
                    "value": 3876
                },
                {
                    "hour": "4am",
                    "weekday": "Monday",
                    "value": 4453
                },
                {
                    "hour": "5am",
                    "weekday": "Monday",
                    "value": 3972
                },
                {
                    "hour": "6am",
                    "weekday": "Monday",
                    "value": 4644
                },
                {
                    "hour": "7am",
                    "weekday": "Monday",
                    "value": 5715
                },
                {
                    "hour": "8am",
                    "weekday": "Monday",
                    "value": 7080
                },
                {
                    "hour": "9am",
                    "weekday": "Monday",
                    "value": 8022
                },
                {
                    "hour": "10am",
                    "weekday": "Monday",
                    "value": 8446
                },
                {
                    "hour": "11am",
                    "weekday": "Monday",
                    "value": 9313
                },
                {
                    "hour": "12am",
                    "weekday": "Monday",
                    "value": 9011
                },
                {
                    "hour": "1pm",
                    "weekday": "Monday",
                    "value": 8508
                },
                {
                    "hour": "2pm",
                    "weekday": "Monday",
                    "value": 8515
                },
                {
                    "hour": "3pm",
                    "weekday": "Monday",
                    "value": 8399
                },
                {
                    "hour": "4pm",
                    "weekday": "Monday",
                    "value": 8649
                },
                {
                    "hour": "5pm",
                    "weekday": "Monday",
                    "value": 7869
                },
                {
                    "hour": "6pm",
                    "weekday": "Monday",
                    "value": 6933
                },
                {
                    "hour": "7pm",
                    "weekday": "Monday",
                    "value": 5969
                },
                {
                    "hour": "8pm",
                    "weekday": "Monday",
                    "value": 5552
                },
                {
                    "hour": "9pm",
                    "weekday": "Monday",
                    "value": 5434
                },
                {
                    "hour": "10pm",
                    "weekday": "Monday",
                    "value": 5070
                },
                {
                    "hour": "11pm",
                    "weekday": "Monday",
                    "value": 4851
                },
                {
                    "hour": "12pm",
                    "weekday": "Tuesday",
                    "value": 4468
                },
                {
                    "hour": "1am",
                    "weekday": "Tuesday",
                    "value": 3306
                },
                {
                    "hour": "2am",
                    "weekday": "Tuesday",
                    "value": 3906
                },
                {
                    "hour": "3am",
                    "weekday": "Tuesday",
                    "value": 4413
                },
                {
                    "hour": "4am",
                    "weekday": "Tuesday",
                    "value": 4726
                },
                {
                    "hour": "5am",
                    "weekday": "Tuesday",
                    "value": 4584
                },
                {
                    "hour": "6am",
                    "weekday": "Tuesday",
                    "value": 5717
                },
                {
                    "hour": "7am",
                    "weekday": "Tuesday",
                    "value": 6504
                },
                {
                    "hour": "8am",
                    "weekday": "Tuesday",
                    "value": 8104
                },
                {
                    "hour": "9am",
                    "weekday": "Tuesday",
                    "value": 8813
                },
                {
                    "hour": "10am",
                    "weekday": "Tuesday",
                    "value": 9278
                },
                {
                    "hour": "11am",
                    "weekday": "Tuesday",
                    "value": 10425
                },
                {
                    "hour": "12am",
                    "weekday": "Tuesday",
                    "value": 10137
                },
                {
                    "hour": "1pm",
                    "weekday": "Tuesday",
                    "value": 9290
                },
                {
                    "hour": "2pm",
                    "weekday": "Tuesday",
                    "value": 9255
                },
                {
                    "hour": "3pm",
                    "weekday": "Tuesday",
                    "value": 9614
                },
                {
                    "hour": "4pm",
                    "weekday": "Tuesday",
                    "value": 9713
                },
                {
                    "hour": "5pm",
                    "weekday": "Tuesday",
                    "value": 9667
                },
                {
                    "hour": "6pm",
                    "weekday": "Tuesday",
                    "value": 8774
                },
                {
                    "hour": "7pm",
                    "weekday": "Tuesday",
                    "value": 8649
                },
                {
                    "hour": "8pm",
                    "weekday": "Tuesday",
                    "value": 9937
                },
                {
                    "hour": "9pm",
                    "weekday": "Tuesday",
                    "value": 10286
                },
                {
                    "hour": "10pm",
                    "weekday": "Tuesday",
                    "value": 9175
                },
                {
                    "hour": "11pm",
                    "weekday": "Tuesday",
                    "value": 8581
                },
                {
                    "hour": "12pm",
                    "weekday": "Wednesday",
                    "value": 8145
                },
                {
                    "hour": "1am",
                    "weekday": "Wednesday",
                    "value": 7177
                },
                {
                    "hour": "2am",
                    "weekday": "Wednesday",
                    "value": 5657
                },
                {
                    "hour": "3am",
                    "weekday": "Wednesday",
                    "value": 6802
                },
                {
                    "hour": "4am",
                    "weekday": "Wednesday",
                    "value": 8159
                },
                {
                    "hour": "5am",
                    "weekday": "Wednesday",
                    "value": 8449
                },
                {
                    "hour": "6am",
                    "weekday": "Wednesday",
                    "value": 9453
                },
                {
                    "hour": "7am",
                    "weekday": "Wednesday",
                    "value": 9947
                },
                {
                    "hour": "8am",
                    "weekday": "Wednesday",
                    "value": 11471
                },
                {
                    "hour": "9am",
                    "weekday": "Wednesday",
                    "value": 12492
                },
                {
                    "hour": "10am",
                    "weekday": "Wednesday",
                    "value": 9388
                },
                {
                    "hour": "11am",
                    "weekday": "Wednesday",
                    "value": 9928
                },
                {
                    "hour": "12am",
                    "weekday": "Wednesday",
                    "value": 9644
                },
                {
                    "hour": "1pm",
                    "weekday": "Wednesday",
                    "value": 9034
                },
                {
                    "hour": "2pm",
                    "weekday": "Wednesday",
                    "value": 8964
                },
                {
                    "hour": "3pm",
                    "weekday": "Wednesday",
                    "value": 9069
                },
                {
                    "hour": "4pm",
                    "weekday": "Wednesday",
                    "value": 8898
                },
                {
                    "hour": "5pm",
                    "weekday": "Wednesday",
                    "value": 8322
                },
                {
                    "hour": "6pm",
                    "weekday": "Wednesday",
                    "value": 6909
                },
                {
                    "hour": "7pm",
                    "weekday": "Wednesday",
                    "value": 5810
                },
                {
                    "hour": "8pm",
                    "weekday": "Wednesday",
                    "value": 5151
                },
                {
                    "hour": "9pm",
                    "weekday": "Wednesday",
                    "value": 4911
                },
                {
                    "hour": "10pm",
                    "weekday": "Wednesday",
                    "value": 4487
                },
                {
                    "hour": "11pm",
                    "weekday": "Wednesday",
                    "value": 4118
                },
                {
                    "hour": "12pm",
                    "weekday": "Thursday",
                    "value": 3689
                },
                {
                    "hour": "1am",
                    "weekday": "Thursday",
                    "value": 3081
                },
                {
                    "hour": "2am",
                    "weekday": "Thursday",
                    "value": 6525
                },
                {
                    "hour": "3am",
                    "weekday": "Thursday",
                    "value": 6228
                },
                {
                    "hour": "4am",
                    "weekday": "Thursday",
                    "value": 6917
                },
                {
                    "hour": "5am",
                    "weekday": "Thursday",
                    "value": 6568
                },
                {
                    "hour": "6am",
                    "weekday": "Thursday",
                    "value": 6405
                },
                {
                    "hour": "7am",
                    "weekday": "Thursday",
                    "value": 8106
                },
                {
                    "hour": "8am",
                    "weekday": "Thursday",
                    "value": 8542
                },
                {
                    "hour": "9am",
                    "weekday": "Thursday",
                    "value": 8501
                },
                {
                    "hour": "10am",
                    "weekday": "Thursday",
                    "value": 8802
                },
                {
                    "hour": "11am",
                    "weekday": "Thursday",
                    "value": 9420
                },
                {
                    "hour": "12am",
                    "weekday": "Thursday",
                    "value": 8966
                },
                {
                    "hour": "1pm",
                    "weekday": "Thursday",
                    "value": 8135
                },
                {
                    "hour": "2pm",
                    "weekday": "Thursday",
                    "value": 8224
                },
                {
                    "hour": "3pm",
                    "weekday": "Thursday",
                    "value": 8387
                },
                {
                    "hour": "4pm",
                    "weekday": "Thursday",
                    "value": 8218
                },
                {
                    "hour": "5pm",
                    "weekday": "Thursday",
                    "value": 7641
                },
                {
                    "hour": "6pm",
                    "weekday": "Thursday",
                    "value": 6469
                },
                {
                    "hour": "7pm",
                    "weekday": "Thursday",
                    "value": 5441
                },
                {
                    "hour": "8pm",
                    "weekday": "Thursday",
                    "value": 4952
                },
                {
                    "hour": "9pm",
                    "weekday": "Thursday",
                    "value": 4643
                },
                {
                    "hour": "10pm",
                    "weekday": "Thursday",
                    "value": 4393
                },
                {
                    "hour": "11pm",
                    "weekday": "Thursday",
                    "value": 4017
                },
                {
                    "hour": "12pm",
                    "weekday": "Friday",
                    "value": 4022
                },
                {
                    "hour": "1am",
                    "weekday": "Friday",
                    "value": 3063
                },
                {
                    "hour": "2am",
                    "weekday": "Friday",
                    "value": 3638
                },
                {
                    "hour": "3am",
                    "weekday": "Friday",
                    "value": 3968
                },
                {
                    "hour": "4am",
                    "weekday": "Friday",
                    "value": 4070
                },
                {
                    "hour": "5am",
                    "weekday": "Friday",
                    "value": 4019
                },
                {
                    "hour": "6am",
                    "weekday": "Friday",
                    "value": 4548
                },
                {
                    "hour": "7am",
                    "weekday": "Friday",
                    "value": 5465
                },
                {
                    "hour": "8am",
                    "weekday": "Friday",
                    "value": 6909
                },
                {
                    "hour": "9am",
                    "weekday": "Friday",
                    "value": 7706
                },
                {
                    "hour": "10am",
                    "weekday": "Friday",
                    "value": 7867
                },
                {
                    "hour": "11am",
                    "weekday": "Friday",
                    "value": 8615
                },
                {
                    "hour": "12am",
                    "weekday": "Friday",
                    "value": 8218
                },
                {
                    "hour": "1pm",
                    "weekday": "Friday",
                    "value": 7604
                },
                {
                    "hour": "2pm",
                    "weekday": "Friday",
                    "value": 7429
                },
                {
                    "hour": "3pm",
                    "weekday": "Friday",
                    "value": 7488
                },
                {
                    "hour": "4pm",
                    "weekday": "Friday",
                    "value": 7493
                },
                {
                    "hour": "5pm",
                    "weekday": "Friday",
                    "value": 6998
                },
                {
                    "hour": "6pm",
                    "weekday": "Friday",
                    "value": 5941
                },
                {
                    "hour": "7pm",
                    "weekday": "Friday",
                    "value": 5068
                },
                {
                    "hour": "8pm",
                    "weekday": "Friday",
                    "value": 4636
                },
                {
                    "hour": "9pm",
                    "weekday": "Friday",
                    "value": 4241
                },
                {
                    "hour": "10pm",
                    "weekday": "Friday",
                    "value": 3858
                },
                {
                    "hour": "11pm",
                    "weekday": "Friday",
                    "value": 3833
                },
                {
                    "hour": "12pm",
                    "weekday": "Saturday",
                    "value": 3503
                },
                {
                    "hour": "1am",
                    "weekday": "Saturday",
                    "value": 2842
                },
                {
                    "hour": "2am",
                    "weekday": "Saturday",
                    "value": 2808
                },
                {
                    "hour": "3am",
                    "weekday": "Saturday",
                    "value": 2399
                },
                {
                    "hour": "4am",
                    "weekday": "Saturday",
                    "value": 2280
                },
                {
                    "hour": "5am",
                    "weekday": "Saturday",
                    "value": 2139
                },
                {
                    "hour": "6am",
                    "weekday": "Saturday",
                    "value": 2527
                },
                {
                    "hour": "7am",
                    "weekday": "Saturday",
                    "value": 2940
                },
                {
                    "hour": "8am",
                    "weekday": "Saturday",
                    "value": 3066
                },
                {
                    "hour": "9am",
                    "weekday": "Saturday",
                    "value": 3494
                },
                {
                    "hour": "10am",
                    "weekday": "Saturday",
                    "value": 3287
                },
                {
                    "hour": "11am",
                    "weekday": "Saturday",
                    "value": 3416
                },
                {
                    "hour": "12am",
                    "weekday": "Saturday",
                    "value": 3432
                },
                {
                    "hour": "1pm",
                    "weekday": "Saturday",
                    "value": 3523
                },
                {
                    "hour": "2pm",
                    "weekday": "Saturday",
                    "value": 3542
                },
                {
                    "hour": "3pm",
                    "weekday": "Saturday",
                    "value": 3347
                },
                {
                    "hour": "4pm",
                    "weekday": "Saturday",
                    "value": 3292
                },
                {
                    "hour": "5pm",
                    "weekday": "Saturday",
                    "value": 3416
                },
                {
                    "hour": "6pm",
                    "weekday": "Saturday",
                    "value": 3131
                },
                {
                    "hour": "7pm",
                    "weekday": "Saturday",
                    "value": 3057
                },
                {
                    "hour": "8pm",
                    "weekday": "Saturday",
                    "value": 3227
                },
                {
                    "hour": "9pm",
                    "weekday": "Saturday",
                    "value": 3060
                },
                {
                    "hour": "10pm",
                    "weekday": "Saturday",
                    "value": 2855
                },
                {
                    "hour": "11pm",
                    "weekday": "Saturday",
                    "value": 2625
                }

            ];

        }); // end am4core.ready()
    }

    return {
        // Public Functions
        init: function () {
            _demo1();
            _demo2();
            _demo3();
            _demo4();
            _demo5();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralAmCharts.init();
});
