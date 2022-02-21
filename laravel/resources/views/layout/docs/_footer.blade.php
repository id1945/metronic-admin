<!--begin::Footer-->
<div class="py-4 d-flex flex-lg-column py-6" id="kt_footer">
	<!--begin::Container-->
	<div class="container-xxl d-flex flex-column flex-md-row align-items-center justify-content-between">
		<!--begin::Copyright-->
		<div class="text-dark order-2 order-md-1">
			<span class="text-muted fw-bold me-1">{{ date("Y") }}&copy;</span>
			<a href="{{ theme()->getOption('general', 'website') }}" target="_blank" class="text-gray-800 text-hover-primary">Keenthemes</a>
		</div>
		<!--end::Copyright-->

		<!--begin::Menu-->
		<ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1 align-items-center mb-3 mb-md-0">
			@foreach(theme()->getOption('general', 'social-accounts') as $each)
				<!--begin::Menu item-->
				<li class="menu-item">
					<!--begin::Menu link-->
					<a href="{{ $each['url'] }}" target="_blank" class="menu-link px-3">
						<img alt="Keenthemes {{ $each['name'] }}" src="{{ asset(theme()->getMediaUrlPath() . $each['logo']) }}" class="{{ $each['class'] }}"/>
					</a>
					<!--end::Menu link-->
				</li>
				<!--end::Menu link-->
			@endforeach
		</ul>
		<!--end::Menu-->
	</div>
	<!--end::Container-->
</div>
<!--end::Footer-->
