
<!--begin::Header-->
<div id="kt_header" class="header {{ theme()->printHtmlClasses('header', false) }} align-items-stretch" {{ theme()->printHtmlAttributes('header') }}>
	<!--begin::Container-->
	<div class="{{ theme()->printHtmlClasses('header-container', false) }} d-flex align-items-stretch justify-content-between">
		<!--begin::Brand-->
		<div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0 w-lg-225px me-5">
			<!--begin::Aside mobile toggle-->
			<div class="btn btn-icon btn-active-icon-primary ms-n2 me-2 d-flex d-lg-none" id="kt_aside_toggle">
				{!! theme()->getSvgIcon("icons/duotune/abstract/abs015.svg", "svg-icon-1") !!}
			</div>
			<!--end::Aside mobile toggle-->

			<!--begin::Logo-->
			<a href="{{ theme()->getPageUrl('index') }}">
				<img alt="Logo" src="{{ asset(theme()->getImageUrl('logos', 'logo-demo5.svg')) }}" class="d-none d-lg-inline h-30px"/>
				<img alt="Logo" src="{{ asset(theme()->getImageUrl('logos', 'logo-demo5-mobile.svg')) }}" class="d-lg-none h-25px"/>
			</a>
			<!--end::Logo-->
		</div>
		<!--end::Brand-->

		<!--begin::Wrapper-->
		<div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
			<!--begin::Navbar-->
			<div class="d-flex align-items-stretch" id="kt_header_nav">
				{{ theme()->getView('layout/header/_menu') }}
			</div>
			<!--end::Navbar-->

			<!--begin::Topbar-->
	        <div class="d-flex align-items-stretch flex-shrink-0">
				{{ theme()->getView('layout/topbar/_base') }}
			</div>
			<!--end::Topbar-->
		</div>
		<!--end::Wrapper-->
	</div>
	<!--end::Container-->
</div>
<!--end::Header-->
