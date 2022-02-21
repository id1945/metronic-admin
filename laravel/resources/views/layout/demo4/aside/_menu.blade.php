<!--begin::Primary menu-->
@php
    $menu = bootstrap()->getAsideMenu();
    \App\Core\Adapters\Menu::filterMenuPermissions($menu->items);
@endphp

<div
    id="kt_aside_menu"
    class="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6"
    data-kt-menu="true">
    {!! $menu->build() !!}
</div>
<!--end::Primary menu-->
