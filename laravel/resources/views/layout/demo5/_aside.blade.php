<!--begin::Aside-->
<div
	id="kt_aside"
	class="aside"

	data-kt-drawer="true"
	data-kt-drawer-name="aside"
	data-kt-drawer-activate="{default: true, lg: false}"
	data-kt-drawer-overlay="true"
	data-kt-drawer-width="{default:'200px', '300px': '225px'}"
	data-kt-drawer-direction="start"
	data-kt-drawer-toggle="#kt_aside_toggle"

    <?php if (theme()->getOption('layout', 'header/fixed/desktop') === true):?>
    data-kt-sticky="true"
    data-kt-sticky-name="aside-sticky"
    data-kt-sticky-offset="{default: false, lg: '1px'}"
    data-kt-sticky-width="{lg: '225px'}"
    data-kt-sticky-left="auto"
    data-kt-sticky-top="94px"
    data-kt-sticky-animation="false"
    data-kt-sticky-zindex="95"
    <?php endif?>
	>

    <!--begin::Aside nav-->
    <div
        class="hover-scroll-overlay-y my-5 my-lg-5 w-100 ps-4 ps-lg-0 pe-4 me-1"
        id="kt_aside_menu_wrapper"

        data-kt-scroll="true"
        data-kt-scroll-activate="{default: false, lg: true}"
        data-kt-scroll-height="auto"
        data-kt-scroll-dependencies="#kt_header"
        data-kt-scroll-wrappers="#kt_aside"
        data-kt-scroll-offset="5px"
    >
        <!--begin::Menu-->
        <div class="menu menu-column menu-active-bg menu-hover-bg menu-title-gray-700 fs-6 menu-rounded w-100" id="#kt_aside_menu" data-kt-menu="true">
            <!--begin::Heading-->
            <div class="menu-item">
                <div class="menu-content pb-2">
                    <span class="menu-section text-muted text-uppercase fs-7 fw-bolder">Public</span>
                </div>
            </div>
            <!--end::Heading-->

            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('index') }}" class="menu-link {{ theme()->getPagePath() === 'index' ? 'active' : '' }}">
                    <span class="menu-title">All Questions</span>
                    <span class="menu-badge">6,234</span>
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('apps/devs/search') }}" class="menu-link {{ theme()->getPagePath() === 'apps/devs/search' ? 'active' : '' }}">
                    <span class="menu-title">Search</span>
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('apps/devs/tag') }}" class="menu-link {{ theme()->getPagePath() === 'apps/devs/tag' ? 'active' : '' }}">
                    <span class="menu-title">Tags</span>
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('apps/devs/ask') }}" class="menu-link {{ theme()->getPagePath() === 'apps/devs/ask' ? 'active' : '' }}">
                    <span class="menu-title">Ask Question</span>
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Heading-->
            <div class="menu-item pt-5">
                <div class="menu-content pb-2">
                    <span class="menu-section text-muted text-uppercase fs-7 fw-bolder">My Activity</span>
                </div>
            </div>
            <!--end::Heading-->

            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('apps/devs/question') }}" class="menu-link {{ theme()->getPagePath() === 'apps/devs/question' ? 'active' : '' }}">
                    <span class="menu-title">My Questions</span>
                    <span class="menu-badge">24</span>
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('index') }}" class="menu-link">
                    <span class="menu-title">Resolved</span>
                    <span class="menu-badge">120</span>
                </a>
            </div>
            <!--end::Menu item-->


            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('index') }}" class="menu-link">
                    <span class="menu-title">Enrolled</span>
                    <span class="menu-badge">10</span>
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('index') }}" class="menu-link">
                    <span class="menu-title">Saved</span>
                    <span class="menu-badge">6</span>
                </a>
            </div>
            <!--end::Menu item-->


            <!--begin::Heading-->
            <div class="menu-item pt-5">
                <div class="menu-content pb-2">
                    <span class="menu-section text-muted text-uppercase fs-7 fw-bolder">Categories</span>
                </div>
            </div>
            <!--end::Heading-->


            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('index') }}" class="menu-link">
                    <span class="menu-title">Metronic Admin</span>
                    <span class="menu-badge">1,400</span>
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('index') }}" class="menu-link">
                    <span class="menu-title">Backend Integration</span>
                    <span class="menu-badge">235</span>
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('index') }}" class="menu-link">
                    <span class="menu-title">Suggestions</span>
                    <span class="menu-badge">25</span>
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('index') }}" class="menu-link">
                    <span class="menu-title">Pre-sale Questions</span>
                    <span class="menu-badge">145</span>
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Menu item-->
            <div class="menu-item">
                <a href="{{ theme()->getPageUrl('index') }}" class="menu-link">
                    <span class="menu-title">Laravel Starter Kit</span>
                    <span class="menu-badge">750</span>
                </a>
            </div>
            <!--end::Menu item-->

            <!--begin::Collapse-->
            <div class="collapse" id="kt_aside_categories_more">
                <!--begin::Menu item-->
                <div class="menu-item">
                    <a href="{{ theme()->getPageUrl('index') }}" class="menu-link">
                        <span class="menu-title">Blazor Integration</span>
                        <span class="menu-badge">100</span>
                    </a>
                </div>
                <!--end::Menu item-->

                <!--begin::Menu item-->
                <div class="menu-item">
                    <a href="{{ theme()->getPageUrl('index') }}" class="menu-link">
                        <span class="menu-title">Django Dashboard</span>
                        <span class="menu-badge">90</span>
                    </a>
                </div>
                <!--end::Menu item-->

                <!--begin::Menu item-->
                <div class="menu-item">
                    <a href="{{ theme()->getPageUrl('index') }}" class="menu-link">
                        <span class="menu-title">Rails CRUD</span>
                        <span class="menu-badge">14</span>
                    </a>
                </div>
                <!--end::Menu item-->

                <!--begin::Menu item-->
                <div class="menu-item">
                    <a href="{{ theme()->getPageUrl('index') }}" class="menu-link">
                        <span class="menu-title">.NET Starter Kit</span>
                        <span class="menu-badge">30</span>
                    </a>
                </div>
                <!--end::Menu item-->
            </div>
            <!--end::Collapse-->

            <!--begin::Heading-->
            <div class="menu-item">
                <div class="menu-link">
                    <a hred="#" class="menu-title text-muted fs-7" id="kt_aside_categories_toggle" data-bs-toggle="collapse" data-bs-target="#kt_aside_categories_more">
                        More Categories
                    </a>
                </div>
            </div>
            <!--end::Heading-->
        </div>
        <!--end::Menu-->
    </div>
    <!--end::Aside nav-->
</div>
<!--end::Aside-->
