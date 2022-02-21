@php
    $chartColor = $chartColor ?? 'primary';
    $chartHeight = $chartHeight ?? '175px';
@endphp

<!--begin::Mixed Widget 4-->
<div class="card {{ $class }}">
    <!--begin::Beader-->
    <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder fs-3 mb-1">Action Needed</span>
			<span class="text-muted fw-bold fs-7">Complete your profile setup</span>
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
    <div class="card-body d-flex flex-column">
        <div class="flex-grow-1">
            <div class="mixed-widget-4-chart" data-kt-chart-color="{{ $chartColor }}" style="height: {{ $chartHeight }}">
            </div>
        </div>

        <div class="pt-5">
            <p class="text-center fs-6 pb-5 ">
                <span class="badge badge-light-danger fs-8">Notes:</span>&nbsp;
                Current sprint requires stakeholders<br/>
                to approve newly amended policies
            </p>

            <a href="#" class="btn btn-{{ $color }} w-100 py-3">Take Action</a>
        </div>
    </div>
    <!--end::Body-->
</div>
<!--end::Mixed Widget 4-->
