@php
    $menu = bootstrap()->getHorizontalMenu();
    \App\Core\Adapters\Menu::filterMenuPermissions($menu->items);
@endphp

<!--begin::Menu wrapper-->
<div class="header-menu align-items-stretch"
     data-kt-drawer="true"
     data-kt-drawer-name="header-menu"
     data-kt-drawer-activate="{default: true, lg: false}"
     data-kt-drawer-overlay="true"
     data-kt-drawer-width="{default:'200px', '300px': '250px'}"
     data-kt-drawer-direction="start"
     data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"

     data-kt-swapper="true"
     data-kt-swapper-mode="prepend"
     data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
>
    <!--begin::Menu-->
    <div class="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch"
         id="#kt_header_menu"
         data-kt-menu="true"
    >
        {!! $menu->build() !!}
    </div>
    <!--end::Menu-->
</div>
<!--end::Menu wrapper-->
