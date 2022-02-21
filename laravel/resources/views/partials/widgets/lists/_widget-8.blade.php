<?php
    // List items
    $listRows = array(
        array(
            'image' => 'stock/600x400/img-17.jpg',
            'title' => 'Cup & Green',
            'text' => 'Visually stunning',
            'number' => '4.2'
        ),
        array(
            'image' => 'stock/600x400/img-10.jpg',
            'title' => 'Pink Patterns',
            'text' => 'Feminine all around',
            'number' => '5.0'
        ),
        array(
            'image' => 'stock/600x400/img-1.jpg',
            'title' => 'Abstract Art',
            'text' => 'The will to capture readers',
            'number' => '5.7'
        ),
        array(
            'image' => 'stock/600x400/img-9.jpg',
            'title' => 'Desserts platter',
            'text' => 'Food trends & inspirations',
            'number' => '3.7'
        )
    );
?>


<!--begin::List Widget 8-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
        <h3 class="card-title align-items-start flex-column">
            <span class="fw-bolder text-dark">Latest Products</span>

            <span class="text-muted mt-1 fw-bold fs-7">Gifts and more</span>
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
    <div class="card-body pt-3">
        @foreach($listRows as $row)
            <!--begin::Item-->
            <div class="d-flex align-items-sm-center {{ util()->putIf(next($listRows), 'mb-7') }}">
                <!--begin::Symbol-->
                <div class="symbol symbol-60px symbol-2by3 me-4">
                    <div class="symbol-label" style="background-image: url('{{ asset($row['image']) }}')"></div>
                </div>
                <!--end::Symbol-->

                <!--begin::Content-->
                <div class="d-flex flex-row-fluid align-items-center flex-wrap my-lg-0 me-2">
                    <!--begin::Title-->
                    <div class="flex-grow-1 my-lg-0 my-2 me-2">
                        <a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">{{ $row['title'] }}</a>

                        <span class="text-muted fw-bold d-block pt-1">{{ $row['text'] }}</span>
                    </div>
                    <!--end::Title-->

                    <!--begin::Section-->
                    <div class="d-flex align-items-center">
                        <div class="me-6">
                            <i class="fa fa-star-half-alt me-1 text-warning fs-5"></i>

                            <span class="text-gray-800 fw-bolder">{{ $row['number'] }}</span>
                        </div>

                        <a href="#" class="btn btn-icon btn-light btn-sm border-0">
                            {!! theme()->getSvgIcon("icons/duotune/arrows/arr064.svg", "svg-icon-2 svg-icon-primary"); !!}
                        </a>
                    </div>
                    <!--end::Section-->
                </div>
                <!--end::Content-->
            </div>
            <!--end::Item-->
        @endforeach
    </div>
    <!--end::Body-->
</div>
<!--end::List Widget 8-->
