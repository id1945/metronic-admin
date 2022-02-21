@php
    $breadcrumb = bootstrap()->getBreadcrumb();
@endphp

<!--begin::Page title-->
<div {{ theme()->printHtmlAttributes("page-title") }} class="page-title d-flex flex-column py-1">
    <!--begin::Title-->
    <h1 class="d-flex align-items-center my-1">
        <span class="text-dark fw-bolder fs-1">
            {{ theme()->getOption('page', 'title') }}
        </span>

        <?php if (!empty(theme()->hasOption('page', 'description')) && theme()->getOption('layout', 'page-title/description') !== false):?>
            <!--begin::Description-->
            <small class="text-muted fs-6 fw-bold ms-1">
                {{ theme()->getOption('page', 'description') }}
            </small>
            <!--end::Description-->
        <?php endif?>
    </h1>
    <!--end::Title-->

    <?php if ( theme()->getOption('layout', 'page-title/breadcrumb') === true && !empty($breadcrumb)):?>
        <!--begin::Breadcrumb-->
        <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 {{ theme()->getOption('layout', 'page-title/direction') === 'row' ? 'my-1' : 'pt-1' }}">
            <?php foreach ($breadcrumb as $item):?>
                <!--begin::Item-->
                <?php if ( $item['active'] === true ):?>
                    <li class="breadcrumb-item text-dark">
                        {{ $item['title'] }}
                    </li>
                <?php else:?>
                    <li class="breadcrumb-item text-muted">
                        <?php if ( ! empty($item['path']) ):?>
                            <a href="{{ theme()->getPageUrl($item['path']) }}" class="text-muted text-hover-primary">
                                {{ $item['title'] }}
                            </a>
                        <?php else:?>
                            {{ $item['title'] }}
                        <?php endif?>
                    </li>
                <?php endif?>
                <!--end::Item-->
                <?php if (next($breadcrumb)):?>
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                <?php endif?>
            <?php endforeach?>
        </ul>
        <!--end::Breadcrumb-->
    <?php endif;?>
</div>
<!--end::Page title-->
