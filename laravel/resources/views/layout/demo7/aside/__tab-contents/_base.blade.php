<div class="d-flex h-100 flex-column">
    <!--begin::Wrapper-->
    <div class="flex-column-fluid hover-scroll-y"
        data-kt-scroll="true"
        data-kt-scroll-activate="true"
        data-kt-scroll-height="auto"
        data-kt-scroll-wrappers="#kt_aside_wordspace"
        data-kt-scroll-dependencies="#kt_aside_secondary_footer"
        data-kt-scroll-offset="0px">

        <!--begin::Tab content-->
        <div class="tab-content">
            @foreach(theme()->getOption('menu', 'aside_tabs') as $tab)
                <!--begin::Tab pane-->
                <div class="tab-pane fade {{ $loop->index === 1 ? 'active show' : '' }}" id="{{ $tab['link'] }}" role="tabpanel">
                    {{ theme()->getView($tab['view']) }}
                </div>
                <!--end::Tab pane-->
            @endforeach
        </div>
        <!--end::Tab content-->
    </div>
    <!--end::Wrapper-->

    <!--begin::Footer-->
    <div class="flex-column-auto pt-10 px-5" id="kt_aside_secondary_footer">
        <a href=" {{ theme()->getPageUrl('documentation/getting-started/overview') }}" class="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-trigger="hover" data-bs-offset="0,5" data-bs-dismiss-="click" title=" {{ theme()->getOption('product', 'tooltips/docs-and-components') }}">
            <span class="btn-label">
                {{ __('Docs & Components') }}
            </span>
            {!! theme()->getSvgIcon("icons/duotune/general/gen005.svg", "btn-icon svg-icon-4 ms-2") !!}
        </a>
    </div>
    <!--end::Footer-->
</div>
