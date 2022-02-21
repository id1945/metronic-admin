@php
    $breadcrumb = bootstrap()->getBreadcrumb();

    if (theme()->getOption('layout', 'page-title/direction') == 'column') {
        $baseClass = 'flex-column align-items-start me-3';
    } else {
        $baseClass = 'align-items-center me-3';
    }

    $attr = array();
    if (theme()->getOption('layout', 'toolbar/fixed/desktop') === true && theme()->getOption('layout', 'toolbar/fixed/tablet-and-mobile') === true && theme()->getOption('layout', 'page-title/responsive') === true) {
        $baseClass .= " flex-wrap mb-5 mb-lg-0 lh-1";
    }
@endphp

<!--begin::Page title-->
<div {{ theme()->printHtmlAttributes("page-title") }} class="d-flex {{ $baseClass }}">
    <!--begin::Title-->
    <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-3">
    {{ theme()->getOption('page', 'title') }}

    @if (theme()->hasOption('page', 'description') && theme()->getOption('layout', 'page-title/description') === true)
        <!--begin::Separator-->
            <span class="h-20px border-gray-200 border-start ms-3 mx-2"></span>
            <!--end::Separator-->

            <!--begin::Description-->
            <small class="text-muted fs-7 fw-bold my-1 ms-1">
                {{ theme()->getOption('page', 'description') }}
            </small>
            <!--end::Description-->
        @endif
    </h1>
    <!--end::Title-->

@if ( theme()->getOption('layout', 'page-title/breadcrumb') === true && !empty($breadcrumb))
    @if (theme()->getOption('layout', 'page-title/direction') === 'row')
        <!--begin::Separator-->
            <span class="h-20px border-gray-200 border-start mx-4"></span>
            <!--end::Separator-->
    @endif

    <!--begin::Breadcrumb-->
        <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
        @foreach ($breadcrumb as $item)
            <!--begin::Item-->
                @if ( $item['active'] === true )
                    <li class="breadcrumb-item text-dark">
                        {{ $item['title'] }}
                    </li>
                @else
                    <li class="breadcrumb-item text-muted">
                        @if ( ! empty($item['path']) )
                            <a href="{{ theme()->getPageUrl($item['path']) }}" class="text-muted text-hover-primary">
                                {{ $item['title'] }}
                            </a>
                        @else
                            {{ $item['title'] }}
                        @endif
                    </li>
                @endif
            <!--end::Item-->
                @if (next($breadcrumb))
                <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                @endif
            @endforeach
        </ul>
        <!--end::Breadcrumb-->
    @endif
</div>
<!--end::Page title-->
