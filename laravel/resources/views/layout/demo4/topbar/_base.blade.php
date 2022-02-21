@php
    $toolbarButtonMarginClass = "ms-1 ms-lg-3";
    $toolbarButtonHeightClass = "w-30px h-30px w-md-40px h-md-40px";
    $toolbarUserAvatarHeightClass = "symbol-30px symbol-md-40px";
    $toolbarButtonIconSizeClass = "svg-icon-1";
@endphp

<!--begin::Toolbar wrapper-->
<div class="d-flex align-items-stretch flex-shrink-0">
    <!--begin::Search-->
    <div class="d-flex align-items-stretch {{ $toolbarButtonMarginClass }}">
        {{ theme()->getView('partials/search/_base') }}
    </div>
    <!--end::Search-->

    <!--begin::Activities-->
    <div class="d-flex align-items-center {{ $toolbarButtonMarginClass }}">
        <!--begin::Drawer toggle-->
        <div class="btn btn-icon btn-active-light-primary {{ $toolbarButtonHeightClass }}" id="kt_activities_toggle">
            {!! theme()->getSvgIcon("icons/duotune/general/gen032.svg", $toolbarButtonIconSizeClass) !!}
        </div>
        <!--end::Drawer toggle-->
    </div>
    <!--end::Activities-->

    <!--begin::Quick links-->
    <div class="d-flex align-items-center {{ $toolbarButtonMarginClass }}">
        <!--begin::Menu wrapper-->
        <div class="btn btn-icon btn-active-light-primary {{ $toolbarButtonHeightClass }}" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
            {!! theme()->getSvgIcon("icons/duotune/general/gen025.svg", $toolbarButtonIconSizeClass) !!}
        </div>

    {{ theme()->getView('partials/topbar/_quick-links-menu', array('quick-bg' => 'misc/header-bg-demo4.png')) }}
    <!--end::Menu wrapper-->
    </div>
    <!--end::Quick links-->


    <!--begin::Chat-->
    <div class="d-flex align-items-center {{ $toolbarButtonMarginClass }}">
        <!--begin::Menu wrapper-->
        <div class="btn btn-icon btn-active-light-primary position-relative {{ $toolbarButtonHeightClass }}" {{ theme()->putProVersionTooltip() }} id="kt_drawer_chat_toggle">
            {!! theme()->getSvgIcon("icons/duotune/communication/com012.svg", $toolbarButtonIconSizeClass) !!}

            <span class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink">
            </span>
        </div>
        <!--end::Menu wrapper-->
    </div>
    <!--end::Chat-->

    <!--begin::Notifications-->
    <div class="d-flex align-items-center {{ $toolbarButtonMarginClass }}">
        <!--begin::Menu wrapper-->
        <div class="btn btn-icon btn-active-light-primary position-relative {{ $toolbarButtonHeightClass }}" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
            {!! theme()->getSvgIcon("icons/duotune/general/gen022.svg", $toolbarButtonIconSizeClass) !!}
        </div>

    {{ theme()->getView('partials/topbar/_notifications-menu', array('notifications-bg' => 'misc/header-bg-demo4.png')) }}
    <!--end::Menu wrapper-->
    </div>
    <!--end::Notifications-->

    <!--begin::User-->
    <div class="d-flex align-items-center {{ $toolbarButtonMarginClass }}" id="kt_header_user_menu_toggle">
        <!--begin::Menu wrapper-->
        <div class="cursor-pointer symbol {{ $toolbarUserAvatarHeightClass }}" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
            <img src="{{ auth()->user()->avatar_url }}" alt="avatar"/>
        </div>
    {{ theme()->getView('partials/topbar/_user-menu') }}
    <!--end::Menu wrapper-->
    </div>
    <!--end::User -->

    <!--begin::Heaeder menu toggle-->
    @if(theme()->getOption('layout', 'header/menu'))
        <div class="d-flex align-items-center d-lg-none ms-3 me-n1" title="Show header menu">
            <div class="btn btn-icon btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
                {!! theme()->getSvgIcon("icons/duotune/text/txt001.svg", "svg-icon-1") !!}
            </div>
        </div>
@endif
<!--end::Heaeder menu toggle-->
</div>
<!--end::Toolbar wrapper-->
