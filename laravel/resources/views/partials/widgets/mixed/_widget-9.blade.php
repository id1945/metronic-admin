<!--begin::Mixed Widget 9-->
<div class="card {{ $class }}">
    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
        <div class="flex-grow-1">
            <!--begin::Info-->
            <div class="d-flex align-items-center pe-2 mb-5">
                <span class="text-muted fw-bolder fs-5 flex-grow-1">
                    {{ $time ?? '' }}
                </span>

                <div class="symbol symbol-50px">
                    <span class="symbol-label bg-light">
                        <img src="{{ asset(theme()->getMediaUrlPath() . $image ?? '') }}" class="h-50 align-self-center" alt=""/>
                    </span>
                </div>
            </div>
            <!--end::Info-->

            <!--begin::Link-->
            <a href="#" class="text-dark fw-bolder text-hover-primary fs-4">
                {{ $title ?? '' }}
            </a>
            <!--end::Link-->

            <!--begin::Desc-->
            <p class="py-3">
                {{ $description ?? '' }}
            </p>
            <!--end::Desc-->
        </div>

        <!--begin::Team-->
        <div class="d-flex align-items-center">
            <a href="#" class="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="Ana Stone">
                <img src="{{ asset(theme()->getMediaUrlPath() . 'avatars/150-1.jpg') }}" alt=""/>
            </a>

            <a href="#" class="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="Mark Larson">
                <img src="{{ asset(theme()->getMediaUrlPath() . 'avatars/150-4.jpg') }}" alt=""/>
            </a>

            <a href="#" class="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="Sam Harris">
                <img src="{{ asset(theme()->getMediaUrlPath() . 'avatars/150-8.jpg') }}" alt=""/>
            </a>
        </div>
        <!--end::Team-->
    </div>
    <!--end::Body-->
</div>
<!--end::Mixed Widget 9-->
