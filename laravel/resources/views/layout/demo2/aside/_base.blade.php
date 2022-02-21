<!--begin::Aside-->
<div
	id="kt_aside"
	class="aside card"
	data-kt-drawer="true"
	data-kt-drawer-name="aside"
	data-kt-drawer-activate="{default: true, lg: false}"
	data-kt-drawer-overlay="true"
	data-kt-drawer-width="{default:'200px', '300px': '250px'}"
	data-kt-drawer-direction="start"
	data-kt-drawer-toggle="#kt_aside_mobile_toggle"

    @if (theme()->getOption('layout', 'aside/sticky') === true)
        data-kt-sticky="true"
        data-kt-sticky-name="aside-sticky"
        data-kt-sticky-offset="{default: false, lg: '200px'}"
        data-kt-sticky-width="{lg: '265px'}"
        data-kt-sticky-left="auto"
        data-kt-sticky-top="95px"
        data-kt-sticky-animation="false"
        data-kt-sticky-zindex="95"
    @endif
	>
    <!--begin::Aside menu-->
	<div class="aside-menu flex-column-fluid">
		{{ theme()->getView('layout/aside/_menu') }}
    </div>
    <!--end::Aside menu-->

    <!--begin::Footer-->
    <div class="aside-footer flex-column-auto pt-5 pb-7 px-5" id="kt_aside_footer">
        <a href="{{ theme()->getPageUrl('documentation/getting-started/overview') }}" class="btn btn-custom btn-primary w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="{{ theme()->getOption('product', 'tooltips/docs-and-components') }}">
            <span class="btn-label">
                Docs & Components
            </span>
            {!! theme()->getSvgIcon("icons/duotune/general/gen005.svg", "btn-icon svg-icon-2"); !!}
        </a>
    </div>
    <!--end::Footer-->
</div>
<!--end::Aside-->
