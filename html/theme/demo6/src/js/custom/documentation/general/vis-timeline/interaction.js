"use strict";

// Class definition
var KTVisTimelineInteraction = function () {
    // Private functions
    var exampleInteraction = function () {
        // create a dataset with items
        // we specify the type of the fields `start` and `end` here to be strings
        // containing an ISO date. The fields will be outputted as ISO dates
        // automatically getting data from the DataSet via items.get().
        var items = new vis.DataSet({
            type: { start: "ISODate", end: "ISODate" },
        });

        // add items to the DataSet
        items.add([
            { id: 1, content: "item 1<br>start", start: "2021-01-23" },
            { id: 2, content: "item 2", start: "2021-01-18" },
            { id: 3, content: "item 3", start: "2021-01-21" },
            { id: 4, content: "item 4", start: "2021-01-19", end: "2021-01-24" },
            { id: 5, content: "item 5", start: "2021-01-28", type: "point" },
            { id: 6, content: "item 6", start: "2021-01-26" },
        ]);

        var container = document.getElementById("kt_docs_vistimeline_interaction");
        var options = {
            start: "2021-01-10",
            end: "2021-02-10",
            editable: true,
            showCurrentTime: true,
        };

        var timeline = new vis.Timeline(container, items, options);

        // Handle buttons
        document.getElementById("window1").onclick = function () {
            timeline.setWindow("2021-01-01", "2021-04-01");
        };
        document.getElementById("fit").onclick = function () {
            timeline.fit();
        };
        document.getElementById("select").onclick = function () {
            timeline.setSelection([5, 6], {
                focus: true,
            });
        };
        document.getElementById("focus1").onclick = function () {
            timeline.focus(2);
        };
        document.getElementById("moveTo").onclick = function () {
            timeline.moveTo("2021-02-01");
        };
    }

    return {
        // Public Functions
        init: function () {
            exampleInteraction();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTVisTimelineInteraction.init();
});
