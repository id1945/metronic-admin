<!--begin::Search-->
<div
    id="kt_header_search"
    class="d-flex align-items-center w-125px w-md-150px w-lg-225px"

    data-kt-search-keypress="true"
    data-kt-search-min-length="2"
    data-kt-search-enter="enter"
    data-kt-search-layout="menu"

    data-kt-menu-trigger="auto"
    data-kt-menu-permanent="true"
    data-kt-menu-placement="bottom-end"
   >

    <!--begin::Form-->
    <form data-kt-search-element="form" class="w-100 position-relative" autocomplete="off">
        <!--begin::Hidden input(Added to disable form autocomplete)-->
        <input type="hidden"/>
        <!--end::Hidden input-->

        <!--begin::Icon-->
        {!! theme()->getSvgIcon("icons/duotune/general/gen004.svg", "svg-icon-2 svg-icon-gray-700 position-absolute top-50 translate-middle-y ms-4") !!}
        <!--end::Icon-->

        <!--begin::Input-->
        <input type="text" class="form-control bg-transparent ps-13 fs-7 h-40px" name="search" value="" placeholder="Quick Search" data-kt-search-element="input"/>
        <!--end::Input-->

        <!--begin::Spinner-->
        <span class="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
            <span class="spinner-border h-15px w-15px align-middle text-gray-400"></span>
        </span>
        <!--end::Spinner-->

        <!--begin::Reset-->
        <span class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4" data-kt-search-element="clear">
            {!! theme()->getSvgIcon("icons/duotune/arrows/arr061.svg", "svg-icon-2 svg-icon-lg-1 me-0") !!}
        </span>
        <!--end::Reset-->
    </form>
    <!--end::Form-->

    <!--begin::Menu-->
    <div data-kt-search-element="content" class="menu menu-sub menu-sub-dropdown w-300px w-md-350px py-7 px-7 overflow-hidden">
        <!--begin::Wrapper-->
        <div data-kt-search-element="wrapper">
            {{ theme()->getView('partials/search/partials/_results') }}

            {{ theme()->getView('layout/search/partials/_main') }}

            {{ theme()->getView('partials/search/partials/_empty') }}
        </div>
        <!--end::Wrapper-->

        {{ theme()->getView('partials/search/partials/_advanced-options') }}

        {{ theme()->getView('partials/search/partials/_preferences') }}
    </div>
    <!--end::Menu-->
</div>
<!--end::Search-->
