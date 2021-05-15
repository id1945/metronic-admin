/* eslint-disable */
"use strict";

import { KTUtil } from "./../../components/util.js";
import KTLayoutContent from "./../base/content.js";
import { KTCookie } from "./../../components/cookie.js";

// Class definition
var KTLayoutChat = function () {
	// Private functions
	var _init = function (element) {
		var scrollEl = KTUtil.find(element, '.scroll');
		var cardBodyEl = KTUtil.find(element, '.card-body');
		var cardHeaderEl = KTUtil.find(element, '.card-header');
		var cardFooterEl = KTUtil.find(element, '.card-footer');

		if (!scrollEl) {
			return;
		}

		// initialize perfect scrollbar(see:  https://github.com/utatti/perfect-scrollbar)
		KTUtil.scrollInit(scrollEl, {
			windowScroll: false, // allow browser scroll when the scroll reaches the end of the side
			mobileNativeScroll: true,  // enable native scroll for mobile
			desktopNativeScroll: false, // disable native scroll and use custom scroll for desktop
			resetHeightOnDestroy: true,  // reset css height on scroll feature destroyed
			handleWindowResize: true, // recalculate hight on window resize
			rememberPosition: true, // remember scroll position in cookie
			height: function() {  // calculate height
				var height;

				if (KTUtil.isBreakpointDown('lg')) { // Mobile mode
					return KTUtil.hasAttr(scrollEl, 'data-mobile-height') ? parseInt(KTUtil.attr(scrollEl, 'data-mobile-height')) : 400;
				} else if (KTUtil.isBreakpointUp('lg') && KTUtil.hasAttr(scrollEl, 'data-height')) { // Desktop Mode
					return parseInt(KTUtil.attr(scrollEl, 'data-height'));
				} else {
					height = KTLayoutContent.getHeight();

					if (scrollEl) {
						height = height - parseInt(KTUtil.css(scrollEl, 'margin-top')) - parseInt(KTUtil.css(scrollEl, 'margin-bottom'));
					}

					if (cardHeaderEl) {
						height = height - parseInt(KTUtil.css(cardHeaderEl, 'height'));
						height = height - parseInt(KTUtil.css(cardHeaderEl, 'margin-top')) - parseInt(KTUtil.css(cardHeaderEl, 'margin-bottom'));
					}

					if (cardBodyEl) {
						height = height - parseInt(KTUtil.css(cardBodyEl, 'padding-top')) - parseInt(KTUtil.css(cardBodyEl, 'padding-bottom'));
					}

					if (cardFooterEl) {
						height = height - parseInt(KTUtil.css(cardFooterEl, 'height'));
						height = height - parseInt(KTUtil.css(cardFooterEl, 'margin-top')) - parseInt(KTUtil.css(cardFooterEl, 'margin-bottom'));
					}
				}

				// Remove additional space
				height = height - 2;

				return height;
			}
		});

		// attach events
		KTUtil.on(element, '.card-footer textarea', 'keydown', function(e) {
			if (e.keyCode == 13) {
				_handeMessaging(element);
				e.preventDefault();

				return false;
			}
		});

		KTUtil.on(element, '.card-footer .chat-send', 'click', function(e) {
			_handeMessaging(element);
		});
	}

	var _handeMessaging = function(element) {
		var messagesEl = KTUtil.find(element, '.messages');
		var scrollEl = KTUtil.find(element, '.scroll');
        var textarea = KTUtil.find(element, 'textarea');

        if (textarea.value.length === 0 ) {
            return;
        }

		var node = document.createElement("DIV");
		KTUtil.addClass(node, 'd-flex flex-column mb-5 align-items-end');

		var html = '';
		html += '<div class="d-flex align-items-center">';
		html += '	<div>';
		html += '		<span class="text-muted font-size-sm">2 Hours</span>';
		html += '		<a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>';
		html += '	</div>';
		html += '	<div class="symbol symbol-circle symbol-40 ml-3">';
		html += '		<img alt="Pic" src="assets/media/users/300_12.jpg"/>';
		html += '	</div>';
		html += '</div>';
		html += '<div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">' + textarea.value + '</div>';

		KTUtil.setHTML(node, html);
		messagesEl.appendChild(node);
		textarea.value = '';
		scrollEl.scrollTop = parseInt(KTUtil.css(messagesEl, 'height'));

		var ps;
		if (ps = KTUtil.data(scrollEl).get('ps')) {
			ps.update();
		}

		setTimeout(function() {
			var node = document.createElement("DIV");
			KTUtil.addClass(node, 'd-flex flex-column mb-5 align-items-start');

			var html = '';
			html += '<div class="d-flex align-items-center">';
			html += '	<div class="symbol symbol-circle symbol-40 mr-3">';
			html += '		<img alt="Pic" src="assets/media/users/300_12.jpg"/>';
			html += '	</div>';
			html += '	<div>';
			html += '		<a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>';
			html += '		<span class="text-muted font-size-sm">Just now</span>';
			html += '	</div>';
			html += '</div>';
			html += '<div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">';
			html += 'Right before vacation season we have the next Big Deal for you.';
			html += '</div>';

			KTUtil.setHTML(node, html);
			messagesEl.appendChild(node);
			textarea.value = '';
			scrollEl.scrollTop = parseInt(KTUtil.css(messagesEl, 'height'));

			var ps;
			if (ps = KTUtil.data(scrollEl).get('ps')) {
				ps.update();
			}
		}, 2000);
	}

	// Public methods
	return {
		init: function(id) {
			// Init modal chat example
			_init(KTUtil.getById(id));

			// Trigger click to show popup modal chat on page load
			if (encodeURI(window.location.hostname) == 'keenthemes.com' || encodeURI(window.location.hostname) == 'www.keenthemes.com') {
				setTimeout(function() {
		            if (!KTCookie.getCookie('kt_app_chat_shown')) {
		                var expires = new Date(new Date().getTime() + 60 * 60 * 1000); // expire in 60 minutes from now

						KTCookie.setCookie('kt_app_chat_shown', 1, { expires: expires });

						if (KTUtil.getById('kt_app_chat_launch_btn')) {
							KTUtil.getById('kt_app_chat_launch_btn').click();
						}
		            }
		        }, 2000);
	        }
        },

        setup: function(element) {
            _init(element);
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	// module.exports = KTLayoutChat;
}

export default KTLayoutChat;