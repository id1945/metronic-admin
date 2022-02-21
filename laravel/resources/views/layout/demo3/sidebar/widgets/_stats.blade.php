@php
    $data = array(
        'tasks' => array(
            'title' => 'Assigned Tasks',
            'items' => array(
                array(
                    'label' => 'Pending',
                    'value' => '100'
                ),
                array(
                    'label' => 'Completed',
                    'value' => '210'
                ),
                array(
                    'label' => 'On Hold',
                    'value' => '10'
                ),
                array(
                    'label' => 'In Progress',
                    'value' => '55'
                )
            )
        ),

        'orders' => array(
            'title' => 'Customer Orders',
            'items' => array(
                array(
                    'label' => 'In Process',
                    'value' => '40'
                ),
                array(
                    'label' => 'Delivered',
                    'value' => '110'
                ),
                array(
                    'label' => 'On Hold',
                    'value' => '29'
                ),
                array(
                    'label' => 'In Progress',
                    'value' => '15'
                )
            )
        ),

        'tickets' => array(
            'title' => 'Support Tickets',
            'items' => array(
                array(
                    'label' => 'Pending',
                    'value' => '28'
                ),
                array(
                    'label' => 'Completed',
                    'value' => '204'
                ),
                array(
                    'label' => 'On Hold',
                    'value' => '76'
                ),
                array(
                    'label' => 'In Progress',
                    'value' => '9'
                )
            )
        ),

        'notifcations' => array(
            'title' => 'Notifcations',
            'items' => array(
                array(
                    'label' => 'System Alert',
                    'value' => '5'
                ),
                array(
                    'label' => 'Server Failure',
                    'value' => '10'
                ),
                array(
                    'label' => 'User Feedback',
                    'value' => '40'
                ),
                array(
                    'label' => 'Backup',
                    'value' => '3'
                )
            )
        ),

        'mail' => array(
            'title' => 'Outgoing Emails',
            'items' => array(
                array(
                    'label' => 'Sending',
                    'value' => '160'
                ),
                array(
                    'label' => 'Sent',
                    'value' => '2600'
                ),
                array(
                    'label' => 'Delivered',
                    'value' => '2500'
                ),
                array(
                    'label' => 'Failed',
                    'value' => '11'
                )
            )
        )
    );

    $category = $data[$category];

    $items = $category['items'];
    $title = $category['title'];
@endphp
<!--begin::Statistics Widget-->
<div class="card card-flush card-p-0 shadow-none bg-transparent mb-10">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0">
        <!--begin::Title-->
        <h3 class="card-title fw-bolder text-white fs-3">{{ $title }}</h3>
        <!--end::Title-->

        <!--begin::Toolbar-->
        <div class="card-toolbar">
            <button type="button" class="btn btn-icon btn-icon-white btn-active-color-primary me-n4" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="bottom-end">
                {!! theme()->getSvgIcon("icons/duotune/general/gen024.svg", "svg-icon-2") !!}
            </button>
            {{ theme()->getView('partials/menus/_menu-2') }}
        </div>
        <!--end::Title-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body">
        <!--begin::Row-->
        <div class="row g-5">
            @foreach($items as $item)
                <!--begin::Col-->
                <div class="col-6">
                    <!--begin::Item-->
                    <div class="sidebar-border-dashed d-flex flex-column justify-content-center rounded p-3 p-xxl-5">
                        <!--begin::Value-->
                        <div class="text-white fs-2 fs-xxl-2x fw-bolder mb-1" data-kt-countup="true" data-kt-countup-value="{{ $item['value'] }}" data-kt-countup-prefix="">
                        0
                        </div>
                        <!--begin::Value-->

                        <!--begin::Label-->
                        <div class="sidebar-text-muted fs-6 fw-bold">
                            {{ $item['label'] }}
                        </div>
                        <!--end::Label-->
                    </div>
                    <!--end::Item-->
                </div>
                <!--end::Col-->
            @endforeach
        </div>
        <!--end::Row-->
    </div>
    <!--end::Card Body-->
</div>
<!--end::Statistics Widget-->
