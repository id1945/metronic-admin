<!--begin::Toolbar wrapper-->
<div class="d-flex flex-shrink-0">
    <!--begin::Invite user-->
    <div class="d-flex ms-3">
        <a href="#" class="btn btn-flex flex-center btn-bg-white btn-text-gray-500 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6" tooltip="New Member" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
            {!! theme()->getSvgIcon("icons/duotune/arrows/arr075.svg", "svg-icon-2 svg-icon-primary me-0 me-md-2") !!}
            <span class="d-none d-md-inline">New Member</span>
        </a>
    </div>
    <!--end::Invite user-->

    <!--begin::Create app-->
    <div class="d-flex ms-3">
        <a href="#" class="btn btn-flex flex-center btn-bg-white btn-text-gray-500 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6" tooltip="New App" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" id="kt_toolbar_primary_button">
            {!! theme()->getSvgIcon("icons/duotune/general/gen005.svg", "svg-icon-2 svg-icon-primary me-0 me-md-2") !!}
            <span class="d-none d-md-inline">New App</span>
        </a>
    </div>
    <!--end::Create app-->

    <!--begin::Chat-->
    <div class="d-flex align-items-center ms-3">
        <!--begin::Menu wrapper-->
        <div class="btn btn-icon btn-primary w-40px h-40px pulse pulse-white"  {{ theme()->putProVersionTooltip() }} id="kt_drawer_chat_toggle">
            {!! theme()->getSvgIcon("icons/duotune/communication/com012.svg", "svg-icon-2") !!}
            <span class="pulse-ring"></span>
        </div>
         {{ theme()->getView('partials/topbar/_notifications-menu', array('notifications-bg' => 'misc/pattern-5.png')) }}
        <!--end::Menu wrapper-->
    </div>
    <!--end::Chat-->
</div>
<!--end::Toolbar wrapper-->
