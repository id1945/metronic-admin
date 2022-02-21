<?php
    // List items
    $listRows = array(
        array(
            'color' => 'success',
            'title' => 'Create FireStone Logo',
            'text' => 'Due in 2 Days',
        ),
        array(
            'color' => 'primary',
            'title' => 'Stakeholder Meeting',
            'text' => 'Due in 3 Days'
        ),
        array(
            'color' => 'warning',
            'title' => 'Scoping & Estimations',
            'text' => 'Due in 5 Days'
        ),
        array(
            'color' => 'primary',
            'title' => 'KPI App Showcase',
            'text' => 'Due in 2 Days'
        ),
        array(
            'color' => 'danger',
            'title' => 'Project Meeting',
            'text' => 'Due in 12 Days'
        ),
        array(
            'color' => 'success',
            'title' => 'Customers Update',
            'text' => 'Due in 1 week'
        )
    );
?>


<!--begin::List Widget 3-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header border-0">
        <h3 class="card-title fw-bolder text-dark">Todo</h3>

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
    <div class="card-body pt-2">
        @foreach($listRows as $row)
            <!--begin::Item-->
            <div class="d-flex align-items-center {{ util()->putIf(next($listRows), 'mb-8') }}">
                <!--begin::Bullet-->
                <span class="bullet bullet-vertical h-40px bg-{{ $row['color'] }}"></span>
                <!--end::Bullet-->

                <!--begin::Checkbox-->
                <div class="form-check form-check-custom form-check-solid mx-5">
                    <input class="form-check-input" type="checkbox" value=""/>
                </div>
                <!--end::Checkbox-->

                <!--begin::Description-->
                <div class="flex-grow-1">
                    <a href="#" class="text-gray-800 text-hover-primary fw-bolder fs-6">{{ $row['title'] }}</a>

                    <span class="text-muted fw-bold d-block">{{ $row['text'] }}</span>
                </div>
                <!--end::Description-->

                <span class="badge badge-light-{{ $row['color'] }} fs-8 fw-bolder">New</span>
            </div>
            <!--end:Item-->
        @endforeach
    </div>
    <!--end::Body-->
</div>
<!--end:List Widget 3-->
