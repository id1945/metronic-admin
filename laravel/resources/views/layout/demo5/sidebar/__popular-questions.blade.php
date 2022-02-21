<?php
    $items = array(
        array(
            'title' => 'How to use Metrponic with Django Framework ?',
        ),
        array(
            'title' => 'When to expect new version of Metronic Laravel ?',
        ),
        array(
            'title' => 'Could not get Metronic Demo 7 working',
        ),
        array(
            'title' => 'I want to get a refund',
        ),
        array(
            'title' => 'How to use Metrponic with Rails Framework ?',
        ),
    );
?>
<!--begin::Popular Questions-->
<div class="card bg-light mb-5 mb-lg-10 shadow-none border-0">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0">
        <!--begin::Title-->
        <h3 class="card-title fw-bolder text-gray-900 fs-3">Popular Questions</h3>
        <!--end::Title-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-0">
        <?php foreach($items as $item):?>
            <!--begin::Item-->
            <div class="d-flex {{ next($items) ? 'mb-5': '' }}">
                <!--begin::Arrow-->
                {!! theme()->getSvgIcon("icons/duotune/general/gen057.svg", "svg-icon-2 mt-0 me-2") !!}
                <!--end::Arrow-->

                <!--begin::Title-->
                <a href="{{ theme()->getPageUrl('apps/devs/question') }}" class="text-gray-700 text-hover-primary fs-6 fw-bold">
                    {{ $item['title'] }}
                </a>
                <!--end::Title-->
            </div>
            <!--end::Item-->
        <?php endforeach?>
    </div>
    <!--end: Card Body-->
</div>
<!--end::Popular Questions-->
