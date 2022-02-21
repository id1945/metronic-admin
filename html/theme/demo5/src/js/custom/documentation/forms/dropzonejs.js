"use strict";

// Class definition
var KTFormsDropzoneJSDemos = function() {
    // Private functions
    var exampleBasic = function() {
        // For more info about Dropzone plugin visit:  https://www.dropzonejs.com/#usage
		var myDropzone = new Dropzone("#kt_dropzonejs_example_1", { 
			url: "https://keenthemes.com/scripts/void.php", // Set the url for your upload script location
            paramName: "file", // The name that will be used to transfer the file
            maxFiles: 10,
            maxFilesize: 10, // MB
            addRemoveLinks: true,
            accept: function(file, done) {
                if (file.name == "wow.jpg") {
                    done("Naha, you don't.");
                } else {
                    done();
                }
            }
		});
    }

    var exampleQueue = function() {
        // set the dropzone container id
        var id = "#kt_dropzonejs_example_2";

        // set the preview element template
        var previewNode = $(id + " .dropzone-item");
        previewNode.id = "";
        var previewTemplate = previewNode.parent(".dropzone-items").html();
        previewNode.remove();

        var myDropzone = new Dropzone(id, { // Make the whole body a dropzone
            url: "https://keenthemes.com/scripts/void.php", // Set the url for your upload script location
            parallelUploads: 20,
            previewTemplate: previewTemplate,
            maxFilesize: 1, // Max filesize in MB
            autoQueue: false, // Make sure the files aren't queued until manually added
            previewsContainer: id + " .dropzone-items", // Define the container to display the previews
            clickable: id + " .dropzone-select" // Define the element that should be used as click trigger to select files.
        });

        myDropzone.on("addedfile", function(file) {
            // Hookup the start button
            file.previewElement.querySelector(id + " .dropzone-start").onclick = function() { myDropzone.enqueueFile(file); };
            $(document).find( id + " .dropzone-item").css("display", "");
            $( id + " .dropzone-upload, " + id + " .dropzone-remove-all").css("display", "inline-block");
        });

        // Update the total progress bar
        myDropzone.on("totaluploadprogress", function(progress) {
            $(this).find( id + " .progress-bar").css("width", progress + "%");
        });

        myDropzone.on("sending", function(file) {
            // Show the total progress bar when upload starts
            $( id + " .progress-bar").css("opacity", "1");
            // And disable the start button
            file.previewElement.querySelector(id + " .dropzone-start").setAttribute("disabled", "disabled");
        });

        // Hide the total progress bar when nothing's uploading anymore
        myDropzone.on("complete", function(progress) {
            var thisProgressBar = id + " .dz-complete";

            setTimeout(function(){
                $( thisProgressBar + " .progress-bar, " + thisProgressBar + " .progress, " + thisProgressBar + " .dropzone-start").css("opacity", "0");
            }, 300)

        });

        // Setup the buttons for all transfers
        document.querySelector( id + " .dropzone-upload").onclick = function() {
            myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
        };

        // Setup the button for remove all files
        document.querySelector(id + " .dropzone-remove-all").onclick = function() {
            $( id + " .dropzone-upload, " + id + " .dropzone-remove-all").css("display", "none");
            myDropzone.removeAllFiles(true);
        };

        // On all files completed upload
        myDropzone.on("queuecomplete", function(progress){
            $( id + " .dropzone-upload").css("display", "none");
        });

        // On all files removed
        myDropzone.on("removedfile", function(file){
            if(myDropzone.files.length < 1) {
                $( id + " .dropzone-upload, " + id + " .dropzone-remove-all").css("display", "none");
            }
        });
    }

    var exampleQueueAutoUpload = function() {
        // set the dropzone container id
        var id = "#kt_dropzonejs_example_3";

        // set the preview element template
        var previewNode = $(id + " .dropzone-item");

        previewNode.id = "";
        var previewTemplate = previewNode.parent(".dropzone-items").html();
        previewNode.remove();

        var myDropzone = new Dropzone(id, { // Make the whole body a dropzone
            url: "https://keenthemes.com/scripts/void.php", // Set the url for your upload script location
            parallelUploads: 20,
            maxFilesize: 1, // Max filesize in MB
            previewTemplate: previewTemplate,
            previewsContainer: id + " .dropzone-items", // Define the container to display the previews
            clickable: id + " .dropzone-select" // Define the element that should be used as click trigger to select files.
        });

        
        myDropzone.on("addedfile", function(file) {
            // Hookup the start button
            $(document).find( id + " .dropzone-item").css("display", "");
        });

        // Update the total progress bar
        myDropzone.on("totaluploadprogress", function(progress) {
            $( id + " .progress-bar").css("width", progress + "%");
        });

        myDropzone.on("sending", function(file) {
            // Show the total progress bar when upload starts
            $( id + " .progress-bar").css("opacity", "1");
        });

        // Hide the total progress bar when nothing"s uploading anymore
        myDropzone.on("complete", function(progress) {
            var thisProgressBar = id + " .dz-complete";

            setTimeout(function(){
                $( thisProgressBar + " .progress-bar, " + thisProgressBar + " .progress").css("opacity", "0");
            }, 300)
        });
    }
    
    return {
        // Public Functions
        init: function(element) {
            exampleBasic();
            exampleQueue();
            exampleQueueAutoUpload();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsDropzoneJSDemos.init();
});
