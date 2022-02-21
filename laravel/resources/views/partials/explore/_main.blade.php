<!--begin::Exolore drawer toggle-->
<button
    id="kt_explore_toggle"
    class="btn btn-sm btn-white btn-active-primary shadow-sm position-fixed px-5 fw-bolder zindex-2 top-50 mt-10 end-0 transform-90 fs-6 rounded-top-0"
    title="Explore {{ theme()->getOption('product', 'name')  }}"
    data-bs-toggle="tooltip"
    data-bs-placement="right"
    data-bs-trigger="hover">
    <span id="kt_explore_toggle_label">Explore</span>
</button>
<!--end::Exolore drawer toggle-->

<!--begin::Exolore drawer-->
<div
    id="kt_explore"
    class="bg-white"
    data-kt-drawer="true"
    data-kt-drawer-name="explore"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '375px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_explore_toggle"
    data-kt-drawer-close="#kt_explore_close">

    <!--begin::Card-->
    <div class="card shadow-none w-100">
        <!--begin::Header-->
        <div class="card-header" id="kt_explore_header">
            <h3 class="card-title fw-bolder text-gray-700">{{ __('Explore Metronic') }}</h3>

            <div class="card-toolbar">
                <button type="button" class="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_explore_close">
                    {!! theme()->getSvgIcon("icons/duotune/arrows/arr061.svg", "svg-icon-2") !!}
                </button>
            </div>
        </div>
        <!--end::Header-->

        <!--begin::Body-->
        <div class="card-body" id="kt_explore_body">
            <!--begin::Content-->
            <div
                id="kt_explore_scroll"
                class="scroll-y me-n5 pe-5"
                data-kt-scroll="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-wrappers="#kt_explore_body"
                data-kt-scroll-dependencies="#kt_explore_header, #kt_explore_footer"
                data-kt-scroll-offset="5px">

                <!--begin::Demos-->
                <div class="mb-0">
                @foreach(theme()->getOption('product', 'demos') ?? [] as $id => $demo)
                    <!--begin::Demo-->
                        <div class="mb-7">
                            <h3 class="fw-bold text-center mb-3">{{ ucfirst($id) }}</h3>

                            <div class="overlay overflow-hidden border border-4 {{ $id === theme()->getDemo() ? 'border-primary' : '' }} p-2 rounded">
                                @if($demo['published'] === true)
                                    <div class="overlay-wrapper rounded">
                                        <img src="{{ asset(theme()->getMediaUrlPath() . $demo["thumbnail"]) }}" alt="demo" class="w-100 rounded"/>
                                    </div>

                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                        <a href="{{ url()->current() . '?demo=' . $id }}" class="btn btn-primary shadow">Preview</a>
                                    </div>
                                @else
                                    <div class="overlay-wrapper">
                                        <img src="{{ asset(theme()->getMediaUrlPath() . $demo["thumbnail"]) }}" alt="demo" class="w-100 rounded opacity-75"/>
                                    </div>

                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                        <div class="badge badge-white px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
                                    </div>
                                @endif
                            </div>
                        </div>
                        <!--end::Demo-->
                    @endforeach
                </div>
                <!--end::Demos-->
            </div>
            <!--end::Content-->
        </div>
        <!--end::Body-->

        <!--begin::Footer-->
        <div class="card-footer py-5 text-center" id="kt_explore_footer">
            <a href="{{ theme()->getOption('product', 'purchase') }}" class="btn btn-primary">
                Purchase {{ theme()->getOption('product', 'name')  }}
            </a>
        </div>
        <!--end::Footer-->
    </div>
    <!--end::Card-->
</div>
<!--end::Exolore drawer-->

