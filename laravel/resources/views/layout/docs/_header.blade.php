@php
    if (theme()->isDarkModeEnabled()) {
        if (theme()->isDarkMode()) {
            $logoPath = theme()->getOption('layout', 'docs/logo-path/dark');
        } else {
            $logoPath = theme()->getOption('layout', 'docs/logo-path/default');
        }
    } else {
        $logoPath = theme()->getOption('layout', 'docs/logo-path/default');
    }
@endphp

<!--begin::Header-->
<div id="kt_docs_header" class="docs-header align-items-stretch mb-2 mb-lg-10">
	<!--begin::Container-->
	<div class="container">
		<div class="d-flex align-items-stretch justify-content-between py-3 h-75px">
			<!--begin::Aside toggle-->
			<div class="d-flex align-items-center d-lg-none me-3" title="Show aside menu">
				<div class="btn btn-icon btn-flex btn-active-color-primary" id="kt_docs_aside_toggle">
					{!! theme()->getSvgIcon("icons/duotune/abstract/abs015.svg", "svg-icon-2tx mt-1") !!}
				</div>
			</div>
			<!--end::Aside toggle-->

			<!--begin::Logo-->
			<div class="d-flex d-lg-none align-items-center flex-grow-1 flex-lg-grow-0 me-lg-15">
				<a href="{{ theme()->getPageUrl('index') }}">
					<img alt="Logo" src="{{ asset(theme()->getMediaUrlPath() . $logoPath) }}" class="{{ theme()->getOption('layout', 'docs/logo-class') }}"/>
				</a>
			</div>
			<!--end::Logo-->

			<!--begin::Wrapper-->
			<div class="d-flex align-items-center justify-content-between flex-lg-grow-1">
				<!--begin::Header title-->
				<div class="d-flex align-items-center" id="kt_docs_header_title">
					@include('layout/docs/_page-title')
				</div>
				<!--end::Header title-->

				<!--begin::Toolbar-->
				<div class="d-flex align-items-center">
					@if(theme()->isFreeVersion() === true)
						<a class="btn btn-bg-white btn-color-gray-700 btn-active-primary fw-bolder me-4" href="{{ theme()->getOption('product', 'preview') }}" target="_blank">
							Preview
						</a>

						<a class="btn btn-primary fw-bolder" href="{{ theme()->getOption('product', 'purchase') }}" target="_blank">
							Upgrade to Pro
						</a>
					@else
						<a class="btn btn-bg-white btn-color-gray-700 btn-active-primary fw-bolder me-4" href="{{ theme()->getOption('product', 'preview') }}" target="_blank">
							Preview
						</a>

						<a class="btn btn-primary fw-bolder" href="{{ theme()->getOption('product', 'purchase') }}" target="_blank">
							Purchase
						</a>
					@endif
				</div>
				<!--end::Toolbar-->
			</div>
			<!--end::Wrapper-->
		</div>


		<div class="border-gray-300 border-bottom border-bottom-dashed"></div>

	</div>
	<!--end::Container-->
</div>
<!--end::Header-->
