@php
    $breadcrumb = bootstrap()->getBreadcrumb();
@endphp

<!--begin::Page title-->
<div
    class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-20 pb-2 pb-lg-0"
    data-kt-swapper="true"
    data-kt-swapper-mode="prepend"
    data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_wrapper'}">

    <!--begin::Heading-->
    <h1 class="text-dark fw-bolder my-1 fs-3 lh-1">
        {{ theme()->getOption('page', 'title') }}
        @if (theme()->getOption('layout', 'page-title/description') && theme()->hasOption('page', 'description'))
            <small class="text-muted fs-6 fw-normal ms-1">{{ theme()->getOption('page', 'description') }}</small>
        @endif
    </h1>
    <!--end::Heading-->

@if ( theme()->getOption('layout', 'page-title/breadcrumb') && !empty($breadcrumb) )
    <!--begin::Breadcrumb-->
        <ul class="breadcrumb fw-bold fs-8 my-1">
            @foreach ($breadcrumb as $item)
                @if ( $item['active'] === true )
                    <li class="breadcrumb-item text-dark">
                        {{ $item['title'] }}
                    </li>
                @else
                    <li class="breadcrumb-item text-muted">
                        @if ( ! empty($item['path']) )
                            <a href="{{ theme()->getPageUrl($item['path']) }}" class="text-muted">
                                {{ $item['title'] }}
                            </a>
                        @else
                            {{ $item['title'] }}
                        @endif
                    </li>
                @endif
            @endforeach
        </ul>
        <!--end::Breadcrumb-->
    @endif
</div>
<!--end::Page title--->
