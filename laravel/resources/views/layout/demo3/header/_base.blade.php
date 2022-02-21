@php
    $logoFileName = 'logo-demo3-default.svg';

    if (theme()->isDarkMode()) {
        $logoFileName = 'logo-demo3-dark.svg';
    }
@endphp

<!--begin::Header-->
<div
  id="kt_header"
  class="header {{ theme()->printHtmlClasses('header', false) }}" {{ theme()->printHtmlAttributes('header') }}

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

  @if (theme()->getOption('layout', 'header/fixed/tablet-and-mobile') === true && theme()->getOption('layout', 'header/fixed/desktop') === false)
    data-kt-sticky="true"
    data-kt-sticky-name="header"
    data-kt-sticky-offset="{default: '200px', lg: false}"
  @endif
  >

  <!--begin::Container-->
  <div class="{{ theme()->printHtmlClasses('header-container', false) }} d-flex align-items-center justify-content-between" id="kt_header_container">
    {{ theme()->getView('layout/header/_page-title') }}

    <!--begin::Wrapper-->
    <div class="d-flex d-lg-none align-items-center ms-n2 me-2">
      <!--begin::Aside mobile toggle-->
      <div class="btn btn-icon btn-active-icon-primary" id="kt_aside_toggle">
        {!! theme()->getSvgIcon("icons/duotune/abstract/abs015.svg", "svg-icon-1 mt-1") !!}
      </div>
      <!--end::Aside mobile toggle-->

      <!--begin::Logo-->
      <a href="{{ theme()->getPageUrl('index') }}" class="d-flex align-items-center">
        <img alt="Logo" src="{{ asset(theme()->getMediaUrlPath() . 'logos/' . $logoFileName) }}" class="h-20px"/>
      </a>
      <!--end::Logo-->
    </div>
    <!--end::Wrapper-->

    {{ theme()->getView('layout/topbar/_base') }}
  </div>
  <!--end::Container-->
</div>
<!--end::Header-->
