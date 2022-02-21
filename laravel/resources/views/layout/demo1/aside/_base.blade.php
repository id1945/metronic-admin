@php
    $logoFileName = 'logo-1-dark.svg';

    if (theme()->getOption('layout', 'aside/theme') === 'light') {
        $logoFileName = 'logo-1.svg';
    }
@endphp

{{--begin::Aside--}}
<div
    id="kt_aside"
    class="aside {{ theme()->printHtmlClasses('aside', false) }}"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_mobile_toggle"
>

    {{--begin::Brand--}}
    <div class="aside-logo flex-column-auto" id="kt_aside_logo">
        {{--begin::Logo--}}
        <a href="{{ theme()->getPageUrl('index') }}">
            <img alt="Logo" src="{{ asset(theme()->getMediaUrlPath() . 'logos/' . $logoFileName) }}" class="h-25px logo"/>
        </a>
        {{--end::Logo--}}

        @if (theme()->getOption('layout', 'aside/minimize') === true)
            {{--begin::Aside toggler--}}
            <div id="kt_aside_toggle" class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
                 data-kt-toggle="true"
                 data-kt-toggle-state="active"
                 data-kt-toggle-target="body"
                 data-kt-toggle-name="aside-minimize"
            >

                {!! theme()->getSvgIcon("icons/duotune/arrows/arr080.svg", "svg-icon-1 rotate-180") !!}
            </div>
            {{--end::Aside toggler--}}
        @endif
    </div>
    {{--end::Brand--}}

    {{--begin::Aside menu--}}
    <div class="aside-menu flex-column-fluid">
        {{ theme()->getView('layout/aside/_menu') }}
    </div>
    {{--end::Aside menu--}}

    {{--begin::Footer--}}
    <div class="aside-footer flex-column-auto pt-5 pb-7 px-5" id="kt_aside_footer">
        <a href="{{ theme()->getPageUrl('documentation/getting-started/overview') }}" class="btn btn-custom btn-primary w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-delay-show="8000" title="Check out the complete documentation with over 100 components">
        <span class="btn-label">
            {{ __('Documentation') }}
        </span>
            {!! theme()->getSvgIcon("icons/duotune/general/gen005.svg", "btn-icon svg-icon-2") !!}
        </a>
    </div>
    {{--end::Footer--}}
</div>
{{--end::Aside--}}
