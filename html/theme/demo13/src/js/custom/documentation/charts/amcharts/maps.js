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

            // Create map instance
            chart = am4core.create("kt_amcharts_1", am4maps.MapChart);

            // Set map definition
            chart.geodata = am4geodata_worldLow;

            // Set projection
            chart.projection = new am4maps.projections.Miller();

            // Create map polygon series
            var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

            // Exclude Antartica
            polygonSeries.exclude = ["AQ"];

            // Make map load polygon (like country names) data from GeoJSON
            polygonSeries.useGeodata = true;

            // Configure series
            var polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.tooltipText = "{name}";
            polygonTemplate.polygon.fillOpacity = 0.6;


            // Create hover state and set alternative fill color
            var hs = polygonTemplate.states.create("hover");
            hs.properties.fill = chart.colors.getIndex(0);

            // Add image series
            var imageSeries = chart.series.push(new am4maps.MapImageSeries());
            imageSeries.mapImages.template.propertyFields.longitude = "longitude";
            imageSeries.mapImages.template.propertyFields.latitude = "latitude";
            imageSeries.mapImages.template.tooltipText = "{title}";
            imageSeries.mapImages.template.propertyFields.url = "url";

            var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
            circle.radius = 3;
            circle.propertyFields.fill = "color";
            circle.nonScaling = true;

            var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
            circle2.radius = 3;
            circle2.propertyFields.fill = "color";


            circle2.events.on("inited", function (event) {
                animateBullet(event.target);
            })


            function animateBullet(circle) {
                var animation = circle.animate([{ property: "scale", from: 1 / chart.zoomLevel, to: 5 / chart.zoomLevel }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
                animation.events.on("animationended", function (event) {
                    animateBullet(event.target.object);
                })
            }

            var colorSet = new am4core.ColorSet();

            imageSeries.data = [{
                "title": "Brussels",
                "latitude": 50.8371,
                "longitude": 4.3676,
                "color": colorSet.next()
            }, {
                "title": "Copenhagen",
                "latitude": 55.6763,
                "longitude": 12.5681,
                "color": colorSet.next()
            }, {
                "title": "Paris",
                "latitude": 48.8567,
                "longitude": 2.3510,
                "color": colorSet.next()
            }, {
                "title": "Reykjavik",
                "latitude": 64.1353,
                "longitude": -21.8952,
                "color": colorSet.next()
            }, {
                "title": "Moscow",
                "latitude": 55.7558,
                "longitude": 37.6176,
                "color": colorSet.next()
            }, {
                "title": "Madrid",
                "latitude": 40.4167,
                "longitude": -3.7033,
                "color": colorSet.next()
            }, {
                "title": "London",
                "latitude": 51.5002,
                "longitude": -0.1262,
                "url": "http://www.google.co.uk",
                "color": colorSet.next()
            }, {
                "title": "Peking",
                "latitude": 39.9056,
                "longitude": 116.3958,
                "color": colorSet.next()
            }, {
                "title": "New Delhi",
                "latitude": 28.6353,
                "longitude": 77.2250,
                "color": colorSet.next()
            }, {
                "title": "Tokyo",
                "latitude": 35.6785,
                "longitude": 139.6823,
                "url": "http://www.google.co.jp",
                "color": colorSet.next()
            }, {
                "title": "Ankara",
                "latitude": 39.9439,
                "longitude": 32.8560,
                "color": colorSet.next()
            }, {
                "title": "Buenos Aires",
                "latitude": -34.6118,
                "longitude": -58.4173,
                "color": colorSet.next()
            }, {
                "title": "Brasilia",
                "latitude": -15.7801,
                "longitude": -47.9292,
                "color": colorSet.next()
            }, {
                "title": "Ottawa",
                "latitude": 45.4235,
                "longitude": -75.6979,
                "color": colorSet.next()
            }, {
                "title": "Washington",
                "latitude": 38.8921,
                "longitude": -77.0241,
                "color": colorSet.next()
            }, {
                "title": "Kinshasa",
                "latitude": -4.3369,
                "longitude": 15.3271,
                "color": colorSet.next()
            }, {
                "title": "Cairo",
                "latitude": 30.0571,
                "longitude": 31.2272,
                "color": colorSet.next()
            }, {
                "title": "Pretoria",
                "latitude": -25.7463,
                "longitude": 28.1876,
                "color": colorSet.next()
            }];

        }); // end am4core.ready()
    }

    var _demo2 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create map instance
            chart = am4core.create("kt_amcharts_2", am4maps.MapChart);
            chart.geodata = am4geodata_worldLow;
            chart.projection = new am4maps.projections.Miller();
            chart.homeZoomLevel = 2.5;
            chart.homeGeoPoint = {
                latitude: 38,
                longitude: -60
            };

            // Create map polygon series
            var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
            polygonSeries.useGeodata = true;
            polygonSeries.mapPolygons.template.fill = chart.colors.getIndex(0).lighten(0.5);
            polygonSeries.mapPolygons.template.nonScalingStroke = true;
            polygonSeries.exclude = ["AQ"];

            // Add line bullets
            var cities = chart.series.push(new am4maps.MapImageSeries());
            cities.mapImages.template.nonScaling = true;

            var city = cities.mapImages.template.createChild(am4core.Circle);
            city.radius = 6;
            city.fill = chart.colors.getIndex(0).brighten(-0.2);
            city.strokeWidth = 2;
            city.stroke = am4core.color("#fff");

            function addCity(coords, title) {
                var city = cities.mapImages.create();
                city.latitude = coords.latitude;
                city.longitude = coords.longitude;
                city.tooltipText = title;
                return city;
            }

            var paris = addCity({ "latitude": 48.8567, "longitude": 2.3510 }, "Paris");
            var toronto = addCity({ "latitude": 43.8163, "longitude": -79.4287 }, "Toronto");
            var la = addCity({ "latitude": 34.3, "longitude": -118.15 }, "Los Angeles");
            var havana = addCity({ "latitude": 23, "longitude": -82 }, "Havana");

            // Add lines
            var lineSeries = chart.series.push(new am4maps.MapArcSeries());
            lineSeries.mapLines.template.line.strokeWidth = 2;
            lineSeries.mapLines.template.line.strokeOpacity = 0.5;
            lineSeries.mapLines.template.line.stroke = city.fill;
            lineSeries.mapLines.template.line.nonScalingStroke = true;
            lineSeries.mapLines.template.line.strokeDasharray = "1,1";
            lineSeries.zIndex = 10;

            var shadowLineSeries = chart.series.push(new am4maps.MapLineSeries());
            shadowLineSeries.mapLines.template.line.strokeOpacity = 0;
            shadowLineSeries.mapLines.template.line.nonScalingStroke = true;
            shadowLineSeries.mapLines.template.shortestDistance = false;
            shadowLineSeries.zIndex = 5;

            function addLine(from, to) {
                var line = lineSeries.mapLines.create();
                line.imagesToConnect = [from, to];
                line.line.controlPointDistance = -0.3;

                var shadowLine = shadowLineSeries.mapLines.create();
                shadowLine.imagesToConnect = [from, to];

                return line;
            }

            addLine(paris, toronto);
            addLine(toronto, la);
            addLine(la, havana);

            // Add plane
            var plane = lineSeries.mapLines.getIndex(0).lineObjects.create();
            plane.position = 0;
            plane.width = 48;
            plane.height = 48;

            plane.adapter.add("scale", function (scale, target) {
                return 0.5 * (1 - (Math.abs(0.5 - target.position)));
            })

            var planeImage = plane.createChild(am4core.Sprite);
            planeImage.scale = 0.08;
            planeImage.horizontalCenter = "middle";
            planeImage.verticalCenter = "middle";
            planeImage.path = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
            planeImage.fill = chart.colors.getIndex(2).brighten(-0.2);
            planeImage.strokeOpacity = 0;

            var shadowPlane = shadowLineSeries.mapLines.getIndex(0).lineObjects.create();
            shadowPlane.position = 0;
            shadowPlane.width = 48;
            shadowPlane.height = 48;

            var shadowPlaneImage = shadowPlane.createChild(am4core.Sprite);
            shadowPlaneImage.scale = 0.05;
            shadowPlaneImage.horizontalCenter = "middle";
            shadowPlaneImage.verticalCenter = "middle";
            shadowPlaneImage.path = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
            shadowPlaneImage.fill = am4core.color("#000");
            shadowPlaneImage.strokeOpacity = 0;

            shadowPlane.adapter.add("scale", function (scale, target) {
                target.opacity = (0.6 - (Math.abs(0.5 - target.position)));
                return 0.5 - 0.3 * (1 - (Math.abs(0.5 - target.position)));
            })

            // Plane animation
            var currentLine = 0;
            var direction = 1;
            function flyPlane() {

                // Get current line to attach plane to
                plane.mapLine = lineSeries.mapLines.getIndex(currentLine);
                plane.parent = lineSeries;
                shadowPlane.mapLine = shadowLineSeries.mapLines.getIndex(currentLine);
                shadowPlane.parent = shadowLineSeries;
                shadowPlaneImage.rotation = planeImage.rotation;

                // Set up animation
                var from, to;
                var numLines = lineSeries.mapLines.length;
                if (direction == 1) {
                    from = 0
                    to = 1;
                    if (planeImage.rotation != 0) {
                        planeImage.animate({ to: 0, property: "rotation" }, 1000).events.on("animationended", flyPlane);
                        return;
                    }
                }
                else {
                    from = 1;
                    to = 0;
                    if (planeImage.rotation != 180) {
                        planeImage.animate({ to: 180, property: "rotation" }, 1000).events.on("animationended", flyPlane);
                        return;
                    }
                }

                // Start the animation
                var animation = plane.animate({
                    from: from,
                    to: to,
                    property: "position"
                }, 5000, am4core.ease.sinInOut);
                animation.events.on("animationended", flyPlane)
                /*animation.events.on("animationprogress", function(ev) {
                  var progress = Math.abs(ev.progress - 0.5);
                  //console.log(progress);
                  //planeImage.scale += 0.2;
                });*/

                shadowPlane.animate({
                    from: from,
                    to: to,
                    property: "position"
                }, 5000, am4core.ease.sinInOut);

                // Increment line, or reverse the direction
                currentLine += direction;
                if (currentLine < 0) {
                    currentLine = 0;
                    direction = 1;
                }
                else if ((currentLine + 1) > numLines) {
                    currentLine = numLines - 1;
                    direction = -1;
                }

            }

            // Go!
            flyPlane();

        }); // end am4core.ready()
    }

    var _demo3 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create map instance
            chart = am4core.create("kt_amcharts_3", am4maps.MapChart);
            var interfaceColors = new am4core.InterfaceColorSet();

            try {
                chart.geodata = am4geodata_worldLow;
            }
            catch (e) {
                chart.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
            }


            var label = chart.createChild(am4core.Label)
            label.text = "12 months (3/7/2019 data) rolling measles\nincidence per 1'000'000 total population. \n Bullet size uses logarithmic scale.";
            label.fontSize = 12;
            label.align = "left";
            label.valign = "bottom"
            label.fill = am4core.color("#927459");
            label.background = new am4core.RoundedRectangle()
            label.background.cornerRadius(10, 10, 10, 10);
            label.padding(10, 10, 10, 10);
            label.marginLeft = 30;
            label.marginBottom = 30;
            label.background.strokeOpacity = 0.3;
            label.background.stroke = am4core.color("#927459");
            label.background.fill = am4core.color("#f9e3ce");
            label.background.fillOpacity = 0.6;

            var dataSource = chart.createChild(am4core.TextLink)
            dataSource.text = "Data source: WHO";
            dataSource.fontSize = 12;
            dataSource.align = "left";
            dataSource.valign = "top"
            dataSource.url = "https://www.who.int/immunization/monitoring_surveillance/burden/vpd/surveillance_type/active/measles_monthlydata/en/"
            dataSource.urlTarget = "_blank";
            dataSource.fill = am4core.color("#927459");
            dataSource.padding(10, 10, 10, 10);
            dataSource.marginLeft = 30;
            dataSource.marginTop = 30;

            // Set projection
            chart.projection = new am4maps.projections.Orthographic();
            chart.panBehavior = "rotateLongLat";
            chart.padding(20, 20, 20, 20);

            // Add zoom control
            chart.zoomControl = new am4maps.ZoomControl();

            var homeButton = new am4core.Button();
            homeButton.events.on("hit", function () {
                chart.goHome();
            });

            homeButton.icon = new am4core.Sprite();
            homeButton.padding(7, 5, 7, 5);
            homeButton.width = 30;
            homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
            homeButton.marginBottom = 10;
            homeButton.parent = chart.zoomControl;
            homeButton.insertBefore(chart.zoomControl.plusButton);

            chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#bfa58d");
            chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;
            chart.deltaLongitude = 20;
            chart.deltaLatitude = -20;

            // limits vertical rotation
            chart.adapter.add("deltaLatitude", function (delatLatitude) {
                return am4core.math.fitToRange(delatLatitude, -90, 90);
            })

            // Create map polygon series

            var shadowPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
            shadowPolygonSeries.geodata = am4geodata_continentsLow;

            try {
                shadowPolygonSeries.geodata = am4geodata_continentsLow;
            }
            catch (e) {
                shadowPolygonSeries.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
            }

            shadowPolygonSeries.useGeodata = true;
            shadowPolygonSeries.dx = 2;
            shadowPolygonSeries.dy = 2;
            shadowPolygonSeries.mapPolygons.template.fill = am4core.color("#000");
            shadowPolygonSeries.mapPolygons.template.fillOpacity = 0.2;
            shadowPolygonSeries.mapPolygons.template.strokeOpacity = 0;
            shadowPolygonSeries.fillOpacity = 0.1;
            shadowPolygonSeries.fill = am4core.color("#000");


            // Create map polygon series
            var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
            polygonSeries.useGeodata = true;

            polygonSeries.calculateVisualCenter = true;
            polygonSeries.tooltip.background.fillOpacity = 0.2;
            polygonSeries.tooltip.background.cornerRadius = 20;

            var template = polygonSeries.mapPolygons.template;
            template.nonScalingStroke = true;
            template.fill = am4core.color("#f9e3ce");
            template.stroke = am4core.color("#e2c9b0");

            polygonSeries.calculateVisualCenter = true;
            template.propertyFields.id = "id";
            template.tooltipPosition = "fixed";
            template.fillOpacity = 1;

            template.events.on("over", function (event) {
                if (event.target.dummyData) {
                    event.target.dummyData.isHover = true;
                }
            })
            template.events.on("out", function (event) {
                if (event.target.dummyData) {
                    event.target.dummyData.isHover = false;
                }
            })

            var hs = polygonSeries.mapPolygons.template.states.create("hover");
            hs.properties.fillOpacity = 1;
            hs.properties.fill = am4core.color("#deb7ad");


            var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
            graticuleSeries.mapLines.template.stroke = am4core.color("#fff");
            graticuleSeries.fitExtent = false;
            graticuleSeries.mapLines.template.strokeOpacity = 0.2;
            graticuleSeries.mapLines.template.stroke = am4core.color("#fff");


            var measelsSeries = chart.series.push(new am4maps.MapPolygonSeries())
            measelsSeries.tooltip.background.fillOpacity = 0;
            measelsSeries.tooltip.background.cornerRadius = 20;
            measelsSeries.tooltip.autoTextColor = false;
            measelsSeries.tooltip.label.fill = am4core.color("#000");
            measelsSeries.tooltip.dy = -5;

            var measelTemplate = measelsSeries.mapPolygons.template;
            measelTemplate.fill = am4core.color("#bf7569");
            measelTemplate.strokeOpacity = 0;
            measelTemplate.fillOpacity = 0.75;
            measelTemplate.tooltipPosition = "fixed";



            var hs2 = measelsSeries.mapPolygons.template.states.create("hover");
            hs2.properties.fillOpacity = 1;
            hs2.properties.fill = am4core.color("#86240c");

            polygonSeries.events.on("inited", function () {
                polygonSeries.mapPolygons.each(function (mapPolygon) {
                    var count = data[mapPolygon.id];

                    if (count > 0) {
                        var polygon = measelsSeries.mapPolygons.create();
                        polygon.multiPolygon = am4maps.getCircle(mapPolygon.visualLongitude, mapPolygon.visualLatitude, Math.max(0.2, Math.log(count) * Math.LN10 / 10));
                        polygon.tooltipText = mapPolygon.dataItem.dataContext.name + ": " + count;
                        mapPolygon.dummyData = polygon;
                        polygon.events.on("over", function () {
                            mapPolygon.isHover = true;
                        })
                        polygon.events.on("out", function () {
                            mapPolygon.isHover = false;
                        })
                    }
                    else {
                        mapPolygon.tooltipText = mapPolygon.dataItem.dataContext.name + ": no data";
                        mapPolygon.fillOpacity = 0.9;
                    }

                })
            })


            var data = {
                "AL": 504.38,
                "AM": 6.5,
                "AO": 2.98,
                "AR": 0.32,
                "AT": 10.9,
                "AU": 5.02,
                "AZ": 17.38,
                "BA": 24.45,
                "BD": 13.4,
                "BE": 12.06,
                "BF": 93.37,
                "BG": 1.68,
                "BI": 0.95,
                "BJ": 93.36,
                "BR": 49.42,
                "BT": 10.03,
                "BY": 26.16,
                "CA": 0.96,
                "CD": 69.71,
                "CF": 4.57,
                "CG": 19.7,
                "CH": 6.19,
                "CI": 14.1,
                "CL": 1.4,
                "CM": 41.26,
                "CN": 2.6,
                "CO": 4.48,
                "CY": 7.69,
                "CZ": 23.09,
                "DK": 1.58,
                "EE": 9.91,
                "EG": 0.63,
                "ES": 4.96,
                "FI": 3.27,
                "FR": 43.26,
                "GA": 3.03,
                "GB": 14.3,
                "GE": 809.09,
                "GH": 39.78,
                "GM": 2.45,
                "GN": 45.98,
                "GQ": 23.74,
                "GR": 154.42,
                "HR": 5.46,
                "HU": 1.44,
                "ID": 16.87,
                "IE": 17.56,
                "IL": 412.24,
                "IN": 47.85,
                "IQ": 12.96,
                "IR": 1.13,
                "IT": 44.29,
                "JP": 3.27,
                "KE": 16.8,
                "KG": 253.37,
                "KH": 0.44,
                "KM": 1.26,
                "KZ": 116.3,
                "LA": 1.33,
                "LK": 0.53,
                "LR": 692.27,
                "LS": 5.9,
                "LT": 14.44,
                "LU": 6.95,
                "LV": 6.09,
                "MA": 0.2,
                "MD": 83.75,
                "ME": 319.75,
                "MG": 2386.35,
                "MK": 28.83,
                "ML": 48.68,
                "MM": 40.31,
                "MN": 0.66,
                "MR": 14.65,
                "MT": 11.65,
                "MV": 9.35,
                "MX": 0.04,
                "MY": 86.41,
                "MZ": 13.49,
                "NA": 12.9,
                "NE": 80.88,
                "NG": 31.44,
                "NL": 1.47,
                "NO": 2.47,
                "NP": 10.8,
                "NZ": 9.23,
                "PE": 1.29,
                "PK": 159.14,
                "PL": 8.24,
                "PT": 16.68,
                "RO": 63.05,
                "RS": 473.46,
                "RU": 14.24,
                "RW": 5.45,
                "SE": 2.64,
                "SG": 8.18,
                "SI": 3.37,
                "SK": 112.78,
                "SN": 3.37,
                "SO": 8.03,
                "SS": 19.3,
                "TD": 75.63,
                "TG": 34.84,
                "TH": 81.02,
                "TL": 9.46,
                "TN": 7.8,
                "TR": 7.08,
                "UA": 1439.02,
                "UG": 62.55,
                "US": 1.32,
                "UZ": 0.99,
                "VE": 179.55,
                "ZA": 3.09,
                "ZM": 9.82,
                "ZW": 0.06
            }

        }); // end am4core.ready()
    }

    var _demo4 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_frozen);
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create map instance
            chart = am4core.create("kt_amcharts_4", am4maps.MapChart);
            // Set map definition
            chart.geodata = am4geodata_worldTimeZoneAreasHigh;
            // Set projection
            chart.projection = new am4maps.projections.Miller();
            chart.panBehavior = "move";

            var startColor = chart.colors.getIndex(0)
            var middleColor = chart.colors.getIndex(7)
            var endColor = chart.colors.getIndex(14)

            var interfaceColors = new am4core.InterfaceColorSet();

            // Create map polygon series
            var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
            // Make map load polygon (like country names) data from GeoJSON
            polygonSeries.useGeodata = true;
            polygonSeries.calculateVisualCenter = true;

            var polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.fillOpacity = 0.6;
            polygonTemplate.nonScalingStroke = true;
            polygonTemplate.strokeWidth = 1;
            polygonTemplate.stroke = interfaceColors.getFor("background");
            polygonTemplate.strokeOpacity = 1;

            polygonTemplate.adapter.add("fill", function (fill, target) {

                if (target.dataItem.index > 0) {
                    return chart.colors.getIndex(target.dataItem.index);
                }
                return fill;
            })
            /// add country borders
            // Create map polygon series
            
            var countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
            // Make map load polygon (like country names) data from GeoJSON
            countrySeries.useGeodata = true;
            countrySeries.geodata = am4geodata_worldLow;
            
            var countryPolygonTemplate = countrySeries.mapPolygons.template;
            countryPolygonTemplate.fillOpacity = 0;
            countryPolygonTemplate.nonScalingStroke = true;
            countryPolygonTemplate.strokeWidth = 1;
            countryPolygonTemplate.stroke = interfaceColors.getFor("background");
            countryPolygonTemplate.strokeOpacity = 0.3;
            

            // Create map polygon series
            var boundsSeries = chart.series.push(new am4maps.MapPolygonSeries());
            boundsSeries.geodata = am4geodata_worldTimeZonesHigh;
            boundsSeries.useGeodata = true;
            boundsSeries.mapPolygons.template.fill = am4core.color(interfaceColors.getFor("alternativeBackground"));
            boundsSeries.mapPolygons.template.fillOpacity = 0.07;
            boundsSeries.mapPolygons.template.nonScalingStroke = true;
            boundsSeries.mapPolygons.template.strokeWidth = 0.5;
            boundsSeries.mapPolygons.template.strokeOpacity = 1;
            boundsSeries.mapPolygons.template.stroke = interfaceColors.getFor("background");
            boundsSeries.tooltipText = "{id}";


            var hs = polygonTemplate.states.create("hover");
            hs.properties.fillOpacity = 1;

            var bhs = boundsSeries.mapPolygons.template.states.create("hover");
            bhs.properties.fillOpacity = 0.3;


            polygonSeries.mapPolygons.template.events.on("over", function (event) {
                var polygon = boundsSeries.getPolygonById(event.target.dataItem.dataContext.id);
                if (polygon) {
                    polygon.isHover = true;
                }
            })

            polygonSeries.mapPolygons.template.events.on("out", function (event) {
                var polygon = boundsSeries.getPolygonById(event.target.dataItem.dataContext.id);
                if (polygon) {
                    polygon.isHover = false;
                }
            })


            var labelSeries = chart.series.push(new am4maps.MapImageSeries());
            var label = labelSeries.mapImages.template.createChild(am4core.Label);
            label.text = "{id}";
            label.strokeOpacity = 0;
            label.fill = am4core.color("#000000");
            label.horizontalCenter = "middle";
            label.fontSize = 9;
            label.nonScaling = true;


            labelSeries.mapImages.template.adapter.add("longitude", (longitude, target) => {
                target.zIndex = 100000;

                var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
                if (polygon) {
                    return polygon.visualLongitude
                }
                return longitude;
            })

            labelSeries.mapImages.template.adapter.add("latitude", (latitude, target) => {
                var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
                if (polygon) {
                    return polygon.visualLatitude
                }
                return latitude;
            })


            var button = chart.createChild(am4core.SwitchButton);
            button.align = "right";
            button.marginTop = 40;
            button.marginRight = 40;
            button.valign = "top";
            button.leftLabel.text = "Map";
            button.rightLabel.text = "Globe";

            button.events.on("toggled", function () {

                chart.deltaLatitude = 0;
                chart.deltaLongitude = 0;
                chart.deltaGamma = 0;

                if (button.isActive) {
                    chart.projection = new am4maps.projections.Orthographic;
                    chart.panBehavior = "rotateLongLat";
                }
                else {
                    chart.projection = new am4maps.projections.Miller;
                    chart.panBehavior = "move";
                }
            })

            polygonSeries.events.on("datavalidated", function () {
                labelSeries.data = polygonSeries.data;
            })

        }); // end am4core.ready()
    }

    return {
        // Public Functions
        init: function () {
            _demo1();
            _demo2();
            _demo3();
            _demo4();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralAmChartsMaps.init();
});
