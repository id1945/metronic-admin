@extends('base.base')

@section('content')

    <!--begin::Main-->
    @if (theme()->getOption('layout', 'main/type') == 'blank')
        <div class="d-flex flex-column flex-root">
            {{ $slot }}
        </div>
    @else
        <!--begin::Root-->
        <div class="d-flex flex-column flex-root">
            <!--begin::Page-->
            <div class="page d-flex flex-column flex-column-fluid">
            {{ theme()->getView('layout/header/_base') }}

            <!--begin::Container-->
                <div id="kt_content_container" class="d-flex flex-column-fluid align-items-stretch {{ theme()->printHtmlClasses('content-container', false) }}">
                    @if (theme()->getOption('layout', 'aside/display') === true)
                        {{ theme()->getView('layout/_aside') }}
                    @endif

                <!--begin::Wrapper-->
                    <div class="wrapper d-flex flex-column flex-row-fluid mt-5 mt-lg-10" id="kt_wrapper">
                        <!--begin::Content-->
                        <div class="content flex-column-fluid" id="kt_content">
                        @if (theme()->getOption('layout', 'toolbar/display') !== false)
                            {{ theme()->getView('layout/_toolbar') }}
                        @endif

                        <!--begin::Post-->
                            <div class="post" id="kt_post">
                                {{ $slot }}
                            </div>
                            <!--end::Post-->
                        </div>
                        <!--end::Content-->

                        {{ theme()->getView('layout/_footer') }}
                    </div>
                    <!--end::Wrapper-->

                    @if (theme()->getOption('layout', 'sidebar/display') === true)
                        {{ theme()->getView('layout/sidebar/_base')  }}
                    @endif
                </div>
                <!--end::Container-->
            </div>
            <!--end::Page-->
        </div>
        <!--end::Root-->

        <!--begin::Drawers-->
        {{ theme()->getView('partials/topbar/_activity-drawer') }}
        {{ theme()->getView('partials/explore/_main') }}
        <!--end::Drawers-->

        @if(theme()->getOption('layout', 'scrolltop/display') === true)
            {{ theme()->getView('layout/_scrolltop') }}
        @endif
    @endif
    <!--end::Main-->

@endsection
