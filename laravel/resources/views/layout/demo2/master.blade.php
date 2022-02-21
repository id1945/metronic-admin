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
                <!--begin::Wrapper-->
                <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                {{ theme()->getView('layout/header/_base') }}

                @if (theme()->getOption('layout', 'toolbar/display') === true)
					{{ theme()->getView('layout/_toolbar') }}
				@endif

                <!--begin::Container-->
                    <div id="kt_content_container" class="d-flex flex-column-fluid align-items-start {{ theme()->printHtmlClasses('content-container', false) }}">
                    @if (theme()->getOption('layout', 'aside/display') === true)
						{{ theme()->getView('layout/aside/_base') }}
					@endif

                    <!--begin::Post-->
                        <div class="content flex-row-fluid" id="kt_content">
                            {{ $slot }}
                        </div>
                        <!--end::Post-->
                    </div>
                    <!--end::Container-->

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
