<!--begin::Wrapper-->
<div class="hover-scroll-y mb-10"
    data-kt-scroll="true"
    data-kt-scroll-activate="{default: false, lg: true}"
    data-kt-scroll-height="auto"
    data-kt-scroll-wrappers="#kt_aside_nav"
    data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
    data-kt-scroll-offset="0px"
 >
    <!--begin::Nav-->
    <ul class="nav flex-column">
        @foreach(theme()->getOption('menu', 'aside_tabs') as $tab)
            <!--begin::Nav item-->
            <li class="nav-item mb-2" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="right" data-bs-dismiss="click" title="{{ $tab['tooltip'] }}">
                <!--begin::Nav link-->
                <a class="nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light {{ $loop->index === 1 ? 'active' : '' }}" data-bs-toggle="tab"  href="#{{ $tab['link'] }}">
                    {!! theme()->getSvgIcon($tab['icon'], "svg-icon-2x") !!}
                </a>
                <!--end::Nav link-->
            </li>
            <!--end::Nav item-->
        @endforeach
    </ul>
    <!--end::Tabs-->
</div>
<!--end::Nav-->

