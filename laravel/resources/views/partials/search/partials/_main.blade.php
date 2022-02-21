<?php
    // List items
    $items = array(
        array(
            'icon' => 'icons/duotune/electronics/elc004.svg',
            'title' => 'BoomApp by Keenthemes',
            'number' => '#45789'
        ),
        array(
            'icon' => 'icons/duotune/graphs/gra001.svg',
            'title' => '"Kept API Project Meeting',
            'number' => '#84050'
        ),
        array(
            'icon' => 'icons/duotune/graphs/gra006.svg',
            'title' => '"KPI Monitoring App Launch',
            'number' => '#84250'
        ),
        array(
            'icon' => 'icons/duotune/graphs/gra003.svg',
            'title' => 'Project Reference FAQ',
            'number' => '#67945'
        ),
        array(
            'icon' => 'icons/duotune/communication/com010.svg',
            'title' => '"FitPro App Development',
            'number' => '#84250'
        ),
        array(
            'icon' => 'icons/duotune/finance/fin001.svg',
            'title' => 'Shopix Mobile App',
            'number' => '#45690'
        ),
        array(
            'icon' => 'icons/duotune/graphs/gra002.svg',
            'title' => '"Landing UI Design" Launch',
            'number' => '#24005'
        ),
    );
?>
<!--begin::Recently viewed-->
<div class="mb-4" data-kt-search-element="main">
    <!--begin::Heading-->
    <div class="d-flex flex-stack fw-bold mb-4">
        <!--begin::Label-->
        <span class="text-muted fs-6 me-2">Recently Searched:</span>
        <!--end::Label-->
    </div>
    <!--end::Heading-->

    <!--begin::Items-->
    <div class="scroll-y mh-200px mh-lg-325px">
        <?php foreach($items as $item):?>
            <!--begin::Item-->
            <div class="d-flex align-items-center mb-5">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px me-4">
                    <span class="symbol-label bg-light">
                        {!! theme()->getSvgIcon($item['icon'], "svg-icon-2 svg-icon-primary") !!}
                    </span>
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column">
                    <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">{{ $item['title'] }}</a>
                    <span class="fs-7 text-muted fw-bold">{{ $item['number'] }}</span>
                </div>
                <!--end::Title-->
            </div>
            <!--end::Item-->
        <?php endforeach?>
    </div>
    <!--end::Items-->
</div>
<!--end::Recently viewed-->
