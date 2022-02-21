@php
    $logoFileName = 'logo-demo3-default.svg';

    if (theme()->isDarkMode()) {
        $logoFileName = 'logo-demo3-dark.svg';
    }
@endphp

<!--begin::Aside-->
<div
	id="kt_aside"
	class="aside py-9 {{ theme()->printHtmlClasses('aside', false) }}"
	data-kt-drawer="true"
	data-kt-drawer-name="aside"
	data-kt-drawer-activate="{default: true, lg: false}"
	data-kt-drawer-overlay="true"
	data-kt-drawer-width="{default:'200px', '300px': '250px'}"
	data-kt-drawer-direction="start"
	data-kt-drawer-toggle="#kt_aside_toggle"
	>

    <!--begin::Brand-->
    <div class="aside-logo flex-column-auto px-9 mb-9" id="kt_aside_logo">
        <!--begin::Logo-->
        <a href="{{ theme()->getPageUrl('index') }}">
            <img alt="Logo" src="{{ asset(theme()->getMediaUrlPath() . 'logos/' . $logoFileName) }}" class="h-20px logo"/>
        </a>
        <!--end::Logo-->
    </div>
    <!--end::Brand-->

    <!--begin::Aside menu-->
	<div class="aside-menu flex-column-fluid ps-5 pe-3 mb-9" id="kt_aside_menu">
        {{ theme()->getView('layout/aside/_menu') }}
    </div>
    <!--end::Aside menu-->

    <!--begin::Footer-->
    <div class="aside-footer flex-column-auto px-9" id="kt_aside_footer">
        <!--begin::User panel-->
        <div class="d-flex flex-stack">
            <!--begin::Wrapper-->
            <div class="d-flex align-items-center">
                <!--begin::Avatar-->
                <div class="symbol symbol-circle symbol-40px">
                    <img src="{{ asset(theme()->getMediaUrlPath() . 'avatars/150-26.jpg') }}" alt="photo"/>
                </div>
                <!--end::Avatar-->

                <!--begin::User info-->
                <div class="ms-2">
                    <!--begin::Name-->
                    <a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bolder lh-1">{{ auth()->user()->name }}</a>
                    <!--end::Name-->

                    <!--begin::Major-->
                    <span class="text-muted fw-bold d-block fs-7 lh-1">Python Dev</span>
                    <!--end::Major-->
                </div>
                <!--end::User info-->
            </div>
            <!--end::Wrapper-->

            <!--begin::User menu-->
            <div class="ms-1">
                <div class="btn btn-sm btn-icon btn-active-color-primary position-relative me-n2" data-kt-menu-trigger="hover" data-kt-menu-placement="top-end">
                    {!! theme()->getSvgIcon("icons/duotune/coding/cod001.svg", "svg-icon-1") !!}
                </div>
                {{ theme()->getView('partials/topbar/_user-menu', array(
                    "language-menu-placement" => "right-end",
                    "language-menu-flip" => "{default: 'top', lg: ''}",
                    "subscription-menu-placement" => "right-end",
                    "subscription-menu-flip" => "{default: 'bottom', lg: ''}"
                )) }}
            </div>
            <!--end::User menu-->
        </div>
        <!--end::User panel-->
    </div>
    <!--end::Footer-->
</div>
<!--end::Aside-->
