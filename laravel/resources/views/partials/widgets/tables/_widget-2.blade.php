<?php
    // Table rows
    $tableRows = array(
        array(
            'image' => 'svg/brand-logos/plurk.svg',
            'info' => array(
                'title' => 'Top Authors',
                'description' => 'Successful Fellas'
            ),
            'badges' => array(
                array('label' => 'Angular', 'color' => 'danger'),
                array('label' => 'PHP', 'color' => 'info')
            ),
            'remarks' => '4600 Users'
        ),

        array(
            'image' => 'svg/brand-logos/telegram.svg',
            'info' => array(
                'title' => 'Popular Authors',
                'description' => 'Most Successful'
            ),
            'badges' => array(
                array('label' => 'HTML', 'color' => 'danger'),
                array('label' => 'CSS', 'color' => 'info')
            ),
            'remarks' => '7200 Users'
        ),

        array(
            'image' => 'svg/brand-logos/vimeo.svg',
            'info' => array(
                'title' => 'New Users',
                'description' => 'Awesome Users'
            ),
            'badges' => array(
                array('label' => 'React', 'color' => 'danger'),
                array('label' => 'SASS', 'color' => 'info')
            ),
            'remarks' => '890  Users'
        ),

        array(
            'image' => 'svg/brand-logos/bebo.svg',
            'info' => array(
                'title' => 'Active Customers',
                'description' => 'Best Customers'
            ),
            'badges' => array(
                array('label' => 'Java', 'color' => 'danger'),
                array('label' => 'PHP', 'color' => 'info')
            ),
            'remarks' => '6370 Users'
        ),

        array(
            'image' => 'svg/brand-logos/kickstarter.svg',
            'info' => array(
                'title' => 'Bestseller Theme',
                'description' => 'Amazing Templates'
            ),
            'badges' => array(
                array('label' => 'Python', 'color' => 'danger'),
                array('label' => 'MySQL', 'color' => 'info')
            ),
            'remarks' => '354 Users'
        )
    );
?>

<!--begin::Tables Widget 2-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bolder fs-3 mb-1">Latest Arrivals</span>

			<span class="text-muted mt-1 fw-bold fs-7">More than 100 new products</span>
		</h3>
        <div class="card-toolbar">
            <!--begin::Menu-->
            <button type="button" class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                {!! theme()->getSvgIcon("icons/duotune/general/gen024.svg", "svg-icon-2") !!}
            </button>
            {{ theme()->getView('partials/menus/_menu-1') }}
            <!--end::Menu-->
        </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
        <!--begin::Table container-->
        <div class="table-responsive">
            <!--begin::Table-->
            <table class="table align-middle gs-0 gy-5">
                <!--begin::Table head-->
                <thead>
                    <tr>
                        <th class="p-0 w-50px"></th>
                        <th class="p-0 min-w-150px"></th>
                        <th class="p-0 min-w-140px"></th>
                        <th class="p-0 min-w-120px"></th>
                        <th class="p-0 min-w-40px"></th>
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
                                        <img src="{{ asset(theme()->getMediaUrlPath() . $row['image']) }}" class="h-50 align-self-center" alt=""/>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <a href="#" class="text-dark fw-bolder text-hover-primary mb-1 fs-6">{{ $row['info']['title'] }}</a>
                                <span class="text-muted fw-bold d-block fs-7">{{ $row['info']['description'] }}</span>
                            </td>
                            <td class="text-end">
                                @foreach($row['badges'] as $badge)
                                    <span class="badge badge-light-{{ $badge['color'] }} fw-bold me-1">{{ $badge['label'] }}</span>
                                @endforeach
                            </td>
                            <td class="text-end">
                                <span class="text-muted fw-bold">
                                    {{ $row['remarks'] }}
                                </span>
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
            <!--end::Table-->
        </div>
        <!--end::Table container-->
    </div>
    <!--end::Body-->
</div>
<!--end::Tables Widget 2-->
