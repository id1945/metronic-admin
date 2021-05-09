//
// 3rd-Party Plugins JavaScript Includes
//



//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////  Mandatory Plugins Includes(do not remove or change order!)  ////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Jquery - jQuery is a popular and feature-rich JavaScript library. Learn more: https://jquery.com/
window.jQuery = window.$ = require('jquery');

// Bootstrap - The most popular framework uses as the foundation. Learn more: http://getbootstrap.com
require('bootstrap');

// Popper.js - Tooltip & Popover Positioning Engine used by Bootstrap. Learn more: https://popper.js.org
window.Popper = require('popper.js').default;

// Wnumb - Number & Money formatting. Learn more: https://refreshless.com/wnumb/
window.wNumb = require('wnumb');

// Moment - Parse, validate, manipulate, and display dates and times in JavaScript. Learn more: https://momentjs.com/
window.moment = require('moment');

// ES6-Shim - ECMAScript 6 compatibility shims for legacy JS engines.  Learn more: https://github.com/paulmillr/es6-shim
require("es6-shim/es6-shim.min.js");

// Perfect-Scrollbar - Minimalistic but perfect custom scrollbar plugin.  Learn more:  https://github.com/mdbootstrap/perfect-scrollbar
window.PerfectScrollbar = require('perfect-scrollbar/dist/perfect-scrollbar');

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///  Optional Plugins Includes(you can remove or add)  ///////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Sticky-js - A library for sticky elements written in vanilla javascript. Learn more: https://rgalus.github.io/sticky-js/
window.Sticky = require('sticky-js');

// Apexcharts - mBdern charting library that helps developers to create beautiful and interactive visualizations for web pages: https://apexcharts.com/
window.ApexCharts = require('apexcharts/dist/apexcharts.min.js');

// FormValidation - Best premium validation library for JavaScript. Zero dependencies. Learn more: https://formvalidation.io/
window.FormValidation = require("@/src/plugins/formvalidation/dist/js/FormValidation.full.min.js");
window.FormValidation.plugins.Bootstrap = require("@/src/plugins/formvalidation/dist/amd/plugins/Bootstrap.js").default;

// jQuery BlockUI - The jQuery BlockUI Plugin lets you simulate synchronous behavior when using AJAX: http://malsup.com/jquery/block/
require('block-ui/jquery.blockUI.js');

// Tempus Dominus - The Tempus Dominus provides a flexible datetimepicker widget in the Bootstrap style: https://tempusdominus.github.io/bootstrap-4/
require('tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4');
require('@/src/js/vendors/plugins/tempusdominus-bootstrap-4.init.js');

// JQuery Mask Plugin - is a jQuery plugin which create an input mask. An input mask helps the user with the input by ensuring a predefined format: https://igorescobar.github.io/jQuery-Mask-Plugin/
require('jquery-mask-plugin');

// Bootstrap Datepicker - Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style: https://bootstrap-datepicker.readthedocs.io/en/latest/
require('bootstrap-datepicker/dist/js/bootstrap-datepicker.js');
require('@/src/js/vendors/plugins/bootstrap-datepicker.init.js');

// Bootstrap Timepicker - Easily select a time for a text input using your mouse or keyboards arrow keys: https://jdewit.github.io/bootstrap-timepicker/
require('bootstrap-timepicker/js/bootstrap-timepicker.js');
require('@/src/js/vendors/plugins/bootstrap-timepicker.init.js');

// Date Range Picker - A JavaScript component for choosing date ranges, dates and times: https://www.daterangepicker.com/
require('bootstrap-daterangepicker/daterangepicker.js');

// Bootstrap Touchspin - A mobile and touch friendly input spinner component for Bootstrap 3: https://www.virtuosoft.eu/code/bootstrap-touchspin/
require('bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js');

// Bootstrap Maxlength - This plugin integrates by default with Twitter bootstrap using badges to display the maximum length of the field where the user is inserting text: https://github.com/mimo84/bootstrap-maxlength
require('bootstrap-maxlength/src/bootstrap-maxlength.js');
require('@/src/plugins/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.min.js');

// Bootstrap Select - The jQuery plugin that brings select elements into the 21st century with intuitive multiselection, searching, and much more: https://developer.snapappointments.com/bootstrap-select/
require('bootstrap-select/dist/js/bootstrap-select.js');

// Bootstrap Switch - Bootstrap switch/toggle is a simple component used for activating one of two predefined options: https://mdbootstrap.com/docs/jquery/forms/switch/
require('bootstrap-switch/dist/js/bootstrap-switch.js');
require('@/src/js/vendors/plugins/bootstrap-switch.init.js');

// Select2 - Select2 is a jQuery based replacement for select boxes: https://select2.org/
require('select2/dist/js/select2.full.js');

// Ion Rangeslider - Is an easy, flexible and responsive range slider with tons of options: http://ionden.com/a/plugins/ion.rangeSlider/
require('ion-rangeslider/js/ion.rangeSlider.js');

