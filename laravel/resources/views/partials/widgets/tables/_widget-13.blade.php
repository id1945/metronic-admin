<?php
    // Table rows
    $tableRows = array(
        array(
            'orderid' => '56037-XDER',
            'country' => array(
                'name' => 'Brasil',
                'code' => 'PH'
            ),
            'date' => array(
                'value' => '05/28/2020',
                'remarks' => 'Paid'
            ),
            'progress' => array(
                'value' => '50',
                'color' => 'primary'
            ),
            'company' => array(
                'name' => 'Intertico',
                'fields' => 'Web, UI/UX Design'
            ),
            'status' => array(
                'label' => 'Approved',
                'color' => 'success'
            ),
            'total' => '$3560'
        ),
        array(
            'orderid' => '05822-FXSP',
            'country' => array(
                'name' => 'Belarus',
                'code' => 'BY'
            ),
            'date' => array(
                'value' => '04/18/2021',
                'remarks' => 'Paid'
            ),
            'progress' => array(
                'value' => '50',
                'color' => 'primary'
            ),
            'company' => array(
                'name' => 'Agoda',
                'fields' => 'Houses & Hotels'
            ),
            'status' => array(
                'label' => 'In Progress',
                'color' => 'warning'
            ),
            'total' => '$4850'
        ),
        array(
            'orderid' => '4472-QREX',
            'country' => array(
                'name' => 'Phillipines',
                'code' => 'BH'
            ),
            'date' => array(
                'value' => '07/23/2019',
                'remarks' => 'Paid'
            ),
            'progress' => array(
                'value' => '50',
                'color' => 'primary'
            ),
            'company' => array(
                'name' => 'RoadGee',
                'fields' => 'Transportation'
            ),
            'status' => array(
                'label' => 'Success',
                'color' => 'danger'
            ),
            'total' => '$8376'
        ),
        array(
            'orderid' => '00347-BCLQ',
            'country' => array(
                'name' => 'Argentina',
                'code' => 'BR'
            ),
            'date' => array(
                'value' => '12/21/2021',
                'remarks' => 'Paid'
            ),
            'progress' => array(
                'value' => '50',
                'color' => 'primary'
            ),
            'company' => array(
                'name' => 'The Hill',
                'fields' => 'Insurance'
            ),
            'status' => array(
                'label' => 'Rejected',
                'color' => 'info'
            ),
            'total' => '$9486'
        ),
        array(
            'orderid' => '59486-XDER',
            'country' => array(
                'name' => 'Agoda',
                'code' => 'BT'
            ),
            'date' => array(
                'value' => '05/28/2020',
                'remarks' => 'Paid'
            ),
            'progress' => array(
                'value' => '50',
                'color' => 'primary'
            ),
            'company' => array(
                'name' => 'Phillipines',
                'fields' => 'Transportation'
            ),
            'status' => array(
                'label' => 'Approved',
                'color' => 'primary'
            ),
            'total' => '$8476'
        ),
    );
?>

<!--begin::Tables Widget 13-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bolder fs-3 mb-1">Recent Orders</span>

			<span class="text-muted mt-1 fw-bold fs-7">Over 500 orders</span>
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
            <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                <!--begin::Table head-->
                <thead>
                    <tr class="fw-bolder text-muted">
                        <th class="w-25px">
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                                <input class="form-check-input" type="checkbox" value="1" data-kt-check="true" data-kt-check-target=".widget-13-check"/>
                            </div>
                        </th>
                        <th class="min-w-150px">Order Id</th>
                        <th class="min-w-140px">Country</th>
                        <th class="min-w-120px">Date</th>
                        <th class="min-w-120px">Company</th>
                        <th class="min-w-120px">Total</th>
                        <th class="min-w-120px">Status</th>
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
                                    <input class="form-check-input widget-13-check" type="checkbox" value="1"/>
                                </div>
                            </td>

                            <td>
                                <a href="#" class="text-dark fw-bolder text-hover-primary fs-6">{{ $row['orderid'] }}</a>
                            </td>

                            <td>
                                <a href="#" class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{{ $row['country']['name'] }}</a>
                                <span class="text-muted fw-bold text-muted d-block fs-7">Code: {{ $row['country']['code'] }}</span>
                            </td>

                            <td>
                                <a href="#" class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{{ $row['date']['value'] }}</a>
                                <span class="text-muted fw-bold text-muted d-block fs-7">Code: {{ $row['date']['remarks'] }}</span>
                            </td>

                            <td>
                                <a href="#" class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{{ $row['company']['name'] }}</a>
                                <span class="text-muted fw-bold text-muted d-block fs-7">{{ $row['company']['fields'] }}</span>
                            </td>

                            <td class="text-dark fw-bolder text-hover-primary fs-6">
                                {{ $row['total'] }}
                            </td>

                            <td>
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
<!--end::Tables Widget 13-->
