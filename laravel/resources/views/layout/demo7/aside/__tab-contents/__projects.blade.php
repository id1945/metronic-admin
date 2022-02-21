@php
    $items = array(
        array(
            'image' => 'svg/brand-logos/bebo.svg',
            'title' => 'Briviba SaaS',
            'link' => 'By James'
        ),

        array(
            'image' => 'svg/brand-logos/vimeo.svg',
            'title' => 'Vine Quick Reports',
            'link' => 'By Andres',
        ),

        array(
            'image' => 'svg/brand-logos/kickstarter.svg',
            'title' => 'KC Account CRM',
            'link' => 'By Keenthemes',
        ),

        array(
            'image' => 'svg/brand-logos/balloon.svg',
            'title' => 'Baloon SaaS',
            'link' => 'By SIA Team',
        ),

        array(
            'image' => 'svg/brand-logos/infography.svg',
            'title' => 'Most Cloudy UMC',
            'link' => 'By Andrei',
        ),

        array(
            'image' => 'svg/brand-logos/disqus.svg',
            'title' => 'Disqus Forum',
            'link' => 'By Disqus Inc.',
        ),

        array(
            'image' => 'svg/brand-logos/plurk.svg',
            'title' => 'Proove Quick CRM',
            'link' => 'By Proove Limited',
        )
    );
@endphp

<!--begin::Wrapper-->
<div class="m-0">
    <!--begin::Toolbar-->
    <div class="d-flex mb-10">
         {{ theme()->getView('layout/search/_base') }}

        <!--begin::Filter-->
        <div class="flex-shrink-0 ms-2">
            <!--begin::Menu toggle-->
            <button type="button" class="btn btn-icon btn-bg-light btn-active-icon-primary btn-color-gray-400" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                {!! theme()->getSvgIcon("icons/duotune/general/gen031.svg", "svg-icon-2") !!}
            </button>
            <!--end::Menu toggle-->

            <!--begin::Menu-->
             {{ theme()->getView('partials/menus/_menu-1') }}
            <!--end::Menu-->
        </div>
        <!--end::Filter-->
    </div>
    <!--end::Toolbar-->

    <!--begin::Projects-->
    <div class="m-0">
        <!--begin::Heading-->
        <h1 class="text-gray-800 fw-bold mb-6 mx-5">Projects</h1>
        <!--end::Heading-->

        <!--begin::Items-->
        <div class="mb-10">
            @foreach($items as $item)
            <!--begin::Item-->
            <a href=" {{ theme()->getPageUrl('pages/projects/project') }}" class="custom-list d-flex align-items-center px-5 py-4">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px me-5">
                    <span class="symbol-label">
                        <img src=" {{ asset(theme()->getMediaUrlPath() . $item['image']) }}" class="h-50 align-self-center" alt=""/>
                    </span>
                </div>
                <!--end::Symbol-->

                <!--begin::Description-->
                <div class="d-flex flex-column flex-grow-1">
                    <!--begin::Title-->
                    <h5 class="custom-list-title fw-bold text-gray-800 mb-1">{{ $item['title'] }}</h5>
                    <!--end::Title-->

                    <!--begin::Link-->
                    <span class="text-gray-400 fw-bold">{{ $item['link'] }}</span>
                    <!--end::Link-->
                </div>
                <!--begin::Description-->
            </a>
            <!--end::Item-->
            @endforeach
        </div>
        <!--end::Items-->
    </div>
    <!--end::Projects-->
</div>
<!--end::Wrapper-->

