<!--begin::Aside-->
<div
	id="kt_aside"
	class="aside bg-primary {{ theme()->printHtmlClasses('aside', false) }}"
	data-kt-drawer="true"
	data-kt-drawer-name="aside"
	data-kt-drawer-activate="{default: true, lg: false}"
	data-kt-drawer-overlay="true"
	data-kt-drawer-width="auto"
	data-kt-drawer-direction="start"
	data-kt-drawer-toggle="#kt_aside_toggle"
	>

	<!--begin::Logo-->
	<div class="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-8" id="kt_aside_logo">
		<a href="{{ theme()->getPageUrl('index') }}">
			<img alt="Logo" src="{{ asset(theme()->getMediaUrlPath() . 'logos/logo-demo-4.svg') }}" class="h-55px"/>
		</a>
	</div>
	<!--end::Logo-->

	<!--begin::Nav-->
	<div class="aside-nav d-flex flex-column align-lg-center flex-column-fluid w-100 pt-5 pt-lg-0" id="kt_aside_nav">
		{{ theme()->getView('layout/aside/_menu') }}
	</div>
	<!--end::Nav-->

	<!--begin::Footer-->
	<div class="aside-footer d-flex flex-column align-items-center flex-column-auto" id="kt_aside_footer">
		<!--begin::Menu-->
		<div class="mb-7">
			<button type="button" class="btn btm-sm btn-icon btn-color-white btn-active-color-primary btn-active-light"
				data-kt-menu-trigger="click"
				data-kt-menu-overflow="true"
				data-kt-menu-placement="top-start"
				data-bs-toggle="tooltip"
				data-bs-placement="right"
				data-bs-dismiss="click"

				title="Quick actions">

				{!! theme()->getSvgIcon("icons/duotune/general/gen008.svg", "svg-icon-2 svg-icon-lg-1") !!}
			</button>
			{{ theme()->getView('partials/menus/_menu-2') }}
		</div>
		<!--end::Menu-->
	</div>
	<!--end::Footer-->
</div>
<!--end::Aside-->
