<?php
    // List items
    $listRows = array(
        array(
            'image' => 'stock/600x400/img-20.jpg',
            'color' => 'success',
            'title' => 'Cup & Green',
            'text' => 'Size: 87KB',
            'badge' => 'Approved'
        ),
        array(
            'image' => 'stock/600x400/img-19.jpg',
            'color' => 'warning',
            'title' => 'Yellow Background',
            'text' => 'Size: 1.2MB',
            'badge' => 'In Progress'
        ),
        array(
            'image' => 'stock/600x400/img-25.jpg',
            'color' => 'success',
            'title' => 'Nike & Blue',
            'text' => 'Size: 87KB',
            'badge' => 'Success'
        ),
        array(
            'image' => 'stock/600x400/img-24.jpg',
            'color' => 'danger',
            'title' => 'Red Boots',
            'text' => 'Size: 345KB',
            'badge' => 'Rejected'
        )
    );
?>

<!--begin::List Widget 7-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
        <h3 class="card-title align-items-start flex-column">
            <span class="fw-bolder text-dark">Latest Media</span>

            <span class="text-muted mt-1 fw-bold fs-7">Articles and publications</span>
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
    <div class="card-body pt-3">
        @foreach($listRows as $row)
            <!--begin::Item-->
            <div class="d-flex align-items-sm-center {{ util()->putIf(next($listRows), 'mb-7') }}">
                <!--begin::Symbol-->

                <div class="symbol symbol-60px symbol-2by3 me-4">
                    <div class="symbol-label" style="background-image: url('{{ asset($row['image']) }}')"></div>
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-row-fluid flex-wrap align-items-center">
                    <div class="flex-grow-1 me-2">
                        <a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">{{ $row['title'] }}</a>

                        <span class="text-muted fw-bold d-block pt-1">{{ $row['text'] }}</span>
                    </div>

                    <span class="badge badge-light-{{ $row['color'] }} fs-8 fw-bolder my-2">{{ $row['badge'] }}</span>
                </div>
                <!--end::Title-->
            </div>
            <!--end::Item-->
        @endforeach
    </div>
    <!--end::Body-->
</div>
<!--end::List Widget 7-->
