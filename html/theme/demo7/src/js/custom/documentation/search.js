"use strict";

// Class definition
var KTDocsSearch = function() {
    // Private variables
    var element;
    var formElement;
    var mainElement;
    var resultsElement;
    var wrapperElement;
    var emptyElement;    
    var searchObject;

    // Private functions
    var processs = function(search) {
        var results = 0;

        // Elements
        var searchable = [].slice.call(resultsElement.querySelectorAll('[data-kt-searchable="true"]'));

        // Match elements
        searchable.map(function (element) {  
            var query = searchObject.getQuery();

            if (element.innerText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                element.classList.remove('d-none');
                results++;
            } else {
                element.classList.add('d-none');
            }
        });
        
        // Hide recently viewed
        mainElement.classList.add('d-none');

        if (results === 0) {
            // Hide results
            resultsElement.classList.add('d-none');
            // Show empty message 
            emptyElement.classList.remove('d-none');
        } else {
            // Show results
            resultsElement.classList.remove('d-none');
            // Hide empty message 
            emptyElement.classList.add('d-none');
        }                  

        // Complete search
        search.complete();
    }

    var clear = function(search) {
        // Show recently viewed
        mainElement.classList.remove('d-none');
        // Hide results
        resultsElement.classList.add('d-none');
        // Hide empty message 
        emptyElement.classList.add('d-none');
    }    

    // Public methods
	return {
		init: function() {
            // Elements
            element = document.querySelector('#kt_docs_search');

            if (!element) {
                return;
            }

            wrapperElement = element.querySelector('[data-kt-search-element="wrapper"]');
            formElement = element.querySelector('[data-kt-search-element="form"]');
            mainElement = element.querySelector('[data-kt-search-element="main"]');
            resultsElement = element.querySelector('[data-kt-search-element="results"]');
            emptyElement = element.querySelector('[data-kt-search-element="empty"]');
            
            // Initialize search handler
            searchObject = new KTSearch(element);

            // Search handler
            searchObject.on('kt.search.process', processs);

            // Clear handler
            searchObject.on('kt.search.clear', clear);     
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDocsSearch.init();
});