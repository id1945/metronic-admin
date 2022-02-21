<!--begin::Footer-->
<div class="footer pt-10 pb-5 d-flex flex-column flex-md-row flex-stack" id="kt_footer">
	<!--begin::Copyright-->
	<div class="text-dark order-2 order-md-1">
		<span class="text-muted fw-bold me-1">{{ date("Y") }}&copy;</span>
		<a href="{{ theme()->getOption('general', 'website') }}" target="_blank" class="text-gray-800 text-hover-primary">Keenthemes</a>
	</div>
	<!--end::Copyright-->

	<!--begin::Menu-->
	<ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
		<li class="menu-item"><a href="{{ theme()->getOption('general', 'about') }}" target="_blank" class="menu-link px-2">About</a></li>

		<li class="menu-item"><a href="{{ theme()->getOption('general', 'support') }}" target="_blank" class="menu-link px-2">Support</a></li>

		<li class="menu-item"><a href="{{ theme()->getOption('product', 'purchase') }}" target="_blank" class="menu-link ps-2 pe-0">Purchase</a></li>
	</ul>
	<!--end::Menu-->
</div>
<!--end::Footer-->
