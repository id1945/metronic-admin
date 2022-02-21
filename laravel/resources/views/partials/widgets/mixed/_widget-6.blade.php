@php
    $chartColor = $chartColor ?? 'primary';
    $chartHeight = $chartHeight ?? '175px';
@endphp

<!--begin::Mixed Widget 6-->
<div class="card {{ $class }}">
    <!--begin::Beader-->
    <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bolder fs-3 mb-1">Sales Statistics</span>

			<span class="text-muted fw-bold fs-7">Recent sales statistics</span>
		</h3>

        <div class="card-toolbar">
            <!--begin::Menu-->
            <button type="button" class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                {!! theme()->getSvgIcon("icons/duotune/general/gen024.svg", "svg-icon-2") !!}
            </button>
            {{ theme()->getView('partials/menus/_menu-1') }}
            <!--end::Menu-->
        </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body p-0 d-flex flex-column">
        <!--begin::Stats-->
        <div class="card-px pt-5 pb-10 flex-grow-1">
            <!--begin::Row-->
            <div class="row g-0 mt-5 mb-10">
                <!--begin::Col-->
                <div class="col">
                    <div class="d-flex align-items-center me-2">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-50px me-3">
                            <div class="symbol-label bg-light-info">
                                {!! theme()->getSvgIcon("icons/duotune/art/art007.svg", "svg-icon-1 svg-icon-info"); !!}
                            </div>
                        </div>
                        <!--end::Symbol-->

                        <!--begin::Title-->
                        <div>
                            <div class="fs-4 text-dark fw-bolder">$2,034</div>
                            <div class="fs-7 text-muted fw-bold">Author Sales</div>
                        </div>
                        <!--end::Title-->
                    </div>
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col">
                    <div class="d-flex align-items-center me-2">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-50px me-3">
                            <div class="symbol-label bg-light-danger">
                                {!! theme()->getSvgIcon("icons/duotune/abstract/abs027.svg", "svg-icon-1 svg-icon-danger"); !!}
                            </div>
                        </div>
                        <!--end::Symbol-->

                        <!--begin::Title-->
                        <div>
                            <div class="fs-4 text-dark fw-bolder">$706</div>
                            <div class="fs-7 text-muted fw-bold">Commision</div>
                        </div>
                        <!--end::Title-->
                    </div>
                </div>
                <!--end::Col-->
            </div>
            <!--end::Row-->

            <!--begin::Row-->
            <div class="row g-0">
                <!--begin::Col-->
                <div class="col">
                    <div class="d-flex align-items-center me-2">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-50px me-3">
                            <div class="symbol-label bg-light-success">
                                {!! theme()->getSvgIcon("icons/duotune/ecommerce/ecm002.svg", "svg-icon-1 svg-icon-success"); !!}
                            </div>
                        </div>
                        <!--end::Symbol-->

                        <!--begin::Title-->
                        <div>
                            <div class="fs-4 text-dark fw-bolder">$49</div>
                            <div class="fs-7 text-muted fw-bold">Average Bid</div>
                        </div>
                        <!--end::Title-->
                    </div>
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col">
                    <div class="d-flex align-items-center me-2">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-50px me-3">
                            <div class="symbol-label bg-light-primary">
                                {!! theme()->getSvgIcon("icons/duotune/ecommerce/ecm010.svg", "svg-icon-1 svg-icon-primary"); !!}
                            </div>
                        </div>
                        <!--end::Symbol-->

                        <!--begin::Title-->
                        <div>
                            <div class="fs-4 text-dark fw-bolder">$5.8M</div>
                            <div class="fs-7 text-muted fw-bold">All Time Sales</div>
                        </div>
                        <!--end::Title-->
                    </div>
                </div>
                <!--end::Col-->
            </div>
            <!--end::Row-->
        </div>
        <!--end::Stats-->

        <!--begin::Chart-->
        <div class="mixed-widget-6-chart card-rounded-bottom" data-kt-chart-color="{{ $chartColor }}" style="height: {{ $chartHeight }}"></div>
        <!--end::Chart-->
    </div>
    <!--end::Body-->
</div>
<!--end::Mixed Widget 6-->
