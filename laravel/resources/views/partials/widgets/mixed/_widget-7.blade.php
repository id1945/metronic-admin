@php
    $chartColor = $chartColor ?? 'primary';
    $chartHeight = $chartHeight ?? '175px';
@endphp

<!--begin::Mixed Widget 7-->
<div class="card {{ $class }}">
    <!--begin::Body-->
    <div class="card-body d-flex flex-column p-0">
        <!--begin::Stats-->
        <div class="flex-grow-1 card-p pb-0">
            <div class="d-flex flex-stack flex-wrap">
                <div class="me-2">
                    <a href="#" class="text-dark text-hover-primary fw-bolder fs-3">Generate Reports</a>

                    <div class="text-muted fs-7 fw-bold">Finance and accounting reports</div>
                </div>

                <div class="fw-bolder fs-3 text-{{ $chartColor }}">
                    $24,500
                </div>
            </div>
        </div>
        <!--end::Stats-->

        <!--begin::Chart-->
        <div class="mixed-widget-7-chart card-rounded-bottom" data-kt-chart-color="{{ $chartColor }}" data-kt-chart-url="{{ route('profits') }}" style="height: {{ $chartHeight }}"></div>
        <!--end::Chart-->
    </div>
    <!--end::Body-->
</div>
<!--end::Mixed Widget 7-->
