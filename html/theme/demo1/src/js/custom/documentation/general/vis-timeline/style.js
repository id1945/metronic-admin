"use strict";


// Class definition
var KTVisTimelineStyle = function () {
    // Private functions
    var exampleStyle = function () {
        var container = document.getElementById("kt_docs_vistimeline_style");

        // Generate HTML content
        const getContent = (title, img) => {
            const item = document.createElement('div');
            const name = document.createElement('div');
            const nameClasses = ['fw-bolder', 'mb-2'];
            name.classList.add(...nameClasses);
            name.innerHTML = title;

            const image = document.createElement('img');
            image.setAttribute('src', img);

            const symbol = document.createElement('div');
            const symbolClasses = ['symbol', 'symbol-circle', 'symbol-30'];
            symbol.classList.add(...symbolClasses);
            symbol.appendChild(image);

            item.appendChild(name);
            item.appendChild(symbol);

            return item;
        }

        // note that months are zero-based in the JavaScript Date object
        var items = new vis.DataSet([
            {
                start: new Date(2010, 7, 23),
                content: getContent('Conversation', hostUrl + '/media/avatars/150-1.jpg')
            },
            {
                start: new Date(2010, 7, 23, 23, 0, 0),
                content: getContent('Mail from boss', hostUrl + '/media/avatars/150-2.jpg')
            },
            { start: new Date(2010, 7, 24, 16, 0, 0), content: "Report" },
            {
                start: new Date(2010, 7, 26),
                end: new Date(2010, 8, 2),
                content: "Traject A",
            },
            {
                start: new Date(2010, 7, 28),
                content: getContent('Memo', hostUrl + '/media/avatars/150-3.jpg')
            },
            {
                start: new Date(2010, 7, 29),
                content: getContent('Phone call', hostUrl + '/media/avatars/150-4.jpg')
            },
            {
                start: new Date(2010, 7, 31),
                end: new Date(2010, 8, 3),
                content: "Traject B",
            },
            {
                start: new Date(2010, 8, 4, 12, 0, 0),
                content: getContent('Report', hostUrl + '/media/avatars/150-5.jpg')
            },
        ]);

        var options = {
            editable: true,
            margin: {
                item: 20,
                axis: 40,
            },
        };

        var timeline = new vis.Timeline(container, items, options);
    }

    return {
        // Public Functions
        init: function () {
            exampleStyle();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTVisTimelineStyle.init();
});
