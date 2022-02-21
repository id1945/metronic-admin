<?php
    // Tab 1 table rows
    $tableRows = array(
        // Tab 1
        array(
            array(
                'icon' => array(
                    'file' => 'icons/duotune/coding/cod002.svg',
                    'color' => 'danger'
                ),
                'info' => array(
                    'event' => 'School Music Festival',
                    'user' => 'by Rose Liam'
                ),
                'date' => '4:20PM, 03 Sep'
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/general/gen024.svg',
                    'color' => 'warning'
                ),
                'info' => array(
                    'event' => 'Maths Championship',
                    'user' => 'By Tom Gere'
                ),
                'date' => '10:05PM, 25 Oct'
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/maps/map004.svg',
                    'color' => 'info'
                ),
                'info' => array(
                    'event' => 'Who Knows Geography',
                    'user' => 'By Zoey Dylan'
                ),
                'date' => '3:22PM, 07 Sep'
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/abstract/abs027.svg',
                    'color' => 'primary'
                ),
                'info' => array(
                    'event' => 'Napoleon Days',
                    'user' => 'By Luke Owen'
                ),
                'date' => '1:20PM, 02 Dec'
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/art/art007.svg',
                    'color' => 'success'
                ),
                'info' => array(
                    'event' => 'The School Art Leads',
                    'user' => 'By Ellie Cole'
                ),
                'date' => '6:20PM, 07 Sep'
            ),
        ),

        // Tab 2
        array(
            array(
                'icon' => array(
                    'file' => 'icons/duotune/maps/map004.svg',
                    'color' => 'info'
                ),
                'info' => array(
                    'event' => 'Who Knows Geography',
                    'user' => 'By Zoey Dylan'
                ),
                'date' => '3:22PM, 07 Sep'
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/general/gen024.svg',
                    'color' => 'warning'
                ),
                'info' => array(
                    'event' => 'Maths Championship',
                    'user' => 'By Tom Gere'
                ),
                'date' => '10:05PM, 25 Oct'
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/coding/cod002.svg',
                    'color' => 'danger'
                ),
                'info' => array(
                    'event' => 'School Music Festival',
                    'user' => 'by Rose Liam'
                ),
                'date' => '4:20PM, 03 Sep'
            ),
        ),

        // Tab 3
        array(
            array(
                'icon' => array(
                    'file' => 'icons/duotune/general/gen024.svg',
                    'color' => 'warning'
                ),
                'info' => array(
                    'event' => 'Maths Championship',
                    'user' => 'By Tom Gere'
                ),
                'date' => '10:05PM, 25 Oct'
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/maps/map004.svg',
                    'color' => 'info'
                ),
                'info' => array(
                    'event' => 'Who Knows Geography',
                    'user' => 'By Zoey Dylan'
                ),
                'date' => '3:22PM, 07 Sep'
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/abstract/abs027.svg',
                    'color' => 'primary'
                ),
                'info' => array(
                    'event' => 'Napoleon Days',
                    'user' => 'By Luke Owen'
                ),
                'date' => '1:20PM, 02 Dec'
            ),
            array(
                'icon' => array(
                    'file' => 'icons/duotune/coding/cod002.svg',
                    'color' => 'danger'
                ),
                'info' => array(
                    'event' => 'School Music Festival',
                    'user' => 'by Rose Liam'
                ),
                'date' => '4:20PM, 03 Sep'
            ),
        )
    );

    $loopIndex = 0;
?>

<!--begin::Table Widget 8-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder fs-3 mb-1">Latest Products</span>
            <span class="text-muted mt-1 fw-bold fs-7">More than 100 new orders</span>
        </h3>
        <div class="card-toolbar">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_8_tab_1">Month</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_8_tab_2">Week</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4" data-bs-toggle="tab" href="#kt_table_widget_8_tab_3">Day</a>
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
                <div class="tab-pane fade {{ $activeClass }}" id="kt_table_widget_8_tab_{{ $loopIndex }}">
                    <!--begin::Table container-->
                    <div class="table-responsive">
                        <!--begin::Table-->
                        <table class="table align-middle gs-0 gy-3">
                            <!--begin::Table head-->
                            <thead>
                                <tr>
                                    <th class="p-0 w-50px"></th>
                                    <th class="p-0 min-w-150px"></th>
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
                                            <a href="#" class="text-dark fw-bolder text-hover-primary mb-1 fs-6">{{ $row['info']['event'] }}</a>
                                            <span class="text-muted fw-bold d-block fs-7">{{ $row['info']['user'] }}</span>
                                        </td>
                                        <td class="text-end">
                                            <span class="text-dark fw-bolder d-block fs-7">{{ $row['date'] }}</span>

                                            <span class="text-muted fw-bold d-block fs-8">Date</span>
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
<!--end::Tables Widget 8-->
