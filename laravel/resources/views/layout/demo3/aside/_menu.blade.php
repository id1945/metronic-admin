<!--begin::Aside Menu-->
@php
    $menu = bootstrap()->getMenu();
    \App\Core\Adapters\Menu::filterMenuPermissions($menu->items);
@endphp

<div
    class="w-100 hover-scroll-overlay-y d-flex pe-2"
    id="kt_aside_menu_wrapper"

    data-kt-scroll="true"
    data-kt-scroll-activate="{default: false, lg: true}"
    data-kt-scroll-height="auto"
    data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
    data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper"
    data-kt-scroll-offset="100"
>
    <!--begin::Menu-->
    <div class="menu menu-column menu-rounded fw-bold my-auto" id="#kt_aside_menu" data-kt-menu="true">
        {!! $menu->build() !!}
    </div>
    <!--end::Menu-->
</div>
<!--end::Aside Menu-->
