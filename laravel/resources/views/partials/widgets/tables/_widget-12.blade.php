<?php
    // Table rows
    $tableRows = array(
        array(
            'agent' => array(
                'image' => 'svg/avatars/001-boy.svg',
                'name' => 'Brad Simmons',
                'skills' => 'HTML, JS, ReactJS'
            ),
            'earnings' => array(
                'value' => '$8,000,000',
                'remarks' => 'Pending'
            ),
            'comission' => array(
                'value' => '$5,400',
                'remarks' => 'Paid'
            ),
            'company' => array(
                'name' => 'Intertico',
                'fields' => 'Web, UI/UX Design'
            ),
            'rating' => array(
                'value' => 5,
                'remarks' => 'Best Rated'
            )
        ),
        array(
            'agent' => array(
                'image' => 'svg/avatars/047-girl-25.svg',
                'name' => 'Lebron Wayde',
                'skills' => 'PHP, Laravel, VueJS'
            ),
            'earnings' => array(
                'value' => '$8,750,000',
                'remarks' => 'Paid'
            ),
            'comission' => array(
                'value' => '$7,400',
                'remarks' => 'Paid'
            ),
            'company' => array(
                'name' => 'Agoda',
                'fields' => 'Houses & Hotels'
            ),
            'rating' => array(
                'value' => 4,
                'remarks' => 'Above Avarage'
            )
        ),
        array(
            'agent' => array(
                'image' => 'svg/avatars/006-girl-3.svg',
                'name' => 'Brad Simmons',
                'skills' => 'HTML, JS, ReactJS'
            ),
            'earnings' => array(
                'value' => '$8,000,000',
                'remarks' => 'In Proccess'
            ),
            'comission' => array(
                'value' => '$2,500',
                'remarks' => 'Rejected'
            ),
            'company' => array(
                'name' => 'RoadGee',
                'fields' => 'Paid'
            ),
            'rating' => array(
                'value' => 5,
                'remarks' => 'Best Rated'
            )
        ),
        array(
            'agent' => array(
                'image' => 'svg/avatars/014-girl-7.svg',
                'name' => 'Natali Trump',
                'skills' => 'HTML, JS, ReactJS'
            ),
            'earnings' => array(
                'value' => '$700,000',
                'remarks' => 'Pending'
            ),
            'comission' => array(
                'value' => '$7,760',
                'remarks' => 'Paid'
            ),
            'company' => array(
                'name' => 'The Hill',
                'fields' => 'Insurance'
            ),
            'rating' => array(
                'value' => 3,
                'remarks' => 'Avarage'
            )
        ),
        array(
            'agent' => array(
                'image' => 'svg/avatars/020-girl-11.svg',
                'name' => '	Jessie Clarcson',
                'skills' => 'HTML, JS, ReactJS'
            ),
            'earnings' => array(
                'value' => '$1,320,000',
                'remarks' => 'Pending'
            ),
            'comission' => array(
                'value' => '$6,250',
                'remarks' => 'Paid'
            ),
            'company' => array(
                'name' => 'Intertico',
                'fields' => 'Web, UI/UX Design'
            ),
            'rating' => array(
                'value' => 5,
                'remarks' => 'Best Rated'
            )
        )
    );
?>

<!--begin::Tables Widget 12-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bolder fs-3 mb-1">Member Statistics</span>

			<span class="text-muted mt-1 fw-bold fs-7">Over 500 new members</span>
		</h3>
        <div class="card-toolbar">
            <!--begin::Menu-->
            <button type="button" class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                {!! theme()->getSvgIcon("icons/duotune/general/gen024.svg", "svg-icon-2") !!}
            </button>
            {{ theme()->getView('partials/menus/_menu-2') }}
            <!--end::Menu-->
        </div>
    </div>
    <!--end::Header-->

	<!--begin::Body-->
	<div class="card-body py-3">
        <!--begin::Table container-->
        <div class="table-responsive">
            <!--begin::Table-->
            <table class="table align-middle gs-0 gy-4">
                <!--begin::Table head-->
                <thead>
                    <tr class="fw-bolder text-muted bg-light">
                        <th class="ps-4 min-w-300px rounded-start">Agent</th>
                        <th class="min-w-125px">Earnings</th>
                        <th class="min-w-125px">Comission</th>
                        <th class="min-w-200px">Company</th>
                        <th class="min-w-150px">Rating</th>
                        <th class="min-w-200px text-end rounded-end"></th>
                    </tr>
                </thead>
                <!--end::Table head-->

                <!--begin::Table body-->
                <tbody>
                    @foreach($tableRows as $row)
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-50px me-5">
                                        <span class="symbol-label bg-light">
                                            <img src="{{ asset(theme()->getMediaUrlPath() . $row['agent']['image']) }}" class="h-75 align-self-end" alt=""/>
                                        </span>
                                    </div>

                                    <div class="d-flex justify-content-start flex-column">
                                        <a href="#" class="text-dark fw-bolder text-hover-primary mb-1 fs-6">{{ $row['agent']['name'] }}</a>
                                        <span class="text-muted fw-bold text-muted d-block fs-7">{{ $row['agent']['skills'] }}</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <a href="#" class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{{ $row['earnings']['value'] }}</a>
                                <span class="text-muted fw-bold text-muted d-block fs-7">{{ $row['earnings']['remarks'] }}</span>
                            </td>

                            <td>
                                <a href="#" class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{{ $row['comission']['value'] }}</a>
                                <span class="text-muted fw-bold text-muted d-block fs-7">{{ $row['comission']['remarks'] }}</span>
                            </td>

                            <td>
                                <a href="#" class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{{ $row['company']['name'] }}</a>
                                <span class="text-muted fw-bold text-muted d-block fs-7">{{ $row['company']['fields'] }}</span>
                            </td>

                            <td>
                                <div class="rating">
                                    <?php for($i  = 1; $i <= 5;  $i++):?>
                                        <div class="rating-label me-2 <?php echo ($row["rating"]['value'] >= $i ? 'checked' : '')?>">
                                            <i class="bi bi-star-fill fs-5"></i>
                                        </div>
                                    <?php endfor?>
                                </div>

                                <span class="text-muted fw-bold text-muted d-block fs-7 mt-1">{{ $row['rating']['remarks'] }}</span>
                            </td>

                            <td class="text-end">
                                <a href="#" class="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2">
                                    View
                                </a>

                                <a href="#" class="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4">
                                    Edit
                                </a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
                <!--end::Table body-->
            </table>
            <!--end::Table-->
        </div>
        <!--end::Table container-->
	</div>
	<!--begin::Body-->
</div>
<!--end::Tables Widget 12-->
