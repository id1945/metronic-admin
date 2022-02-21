<!--begin::Sidebar-->
<div
    id="kt_sidebar"
    class="sidebar {{ theme()->printHtmlClasses('sidebar', false) }}"

    data-kt-drawer="true"
    data-kt-drawer-name="sidebar"
	data-kt-drawer-activate="{default: true, xxl: false}"
	data-kt-drawer-overlay="true"
	data-kt-drawer-width="{default:'300px', 'lg': '400px'}"
	data-kt-drawer-direction="end"
	data-kt-drawer-toggle="#kt_sidebar_toggler"
    >

    <!--begin::Sidebar Content-->
    <div class="d-flex flex-column sidebar-body px-5 py-10" id="kt_sidebar_body">
        <!--begin::Sidebar Nav-->
        <ul class="sidebar-nav nav nav-tabs mb-10" id="kt_sidebar_tabs" role="tablist">
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" data-kt-countup-tabs="true" href="#kt_sidebar_tab_1">
                    {!! theme()->getSvgIcon("icons/duotune/abstract/abs038.svg") !!}
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" data-kt-countup-tabs="true" href="#kt_sidebar_tab_2">
                    {!! theme()->getSvgIcon("icons/duotune/abstract/abs042.svg") !!}
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" data-kt-countup-tabs="true" href="#kt_sidebar_tab_3">
                    {!! theme()->getSvgIcon("icons/duotune/abstract/abs036.svg") !!}
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" data-kt-countup-tabs="true" href="#kt_sidebar_tab_4">
                    {!! theme()->getSvgIcon("icons/duotune/coding/cod001.svg") !!}
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" data-kt-countup-tabs="true" href="#kt_sidebar_tab_5">
                    {!! theme()->getSvgIcon("icons/duotune/abstract/abs026.svg") !!}
                </a>
            </li>
        </ul>
        <!--end::Sidebar Nav-->

        <!--begin::Sidebar Content-->
        <div id="kt_sidebar_content">
            <div class="hover-scroll-y"
                data-kt-scroll="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-offset="0px"
                data-kt-scroll-dependencies="#kt_sidebar_tabs"
                data-kt-scroll-wrappers="#kt_sidebar_content, #kt_sidebar_body"
            >
                <!--begin::Tab content-->
                <div class="tab-content px-5 px-xxl-10">
                    <!--begin::Tab pane-->
                    <div class="tab-pane fade" id="kt_sidebar_tab_1" role="tabpanel">
                        {{ theme()->getView('layout/sidebar/widgets/_stats', array('category' => 'tasks')) }}

                        {{ theme()->getView('layout/sidebar/widgets/_tasks') }}
                    </div>
                    <!--end::Tab pane-->

                    <!--begin::Tab pane-->
                    <div class="tab-pane fade" id="kt_sidebar_tab_2" role="tabpanel">
                        {{ theme()->getView('layout/sidebar/widgets/_stats', array('category' => 'orders')) }}

                        {{ theme()->getView('layout/sidebar/widgets/_orders') }}
                    </div>
                    <!--end::Tab pane-->

                    <!--begin::Tab pane-->
                    <div class="tab-pane fade show active" id="kt_sidebar_tab_3" role="tabpanel">
                        {{ theme()->getView('layout/sidebar/widgets/_stats', array('category' => 'tickets')) }}

                        {{ theme()->getView('layout/sidebar/widgets/_best-sellers') }}
                    </div>
                    <!--end::Tab pane-->

                    <!--begin::Tab pane-->
                    <div class="tab-pane fade" id="kt_sidebar_tab_4" role="tabpanel">
                        {{ theme()->getView('layout/sidebar/widgets/_stats', array('category' => 'notifcations')) }}

                        {{ theme()->getView('layout/sidebar/widgets/_tasks') }}
                    </div>
                    <!--end::Tab pane-->

                    <!--begin::Tab pane-->
                    <div class="tab-pane fade" id="kt_sidebar_tab_5" role="tabpanel">
                        {{ theme()->getView('layout/sidebar/widgets/_stats', array('category' => 'mail')) }}

                        {{ theme()->getView('layout/sidebar/widgets/_tasks') }}
                    </div>
                    <!--end::Tab pane-->
                </div>
                <!--end::Tab content-->
            </div>
        </div>
        <!--end::Sidebar Content-->
    </div>
    <!--end::Sidebar Content-->
</div>
<!--end::Sidebar-->
