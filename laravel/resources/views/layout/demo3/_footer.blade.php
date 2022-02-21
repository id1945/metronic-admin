<!--begin::Footer-->
<div class="footer py-4 d-flex flex-lg-column {{ theme()->printHtmlClasses('footer', false) }}" id="kt_footer">
    <!--begin::Container-->
    <div class="{{ theme()->printHtmlClasses('footer-container', false) }} d-flex flex-column flex-md-row flex-stack">
        <!--begin::Copyright-->
        <div class="text-dark order-2 order-md-1">
            <span class="text-gray-400 fw-bold me-1">Created by</span>
            <a href="{{ theme()->getOption('general', 'website') }}" target="_blank" class="text-muted text-hover-primary fw-bold me-2 fs-6">Keenthemes</a>
        </div>
        <!--end::Copyright-->

        <!--begin::Menu-->
        <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
            <li class="menu-item"><a href="{{ theme()->getOption('general', 'about') }}" target="_blank" class="menu-link px-2">About</a></li>

            <li class="menu-item"><a href="{{ theme()->getOption('general', 'support') }}" target="_blank" class="menu-link px-2">Support</a></li>

            <li class="menu-item"><a href="{{ theme()->getOption('product', 'purchase') }}" target="_blank" class="menu-link px-2">Purchase</a></li>
        </ul>
        <!--end::Menu-->
    </div>
    <!--end::Container-->
</div>
<!--end::Footer-->
