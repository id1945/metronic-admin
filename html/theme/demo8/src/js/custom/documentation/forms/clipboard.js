"use strict";

// Class definition
var KTFormsClipboard = function () {
    // Shared variables
    var clipboard;

    // Private functions
    var example1 = function () {
        // Select elements
        const target = document.getElementById('kt_clipboard_1');
        const button = target.nextElementSibling;

        // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/
        clipboard = new ClipboardJS(button, {
            target: target,
            text: function () {
                return target.value;
            }
        });

        // Success action handler
        clipboard.on('success', function (e) {
            const currentLabel = button.innerHTML;

            // Exit label update when already in progress
            if (button.innerHTML === 'Copied!') {
                return;
            }

            // Update button label
            button.innerHTML = "Copied!";

            // Revert button label after 3 seconds
            setTimeout(function () {
                button.innerHTML = currentLabel;
            }, 3000)
        });
    }

    var example2 = function () {
        // Select elements
        const target = document.getElementById('kt_clipboard_2');
        const button = target.nextElementSibling;

        // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/
        clipboard = new ClipboardJS(button, {
            target: target,
            text: function () {
                return target.innerText;
            }
        });

        // Success action handler
        clipboard.on('success', function (e) {
            const currentLabel = button.innerHTML;

            // Exit label update when already in progress
            if (button.innerHTML === 'Copied!') {
                return;
            }

            // Update button label
            button.innerHTML = "Copied!";

            // Revert button label after 3 seconds
            setTimeout(function () {
                button.innerHTML = currentLabel;
            }, 3000)
        });
    }

    var example3 = function () {
        // Select element
        const target = document.getElementById('kt_clipboard_3');

        // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/
        clipboard = new ClipboardJS(target);

        // Success action handler
        clipboard.on('success', function (e) {
            const currentLabel = target.innerHTML;

            // Exit label update when already in progress
            if (target.innerHTML === 'Copied!') {
                return;
            }

            // Update button label
            target.innerHTML = "Copied!";

            // Revert button label after 3 seconds
            setTimeout(function () {
                target.innerHTML = currentLabel;
            }, 3000)
        });
    }

    var example4 = function () {
        // Select elements
        const target = document.getElementById('kt_clipboard_4');
        const button = target.nextElementSibling;

        // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/
        clipboard = new ClipboardJS(button, {
            target: target,
            text: function () {
                return target.innerHTML;
            }
        });

        // Success action handler
        clipboard.on('success', function (e) {
            var checkIcon = button.querySelector('.bi.bi-check');
            var svgIcon = button.querySelector('.svg-icon');

            // Exit check icon when already showing
            if (checkIcon) {
                return;
            }

            // Create check icon
            checkIcon = document.createElement('i');
            checkIcon.classList.add('bi');
            checkIcon.classList.add('bi-check');
            checkIcon.classList.add('fs-2x');

            // Append check icon
            button.appendChild(checkIcon);

            // Highlight target
            const classes = ['text-success', 'fw-boldest'];
            target.classList.add(...classes);

            // Highlight button
            button.classList.add('btn-success');

            // Hide copy icon
            svgIcon.classList.add('d-none');

            // Revert button label after 3 seconds
            setTimeout(function () {
                // Remove check icon
                svgIcon.classList.remove('d-none');

                // Revert icon
                button.removeChild(checkIcon);

                // Remove target highlight
                target.classList.remove(...classes);

                // Remove button highlight
                button.classList.remove('btn-success');
            }, 3000)
        });
    }

    return {
        // Public Functions
        init: function () {
            example1();
            example2();
            example3();
            example4();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsClipboard.init();
});
