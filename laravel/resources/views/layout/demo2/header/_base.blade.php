<!--begin::Header-->
<div id="kt_header" class="header {{ theme()->printHtmlClasses('header', false) }} align-items-stretch" {{ theme()->printHtmlAttributes('header') }}
@if (theme()->getOption('layout', 'header/fixed/desktop') === true &&  theme()->getOption('layout', 'header/fixed/tablet-and-mobile') === true)
data-kt-sticky="true"
     data-kt-sticky-name="header"
     data-kt-sticky-offset="{default: '200px', lg: '300px'}"
     @endif

     @if (theme()->getOption('layout', 'header/fixed/desktop') === true && theme()->getOption('layout', 'header/fixed/tablet-and-mobile') === false)
     data-kt-sticky="true"
     data-kt-sticky-name="header"
     data-kt-sticky-offset="{lg: '300px'}"
    @endif
>
    <!--begin::Container-->
    <div class="{{ theme()->printHtmlClasses('header-container', false) }} d-flex align-items-center">
        <!--begin::Heaeder menu toggle-->
        <div class="d-flex topbar align-items-center d-lg-none ms-n2 me-3" title="Show aside menu">
            <div class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
                {!! theme()->getSvgIcon("icons/duotune/abstract/abs015.svg", "svg-icon-2x") !!}
            </div>
        </div>
        <!--end::Heaeder menu toggle-->

        <!--begin::Header Logo-->
        <div class="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
            <a href="{{ theme()->getPageUrl('index') }}">
                <img alt="Logo" src="{{ asset(theme()->getMediaUrlPath() . 'logos/logo-4.png') }}" class="logo-default h-25px"/>
                <img alt="Logo" src="{{ asset(theme()->getMediaUrlPath() . 'logos/logo-5.png') }}" class="logo-sticky h-25px"/>
            </a>
        </div>
        <!--end::Header Logo-->

        <!--begin::Wrapper-->
        <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
            <!--begin::Navbar-->
            <div class="d-flex align-items-stretch" id="kt_header_nav">
                {{ theme()->getView('layout/header/_menu') }}
            </div>
            <!--end::Navbar-->

            <!--begin::Topbar-->
            <div class="d-flex align-items-stretch flex-shrink-0">
                {{ theme()->getView('layout/topbar/_base') }}
            </div>
            <!--end::Topbar-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Container-->
</div>
<!--end::Header-->


