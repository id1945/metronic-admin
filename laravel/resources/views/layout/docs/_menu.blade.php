<!--begin::Aside Menu-->
@php
    $menu = new \App\Core\Adapters\Menu(theme()->getOption('menu', 'documentation'), theme()->getPagePath());

    $menu->setItemLinkClass("py-2");

    $menu->addCallback("heading", function($heading) {
        $html  = '<h4 class="menu-content text-muted mb-0 fs-7 text-uppercase">';
        $html .= $heading;
        $html .= '</h4>';

        return $html;
    });
@endphp

<div
    class="hover-scroll-overlay-y mb-5 mb-lg-5"
    id="kt_docs_aside_menu_wrapper"
    data-kt-scroll="true"
    data-kt-scroll-activate="{default: false, lg: true}"
    data-kt-scroll-height="auto"
    data-kt-scroll-dependencies="#kt_docs_aside_logo"
    data-kt-scroll-wrappers="#kt_docs_aside_menu"
    data-kt-scroll-offset="10px"
>
    <!--begin::Menu-->
    <div class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_docs_aside_menu" data-kt-menu="true">
        {!! $menu->build() !!}
    </div>
    <!--end::Menu-->
</div>
