@extends('base.base')

@section('content')

    <!--begin::Main-->
    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="docs-page d-flex flex-row flex-column-fluid">
        @include('layout/docs/_aside')

        <!--begin::Wrapper-->
            <div class="docs-wrapper d-flex flex-column flex-row-fluid" id="kt_docs_wrapper">
            @include('layout/docs/_header')

            <!--begin::Content-->
                <div class="docs-content d-flex flex-column flex-column-fluid" id="kt_docs_content">
                    @include('layout/docs/_content')
                </div>
                <!--end::Content-->

                @include('layout/docs/_footer')
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Page-->
    </div>
    <!--end::Main-->

    <!--begin::Drawers-->
    {{--{{ theme()->getView('partials/explore/_main') }}--}}
    <!--end::Drawers-->

    @include('layout/docs/_scrolltop')

@endsection
