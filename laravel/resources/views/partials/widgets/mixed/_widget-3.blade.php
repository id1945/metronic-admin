@php
    $chartColor = $chartColor ?? 'primary';
    $chartHeight = $chartHeight ?? '175px';
@endphp

<!--begin::Mixed Widget 3-->
<div class="card {{ $class }}">
    <!--begin::Beader-->
    <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bolder fs-3 mb-1">Sales Overview</span>

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
        <div class="card-p pt-5 bg-white flex-grow-1">
            <!--begin::Row-->
            <div class="row g-0">
                <!--begin::Col-->
                <div class="col mr-8">
                    <!--begin::Label-->
                    <div class="fs-7 text-muted fw-bold">Average Sale</div>
                    <!--end::Label-->

                    <!--begin::Stat-->
                    <div class="d-flex align-items-center">
                        <div class="fs-4 fw-bolder">$650</div>
                        {!! theme()->getSvgIcon("icons/duotune/arrows/arr066.svg", "svg-icon-5 svg-icon-success ms-1") !!}
                    </div>
                    <!--end::Stat-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col">
                    <!--begin::Label-->
                    <div class="fs-7 text-muted fw-bold">Commission</div>
                    <!--end::Label-->

                    <!--begin::Stat-->
                    <div class="fs-4 fw-bolder">$233,600</div>
                    <!--end::Stat-->
                </div>
                <!--end::Col-->
            </div>
            <!--end::Row-->

            <!--begin::Row-->
            <div class="row g-0 mt-8">
                <!--begin::Col-->
                <div class="col mr-8">
                    <!--begin::Label-->
                    <div class="fs-7 text-muted fw-bold">Annual Taxes 2019</div>
                    <!--end::Label-->

                    <!--begin::Stat-->
                    <div class="fs-4 fw-bolder">$29,004</div>
                    <!--end::Stat-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col">
                    <!--begin::Label-->
                    <div class="fs-7 text-muted fw-bold">Annual Income</div>
                    <!--end::Label-->

                    <!--begin::Stat-->
                    <div class="d-flex align-items-center">
                        <div class="fs-4 fw-bolder">$1,480,00</div>
                        {!! theme()->getSvgIcon("icons/duotune/arrows/arr065.svg", "svg-icon-5 svg-icon-danger ms-1") !!}
                    </div>
                    <!--end::Stat-->
                </div>
                <!--end::Col-->
            </div>
            <!--end::Row-->
        </div>
        <!--end::Stats-->

        <!--begin::Chart-->
        <div class="mixed-widget-3-chart card-rounded-bottom" data-kt-chart-color="{{ $chartColor }}" style="height: {{ $chartHeight }}"></div>
        <!--end::Chart-->
    </div>
    <!--end::Body-->
</div>
<!--end::Mixed Widget 3-->
