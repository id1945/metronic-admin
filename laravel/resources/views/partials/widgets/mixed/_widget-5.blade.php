@php
    $chartColor = $chartColor ?? 'primary';
    $chartHeight = $chartHeight ?? '175px';
@endphp

<!--begin::Mixed Widget 5-->
<div class="card {{ $class }}">
    <!--begin::Beader-->
    <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bolder fs-3 mb-1">Trends</span>

			<span class="text-muted fw-bold fs-7">Latest trends</span>
		</h3>

        <div class="card-toolbar">
            <!--begin::Menu-->
            <button type="button" class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                {!! theme()->getSvgIcon("icons/duotune/general/gen024.svg", "svg-icon-2") !!}
            </button>
            {{ theme()->getView('partials/menus/_menu-3') }}
            <!--end::Menu-->
        </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
        <!--begin::Chart-->
        <div class="mixed-widget-5-chart card-rounded-top" data-kt-chart-color="{{ $chartColor }}" data-kt-chart-url="{{ route('profits') }}" style="height: {{ $chartHeight }}"></div>
        <!--end::Chart-->

        <!--begin::Items-->
        <div class="mt-5">
            <!--begin::Item-->
            <div class="d-flex flex-stack mb-5">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-50px me-3">
                        <div class="symbol-label bg-light">
                            <img src="{{ asset(theme()->getMediaUrlPath() . 'svg/brand-logos/plurk.svg') }}" alt="" class="h-50"/>
                        </div>
                    </div>
                    <!--end::Symbol-->

                    <!--begin::Title-->
                    <div>
                        <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Top Authors</a>
                        <div class="fs-7 text-muted fw-bold mt-1">Ricky Hunt, Sandra Trepp</div>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Section-->

                <!--begin::Label-->
                <div class="badge badge-light fw-bold py-4 px-3">+82$</div>
                <!--end::Label-->
            </div>
            <!--end::Item-->

            <!--begin::Item-->
            <div class="d-flex flex-stack mb-5">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-50px me-3">
                        <div class="symbol-label bg-light">
                            <img src="{{ asset(theme()->getMediaUrlPath() . 'svg/brand-logos/figma-1.svg') }}" alt="" class="h-50"/>
                        </div>
                    </div>
                    <!--end::Symbol-->

                    <!--begin::Title-->
                    <div>
                        <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Top Sales</a>
                        <div class="fs-7 text-muted fw-bold mt-1">PitStop Emails</div>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Section-->

                <!--begin::Label-->
                <div class="badge badge-light fw-bold py-4 px-3">+82$</div>
                <!--end::Label-->
            </div>
            <!--end::Item-->

            <!--begin::Item-->
            <div class="d-flex flex-stack">
                <!--begin::Section-->
                <div class="d-flex align-items-center me-2">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-50px me-3">
                        <div class="symbol-label bg-light">
                            <img src="{{ asset(theme()->getMediaUrlPath() . 'svg/brand-logos/vimeo.svg') }}" alt="" class="h-50"/>
                        </div>
                    </div>
                    <!--end::Symbol-->

                    <!--begin::Title-->
                    <div class="py-1">
                        <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Top Engagement</a>

                        <div class="fs-7 text-muted fw-bold mt-1">KT.com</div>
                    </div>
                    <!--end::Title-->
                </div>
                <!--end::Section-->

                <!--begin::Label-->
                <div class="badge badge-light fw-bold py-4 px-3">+82$</div>
                <!--end::Label-->
            </div>
            <!--end::Item-->
        </div>
        <!--end::Items-->
    </div>
    <!--end::Body-->
</div>
<!--end::Mixed Widget 5-->
