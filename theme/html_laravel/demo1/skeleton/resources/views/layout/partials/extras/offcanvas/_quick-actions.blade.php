@php
	$direction = config('layout.extras.quick-actions.offcanvas.direction', 'right');
@endphp
{{-- Quick Actions Panel --}}
<div id="kt_quick_actions" class="offcanvas offcanvas-{{ $direction }} p-10">
	{{-- Header --}}
	<div class="offcanvas-header d-flex align-items-center justify-content-between pb-10">
		<h3 class="font-weight-bold m-0">
			Quick Actions
			<small class="text-muted font-size-sm ml-2">finance & reports</small>
		</h3>
		<a href="#" class="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_actions_close">
			<i class="ki ki-close icon-xs text-muted"></i>
		</a>
	</div>

	{{-- Content --}}
	<div class="offcanvas-content pr-5 mr-n5">
		<div class="row gutter-b">
			{{-- Item --}}
			<div class="col-6">
				<a href="#" class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5">
		            {{ Metronic::getSVG("media/svg/icons/Shopping/Euro.svg", "svg-icon-3x svg-icon-primary m-0") }}
		            <span class="d-block font-weight-bold font-size-h6 mt-2">Accounting</span>
		        </a>
			</div>

			{{-- Item --}}
			<div class="col-6">
				<a href="#" class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5">
		            {{ Metronic::getSVG("media/svg/icons/Communication/Mail-attachment.svg", "svg-icon-3x svg-icon-primary m-0") }}
		            <span class="d-block font-weight-bold font-size-h6 mt-2">Members</span>
		        </a>
			</div>
		</div>
		<div class="row gutter-b">
			{{-- Item --}}
			<div class="col-6">
				<a href="#" class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5">
		            {{ Metronic::getSVG("media/svg/icons/Shopping/Box2.svg", "svg-icon-3x svg-icon-primary m-0") }}
		            <span class="d-block font-weight-bold font-size-h6 mt-2">Projects</span>
		        </a>
			</div>

			{{-- Item --}}
			<div class="col-6">
				<a href="#" class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5">
		            {{ Metronic::getSVG("media/svg/icons/Communication/Group.svg", "svg-icon-3x svg-icon-primary m-0") }}
		            <span class="d-block font-weight-bold font-size-h6 mt-2">Customers</span>
		        </a>
			</div>
		</div>
		<div class="row gutter-b">
			{{-- Item --}}
			<div class="col-6">
				<a href="#" class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5">
		            {{ Metronic::getSVG("media/svg/icons/Shopping/Chart-bar1.svg", "svg-icon-3x svg-icon-primary m-0") }}
		            <span class="d-block font-weight-bold font-size-h6 mt-2">Email</span>
		        </a>
			</div>

			{{-- Item --}}
			<div class="col-6">
				<a href="#" class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5">
		            {{ Metronic::getSVG("media/svg/icons/Design/Color-profile.svg", "svg-icon-3x svg-icon-primary m-0") }}
		            <span class="d-block font-weight-bold font-size-h6 mt-2">Settings</span>
		        </a>
			</div>
		</div>
		<div class="row">
			{{-- Item --}}
			<div class="col-6">
				<a href="#" class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5">
		            {{ Metronic::getSVG("media/svg/icons/Shopping/Euro.svg", "svg-icon-3x svg-icon-primary m-0") }}
		            <span class="d-block font-weight-bold font-size-h6 mt-2">Orders</span>
		        </a>
			</div>
	    </div>
	</div>
</div>
