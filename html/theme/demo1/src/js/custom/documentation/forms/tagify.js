"use strict";

// Class definition
var KTFormsTagifyDemos = function () {
    // Private functions
    var example1 = function (element) {
        // The DOM elements you wish to replace with Tagify
        var input1 = document.querySelector("#kt_tagify_1");
        var input2 = document.querySelector("#kt_tagify_2");

        // Initialize Tagify components on the above inputs
        new Tagify(input1, {
            placeholder: "Type something"
        });
        new Tagify(input2, {
            placeholder: "Type something"
        });
    }

    var example2 = function (element) {
        // The DOM elements you wish to replace with Tagify
        var input1 = document.querySelector("#kt_tagify_3");
        var input2 = document.querySelector("#kt_tagify_4");
        var input3 = document.querySelector("#kt_tagify_5");

        // Initialize Tagify components on the above inputs
        new Tagify(input1);
        new Tagify(input2);
        new Tagify(input3);
    }

    var example3 = function (element) {
        // The DOM elements you wish to replace with Tagify
        var input1 = document.querySelector("#kt_tagify_6");
        var input2 = document.querySelector("#kt_tagify_7");

        // Initialize Tagify components on the above inputs
        new Tagify(input1, {
            whitelist: ["A# .NET", "A# (Axiom)", "A-0 System", "A+", "A++", "ABAP", "ABC", "ABC ALGOL", "ABSET", "ABSYS", "ACC", "Accent", "Ace DASL", "ACL2", "Avicsoft", "ACT-III", "Action!", "ActionScript", "Ada", "Adenine", "Agda", "Agilent VEE", "Agora", "AIMMS", "Alef", "ALF", "ALGOL 58", "ALGOL 60", "ALGOL 68", "ALGOL W", "Alice", "Alma-0", "AmbientTalk", "Amiga E", "AMOS", "AMPL", "Apex (Salesforce.com)", "APL", "AppleScript", "Arc", "ARexx", "Argus", "AspectJ", "Assembly language", "ATS", "Ateji PX", "AutoHotkey", "Autocoder", "AutoIt", "AutoLISP / Visual LISP", "Averest", "AWK", "Axum", "Active Server Pages", "ASP.NET", "B", "Babbage", "Bash", "BASIC", "bc", "BCPL", "BeanShell", "Batch (Windows/Dos)", "Bertrand", "BETA", "Bigwig", "Bistro", "BitC", "BLISS", "Blockly", "BlooP", "Blue", "Boo", "Boomerang", "Bourne shell (including bash and ksh)", "BREW", "BPEL", "B", "C--", "C++ – ISO/IEC 14882", "C# – ISO/IEC 23270", "C/AL", "Caché ObjectScript", "C Shell", "Caml", "Cayenne", "CDuce", "Cecil", "Cesil", "Céu", "Ceylon", "CFEngine", "CFML", "Cg", "Ch", "Chapel", "Charity", "Charm", "Chef", "CHILL", "CHIP-8", "chomski", "ChucK", "CICS", "Cilk", "Citrine (programming language)", "CL (IBM)", "Claire", "Clarion", "Clean", "Clipper", "CLIPS", "CLIST", "Clojure", "CLU", "CMS-2", "COBOL – ISO/IEC 1989", "CobolScript – COBOL Scripting language", "Cobra", "CODE", "CoffeeScript", "ColdFusion", "COMAL", "Combined Programming Language (CPL)", "COMIT", "Common Intermediate Language (CIL)", "Common Lisp (also known as CL)", "COMPASS", "Component Pascal", "Constraint Handling Rules (CHR)", "COMTRAN", "Converge", "Cool", "Coq", "Coral 66", "Corn", "CorVision", "COWSEL", "CPL", "CPL", "Cryptol", "csh", "Csound", "CSP", "CUDA", "Curl", "Curry", "Cybil", "Cyclone", "Cython", "Java", "Javascript", "M2001", "M4", "M#", "Machine code", "MAD (Michigan Algorithm Decoder)", "MAD/I", "Magik", "Magma", "make", "Maple", "MAPPER now part of BIS", "MARK-IV now VISION:BUILDER", "Mary", "MASM Microsoft Assembly x86", "MATH-MATIC", "Mathematica", "MATLAB", "Maxima (see also Macsyma)", "Max (Max Msp – Graphical Programming Environment)", "Maya (MEL)", "MDL", "Mercury", "Mesa", "Metafont", "Microcode", "MicroScript", "MIIS", "Milk (programming language)", "MIMIC", "Mirah", "Miranda", "MIVA Script", "ML", "Model 204", "Modelica", "Modula", "Modula-2", "Modula-3", "Mohol", "MOO", "Mortran", "Mouse", "MPD", "Mathcad", "MSIL – deprecated name for CIL", "MSL", "MUMPS", "Mystic Programming L"],
            maxTags: 10,
            dropdown: {
                maxItems: 20,           // <- mixumum allowed rendered suggestions
                classname: "tagify__inline__suggestions", // <- custom classname for this dropdown, so it could be targeted
                enabled: 0,             // <- show suggestions on focus
                closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
            }
        });

        new Tagify(input2, {
            whitelist: ["A# .NET", "A# (Axiom)", "A-0 System", "A+", "A++", "ABAP", "ABC", "ABC ALGOL", "ABSET", "ABSYS", "ACC", "Accent", "Ace DASL", "ACL2", "Avicsoft", "ACT-III", "Action!", "ActionScript", "Ada", "Adenine", "Agda", "Agilent VEE", "Agora", "AIMMS", "Alef", "ALF", "ALGOL 58", "ALGOL 60", "ALGOL 68", "ALGOL W", "Alice", "Alma-0", "AmbientTalk", "Amiga E", "AMOS", "AMPL", "Apex (Salesforce.com)", "APL", "AppleScript", "Arc", "ARexx", "Argus", "AspectJ", "Assembly language", "ATS", "Ateji PX", "AutoHotkey", "Autocoder", "AutoIt", "AutoLISP / Visual LISP", "Averest", "AWK", "Axum", "Active Server Pages", "ASP.NET", "B", "Babbage", "Bash", "BASIC", "bc", "BCPL", "BeanShell", "Batch (Windows/Dos)", "Bertrand", "BETA", "Bigwig", "Bistro", "BitC", "BLISS", "Blockly", "BlooP", "Blue", "Boo", "Boomerang", "Bourne shell (including bash and ksh)", "BREW", "BPEL", "B", "C--", "C++ – ISO/IEC 14882", "C# – ISO/IEC 23270", "C/AL", "Caché ObjectScript", "C Shell", "Caml", "Cayenne", "CDuce", "Cecil", "Cesil", "Céu", "Ceylon", "CFEngine", "CFML", "Cg", "Ch", "Chapel", "Charity", "Charm", "Chef", "CHILL", "CHIP-8", "chomski", "ChucK", "CICS", "Cilk", "Citrine (programming language)", "CL (IBM)", "Claire", "Clarion", "Clean", "Clipper", "CLIPS", "CLIST", "Clojure", "CLU", "CMS-2", "COBOL – ISO/IEC 1989", "CobolScript – COBOL Scripting language", "Cobra", "CODE", "CoffeeScript", "ColdFusion", "COMAL", "Combined Programming Language (CPL)", "COMIT", "Common Intermediate Language (CIL)", "Common Lisp (also known as CL)", "COMPASS", "Component Pascal", "Constraint Handling Rules (CHR)", "COMTRAN", "Converge", "Cool", "Coq", "Coral 66", "Corn", "CorVision", "COWSEL", "CPL", "CPL", "Cryptol", "csh", "Csound", "CSP", "CUDA", "Curl", "Curry", "Cybil", "Cyclone", "Cython", "Java", "Javascript", "M2001", "M4", "M#", "Machine code", "MAD (Michigan Algorithm Decoder)", "MAD/I", "Magik", "Magma", "make", "Maple", "MAPPER now part of BIS", "MARK-IV now VISION:BUILDER", "Mary", "MASM Microsoft Assembly x86", "MATH-MATIC", "Mathematica", "MATLAB", "Maxima (see also Macsyma)", "Max (Max Msp – Graphical Programming Environment)", "Maya (MEL)", "MDL", "Mercury", "Mesa", "Metafont", "Microcode", "MicroScript", "MIIS", "Milk (programming language)", "MIMIC", "Mirah", "Miranda", "MIVA Script", "ML", "Model 204", "Modelica", "Modula", "Modula-2", "Modula-3", "Mohol", "MOO", "Mortran", "Mouse", "MPD", "Mathcad", "MSIL – deprecated name for CIL", "MSL", "MUMPS", "Mystic Programming L"],
            maxTags: 10,
            dropdown: {
                maxItems: 20,           // <- mixumum allowed rendered suggestions
                classname: "", // <- custom classname for this dropdown, so it could be targeted
                enabled: 0,             // <- show suggestions on focus
                closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
            }
        });
    }

    var example4 = function (element) {
        // The DOM elements you wish to replace with Tagify
        var input1 = document.querySelector("#kt_tagify_8");

        // Initialize Tagify components on the above inputs
        new Tagify(input1);
    }

    const exampleCountry = () => {
        var tagify = new Tagify(document.querySelector('#kt_tagify_country'), {
            delimiters: null,
            templates: {
                tag: function (tagData) {
                    const countryPath = hostUrl + 'media/flags/' + tagData.value.toLowerCase().replace(/\s+/g, '-') + '.svg';
                    try {
                        // _ESCAPE_START_
                        return `<tag title='${tagData.value}' contenteditable='false' spellcheck="false" class='tagify__tag ${tagData.class ? tagData.class : ""}' ${this.getAttributes(tagData)}>
                                <x title='remove tag' class='tagify__tag__removeBtn'></x>
                                <div class="d-flex align-items-center">
                                    ${tagData.code ?
                                `<img onerror="this.style.visibility = 'hidden'" class="w-25px rounded-circle me-2" src='${countryPath}' />` : ''
                            }
                                    <span class='tagify__tag-text'>${tagData.value}</span>
                                </div>
                            </tag>`
                        // _ESCAPE_END_
                    }
                    catch (err) { }
                },

                dropdownItem: function (tagData) {
                    const countryPath = hostUrl + 'media/flags/' + tagData.value.toLowerCase().replace(/\s+/g, '-') + '.svg';
                    try {
                        // _ESCAPE_START_
                        return `<div class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}'>
                                    <img onerror="this.style.visibility = 'hidden'" class="w-25px rounded-circle me-2"
                                         src='${countryPath}' />
                                    <span>${tagData.value}</span>
                                </div>`
                        // _ESCAPE_END_
                    }
                    catch (err) { }
                }
            },
            enforceWhitelist: true,
            whitelist: [
                { value: 'Argentina', code: 'AR' },
                { value: 'Australia', code: 'AU', searchBy: 'beach, sub-tropical' },
                { value: 'Austria', code: 'AT' },
                { value: 'Brazil', code: 'BR' },
                { value: 'China', code: 'CN' },
                { value: 'Egypt', code: 'EG' },
                { value: 'Finland', code: 'FI' },
                { value: 'France', code: 'FR' },
                { value: 'Germany', code: 'DE' },
                { value: 'Hong Kong', code: 'HK' },
                { value: 'Hungary', code: 'HU' },
                { value: 'Iceland', code: 'IS' },
                { value: 'India', code: 'IN' },
                { value: 'Indonesia', code: 'ID' },
                { value: 'Italy', code: 'IT' },
                { value: 'Jamaica', code: 'JM' },
                { value: 'Japan', code: 'JP' },
                { value: 'Jersey', code: 'JE' },
                { value: 'Luxembourg', code: 'LU' },
                { value: 'Mexico', code: 'MX' },
                { value: 'Netherlands', code: 'NL' },
                { value: 'New Zealand', code: 'NZ' },
                { value: 'Norway', code: 'NO' },
                { value: 'Philippines', code: 'PH' },
                { value: 'Singapore', code: 'SG' },
                { value: 'South Korea', code: 'KR' },
                { value: 'Sweden', code: 'SE' },
                { value: 'Switzerland', code: 'CH' },
                { value: 'Thailand', code: 'TH' },
                { value: 'Ukraine', code: 'UA' },
                { value: 'United Kingdom', code: 'GB' },
                { value: 'United States', code: 'US' },
                { value: 'Vietnam', code: 'VN' }
            ],
            dropdown: {
                enabled: 1, // suggest tags after a single character input
                classname: 'extra-properties' // custom class for the suggestions dropdown
            } // map tags' values to this property name, so this property will be the actual value and not the printed value on the screen
        })

        // add the first 2 tags and makes them readonly
        var tagsToAdd = tagify.settings.whitelist.slice(0, 2);
        tagify.addTags(tagsToAdd);
    }

    const exampleUsers = () => {
        var inputElm = document.querySelector('#kt_tagify_users');

        const usersList = [
            { value: 1, name: 'Emma Smith', avatar: 'avatars/150-1.jpg', email: 'e.smith@kpmg.com.au' },
            { value: 2, name: 'Max Smith', avatar: 'avatars/150-26.jpg', email: 'max@kt.com' },
            { value: 3, name: 'Sean Bean', avatar: 'avatars/150-4.jpg', email: 'sean@dellito.com' },
            { value: 4, name: 'Brian Cox', avatar: 'avatars/150-15.jpg', email: 'brian@exchange.com' },
            { value: 5, name: 'Francis Mitcham', avatar: 'avatars/150-8.jpg', email: 'f.mitcham@kpmg.com.au' },
            { value: 6, name: 'Dan Wilson', avatar: 'avatars/150-6.jpg', email: 'dam@consilting.com' },
            { value: 7, name: 'Ana Crown', avatar: 'avatars/150-7.jpg', email: 'ana.cf@limtel.com' },
            { value: 8, name: 'John Miller', avatar: 'avatars/150-17.jpg', email: 'miller@mapple.com' }
        ];

        function tagTemplate(tagData) {
            return `
                <tag title="${(tagData.title || tagData.email)}"
                        contenteditable='false'
                        spellcheck='false'
                        tabIndex="-1"
                        class="${this.settings.classNames.tag} ${tagData.class ? tagData.class : ""}"
                        ${this.getAttributes(tagData)}>
                    <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
                    <div class="d-flex align-items-center">
                        <div class='tagify__tag__avatar-wrap ps-0'>
                            <img onerror="this.style.visibility='hidden'" class="rounded-circle w-25px me-2" src="${hostUrl}media/${tagData.avatar}">
                        </div>
                        <span class='tagify__tag-text'>${tagData.name}</span>
                    </div>
                </tag>
            `
        }

        function suggestionItemTemplate(tagData) {
            return `
                <div ${this.getAttributes(tagData)}
                    class='tagify__dropdown__item d-flex align-items-center ${tagData.class ? tagData.class : ""}'
                    tabindex="0"
                    role="option">

                    ${tagData.avatar ? `
                            <div class='tagify__dropdown__item__avatar-wrap me-2'>
                                <img onerror="this.style.visibility='hidden'"  class="rounded-circle w-50px me-2" src="${hostUrl}media/${tagData.avatar}">
                            </div>` : ''
                        }

                    <div class="d-flex flex-column">
                        <strong>${tagData.name}</strong>
                        <span>${tagData.email}</span>
                    </div>
                </div>
            `
        }

        // initialize Tagify on the above input node reference
        var tagify = new Tagify(inputElm, {
            tagTextProp: 'name', // very important since a custom template is used with this property as text. allows typing a "value" or a "name" to match input with whitelist
            enforceWhitelist: true,
            skipInvalid: true, // do not remporarily add invalid tags
            dropdown: {
                closeOnSelect: false,
                enabled: 0,
                classname: 'users-list',
                searchKeys: ['name', 'email']  // very important to set by which keys to search for suggesttions when typing
            },
            templates: {
                tag: tagTemplate,
                dropdownItem: suggestionItemTemplate
            },
            whitelist: usersList
        })

        tagify.on('dropdown:show dropdown:updated', onDropdownShow)
        tagify.on('dropdown:select', onSelectSuggestion)

        var addAllSuggestionsElm;

        function onDropdownShow(e) {
            var dropdownContentElm = e.detail.tagify.DOM.dropdown.content;

            if (tagify.suggestedListItems.length > 1) {
                addAllSuggestionsElm = getAddAllSuggestionsElm();

                // insert "addAllSuggestionsElm" as the first element in the suggestions list
                dropdownContentElm.insertBefore(addAllSuggestionsElm, dropdownContentElm.firstChild)
            }
        }

        function onSelectSuggestion(e) {
            if (e.detail.elm == addAllSuggestionsElm)
                tagify.dropdown.selectAll.call(tagify);
        }

        // create a "add all" custom suggestion element every time the dropdown changes
        function getAddAllSuggestionsElm() {
            // suggestions items should be based on "dropdownItem" template
            return tagify.parseTemplate('dropdownItem', [{
                class: "addAll",
                name: "Add all",
                email: tagify.settings.whitelist.reduce(function (remainingSuggestions, item) {
                    return tagify.isTagDuplicate(item.value) ? remainingSuggestions : remainingSuggestions + 1
                }, 0) + " Members"
            }]
            )
        }
    }

    return {
        // Public Functions
        init: function () {
            example1();
            example2();
            example3();
            example4();
            exampleCountry();
            exampleUsers();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsTagifyDemos.init();
});
