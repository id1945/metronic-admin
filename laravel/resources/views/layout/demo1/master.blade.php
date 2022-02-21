@extends('base.base')

@section('content')

    <!--begin::Main-->
    @if (theme()->getOption('layout', 'main/type') === 'blank')
        <div class="d-flex flex-column flex-root">
            {{ $slot }}
        </div>
    @else
        <!--begin::Root-->
        <div class="d-flex flex-column flex-root">
            <!--begin::Page-->
            <div class="page d-flex flex-row flex-column-fluid">
            @if( theme()->getOption('layout', 'aside/display') === true )
                {{ theme()->getView('layout/aside/_base') }}
            @endif

                <!--begin::Wrapper-->
                <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                {{ theme()->getView('layout/header/_base') }}

                    <!--begin::Content-->
                    <div class="content d-flex flex-column flex-column-fluid {{ theme()->printHtmlClasses('content', false) }}" id="kt_content">
                    @if (theme()->getOption('layout', 'toolbar/display') === true)
                        {{ theme()->getView('layout/toolbars/_' . theme()->getOption('layout', 'toolbar/layout')) }}
                    @endif

                        <!--begin::Post-->
                        <div class="post d-flex flex-column-fluid" id="kt_post">
                            {{ theme()->getView('layout/_content', compact('slot')) }}
                        </div>
                        <!--end::Post-->
                    </div>
                    <!--end::Content-->

                    {{ theme()->getView('layout/_footer') }}
                </div>
                <!--end::Wrapper-->
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
