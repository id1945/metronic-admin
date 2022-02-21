<?php
    $primaryButtonLabel = theme()->getOption("layout", "toolbar/primary-button-label");
    $primaryButtonUrl = theme()->getOption("layout", "toolbar/primary-button-url");

    $primaryButtonModalTarget = theme()->getOption("layout", "toolbar/primary-button-modal-target");
?>

<!--begin::Toolbar-->
<div class="toolbar d-flex flex-stack flex-wrap mb-5 mb-lg-7" id="kt_toolbar">
    <?php if (theme()->getOption('layout', 'page-title/display') && theme()->getOption('layout', 'header/left') !== 'page-title'):?>
        {{ theme()->getView('layout/_page-title') }}
    <?php endif?>

    <!--begin::Actions-->
    <div class="d-flex align-items-center py-1">
        <!--begin::Wrapper-->
        <div class="me-4 d-none">
            <!--begin::Menu-->
            <a href="#" class="btn btn-flex btn-light btn-active-primary fw-bolder" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                {!! theme()->getSvgIcon("icons/duotune/general/gen031.svg", "svg-icon-5 svg-icon-gray-500 me-1") !!}
                Filter
            </a>

            {{ theme()->getView('partials/menus/_menu-1') }}
            <!--end::Menu-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Button-->
        <?php if(!empty($primaryButtonModalTarget)):?>
            <a href="#" class="btn btn-flex btn-sm btn-primary fw-bolder border-0 fs-6 h-40px" data-bs-toggle="modal" data-bs-target="{{ $primaryButtonModalTarget }}" id="kt_toolbar_primary_button">
                {{ $primaryButtonLabel }}
            </a>
        <?php elseif(!empty($primaryButtonLabel)):?>
            <a href="{{ theme()->getPageUrl($primaryButtonUrl) }}" class="btn btn-flex btn-sm btn-primary fw-bolder border-0 fs-6 h-40px" id="kt_toolbar_primary_button">
                {{ $primaryButtonLabel }}
            </a>
        <?php endif?>
        <!--end::Button-->
    </div>
    <!--end::Actions-->
</div>
<!--end::Toolbar-->
