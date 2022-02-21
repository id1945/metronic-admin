<?php
    // Tab 1 table rows
    $tableRows = array(
        // Tab 1
        array(
            array(
                'icon' => array(
                    'file' => 'icons/duotune/coding/cod002.svg',
                    'color' => 'success'
                ),
                'info' => array(
                    'title' => 'Media Device',
                    'description' => 'Voice and video recorder'
                ),
                'date' => '5 day ago',
                'badge' => array(
                    'label' => 'Delivered',
                    'color' => 'success'
                )
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/general/gen024.svg',
                    'color' => 'danger'
                ),
                'info' => array(
                    'title' => 'Special Meal',
                    'description' => 'Quona Rice'
                ),
                'date' => '2 day ago',
                'badge' => array(
                    'label' => 'Delivered',
                    'color' => 'danger'
                )
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/maps/map004.svg',
                    'color' => 'primary'
                ),
                'info' => array(
                    'title' => 'New Users',
                    'description' => 'Awesome Users'
                ),
                'date' => '4 day ago',
                'badge' => array(
                    'label' => 'Delivered',
                    'color' => 'primary'
                )
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/abstract/abs027.svg',
                    'color' => 'warning'
                ),
                'info' => array(
                    'title' => 'Active Customers',
                    'description' => 'Best Customers'
                ),
                'date' => '1 day ago',
                'badge' => array(
                    'label' => 'Delivered',
                    'color' => 'warning'
                )
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/art/art007.svg',
                    'color' => 'info'
                ),
                'info' => array(
                    'title' => 'Strawberry Boxes',
                    'description' => 'From Spain'
                ),
                'date' => '7 day ago',
                'badge' => array(
                    'label' => 'Delivered',
                    'color' => 'info'
                )
            ),
        ),

        // Tab 2
        array(
            array(
                'icon' => array(
                    'file' => 'icons/duotune/abstract/abs042.svg',
                    'color' => 'info'
                ),
                'info' => array(
                    'title' => 'Strawberry Boxes',
                    'description' => 'From Spain'
                ),
                'date' => '4 week ago',
                'badge' => array(
                    'label' => 'Delivered',
                    'color' => 'info'
                )
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/general/gen024.svg',
                    'color' => 'danger'
                ),
                'info' => array(
                    'title' => 'Special Meal',
                    'description' => 'Quona Rice'
                ),
                'date' => '2 week ago',
                'badge' => array(
                    'label' => 'Delivered',
                    'color' => 'danger'
                )
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/abstract/abs027.svg',
                    'color' => 'warning'
                ),
                'info' => array(
                    'title' => 'Active Customers',
                    'description' => 'Best Customers'
                ),
                'date' => '5 week ago',
                'badge' => array(
                    'label' => 'Delivered',
                    'color' => 'warning'
                )
            ),
        ),

        // Tab 3
        array(
            array(
                'icon' => array(
                    'file' => 'icons/duotune/ecommerce/ecm002.svg',
                    'color' => 'success'
                ),
                'info' => array(
                    'title' => 'Media Device',
                    'description' => 'Voice and video recorder'
                ),
                'date' => '3 month ago',
                'badge' => array(
                    'label' => 'Delivered',
                    'color' => 'success'
                )
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/general/gen024.svg',
                    'color' => 'danger'
                ),
                'info' => array(
                    'title' => 'Special Meal',
                    'description' => 'Quona Rice'
                ),
                'date' => '5 month ago',
                'badge' => array(
                    'label' => 'Delivered',
                    'color' => 'danger'
                )
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/abstract/abs027.svg',
                    'color' => 'warning'
                ),
                'info' => array(
                    'title' => 'Active Customers',
                    'description' => 'Best Customers'
                ),
                'date' => '6 month ago',
                'badge' => array(
                    'label' => 'Delivered',
                    'color' => 'warning'
                )
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/abstract/abs042.svg',
                    'color' => 'info'
                ),
                'info' => array(
                    'title' => 'Strawberry Boxes',
                    'description' => 'From Spain'
                ),
                'date' => '4 month ago',
                'badge' => array(
                    'label' => 'Delivered',
                    'color' => 'info'
                )
            ),
        )
    );

    $loopIndex = 0;
?>

<!--begin::Table Widget 7-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder fs-3 mb-1">Latest  Orders</span>

            <span class="text-muted mt-1 fw-bold fs-7">More than 100 new orders</span>
        </h3>
        <div class="card-toolbar">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_7_tab_1">Month</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_7_tab_2">Week</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4" data-bs-toggle="tab" href="#kt_table_widget_7_tab_3">Day</a>
                </li>
            </ul>
        </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
        <div class="tab-content">
            @foreach($tableRows as $tableRows)
                <?php
                    $loopIndex++;
                    $activeClass = $loopIndex === 1 ?  'show active' : '';
                ?>

                <!--begin::Tap pane-->
                <div class="tab-pane fade {{ $activeClass }}" id="kt_table_widget_7_tab_{{ $loopIndex }}">
                    <!--begin::Table container-->
                    <div class="table-responsive">
                        <!--begin::Table-->
                        <table class="table align-middle gs-0 gy-3">
                            <!--begin::Table head-->
                            <thead>
                                <tr>
                                    <th class="p-0 w-50px"></th>
                                    <th class="p-0 min-w-150px"></th>
                                    <th class="p-0 min-w-140px"></th>
                                    <th class="p-0 min-w-120px"></th>
                                </tr>
                            </thead>
                            <!--end::Table head-->

                            <!--begin::Table body-->
                            <tbody>
                                @foreach($tableRows as $row)
                                    <tr>
                                        <td>
                                            <div class="symbol symbol-50px me-2">
                                                <span class="symbol-label bg-light-{{ $row['icon']['color'] }}">
                                                    {!! theme()->getSvgIcon($row['icon']['file'], "svg-icon-2x svg-icon-" . $row['icon']['color']); !!}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="#" class="text-dark fw-bolder text-hover-primary mb-1 fs-6">{{ $row['info']['title'] }}</a>
                                            <span class="text-muted fw-bold d-block fs-7">{{ $row['info']['description'] }}</span>
                                        </td>
                                        <td class="text-end">
                                            <span class="text-muted fw-bold d-block fs-8">Ordered</span>

                                            <span class="text-dark fw-bolder d-block fs-7">{{ $row['date'] }}</span>
                                        </td>
                                        <td class="text-end">
                                            <span class="badge badge-light-{{ $row['badge']['color'] }} fs-7 fw-bolder">{{ $row['badge']['label'] }}</span>
                                        </td>
                                        <td class="text-end">
                                            <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                <i class="bi bi-three-dots fs-5"></i>
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                            <!--end::Table body-->
                        </table>
                    </div>
                    <!--end::Table-->
                </div>
                <!--end::Tap pane-->
            @endforeach
        </div>
    </div>
    <!--end::Body-->
</div>
<!--end::Tables Widget 7-->
