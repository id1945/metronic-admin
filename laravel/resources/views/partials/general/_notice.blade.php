@php
    $class = $class ?? '';
    $icon = $icon ?? false;
    $title = $title ?? false;
    $body = $body ?? false;
    $button = $button ?? false;
    $button_label = $button_label ?? 'Button';
    $button_url = $button_url ?? '#';
    $button_modal_id = $button_modal_id ?? false;
    $color = $color ?? 'primary';
    $padding = $padding ?? 'p-6';
    $icon_classes = $icon ? 'ms-15 ms-lg-15' : 'ms-0 ms-lg-0';
@endphp

<!--begin::Notice-->
<div class="notice d-flex bg-light-{{ $color }} rounded border-{{ $color }} border border-dashed {{ $class }} {{ $padding }}">
    @if ($icon)
        <!--begin::Icon-->
        {!! theme()->getSvgIcon($icon, "svg-icon-2tx svg-icon-" . $color . " me-4") !!}
        <!--end::Icon-->
    @endif

    <!--begin::Wrapper-->
    <div class="d-flex flex-stack flex-grow-1 {{ util()->putIf($button, 'flex-wrap flex-md-nowrap') }}">
        @if ($title || $body)
            <!--begin::Content-->
            <div class="{{ util()->putIf($button, 'mb-3 mb-md-0') }} fw-bold">
                @if ($title)
                    <h4 class="text-gray-800 fw-bolder">{{ $title }}</h4>
                @endif

                @if ($body)
                    <div class="fs-6 text-gray-600 @if ($button) {{ 'pe-7' }} @endif">{!! $body !!}</div>
                @endif
            </div>
            <!--end::Content-->
        @endif

        @if ($button)
            <!--begin::Action-->
            <a href="{{ $button_url }}" class="btn btn-{{ $color }} px-6 align-self-center text-nowrap" {{ util()->putIf($button_modal_id, 'data-bs-toggle="modal" data-bs-target="' . $button_modal_id . '"') }}>
                {{ $button_label }}
            </a>
            <!--end::Action-->
        @endif
    </div>
    <!--end::Wrapper-->
</div>
<!--end::Notice-->
