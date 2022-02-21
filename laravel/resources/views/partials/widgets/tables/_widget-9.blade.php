<?php
    // Table rows
    $tableRows = array(
        array(
            'user' => array(
                'image' => 'avatars/150-11.jpg',
                'name' => 'Ana Simmons',
                'skills' => 'HTML, JS, ReactJS'
            ),
            'company' => array(
                'name' => 'Intertico',
                'skills' => 'Web, UI/UX Design'
            ),
            'progress' => array(
                'value' => '50',
                'color' => 'primary'
            )
        ),
        array(
            'user' => array(
                'image' => 'avatars/150-3.jpg',
                'name' => 'Jessie Clarcson',
                'skills' => 'C#, ASP.NET, MS SQL'
            ),
            'company' => array(
                'name' => 'Agoda',
                'skills' => 'Houses & Hotels'
            ),
            'progress' => array(
                'value' => '70',
                'color' => 'danger'
            )
        ),
        array(
            'user' => array(
                'image' => 'avatars/150-4.jpg',
                'name' => 'Lebron Wayde',
                'skills' => 'PHP, Laravel, VueJS'
            ),
            'company' => array(
                'name' => 'RoadGee',
                'skills' => 'Transportation'
            ),
            'progress' => array(
                'value' => '60',
                'color' => 'success'
            )
        ),
        array(
            'user' => array(
                'image' => 'avatars/150-5.jpg',
                'name' => 'Natali Goodwin',
                'skills' => 'Python, PostgreSQL, ReactJS'
            ),
            'company' => array(
                'name' => 'The Hill',
                'skills' => 'Insurance'
            ),
            'progress' => array(
                'value' => '50',
                'color' => 'warning'
            )
        ),
        array(
            'user' => array(
                'image' => 'avatars/150-6.jpg',
                'name' => 'Kevin Leonard',
                'skills' => 'HTML, JS, ReactJS'
            ),
            'company' => array(
                'name' => 'RoadGee',
                'skills' => 'Art Director'
            ),
            'progress' => array(
                'value' => '90',
                'color' => 'info'
            )
        ),
    );
?>

<!--begin::Tables Widget 9-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bolder fs-3 mb-1">Members Statistics</span>

			<span class="text-muted mt-1 fw-bold fs-7">Over 500 members</span>
		</h3>

        <div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a user">
            <a href="#" class="btn btn-sm btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
                {!! theme()->getSvgIcon("icons/duotune/arrows/arr075.svg", "svg-icon-3") !!}
                New Member
            </a>
        </div>
    </div>
    <!--end::Header-->

	<!--begin::Body-->
	<div class="card-body py-3">
        <!--begin::Table container-->
        <div class="table-responsive">
            <!--begin::Table-->
            <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                <!--begin::Table head-->
                <thead>
                    <tr class="fw-bolder text-muted">
                        <th class="w-25px">
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                                <input class="form-check-input" type="checkbox" value="1"  data-kt-check="true" data-kt-check-target=".widget-9-check"/>
                            </div>
                        </th>
                        <th class="min-w-150px">Authors</th>
                        <th class="min-w-140px">Company</th>
                        <th class="min-w-120px">Progress</th>
                        <th class="min-w-100px text-end">Actions</th>
                    </tr>
                </thead>
                <!--end::Table head-->

                <!--begin::Table body-->
                <tbody>
                    @foreach($tableRows as $row)
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input widget-9-check" type="checkbox" value="1"/>
                                </div>
                            </td>

                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-45px me-5">
                                        <img src="{{ asset(theme()->getMediaUrlPath() . $row['user']['image']) }}" alt=""/>
                                    </div>
                                    <div class="d-flex justify-content-start flex-column">
                                        <a href="#" class="text-dark fw-bolder text-hover-primary fs-6">{{ $row['user']['name'] }}</a>

                                        <span class="text-muted fw-bold text-muted d-block fs-7">{{ $row['user']['skills'] }}</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <a href="#" class="text-dark fw-bolder text-hover-primary d-block fs-6">{{ $row['company']['name'] }}</a>
                                <span class="text-muted fw-bold text-muted d-block fs-7">{{ $row['company']['skills'] }}</span>
                            </td>

                            <td class="text-end">
                                <div class="d-flex flex-column w-100 me-2">
                                    <div class="d-flex flex-stack mb-2">
                                        <span class="text-muted me-2 fs-7 fw-bold">
                                            {{ $row['progress']['value'] }}%
                                        </span>
                                    </div>

                                    <div class="progress h-6px w-100">
                                        <div class="progress-bar bg-{{ $row['progress']['color'] }}" role="progressbar" style="width: {{ $row['progress']['value'] }}%" aria-valuenow="{{ $row['progress']['value'] }}" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </td>

                            <td class="text-end">
                                <a href="#" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                    {!! theme()->getSvgIcon("icons/duotune/general/gen019.svg", "svg-icon-3") !!}
                                </a>

                                <a href="#" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                    {!! theme()->getSvgIcon("icons/duotune/art/art005.svg", "svg-icon-3") !!}
                                </a>

                                <a href="#" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                    {!! theme()->getSvgIcon("icons/duotune/general/gen027.svg", "svg-icon-3") !!}
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
<!--end::Tables Widget 9-->
