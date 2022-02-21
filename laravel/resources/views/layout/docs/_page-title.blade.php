@php
    $path = theme()->getPagePath();
    $path_parts = explode("/", $path);
    $title = util()->camelize($path_parts[1], '-');

    $options = array(
        'skip-active' => false,
        'home' => array(
            'title' => $title,
            'active' => false
        )
    );

    $menu = new \App\Core\Adapters\Menu(theme()->getOption('menu', 'documentation'), theme()->getPagePath());

    $breadcrumb = $menu->getBreadcrumb($options);
@endphp

<!--begin::Page title-->
<div class="docs-page-title d-flex flex-column flex-lg-row align-items-lg-center py-5 mb-lg-0"
     data-kt-swapper="true"
     data-kt-swapper-mode="prepend"
     data-kt-swapper-parent="{default: '#kt_docs_content_container', 'lg': '#kt_docs_header_title'}"
>

    <!--begin::Title-->
    <h1 class="d-flex align-items-center text-dark my-1 fs-4">
        {{ __('Documentation') }}

        <a href="{{ theme()->getPageUrl('documentation/getting-started/changelog') }}" class="badge fw-bold fs-9 px-2 ms-2 {{ util()->putIf(theme()->isDarkMode(), 'badge-light-success text-hover-success', 'badge-white text-hover-primary shadow-sm') }}">
            v{{ theme()->getVersion() }}
        </a>

        @if (!empty(theme()->hasOption('page', 'description')) && theme()->getOption('layout', 'page-title/description') !== false)
        <!--begin::Separator-->
            <span class="d-none d-lg-block bullet h-20px w-1px bg-secondary mx-4"></span>
            <!--end::Separator-->

            <!--begin::Description-->
            <small class="text-gray-700 fs-7 fw-bold my-1 ms-1">
                {{ theme()->getOption('page', 'description') }}
            </small>
            <!--end::Description-->
        @endif
    </h1>
    <!--end::Title-->

@if (!empty($breadcrumb))
        <!--begin::Separator-->
        <span class="d-none d-lg-block bullet h-20px w-1px bg-secondary mx-4"></span>
        <!--end::Separator-->

        <!--begin::Breadcrumb-->
        <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-6 my-1">
        @foreach ($breadcrumb as $item)
            <!--begin::Item-->
                @if ( $item['active'] === true )
                    <li class="breadcrumb-item text-dark">
                        {{ $item['title'] }}

                        @if (theme()->getOption('page', 'exclusive') === true)
                            <span class="badge badge-success fw-bold fs-9 px-2 ms-2 cursor-default ms-2" data-bs-toggle="tooltip" title="Developed in-house for Metronic">Exclusive</span>
                        @endif
                    </li>
                @else
                    <li class="breadcrumb-item text-gray-600">
                        @if ( !empty($item['path']) )
                            <a href="{{ theme()->getPageUrl($item['path']) }}" class="text-gray-600 text-hover-primary">
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
                        <span class="bullet w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                @endif
            @endforeach
        </ul>
        <!--end::Breadcrumb-->
    @endif
</div>
<!--end::Page title-->
