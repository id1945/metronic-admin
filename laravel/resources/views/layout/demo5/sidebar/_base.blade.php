<!--begin::Sidebar-->
<div
    class="sidebar p-5 px-lg-0 py-lg-11"

    data-kt-drawer="true"
    data-kt-drawer-name="sidebar"
	data-kt-drawer-activate="{default: true, lg: false}"
	data-kt-drawer-overlay="true"
	data-kt-drawer-width="275px"
	data-kt-drawer-direction="end"
	data-kt-drawer-toggle="#kt_sidebar_toggle"
>
    <?php if(theme()->getOption('layout', 'sidebar/search') !== false):?>
        {{ theme()->getView('layout/sidebar/__search') }}
    <?php endif?>

    {{ theme()->getView('layout/sidebar/__popular-questions') }}

    {{ theme()->getView('layout/sidebar/__latest-tutorials') }}
</div>
<!--end::Sidebar-->
