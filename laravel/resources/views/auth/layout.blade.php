@extends('base.base')

@section('content')
    <div class="d-flex flex-column flex-root">
        <!--begin::Authentication-->
        <div
            class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
            style="background-image: url({{ asset(theme()->getIllustrationUrl('14.png')) }})">

            <!--begin::Content-->
            <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                <!--begin::Logo-->
                <a href="{{ $theme->getPageUrl('index') }}" class="mb-12">
                    <img alt="Logo" src="{{ asset(theme()->getMediaUrlPath() . 'logos/logo-2-dark.svg') }}" class="h-45px"/>
                </a>
                <!--end::Logo-->

                <!--begin::Wrapper-->
                <div class="{{ $wrapperClass ?? '' }} bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                    {{ $slot }}
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Content-->

            <!--begin::Footer-->
            <div class="d-flex flex-center flex-column-auto p-10">
                <!--begin::Links-->
                <div class="d-flex align-items-center fw-bold fs-6">
                    <a href="{{ $theme->getOption("general", "about") }}" class="text-muted text-hover-primary px-2">{{ __('About') }}</a>

                    <a href="{{ $theme->getOption('general', 'contact') }}" class="text-muted text-hover-primary px-2">{{ __('Contact Us') }}</a>

                    <a href="{{ $theme->getOption('product', 'purchase') }}" class="text-muted text-hover-primary px-2">{{ __('Purchase') }}</a>
                </div>
                <!--end::Links-->
            </div>
            <!--end::Footer-->
        </div>
        <!--end::Authentication-->
    </div>
@endsection
