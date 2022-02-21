const gulpConfig = {
	name: 'Metronic',
	desc: "Gulp build config file",
	version: "8.0.25",
	config: {
		debug: false,
		compile: {
			rtl: {
				enabled: false,
				skip: [
					"select2",
					"line-awesome",
					"fontawesome5",
					"nouislider",
					"tinymce",
					"sweetalert2",
				],
			},
			jsMinify: false,
			cssMinify: false,
			jsSourcemaps: false,
			cssSourcemaps: false,
		},
		path: {
			src: "../{demo}/src",
			common_src: "../{demo}/src",
			node_modules: "node_modules",
		},
		dist: ["../{demo}/dist/assets"],
	},
	build: {
		base: {
			src: {
				styles: ["{$config.path.src}/sass/style.scss"],
				scripts: [
					"{$config.path.common_src}/js/components/**/*.js",
					"{$config.path.common_src}/js/layout/**/*.js",
					"{$config.path.src}/js/layout/**/*.js",
				]
			},
			dist: {
				styles: "{$config.dist}/css/style.bundle.css",
				scripts: "{$config.dist}/js/scripts.bundle.js",
			}
		},
		plugins: {
			global: {
				src: {
					mandatory: {
						jquery: {
							scripts: ["{$config.path.node_modules}/jquery/dist/jquery.js"],
						},
						"popper.js": {
							scripts: [
								"{$config.path.node_modules}/@popperjs/core/dist/umd/popper.js",
							],
						},
						bootstrap: {
							scripts: [
								"{$config.path.node_modules}/bootstrap/dist/js/bootstrap.min.js",
							],
						},
						moment: {
							scripts: [
								"{$config.path.node_modules}/moment/min/moment-with-locales.min.js",
							],
						},
						wnumb: {
							scripts: ["{$config.path.node_modules}/wnumb/wNumb.js"],
						},
					},
					optional: {
						select2: {
							styles: [
								"{$config.path.node_modules}/select2/dist/css/select2.css",
							],
							scripts: [
								"{$config.path.node_modules}/select2/dist/js/select2.full.js",
								"{$config.path.common_src}/js/vendors/plugins/select2.init.js",
							],
						},
						flatpickr: {
							styles: [
								"{$config.path.node_modules}/flatpickr/dist/flatpickr.css",
							],
							scripts: [
								"{$config.path.node_modules}/flatpickr/dist/flatpickr.js",
								"{$config.path.common_src}/js/vendors/plugins/flatpickr.init.js",
							],
						},
						formvalidation: {
							styles: [
								"{$config.path.common_src}/plugins/formvalidation/dist/css/formValidation.css",
							],
							scripts: [
								"{$config.path.node_modules}/es6-shim/es6-shim.js",
								"{$config.path.common_src}/plugins/formvalidation/dist/js/FormValidation.full.min.js",
								"{$config.path.common_src}/plugins/formvalidation/dist/js/plugins/Bootstrap5.min.js"
							],
						},
						"bootstrap-maxlength": {
                            "scripts": [
                                "{$config.path.node_modules}/bootstrap-maxlength/src/bootstrap-maxlength.js"
                            ]
                        },
						daterangepicker: {
							styles: [
								"{$config.path.node_modules}/bootstrap-daterangepicker/daterangepicker.css",
							],
							scripts: [
								"{$config.path.node_modules}/bootstrap-daterangepicker/daterangepicker.js",
							],
						},
						inputmask: {
							scripts: [
								"{$config.path.node_modules}/inputmask/dist/inputmask.js",
								"{$config.path.node_modules}/inputmask/dist/bindings/inputmask.binding.js"
							]
						},
						"tiny-slider": {
							styles: [
								"{$config.path.node_modules}/tiny-slider/dist/tiny-slider.css",
							],
							scripts: [
								"{$config.path.node_modules}/tiny-slider/dist/tiny-slider.js",
							],
						},
						nouislider: {
							styles: [
								"{$config.path.node_modules}/nouislider/dist/nouislider.css",
							],
							scripts: [
								"{$config.path.node_modules}/nouislider/dist/nouislider.js",
							],
						},
						autosize: {
							scripts: [
								"{$config.path.node_modules}/autosize/dist/autosize.js",
							],
						},
						clipboard: {
							scripts: [
								"{$config.path.node_modules}/clipboard/dist/clipboard.min.js",
							],
						},
						"bootstrap-multiselectsplitter": {
							scripts: [
								"{$config.path.node_modules}/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.js",
							],
						},
						"smooth-scroll": {
							scripts: [
								"{$config.path.node_modules}/smooth-scroll/dist/smooth-scroll.js",
							],
						},
						dropzone: {
							styles: [
								"{$config.path.node_modules}/dropzone/dist/dropzone.css",
							],
							scripts: [
								"{$config.path.node_modules}/dropzone/dist/dropzone.js",
								"{$config.path.common_src}/js/vendors/plugins/dropzone.init.js",
							],
						},
						quil: {
							styles: ["{$config.path.node_modules}/quill/dist/quill.snow.css"],
							scripts: ["{$config.path.node_modules}/quill/dist/quill.js"],
						},
						tagify: {
							styles: [
								"{$config.path.node_modules}/@yaireo/tagify/dist/tagify.css",
							],
							scripts: [
								"{$config.path.node_modules}/@yaireo/tagify/dist/tagify.polyfills.min.js",
								"{$config.path.node_modules}/@yaireo/tagify/dist/tagify.min.js",
							],
						},
						toastr: {
							styles: ["{$config.path.node_modules}/toastr/build/toastr.css"],
							scripts: ["{$config.path.node_modules}/toastr/toastr.js"],
						},
						apexcharts: {
							styles: [
								"{$config.path.node_modules}/apexcharts/dist/apexcharts.css",
							],
							scripts: [
								"{$config.path.node_modules}/apexcharts/dist/apexcharts.min.js",
							],
						},
						"chart.js": {
							scripts: ["{$config.path.node_modules}/chart.js/dist/chart.js"],
						},
						"countup.js": {
							scripts: [
								"{$config.path.node_modules}/countup.js/dist/countUp.umd.js",
							],
						},
						sweetalert2: {
							styles: [
								"{$config.path.node_modules}/sweetalert2/dist/sweetalert2.css",
							],
							scripts: [
								"{$config.path.node_modules}/es6-promise-polyfill/promise.min.js",
								"{$config.path.node_modules}/sweetalert2/dist/sweetalert2.min.js",
								"{$config.path.common_src}/js/vendors/plugins/sweetalert2.init.js",
							],
						},
						"line-awesome": {
							styles: [
								"{$config.path.node_modules}/line-awesome/dist/line-awesome/css/line-awesome.css",
							],
							fonts: [
								"{$config.path.node_modules}/line-awesome/dist/line-awesome/fonts/**",
							],
						},
						"bootstrap-icons": {
							styles: [
								"{$config.path.node_modules}/bootstrap-icons/font/bootstrap-icons.css",
							],
							fonts: [
								"{$config.path.node_modules}/bootstrap-icons/font/fonts/**",
							],
						},
						"@fortawesome": {
							styles: [
								"{$config.path.node_modules}/@fortawesome/fontawesome-free/css/all.min.css",
							],
							fonts: [
								"{$config.path.node_modules}/@fortawesome/fontawesome-free/webfonts/**",
							],
						},
					},
					override: {
						styles: ["{$config.path.src}/sass/plugins.scss"],
					},
				},
				dist: {
					styles: "{$config.dist}/plugins/global/plugins.bundle.css",
					scripts: "{$config.dist}/plugins/global/plugins.bundle.js",
					images: "{$config.dist}/plugins/global/images",
					fonts: "{$config.dist}/plugins/global/fonts",
				},
			},
			custom: {
				draggable: {
					src: {
						scripts: [
							"{$config.path.node_modules}/@shopify/draggable/lib/draggable.bundle.js",
							"{$config.path.node_modules}/@shopify/draggable/lib/draggable.bundle.legacy.js",
							"{$config.path.node_modules}/@shopify/draggable/lib/draggable.js",
							"{$config.path.node_modules}/@shopify/draggable/lib/sortable.js",
							"{$config.path.node_modules}/@shopify/draggable/lib/droppable.js",
							"{$config.path.node_modules}/@shopify/draggable/lib/swappable.js",
							"{$config.path.node_modules}/@shopify/draggable/lib/plugins.js",
							"{$config.path.node_modules}/@shopify/draggable/lib/plugins/collidable.js",
							"{$config.path.node_modules}/@shopify/draggable/lib/plugins/resize-mirror.js",
							"{$config.path.node_modules}/@shopify/draggable/lib/plugins/snappable.js",
							"{$config.path.node_modules}/@shopify/draggable/lib/plugins/swap-animation.js",
						],
					},
					dist: {
						scripts: "{$config.dist}/plugins/custom/draggable/draggable.bundle.js",
					},
				},
				prismjs: {
					src: {
						styles: [
							"{$config.path.node_modules}/prism-themes/themes/prism-shades-of-purple.css",
						],
						scripts: [
							"{$config.path.node_modules}/prismjs/prism.js",
							"{$config.path.node_modules}/prismjs/components/prism-markup.js",
							"{$config.path.node_modules}/prismjs/components/prism-markup-templating.js",
							"{$config.path.node_modules}/prismjs/components/prism-bash.js",
							"{$config.path.node_modules}/prismjs/components/prism-javascript.js",
							"{$config.path.node_modules}/prismjs/components/prism-scss.js",
							"{$config.path.node_modules}/prismjs/components/prism-css.js",
							"{$config.path.node_modules}/prismjs/components/prism-php.js",
							"{$config.path.node_modules}/prismjs/components/prism-php-extras.js",
							"{$config.path.node_modules}/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js",
							"{$config.path.common_src}/js/vendors/plugins/prism.init.js",
						],
					},
					dist: {
						styles: "{$config.dist}/plugins/custom/prismjs/prismjs.bundle.css",
						scripts: "{$config.dist}/plugins/custom/prismjs/prismjs.bundle.js",
					},
				},
				"datatables.net": {
					src: {
						styles: [
							"{$config.path.node_modules}/datatables.net-bs5/css/dataTables.bootstrap5.css",
							"{$config.path.node_modules}/datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css",
							"{$config.path.node_modules}/datatables.net-colreorder-bs5/css/colReorder.bootstrap5.min.css",
							"{$config.path.node_modules}/datatables.net-fixedcolumns-bs5/css/fixedColumns.bootstrap5.min.css",
							"{$config.path.node_modules}/datatables.net-fixedheader-bs5/css/fixedHeader.bootstrap5.min.css",
							"{$config.path.node_modules}/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css",
							"{$config.path.node_modules}/datatables.net-rowreorder-bs5/css/rowReorder.bootstrap5.min.css",
							"{$config.path.node_modules}/datatables.net-scroller-bs5/css/scroller.bootstrap5.min.css",
							"{$config.path.node_modules}/datatables.net-select-bs5/css/select.bootstrap5.min.css",
							"{$config.path.node_modules}/datatables.net-datetime/dist/dataTables.dateTime.min.css",
						],
						scripts: [
							"{$config.path.node_modules}/datatables.net/js/jquery.dataTables.js",
							"{$config.path.node_modules}/datatables.net-bs5/js/dataTables.bootstrap5.js",
							"{$config.path.common_src}/js/vendors/plugins/datatables.init.js",
							"{$config.path.node_modules}/jszip/dist/jszip.min.js",
							"{$config.path.node_modules}/pdfmake/build/pdfmake.min.js",
							"{$config.path.node_modules}/pdfmake/build/vfs_fonts.js",
							"{$config.path.node_modules}/datatables.net-buttons/js/dataTables.buttons.min.js",
							"{$config.path.node_modules}/datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js",
							"{$config.path.node_modules}/datatables.net-buttons/js/buttons.colVis.js",
							"{$config.path.node_modules}/datatables.net-buttons/js/buttons.flash.js",
							"{$config.path.node_modules}/datatables.net-buttons/js/buttons.html5.js",
							"{$config.path.node_modules}/datatables.net-buttons/js/buttons.print.js",
							"{$config.path.node_modules}/datatables.net-colreorder/js/dataTables.colReorder.min.js",
							"{$config.path.node_modules}/datatables.net-colreorder-bs5/js/colReorder.bootstrap5.js",
							"{$config.path.node_modules}/datatables.net-fixedcolumns/js/dataTables.fixedColumns.min.js",
							"{$config.path.node_modules}/datatables.net-fixedcolumns-bs5/js/fixedColumns.bootstrap5.js",
							"{$config.path.node_modules}/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js",
							"{$config.path.node_modules}/datatables.net-fixedheader-bs5/js/fixedHeader.bootstrap5.js",
							"{$config.path.node_modules}/datatables.net-responsive/js/dataTables.responsive.min.js",
							"{$config.path.node_modules}/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js",
							"{$config.path.node_modules}/datatables.net-rowgroup/js/dataTables.rowGroup.min.js",
							"{$config.path.node_modules}/datatables.net-rowgroup-bs5/js/rowGroup.bootstrap5.js",
							"{$config.path.node_modules}/datatables.net-rowreorder/js/dataTables.rowReorder.min.js",
							"{$config.path.node_modules}/datatables.net-rowreorder-bs5/js/rowReorder.bootstrap5.js",
							"{$config.path.node_modules}/datatables.net-scroller/js/dataTables.scroller.min.js",
							"{$config.path.node_modules}/datatables.net-scroller-bs5/js/dataTables.bootstrap5.js",
							"{$config.path.node_modules}/datatables.net-select/js/dataTables.select.min.js",
							"{$config.path.node_modules}/datatables.net-select-bs5/js/dataTables.bootstrap5.js",
							"{$config.path.node_modules}/datatables.net-datetime/dist/dataTables.dateTime.min.js",
						]
					},
					dist: {
						styles: "{$config.dist}/plugins/custom/datatables/datatables.bundle.css",
						scripts: "{$config.dist}/plugins/custom/datatables/datatables.bundle.js",
					}
				},
				leaflet: {
					src: {
						styles: [
							"{$config.path.node_modules}/leaflet/dist/leaflet.css",
							"{$config.path.node_modules}/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css",
						],
						scripts: [
							"{$config.path.node_modules}/leaflet/dist/leaflet.js",
							"{$config.path.node_modules}/esri-leaflet/dist/esri-leaflet.js",
							"{$config.path.node_modules}/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js",
						],
					},
					dist: {
						styles: "{$config.dist}/plugins/custom/leaflet/leaflet.bundle.css",
						scripts: "{$config.dist}/plugins/custom/leaflet/leaflet.bundle.js",
					}
				},
				fslightbox: {
					src: {
						scripts: [
							"{$config.path.common_src}/plugins/fslightbox/fslightbox.js",
						]
					},
					dist: {
						scripts: "{$config.dist}/plugins/custom/fslightbox/fslightbox.bundle.js",
					}
				},
				typedjs: {
					src: {
						scripts: ["{$config.path.node_modules}/typed.js/lib/typed.js"],
					},
					dist: {
						scripts: "{$config.dist}/plugins/custom/typedjs/typedjs.bundle.js",
					}
				},
				fullcalendar: {
					src: {
						styles: ["{$config.path.node_modules}/fullcalendar/main.min.css"],
						scripts: [
							"{$config.path.node_modules}/fullcalendar/main.js",
							"{$config.path.node_modules}/fullcalendar/locales-all.min.js",
						],
					},
					dist: {
						styles: "{$config.dist}/plugins/custom/fullcalendar/fullcalendar.bundle.css",
						scripts: "{$config.dist}/plugins/custom/fullcalendar/fullcalendar.bundle.js",
					},
				},
				tinymcejs: {
					src: {
						scripts: [
							"{$config.path.node_modules}/tinymce/tinymce.min.js",
							"{$config.path.node_modules}/tinymce/themes/silver/theme.js",
							"{$config.path.node_modules}/tinymce/themes/mobile/theme.js",
                            "{$config.path.node_modules}/tinymce/icons/default/icons.js",
                            "{$config.path.node_modules}/tinymce/plugins/**/plugin.js"
						]
					},
					dist: {
						scripts: "{$config.dist}/plugins/custom/tinymce/tinymce.bundle.js",
					}
				},
				ckeditorclassic: {
					src: {
						scripts: [
							"{$config.path.node_modules}/@ckeditor/ckeditor5-build-classic/build/ckeditor.js"
						]
					},
					dist: {
						scripts: "{$config.dist}/plugins/custom/ckeditor/ckeditor-classic.bundle.js"
					}
				},
				ckeditorinline: {
					src: {
						scripts: [
							"{$config.path.node_modules}/@ckeditor/ckeditor5-build-inline/build/ckeditor.js"
						]
					},
					dist: {
						scripts: "{$config.dist}/plugins/custom/ckeditor/ckeditor-inline.bundle.js"
					}
				},
				ckeditorballoon: {
					src: {
						scripts: [
							"{$config.path.node_modules}/@ckeditor/ckeditor5-build-balloon/build/ckeditor.js"
						]
					},
					dist: {
						scripts: "{$config.dist}/plugins/custom/ckeditor/ckeditor-balloon.bundle.js"
					}
				},
				ckeditorballoonblock: {
					src: {
						scripts: [
							"{$config.path.node_modules}/@ckeditor/ckeditor5-build-balloon-block/build/ckeditor.js"
						]
					},
					dist: {
						scripts: "{$config.dist}/plugins/custom/ckeditor/ckeditor-balloon-block.bundle.js"
					}
				},
				ckeditordecoupleddocument: {
					src: {
						scripts: [
							"{$config.path.node_modules}/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js"
						]
					},
					dist: {
						scripts: "{$config.dist}/plugins/custom/ckeditor/ckeditor-document.bundle.js"
					}
				},
				cropperjs: {
                    src: {
                        styles: [
                            "{$config.path.node_modules}/cropperjs/dist/cropper.css"
                        ],
                        scripts: [
                            "{$config.path.node_modules}/cropperjs/dist/cropper.js"
                        ]
                    },
                    dist: {
                        styles: "{$config.dist}/plugins/custom/cropper/cropper.bundle.css",
                        scripts: "{$config.dist}/plugins/custom/cropper/cropper.bundle.js"
                    }
                },
				jkanban: {
                    src: {
                        styles: [
                            "{$config.path.node_modules}/jkanban/dist/jkanban.min.css"
                        ],
                        scripts: [
                            "{$config.path.node_modules}/jkanban/dist/jkanban.min.js"
                        ]
                    },
                    dist: {
                        styles: "{$config.dist}/plugins/custom/jkanban/jkanban.bundle.css",
                        scripts: "{$config.dist}/plugins/custom/jkanban/jkanban.bundle.js"
                    }
                },
				flot: {
                    src: {
                        scripts: [
                            "{$config.path.node_modules}/flot/dist/es5/jquery.flot.js",
                            "{$config.path.node_modules}/flot/source/jquery.flot.resize.js",
                            "{$config.path.node_modules}/flot/source/jquery.flot.categories.js",
                            "{$config.path.node_modules}/flot/source/jquery.flot.pie.js",
                            "{$config.path.node_modules}/flot/source/jquery.flot.stack.js",
                            "{$config.path.node_modules}/flot/source/jquery.flot.crosshair.js",
                            "{$config.path.node_modules}/flot/source/jquery.flot.axislabels.js"
                        ]
                    },
                    dist: {
                        scripts: "{$config.dist}/plugins/custom/flotcharts/flotcharts.bundle.js"
                    }
                },
				vistimeline: {
					src: {
						styles: [
							"{$config.path.node_modules}/vis-timeline/dist/vis-timeline-graph2d.css",
						],
						scripts: [
							"{$config.path.node_modules}/vis-timeline/standalone/umd/vis-timeline-graph2d.min.js",
							"{$config.path.node_modules}/handlebars/dist/handlebars.min.js",
						],
					},
					dist: {
						styles: "{$config.dist}/plugins/custom/vis-timeline/vis-timeline.bundle.css",
						scripts: "{$config.dist}/plugins/custom/vis-timeline/vis-timeline.bundle.js"
					},
				},
				jstree: {
                    src: {
                        styles: [
                            "{$config.path.node_modules}/jstree/dist/themes/default/style.css"
                        ],
                        scripts: [
                            "{$config.path.node_modules}/jstree/dist/jstree.js"
                        ],
                        images: [
                            "{$config.path.common_src}/media/plugins/jstree/32px.png",
                            "{$config.path.node_modules}/jstree/dist/themes/default/throbber.gif"
                        ]
                    },
                    dist: {
                        styles: "{$config.dist}/plugins/custom/jstree/jstree.bundle.css",
                        scripts: "{$config.dist}/plugins/custom/jstree/jstree.bundle.js",
                        images: "{$config.dist}/plugins/custom/jstree"
                    }
                },
			}
		},
		custom: {
			src: {
				styles: [
					"{$config.path.common_src}/sass/custom/**/*.scss",
					"{$config.path.src}/sass/custom/**/*.scss",
				],
				scripts: [
					"{$config.path.common_src}/js/custom/**/*.js",
					"{$config.path.src}/js/custom/**/*.js",
				],
			},
			dist: {
				styles: "{$config.dist}/css/custom/",
				scripts: "{$config.dist}/js/custom/",
			},
		},
		media: {
			src: {
				media: [
					"{$config.path.common_src}/media/**/*.*",
					"{$config.path.src}/media/**/*.*",
				],
			},
			dist: {
				media: "{$config.dist}/media/",
			},
		},
        misc: {
            src: {
                styles: [
                    "{$config.path.node_modules}/tinymce/skins/**/*.css"
                ]
            },
            dist: {
                styles: "{$config.dist}/plugins/custom/tinymce/skins/",
            }
        }
	}
};

export {
	gulpConfig
};