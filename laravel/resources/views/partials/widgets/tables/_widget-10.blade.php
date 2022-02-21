<?php
    // Table rows
    $tableRows = array(
        array(
            'price' => '$560,000',
            'technologies' => 'Laravel, Metronic',
            'status' => array(
                'label' => 'Approved',
                'color' => 'success'
            )
        ),
        array(
            'price' => '$2,000,000',
            'technologies' => 'ReactJs, HTML',
            'status' => array(
                'label' => 'In Progress',
                'color' => 'warning'
            )
        ),
        array(
            'price' => '$760,000',
            'technologies' => 'Python, MySQL',
            'status' => array(
                'label' => 'Success',
                'color' => 'danger'
            )
        ),
        array(
            'price' => '$257,000',
            'technologies' => 'ReactJS, Ruby',
            'status' => array(
                'label' => 'Rejected',
                'color' => 'info'
            )
        ),
        array(
            'price' => '$560,000',
            'technologies' => 'AngularJS, C#',
            'status' => array(
                'label' => 'In Progress',
                'color' => 'primary'
            )
        ),
    );
?>

<!--begin::Tables Widget 10-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bolder fs-3 mb-1">New Products</span>

			<span class="text-muted mt-1 fw-bold fs-7">Over 500 new products</span>
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
	<div class="card-body pt-3">
        <!--begin::Table container-->
        <div class="table-responsive">
            <!--begin::Table-->
            <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                <!--begin::Table head-->
                <thead>
                    <tr class="border-0">
                        <th class="p-0 "></th>
                        <th class="p-0 min-w-150px"></th>
                        <th class="p-0 min-w-200px"></th>
                        <th class="p-0 min-w-150px"></th>
                        <th class="p-0 min-w-100px text-end"></th>
                    </tr>
                </thead>
                <!--end::Table head-->

                <!--begin::Table body-->
                <tbody>
                    @foreach($tableRows as $index => $row)
                        <?php
                            $user = \App\Core\Data::getSampleUserInfo($index);
                        ?>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <!--begin::Avatar-->
                                    <div class="symbol symbol-45px me-5">
                                        @if (isset($user['avatar']))
                                            <img alt="Pic" src="{{ asset(theme()->getMediaUrlPath() . $user['avatar']) }}" />
                                        @else
                                            <span class="symbol-label bg-light-{{ $user['initials']['state'] }} text-{{ $user['initials']['state'] }} fw-bolder">
                                                {{ $user['initials']['label'] }}
                                            </span>
                                        @endif
                                    </div>
                                    <!--end::Avatar-->

                                    <!--begin::Name-->
                                    <div class="d-flex justify-content-start flex-column">
                                        <a href="#" class="text-dark fw-bolder text-hover-primary mb-1 fs-6">{{ $user['name'] }}</a>

                                        <a href="#" class="text-muted text-hover-primary fw-bold text-muted d-block fs-7">
                                            <span class="text-dark">Email</span>: {{ $user['email'] }}
                                        </a>
                                    </div>
                                    <!--end::Name-->
                                </div>
                            </td>

                            <td class="text-end">
                                <a href="#" class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{{ $row['price'] }}</a>
                                <span class="text-muted fw-bold text-muted d-block fs-7">Paid</span>
                            </td>

                            <td class="text-muted fw-bold text-end">
                                {{ $row['technologies'] }}
                            </td>

                            <td class="text-end">
                                <span class="badge badge-light-{{ $row['status']['color'] }}">{{ $row['status']['label'] }}</span>
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
<!--end::Tables Widget 10-->
