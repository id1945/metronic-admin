<?php
    // List items
    $listRows = array(
        array(
            'image' => 'svg/brand-logos/plurk.svg',
            'title' => 'Top Authors',
            'text' => 'Mark, Rowling, Esther',
            'badge' => '+82$'
        ),
        array(
            'image' => 'svg/brand-logos/telegram.svg',
            'title' => 'Popular Authors',
            'text' => 'Randy, Steve, Mike',
            'badge' => '+280$'
        ),
        array(
            'image' => 'svg/brand-logos/vimeo.svg',
            'title' => 'New Users',
            'text' => 'John, Pat, Jimmy',
            'badge' => '+4500$'
        ),
        array(
            'image' => 'svg/brand-logos/bebo.svg',
            'title' => 'Active Customers',
            'text' => 'Mark, Rowling, Esther',
            'badge' => '+4500$'
        ),
        array(
            'image' => 'svg/brand-logos/kickstarter.svg',
            'title' => 'Bestseller Theme',
            'text' => 'Disco, Retro, Sports',
            'badge' => '+4500$',
            'space' => ''
        ),
        array(
            'image' => 'svg/brand-logos/fox-hub.svg',
            'title' => 'Fox Broker App',
            'text' => 'Finance, Corporate, Apps',
            'badge' => '+4500$'
        ),
    );

    $items = $items ?? 0;
?>


<!--begin::List Widget 4-->
<div class="card {{ $class }}">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bolder text-dark">Trends</span>

			<span class="text-muted mt-1 fw-bold fs-7">Latest tech trends</span>
		</h3>

        <div class="card-toolbar">
            <!--begin::Menu-->
            <button type="button" class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                {!! theme()->getSvgIcon("icons/duotune/general/gen024.svg", "svg-icon-2") !!}
            </button>
            {{ theme()->getView('partials/menus/_menu-3') }}
            <!--end::Menu-->
        </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-5">
        @foreach($listRows as $index => $row)
            <?php
                if ($items > 0 && $index > ($items - 1)) {
                    break;
                }
            ?>

            <!--begin::Item-->
            <div class="d-flex align-items-sm-center {{ util()->putIf(next($listRows), 'mb-7') }}">
                <!--begin::Symbol-->
                <div class="symbol symbol-50px me-5">
                    <span class="symbol-label">
                        <img src="{{ asset(theme()->getMediaUrlPath() . $row['image']) }}" class="h-50 align-self-center" alt=""/>
                    </span>
                </div>
                <!--end::Symbol-->

                <!--begin::Section-->
                <div class="d-flex align-items-center flex-row-fluid flex-wrap">
                    <div class="flex-grow-1 me-2">
                        <a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bolder">{{ $row['title'] }}</a>

                        <span class="text-muted fw-bold d-block fs-7">{{ $row['text'] }}</span>
                    </div>

                    <span class="badge badge-light fw-bolder my-2">{{ $row['badge'] }}</span>
                </div>
                <!--end::Section-->
            </div>
            <!--end::Item-->
        @endforeach
    </div>
    <!--end::Body-->
</div>
<!--end::List Widget 4-->
