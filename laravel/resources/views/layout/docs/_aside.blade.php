@php
    if (theme()->isDarkModeEnabled()) {
        if (theme()->getCurrentMode() === 'dark') {
            $logoPath = theme()->getOption('layout', 'docs/logo-path/dark');
        } else {
            $logoPath = theme()->getOption('layout', 'docs/logo-path/default');
        }
    } else {
        $logoPath = theme()->getOption('layout', 'docs/logo-path/default');
    }
@endphp

<!--begin::Aside-->
<div
    id="kt_docs_aside"
    class="docs-aside"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_docs_aside_toggle">

    <!--begin::Logo-->
    <div class="docs-aside-logo flex-column-auto h-75px" id="kt_docs_aside_logo">
        <!--begin::Link-->
        <a href="{{ theme()->getPageUrl('index') }}">
            <img alt="Logo" src="{{ asset(theme()->getMediaUrlPath() . $logoPath) }}" class="{{ theme()->getOption('layout', 'docs/logo-class') }}"/>
        </a>
        <!--end::Link-->
    </div>
    <!--end::Logo-->

    <!--begin::Menu-->
    <div class="docs-aside-menu flex-column-fluid">
        @include('layout/docs/_menu')
    </div>
    <!--end::Menu-->
</div>
<!--end::Aside-->
