<!--begin::Aside-->
<div
	id="kt_aside"
	class="aside aside-extended bg-white {{ theme()->printHtmlClasses('aside', false) }}"
	data-kt-drawer="true"
	data-kt-drawer-name="aside"
	data-kt-drawer-activate="{default: true, lg: false}"
	data-kt-drawer-overlay="true"
	data-kt-drawer-width="auto"
	data-kt-drawer-direction="start"
	data-kt-drawer-toggle="#kt_aside_toggle"
	>

	<!--begin::Primary-->
	<div class="aside-primary d-flex flex-column align-items-lg-center flex-row-auto">
		<!--begin::Logo-->
		<div class="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10" id="kt_aside_logo">
			<a href=" {{ theme()->getPageUrl('index') }}">
				<img alt="Logo" src=" {{ asset(theme()->getMediaUrlPath() . 'logos/logo-demo7.svg') }}" class="h-30px"/>
			</a>
		</div>
		<!--end::Logo-->

		<!--begin::Nav-->
		<div class="aside-nav d-flex flex-column align-items-center flex-column-fluid w-100 pt-5 pt-lg-0" id="kt_aside_nav">
			 {{ theme()->getView('layout/aside/__tabs') }}
		</div>
		<!--end::Nav-->

		<!--begin::Footer-->
		<div class="aside-footer d-flex flex-column align-items-center flex-column-auto" id="kt_aside_footer">
			<!--begin::Quick links-->
			<div class="d-flex align-items-center mb-2">
				<!--begin::Menu wrapper-->
				<div class="btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
					data-kt-menu-trigger="click"
					data-kt-menu-overflow="true"
					data-kt-menu-placement="top-start"
					data-bs-toggle="tooltip"
					data-bs-placement="right"
					data-bs-dismiss="click"
					title="Quick links"
				>
					{!! theme()->getSvgIcon("icons/duotune/general/gen022.svg", "svg-icon-2 svg-icon-lg-1") !!}
				</div>

				 {{ theme()->getView('partials/topbar/_quick-links-menu', array('quick-bg' => 'misc/dropdown-header-bg.png')) }}
				<!--end::Menu wrapper-->
			</div>
			<!--end::Quick links-->

			<!--begin::Notifications-->
			<div class="d-flex align-items-center mb-2">
				<!--begin::Menu wrapper-->
				<div class="btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
					data-kt-menu-trigger="click"
					data-kt-menu-overflow="true"
					data-kt-menu-placement="top-start"
					data-bs-toggle="tooltip"
					data-bs-placement="right"
					data-bs-dismiss="click"
					title="Notifications">
					{!! theme()->getSvgIcon("icons/duotune/general/gen025.svg", "svg-icon-2 svg-icon-lg-1") !!}
				</div>

				 {{ theme()->getView('partials/topbar/_notifications-menu', array('notifications-bg' => 'misc/dropdown-header-bg.png')) }}
				<!--end::Menu wrapper-->
			</div>
			<!--end::Notifications-->

			<!--begin::Activities-->
			<div class="d-flex align-items-center mb-3">
				<!--begin::Drawer toggle-->
				<div class="btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
				data-kt-menu-trigger="click"
				data-kt-menu-overflow="true"
				data-kt-menu-placement="top-start"
				data-bs-toggle="tooltip"
				data-bs-placement="right"
				data-bs-dismiss="click"
				title="Activity Logs"
				id="kt_activities_toggle">
					{!! theme()->getSvgIcon("icons/duotune/general/gen032.svg", "svg-icon-2 svg-icon-lg-1") !!}
				</div>
				<!--end::drawer toggle-->
			</div>
			<!--end::Activities-->

			<!--begin::User-->
			<div class="d-flex align-items-center mb-10" id="kt_header_user_menu_toggle">
				<!--begin::Menu wrapper-->
				<div class="cursor-pointer symbol symbol-40px"
				data-kt-menu-trigger="click"
				data-kt-menu-overflow="true"
				data-kt-menu-placement="top-start"
				data-bs-toggle="tooltip"
				data-bs-placement="right"
				data-bs-dismiss="click"
				title="User profile"
				>
					<img src=" {{ auth()->user()->avatar_url }}" alt="metronic"/>
				</div>

				 {{ theme()->getView('partials/topbar/_user-menu', array('language-menu-placement' => 'right-end', 'subscription-menu-placement' => 'right-end')) }}
				<!--end::Menu wrapper-->
			</div>
			<!--end::User-->
		</div>
		<!--end::Footer-->
	</div>
	<!--end::Primary-->

	@if(theme()->getOption('layout', 'aside/secondary-display') === true)
		<!--begin::Secondary-->
		<div class="aside-secondary d-flex flex-row-fluid">
			<!--begin::Workspace-->
			<div class="aside-workspace my-5 p-5" id="kt_aside_wordspace">
				 {{ theme()->getView('layout/aside/__tab-contents/_base') }}
			</div>
			<!--end::Workspace-->
		</div>
		<!--end::Secondary-->

		<!--begin::Aside Toggle-->
		<button class="btn btn-sm btn-icon btn-white btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex  {{ theme()->printHtmlClasses('asideToggle', false) }}"
			data-kt-toggle="true"
			data-kt-toggle-state="active"
			data-kt-toggle-target="body"
			data-kt-toggle-name="aside-minimize"

			style="margin-bottom: 1.35rem">

			{!! theme()->getSvgIcon("icons/duotune/arrows/arr063.svg", "svg-icon-2 rotate-180") !!}
		</button>
		<!--end::Aside Toggle-->
	@endif
</div>
<!--end::Aside-->

