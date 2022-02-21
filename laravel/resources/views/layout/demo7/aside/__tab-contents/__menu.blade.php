@php
    $menu = bootstrap()->getMenu();
    \App\Core\Adapters\Menu::filterMenuPermissions($menu->items);
@endphp

<!--begin::Menu-->
<div class="menu menu-column menu-fit menu-rounded menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-5 px-6 my-5 my-lg-0"
    id="kt_aside_menu"
    data-kt-menu="true">

    <div id="kt_aside_menu_wrapper" class="menu-fit">
        {!! $menu->build() !!}
    </div>
</div>
<!--end::Menu-->
