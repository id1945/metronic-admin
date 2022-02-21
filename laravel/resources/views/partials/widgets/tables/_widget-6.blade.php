<?php
    // Tab 1 table rows
    $tableRows = array(
        // Tab 1
        array(
            array(
                'image' => 'svg/avatars/001-boy.svg',
                'user' => array(
                    'name' => 'Brad Simmons',
                    'position' => 'Successful Fellas'
                ),
                'paid' => '$200,500',
                'progress' => array(
                    'value' => '+28%',
                    'color' => 'primary'
                )
            ),
            array(
                'image' => 'svg/avatars/018-girl-9.svg',
                'user' => array(
                    'name' => 'Jessie Clarcson',
                    'position' => 'HTML, CSS Coding'
                ),
                'paid' => '$1,200,000',
                'progress' => array(
                    'value' => '+52%',
                    'color' => 'warning'
                )
            ),
            array(
                'image' => 'svg/avatars/047-girl-25.svg',
                'user' => array(
                    'name' => 'Jessie Clarcson',
                    'position' => 'PHP, Laravel, VueJS'
                ),
                'paid' => '$1,200,000',
                'progress' => array(
                    'value' => '+52%',
                    'color' => 'danger'
                )
            ),
            array(
                'image' => 'svg/avatars/014-girl-7.svg',
                'user' => array(
                    'name' => 'Natali Trump',
                    'position' => 'UI/UX Designer'
                ),
                'paid' => '$3,400,000',
                'progress' => array(
                    'value' => '-34%',
                    'color' => 'success'
                )
            ),
            array(
                'image' => 'svg/avatars/043-boy-18.svg',
                'user' => array(
                    'name' => 'Kevin Leonard',
                    'position' => 'Art Director'
                ),
                'paid' => '$35,600,000',
                'progress' => array(
                    'value' => '+230%',
                    'color' => 'info'
                )
            ),
        ),

        // Tab 2
        array(
            array(
                'image' => 'svg/avatars/018-girl-9.svg',
                'user' => array(
                    'name' => 'Jessie Clarcson',
                    'position' => 'HTML, CSS Coding'
                ),
                'paid' => '$1,200,000',
                'progress' => array(
                    'value' => '+52%',
                    'color' => 'warning'
                )
            ),
            array(
                'image' => 'svg/avatars/014-girl-7.svg',
                'user' => array(
                    'name' => 'Natali Trump',
                    'position' => 'UI/UX Designer'
                ),
                'paid' => '$3,400,000',
                'progress' => array(
                    'value' => '-34%',
                    'color' => 'success'
                )
            ),
            array(
                'image' => 'svg/avatars/001-boy.svg',
                'user' => array(
                    'name' => 'Brad Simmons',
                    'position' => 'Successful Fellas'
                ),
                'paid' => '$200,500',
                'progress' => array(
                    'value' => '+28%',
                    'color' => 'primary'
                )
            ),
        ),

        // Tab 3
        array(
            array(
                'image' => 'svg/avatars/047-girl-25.svg',
                'user' => array(
                    'name' => 'Jessie Clarcson',
                    'position' => 'HTML, CSS Coding'
                ),
                'paid' => '$1,200,000',
                'progress' => array(
                    'value' => '+52%',
                    'color' => 'danger'
                )
            ),
            array(
                'image' => 'svg/avatars/014-girl-7.svg',
                'user' => array(
                    'name' => 'Natali Trump',
                    'position' => 'UI/UX Designer'
                ),
                'paid' => '$3,400,000',
                'progress' => array(
                    'value' => '-34%',
                    'color' => 'success'
                )
            ),
            array(
                'image' => 'svg/avatars/043-boy-18.svg',
                'user' => array(
                    'name' => 'Kevin Leonard',
                    'position' => 'Art Director'
                ),
                'paid' => '$35,600,000',
                'progress' => array(
                    'value' => '+230%',
                    'color' => 'info'
                )
            ),
            array(
                'image' => 'svg/avatars/001-boy.svg',
                'user' => array(
                    'name' => 'Brad Simmons',
                    'position' => 'Successful Fellas'
                ),
                'paid' => '$200,500',
                'progress' => array(
                    'value' => '+28%',
                    'color' => 'primary'
                )
            ),
        )
    );

    $loopIndex = 0;
?>

<!--begin::Table Widget 6-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder fs-3 mb-1">Authors Earnings</span>
            <span class="text-muted mt-1 fw-bold fs-7">More than 400 new authors</span>
        </h3>
        <div class="card-toolbar">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_6_tab_1">Month</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_6_tab_2">Week</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4" data-bs-toggle="tab" href="#kt_table_widget_6_tab_3">Day</a>
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
                <div class="tab-pane fade {{ $activeClass }}" id="kt_table_widget_6_tab_{{ $loopIndex }}">
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
                                                <span class="symbol-label">
                                                    <img src="{{ asset(theme()->getMediaUrlPath() . $row['image']) }}" class="h-75 align-self-end" alt=""/>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="#" class="text-dark fw-bolder text-hover-primary mb-1 fs-6">{{ $row['user']['name'] }}</a>
                                            <span class="text-muted fw-bold d-block">{{ $row['user']['position'] }}</span>
                                        </td>
                                        <td>
                                            <span class="text-muted fw-bold d-block fs-7">Paid</span>
                                            <span class="text-dark fw-bolder d-block fs-5">{{ $row['paid'] }}</span>
                                        </td>
                                        <td class="text-end">
                                            <span class="text-{{ $row['progress']['color'] }} fs-7 fw-bolder">{{ $row['progress']['value'] }}</span>
                                        </td>
                                        <td class="text-end">
                                            <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                {!! theme()->getSvgIcon("icons/duotune/arrows/arr064.svg", "svg-icon-2"); !!}
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
<!--end::Tables Widget 6-->
