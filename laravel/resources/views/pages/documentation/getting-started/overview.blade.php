<x-base-layout>

@php
    $items = [
        [
            'color' => 'info',
            'title' => 'Quick Installation',
            'description' => 'Install the dependencies using Yarn or NPM and use our custom made Gulp or Webapck build tools to get your project up and running literally in a minutes.',
            'icon' => 'icons/duotune/coding/cod001.svg',
            'link-text' => 'Install now',
            'link-path' => 'documentation/getting-started/build',
            'target' => '',
        ],

        [
            'color' => 'success',
            'title' => 'Layout Builder',
            'description' => 'Just build your layout, preview it in real time and export the HTML template with it\'s includable partials for your server side integration.',
            'icon' => 'icons/duotune/art/art006.svg',
            'link-text' => 'Preview and export',
            'link-path' => theme()->getOption('product', 'preview') . '/' . theme()->getDemo() . '/layout-builder.html',
            'target' => '_blank',
        ],

        [
            'color' => 'danger',
            'title' => 'Extended Utility Classes',
            'description' => 'Build whatever you want without a single line of CSS/SASS code by just using our low-level utility classes and base components.',
            'icon' => 'icons/duotune/abstract/abs027.svg',
            'link-text' => 'Learn more',
            'link-path' => theme()->getOption('product', 'preview') . '/' . theme()->getDemo() . '/documentation/base/utilities.html',
            'target' => '_blank',
        ],

        [
            'color' => 'warning',
            'title' => '40+ In-house Components',
            'description' => 'Our exclusive components such as KTMenu, KTPasswordMeter, KTDrawer are made to empower your next project with our novel UI/UX vision.',
            'icon' => 'icons/duotune/art/art006.svg',
            'link-text' => 'Browse components',
            'link-path' => theme()->getOption('product', 'preview') . '/' . theme()->getDemo() . '/documentation/forms/password-meter.html',
            'target' => '_blank',
        ],

        [
            'color' => 'success',
            'title' => '3rd Party Plugins',
            'description' => 'All popular 3rd-party plugins are deeply customized to meet our design system requirements and look alike with the rest of the in-house components.',
            'icon' => 'icons/duotune/general/gen025.svg',
            'link-text' => 'Learn more',
            'link-path' => theme()->getOption('product', 'preview') . '/' . theme()->getDemo() . '/documentation/forms/flatpickr.html',
            'target' => '_blank',
        ],

        [
            'color' => 'primary',
            'title' => 'SVG & Font Icons',
            'description' => 'Fulfill your icon needs with over 5000 available icons from SVG Duotone, Bootstrap Icons, Font Awesome, and Line Awesome sets.',
            'icon' => 'icons/duotune/abstract/abs027.svg',
            'link-text' => 'Browse icons',
            'link-path' => theme()->getOption('product', 'preview') . '/' . theme()->getDemo() . '/documentation/general/icons/duotone.html',
            'target' => '_blank',
        ]
    ];
@endphp

<!--begin::Section-->
    <div class="px-md-10 pt-md-10 pb-md-5">
        <!--begin::Block-->
        <div class="text-center mb-20">
            <h1 class="fs-2tx fw-bolder mb-8">
                Rapidly build modern web apps with
                <span class="d-inline-block position-relative ms-2">
                <span class="d-inline-block mb-2">
                    <?php if(theme()->isFreeVersion() === true):?>
                    {{ theme()->getOption('product', 'name-free') }}
                    <?php elseif(theme()->getOption('product', 'name-pro')):?>
                    {{ theme()->getOption('product', 'name-pro') }}
                    <?php else:?>
                    {{ theme()->getOption('product', 'name') }}
                    <?php endif?>
                </span>
                <span class="d-inline-block position-absolute h-8px bottom-0 end-0 start-0 bg-success translate rounded"></span>
            </span>
            </h1>

            <div class="fw-bold fs-2 text-gray-500 mb-10">
                The most advanced <span class="fw-bolder text-gray-900">Bootstrap 5</span>&nbsp;foundation with a solid design system, <br/>
                extensive utility classes and custom made <span class="fw-bolder text-gray-900">in-house</span>&nbsp;components.
            </div>
        </div>
        <!--end::Block-->

        <!--begin::Row-->
        <div class="row g-0">
        @foreach($items as $item)
            <!--begin::Col-->
                <div class="col-md-6 mb-10">
                    <div class="bg-lighten bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">

                        <div class="d-flex flex-center w-60px h-60px rounded-3 bg-light-{{ $item['color'] }} bg-opacity-90 mb-10">
                            {!! theme()->getSvgIcon($item['icon'], "svg-icon-" . $item['color'] . " svg-icon-3x") !!}
                        </div>

                        <h1 class="mb-5">{{ $item['title'] }}</h1>

                        <div class="fs-4 text-gray-600 py-3">
                            {{ $item['description'] }}
                        </div>

                        <a href="{{ theme()->getPageUrl($item['link-path']) }}" {{ theme()->putProVersionTooltip() }} target="{{ $item['target'] }}" class="btn btn-lg btn-flex btn-link btn-color-{{ $item['color'] }}">
                            {{ $item['link-text'] }}
                            {!! theme()->getSvgIcon("icons/duotune/arrows/arr064.svg", "ms-2 svg-icon-3") !!}
                        </a>
                    </div>
                </div>
                <!--end::Col-->
            @endforeach
        </div>
        <!--end::Row-->
    </div>
    <!--end::Section-->

</x-base-layout>
