@php
    // List items
    $listRows = array(
        array(
            'icon' => 'icons/duotune/abstract/abs027.svg',
            'color' => 'success',
            'title' => 'Project Briefing',
            'description' => 'Project Manager',
        ),
        array(
            'icon' => 'icons/duotune/art/art005.svg',
            'color' => 'warning',
            'title' => 'Concept Design',
            'description' => 'Art Director'
        ),
        array(
            'icon' => 'icons/duotune/communication/com012.svg',
            'color' => 'primary',
            'title' => 'Functional Logics',
            'description' => 'Lead Developer'
        ),
        array(
            'icon' => 'icons/duotune/coding/cod008.svg',
            'color' => 'danger',
            'title' => 'Development',
            'description' => 'DevOps'
        ),
        array(
            'icon' => 'icons/duotune/general/gen049.svg',
            'color' => 'info',
            'title' => 'Testing',
            'description' => 'QA Managers'
        )
    );
@endphp


<!--begin::Tasks Widget-->
<div class="card card-flush card-p-0 shadow-none bg-transparent mb-5">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0">
        <!--begin::Title-->
        <h3 class="card-title fw-bolder text-white fs-3">Latest Tasks</h3>
        <!--end::Title-->

        <!--begin::Toolbar-->
        <div class="card-toolbar">
            <button type="button" class="btn btn-icon btn-icon-white btn-active-color-primary me-n4" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="bottom-end">
                {!! theme()->getSvgIcon("icons/duotune/general/gen024.svg", "svg-icon-2") !!}
            </button>
            {{ theme()->getView('partials/menus/_menu-1') }}
        </div>
        <!--end::Title-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-0">
        @foreach($listRows as $row)
            <!--begin::Item-->
            <div class="d-flex flex-nowrap align-items-center {{ next($listRows) ? 'mb-7' : '' }}">
                <!--begin::Symbol-->
                <div class="symbol symbol-50px me-5">
                    <span class="symbol-label sidebar-bg-muted">
                        {!! theme()->getSvgIcon($row['icon'], "svg-icon-2x svg-icon-" . $row['color']) !!}
                    </span>
                </div>
                <!--end::Symbol-->

                <!--begin::Text-->
                <div class="d-flex flex-column">
                    <a href="#" class="text-white text-hover-primary fs-6 fw-bolder">{{ $row['title'] }}</a>

                    <span class="sidebar-text-muted fw-bold">{{ $row['description'] }}</span>
                </div>
                <!--end::Text-->
            </div>
            <!--end::Item-->
        @endforeach
    </div>
    <!--end::Body-->
</div>
<!--end::Tasks Widget-->