// Typeahead.js - a flexible JavaScript library that provides a strong foundation for building robust typeaheads: https://twitter.github.io/typeahead.js/
window.Bloodhound = require('typeahead.js/dist/typeahead.bundle.js');

// Handlebars - provides the power necessary to let you build semantic templates effectively with no frustration. Mustache-compatible: https://handlebarsjs.com/
window.Handlebars = require('handlebars/dist/handlebars.js');

// Inputmask - is a javascript library which creates an input mask: https://github.com/RobinHerbots/Inputmask
require('inputmask/dist/jquery.inputmask.js');

// noUiSlider - is a lightweight range slider with multi-touch support and a ton of features. It supports non-linear ranges, requires no external dependencies: https://refreshless.com/nouislider/
window.noUiSlider = require('nouislider/distribute/nouislider.js');

// Owl Carousel - Touch enabled jQuery plugin that lets you create a beautiful responsive carousel slider: https://owlcarousel2.github.io/OwlCarousel2/
require('owl.carousel/dist/owl.carousel');

// The autosize - function accepts a single textarea element, or an array or array-like object (such as a NodeList or jQuery collection) of textarea elements: https://www.jacklmoore.com/autosize/
window.autosize = require('autosize/dist/autosize.js');

// Clipboard - Copy text to the clipboard shouldn't be hard. It shouldn't require dozens of steps to configure or hundreds of KBs to load: https://clipboardjs.com/
window.ClipboardJS = require('clipboard/dist/clipboard.min.js');

// DropzoneJS -  is an open source library that provides drag'n'drop file uploads with image previews: https://www.dropzonejs.com/
window.Dropzone = require('dropzone/dist/dropzone.js');
require('@/src/js/vendors/plugins/dropzone.init.js');

// Quill - is a free, open source WYSIWYG editor built for the modern web. Completely customize it for any need with its modular architecture and expressive API: https://quilljs.com/
window.Quill = require('quill/dist/quill.js');

// Tagify - Transforms an input field or a textarea into a Tags component, in an easy, customizable way, with great performance and small code footprint, exploded with features: https://github.com/yairEO/tagify
require('@yaireo/tagify/dist/tagify.polyfills.min');
window.Tagify = require('@yaireo/tagify/dist/tagify.min');

// Summernote - Super Simple WYSIWYG Editor on Bootstrap Summernote is a JavaScript library that helps you create WYSIWYG editors online: https://summernote.org/
require('summernote/dist/summernote.js');

// Markdown - A Markdown parser for javascript: https://github.com/evilstreak/markdown-js
require('markdown/lib/markdown.js');

// Bootstrap Markdown - Bootstrap plugin for markdown editing: https://github.com/toopay/bootstrap-markdown
require('bootstrap-markdown/js/bootstrap-markdown.js');
require('@/src/js/vendors/plugins/bootstrap-markdown.init.js');

// Bootstrap Notify - This plugin helps to turn standard bootstrap alerts into "growl" like notifications: http://bootstrap-notify.remabledesigns.com/
require('bootstrap-notify/bootstrap-notify.min.js');
require('@/src/js/vendors/plugins/bootstrap-notify.init.js');

// Toastr - is a Javascript library for non-blocking notifications. jQuery is required. The goal is to create a simple core library that can be customized and extended: https://github.com/CodeSeven/toastr
window.toastr = require('toastr/build/toastr.min.js');

// Dual Listbox - Make your multi select pretty and easy to use with only javascript: https://github.com/maykinmedia/dual-listbox
window.DualListbox = require('dual-listbox').default;

// Bootstrap Session Timeout - Session timeout and keep-alive control with a nice Bootstrap warning dialog: https://github.com/orangehill/bootstrap-session-timeout
window.sessionTimeout = require('@/src/plugins/bootstrap-session-timeout/dist/bootstrap-session-timeout.min.js');

// JQuery Idletimer - provides you a way to monitor user activity with a page: https://github.com/thorst/jquery-idletimer
require('@/src/plugins/jquery-idletimer/idle-timer.min.js');

// Waypoints - is the easiest way to trigger a function when you scroll to an element: http://imakewebthings.com/waypoints/
require('waypoints/lib/jquery.waypoints.js');

// Counter-Up - is a jQuery plugin that animates a number from zero (counting up towards it). It supports counting up: https://github.com/bfintal/Counter-Up
require('counterup/jquery.counterup.js');

// ES6 Promise Polyfill - This is a polyfill of the ES6 Promise: https://github.com/lahmatiy/es6-promise-polyfill
require('es6-promise-polyfill/promise.min.js');

// Sweetalert2 - a beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes: https://sweetalert2.github.io/
window.Swal = window.swal = require('sweetalert2/dist/sweetalert2.min.js');
require('@/src/js/vendors/plugins/sweetalert2.init.js');

// JQuery Repeater - Create a repeatable group of input elements: https://github.com/DubFriend/jquery.repeater
require('jquery.repeater');
