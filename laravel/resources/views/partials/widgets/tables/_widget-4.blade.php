<?php
    // Tab 1 table rows
    $tableRows = array(
        // Tab 1
        array(
            array(
                'image' => 'avatars/150-11.jpg',
                'user' => array(
                    'name' => 'Brad Simmons',
                    'position' => 'Movie Creator'
                ),
                'rating' => 5
            ),
            array(
                'image' => 'avatars/150-4.jpg',
                'user' => array(
                    'name' => 'Jessie Clarcson',
                    'position' => 'HTML, CSS Coding'
                ),
                'rating' => 5
            ),
            array(
                'image' => 'avatars/150-5.jpg',
                'user' => array(
                    'name' => 'Lebron Wayde',
                    'position' => 'ReactJS Developer'
                ),
                'rating' => 4
            ),
            array(
                'image' => 'avatars/150-6.jpg',
                'user' => array(
                    'name' => 'Natali Trump',
                    'position' => 'UI/UX Designer'
                ),
                'rating' => 5
            ),
            array(
                'image' => 'avatars/150-9.jpg',
                'user' => array(
                    'name' => 'Kevin Leonard',
                    'position' => 'Art Director'
                ),
                'rating' => 3
            )
        ),

        // Tab 2
        array(
            array(
                'image' => 'svg/avatars/043-boy-18.svg',
                'user' => array(
                    'name' => 'Kevin Leonard',
                    'position' => 'Art Director'
                ),
                'rating' => 3
            ),
            array(
                'image' => 'svg/avatars/014-girl-7.svg',
                'user' => array(
                    'name' => 'Natali Trump',
                    'position' => 'UI/UX Designer'
                ),
                'rating' => 5
            ),
            array(
                'image' => 'svg/avatars/018-girl-9.svg',
                'user' => array(
                    'name' => 'Jessie Clarcson',
                    'position' => 'HTML, CSS Coding'
                ),
                'rating' => 5
            ),
            array(
                'image' => 'svg/avatars/001-boy.svg',
                'user' => array(
                    'name' => 'Brad Simmons',
                    'position' => 'Movie Creator'
                ),
                'rating' => 5
            ),
        ),

        // Tab 3
        array(
            array(
                'image' => 'svg/avatars/018-girl-9.svg',
                'user' => array(
                    'name' => 'Jessie Clarcson',
                    'position' => 'HTML, CSS Coding'
                ),
                'rating' => 5
            ),
            array(
                'image' => 'svg/avatars/047-girl-25.svg',
                'user' => array(
                    'name' => 'Lebron Wayde',
                    'position' => 'ReactJS Developer'
                ),
                'rating' => 4
            ),
            array(
                'image' => 'svg/avatars/014-girl-7.svg',
                'user' => array(
                    'name' => 'Natali Trump',
                    'position' => 'UI/UX Designer'
                ),
                'rating' => 5
            ),
        ),
    );

    $loopIndex = 0;
?>

<!--begin::Tables Widget 4-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder fs-3 mb-1">New Members</span>

            <span class="text-muted mt-1 fw-bold fs-7">More than 400 new members</span>
        </h3>
        <div class="card-toolbar">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_4_tab_1">Month</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_4_tab_2">Week</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4" data-bs-toggle="tab" href="#kt_table_widget_4_tab_3">Day</a>
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
                <div class="tab-pane fade {{ $activeClass }}" id="kt_table_widget_4_tab_{{ $loopIndex }}">
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
                                            <div class="symbol symbol-50px">
                                                <img src="{{ asset(theme()->getMediaUrlPath() . $row['image']) }}" alt=""/>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="#" class="text-dark fw-bolder text-hover-primary mb-1 fs-6">{{ $row['user']['name'] }}</a>
                                            <span class="text-muted fw-bold d-block fs-7">{{ $row['user']['position'] }}</span>
                                        </td>
                                        <td>
                                            <span class="text-muted fw-bold d-block fs-7">
                                                Rating
                                            </span>

                                            <div class="rating">
                                                <?php for($i  = 1; $i <= 5;  $i++):?>
                                                    <div class="rating-label me-2 <?php echo ($row["rating"] >= $i ? 'checked' : '')?>">
                                                        <i class="bi bi-star-fill fs-5"></i>
                                                    </div>
                                                <?php endfor?>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <a href="#" class="btn btn-icon btn-light-twitter btn-sm me-3">
                                                <i class="bi bi-twitter fs-4"></i>
                                            </a>
                                            <a href="#" class="btn btn-icon btn-light-facebook btn-sm">
                                                <i class="bi bi-facebook fs-4"></i>
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
<!--end::Tables Widget 4-->
