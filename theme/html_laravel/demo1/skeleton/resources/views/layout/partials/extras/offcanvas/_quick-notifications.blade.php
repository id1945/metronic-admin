@php
	$direction = config('layout.extras.notifications.offcanvas.direction', 'right');
@endphp
 {{-- Notifications Panel --}}
<div id="kt_quick_notifications" class="offcanvas offcanvas-{{ $direction }} p-10">
	{{-- Header --}}
	<div class="offcanvas-header d-flex align-items-center justify-content-between mb-10">
		<h3 class="font-weight-bold m-0">
			Notifications
			<small class="text-muted font-size-sm ml-2">24 New</small>
		</h3>
		<a href="#" class="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_notifications_close">
			<i class="ki ki-close icon-xs text-muted"></i>
		</a>
	</div>

	{{-- Content --}}
	<div class="offcanvas-content pr-5 mr-n5">
		{{-- Nav --}}
		<div class="navi navi-icon-circle navi-spacer-x-0">
			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon-bell text-success icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold font-size-lg">
							5 new user generated report
						</div>
						<div class="text-muted">
							Reports based on sales
						</div>
					</div>
				</div>
			</a>

			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon2-box text-danger icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold  font-size-lg">
							2 new items submited
						</div>
						<div class="text-muted">
							by Grog John
						</div>
					</div>
				</div>
			</a>

			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon-psd text-primary icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold  font-size-lg">
							79 PSD files generated
						</div>
						<div class="text-muted">
							Reports based on sales
						</div>
					</div>
				</div>
			</a>

			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon2-supermarket text-warning icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold  font-size-lg">
							$2900 worth producucts sold
						</div>
						<div class="text-muted">
							Total 234 items
						</div>
					</div>
				</div>
			</a>

			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon-paper-plane-1 text-success icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold  font-size-lg">
							4.5h-avarage response time
						</div>
						<div class="text-muted">
							Fostest is Barry
						</div>
					</div>
				</div>
			</a>

			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon-safe-shield-protection text-danger icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold  font-size-lg">
							3 Defence alerts
						</div>
						<div class="text-muted">
							40% less alerts thar last week
						</div>
					</div>
				</div>
			</a>

			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon-notepad text-primary icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold  font-size-lg">
							Avarage 4 blog posts per author
						</div>
						<div class="text-muted">
							Most posted 12 time
						</div>
					</div>
				</div>
			</a>

			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon-users-1 text-warning icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold  font-size-lg">
							16 authors joined last week
						</div>
						<div class="text-muted">
							9 photodrapehrs, 7 designer
						</div>
					</div>
				</div>
			</a>

			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon2-box text-info icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold  font-size-lg">
							2 new items have been submited
						</div>
						<div class="text-muted">
							by Grog John
						</div>
					</div>
				</div>
			</a>

			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon2-download text-success icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold  font-size-lg">
							2.8 GB-total downloads size
						</div>
						<div class="text-muted">
							Mostly PSD end  AL concepts
						</div>
					</div>
				</div>
			</a>

			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon2-supermarket text-danger icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold  font-size-lg">
							$2900 worth producucts sold
						</div>
						<div class="text-muted">
							Total 234 items
						</div>
					</div>
				</div>
			</a>

			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon-bell text-primary icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold  font-size-lg">
							7 new user generated report
						</div>
						<div class="text-muted">
							Reports based on sales
						</div>
					</div>
				</div>
			</a>

			{{-- Item --}}
			<a href="#" class="navi-item">
				<div class="navi-link rounded">
					<div class="symbol symbol-50 symbol-circle mr-3">
						<div class="symbol-label"><i class="flaticon-paper-plane-1 text-success icon-lg"></i></div>
					</div>
					<div class="navi-text">
						<div class="font-weight-bold  font-size-lg">
							4.5h-avarage response time
						</div>
						<div class="text-muted">
							Fostest is Barry
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>
