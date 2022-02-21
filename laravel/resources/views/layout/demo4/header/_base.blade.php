
<!--begin::Header-->
<div id="kt_header" style="" class="header {{ theme()->printHtmlClasses('header', false) }} bg-white align-items-stretch" {{ theme()->printHtmlAttributes('header') }}>
	<!--begin::Container-->
	<div class="{{ theme()->printHtmlClasses('header-container', false) }} d-flex align-items-stretch justify-content-between">
		<!--begin::Aside mobile toggle-->
		<div class="d-flex align-items-center d-lg-none ms-n3 me-1" title="Show aside menu">
			<div class="btn btn-icon btn-active-color-primary w-40px h-40px" id="kt_aside_toggle">
				{!! theme()->getSvgIcon("icons/duotune/abstract/abs015.svg", "svg-icon-2x mt-1") !!}
			</div>
		</div>
		<!--end::Aside mobile toggle-->

		<!--begin::Mobile logo-->
		<div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
			<a href="{{ theme()->getPageUrl('index') }}" class="d-lg-none">
				<img alt="Logo" src="{{ asset(theme()->getMediaUrlPath() . 'logos/logo-3.svg') }}" class="h-30px"/>
			</a>
		</div>
		<!--end::Mobile logo-->

		@if(theme()->getOption('layout', 'page-title/display') !== false)
			<div class="d-flex align-items-center" id="kt_header_wrapper">
				{{ theme()->getView('layout/_page-title') }}
			</div>
		@endif

		<!--begin::Wrapper-->
		<div class="d-flex align-items-stretch justify-content-{{ theme()->getOption('layout', 'header/menu') ? 'between' : 'end' }} flex-lg-grow-1">
			@if(theme()->getOption('layout', 'header/menu') !== false)
				<!--begin::Navbar-->
				<div class="d-flex align-items-stretch" id="kt_header_nav">
					{{ theme()->getView('layout/header/_menu') }}
				</div>
				<!--end::Navbar-->
			@endif

			<!--begin::Topbar-->
	        <div class="d-flex align-items-stretch justify-self-end flex-shrink-0">
				{{ theme()->getView('layout/topbar/_base') }}
			</div>
			<!--end::Topbar-->
		</div>
		<!--end::Wrapper-->
	</div>
	<!--end::Container-->
</div>
<!--end::Header-->
