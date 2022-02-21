<!--begin::Activities drawer-->
<div
	id="kt_activities"
	class="bg-white"

	data-kt-drawer="true"
	data-kt-drawer-name="activities"
	data-kt-drawer-activate="true"
	data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
	data-kt-drawer-toggle="#kt_activities_toggle"
	data-kt-drawer-close="#kt_activities_close">

	<div class="card shadow-none">
		<!--begin::Header-->
		<div class="card-header" id="kt_activities_header">
			<h3 class="card-title fw-bolder text-dark">Activity Logs</h3>

			<div class="card-toolbar">
				<button type="button" class="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
					{!! theme()->getSvgIcon("icons/duotune/arrows/arr061.svg", "svg-icon-1") !!}
				</button>
			</div>
		</div>
		<!--end::Header-->

		<!--begin::Body-->
		<div class="card-body position-relative" id="kt_activities_body">
			<!--begin::Content-->
			<div id="kt_activities_scroll"
				class="position-relative scroll-y me-n5 pe-5"

				data-kt-scroll="true"
				data-kt-scroll-height="auto"
				data-kt-scroll-wrappers="#kt_activities_body"
				data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
				data-kt-scroll-offset="5px">

				<!--begin::Timeline items-->
				<div class="timeline">
                    {{ theme()->getView('pages/pages/profile/activity/timeline/items/_item-1', array("compact" => true)) }}

                    {{ theme()->getView('pages/pages/profile/activity/timeline/items/_item-2', array("compact" => true)) }}

                    {{ theme()->getView('pages/pages/profile/activity/timeline/items/_item-3', array("compact" => true)) }}

                    {{ theme()->getView('pages/pages/profile/activity/timeline/items/_item-4', array("compact" => true)) }}

                    {{ theme()->getView('pages/pages/profile/activity/timeline/items/_item-5', array("compact" => true)) }}

                    {{ theme()->getView('pages/pages/profile/activity/timeline/items/_item-6', array("compact" => true)) }}

                    {{ theme()->getView('pages/pages/profile/activity/timeline/items/_item-7', array("compact" => true)) }}

                    {{ theme()->getView('pages/pages/profile/activity/timeline/items/_item-8', array("compact" => true)) }}
				</div>
				<!--end::Timeline items-->
			</div>
			<!--end::Content-->
		</div>
		<!--end::Body-->

		<!--begin::Footer-->
		<div class="card-footer py-5 text-center" id="kt_activities_footer">
			<a href="{{ theme()->getPageUrl('pages/profile/activity') }}" class="btn btn-bg-white text-primary">
				View All Activities {!! theme()->getSvgIcon("icons/duotune/arrows/arr064.svg", "svg-icon-3 svg-icon-primary") !!}
			</a>
		</div>
		<!--end::Footer-->
	</div>
</div>
<!--end::Activities drawer-->
