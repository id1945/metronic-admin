<?php
	$toolbarButtonMarginClass = "ms-1 ms-lg-2";
	$toolbarButtonHeightClass = "w-30px h-30px w-md-40px h-md-40px";
	$toolbarButtonIconSizeClass = "svg-icon-1";
?>

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
        <div class="btn btn-icon btn-active-light btn-active-color-primary {{ $toolbarButtonHeightClass  }}" id="kt_activities_toggle">
            {!! theme()->getSvgIcon("icons/duotune/general/gen032.svg", $toolbarButtonIconSizeClass) !!}
        </div>
        <!--end::Drawer toggle-->
    </div>
    <!--end::Activities-->

    <!--begin::Chat-->
    <div class="d-flex align-items-center {{ $toolbarButtonMarginClass }}">
        <!--begin::Menu wrapper-->
        <div class="btn btn-icon btn-active-light btn-active-color-primary position-relative {{ $toolbarButtonHeightClass  }}" id="kt_drawer_chat_toggle">
            {!! theme()->getSvgIcon("icons/duotune/communication/com012.svg", $toolbarButtonIconSizeClass) !!}

            <span class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink">
            </span>
        </div>
        <!--end::Menu wrapper-->
    </div>
    <!--end::Chat-->

    <!--begin::Notifications-->
    <div class="d-flex align-items-center {{ $toolbarButtonMarginClass }}">
        <!--begin::Menu- wrapper-->
        <div class="btn btn-icon btn-active-light btn-active-color-primary position-relative {{ $toolbarButtonHeightClass  }}" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
            {!! theme()->getSvgIcon("icons/duotune/abstract/abs038.svg", $toolbarButtonIconSizeClass) !!}
        </div>
        {{ theme()->getView('partials/topbar/_notifications-menu')  }}
        <!--end::Menu wrapper-->
    </div>
    <!--end::Notifications-->

    <!--begin::User-->
    <div class="d-flex align-items-center ms-lg-5" id="kt_header_user_menu_toggle">
        <!--begin::User info-->
        <div
            class="btn btn-active-light d-flex align-items-center bg-hover-light py-2 px-2 px-md-3"
            data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="{{ theme()->isRtl() ? "bottom-start" : "bottom-end" }}">

            <!--begin::Name-->
            <div class="d-none d-md-flex flex-column align-items-end justify-content-center me-2">
                <span class="text-muted fs-7 fw-bold lh-1 mb-2">Hello</span>
                <span class="text-dark fs-base fw-bolder lh-1">{{ auth()->user()->name }}</span>
            </div>
            <!--end::Name-->

            <!--begin::Symbol-->
            <div class="symbol symbol-30px symbol-md-40px">
                <img src="{{ auth()->user()->avatarUrl  }}" alt="image"/>
            </div>
            <!--end::Symbol-->
        </div>
        <!--end::User info-->

        {{ theme()->getView('partials/topbar/_user-menu') }}
    </div>
    <!--end::User -->

    <!--begin::Sidebar Toggler-->
    <?php if(theme()->getOption('layout', 'sidebar/display') === true):?>
    <div class="d-flex d-lg-none align-items-center me-n2">
        <button class="btn btn-icon btn-active-icon-primary" id="kt_sidebar_toggle">
            {!! theme()->getSvgIcon("icons/duotune/coding/cod001.svg", "svg-icon-1"); !!}
        </button>
    </div>
    <?php endif?>
    <!--end::Sidebar Toggler-->
</div>
<!--end::Toolbar wrapper-->
