<!--begin::Topbar-->
<div class="d-flex align-items-center flex-shrink-0">
    {{ theme()->getView('layout/search/_base') }}

    <!--begin::Activities-->
    <div class="d-flex align-items-center ms-3 ms-lg-4">
        <!--begin::Drawer toggle-->
        <div class="btn btn-icon btn-color-gray-700 btn-active-color-primary  btn-outline btn-outline-secondary w-40px h-40px" id="kt_activities_toggle">
            {!! theme()->getSvgIcon("icons/duotune/general/gen007.svg", "svg-icon-1") !!}
        </div>
        <!--end::Drawer toggle-->
    </div>
    <!--end::Activities-->

    <!--begin::Chat-->
    <div class="d-flex d-none align-items-center ms-3 ms-lg-4">
        <!--begin::Drawer wrapper-->
        <div class="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary position-relative w-40px h-40px" id="kt_drawer_chat_toggle">
            {!! theme()->getSvgIcon("icons/duotune/communication/com003.svg", "svg-icon-1") !!}

            <!--begin::Bullet-->
            <span class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink">
            </span>
            <!--end::Bullet-->
        </div>
        <!--end::Drawer wrapper-->
    </div>
    <!--end::Chat-->

    <!--begin::Sidebar Toggler-->
    @if(theme()->getOption('layout', 'sidebar/display') === true)
        <button class="btn btn-icon btn-active-icon-primary d-xxl-none ms-2 me-n2" id="kt_sidebar_toggler">
            {!! theme()->getSvgIcon("icons/duotune/coding/cod001.svg", "svg-icon-2x") !!}
        </button>
    @endif
    <!--end::Sidebar Toggler-->
</div>
<!--end::Topbar-->
