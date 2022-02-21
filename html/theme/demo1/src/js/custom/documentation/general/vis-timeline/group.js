"use strict";

// Class definition
var KTVisTimelineGroup = function () {
    // Private functions
    var exampleGroup = function () {
        var now = Date.now();

        var options = {
            stack: true,
            maxHeight: 640,
            horizontalScroll: false,
            verticalScroll: true,
            zoomKey: "ctrlKey",
            start: Date.now() - 1000 * 60 * 60 * 24 * 3, // minus 3 days
            end: Date.now() + 1000 * 60 * 60 * 24 * 21, // plus 1 months aprox.
            orientation: {
                axis: "both",
                item: "top",
            },
        };
        var groups = new vis.DataSet();
        var items = new vis.DataSet();

        var count = 300;

        for (var i = 0; i < count; i++) {
            var start = now + 1000 * 60 * 60 * 24 * (i + Math.floor(Math.random() * 7));
            var end = start + 1000 * 60 * 60 * 24 * (1 + Math.floor(Math.random() * 5));

            groups.add({
                id: i,
                content: "Task " + i,
                order: i,
            });

            items.add({
                id: i,
                group: i,
                start: start,
                end: end,
                type: "range",
                content: "Item " + i,
            });
        }

        // create a Timeline
        var container = document.getElementById("kt_docs_vistimeline_group");
        var timeline = new vis.Timeline(container, items, groups, options);
        //timeline = new vis.Timeline(container, null, options);
        timeline.setGroups(groups);
        timeline.setItems(items);

        function debounce(func, wait = 100) {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    func.apply(this, args);
                }, wait);
            };
        }

        let groupFocus = (e) => {
            let vGroups = timeline.getVisibleGroups();
            let vItems = vGroups.reduce((res, groupId) => {
                let group = timeline.itemSet.groups[groupId];
                if (group.items) {
                    res = res.concat(Object.keys(group.items));
                }
                return res;
            }, []);
            timeline.focus(vItems);
        };
        timeline.on("scroll", debounce(groupFocus, 200));
        // Enabling the next line leads to a continuous since calling focus might scroll vertically even if it shouldn't
        // this.timeline.on("scrollSide", debounce(groupFocus, 200))        

        // Handle button click
        const button = document.getElementById('kt_docs_vistimeline_group_button');
        button.addEventListener('click', e => {
            e.preventDefault();

            var a = timeline.getVisibleGroups();
            document.getElementById("visibleGroupsContainer").innerHTML = "";
            document.getElementById("visibleGroupsContainer").innerHTML += a;
        });
    }

    return {
        // Public Functions
        init: function () {
            exampleGroup();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTVisTimelineGroup.init();
});
