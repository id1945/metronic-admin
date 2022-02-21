<!--begin::Search-->
<div
    id="kt_header_search"
    class="d-flex align-items-stretch"

    data-kt-search-keypress="true"
    data-kt-search-min-length="2"
    data-kt-search-enter="enter"
    data-kt-search-layout="menu"

    data-kt-menu-trigger="auto"
    data-kt-menu-overflow="false"
    data-kt-menu-permanent="true"
    data-kt-menu-placement="bottom-end"
   >

    <!--begin::Search toggle-->
    <div class="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
        <div class="btn btn-icon btn-active-light-primary">
            {!! theme()->getSvgIcon("icons/duotune/general/gen021.svg", "svg-icon-1") !!}
        </div>
    </div>
    <!--end::Search toggle-->

    <!--begin::Menu-->
    <div data-kt-search-element="content" class="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">
        <!--begin::Wrapper-->
        <div data-kt-search-element="wrapper">
            {{ theme()->getView('partials/search/partials/_form') }}

            {{ theme()->getView('partials/search/partials/_results') }}

            {{ theme()->getView('partials/search/partials/_main') }}

            {{ theme()->getView('partials/search/partials/_empty') }}
        </div>
        <!--end::Wrapper-->

        {{ theme()->getView('partials/search/partials/_advanced-options') }}

        {{ theme()->getView('partials/search/partials/_preferences') }}
    </div>
    <!--end::Menu-->
</div>
<!--end::Search-->
