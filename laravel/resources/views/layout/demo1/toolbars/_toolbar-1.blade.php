<!--begin::Toolbar-->
<div class="toolbar" id="kt_toolbar">
    <!--begin::Container-->
    <div id="kt_toolbar_container" class="{{ theme()->printHtmlClasses('toolbar-container', false) }} d-flex flex-stack">
        @if (theme()->getOption('layout', 'page-title/display') && theme()->getOption('layout', 'header/left') !== 'page-title')
            {{ theme()->getView('layout/page-title/_default') }}
        @endif

		<!--begin::Actions-->
        <div class="d-flex align-items-center py-1">
            <!--begin::Wrapper-->
            <div class="me-4">
                <!--begin::Menu-->
                <a href="#" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    {!! theme()->getSvgIcon("icons/duotune/general/gen031.svg", "svg-icon-5 svg-icon-gray-500 me-1") !!}
                    Filter
                </a>
                {{ theme()->getView('partials/menus/_menu-1') }}
                <!--end::Menu-->
            </div>
            <!--end::Wrapper-->

            <!--begin::Wrapper-->
            <div data-bs-toggle="tooltip" data-bs-placement="left" data-bs-trigger="hover" title="Create a new account">
                <a href="#" class="btn btn-sm btn-primary fw-bolder" data-bs-toggle="modal" data-bs-target="#kt_modal_create_account" id="kt_toolbar_create_button">
                    Create
                </a>
            </div>
            <!--end::Wrapper-->
        </div>
		<!--end::Actions-->
    </div>
    <!--end::Container-->
</div>
<!--end::Toolbar-->
