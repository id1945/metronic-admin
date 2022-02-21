@php
    $primaryButtonLabel = theme()->getOption("layout", "toolbar/primary-button-label", "Create");
    $primaryButtonUrl = theme()->getOption("layout", "toolbar/primary-button-url");
    $primaryButtonModalTarget = theme()->getOption("layout", "toolbar/primary-button-modal-target", "#kt_modal_create_app");
@endphp

<!--begin::Toolbar-->
<div class="toolbar py-5 py-lg-15" id="kt_toolbar">
    <!--begin::Container-->
    <div id="kt_toolbar_container" class="{{ theme()->printHtmlClasses('toolbar-container', false) }} d-flex flex-stack flex-wrap">
        {{ theme()->getView('layout/_page-title') }}

		<!--begin::Actions-->
        <div class="d-flex align-items-center py-3 py-md-1">
            <!--begin::Wrapper-->
            <div class="me-4">
                <!--begin::Menu-->
                <a href="#" class="btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bolder" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    {!! theme()->getSvgIcon("icons/duotune/general/gen031.svg", "svg-icon-5 svg-icon-gray-500 me-1") !!}
                    Filter
                </a>

                {{ theme()->getView('partials/menus/_menu-1') }}
                <!--end::Menu-->
            </div>
            <!--end::Wrapper-->

            <!--begin::Button-->
            @if (!empty($primaryButtonUrl))
                <a href="{{ $primaryButtonUrl }}" class="btn btn-bg-white btn-active-color-primary" id="kt_toolbar_primary_button">
                    {{ $primaryButtonLabel }}
                </a>
            @else
                <a href="#" class="btn {{ theme()->isDarkMode() ? 'btn-success' : 'btn-bg-white btn-active-color-primary' }}" data-bs-toggle="modal" data-bs-target="{{ $primaryButtonModalTarget }}" id="kt_toolbar_primary_button">
                    {{ $primaryButtonLabel }}
                </a>
            @endif
            <!--end::Button-->
        </div>
		<!--end::Actions-->
    </div>
    <!--end::Container-->
</div>
<!--end::Toolbar-->
